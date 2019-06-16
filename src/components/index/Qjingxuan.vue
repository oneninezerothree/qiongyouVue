<template>
  <div>
    <section class="ui-section-wrapper z-world-cate">
      <div class="ui-section-head">
        <span class="ui-section-title">精选玩乐</span>
        <!---->
      </div>

      <div class="ui-section-body">
        <ul class="index-subcategory-list">
          <li v-for="(stem,index) in tejia" :key="index">
            <a href data-bn-ipg="index-z-second-1">
              <img :src="stem.urlt">
              <span>{{stem.names}}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tejia: [
        {
          names: "特价机票",
          urlt: "/img/fexing/fei.png"
        },
        {
          names: "机酒自由行",
          urlt: "/img/fexing/fei2.png"
        },
        {
          names: "当地玩乐",
          urlt: "/img/fexing/fei3.png"
        },
        {
          names: "门票/票券",
          urlt: "/img/fexing/fei4.png"
        },
        {
          names: "日本高铁",
          urlt: "/img/fexing/fei5.png"
        },
        {
          names: "Wifi电话卡",
          urlt: "/img/fexing/fei56.png"
        },
        {
          names: "欧铁频道",
          urlt: "/img/fexing/fei7.png"
        },
        {
          names: "保险频道",
          urlt: "/img/fexing/fei7.png"
        },
        {
          names: "接送机/包接",
          urlt: "/img/fexing/fei1.png"
        }
      ]
    };
  }
});
</script>


<style  scoped>
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

.z-world-slide .index-choiceProduct-list {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.index-subcategory-list,
.index-subcategory-list li {
  display: flex;
}
.index-subcategory-list {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 5px;
}
.index-subcategory-list li {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 31%;
  flex: 0 0 31.3%;
  width: 33.33%;
  height: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 6px auto;
}
.index-subcategory-list li a {
  display: block;
  position: relative;
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.index-subcategory-list li a img {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5px;
  bottom: 0;
  display: block;
}
.index-subcategory-list li a img,
.index-subcategory-list li a span {
  vertical-align: middle;
  font-weight: 500;
}

.index-subcategory-list li a {
  display: block;
  position: relative;
  width: 100%;
  height: 35px;
  text-align: left;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
