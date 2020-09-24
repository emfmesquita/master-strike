import App from "./App.vue";
import BulletPointDescription from "./components/shared/BulletPointDescription.vue";
import CardGroup from "./components/shared/CardGroup.vue";
import DescriptionComponent from "./components/shared/DescriptionComponent.vue";
import DescriptionGroup from "./components/shared/DescriptionGroup.vue";
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Rule from "./components/shared/Rule.vue";
import SideBar from './components/SideBar.vue';
import Vue from "vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// shared components
Vue.component('shared-description-component', DescriptionComponent);
Vue.component('shared-description-group', DescriptionGroup);
Vue.component('shared-bullet-point-description', BulletPointDescription);
Vue.component('shared-rule', Rule);
Vue.component('shared-header', Header);
Vue.component('shared-footer', Footer);
Vue.component('shared-side-bar', SideBar);
Vue.component('shared-card-group', CardGroup);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
