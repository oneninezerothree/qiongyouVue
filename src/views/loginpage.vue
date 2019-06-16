<template>
   <div class="loginpage">
      <loginIn/>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import loginIn from '@/components/loginIn.vue'
@Component({
  components: {
    loginIn,
  },
})
export default class Home extends Vue {}
</script>
