<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>

    <v-btn
      class="scroll-top"
      fixed
      dark
      fab
      bottom
      right
      color="pink"
      v-show="showScrollToTop"
      @click="$vuetify.goTo(0)"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
    drawer: true,
    scrolled: false
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    showScrollToTop() {
      const fullSizeSideBar = this.$vuetify.breakpoint.mdAndDown && !this.$store.getters.sideBarCollapsed;
      return this.scrolled && !fullSizeSideBar;
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 1000;
    }
  }
};
</script>

<style scoped>
  .scroll-top {
    margin-bottom: 48px;
  }
</style>
