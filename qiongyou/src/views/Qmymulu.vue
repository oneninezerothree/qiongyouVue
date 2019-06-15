<template>
  <div>
    <Myqiongtop/>
    <Myqiongman/>
  </div>
</template>



<script>
import Vue from "vue";
import Myqiongtop from "@/components/myqiong/Myqiongtop.vue";
import Myqiongman from "@/components/myqiong/Myqiongman.vue";

export default Vue.extend({
  components: {
    Myqiongtop,
    Myqiongman
  },
  created() {
    this.$store.state.aphts = this.$route.path;
    this.$store.state.isFooter = 1;
  },
  activated() {
    this.$store.state.isFooter = 1;
  },
  deactivated() {
    this.$store.state.isFooter = 0;
  }
});
</script>