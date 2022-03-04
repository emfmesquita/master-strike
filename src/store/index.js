import Vue from "vue";
import Vuex from "vuex";
import { getObj, saveObj } from "../services/storageUtils";
import KEYS from "../constants/storage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarCollapsed: true,
    disclaimer: !getObj(KEYS.DISCLAIMER_AGREED),
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
      saveObj(KEYS.DISCLAIMER_AGREED, true);
      context.commit('closeDisclaimer');
    },
    canZoom(context, canZoom) {
      context.commit('canZoom', canZoom);
    },
  },
  modules: {}
});
