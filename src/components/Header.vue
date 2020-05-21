<template>
  <v-app-bar app color="primary" dark clipped-left clipped-right>
    <div class="d-flex align-center">

      <div id="nav">
        <router-link to="/"><span :class="titleClasses">Master Strike</span></router-link>
        <!-- <router-link to="/about"><span>About</span></router-link> -->
      </div>
    </div>

    <v-spacer></v-spacer>

    <slot name="right-toolbar">
      <!-- <v-btn text>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn> -->
    </slot>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    titleClasses() {
      return {
        'display-1': this.$vuetify.breakpoint.mdAndUp,
        'title': this.$vuetify.breakpoint.smAndDown
      }
    }
  }
}
</script>

<style scoped>
  span {
    color: #fff !important;
  }
</style>