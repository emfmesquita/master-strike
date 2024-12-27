<template>
  <div class="home" :class="sizeClass">

    <v-container class="text-center container">
      <v-row>
        <v-col class="logo-title-container">
          <img src="/masterstrike.svg" class="logo" />
          <div class="logo-title" :class="titleClass">Master Strike</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="logo-sub-title-container">
          <div class="logo-sub-title" :class="subtitleClass">A Legendary Card Database</div>
        </v-col>
      </v-row>
      <v-row class="buttons">
        <v-col>
          <v-btn color="primary" x-large to="/heroes" class="ma-3">Heroes</v-btn>
          <v-btn color="primary" x-large to="/masterminds" class="ma-3">Masterminds</v-btn>
          <v-btn color="primary" x-large to="/villains" class="ma-3">Villains</v-btn>
          <v-btn color="primary" x-large to="/henchmen" class="ma-3">Henchmen</v-btn>
          <v-btn color="primary" x-large to="/schemes" class="ma-3">Schemes</v-btn>
          <v-btn color="primary" x-large to="/bystanders" class="ma-3">Bystanders</v-btn>
          <v-btn color="primary" x-large to="/wounds" class="ma-3">Wounds</v-btn>
          <v-btn color="primary" x-large to="/keywords" class="ma-3">Keywords</v-btn>
          <v-btn color="primary" x-large to="/about" class="ma-3">About</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <shared-footer />
  </div>
</template>

<script>
export default {
  name: "Heroes",
  data: () => ({}),
  computed: {
    lg() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    sizeClass() {
      return this.lg ? "lg" : "sm";
    },
    titleClass() {
      return this.lg ? "text-h1" : "text-h4";
    },
    subtitleClass() {
      return this.lg ? "text-h4" : "text-subtitle-2";
    }
  }
}
</script>

<style lang="scss" scoped>

.home {

  .logo-title, .logo-sub-title {
    color: #1976d2;
    font-family: 'Bangers', cursive !important;
    display: inline-block;
  }

  .logo-title-container {
    padding-bottom: 0px;
  }

  .logo-sub-title-container {
    padding-top: 0px;
  }

  .logo {
    display: inline-block;
    position: absolute;
  }

  &.lg {
    .container {
      padding-top: 60px;
    }

    .buttons {
      padding-top: 60px;
    }

    .logo-title {
      padding-left: 150px;
    }

    .logo-sub-title {
      padding-left: 280px;
    }

    .logo {
      height: 150px;
    }
  }

  &.sm {
    .container {
      padding-top: 60px;
    }

    .buttons {
      padding-top: 60px;
    }

    .logo-title {
      padding-left: 80px;
    }

    .logo-sub-title {
      padding-left: 116px;
    }

    .logo {
      height: 80px;
    }
  }

}
</style>
