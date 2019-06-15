<template>
  <div>
    <section class="ui-section-wrapper z-world-cate">
      <div class="ui-section-head">
        <span class="ui-section-title">精选攻略</span>
        <!---->
      </div>

      <div class="flow-wrap">
        <div class="vue-waterfall">
          <!-- 需要渲染的数据 -->
          <div
            class="vue-waterfall-slot item-move"
            data-v-17fc95ea
            v-for="(ind,index) in shopList"
            :key="index"
          >
            <a
              href="###"
              data-bn-ipg="mindex-biu_group-1"
              class="flow-biu-card flow-card"
              data-v-ab4551c4
              data-v-17fc95ea
            >
              <aside class="img-box img-type-1" data-v-ab4551c4>
                <img
                  alt="【💰热门血拼地大盘点！🛍️伦敦购物地图🛍️】 作为英国时尚首府，伦敦的购物场所、"
                  data-v-ab4551c4
                  :src="ind.oneUrl"
                  lazy="loaded"
                >
              </aside>
              <main class="content-box" data-v-ab4551c4>
                <p class="title" data-v-ab4551c4>{{ind.title}}</p>
                <div class="other-box" data-v-ab4551c4>
                  <div class="author" data-v-ab4551c4>
                    <i
                      class="avatar"
                      style="background:center/100% no-repeat url(https://pic.qyer.com/avatar/011/25/01/32/200?v=1557120976);"
                      data-v-ab4551c4
                    ></i>
                    <span class="name" data-v-ab4551c4>{{ind.zhihu}}</span>
                  </div>
                  <div class="nums" data-v-ab4551c4>
                    <i class="like-icon" data-v-ab4551c4></i>
                    <span class="like-nums" data-v-ab4551c4>{{ind.pinglun}}</span>
                  </div>
                </div>
              </main>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import requery from "../../lib/requer";
export default Vue.extend({
  data() {
    return {
      shopList: [],
      timer: null,
      offsetHeight: 0,
      isflas: 0
    };
  },  
  created() {
    this.getShopList();
  },

  methods: {
    // wmPoiScore(score) {
    //   return (score / 10).toFixed(1);
    // },
    async getShopList() {
      const { gets, posts } = requery;
      const data = await gets({
        url:
          "https://www.easy-mock.com/mock/5cf5c000596281437b1396c5/example/qiongyoup"
      });

      this.shopList = [...data.data.repulic];
      console.log(this.shopList);
    }
  }
});
</script>
<style scope>
.vue-waterfall {
  column-count: 2;
  column-gap: 0;
}
.ui-section-wrapper {
  background-color: #fff;
}
.ui-section-wrapper .ui-section-head {
  position: relative;
  height: 35px;
  font-size: 16px;
  line-height: 35px;
  text-align: left;
  color: #000;
  padding-left: 15px;
  padding-bottom: 20px;
  font-weight: 700;
}

.flow-wrap {
  position: relative;
  margin: 13px 13px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.vue-waterfall {
  position: relative;
}
.vue-waterfall-slot {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-right: 5px;
  break-inside: avoid;
}
.flow .flow-wrap .flow-card {
  position: relative;
  width: 100%;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  height: 100%;
  margin-bottom: 10px;
}
.flow-biu-card .img-box[data-v-ab4551c4] {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}
.flow-biu-card .img-box img[data-v-ab4551c4] {
  width: 100%;
  display: block;
}
.flow-biu-card .content-box[data-v-ab4551c4] {
  width: 100%;
  margin-top: 0.1rem;
}
.flow-biu-card .content-box .title[data-v-ab4551c4] {
  height: 76px;
  font-size: 14px;
  line-height: 19px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 600;
}
.flow-biu-card .content-box .other-box[data-v-ab4551c4] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 0;
  height: 0.36rem;
}
.flow-biu-card .content-box .other-box .author[data-v-ab4551c4] {
  display: inline-block;
  vertical-align: middle;
}
.flow-biu-card .content-box .other-box .author .avatar[data-v-ab4551c4] {
  display: inline-block;
  vertical-align: middle;
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.1rem;
  border-radius: 50%;
  overflow: hidden;
  background: url(//fes.qyerstatic.com/FurPR8aA_RznD30juuPr3LhFdOiY?imageslim)
    no-repeat 50%;
  background-size: 100%;
}
.flow-biu-card .content-box .other-box .author .name[data-v-ab4551c4] {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.22rem;
  line-height: 0.36rem;
  color: rgba(0, 0, 0, 0.4);
}
.flow-biu-card .content-box .other-box .nums[data-v-ab4551c4] {
  display: inline-block;
  color: #666;
  vertical-align: middle;
  font-family: special;
}
.flow-biu-card .content-box .other-box .nums .like-icon[data-v-ab4551c4] {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…AgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=)
    no-repeat 50%;
  background-size: 100%;
  width: 0.26rem;
  height: 0.36rem;
  margin-right: 0.08rem;
}
.flow-biu-card .content-box .other-box .nums span[data-v-ab4551c4] {
  font-size: 0.32rem;
  line-height: 0.36rem;
  padding-top: 3px;
}
.flow-biu-card .content-box .other-box .nums i[data-v-ab4551c4],
.flow-biu-card .content-box .other-box .nums span[data-v-ab4551c4] {
  display: inline-block;
  vertical-align: middle;
}
</style>
