<template>
  <div id="login_nav_box" data-v-a65a7bba data-v-1cee10f7>
    <div class="nav_nav" data-v-a65a7bba>
      <router-link to="/Home">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19iYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImljX2JhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xOC40MTQsNC41ODMyMDk1MiBDMTguODA0LDQuOTcxMzUyMzggMTksNS40NDExMDQ3NiAxOSw1Ljk5MDQ3NjE5IEMxOSw2LjU0OTggMTguODAyLDcuMDIxNTQyODYgMTguNDA2LDcuNDA1NzA0NzYgTDcuODI4LDE3LjkzMzMzMzMgTDM3LDE3LjkzMzMzMzMgQzM3LjU1MiwxNy45MzMzMzMzIDM4LjAyNCwxOC4xMjg0IDM4LjQxNCwxOC41MTY1NDI5IEMzOC44MDQsMTguOTA0Njg1NyAzOSwxOS4zNzQ0MzgxIDM5LDE5LjkyMzgwOTUgQzM5LDIwLjQ3MzE4MSAzOC44MDQsMjAuOTQyOTMzMyAzOC40MTQsMjEuMzMxMDc2MiBDMzguMDI0LDIxLjcxOTIxOSAzNy41NTIsMjEuOTE0Mjg1NyAzNywyMS45MTQyODU3IEw3LjgyOCwyMS45MTQyODU3IEwxOC40MDYsMzIuNDQxOTE0MyBDMTguODAyLDMyLjgyNjA3NjIgMTksMzMuMjk3ODE5IDE5LDMzLjg1NzE0MjkgQzE5LDM0LjQwNjUxNDMgMTguODA0LDM0Ljg3NjI2NjcgMTguNDE0LDM1LjI2NDQwOTUgQzE4LjAyNCwzNS42NTI1NTI0IDE3LjU1MiwzNS44NDc2MTkgMTcsMzUuODQ3NjE5IEMxNi40MzgsMzUuODQ3NjE5IDE1Ljk2NCwzNS42NTY1MzMzIDE1LjU3OCwzNS4yNzIzNzE0IEwxLjU3OCwyMS4zMzkwMzgxIEMxLjE5MiwyMC45MzQ5NzE0IDEsMjAuNDYzMjI4NiAxLDE5LjkyMzgwOTUgQzEsMTkuMzg0MzkwNSAxLjE5MiwxOC45MTI2NDc2IDEuNTc4LDE4LjUwODU4MSBMMTUuNTc4LDQuNTc1MjQ3NjIgQzE1Ljk3NCw0LjE5MTA4NTcxIDE2LjQ0OCw0IDE3LDQgQzE3LjU1Miw0IDE4LjAyNCw0LjE5NTA2NjY3IDE4LjQxNCw0LjU4MzIwOTUyIFoiIGZpbGw9IiMwMDAiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
          class="back"
          data-v-a65a7bba
        >
      </router-link>
      <span class="center" style="display:;" data-v-a65a7bba>穷游网</span>
      <a class="nav_right" style="display:none;" data-v-a65a7bba></a>
    </div>

    <span class="nav_title" style="display:;" data-v-a65a7bba>帐号密码登录</span>
    <div style data-v-1cee10f7>
      <div data-bn-ipg="m-pp-username" class="h5_icon_user_row" data-v-382b89b4 data-v-1cee10f7>
        <label class="user_icon" data-v-382b89b4></label>
        <div class="h5_form_pwd_box" data-v-382b89b4>
          <div class="input_text_label float" data-v-382b89b4>手机号/邮箱</div>
          <input
            type="text"
            maxlength="100"
            class="phone_mail_input"
            data-v-382b89b4
            v-model="phone"
            @blur="signin()"
          >
          <span class="cancel_icon" style="display:none;" data-v-382b89b4></span>
        </div>
      </div>
      <div data-bn-ipg="m-pp-password" class="h5_form_row" data-v-7e252056 data-v-1cee10f7>
        <label class="lock_icon" style="display:;" data-v-7e252056></label>
        <div class="h5_form_pwd_box" data-v-7e252056>
          <div class="input_text_label float" data-v-7e252056>密码</div>
          <input
            type="password"
            maxlength="30"
            class="h5_form_pwd"
            data-v-7e252056
            v-model="password"
            @blur="ps()"
          >
          <span class="cancel_icon" style="display:none;" data-v-7e252056></span>
          <span data-bn-ipg="m-pp-password-forget" class="forgetPwd" data-v-7e252056>忘记密码</span>
        </div>
      </div>
    </div>
    <div data-bn-ipg="m-pp-loginbutton" class="login_box" style data-v-1cee10f7>
      <div class="submit_login" data-v-1cee10f7 @click="submit()">登录</div>
      <div class="login_change" data-v-1cee10f7>
        <div data-v-1cee10f7>
          <router-link to="/">
            <span data-bn-ipg="m-pp-change-quicklogin" class="swichChange" data-v-1cee10f7>手机验证码登录</span>
          </router-link>
          <div class="login_foreign" style data-v-1cee10f7></div>
          <span data-bn-ipg="m-pp-change-oversealogin" style data-v-1cee10f7></span>
        </div>
        <span data-bn-ipg="m-pp-passwordlogin-needhelp" data-v-1cee10f7>需要帮助？</span>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// import axios from 'axios'
