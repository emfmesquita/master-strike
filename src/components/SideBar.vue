<template>
  <v-navigation-drawer 
    app 
    clipped 
    permanent 
    :mini-variant="collapsed" 
    :width="width" 
    stateless
    v-touch="{
      left: swipeClose,
      right: swipeOpen
    }"
  >
    <div class="pa-1" v-if="collapsable">
      <div class="collapse-toolbar">
        <v-btn class="ma-2 float-right" icon color="pink" @click="toggleSideBar">
          <v-icon v-if="collapsed">mdi-arrow-expand-right</v-icon>
          <v-icon v-else>mdi-arrow-collapse-left</v-icon>
        </v-btn>
      </div>
      <v-divider></v-divider>
    </div>
    <div class="pa-1" v-if="collapsed">
      <slot name="collapsed" v-if="collapsed"></slot>
    </div>
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
    collapsed() {
      return this.collapsable && this.$store.getters.sideBarCollapsed;
    },
    width() {
      if(this.$vuetify.breakpoint.smAndUp) return undefined;
      return this.collapsed ? undefined : "100%";
    }
  },
  methods: {
    ...mapActions(["toggleSideBar"]),
    swipeClose() {
      if(this.collapsable && !this.$store.getters.sideBarCollapsed) {
        this.toggleSideBar();
      }
    },
    swipeOpen() {
      if(this.collapsable && this.$store.getters.sideBarCollapsed) {
        this.toggleSideBar();
      }
    }
  },
  mounted() {
    // always starts collapsed
    if(!this.$store.getters.sideBarCollapsed) {
      this.toggleSideBar();
    }
  }
}
</script>

<style>
.v-navigation-drawer {
  z-index: 101 !important;
}

.collapse-toolbar{
  height: 52px;
}
</style>