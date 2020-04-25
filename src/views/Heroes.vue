<template>
  <div>
    <v-navigation-drawer app clipped>
      <v-container>
        <v-row align="center">
          <v-col cols="12">
            <v-select
              v-model="filter.set"
              :items="sets"
              label="Set"
              item-text="label"
              item-value="id"
              @change="filterChanged"
            />
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-select
              v-model="filter.team"
              :items="teams"
              multiple
              chips
              deletable-chips
              item-text="label"
              item-value="id"
              label="Team"
              @change="filterChanged"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-container>
      <template v-if="heroes.length">
        <v-row :key="heroKey(hero)" v-for="hero in heroes">
          <v-col cols="12">
            <Hero :hero="hero" />
          </v-col>
        </v-row>
      </template>
      <v-row v-else>
        <v-col cols="12">
          <div class="text-center title">No Cards Founds</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Hero from "../components/hero/Hero.vue";
import { cards } from "../data";
import { setsArray } from "../constants/sets";
import { teamArray } from "../constants/team";

let allHeroes = [];
Object.values(cards).forEach(setCards => {
  if(setCards.heroes && setCards.heroes.length) {
    allHeroes = allHeroes.concat(setCards.heroes);
  }
});

allHeroes.sort((a, b) => a.name.localeCompare(b.name));
allHeroes = Object.freeze(allHeroes);

let teams = teamArray.concat([]);
teams.sort((a, b) => a.label.localeCompare(b.label));
teams = Object.freeze(teams);

export default {
  name: "HelloWorld",
  components: { Hero },
  data: () => ({
    sets: setsArray,
    teams: teams,
    filter: {
      set: 0,
      team: []
    },
    heroes: []
  }),
  created() {
    this.filter.set = this.toInteger(this.$route.query.set);
    if(!setsArray[this.filter.set - 1]) this.filter.set = 0;

    this.filter.team = this.toIntegerArray(this.$route.query.team);
    this.filter.team = this.filter.team.filter(team => teamArray[team]);

    this.search();
  },
  methods: {
    toInteger(value) {
      const interger = Number.parseInt(value);
      return Number.isNaN(interger) ? -1 : interger;
    },
    toIntegerArray(value) {
      if(!value) return [];
      const tokens = value.split(",");
      return tokens.map(token => this.toInteger(token)).filter(token => token >= 0);
    },
    heroKey(hero) {
      return hero.team + hero.name;
    },
    filterChanged() {
      this.$vuetify.goTo(0);
      this.search();
      const query = {};
      if(this.filter.set) query.set = this.filter.set;
      if(this.filter.team.length) {
        query.team = this.filter.team.join(",");
      }
      this.$router.replace({
        path: this.$route.path,
        query
      });
    },
    search() {
      this.heroes = allHeroes;
      if(this.filter.set) this.heroes = this.heroes.filter(hero => hero.set === this.filter.set);
      if(this.filter.team.length) {
        const team = this.filter.team;
        this.heroes = this.heroes.filter(hero => {
          if(team.indexOf(hero.team) >= 0) return true;
          if(!hero.cards) return false;
          return hero.cards.some(card => team.indexOf(card.team) >= 0);
        });
      }
    }
  }
};
</script>
