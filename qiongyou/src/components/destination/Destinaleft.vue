<template>
  <div class="destination-tabs">
    <ul class="destination-tab">
      <li
        v-for="(lis,index) in list"
        :key="index"
        @click="options(index)"
        :class="{'current':lis.isactiv} "
      >
        <h2>{{lis.name}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      list: [
        {
          name: "亚洲",
          isactiv: true
        },
        {
          name: "欧洲",
          isactiv: false
        },
        {
          name: "非洲",
          isactiv: false
        },
        {
          name: "大洋洲",
          isactiv: false
        },
        {
          name: "北美",
          isactiv: false
        },
        {
          name: "南美",
          isactiv: false
        },
        {
          name: "南极洲",
          isactiv: false
        }
      ]
    };
  },
  methods: {
    options(tabs) {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].isactiv = false;
      }
      this.list[tabs].isactiv = true;
      var taba = tabs + 1;
      this.$router.push({
        name: "ob" + taba
      });
    }
  }
});
</script>
<style scoped>
.destination-tabs {
  width: 94px;
  float: left;
  overflow: hidden;
  background-color: #f7f7f7;
}
.destination-tab {
  min-height: 100%;
  border-right: 1px solid #e6e6e6;
  padding-left: 1px;
}

.destination-tab li {
  border-top: 1px solid #e6e6e6;
  list-style: none;
  height: 54px;
}
.destination-tab li.current {
  position: relative;
  background-color: #fff;
}
.destination-tab h2 {
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 54px;
  margin: 0;
}
</style>
