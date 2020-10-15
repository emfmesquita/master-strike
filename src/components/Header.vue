<template>
  <v-app-bar 
      app 
      dark 
      clipped-right 
      clipped-left 
      color="primary" 
      class="header" 
      :hide-on-scroll="!lg"
      :value="show || lg"
      @input="onInput"
    >
    <div class="d-flex align-center">

      <div id="nav">
        <router-link to="/">
          <template v-if="lg">
            <img src="/masterstrike.svg" class="logo" />
            <span class="text-h4 logo-label" style="padding-left: 54px">Master Strike</span>
          </template>
          <template v-else>
            <img src="/masterstrike.svg" class="logo sm" />
            <span class="text-h6 logo-label" style="padding-left: 26px">Master Strike</span>
          </template>
        </router-link>
      </div>
    </div>

    <v-spacer></v-spacer>

    <span v-if="lg" class="text-h5 logo-label">{{ $route.name }}</span>
    <span v-else class="text-subtitle-1 logo-label">{{ $route.name }}</span>

    <slot name="right-toolbar">
      <v-menu tile offset-y nudge-bottom="10" offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-if="lg" text class="ml-3" v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-btn v-else text small class="ml-2 px-0" style="min-width: 30px" v-bind="attrs" v-on="on">
            <v-icon small>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list color="primary" class="white--text">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-btn text small block color="white" :to="item.to">{{ item.title }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </slot>
  </v-app-bar>
</template>

<script>

const items = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "Heroes",
    to: "/heroes"
  },
  {
    title: "Masterminds",
    to: "/masterminds"
  },
  {
    title: "Villains",
    to: "/villains"
  },
  {
    title: "Henchmen",
    to: "/henchmen"
  },
  {
    title: "Schemes",
    to: "/schemes"
  },
  {
    title: "About",
    to: "/about"
  },
  {
    title: "Donate",
    to: "/donate"
  },
];

export default {
  name: "Header",
  data() {
    return {
      items,
      show: true
    };
  },
  computed: {
    lg() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  },
  methods: {
    onInput(newValue) {
      this.show = newValue;
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding-top: 2px;
    z-index: 102 !important;

    .logo {
      position: absolute;
      bottom: 10px;
      height: 48px;

      &.sm {
        left: 8px;
        bottom: 10px;
        height: 32px;
      }
    }
    .logo-label {
      font-family: 'Bangers', cursive !important;
    }
    span {
      color: #fff !important;
    }
  }
</style>