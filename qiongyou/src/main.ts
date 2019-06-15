import Vue from 'vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);//全局使用ElementUI
import './registerServiceWorker';

// import "../mycss/amazeui.css";
// import "./amazecss/amazecss.min.css";
// import "./amazejs/amazejs.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
