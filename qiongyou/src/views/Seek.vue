<template>
  <div>
   <Header/>
   <Shenti/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "@/components/Header.vue";
import Shenti from "@/components/Shenti.vue";
export default Vue.extend({
  components: {
    Header,
    Shenti
  }
});
</script> 
<style lang="scss" scoped>
  div{
    overflow: hidden;
  }
</style>
