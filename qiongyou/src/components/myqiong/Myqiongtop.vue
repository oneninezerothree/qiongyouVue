<template>
  <section class="uUserBox">
    <div class="userBg">
      <img
        src="//static.qyer.com/images/user2/index/headImage_lite.png?v="
        　width="100%"
        onerror="this.src='//static.qyer.com/images/m/space.png'"
      >
    </div>
    <p class="uFace">
      <img
        src="https://pic.qyer.com/avatar/011/63/41/80/48"
        width="64"
        height="64"
        alt="user_PepO0MOA3I"
      >
    </p>
    <h2 class="user">
      <span class="name">user_PepO0MOA3I</span>
      <i></i>
      <a data-bn-ipg="musercenter -logout" href="https://passport.qyer.com/logout">
        <span class="op">退出登录</span>
      </a>
    </h2>
  </section>
</template>


<script>
export default {};
</script>

<style scoped>
.uUserBox {
  position: relative;
  text-align: center;
}
.uUserBox .userBg {
  width: 100%;
  height: 156px;
  overflow: hidden;
  background: url(/m/project/ucenter/images/tmp/bg-user.png) repeat-x;
  background-size: auto 100%;
}

.uUserBox .userBg img {
  width: 100%;
}
.uUserBox .userBg:after {
  content: ".";
  font-size: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 31px;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8)
  );
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
.uUserBox .uFace {
  position: absolute;
  left: 50%;
  margin-left: -32px;
  bottom: 46px;
  width: 64px;
  height: 64px;
}
.uUserBox .uFace img {
  width: 64px;
  height: 64px;
}
.uFace img {
  display: block;
  border-radius: 50%;
}

.uUserBox .user {
  position: absolute;
  left: 0;
  bottom: 13px;
  width: 100%;
  color: #fff;
}
.uUserBox .user .name {
  font-size: 16px;
}
.uUserBox .user {
  position: absolute;
  left: 0;
  bottom: 13px;
  width: 100%;
  color: #fff;
}
.uUserBox .user i {
  display: inline-block;
  width: 1px;
  height: 19px;
  line-height: 19px;
  background: #fff;
  margin: 10px 4px -4px 6px;
}
.uUserBox a,
.uUserBox a:link {
  color: #fff;
}
.uUserBox .user .op {
  font-size: 12px;
}
.uUserBox a,
.uUserBox a:link {
  color: #fff;
}
</style>
