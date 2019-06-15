<template>
  <div>
    <ul class="am-avg-sm-5 am-avg-md-4 am-avg-lg-4 am-thumbnails">
      <li class="item am-thumbnail" v-for="(ite,index) in naves" :key="index">
        <a href="###" data-bn-ipg="mindex-nav-guide" class="item-btn">
          <i class="item-icon">
            <img :src="ite.urls">
          </i>
          <span>{{ite.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      naves: [
        {
          name: "锦囊",
          urls: "/img/icon/nav1.png"
        },
        {
          name: "行程助手",
          urls: "/img/icon/nav2.png"
        },
        {
          name: "游记",
          urls: "/img/icon/nav3.png"
        },
        {
          name: "Biu",
          urls: "/img/icon/nav4.png"
        },
        {
          name: "问答",
          urls: "/img/icon/nav5.png"
        },
        {
          name: "目的地",
          urls: "/img/icon/nav6.png"
        },
        {
          name: "酒店",
          urls: "/img/icon/nav7.png"
        },
        {
          name: "商城",
          urls: "/img/icon/nav8.png"
        },
        {
          name: "约伴",
          urls: "/img/icon/nav9.png"
        },
        {
          name: "专栏",
          urls: "/img/icon/nav10.png"
        }
      ]
    };
  }
});
</script>

<style scoped>
ul {
  padding-left: 0;
}
ul li {
  padding: 5px;

  list-style: none;
}

ul li .item-btn .item-icon img {
  width: 100%;
}
ul li .item-btn span {
  display: block;
  width: 100%;
  font-size: 12px;
  margin-top: -7px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
}
.am-avg-sm-5 .am-thumbnail {
  display: block;
  padding: 2px;
  margin-bottom: 10px;
  background-color: #fff;
  border: none;
  border-radius: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.am-thumbnails {
  padding: 0;
  margin: 0;
}
</style>
