/*
 	公共函数:封装，减少代码量，后面专注使用
 */

/*
 	getid():通过id查找节点 
*/

function getid(id) {
	return document.getElementById(id);
}

/*
 	ranNum():生成四位数(数字)随机数 
*/

//function ranNum() {
//	var html = ''; //用于存随机数的变量
//	for(var i = 0; i < 4; i++) {
//		//随机数：0-9
//		html += parseInt(Math.random() * 10); //0-9
//	}
//	//	console.log(html);
//	return html; //返回值
//}

/*
 	随机颜色
 	randomColor(type)
 	参数：
 		type ：
 			16 返回16进制颜色
 			rgb：返回rbg颜色
 		
 */

function randomColor(type) {
	if (type == 16) {
		//当传过来的实参是16，就生成16进制的随机颜色返回
		var str = '0123456789abcdef';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			var num = randomNum(0, 15);
			color += str[num];
		}

		return color; // #162743
	} else if (type == 'rgb') {
		//如果传过来的实参是；rgb，就返回rgb颜色
		var r = randomNum(0, 255);
		var g = randomNum(0, 255);
		var b = randomNum(0, 255);

		return 'rgb(' + r + ',' + g + ',' + b + ')';
	}
}

/*
 	随机验证码：4位随机数包含字母和数字组合的
 
*/
function randomCode() { //2.声明体
	//3.执行代码
	var html = '0987654321qwertyuioplkjhgfdsazxcvbnmZXCVBNMLKJHGFDSAQWERTYUIOP';
	//随机数的范围：0-str.length-1
	console.log(html[2]);
	var res = '';
	for (var i = 0; i < 4; i++) {
		var now = parseInt(Math.random() * html.length); //0-str.length-1
		res += html[now];
	}
	//				console.log(res);//四位随机数
	return res; //4.返回值
}

/*
 	生成随机数：0-n  1-n
 	需求：随机数范围：10-20
 	randomNum(min,max) :能生成任意范围内的随机数
 */

function randomNum(min, max) {
	//随机数
	//	Math.random();//0-1 不包括1
	//	//0-10
	//	parseInt(Math.random() * (n + 1));//0-n
	//	//1-10
	//	parseInt(Math.random() * 10) + 1;//1-10

	return parseInt(Math.random() * (max - min + 1)) + min; //min:Math.random()等于0
}

/*
 	过滤敏感词封装：filter()
 	
*/

function filter(str) { //过滤敏感词
	var arr = ["fuck", "妈蛋", "操", "法轮功", "反清复明", "金三胖", "去死", "MMP"];
	arr.forEach(function (item) {
		var reg = new RegExp(item, 'gi');
		str = str.replace(reg, '***');
	});
	return str;
}

function toTwo(num) {
	if (num <= 9) {
		return '0' + num;
	} else {
		return '' + num;
	}
}

/*
 	毫秒转：年月日时分秒
 */
function setTimes(timer) {
	var time = new Date(timer);
	var year = time.getFullYear();//年
	var mon = toTwo(time.getMonth() + 1);//0 
	var day = toTwo(time.getDate());//24
	var hour = toTwo(time.getHours());//时
	var min = toTwo(time.getMinutes());//分
	var sec = toTwo(time.getSeconds());//秒

	return {
		secs: sec,
		mins: min,
		hours: hour,
		days: day,
		mons: mon,
		years: year
	}

}

//总毫秒 -> xx天xx小时xx分xx秒
function setTime(time) {
	//xx天xx小时xx分xx秒 
	var sec = time % 60; //秒
	var min = parseInt(time / 60) % 60;
	var hour = parseInt(time / 60 / 60) % 24;
	var day = parseInt(time / 60 / 60 / 24);
	//					console.log(days,hours,min,sec)
	return {
		secs: sec,
		mins: min,
		hours: hour,
		days: day
	}
}

//参数转成对象
function strToObj(str) {
	//name=malin&psw=1234
	var obj = {};
	var arr = str.split('&'); //['name=malin','psw=1234']
	arr.forEach(function (item) {
		var newarr = item.split('='); //['name','malin']
		obj[newarr[0]] = newarr[1];
		//obj['name'] = 'malin';
	});
	return obj;
}

//对象转成参数
function objToStr(obj) {
	var html = '';
	//遍历json for in
	for (var key in obj) {
		//key:键名    obj[key] : 键值
		html += key + '=' + obj[key] + '&';
	}
	//name=malin&psw=1234&
	return html.slice(0, -1);
	//				console.log(html);
}

//找第一个孩子
function firstChild(ele) {
	if (ele.firstElementChild) {
		//高级浏览器  IE9+
		return ele.firstElementChild;
	} else {
		//低版本  IE8-
		return ele.firstChild;
	}
}

//var firc = ele.firstElementChild ? ele.firstElementChild : ele.firstChild;

//获取样式  
function getstyle(ele, cls) {
	//ele 节点   cls：属性名
	if (getComputedStyle(ele, false)) {
		//在高级浏览器下面
		return getComputedStyle(ele, false)[cls];
	} else {
		//在低版本浏览器 IE8-
		return ele.currentStyle[cls];
	}
}

//兼容处理:面试题
//on()给节点绑定事件
function on(ele, type, fn) {
	//ele：节点   type : 事件类型，没有on的；fn：回调函数
	if (ele.addEventListener) {
		//高级浏览器
		ele.addEventListener(type, fn, false);
	} else {
		ele.attachEvent('on' + type, fn); //onclick
	}
}

/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/

