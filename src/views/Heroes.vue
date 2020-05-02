<template>
  <div>
    <v-navigation-drawer app clipped>
      <v-container>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="filter.set"
              :items="sets"
              multiple
              label="Set"
              item-text="label"
              item-value="id" 
              clearable
              @change="filterChanged"
            >
              <template v-slot:selection="{ item }">
                <v-tooltip top>
                  <template v-slot:activator="{ on }" dense>
                    <span v-on="on">
                      <v-chip class="ma-1" style="cursor: pointer" @click.stop="remove(item.id, 'set')">
                        {{item.initials}}
                      </v-chip>
                    </span>
                  </template>
                  <span>{{ item.label }}</span>
                </v-tooltip>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="filter.team"
              :items="teams"
              multiple
              clearable
              item-text="label"
              item-value="id"
              label="Team"
              @change="filterChanged"
            >
              <template v-slot:selection="{ item }">
                <span style="cursor: pointer" @click.stop="remove(item.id, 'team')">
                  <TeamIcon :icon="item.id" width="40px"/>
                </span>
              </template>
              <template v-slot:item="{ item }">
                <TeamIcon :icon="item.id" width="40px" />
                {{ item.label }}
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="filter.hc"
              :items="heroClasses"
              multiple
              clearable
              item-text="label"
              item-value="id"
              label="Hero Class"
              @change="filterChanged"
            >
              <template v-slot:selection="{ item }">
                <span style="cursor: pointer" @click.stop="remove(item.id, 'hc')">
                  <HeroClassIcon :icon="item.id" width="32px"/>
                </span>
              </template>
              <template v-slot:item="{ item }">
                <HeroClassIcon :icon="item.id" width="32px" />
                {{ item.label }}
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="filter.keyword"
              :items="keywords"
              multiple
              clearable
              item-text="label"
              item-value="id"
              label="Keyword"
              @change="filterChanged"
            >
              <template v-slot:selection="{ item }">
                <v-chip class="ma-1 chip-ellipsis" @click.stop="remove(item.id, 'keyword')">
                  {{item.label}}
                </v-chip>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-container>
      <template v-if="heroes.length">
        <v-row>
          <v-col cols="12">
            <div class="text-center title">{{ heroes.length }} {{ heroFound }}</div>
          </v-col>
        </v-row>
        <v-lazy min-height="410" :key="heroKey(hero)" v-for="hero in heroes">
          <v-row>
            <v-col cols="12">
              <Hero :hero="hero" />
            </v-col>
          </v-row>
        </v-lazy>
      </template>
      <v-row v-else>
        <v-col cols="12">
          <div class="text-center title">No Heroes Founds</div>
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
import { heroClassArray } from "../constants/hero-class";
import { keywordsArray } from "../constants/keywords";
import TeamIcon from "../components/shared/TeamIcon.vue";
import HeroClassIcon from "../components/shared/HeroClassIcon.vue";

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

let heroClasses = heroClassArray.concat([]);
heroClasses.shift();
heroClasses = Object.freeze(heroClasses);

let keywords = keywordsArray.filter(keyword => keyword.inHeroes);
keywords.sort((a, b) => a.label.localeCompare(b.label));
keywords = Object.freeze(keywords);

