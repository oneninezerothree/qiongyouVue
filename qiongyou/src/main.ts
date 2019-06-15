import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// import "../mycss/amazeui.css";
// import "./amazecss/amazecss.min.css";
// import "./amazejs/amazejs.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
