<template>
  <div id="box">
    <div class="titleWrap">
      <div id="titleWr" class="titleWr clearfix" :class="{fixed:fixed}">
        <div class="title" >
          <div class="" @click="hh" :class="isok==1?'show':'noshow'">产品介绍</div>
          <div class="" @click="bb" :class="isok==0?'show':'noshow'">购买须知</div>
          <div class="clear"></div>
        </div>
      </div>    
    </div>
    <!-- ------------- -->
    <div class="commodityBar clearfix introduce productIntroduce">
      <h2 class="infoTitle">产品简介</h2>
      <!---->
      <div class="nodeList">
        <h3 class="threeTil titleColor">
          <i class="zwui-iconfont zworld-icon-light"></i>
          亮点推荐
        </h3>
        <!---->
        <div>
          <i class="zwui-iconfont zworld-icon-quote-l fontBGStart"></i>
          <div class="cont">
            <p>直飞航班：搭乘直飞，一站直达，省去转机时间以及旅途劳累</p>
            <p>可少请假：出发时间包含假期，可少请假，适合不好请假的上班族</p>
            <p>行程自由：单机票产品，可根据自己的实际需求安排行程，灵活性更强</p>
          </div>
          <i class="zwui-iconfont zworld-icon-quote-r fontBGEnd"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   data(){
        return{
            fixed:false,
            isok:1
        }
    },
    mounted(){
      window.addEventListener('scroll',()=>{
          // console.log(window.scrollY)
        if(window.scrollY>=600){
            this.fixed =true;
        }else{
            this.fixed = false;
        }
      })
     
  },
  methods:{
     hh(){
        window.scrollTo(0,560);
        this.isok=1;
      },
      bb(){
        window.scrollTo(0,2100);
        this.isok=0;
      }
  }
})
</script>

<style lang="scss" scoped>
#box{
    background-color: #fff;
}
.fixed{
        position: fixed;
        top: 45px;
        left: 0;
        z-index: 2;
    }
 .titleWrap {
    width: 100%;
    height: 60px;
    background: #fff;
    padding-top: 10px;
}
 .titleWrap .titleWr {
    width: 100%;
    background: #fff;
}
 .titleWrap .titleWr .title {
    width: 92%;
    height: 29.6px;
    border: 1px solid #4c4d4f;
    margin: 10px auto;
    border-radius: 3px;
    text-align: center;
    color: #fcfcfc;
    font-size: 13.5px;
    background: #fff;
}
 .titleWrap .titleWr .title .show {
    width: 50%;
    line-height: 30px;
    font-weight: 700;
    background: #4c4d4f;
    color: #fff;
    float: left;
}
 .titleWrap .titleWr .title .noshow {
    width: 50%;
    line-height: 30px;
    float: left;
    color: #4c4d4f;
}

.clearfix:after {
    display: block;
    height: 0;
    font-size: 0;
    content: " ";
    visibility: hidden;
    clear: both;
}
 .introduce {
    display: block;
}

 .commodityBar {
    width: 100%;
    background: #fff;
    margin-bottom: 12.5px;
}
 .commodityBar .infoTitle {
    width: 100%;
    font-size: 21px;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin: 0;
    padding: 15px 0 12px;
}
.nodeList {
    width: 100%;
    padding: 0 17px 10px;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 20px;
    font-size: 15px;
    word-break: break-all;
    color: #4c4d4f;
    position: relative;
}
.productIntroduce .titleColor {
    color: #40c895;
}

.threeTil {
    height: 20px;
    line-height: 20px;
    font-size: 17px;
    font-weight: 600;
    padding: 1px 0 10px;
    margin: 0;
}
.zwui-iconfont {
    font-family: zworld!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.productIntroduce .fontBGStart {
    top: 30px;
    left: 10px;
}
.productIntroduce .fontBGEnd, .productIntroduce .fontBGStart {
    position: absolute;
    font-size: 14px;
    line-height: 14px;
    color: rgba(31,32,35,.2);
}
.zwui-iconfont {
    font-family: zworld!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.productIntroduce .cont {
    padding: 0 12px;
}
.productIntroduce p {
    padding-bottom: 10px;
    font-weight: 400;
}
.productIntroduce .fontBGEnd {
    bottom: 23px;
    right: 16px;
}
</style>
