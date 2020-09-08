<template>
  <v-app-bar app color="primary" class="header" dark clipped-left clipped-right>
    <div class="d-flex align-center">

      <div id="nav">
        <router-link to="/">
          <template v-if="lg">
            <img src="/masterstrike.svg" class="logo" />
            <span class="text-h4 logo-label" style="padding-left: 54px">Master Strike</span>
          </template>
          <template v-else>
            <img src="/masterstrike.svg" class="logo sm" />
            <span class="text-h5 logo-label" style="padding-left: 26px">Master Strike</span>
          </template>
        </router-link>
        <!-- <router-link to="/about"><span>About</span></router-link> -->
      </div>
    </div>

    <v-spacer></v-spacer>

    <span v-if="lg" class="text-h5 logo-label">{{ $route.name }}</span>
    <span v-else class="text-h6 logo-label">{{ $route.name }}</span>

    <slot name="right-toolbar">
      <v-menu tile offset-y nudge-bottom="10" offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text :small="!lg" class="ml-3" v-bind="attrs" v-on="on">
            <v-icon :small="!lg">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list color="primary" class="white--text">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-btn text small color="white" :to="item.to">{{ item.title }}</v-btn>
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
    title: "About",
    to: "/about"
  },
];

export default {
  name: "Header",
  data() {
    return {
      items
    };
  },
  computed: {
    lg() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding-top: 2px;

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