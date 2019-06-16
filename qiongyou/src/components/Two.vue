<template>
  <div>
    <section>
      <section class="commodityBar clearfix" v-for="(s,index) in this.$store.state.goods" :key="index">
        <div class="commodityImgBar clearfix">
          <img
            :src="s.oneUrl"
            width="100%"
            height="auto"
            title="上海/宁波直飞日本东京/名古屋/大阪/佐贺5-7天往返含税机票+赠送Suica西瓜卡"
            alt="上海/宁波直飞日本东京/名古屋/大阪/佐贺5-7天往返含税机票+赠送Suica西瓜卡"
            class="commodityImg"
          >
          <div class="mask"></div>
          <div class="zw-share sharebtn">
            <a data-bn-ipg="details-share-click" class="zw-share-button zw-share-button-white"></a>
            <div class="zw-share-mask" style="display:none;">
              <!---->
              <img
                src="//fes.qyerstatic.com/Fj0cF4rvFON-kXOxqwFUmmdk43E-?imageslim"
                class="zw-share-in-safari"
              >
              <!---->
            </div>
          </div>
          <p>产品编号&nbsp;121034</p>
        </div>
        <div id="toProduct"></div>
        <h1 id="product_title" class="tit">
          <a name="product">{{s.title}}</a>
        </h1>
        <div class="pInfo">
          <div class="price">
            <em>1499</em>元起
          </div>
          <div class="floorGuide">
            <a href="#this">底价指南</a>
          </div>
          <div class="sold">已售&nbsp;26份</div>
          <div class="browse">浏览&nbsp;146432</div>
          <!---->
        </div>
        <!---->
        <!---->
        <!---->
      </section>
      <section class="commodityBar clearfix">
        <input type="hidden" id="lid" value="121034">
        <!---->
        <!---->
        <div class="appAttentiveBox">
          <a
            href="javascript: void(0)"
            id="detailAppAttentive"
            data-bn-ipg="bookenAPP-click"
            data-download="https://dpl.qyer.com/app/guide/applinks.html?@=deal/detail/121034&amp;campaign=z_pt&amp;category="
            data-app="qyer://deal/detail/121034/"
            data-app-dpl="https://dpl.qyer.com/app/guide/applinks.html?@=deal/detail/121034&amp;campaign=z_pt&amp;category="
          >
            <em class="tag">APP专享</em>
            <span class="text">用穷游App预订, 更快更方便</span>
            <p class="buy">
              <span class="zwui-iconfont icon-arrow-right"></span>
            </p>
          </a>
        </div>
        <!---->
        <!---->
        <!---->
      </section>
      <section class="commodityBar clearfix">
        <section id="dateAndPrice" class="dateAndPrice clearfix">
          <a data-bn-ipg="chooseproduct-click" class="link">
            <div class="tilBar">
              <i class="zwui-iconfont zworld-icon-calendar2">
                  <img src="../assets/jia.png" alt="">
              </i>
              <span class="til">选择&nbsp;产品类型/日期</span>
            </div>
            <div class="monthBar">7月 多日期出发</div>
            <span class="zwui-iconfont icon-arrow-right"></span>
          </a>
        </section>
      </section>
      <section class="commodityBar clearfix">
        <div class="confirm">
          <i class="zwui-iconfont zworld-icon-right">
              <img src="../assets/dui.png" alt="">
          </i>
          <div class="secondConfirm">二次确认</div>
          <div class="confirmText">二次确认商品，需要卖家确认后出行 &nbsp;请至少提前3天预订</div>
        </div>
      </section>
      <!---->
      <section class="commodityBar clearfix">
        <!---->
        <!---->
      </section>
      <section class="businessInfoBar clearfix">
        <div class="businessType">
          <img
            src="../assets/meitu.jpg"
            class="logo"
          >
          <div class="business">
            <div class="name">
              <span>美途国旅</span>
              <!---->
            </div>
            <div class="tag">
              <span class="inBusiness">
                <i class="zwui-iconfont zworld-icon-shop-settled"></i>入驻商家
              </span>
              <span class="confirmBusiness">
                <i class="zwui-iconfont zworld-icon-medal"></i>认证商家
              </span>
            </div>
          </div>
          <a href="//m.qyer.com/z/sup/897/" class="supShop">店铺</a>
        </div>
        <!---->
        <!---->
      </section>
    </section>
  </div>
</template>
<script>
import store from '../store';
import request from '../request';
export default {
   created(){
      this.init();
  },
  data(){
    return{
       shops: []
    }
  },
  methods:{
    async init(){
      const { g } = request;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cf5c000596281437b1396c5/example/qiongyoup"
      });
      console.log(data);
      
      this.shops = [...data.data.repulic];
       this.shops.forEach(item => {
        //  console.log(item.id)
        if (item.id == this.$route.query.id) {
          console.log(item)
         store.commit(
           'getgoods',
           item
         )
        }
      });
    }
  }   
}
</script>

