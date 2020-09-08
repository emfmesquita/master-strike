<template>
  <v-footer
    app
    color="primary"
    class="footer"
    :class="sizeClasses"
  >
    <v-spacer></v-spacer>
    <p class="disclaimer text-center">
      This page is a fan-based on <b>Legendary: A Marvel Deck Building Game</b>, use it for research only. All card contents are <a href="http://www.upperdeck.com/" target="_blank">Upper Deck®</a> creatively owned. We strongly incentive you to <a href="https://upperdeckstore.com/games-collectibles/legendary.html" target="_blank">buy the game</a>.
    </p>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  computed: {
    sizeClasses() {
      return {
        sm: this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.sm,
        xs: this.$vuetify.breakpoint.xs
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    max-height: 42px;
    font-size: 12px;
    padding-top: 4px;
    color: white !important;

    &.sm {
      font-size: 11px;

      .disclaimer {
        padding-top: 0px;
      }
    }

    &.xs {
      font-size: 8px;
      padding-left: 0px;
      padding-right: 0px;

      .disclaimer {
        padding-top: 0px;
      }
    }

    a {
      color: white !important;
      font-weight: bold;
    }

    .disclaimer {
      padding-top: 6px;
    }
  }
</style>