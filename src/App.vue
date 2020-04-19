<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left clipped-right>
      <div class="d-flex align-center">

        <div id="nav">
          <router-link to="/"><span class="display-1">Master Strike</span></router-link>
          <!-- <router-link to="/about"><span>About</span></router-link> -->
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

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

    <v-footer
      app
      color="primary"
      class="white--text"
    >
      <v-spacer />
      <span>2020</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
    drawer: true,
    showScrollToTop: false
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showScrollToTop = window.scrollY > 0;
    }
  }
};
</script>

<style scoped>
  span {
    color: #fff !important;
  }

  .scroll-top {
    margin-bottom: 48px;
  }
</style>>
