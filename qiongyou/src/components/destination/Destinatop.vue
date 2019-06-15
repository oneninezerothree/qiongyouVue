<template>
  <div>
    <div class="destination-topbar">
      <h1 class="title">目的地</h1>
      <p class="destination-topbar-search" data-role="open-search" @click="sercsh">
        <em class="zwui-iconfont icon-search"></em>
        <span>搜索你想去的国家</span>
      </p>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    sercsh() {
      this.$router.push({
        name: "chcresh"
      });
    }
  }
});
</script>


<style scoped>
.destination-topbar {
  height: 80px;
  background: url(/img/destion/topbar_bg.jpg) no-repeat;
  background-size: cover;
}
.destination-topbar .title {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 40px;
  color: #fff;
}
.destination-topbar-search {
  position: relative;
  top: -20px;
  margin: 0 25px;
  height: 30px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 13px;
  line-height: 30px;
  color: #fff;
}
.zwui-iconfont {
  font-family: zworld !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.destination-topbar-search {
  margin: 0 25px;
  height: 30px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 13px;
  line-height: 30px;
  color: #fff;
}
</style>
