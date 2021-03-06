import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/heroes",
    name: "Heroes",
    component: () =>
    import(/* webpackChunkName: "heroes" */ "../views/Heroes.vue")
  },
  {
    path: "/masterminds",
    name: "Masterminds",
    component: () =>
    import(/* webpackChunkName: "masterminds" */ "../views/Masterminds.vue")
  },
  {
    path: "/villains",
    name: "Villains",
    component: () =>
    import(/* webpackChunkName: "villains" */ "../views/Villains.vue")
  },
  {
    path: "/henchmen",
    name: "Henchmen",
    component: () =>
    import(/* webpackChunkName: "henchmen" */ "../views/Henchmen.vue")
  },
  {
    path: "/schemes",
    name: "Schemes",
    component: () =>
    import(/* webpackChunkName: "schemes" */ "../views/Schemes.vue")
  },
  {
    path: "/random",
    name: "Random",
    component: () =>
    import(/* webpackChunkName: "random" */ "../views/Random.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/donate",
    name: "Donate",
    component: () =>
    import(/* webpackChunkName: "donate" */ "../views/Donate.vue")
  },
  {
    path: "*",
    name: "Fallback",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
});

export default router;
