<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <v-container class="card-filter">
        <v-row align="center">
          <v-col cols="12">
            <v-btn 
              block 
              color="pink"
              class="white--text"
              @click="randomize"
            >
              <v-icon left>mdi-refresh</v-icon> Randomize
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <SetFilter v-model="filter.set" :cardTypes="[1,2]" @input="filterChanged"/>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-text-field
              v-model="filter.nHeroes"
              min="1"
              max="12"
              label="Number of Heroes"
              required
              type="number"
              @change="numberOfHeroesChanged"
              @keyup.enter="$event.target.blur()"
            />
          </v-col>
        </v-row>
      </v-container>
      <template v-slot:collapsed>
            <v-btn 
              block 
              color="pink"
              class="white--text pa-0"
              @click="randomize"
            >
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
      </template>
    </shared-side-bar>
    <v-container style="paddingBottom: 100px" :class="{ xlzoom: $vuetify.breakpoint.xl }">
      <template v-if="heroes.length">
        <v-lazy min-height="410" :key="heroKey(hero)" v-for="hero in heroes">
          <v-row>
            <v-col cols="12">
              <CardGroup :group="hero">
                <template v-slot:default="{ card }">
                  <HeroCard :card="card" :hero="hero"/>
                </template>
              </CardGroup>
            </v-col>
          </v-row>
        </v-lazy>
      </template>
    </v-container>

    <shared-footer />
  </div>
</template>

<script>
import HeroCard from "../components/hero/HeroCard.vue";
import CardGroup from "../components/shared/CardGroup.vue";
import { setsArray } from "../constants/sets";
import { toIntArray, toInteger } from "../services/queryUtils";
import { getAllHeroes } from "../services/cardUtils";
import { randomArray } from "../services/randomUtils";
import SetFilter from "../components/shared/filter/SetFilter.vue";

const allHeroes = getAllHeroes();

const safeNumberOfHeroes = nHeroes => {
  nHeroes = toInteger(nHeroes);
  if(nHeroes < 1) return 1;
  if(nHeroes > 12) return 12;
  return nHeroes;
}

export default {
  name: "Random",
  data: () => ({
    sets: setsArray,
    heroes: [],
    filter: {
      set: [],
      nHeroes: 5
    },
    lastRandomizeTime: 0,
  }),
  components: { HeroCard, CardGroup, SetFilter },
  created() {
    const query = this.$route.query;
    if(!query.fs) {
      this.filter.set = setsArray.map(set => set.id);
    } else {
      this.filter.set = toIntArray(query.fs).filter(set => setsArray[set]);
    }
    this.filter.nHeroes = query.fh ? safeNumberOfHeroes(query.fh) : 5;
    if(query.h) {
      let heroIds = toIntArray(query.h);
      heroIds = [...new Set(heroIds)];
      heroIds.forEach(id => {
        const hero = allHeroes.find(hero => hero.id === id);
        if(hero) this.heroes.push(hero);
      });
    }
  },
  computed: {
    selectedSetsLabel() {
      const sets = this.filter.set;
      if(sets.length === 1) return "1 Set";
      if(sets.length === setsArray.length) return "All Sets";
      return `${sets.length} Sets`;
    }
  },
  methods: {
    heroKey(hero) {
      return `${this.lastRandomizeTime}-${hero.team}-${hero.name}`;
    },
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.set.length && filter.set.length < setsArray.length) query.fs = filter.set.join(",");
      if(filter.nHeroes !== 5) query.fh = "" + filter.nHeroes;
      if(this.heroes.length) query.h = this.heroes.map(hero => hero.id).join(",");

      this.$router.replace({
        path: this.$route.path,
        query
      });
    },
    numberOfHeroesChanged() {
      this.filter.nHeroes = safeNumberOfHeroes(this.filter.nHeroes);
      this.filterChanged();
    },
    filterChanged() {
      this.setQuery();
    },
    randomize() {
      const sets = this.filter.set;
      const filteredHeroes = allHeroes.filter(hero => !sets.length || sets.indexOf(hero.set) >= 0);
      if(filteredHeroes.length) {
        const randArray = randomArray(0, filteredHeroes.length, this.filter.nHeroes);
        const heroes = randArray.map(rand => filteredHeroes[rand]);
        heroes.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        this.heroes = heroes;
      } else {
        this.heroes = [];
      }
      this.setQuery();
    }
  }
}
</script>

<style lang="scss">
</style>