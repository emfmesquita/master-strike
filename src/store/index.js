import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarCollapsed: true,
    disclaimer: true,
    canZoom: false,
  },
  getters: {
    sideBarCollapsed: state => state.sideBarCollapsed,
    disclaimer: state => state.disclaimer,
    canZoom: state => state.canZoom,
  },
  mutations: {
    toggleSideBar(state) {
      state.sideBarCollapsed = !state.sideBarCollapsed;
    },
    closeDisclaimer(state) {
      state.disclaimer = false;
    },
    canZoom(state, canZoom) {
      state.canZoom = canZoom;
    },
  },
  actions: {
    toggleSideBar(context) {
      context.commit('toggleSideBar');
    },
    closeDisclaimer(context) {
      context.commit('closeDisclaimer');
    },
    canZoom(context, canZoom) {
      context.commit('canZoom', canZoom);
    },
  },
  modules: {}
});
