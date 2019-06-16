import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFooter: 0,
    aphts: "/",
    shows:[],
    goods:[]
  },
  mutations: {
    getgoods(state,value){
      state.goods=[];
      state.goods.push(value);
      console.log(state.goods)
    }
  },
  actions: {

  },
});
