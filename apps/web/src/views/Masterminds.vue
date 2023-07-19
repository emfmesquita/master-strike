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
              <v-chip class="text-center font-weight-bold mr-2">{{ mmFound }}</v-chip>
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
              <MastermindFilter v-model="filter.mastermind" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[2]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <KeywordFilter v-model="filter.keyword" :cardTypes="[2]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RuleFilter v-model="filter.rule" :cardTypes="[2]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <v-switch v-model="filter.epic" label="Epic Mastermind" @change="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RangeFilter v-model="filter.vAttack" :icon="1" :min="0" :max="36" @input="filterChanged"/>
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
          <v-chip small class="text-center font-weight-bold mb-2">{{ masterminds.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
        <v-divider></v-divider>
        <SortToggleCollapsed v-model="sortMethod" @input="sortChanged" vp="true" />
        <v-divider></v-divider>
      </template>
    </shared-side-bar>

    <ResizableCardList v-model="filter.search" :foundText="mmFound" @change="filterChanged">
      <template v-if="masterminds.length">
        <v-lazy min-height="483" :key="mmKey(mm)" v-for="mm in masterminds">
          <v-row>
            <v-col cols="12">
              <CardGroup :group="mm" :cardHeight="cardHeight">
                <template v-slot:default="{ card }">
                  <CardWrapper :height="cardHeight">
                    <template v-slot:default="{ contentHeight }">
                      <HeroCard v-if="card.overrideType === 1" :height="cardHeight" :card="card" :contentHeight="contentHeight" />
                      <VillainCard v-else-if="card.overrideType === 4" :height="cardHeight" :card="card" :contentHeight="contentHeight" />
                      <MastermindCard v-else :card="card" :height="cardHeight" :contentHeight="contentHeight" />
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
import MastermindCard from "../components/cards/MastermindCard.vue";
import MastermindFilter from "../components/filters/MastermindFilter.vue";
import RangeFilter from "../components/filters/RangeFilter.vue";
import ResizableCardList from "../components/shared/ResizableCardList.vue";
import RuleFilter from "../components/filters/RuleFilter.vue";
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import SortToggle from "../components/filters/SortToggle.vue";
import SortToggleCollapsed from "../components/filters/SortToggleCollapsed.vue";
import VillainCard from "../components/cards/VillainCard.vue";

import { Metadata } from "@master-strike/data";

import { getAllMasterminds, maxVP, numberOfCards } from "../services/cardUtils";
import { toIntArray, toIntPair } from "../services/queryUtils";
import { 
  groupSearchSetup,
  filterGroupBySearch, 
  filterBySet, 
  filterGroupByKeyword, 
  filterGroupByRule,
  filterGroupByMinMax,
  filterById,
  filterGroupByCardProp
} from "../services/searchUtils";
import { sortGroups, ALPHA_SORT, RESULTS_SORT, VP_SORT } from "../services/sortUtils";

const masterminds = getAllMasterminds();
const validMasterminds = masterminds.filter(mm => mm.id).map(mm => mm.id);

const baseFilter = () => ({
  search: "",
  mastermind: [],
  set: [],
  keyword: [],
  rule: [],
  epic: false,
  vAttack: [0,36],
  vp: [-1,7]
});


export default {
  name: "Masterminds",
  components: { 
    CardGroup,
    CardWrapper,
    HeroCard,
    KeywordFilter, 
    MastermindCard, 
    MastermindFilter,
    RangeFilter,
    ResizableCardList,
    RuleFilter, 
    SearchFilter,
    SetFilter, 
    SortToggle,
    SortToggleCollapsed,
    VillainCard,
  },
  data: () => ({
    cardHeight: 310,
    sortMethod: ALPHA_SORT,
    filter: baseFilter(),
    lastFilterTime: 0,
    masterminds,
  }),
  computed: {
    mmFound() {
      if(this.masterminds.length === 1) return "1 Mastermind";
      return `${this.masterminds.length} Masterminds`;
    },
    hasAttackFilter() {
      return this.filter.vAttack[0] !== 0 || this.filter.vAttack[1] !== 36;
    },
    hasVpFilter() {
      return this.filter.vp[0] !== -1 || this.filter.vp[1] !== 7;
    },
  },
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.mastermind = toIntArray(query.mm).filter(mm => validMasterminds.includes(mm));
    this.filter.set = toIntArray(query.set).filter(set => Metadata.setsArray[set - 1]);
    this.filter.keyword = toIntArray(query.keyword).filter(keyword => Metadata.keywordsArray[keyword - 1]);
    this.filter.rule = toIntArray(query.rule).filter(rule => Metadata.rulesArray[rule - 1]);
    this.filter.epic = query.rule === "1";
    this.filter.vAttack = toIntPair(query.attack, 0, 36);
    this.filter.vp = toIntPair(query.vp, -1, 7);

    if(query.sort === RESULTS_SORT) this.sortMethod = RESULTS_SORT;
    else if(query.sort === VP_SORT) this.sortMethod = VP_SORT;
    else this.sortMethod = ALPHA_SORT;
    this.search();
    this.sort();
  },
  methods: {
    mmKey(mm) {
      return `${this.lastFilterTime}-${mm.name}`;
    },
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.search) query.s = encodeURI(filter.search);
      if(filter.mastermind.length) query.mm = filter.mastermind.join(",");
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
      sortGroups(this.masterminds, this.sortMethod);
      this.lastFilterTime = Date.now();
    },
    search() {
      this.masterminds = masterminds;

      groupSearchSetup(this.masterminds);

      this.masterminds = filterById(this.masterminds, this.filter.mastermind);
      this.masterminds = filterBySet(this.masterminds, this.filter.set);
      this.masterminds = filterGroupByKeyword(this.masterminds, this.filter.keyword, this.filter.rule);
      this.masterminds = filterGroupByRule(this.masterminds, this.filter.rule);
      if(this.filter.epic) this.masterminds = filterGroupByCardProp(this.masterminds, "epic", [true]);
      if(this.hasAttackFilter) this.masterminds = filterGroupByMinMax(this.masterminds, "vAttackNum", this.filter.vAttack);
      if(this.hasVpFilter) this.masterminds = filterGroupByMinMax(this.masterminds, "vpNum", this.filter.vp);
      this.masterminds = filterGroupBySearch(this.masterminds, Metadata.cardTypes.MASTERMIND.id, this.filter.search);

      this.masterminds.forEach(mm => {
        mm.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          if(a.tactic && !b.tactic) return 1;
          if(!a.tactic && b.tactic) return -1;
          if(a.epic && !b.epic) return 1;
          if(!a.epic && b.epic) return -1;
          if(a.transformed && !b.transformed) return 1;
          if(!a.transformed && b.transformed) return -1;
          return a.name.localeCompare(b.name);
        });

        mm.results = numberOfCards(mm.filteredCards);
        mm.maxVP = maxVP(mm.cards.filter(card => !card.epic && !card.transformed)) + "";
      });

      this.lastFilterTime = Date.now();
    }
  }
}
</script>