export default {
  data() {
    return {
      phone: "",
      password: "",
      shuzhu: [],
      phonenum:"",
      passwordnum:"",
    };
  },
  methods: {
    signin() {
      var reg = /^1[3456789]\d{9}$/;
      console.log(this.phone);
      if (reg.test(this.phone)) {
        this.shuzhu[0] = 1;
        this.phonenum= this.phone;
      } else {
        this.shuzhu[0]=0;
        alert("请输入正确的手机号");
      }
    },
    ps() {
      let reg = /^[a-zA-Z0-9]{4,10}$/;
      if (reg.test(this.password)) {
        this.shuzhu[1] = 1;
        this.passwordnum=this.password
      } else {
        this.shuzhu[1] = 0;
        alert("密码已字母开头，数字组合，长度不小于6位");
      }
    },
    submit(){
        var tiaojian = this.shuzhu.every(function(item){
            return item =1;
        });
        if(tiaojian && this.shuzhu.length==2) {
            var store =[{phonenum:this.phone},{passwordnum:this.passwordnum}];
            var d = JSON.stringify(store)//转字符串
            localStorage.setItem("name",d);//存到本地
            var josn = localStorage.getItem("name");//读取本地数据
            var josnobj = JSON.parse(josn)
            alert("登录成功")
            console.log(d)
            this.$router.push('/home')
        }else{
            alert("请完善信息")
        }
    }
  }
};
</script>

<style lang='scss' scoped>
.nav_title[data-v-a65a7bba] {
  display: inline-block;
  height: 42px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #000;
  line-height: 42px;
  margin-left: 10px;
  margin-top: 50px;
  font-family: PingFangSC-Semibold;
}
#login_nav_box[data-v-a65a7bba] {
  padding: 0 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#login_nav_box .nav_nav[data-v-a65a7bba] {
  padding-top: 10px;
}
#login_nav_box div[data-v-a65a7bba] {
  height: 21px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
