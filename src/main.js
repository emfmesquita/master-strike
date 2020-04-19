import App from "./App.vue";
import BulletPointDescription from "./components/shared/BulletPointDescription.vue"
import DescriptionComponent from "./components/shared/DescriptionComponent.vue"
import DescriptionGroup from "./components/shared/DescriptionGroup.vue"
import Vue from "vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// shared components
Vue.component('shared-description-component', DescriptionComponent);
Vue.component('shared-description-group', DescriptionGroup);
Vue.component('shared-bullet-point-description', BulletPointDescription);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
