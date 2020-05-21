import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarCollapsed: true
  },
  getters: {
    sideBarCollapsed: state => state.sideBarCollapsed,
  },
  mutations: {
    toggleSideBar(state) {
      state.sideBarCollapsed = !state.sideBarCollapsed;
    }
  },
  actions: {
    toggleSideBar (context) {
      context.commit('toggleSideBar');
    }
  },
  modules: {}
});
