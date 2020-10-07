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
    },
    classes() {
      return {
        xl: this.$vuetify.breakpoint.xlOnly
      }
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 1000;
    }
  }
};
</script>

<style lang="scss">
  .scroll-top {
    margin-bottom: 6px;
  }

  .xlzoom {
    zoom: 1.25
  }

  .absolute-icon {
    position: absolute;
    user-select: none;
  }

  .chip-ellipsis {
    cursor: pointer;
    .v-chip__content {
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block !important;
      line-height: 32px;
    }
  }
</style>
