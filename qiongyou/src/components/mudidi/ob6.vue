<template>
  <div class="destination-contents">
    <ul class="destination-content">
      <li v-for="(tab,index) in  world" :key="index">
        <a href="javascript:void(0)">
          <img :src="tab.urls" width="100%">
          <h3>{{tab.name}}</h3>
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
      world: [
        {
          name: "阿根廷",
          urls: "https://pic.qyer.com/album/11d/11/1877971/index/320x180"
        },
        {
          name: "巴西",
          urls: "https://pic.qyer.com/album/150/d2/1850378/index/320x180"
        },
        {
          name: "智利",
          urls: "https://pic.qyer.com/album/14e/1a/1880284/index/320x180"
        }
      ]
    };
  }
});
</script>

<style scope>
.destination-contents {
  width: 70%;
  overflow: hidden;
  background-color: #fff;
  float: right;
}
.destination-content {
  box-sizing: border-box;
  width: 100%;
  overflow-y: hidden;
  padding: 15px 15px 0 0;
  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
  transition-duration: 0ms;
  transform: translate(0px, 0px) translateZ(0px);
}
.destination-content li {
  position: relative;
  float: left;
  box-sizing: border-box;
  width: 50%;
  padding-left: 15px;
  margin-bottom: 15px;
}
.destination-content li:before {
  content: "";
  position: absolute;
  left: 15px;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
a {
  text-decoration: none;
  color: #8dabbb;
}
.destination-content li img {
  display: block;
}
.destination-content li h3 {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  left: 15px;
  right: 0;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #fff;
}
</style>