<style lang="scss" scoped>
.commodityBar {
    margin-bottom: 12.500px;
    background: #fff;
}
.commodityBar .commodityImgBar {
    width: 100%;
    position: relative;
    display: block;
    font-size: 4px;
    margin-bottom: 10px;
}
.clearfix {
    zoom: 1;
}
.commodityBar .commodityImgBar img {
    display: block;
    width: 100%;
    height: 100%;
}
.commodityBar .commodityImgBar .mask {
    width: 100%;
    height: 60px;
    position: absolute;
    left: 0;
    top: 0;
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.4)),to(transparent));
    background-image: linear-gradient(180deg,rgba(0,0,0,.4) 0,transparent);
}
.sharebtn {
    position: absolute;
    top: 13px;
    right: 12px;
    z-index: 9;
}

.zw-share {
    display: inline-block;
}
.zw-share-button-white {
    background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgMzQgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0i5Lqn5ZOB6K+m5oOF6aG15Yqg5YiG5LqrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjgzLjAwMDAwMCwgLTE2OC4wMDAwMDApIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyI+CiAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjg1LjAwMDAwMCwgMTY5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS4zOTIxMjQ3LDEyLjg1NzE0MjkgTDI4LjU3MTQyODYsMTIuODU3MTQyOSBDMjkuMzYwNDA2OCwxMi44NTcxNDI5IDMwLDEzLjQ5NjczNjEgMzAsMTQuMjg1NzE0MyBMMzAsMzUuNTI2MzE1OCBDMzAsMzYuMzE1Mjk0IDI5LjM2MDQwNjgsMzYuOTU0ODg3MiAyOC41NzE0Mjg2LDM2Ljk1NDg4NzIgTDEuNDI4NTcxNDMsMzYuOTU0ODg3MiBDMC42Mzk1OTMyMTUsMzYuOTU0ODg3MiAtNS4zMjkwNzA1MmUtMTUsMzYuMzE1Mjk0IC01LjMyOTA3MDUyZS0xNSwzNS41MjYzMTU4IEwtNS4zMjkwNzA1MmUtMTUsMTQuMjg1NzE0MyBDLTUuMzI5MDcwNTJlLTE1LDEzLjQ5NjczNjEgMC42Mzk1OTMyMTUsMTIuODU3MTQyOSAxLjQyODU3MTQzLDEyLjg1NzE0MjkgTDguNTYyNzA5MjYsMTIuODU3MTQyOSIgaWQ9Iui3r+W+hCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuMjU0MjU1LDEuNDgzMzI4NjggTDE1LjI1NDI1NSwyNC45MzExOTQ1IiBpZD0i6Lev5b6ELTMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjM1NzQ5MTYsMC42NTYzODk1MDkgTDguOTA5MDQwMTgsNy4xNDI4NTcxNCIgaWQ9Iui3r+W+hC00Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMS41MjkxOTIyLDAuNjMwMjMxNTg1IEwxNS4zODczMTE3LDcuMTQyODU3MTQiIGlkPSLot6/lvoQtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguNDU4MjUyLCAzLjg4NjU0NCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTguNDU4MjUyLCAtMy44ODY1NDQpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
}
.zw-share-button {
    display: block;
    width: 22px;
    height: 22px;
    background-size: 18px;
    background-position: 50%;
    background-repeat: no-repeat;
}
.commodityBar .commodityImgBar p {
    margin: 0;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    padding: 10px 0 0 8px;
    line-height: 24px;
    font-size: 13px;
    color: #fff;
    left: 0;
    bottom: 0;
    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.3)));
    background-image: linear-gradient(180deg,transparent 0,rgba(0,0,0,.3));
}
.clearfix:after {
    display: block;
    height: 0;
    font-size: 0;
    content: " ";
    visibility: hidden;
    clear: both;
}
// ---------------------------------------------
.pInfo, .tit {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
}
.tit {
    background: #fff;
    padding: 0 15px 0 10px;
    color: rgba(31,32,35,.8);
    font-size: 16px;
    font-weight: 500;
    word-break: break-all;
}
.pInfo {
    padding: 0 10px;
    font-size: 12px;
    color: rgba(31,32,35,.4);
    background-color: #fff;
    overflow: hidden;
}

.pInfo, .tit {
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 20px;
}
a {
    text-decoration: none;
}
a {
    text-decoration: none;
    color: rgba(31,32,35,.8);
}
.pInfo .price {
    float: left;
}
.pInfo .price em {
    font-size: 20px;
    padding-right: 3px;
    color: #ff7467;
    font-style: normal;
}
.pInfo .floorGuide {
    float: left;
    padding-left: 1px;
    margin-top: .1px;
}
.pInfo .sold {
    padding-left: 1.3px;
}

