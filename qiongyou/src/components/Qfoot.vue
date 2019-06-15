<template>
  <div v-if="isShowfooter" data-am-widget="navbar" class="am-navbar am-cf am-navbar-default" id>
    <ul class="am-navbar-nav am-cf am-avg-sm-4">
      <li v-for="(nav,index) in navs" :key="index">
        <a
          href="javascript:void(0)"
          @click="futis(index)"
          :class="nav.pathpaede == pagesphat ? 'active' : '' "
        >
          <span :class="nav.className"></span>
          <span class="am-navbar-label">{{nav.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import "../../node_modules/amazeui/dist/css/amazeui.css";
import jquery from "jquery";
import "../../node_modules/amazeui/dist/js/amazeui.min.js";
export default Vue.extend({
  data() {
    return {
      navs: [
        {
          className: "am-icon-bookmark-o",
          name: "首页",
          pathpaede: "/"
        },
        {
          className: "am-icon-map-marker",
          name: "目的地",
          pathpaede: "/qbourn/ob1"
        },
        {
          className: "am-icon-user",
          name: "我的",
          pathpaede: "/qmymulu"
        }
      ]
    };
  },
  computed: {
    pagesphat() {
      return this.$store.state.aphts;
    },
    isShowfooter() {
      return this.$store.state.isFooter;
    }
  },
  methods: {
    futis(tab) {
      this.$router.push({
        path: this.navs[tab].pathpaede
      });
    }
  }
});
</script>
<style scoped>
.am-navbar-default .am-navbar-nav {
  background-color: #fff;
  box-shadow: 0 -2.5px 4px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 -2.5px 4px rgba(0, 0, 0, 0.15);
}

.am-navbar-default a {
  color: #636363;
}
.am-navbar-default a.active {
  color: #00b081;
}
</style>
