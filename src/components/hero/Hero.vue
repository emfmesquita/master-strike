<template>
  <v-container>
    <v-row>
      <v-col cols="12">{{ hero.name }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" md="3"  v-for="card in hero.cards" :key="card.name">
        <HeroCard :card="card" :hero="hero"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeroCard from "./HeroCard.vue";

export default {
  name: "Hero",
  props: ["hero"],
  components: { HeroCard },
  data: () => ({})
};
</script>
