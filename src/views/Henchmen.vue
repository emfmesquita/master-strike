<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ hmFound }}</v-chip>
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
              <HenchmenFilter v-model="filter.henchman" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[3]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <KeywordFilter v-model="filter.keyword" :cardTypes="[3]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RuleFilter v-model="filter.rule" :cardTypes="[3]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RangeFilter v-model="filter.vAttack" :icon="1" :min="1" :max="4" @input="filterChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ henchmen.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
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
          <div class="text-center title">{{ hmFound }}</div>
        </v-col>
      </v-row>

      <template v-if="henchmen.length">
        <PaginatedSingleCardGroupList :groups="henchmen" :key="lastFilterTime" :lineHeight="334">
          <template v-slot:default="{ card, cardHeight }">
            <CardWrapper>
              <template v-slot:default="{ contentHeight }">
                <HeroCard v-if="card.overrideType === 1" :card="card" :height="cardHeight" :contentHeight="contentHeight" />
                <VillainCard v-else :card="card" :height="cardHeight" :contentHeight="contentHeight" />
              </template>
            </CardWrapper>
          </template>
        </PaginatedSingleCardGroupList>
      </template>
    </v-container>

    <shared-footer />
  </div>
</template>

<script>
import CardWrapper from "../components/cards/CardWrapper.vue";
import HenchmenFilter from "../components/filters/HenchmenFilter.vue";
import HeroCard from "../components/cards/HeroCard.vue";
import KeywordFilter from "../components/filters/KeywordFilter.vue";
import PaginatedSingleCardGroupList from "../components/shared/PaginatedSingleCardGroupList.vue";
import RangeFilter from "../components/filters/RangeFilter.vue";
import RuleFilter from "../components/filters/RuleFilter.vue";
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import VillainCard from "../components/cards/VillainCard.vue";


import { cardTypes } from "../constants/cardTypes";
import { keywordsArray } from "../constants/keywords";
import { rulesArray } from "../constants/rules";
import { setsArray } from "../constants/sets";

import { getAllHenchmen, numberOfCards } from "../services/cardUtils";
import { toIntArray, toIntPair } from "../services/queryUtils";
import { 
  groupSearchSetup,
  filterGroupBySearch, 
  filterBySet, 
  filterGroupByKeyword, 
  filterGroupByRule,
  filterGroupByMinMax,
  filterById,
} from "../services/searchUtils";
import { sortGroups, ALPHA_SORT } from "../services/sortUtils";

const henchmen = getAllHenchmen();
const validHenchmen = henchmen.filter(hm => hm.id).map(hm => hm.id);

const baseFilter = () => ({
  search: "",
  henchman: [],
  set: [],
  keyword: [],
  rule: [],
  vAttack: [1,4]
});

export default {
  name: "Henchmen",
  components: {
    CardWrapper,
    HenchmenFilter,
    HeroCard,
    KeywordFilter,
    PaginatedSingleCardGroupList,
    RangeFilter,
    RuleFilter, 
    SearchFilter,
    SetFilter,
    VillainCard,
  },
  data: () => ({
    filter: baseFilter(),
    lastFilterTime: 0,
    henchmen,
  }),
  computed: {
    hmFound() {
      if(this.henchmen.length === 1) return "1 Henchman";
      return `${this.henchmen.length} Henchmen`;
    },
    hasAttackFilter() {
      return this.filter.vAttack[0] !== 1 || this.filter.vAttack[1] !== 4;
    }
  },
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.henchman = toIntArray(query.hm).filter(hm => validHenchmen.includes(hm));
    this.filter.set = toIntArray(query.set).filter(set => setsArray[set - 1]);
    this.filter.keyword = toIntArray(query.keyword).filter(keyword => keywordsArray[keyword - 1]);
    this.filter.rule = toIntArray(query.rule).filter(rule => rulesArray[rule - 1]);
    this.filter.vAttack = toIntPair(query.attack, 1, 4);
    this.search();
  },
  methods: {
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.search) query.s = encodeURI(filter.search);
      if(filter.henchman.length) query.hm = filter.henchman.join(",");
      if(filter.set.length) query.set = filter.set.join(",");
      if(filter.keyword.length) query.keyword = filter.keyword.join(",");
      if(filter.rule.length) query.rule = filter.rule.join(",");
      if(this.hasAttackFilter) query.attack = filter.vAttack.join(",");
      
      this.$router.replace({
        path: this.$route.path,
        query
      });
    },
    clearFilter() {
      this.filter = baseFilter();
      this.filterChanged();
    },
    filterChanged() {
      this.$vuetify.goTo(0, { duration: 0 });
      this.search();
      this.setQuery();
    },
    search() {
      this.henchmen = henchmen;
      groupSearchSetup(this.henchmen);

      this.henchmen = filterById(this.henchmen, this.filter.henchman);
      this.henchmen = filterBySet(this.henchmen, this.filter.set);
      this.henchmen = filterGroupByKeyword(this.henchmen, this.filter.keyword);
      this.henchmen = filterGroupByRule(this.henchmen, this.filter.rule);
      if(this.hasAttackFilter) this.henchmen = filterGroupByMinMax(this.henchmen, "vAttackNum", this.filter.vAttack);
      this.henchmen = filterGroupBySearch(this.henchmen, cardTypes.HENCHMEN.id, this.filter.search);

      this.henchmen.forEach(hm => {
        hm.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          return a.name.localeCompare(b.name);
        });

        hm.results = numberOfCards(hm.filteredCards);
      });

      sortGroups(this.henchmen, ALPHA_SORT);

      this.lastFilterTime = Date.now();
    }
  }
}
</script>