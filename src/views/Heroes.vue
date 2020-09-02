<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <v-container class="card-filter">
        <v-row align="center">
          <v-col cols="12">
            <v-btn-toggle
              class="d-flex justify-center"
              v-model="sortMethod"
              mandatory
              @change="sortChanged"
            >
              <v-btn value="alpha">
                <v-icon>mdi-sort-alphabetical-ascending</v-icon>
                <span class="pa-2 subtitle-2">Alpha</span>
              </v-btn>
              <v-btn value="results">
                <v-icon>mdi-cards</v-icon>
                <span class="pa-2 subtitle-2">Results</span>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-text-field
              v-model="filter.search"
              label="Search"
              maxlength="30"
              clearable
              @input="filterChangedDebounced"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="filter.hero"
              :items="filterHeroes"
              multiple
              label="Hero"
              item-text="label"
              item-value="id" 
              clearable
              @change="filterChanged"
            >
              <template v-slot:selection="{ item }">
                <v-chip class="ma-1 chip-ellipsis" @click.stop="remove(item.id, 'hero')">
                  {{item.label}}
                </v-chip>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
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
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete
              v-model="filter.rule"
              :items="rules"
              multiple
              clearable
              item-text="label"
              item-value="id"
              label="Special Rule"
              @change="filterChanged"
            >
              <template v-slot:selection="{ item }">
                <v-chip class="ma-1 chip-ellipsis" @click.stop="remove(item.id, 'rule')">
                  {{item.label}}
                </v-chip>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-range-slider
              v-model="filter.cost"
              :max="9"
              :min="0"
              ticks="always"
              tick-size="4"
              thumb-label="always"
              thumb-size="0"
              class="align-center"
              @change="filterChanged"
            >
              <template v-slot:thumb-label="{ value }">
                <AbilityIcon class="thumb absolute-icon" noAdjust :icon="3" width="32px"/>
                <span 
                  class="thumb card-cost icon-text text-center font-weight-black">
                  {{ value }}
                </span>
              </template>
            </v-range-slider>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-range-slider
              v-model="filter.attack"
              :max="10"
              :min="-1"
              ticks="always"
              tick-size="4"
              thumb-label="always"
              thumb-size="0"
              class="align-center"
              @change="filterChanged"
            >
              <template v-slot:thumb-label="{ value }">
                <AbilityIcon class="thumb absolute-icon" noAdjust :icon="1" width="32px" :iconSrcOverride="value === -1 ? 'block' : null"/>
                <span
                  v-if="value !== -1"
                  class="thumb card-cost icon-text text-center font-weight-black">
                  {{ value }}
                </span>
              </template>
            </v-range-slider>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <v-range-slider
              v-model="filter.recruit"
              :max="5"
              :min="-1"
              ticks="always"
              tick-size="4"
              thumb-label="always"
              thumb-size="0"
              class="align-center"
              @change="filterChanged"
            >
              <template v-slot:thumb-label="{ value }">
                <AbilityIcon v-if="value === -1" class="thumb absolute-icon" noAdjust :icon="2" width="32px" iconSrcOverride="block"/>
                <AbilityIcon v-else class="thumb absolute-icon" noAdjust style="top: -43px; left: -24px" :icon="2" width="48px"/>
                <span
                  v-if="value !== -1"
                  class="thumb card-cost icon-text text-center font-weight-black">
                  {{ value }}
                </span>
              </template>
            </v-range-slider>
          </v-col>
        </v-row>
      </v-container>
    </shared-side-bar>

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

    <shared-footer />
  </div>
</template>

<script>
import Hero from "../components/hero/Hero.vue";
import { setsArray } from "../constants/sets";
import { teamArray } from "../constants/team";
import { heroClassArray } from "../constants/hero-class";
import { keywordsArray } from "../constants/keywords";
import { rulesArray } from "../constants/rules";
import TeamIcon from "../components/shared/TeamIcon.vue";
import HeroClassIcon from "../components/shared/HeroClassIcon.vue";
import AbilityIcon from "../components/shared/AbilityIcon.vue";
import { toIntArray, toIntPair } from "../services/queryUtils";
import { getAllHeroes, numberOfHeroCards } from "../services/cardUtils";
import { buildHeroSearch } from "../services/searchUtils";
// import { disableBodyScroll, enableBodyScroll } from "../services/scrollUtils";