.pInfo .browse, .pInfo .sold {
    padding-top: 10px;
    float: right;
    text-align: right;
}
.pInfo .browse, .pInfo .sold {
    padding-top: 10px;
    float: right;
    text-align: right;
}
.pInfo .floorGuide a {
    color: #40c895;
    text-decoration: underline;
}
button, input, select, textarea {
    font-size: 100%;
    color: #636363;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
}
.appAttentiveBox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-top: 1px solid #edeeee;
    margin: 20px 50px 20px 10px;
    background-color: #fff;
    font-size: 14px;
    line-height: 30px;
    position: relative;
    cursor: pointer;
}
.appAttentiveBox a {
    width: 95%;
    height: 45px;
    overflow: hidden;
    line-height: 45px;
}
.appAttentiveBox .tag {
    display: inline-block;
    height: 17px;
    width: 50px;
    line-height: 17px;
    text-align: center;
    vertical-align: middle;
    border-radius: 3px;
    padding: 0 4px;
    background-color: #ff7467;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    margin-right: 7px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.appAttentiveBox .text {
    color: rgba(31,32,35,.8);
}   
.dateAndPrice {
    position: relative;
    display: block;
}
.dateAndPrice .link {
    background: #fff;
    padding: 10px 10px 5px;
    display: block;
    text-decoration: none;
}
.clearfix:after {
    display: block;
    height: 0;
    font-size: 0;
    content: " ";
    visibility: hidden;
    clear: both;
}
.dateAndPrice .link .tilBar {
    width: 100%;
    font-size: 15px;
    line-height: 25px;
}
.dateAndPrice .link .monthBar {
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: rgba(31,32,35,.4);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 4px;
    padding-right: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 13px;
}
.dateAndPrice .link .icon-arrow-right {
    position: absolute;
    right: 8px;
    top: 0;
    font-size: 10px;
    line-height: 60px;
    color: rgba(31,32,35,.4);
}
.zwui-iconfont {
    font-family: zworld!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 10px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.dateAndPrice .link .tilBar i {
    position: relative;
    color: #40c895;
    padding: 0 10px 0 10px;
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
.zwui-iconfont img{
    height: 19px;
}
.dateAndPrice .link .tilBar .til {
    font-size: 15px;
    color: rgba(31,32,35,.8);
    font-weight: 700;
}
// --------------------------------------------
.confirm {
    height: 40px;
    padding: 10px 0;
    background:url(data:image/png;base64,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) repeat;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.confirm .zworld-icon-right {
    color: #ff7467;
    padding-left: 10px;
    font-size: 20px;
    font-weight: 700;
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
.confirm .immediatelyConfirm, .confirm .secondConfirm {
    width: 35px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #ff7467;
    padding: 0 10px 0 4px;
}
.confirm .confirmText {
    overflow: hidden;
    font-size: 14px;
    padding-right: 1px;
}
.clearfix:after {
    display: block;
    height: 0;
    font-size: 0;
    content: " ";
    visibility: hidden;
    clear: both;
}
// -----
.businessInfoBar{
  margin-bottom: 15px;
}
.businessInfoBar .businessType {
    width: 100%;
    height: 63px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px 0 13px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;
    position: relative;
}
.businessInfoBar .businessType .logo {
    width: 55px;
    height: 40px;
    margin-top: 10px;
    border: 1px solid #e9e9e9;
}
.businessInfoBar .businessType .business {
    padding-left: 10px;
}
.businessInfoBar .businessType .supShop {
    display: block;
    width: 69px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #40c895;
    -webkit-box-shadow: 0 5px 18px 0 rgba(122,208,176,.6);
    box-shadow: 0 5px 18px 0 rgba(122,208,176,.6);
    border-radius: 3px;
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -17px;
}
.businessInfoBar .businessType .business .name {
    width: 20px;
    height: 35px;
    font-size: 0;
}
.businessInfoBar .businessType .business .name span {
    display: block;
    float: left;
    width: 64px;
    max-width: calc(20px - 28px);
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 0;
    line-height: 35px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 16px;
    color: rgba(31,32,35,.8);
}
.businessInfoBar .businessType .business .tag {
    line-height: 2px;
    color: rgba(31,32,35,.4);
}
.businessInfoBar .businessType .confirmBusiness, .businessInfoBar .businessType .inBusiness {
    font-size: 13px;
}

.businessInfoBar .businessType span {
    padding-right: 10px;
}
.businessInfoBar .businessType .business .tag i {
    color: #40c895;
    position: relative;
    bottom: -1px;
    padding-right: 4px;
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
</style>
