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
    drawer: true
  })
};
</script>

<style scoped>
  span {
    color: #fff !important;
  }
</style>>
