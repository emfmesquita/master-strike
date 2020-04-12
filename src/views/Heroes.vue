<template>
  <v-container>
    <v-row :key="hero.name" v-for="hero in heroes">
      <v-col cols="12">
        <Hero :hero="hero" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Hero from "../components/hero/Hero.vue";
import coreset from "../cards/coreset";

export default {
  name: "HelloWorld",
  components: { Hero },
  data: () => ({
    heroes: coreset.heroes
  })
};
</script>
