<template>
  <div id="app">
    <router-view/>
    <Qfoot/>
  </div>
</template>



<script lang="ts">
// import "./amazecss/amazeui.min.css";
// import jquery from "jquery";
import { Component, Vue } from "vue-property-decorator";
import Qfoot from "@/components/Qfoot.vue";
@Component({
  components: {
    Qfoot
  },
  mounted() {
    // console.log(jquery);
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul li{
  list-style: none ;
}
*{
  margin: 0;
  padding:0;
}body{
background-color:rgb(245, 245, 245);
}

</style>
