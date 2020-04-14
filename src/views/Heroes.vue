<template>
  <div>
    <v-navigation-drawer app clipped>
      <v-container>
        <v-row align="center">
          <v-col cols="12">
            <v-select
              v-model="selected"
              :items="expansions"
              attach
              label="Expansions"
            >
              <template slot="selection" slot-scope="data">
                {{ data.item.label }}
              </template>
              <template slot="item" slot-scope="data">
                {{ data.item.label }}
              </template>
            </v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-container>
      <v-row :key="hero.name" v-for="hero in heroes">
        <v-col cols="12">
          <Hero :hero="hero" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Hero from "../components/hero/Hero.vue";
import cards from "../cards/all";
import { expansionsArray } from "../constants/expansions";

export default {
  name: "HelloWorld",
  components: { Hero },
  computed: {
    heroes() {
      const expansionCards =  cards[this.selected];
      return expansionCards ? expansionCards.heroes || [] : [];
    }
  },
  data: () => ({
    expansions: expansionsArray,
    selected: "revelations"
  })
};
</script>