#login_nav_box .back[data-v-a65a7bba] {
  width: 20px;
  height: 20px;
  background-size: 100%;
  color: pink;
}
#login_nav_box .center[data-v-a65a7bba] {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
  font-family: PingFangSC-Regular;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.nav_title[data-v-a65a7bba] {
  display: inline-block;
  height: 42px;
  font-size: 26px;
  font-weight: 600;
  color: #000;
  line-height: 42px;
  margin-left: 10px;
  margin-top: 50px;
  font-family: PingFangSC-Semibold;
}
.h5_icon_user_row[data-v-382b89b4] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 25px;
  margin-top: 45px;
  border-bottom: 1px solid #eee;
}
.h5_icon_user_row .user_icon[data-v-382b89b4] {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…AgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
  width: 0.46rem;
  height: 0.46rem;
  background-size: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 7px;
}
.h5_icon_user_row .h5_form_pwd_box[data-v-382b89b4] {
  display: inline-block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  height: 30px;
}
.float[data-v-382b89b4] {
  -webkit-transform: scale(1);
  transform: scale(1);
  top: 0.07rem;
}
.input_text_label[data-v-382b89b4] {
  -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
  cursor: text;
  -webkit-transform: translateZ(0) scale(0.75);
  transform: translateZ(0) scale(0.75);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: -17px;
  left: 0;
  font-size: 0.32rem;
  color: #c8c8c8;
  line-height: 0.46rem;
  font-family: PingFangSC-Regular;
}
.h5_form_row[data-v-7e252056] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 25px;
  margin-top: 30px;
  border-bottom: 1px solid #eee;
  border: 0;
}
.h5_form_row .h5_form_pwd_box[data-v-7e252056] {
  display: inline-block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  height: 30px;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.float[data-v-7e252056] {
  -webkit-transform: scale(1);
  transform: scale(1);
  top: 0.07rem;
}
.input_text_label[data-v-7e252056] {
  -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
  cursor: text;
  -webkit-transform: translateZ(0) scale(0.75);
  transform: translateZ(0) scale(0.75);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: -16px;
  left: 0;
  font-size: 0.32rem;
  color: #c8c8c8;
  line-height: 0.46rem;
  font-family: PingFangSC-Regular;
}
.h5_form_row .h5_form_pwd[data-v-7e252056] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1px 25px 1px 0;
  font-size: 0.32rem;
  border: 0;
  font-family: DinBold;
  font-weight: 700;
  height: 30px;
  width: 100%;
  padding-right: 72px;
  background: hsla(0, 0%, 100%, 0);
  color: #000;
  outline: none;
  display: inline-block;
  position: absolute;
  top: 0;
  line-height: 0.32rem;
  caret-color: #11bf79;
  letter-spacing: 3px;
}
.forgetPwd[data-v-7e252056] {
  font-size: 12px;
  font-family: PingFangSC-Regular;
  color: rgba(0, 0, 0, 0.6);
  display: inline-block;
  width: 20px1;
  position: absolute;
  right: 0;
  top: 0.07rem;
  line-height: 0.46rem;
}
h5_form_row .h5_form_pwd_box[data-v-7e252056] {
  display: inline-block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  height: 30px;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.h5_form_row .lock_icon[data-v-7e252056] {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…5zbGF0ZSgtMjMuNTAwMDAwLCAtMjIuOTk5ODgzKSAiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+)
    no-repeat;
  width: 0.46rem;
  height: 0.46rem;
  background-size: 100%;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-right: 7px;
}
.h5_icon_user_row .phone_mail_input[data-v-382b89b4] {
  padding: 0 25px 0 0;
  border: 0;
  width: 100%;
  color: #000;
  height: 30px;
  line-height: 0.32rem;
  font-family: DinBold;
  font-weight: 700;
  font-size: 0.32rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  top: 0;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  caret-color: #11bf79;
}
.submit_login[data-v-1cee10f7] {
  font-family: PingFangSC-Medium;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: rgba(21, 219, 145);
  color: #fff;
  margin-bottom: 0.3rem;
  border-radius: 50px;
  letter-spacing: 2px;
  font-size: 0.32rem;
  font-weight: 500;
}

.login_change[data-v-1cee10f7] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.3rem;
}
.login_change div[data-v-1cee10f7] {
  display: inline-block;
}
login_foreign[data-v-1cee10f7] {
  display: inline-block;
  margin: 0 6px;
  height: 0.32rem;
  margin-bottom: 2px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 1px;
  background: #e1e1e1;
  vertical-align: middle;
}
</style >