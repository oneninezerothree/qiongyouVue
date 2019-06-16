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
// import Vue from 'vue';
import { Component, Vue } from "vue-property-decorator";
import One from "@/components/One.vue";
import Two from "@/components/Two.vue";
import Three from "@/components/Three.vue";
import Four from "@/components/Four.vue";
import Five from "@/components/Five.vue";
import Six from "@/components/Six.vue";
import Seven from "@/components/Seven.vue";
import Eight from "@/components/Eight.vue";
@Component({
  components: {
   One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight
  },
  created() {
    this.$store.state.aphts = this.$route.path;
    this.$store.state.isFooter = 1;
  }
})
export default class Home extends Vue {}
</script>
