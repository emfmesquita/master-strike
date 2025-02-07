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
      @click="$vuetify.goTo(0, { duration: 0 })"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import { bus } from "./services/eventBus";
import { screenHeight, screenWidth } from "./services/screenUtils";

export default {
  name: "App",
  data: () => ({
    drawer: true,
    scrolled: false,
    screenHeight: screenHeight(),
    screenWidth: screenWidth(),
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.calculateIfZoomable();
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    showScrollToTop() {
      const fullSizeSideBar = this.$vuetify.breakpoint.mdAndDown && !this.$store.getters.sideBarCollapsed;
      return this.scrolled && !fullSizeSideBar;
    }
  },
  methods: {
    ...mapActions(["canZoom"]),
    handleScroll() {
      this.scrolled = window.scrollY > 1000;
    },
    handleResize(event) {
      const newScreenWidth = screenWidth();
      const newScreenHeight = screenHeight();
      const changedWidth = this.screenWidth !== newScreenWidth;
      const changedHeight = this.screenHeight !== newScreenHeight;
      if(changedWidth) {
        this.screenWidth = newScreenWidth;
        bus.$emit(bus.E.SCREEN_RESIZE_WIDTH, event);
      }
      if(changedHeight) {
        this.screenHeight = newScreenHeight;
        bus.$emit(bus.E.SCREEN_RESIZE_HEIGHT, event);
      }
      if(changedWidth || changedHeight) {
        bus.$emit(bus.E.SCREEN_RESIZE, event);
        this.calculateIfZoomable();
      }
    },
    calculateIfZoomable() {
      const hasZoomHeight = this.screenHeight >= 600;
      const hasZoomWidth = this.screenWidth >= 450;
      const canZoom = hasZoomHeight && hasZoomWidth;
      if(canZoom !== this.$store.getters.canZoom) {
        this.canZoom(canZoom);
      }
    }
  }
};
</script>

<style lang="scss">
  .scroll-top {
    margin-bottom: 6px;
    z-index: 150 !important;
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

  body {
    paint-order: stroke fill;
  }
</style>
