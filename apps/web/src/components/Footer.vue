<template>
  <div>
    <v-snackbar class="snackbar" color="primary" :value="$store.getters.disclaimer" multi-line timeout="-1">
      <p class="disclaimer text-center">
        This is an unofficial fan-base site for <b>Legendary: A Marvel Deck Building Game</b>. Use it for research only. All card contents are <a href="http://www.upperdeck.com/" target="_blank">Upper Deck®</a> creatively owned. We strongly incentivize you to <a href="https://upperdeckstore.com/games-collectibles/legendary.html" target="_blank">buy the game</a>. <router-link to="/about#fairuse">More Info</router-link>
      </p>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="closeDisclaimer"
        >
          I Agree
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["closeDisclaimer"])
  }
}
</script>

<style lang="scss">
  div.v-snack:not(.v-snack--absolute) {
      height: 99%;
  }

  .snackbar {
    color: white !important;

    a {
      color: white !important;
      font-weight: bold;
    }
  }
</style>