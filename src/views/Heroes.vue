<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center">
            <v-col cols="12">
              <SortToggle v-model="sortMethod" @input="sortChanged" />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ heroFound }}</v-chip>
              <v-btn icon title="Clear Filter" @click="clearFilter">
                <v-icon>mdi-eraser</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SearchFilter v-model="filter.search" @change="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <HeroFilter v-model="filter.hero" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[1]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <TeamFilter v-model="filter.team" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <HeroClassFilter v-model="filter.hc" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <KeywordFilter v-model="filter.keyword" :cardTypes="[1]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RuleFilter v-model="filter.rule" :cardTypes="[1]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RangeFilter v-model="filter.cost" :icon="3" :min="0" :max="9" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RangeFilter v-model="filter.attack" :icon="1" :min="-1" :max="10" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RangeFilter v-model="filter.recruit" :icon="2" :min="-1" :max="5" @input="filterChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ heroes.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
        <v-divider></v-divider>
        <SortToggleCollapsed v-model="sortMethod" @input="sortChanged" />
        <v-divider></v-divider>
      </template>
    </shared-side-bar>

    <v-container style="paddingBottom: 100px">
      <v-row v-if="$vuetify.breakpoint.mdAndDown && $store.getters.sideBarCollapsed">
        <v-col class="py-0">
          <SearchFilter v-model="filter.search" @change="filterChanged"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="text-center title">{{ heroFound }}</div>
        </v-col>
      </v-row>

      <template v-if="heroes.length">
        <v-lazy min-height="410" :key="heroKey(hero)" v-for="hero in heroes">
          <v-row>
            <v-col cols="12">
              <CardGroup :group="hero">
                <template v-slot:default="{ card }">
                  <CardWrapper>
                    <template v-slot:default="{ contentHeight }">
                      <HeroCard :card="card" :contentHeight="contentHeight" />
                    </template>
                  </CardWrapper>
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
import CardGroup from "../components/shared/CardGroup.vue";
import CardWrapper from "../components/cards/CardWrapper.vue";
import HeroCard from "../components/cards/HeroCard.vue";
import HeroClassFilter from "../components/filters/HeroClassFilter.vue";
import HeroFilter from "../components/filters/HeroFilter.vue";
import KeywordFilter from "../components/filters/KeywordFilter.vue";
import RangeFilter from "../components/filters/RangeFilter.vue";
import RuleFilter from "../components/filters/RuleFilter.vue";
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import SortToggle from "../components/filters/SortToggle.vue";
import SortToggleCollapsed from "../components/filters/SortToggleCollapsed.vue";
import TeamFilter from "../components/filters/TeamFilter.vue";

import { cardTypes } from "../constants/cardTypes";
import { heroClassArray } from "../constants/heroClass";
import { keywordsArray } from "../constants/keywords";
import { rulesArray } from "../constants/rules";
import { setsArray } from "../constants/sets";
import { teamArray } from "../constants/team";

import { getAllHeroes, numberOfCards } from "../services/cardUtils";
import { toIntArray, toIntPair } from "../services/queryUtils";
import { 
  groupSearchSetup,
  filterGroupBySearch, 
  filterBySet, 
  filterGroupByKeyword, 
  filterGroupByRule,
  filterGroupByMinMax,
  filterGroupByHeroClass,
  filterById,
  filterGroupByCardProp
} from "../services/searchUtils";
import { sortGroups, ALPHA_SORT, RESULTS_SORT } from "../services/sortUtils";

const allHeroes = getAllHeroes();
const validHeroes = allHeroes.filter(hero => hero.id).map(hero => hero.id);

const baseFilter = () => ({
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
});

export default {
  name: "Heroes",
  components: {
    CardGroup,
    CardWrapper,
    HeroCard,
    HeroClassFilter,
    HeroFilter,
    KeywordFilter, 
    RangeFilter,
    RuleFilter, 
    SearchFilter,
    SetFilter, 
    SortToggle,
    SortToggleCollapsed,
    TeamFilter,
  },
  data: () => ({
    sortMethod: ALPHA_SORT,
    filter: baseFilter(),
    lastFilterTime: 0,
    heroes: []
  }),
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.hero = toIntArray(query.hero).filter(hero => validHeroes.indexOf(hero) >= 0);
    this.filter.set = toIntArray(query.set).filter(set => setsArray[set - 1]);
    this.filter.team = toIntArray(query.team).filter(team => teamArray[team]);
    this.filter.hc = toIntArray(query.hc).filter(hc => heroClassArray[hc]);
    this.filter.keyword = toIntArray(query.keyword).filter(keyword => keywordsArray[keyword - 1]);
    this.filter.rule = toIntArray(query.rule).filter(rule => rulesArray[rule - 1]);
    this.filter.cost = toIntPair(query.cost, 0, 9);
    this.filter.attack = toIntPair(query.attack, -1, 10);
    this.filter.recruit = toIntPair(query.recruit, -1, 5);
    this.sortMethod = query.sort === RESULTS_SORT ? RESULTS_SORT : ALPHA_SORT;
    this.search();
    this.sort();
  },
  computed: {
    heroFound() {
      if(this.heroes.length === 1) return "1 Hero";
      return `${this.heroes.length} Heroes`;
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
    heroKey(hero) {
      return `${this.lastFilterTime}-${hero.team}-${hero.name}`;
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

      if(this.sortMethod === RESULTS_SORT) query.sort = RESULTS_SORT;
      
      this.$router.replace({
        path: this.$route.path,
        query
      });
    },
    clearFilter() {
      this.filter = baseFilter();
      this.filterChanged();
    },
    sortChanged() {
      this.$vuetify.goTo(0, { duration: 0 });
      this.sort();
      this.setQuery();
    },
    filterChanged() {
      this.$vuetify.goTo(0, { duration: 0 });
      this.search();
      this.sort();
      this.setQuery();
    },
    sort() {
      sortGroups(this.heroes, this.sortMethod);
      this.lastFilterTime = Date.now();
    },
    search() {
      this.heroes = allHeroes;

      groupSearchSetup(this.heroes);

      this.heroes = filterById(this.heroes, this.filter.hero);
      this.heroes = filterBySet(this.heroes, this.filter.set);
      this.heroes = filterGroupByCardProp(this.heroes, "team", this.filter.team);
      this.heroes = filterGroupByHeroClass(this.heroes, this.filter.hc);
      this.heroes = filterGroupByKeyword(this.heroes, this.filter.keyword);
      this.heroes = filterGroupByRule(this.heroes, this.filter.rule);
      if(this.hasCostFilter) this.heroes = filterGroupByMinMax(this.heroes, "cost", this.filter.cost);
      if(this.hasAttackFilter) this.heroes = filterGroupByMinMax(this.heroes, "attackNum", this.filter.attack);
      if(this.hasRecruitFilter) this.heroes = filterGroupByMinMax(this.heroes, "recruitNum", this.filter.recruit);
      this.heroes = filterGroupBySearch(this.heroes, cardTypes.HERO.id, this.filter.search);

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

        hero.results = numberOfCards(hero.filteredCards);
      });

      this.lastFilterTime = Date.now();
    }
  }
};
</script>