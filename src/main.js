import App from "./App.vue";
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
