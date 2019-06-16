<template>
  <section>
    <ul class="uMyList">
      <li class="myForum">
        <a data-bn-ipg="musercenter-navigate-mybbs" href="/u/11634180/bbs">
          <span
            style="background-image: url(https://fes.qyerstatic.com/Fqg4MNpd9By1o1xzkm_AkEOos5ih); background-size: contain;"
          >我的论坛</span>
        </a>
      </li>
      <li class="myQa">
        <a data-bn-ipg="musercenter-navigate-myask" href="/u/11634180/ask">
          <span
            style="background-image: url(https://fes.qyerstatic.com/FjisxelEX7RuINcseldXpdhXFB3a);background-size: contain;"
          >我的问答</span>
        </a>
      </li>
      <li class="myPlan">
        <a data-bn-ipg="musercenter-navigate-myplan" href="/u/11634180/plan">
          <span
            style="background-image: url(https://fes.qyerstatic.com/Fqg4MNpd9By1o1xzkm_AkEOos5ih); background-size: contain;"
          >我的行程计划</span>
        </a>
      </li>
      <li>
        <a data-bn-ipg="musercenter-navigate-favorsList" href="/z/user/favorsList">
          <span
            style="background-image: url(https://fes.qyerstatic.com/Fqg4MNpd9By1o1xzkm_AkEOos5ih);background-size: contain;"
          >穷游商城收藏</span>
        </a>
      </li>
      <li class="myCoupon">
        <a data-bn-ipg="musercenter-navigate-myz" href="/u/promocode">
          <span
            style="background-image: url(https://fes.qyerstatic.com/Fqg4MNpd9By1o1xzkm_AkEOos5ih); background-size: contain;"
          >穷游商城优惠券</span>
        </a>
      </li>
      <li>
        <a data-bn-ipg="musercenter-navigate-traveler" href="/z/user/traveler/list">
          <span
            style="background-image: url(https://fes.qyerstatic.com/FouU0rB4BFbLmGSUAbmlx-hh-myx);background-size: contain;"
          >常用旅客管理</span>
        </a>
      </li>
      <li class="myTips" style="display:none;">
        <a href="#">
          <span
            style="background-image: url(https://fes.qyerstatic.com/Fqg4MNpd9By1o1xzkm_AkEOos5ih); background-size: contain;"
          >我的目的地推荐</span>
        </a>
      </li>
      <li class="fanshop">
        <a data-bn-ipg="musercenter-navigate-fanshop" href="//m.qyer.com/store">
          <span
            style="background-image: url(https://fes.qyerstatic.com/Fqg4MNpd9By1o1xzkm_AkEOos5ih); background-size: contain;"
          >兑换我的穷币</span>
        </a>
      </li>
      <li>
        <a data-bn-ipg="musercenter-navigate-traveler" href="/z/user/cash/info">
          <span
            style="background-image: url(https://fes.qyerstatic.com/FjisxelEX7RuINcseldXpdhXFB3a);background-size: contain;"
          >我的钱包余额</span>
        </a>
      </li>
      <li class="manage">
        <a data-bn-ipg="musercenter-navigate-manage" href="//m.qyer.com/u/account.php">
          <span
            style="background-image: url(https://fes.qyerstatic.com/Fqg4MNpd9By1o1xzkm_AkEOos5ih); background-size: contain;"
          >账号与密码管理</span>
        </a>
      </li>
    </ul>
  </section>
</template>


<script>
export default {};
</script>

<style scoped>
.uMyList {
  padding: 10px 0 1px 0;
  margin-bottom: 8px;
  background: #f5f5f5;
}
.uMyList li:first-child {
  border: none;
}
.uMyList li {
  padding-left: 10px;
  border-top: 1px solid #e6e8ea;
  font-size: 16px;
  background: #fff;
  list-style: none;
}
.uMyList a,
.uMyList a:link {
  display: block;
  width: 100%;
  color: #444;
  height: 24px;
  padding: 15px 0;
}
.uMyList .myForum span {
  background-position: 0px 0px;
}
.uMyList li span {
  padding-left: 34px;
  float: left;
  background: url("/m/project/ucenter/images/icons-ucenter.png") left center
    no-repeat;
  background-size: 24px 360px;
}
.uMyList .myForum span {
  padding-left: 34px;
  float: left;
  background: url("/img/Myqiongyou/luntan.png") left center no-repeat;
  background-size: 25px 100%;
}

.uMyList li a:after {
  content: ".";
  font-size: 0;
  float: right;
  width: 8px;
  height: 8px;
  border: 2px solid #c8c8c8;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: 6px 9px auto auto;
}
.uMyList a[data-v-532bfd9e],
.uMyList a[data-v-532bfd9e]:link {
  display: block;
  width: 100%;
  color: #444;
  height: 43px;
  padding: 10px 0;
}
</style>
