<template>
  <div>
    <Qindextop/>
    <Qlunbo/>
    <Qnav/>
    <Qzhekou/>
    <Qjingxuan/>
    <Qlist/>
  </div>
</template>

<script lang="ts">


import { Component, Vue } from "vue-property-decorator";
import Qindextop from "@/components/index/Qindextop.vue"; // @ is an alias to /src
import Qlunbo from "@/components/index/Qlunbo.vue";
import Qnav from "@/components/index/Qnav.vue";
import Qzhekou from "@/components/index/Qzhekou.vue";
import Qjingxuan from "@/components/index/Qjingxuan.vue";
import Qlist from "@/components/index/Qlist.vue";

@Component({
  components: {
    Qindextop,
    Qlunbo,
    Qnav,
    Qzhekou,
    Qjingxuan,
    Qlist,
  },
  created() {
    this.$store.state.aphts = this.$route.path;
    this.$store.state.isFooter = 1;
  }
})
export default class Home extends Vue {}
</script>

