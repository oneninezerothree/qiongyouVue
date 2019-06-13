<template>
  <div>
    <One/>
    <Two/>
    <Three/>
    <Four/>
    <Five/>
    <Six/>
    <Seven/>
    <Eight/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import One from "@/components/One.vue";
import Two from "@/components/Two.vue";
import Three from "@/components/Three.vue";
import Four from "@/components/Four.vue";
import Five from "@/components/Five.vue";
import Six from "@/components/Six.vue";
import Seven from "@/components/Seven.vue";
import Eight from "@/components/Eight.vue";
export default Vue.extend({
  components: {
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight
  }
});
</script> 
