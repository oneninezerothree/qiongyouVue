<template>
  <div>
    <Destinatop/>
    <Destinaleft/>
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue";
import Destinatop from "@/components/destination/Destinatop.vue";
import Destinaleft from "@/components/destination/Destinaleft.vue";
export default Vue.extend({
  components: {
    Destinatop,
    Destinaleft
  },
  created() {
    console.log(this.$route.path, "这是目的地的路径");
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