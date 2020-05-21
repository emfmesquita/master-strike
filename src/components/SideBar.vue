<template>
  <v-navigation-drawer app clipped permanent :mini-variant="colapsed" :width="width" stateless>
    <div class="pa-1" v-if="collapsable">
      <div class="collapse-toolbar">
        <v-btn class="ma-2 float-right" icon color="pink" @click="toggleSideBar">
          <v-icon v-if="colapsed">mdi-arrow-expand-right</v-icon>
          <v-icon v-else>mdi-arrow-collapse-left</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>
    </div>
    <slot name="collapsed" v-if="colapsed"></slot>
    <div v-else class="pa-2">
      <slot></slot>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "SideBar",
  data() {
    return {};
  },
  computed: {
    collapsable() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    colapsed() {
      return this.collapsable && this.$store.getters.sideBarCollapsed;
    },
    width() {
      if(this.$vuetify.breakpoint.smAndUp) return undefined;
      return this.colapsed ? undefined : "100%";
    }
  },
  methods: {
    ...mapActions(["toggleSideBar"])
  }
}
</script>

<style>
.collapse-toolbar{
  height: 52px;
}
</style>