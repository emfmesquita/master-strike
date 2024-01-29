<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center">
            <v-col cols="12">
              <SortToggle v-model="sortMethod" @input="sortChanged" vp="true" />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ villainsFound }}</v-chip>
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
              <VillainFilter v-model="filter.villain" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[4]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <KeywordFilter v-model="filter.keyword" :cardTypes="[4]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RuleFilter v-model="filter.rule" :cardTypes="[4]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RangeFilter v-model="filter.vAttack" :icon="1" :min="-1" :max="16" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RangeFilter v-model="filter.vp" :icon="4" :min="-1" :max="7" @input="filterChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ villains.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
        <v-divider></v-divider>
        <SortToggleCollapsed v-model="sortMethod" @input="sortChanged" vp="true" />
        <v-divider></v-divider>
      </template>
    </shared-side-bar>

    <ResizableCardList v-model="filter.search" :foundText="villainsFound" @change="filterChanged">
      <template v-if="villains.length">
        <v-lazy min-height="410" :key="villainKey(villain)" v-for="villain in villains">
          <v-row>
            <v-col cols="12">
              <CardGroup :group="villain">
                <template v-slot:default="{ card }">
                  <CardWrapper>
                    <template v-slot:default="{ contentHeight }">
                      <HeroCard v-if="card.overrideType === 1" :card="card" :contentHeight="contentHeight" />
                      <SchemeCard v-else-if="card.overrideType === 5" :card="card" :contentHeight="contentHeight" />
                      <VillainCard v-else :card="card" :contentHeight="contentHeight" />
                    </template>
                  </CardWrapper>
                </template>
              </CardGroup>
            </v-col>
          </v-row>
        </v-lazy>
      </template>
    </ResizableCardList>

    <shared-footer />
  </div>
</template>

<script>
import CardGroup from "../components/shared/CardGroup.vue";
import CardWrapper from "../components/cards/CardWrapper.vue";
import HeroCard from "../components/cards/HeroCard.vue";
import KeywordFilter from "../components/filters/KeywordFilter.vue";
import RangeFilter from "../components/filters/RangeFilter.vue";
import ResizableCardList from "../components/shared/ResizableCardList.vue";
import RuleFilter from "../components/filters/RuleFilter.vue";
import SchemeCard from "../components/cards/SchemeCard.vue";
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import SortToggle from "../components/filters/SortToggle.vue";
import SortToggleCollapsed from "../components/filters/SortToggleCollapsed.vue";
import VillainCard from "../components/cards/VillainCard.vue";
import VillainFilter from "../components/filters/VillainFilter.vue";

import { Metadata } from "@master-strike/data";

import { getAllVillains, numberOfCards, maxVP } from "../services/cardUtils";
import { toIntArray, toIntPair } from "../services/queryUtils";
import { 
  groupSearchSetup,
  filterGroupBySearch, 
  filterBySet, 
  filterGroupByKeyword, 
  filterGroupByRule,
  filterById,
  filterGroupByMinMax
} from "../services/searchUtils";
import { sortGroups, ALPHA_SORT, RESULTS_SORT, VP_SORT } from "../services/sortUtils";

const villains = getAllVillains();
const validVillains = villains.filter(villain => villain.id).map(villain => villain.id);

const baseFilter = () => ({
  search: "",
  villain: [],
  set: [],
  keyword: [],
  rule: [],
  vAttack: [-1,16],
  vp: [-1,7]
});


export default {
  name: "Villains",
  components: { 
    CardGroup,
    CardWrapper,
    HeroCard,
    KeywordFilter,
    RangeFilter,
    ResizableCardList,
    RuleFilter, 
    SchemeCard,
    SearchFilter,
    SetFilter, 
    SortToggle,
    SortToggleCollapsed,
    VillainCard,
    VillainFilter,
  },
  data: () => ({
    sortMethod: ALPHA_SORT,
    filter: baseFilter(),
    lastFilterTime: 0,
    villains,
  }),
  computed: {
    villainsFound() {
      if(this.villains.length === 1) return "1 Villain Group";
      return `${this.villains.length} Villain Groups`;
    },
    hasAttackFilter() {
      return this.filter.vAttack[0] !== -1 || this.filter.vAttack[1] !== 16;
    },
    hasVpFilter() {
      return this.filter.vp[0] !== -1 || this.filter.vp[1] !== 7;
    },
  },
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.villain = toIntArray(query.v).filter(villain => validVillains.includes(villain));
    this.filter.set = toIntArray(query.set).filter(set => Metadata.setsArray[set - 1]);
    this.filter.keyword = toIntArray(query.keyword).filter(keyword => Metadata.keywordsArray[keyword - 1]);
    this.filter.rule = toIntArray(query.rule).filter(rule => Metadata.rulesArray[rule - 1]);
    this.filter.epic = query.rule === "1";
    this.filter.vAttack = toIntPair(query.attack, -1, 16);
    this.filter.vp = toIntPair(query.vp, -1, 7);

    if(query.sort === RESULTS_SORT) this.sortMethod = RESULTS_SORT;
    else if(query.sort === VP_SORT) this.sortMethod = VP_SORT;
    else this.sortMethod = ALPHA_SORT;
    this.search();
    this.sort();
  },
  methods: {
    villainKey(villain) {
      return `${this.lastFilterTime}-${villain.id}-${villain.name}`;
    },
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.search) query.s = encodeURI(filter.search);
      if(filter.villain.length) query.v = filter.villain.join(",");
      if(filter.set.length) query.set = filter.set.join(",");
      if(filter.keyword.length) query.keyword = filter.keyword.join(",");
      if(filter.rule.length) query.rule = filter.rule.join(",");
      if(filter.epic) query.epic = "1";
      if(this.hasAttackFilter) query.attack = filter.vAttack.join(",");
      if(this.hasVpFilter) query.vp = filter.vp.join(",");

      if(this.sortMethod === RESULTS_SORT) query.sort = RESULTS_SORT;
      if(this.sortMethod === VP_SORT) query.sort = VP_SORT;
      
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
      sortGroups(this.villains, this.sortMethod);
      this.lastFilterTime = Date.now();
    },
    search() {
      this.villains = villains;

      groupSearchSetup(this.villains);

      this.villains = filterById(this.villains, this.filter.villain);
      this.villains = filterBySet(this.villains, this.filter.set);
      this.villains = filterGroupByKeyword(this.villains, this.filter.keyword, this.filter.rule);
      this.villains = filterGroupByRule(this.villains, this.filter.rule);
      if(this.hasAttackFilter) this.villains = filterGroupByMinMax(this.villains, "vAttackNum", this.filter.vAttack);
      if(this.hasVpFilter) this.villains = filterGroupByMinMax(this.villains, "vpNum", this.filter.vp);
      this.villains = filterGroupBySearch(this.villains, Metadata.cardTypes.VILLAIN.id, this.filter.search);

      this.villains.forEach(villain => {
        villain.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          return a.name.localeCompare(b.name);
        });

        villain.results = numberOfCards(villain.filteredCards);
        villain.maxVP = maxVP(villain.cards) + ([3, 4, 74].includes(villain.id) ? "*" : "");
      });

      this.lastFilterTime = Date.now();
    }
  }
}
</script>