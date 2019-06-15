<template>
  <div>
    <Decresh/>
  </div>
</template>

<script>
import Vue from "vue";
import Decresh from "@/components/destination/Decresh.vue";

export default Vue.extend({
  components: {
    Decresh
  },
  created() {
    console.log(this.$route.path, "这是目的地的路径");
    this.$store.state.aphts = this.$route.path;
    this.$store.state.isFooter = 0;
  },
  activated() {
    this.$store.state.isFooter = 1;
  },
  deactivated() {
    this.$store.state.isFooter = 1;
  }
});
</script>