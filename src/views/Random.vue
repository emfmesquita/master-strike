<template>
  <div>
    <v-navigation-drawer app clipped>
      <v-container class="card-filter">
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="filter.set"
              :items="sets"
              multiple
              label="Sets"
              item-text="label"
              item-value="id"
              @change="filterChanged"
            >
              <template v-slot:selection="{ index }">
                <template v-if="index === 0">{{ selectedSetsLabel }}</template>
              </template>
            </v-autocomplete>
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
            />
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
    <v-container>
      <v-row>
        <v-col cols="8" sm="4" md="4" lg="2" offset="2" offset-sm="4" offset-md="4" offset-lg="5">
          <v-btn 
            block 
            color="pink"
            class="white--text"
            @click="randomize"
          >
            Randomize
          </v-btn>
        </v-col>
      </v-row>
      <template v-if="heroes.length">
        <v-lazy min-height="410" :key="heroKey(hero)" v-for="hero in heroes">
          <v-row>
            <v-col cols="12">
              <Hero :hero="hero" />
            </v-col>
          </v-row>
        </v-lazy>
      </template>
    </v-container>
  </div>
</template>

<script>
import Hero from "../components/hero/Hero.vue";
import { setsArray } from "../constants/sets";
import { toIntArray, toInteger } from "../services/queryUtils";
import { getAllHeroes } from "../services/cardUtils";
import { randomArray } from "../services/randomUtils";

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
  components: {Hero},
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