const heroSearch = buildHeroSearch();

const allHeroes = getAllHeroes();
const filterHeroes = allHeroes.map(hero => ({
  id: hero.id,
  label: hero.filterName ? hero.filterName : hero.name
}));
filterHeroes.sort((a, b) => a.label.localeCompare(b.label));
const validHeroes = allHeroes.filter(hero => hero.id).map(hero => hero.id);

let teams = teamArray.concat([]);
teams.sort((a, b) => a.label.localeCompare(b.label));
teams = Object.freeze(teams);

let heroClasses = heroClassArray.concat([]);
heroClasses.shift();
heroClasses = Object.freeze(heroClasses);

let keywords = keywordsArray.filter(keyword => keyword.inHeroes);
keywords.sort((a, b) => a.label.localeCompare(b.label));
keywords = Object.freeze(keywords);

let rules = rulesArray.filter(rule => rule.inHeroes);
rules.sort((a, b) => a.label.localeCompare(b.label));
rules = Object.freeze(rules);

export default {
  name: "Heroes",
  components: { Hero, TeamIcon, HeroClassIcon, AbilityIcon },
  data: () => ({
    filterHeroes,
    sets: setsArray,
    teams,
    heroClasses,
    keywords,
    rules,
    sortMethod: "alpha",
    filter: {
      search: "",
      hero: [],
      set: [],
      team: [],
      hc: [],
      keyword: [],
      rule: [],
      cost: [0,9],
      attack: [-1,10],
      recruit: [-1,5]
    },
    lastFilterTime: 0,
    heroes: []
  }),
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.hero = toIntArray(query.hero).filter(hero => validHeroes.indexOf(hero) >= 0);
    this.filter.set = toIntArray(query.set).filter(set => setsArray[set]);
    this.filter.team = toIntArray(query.team).filter(team => teamArray[team]);
    this.filter.hc = toIntArray(query.hc).filter(hc => heroClassArray[hc]);
    this.filter.keyword = toIntArray(query.keyword).filter(keyword => keywordsArray[keyword]);
    this.filter.rule = toIntArray(query.rule).filter(rule => rulesArray[rule + 1]);
    this.filter.cost = toIntPair(query.cost, 0, 9);
    this.filter.attack = toIntPair(query.attack, -1, 10);
    this.filter.recruit = toIntPair(query.recruit, -1, 5);
    this.sortMethod = query.sort === "results" ? "results" : "alpha";
    this.search();
    this.sort();
  },
  computed: {
    heroFound() {
      return this.heroes.length === 1 ? "Hero was found" : "Heroes were found";
    },
    hasCostFilter() {
      return this.filter.cost[0] !== 0 || this.filter.cost[1] !== 9;
    },
    hasAttackFilter() {
      return this.filter.attack[0] !== -1 || this.filter.attack[1] !== 10;
    },
    hasRecruitFilter() {
      return this.filter.recruit[0] !== -1 || this.filter.recruit[1] !== 5;
    }
  },
  methods: {
    // enter() {
    //   enableBodyScroll();
    // },
    // out() {
    //   disableBodyScroll();
    // },
    heroKey(hero) {
      return `${this.lastFilterTime}-${hero.team}-${hero.name}`;
    },
    remove(id, filterName) {
      this.filter[filterName] = this.filter[filterName].filter(item => item !== id);
      this.filterChanged();
    },
    filterByMinMax(filter, prop) {
      this.heroes = this.heroes.filter(hero => {
        let match = false;
        hero.filteredCards.forEach(card => {
          if(card.disabled) return;
          const valueMatch = card[prop] >= filter[0] && card[prop] <= filter[1];
          if(valueMatch) match = true;
          card.disabled = !valueMatch;
        });
        return match;
      });
    },
    filterBySearch() {
      const cards = heroSearch.search(this.filter.search);
      this.heroes = this.heroes.filter(hero => {
        const cardsFound = cards.filter(card => card.heroId === hero.id);
        let match = false;
        hero.filteredCards.forEach(card => {
          if(card.disabled) return;
          const found = cardsFound.some(cardFound => cardFound.name === card.name);
          if(found) match = true;
          card.disabled = !found;
        });
        return match;
      });
    },
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.search) query.s = encodeURI(filter.search);
      if(filter.hero.length) query.hero = filter.hero.join(",");
      if(filter.set.length) query.set = filter.set.join(",");
      if(filter.team.length) query.team = filter.team.join(",");
      if(filter.hc.length) query.hc = filter.hc.join(",");
      if(filter.keyword.length) query.keyword = filter.keyword.join(",");
      if(filter.rule.length) query.rule = filter.rule.join(",");
      if(this.hasCostFilter) query.cost = filter.cost.join(",");
      if(this.hasAttackFilter) query.attack = filter.attack.join(",");
      if(this.hasRecruitFilter) query.recruit = filter.recruit.join(",");

      if(this.sortMethod === "results") query.sort = "results";
      
      this.$router.replace({
        path: this.$route.path,
        query
      });
    },
    sortChanged() {
      this.$vuetify.goTo(0, { duration: 0 });
      this.sort();
      this.setQuery();
    },
    filterChangedDebounced() {
      clearTimeout(this._debounceTimerId);
      this._debounceTimerId = setTimeout(() => this.filterChanged(), 750);
    },
    filterChanged() {
      this.$vuetify.goTo(0, { duration: 0 });
      this.search();
      this.sort();
      this.setQuery();
    },
    sort() {
      this.heroes.sort((a, b) => {
        if(this.sortMethod === "alpha" || b.results === a.results) return (a.name || "").localeCompare(b.name || "");
        return b.results - a.results;
      });

      this.lastFilterTime = Date.now();
    },
    search() {
      this.heroes = allHeroes;
      this.heroes.forEach(hero => {
        hero.filteredCards = (hero.cards || []).map(card => {
          card.disabled = false;
          return card;
        });
      });

      if(this.filter.hero.length) {
        const heroIds = this.filter.hero;
        this.heroes = this.heroes.filter(hero => heroIds.indexOf(hero.id) >= 0);
      }

      if(this.filter.set.length) {
        const fromSet = a => this.filter.set.includes(a);
        const setCheck = hero => {
          return Array.isArray(hero.set) ? hero.set.some(fromSet) : fromSet(hero.set);
        }
        this.heroes = this.heroes.filter(setCheck);
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

      if(this.filter.rule.length) {
        const rules = this.filter.rule;
        this.heroes = this.heroes.filter(hero => {
          let match = false;
          hero.filteredCards.forEach(card => {
            if(card.disabled || !card.abilities) return;

            // checks for multiclass
            if(card.hc2 && rules.includes(2)) {
              match = true;
              return;
            }

            // checks for divided
            if(card.divided && rules.includes(4)) {
              match = true;
              return;
            }

            // check for asterisk
            if(card.costAsterisk && rules.includes(10)) {
              match = true;
              return;
            }

            // checks other rules
            const abs = card.abilities;
            const hasRule = ab => rules.indexOf(ab.rule) >= 0;
            const matchRule = abs.some(ab => Array.isArray(ab) ? ab.some(hasRule) : hasRule(ab));
            if(matchRule) match = true;
            card.disabled = !matchRule;
          });
          return match;
        });
      }

      if(this.hasCostFilter) this.filterByMinMax(this.filter.cost, "cost");
      if(this.hasAttackFilter) this.filterByMinMax(this.filter.attack, "attackNum");
      if(this.hasRecruitFilter) this.filterByMinMax(this.filter.recruit, "recruitNum");
      if(this.filter.search) this.filterBySearch();

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

        hero.results = numberOfHeroCards(hero.filteredCards);
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

  .absolute-icon {
    position: absolute;
    user-select: none;
  }

  .card-filter {
    .thumb {
      top: -32px;
      left: -16px;
    }
    .icon-text {
      position: absolute;
      width: 32px;
      font-size: 16px;
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #000;
      line-height: 32px;
      user-select: none;
      pointer-events: none;
    }
  }
</style>