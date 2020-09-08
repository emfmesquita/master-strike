import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarCollapsed: true,
    disclaimer: true
  },
  getters: {
    sideBarCollapsed: state => state.sideBarCollapsed,
    disclaimer: state => state.disclaimer
  },
  mutations: {
    toggleSideBar(state) {
      state.sideBarCollapsed = !state.sideBarCollapsed;
    },
    closeDisclaimer(state) {
      state.disclaimer = false;
    }
  },
  actions: {
    toggleSideBar(context) {
      context.commit('toggleSideBar');
    },
    closeDisclaimer(context) {
      context.commit('closeDisclaimer');
    },
  },
  modules: {}
});