var checkReg = {
	trim: function (str) { //去掉前后空格
		var reg = /^\s+|\s+$/g;
		return str.replace(reg, '');
	},
	tel: function (str) { //号码
		var reg = /^1[3-9]\d{9}$/
		return reg.test(str);
	},
	email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
		var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
		return reg.test(str);
	},
	idcard: function (str) { //身份证
		var reg = /^(\d{17}|\d{14})[\dX]$/;
		return reg.test(str);
	},
	psweasy: function (str) { //6-18位首字母开头
		var reg = /^[a-zA-Z]\w{5,17}$/;
		return reg.test(str);
	},
	pwwagain: function (str1, str2) { //确认密码
		return str1 === str2; //全等 恒等
	},
	urladr: function (str) { //路径：网址规则
		var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
		return reg.test(str);
	},
	name: function (str) { //账号字母开头,6-20位
		var reg = /^[a-zA-Z][\w\-]{5,19}$/;
		return reg.test(str);
	},
	chinese: function (str) { //中文
		var reg = /^[\u2E80-\u9FFF]+$/;
		return reg.test(str);
	},
	birthday: function (str) { //生日
		var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
		return reg.test(str);
	}
}

/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

	clearInterval(obj.timer); //防止定时器叠加
	obj.timer = setInterval(function () {

		var istrue = true;

		//1.获取属性名，获取键名：属性名->初始值
		for (var key in json) { //key:键名   json[key] :键值
			//			console.log(key); //width heigth opacity
			var cur = 0; //存初始值

			if (key == 'opacity') { //初始值
				cur = getstyle(obj, key) * 100; //透明度
			} else {
				cur = parseInt(getstyle(obj, key)); // 300px  300  width heigth borderwidth px为单位的

			}

			//2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
			//距离越大，速度越大,下面的公式具备方向
			var speed = (json[key] - cur) / 6; //出现小数
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

			if (cur != json[key]) { //width 200 heigth 400
				istrue = false; //如果没有达到目标值，开关false
			} else {
				istrue = true; //true true
			}

			//3、运动
			if (key == 'opacity') {
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			} else {
				obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
			}

		}

		//4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
		if (istrue) { //如果为true,证明以上属性都达到目标值了
			clearInterval(obj.timer);
			if (fnend) {
				fnend(); //调用函数
			}
		}

	}, 30); //obj.timer 每个对象都有自己定时器

}

function css() {
	if (arguments.length == 2) {
		//获取：getComputedStyle(ele, false)[cls];
		return getComputedStyle(arguments[0], false)[arguments[1]];
	} else if (arguments.length == 3) {
		//设置行内样式
		arguments[0].style[arguments[1]] = arguments[2];
	}
}

/*
 	ajax()
 	参数一：请求方式  get  post
 	参数二：url接口路径不同
 	参数三：传输给后台的数据不同data
	参数四：回调函数
*/

function ajax(type, url, data, fn) {

	//1.创建对象
	var xhr = new XMLHttpRequest();

	//2.参数设置  open('')
	if (type.toLowerCase() == 'get') {
		if (data) {
			//如果是get方式并且有数据
			url = url + '?' + data;
		}
		xhr.open(type, url, true);
		xhr.send(null);
	} else {
		//post方式
		xhr.open(type, url, true);
		//请求头设置
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}

	//接收数据
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				//成功接收数据
				//				var str = xhr.responseText;
				if (fn) {
					//把数据传到外部使用
					fn(xhr.responseText);
				}
			} else {
				//如果出错给个提示
				alert('出错了，状态码是：' + xhr.status);
			}
		}
	}

}

/*
 ajax2({
	type : 'post',//请求方式
	url : 'api/04checkname_post.php',//接口路径
	data : 'name=' + username.value,//数据，可选的
//	async : true,//可选参数
	success : function(str) {//成功的回调
		console.log(str);
	}
});
*/

function ajax2(opt) {
	function extend(obj1, obj2) { //配置参数：obj1  默认参数:obj2
		for (var key in obj1) {
			obj2[key] = obj1[key];
		}
	}

	var defaults = { //默认参数
		data: '',
		async: true
	}

	extend(opt, defaults); //使用默认参数

	//1.创建对象
	var xhr = new XMLHttpRequest();
	//2.发送请求
	if (defaults.type.toLowerCase() == 'get') {
		//get方式
		defaults.url += '?' + defaults.data;
		xhr.open('get', defaults.url, defaults.async);
		xhr.send(null);
	} else if (defaults.type.toLowerCase() == 'post') {
		//post方式
		xhr.open('post', defaults.url, defaults.async);
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(defaults.data);
	}
	//3.接收数据
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				//把拿到的数据丢到外面
				defaults.success(xhr.responseText);
			} else {
				alert('出错啦,http码是：' + xhr.status);
			}
		}
	}
}


function setCookie(key, value, iDay) {
	//key:键名   value：键值    iDay：失效时间
	//document.cookie = 'name=malin;expires=20190527;path=/';
	var now = new Date();
	now.setDate(now.getDate() + iDay); //iDay:5天后失效， -1：立即失效
	document.cookie = key + '=' + value + ';expires=' + now + ';path=/';
}

function getCookie(key) {
	//获取cookie值
	var str = document.cookie;//name=malin; psw=123456
	var arr = str.split('; '); //[name=malin,psw=123456]
	for (var ele of arr) {
		var arr2 = ele.split('='); //[name,malin]
		if (key == arr2[0]) {
			return arr2[1];
		}
	}
}

function removeCookie(key) {
	//删除cookie。把这个值变成失效
	setCookie(key, '', -1); //设置成过去的时间
}