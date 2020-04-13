<template>
  <v-card class="mx-auto hero" outlined>
    <v-container>
      <v-row>
        <v-col cols="12 title">{{ hero.name }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3"  v-for="card in hero.cards" :key="card.name">
          <HeroCard :card="card" :hero="hero"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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

<style scoped lang="scss">
.hero {
  background-color:#f2f2f2;
}
</style>