export default {
  name: "HelloWorld",
  components: { Hero, TeamIcon, HeroClassIcon },
  data: () => ({
    sets: setsArray,
    teams,
    heroClasses,
    keywords,
    filter: {
      set: [],
      team: [],
      hc: [],
      keyword: []
    },
    lastFilterTime: 0,
    heroes: []
  }),
  created() {
    this.filter.set = this.toIntegerArray(this.$route.query.set);
    this.filter.set = this.filter.set.filter(set => setsArray[set]);

    this.filter.team = this.toIntegerArray(this.$route.query.team);
    this.filter.team = this.filter.team.filter(team => teamArray[team]);

    this.filter.hc = this.toIntegerArray(this.$route.query.hc);
    this.filter.hc = this.filter.hc.filter(hc => heroClassArray[hc]);

    this.filter.keyword = this.toIntegerArray(this.$route.query.keyword);
    this.filter.keyword = this.filter.keyword.filter(keyword => keywordsArray[keyword]);

    this.search();
  },
  computed: {
    heroFound() {
      return this.heroes.length === 1 ? "Hero was found" : "Heroes were found";
    }
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
      return `${this.lastFilterTime}-${hero.team}-${hero.name}`;
    },
    remove(id, filterName) {
      this.filter[filterName] = this.filter[filterName].filter(item => item !== id);
      this.filterChanged();
    },
    filterChanged() {
      this.$vuetify.goTo(0, { duration: 0 });

      this.search();
      const query = {};
      if(this.filter.set.length) {
        query.set = this.filter.set.join(",");
      }
      if(this.filter.team.length) {
        query.team = this.filter.team.join(",");
      }
      if(this.filter.hc.length) {
        query.hc = this.filter.hc.join(",");
      }
      if(this.filter.keyword.length) {
        query.keyword = this.filter.keyword.join(",");
      }
      this.$router.replace({
        path: this.$route.path,
        query
      });
    },
    search() {
      this.heroes = allHeroes;
      this.heroes.forEach(hero => {
        hero.filteredCards = (hero.cards || []).map(card => {
          card.disabled = false;
          return card;
        });
      });

      if(this.filter.set.length) {
        const set = this.filter.set;
        this.heroes = this.heroes.filter(hero => set.indexOf(hero.set) >= 0);
      }

      if(this.filter.team.length) {
        const team = this.filter.team;
        this.heroes = this.heroes.filter(hero => {
          let match = team.indexOf(hero.team) >= 0;
          if(!hero.filteredCards) return match;
          hero.filteredCards.forEach(card => {
            if(card.team === undefined) card.team = hero.team;
            const matchTeam = team.indexOf(card.team) >= 0;
            if(matchTeam) match = true;
            card.disabled = !matchTeam;
          });
          return match;
        });
      }

      if(this.filter.hc.length) {
        const hc = this.filter.hc;
        this.heroes = this.heroes.filter(hero => {
          let match = false;
          hero.filteredCards.forEach(card => {
            if(card.disabled) return;
            const matchHC = hc.indexOf(card.hc) >= 0 || hc.indexOf(card.hc2) >= 0;
            if(matchHC) match = true;
            card.disabled = !matchHC;
          });
          return match;
        });
      }

      if(this.filter.keyword.length) {
        const keyword = this.filter.keyword;
        this.heroes = this.heroes.filter(hero => {
          let match = false;
          hero.filteredCards.forEach(card => {
            if(card.disabled || !card.abilities) return;
            const abs = card.abilities;
            const hasKey = ab => keyword.indexOf(ab.keyword) >= 0;
            const matchKey = abs.some(ab => Array.isArray(ab) ? ab.some(hasKey) : hasKey(ab));
            if(matchKey) match = true;
            card.disabled = !matchKey;
          });
          return match;
        });
      }

      this.heroes.forEach(hero => {
        // make sure divided cards disabled status is consistent
        hero.filteredCards.forEach((card, idx) => {
          if(card.divided !== 1) return;
          const pair = hero.filteredCards[idx + 1];
          if(card.disabled && !pair.disabled) card.disabled = false;
          else if (!card.disabled && pair.disabled) pair.disabled = false;
        });

        hero.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          if(a.rarity > b.rarity) return 1;
          if(a.rarity < b.rarity) return -1;
          if(a.cost > b.cost) return 1;
          if(a.cost < b.cost) return -1;
          if(a.divided > b.divided) return 1;
          if(a.divided < b.divided) return -1;
          return 0;
        });
      });

      this.lastFilterTime = Date.now();
    }
  }
};
</script>

<style lang="scss">
  .chip-ellipsis {
    cursor: pointer;
    .v-chip__content {
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block !important;
      line-height: 32px;
    }
  }
</style>