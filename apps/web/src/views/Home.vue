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
      <v-row class="buttons" justify="center">
        <v-col>
          <HomeButton to="/heroes" label="Heroes" />
          <HomeButton to="/masterminds" label="Masterminds" />
          <HomeButton to="/villains" label="Villains" />
          <HomeButton to="/henchmen" label="Henchmen" />
          <HomeButton to="/schemes" label="Schemes" />
          <HomeButton to="/bystanders" label="Bystanders" />
          <HomeButton to="/wounds" label="Wounds" />
          <HomeButton to="/officers" label="Officers" />
          <HomeButton to="/sidekicks" label="Sidekicks" />
          <HomeButton to="/keywords" label="Keywords" />
          <HomeButton to="/solo" label="Solo (Experimental)" />
          <HomeButton to="/about" label="About" />
        </v-col>
      </v-row>
    </v-container>

    <shared-footer />
  </div>
</template>

<script>
import HomeButton from "../components/shared/HomeButton";

export default {
  name: "Heroes",
  data: () => ({}),
  components: { HomeButton },
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

  .buttons > div {
    max-width: 960px;
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
      padding-top: 40px;
    }

    .buttons {
      padding-top: 40px;
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
