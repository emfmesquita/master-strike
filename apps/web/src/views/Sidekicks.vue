<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ sidekicksFound }}</v-chip>
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
              <SidekickFilter v-model="filter.sidekick" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[9]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <TeamFilter v-model="filter.team" :cardTypes="[9]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <KeywordFilter v-model="filter.keyword" :cardTypes="[9]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RuleFilter v-model="filter.rule" :cardTypes="[9]" @input="filterChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ sidekicks.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
      </template>
    </shared-side-bar>

    <ResizableCardList v-model="filter.search" :foundText="sidekicksFound" @change="filterChanged">
      <template v-if="sidekicks.length">
        <PaginatedSingleCardGroupList :groups="sidekicks" :key="lastFilterTime" :lineHeight="334">
          <template v-slot:default="{ card, cardHeight }">
            <CardWrapper :height="cardHeight">
              <template v-slot:default="{ contentHeight }">
                <HeroCard :card="card" :height="cardHeight" :contentHeight="contentHeight" />
              </template>
            </CardWrapper>
          </template>
        </PaginatedSingleCardGroupList>
      </template>
    </ResizableCardList>

    <shared-footer />
  </div>
</template>

<script>
import CardWrapper from "../components/cards/CardWrapper.vue";
import HeroCard from "../components/cards/HeroCard.vue";
import KeywordFilter from "../components/filters/KeywordFilter.vue";
import PaginatedSingleCardGroupList from "../components/shared/PaginatedSingleCardGroupList.vue";
import ResizableCardList from "../components/shared/ResizableCardList.vue";
import RuleFilter from "../components/filters/RuleFilter.vue";
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import SidekickFilter from "../components/filters/SidekickFilter.vue";
import TeamFilter from "../components/filters/TeamFilter.vue";

import { Metadata } from "@master-strike/data";

import { getAllSidekicks, numberOfCards } from "../services/cardUtils.js";
import { toIntArray } from "../services/queryUtils.js";
import { 
  groupSearchSetup,
  filterGroupBySearch, 
  filterBySet, 
  filterGroupByCardProp,
  filterGroupByKeyword, 
  filterGroupByRule,
  filterById,
} from "../services/searchUtils.js";
import { sortGroups, ALPHA_SORT } from "../services/sortUtils.js";

const sidekicks = getAllSidekicks();
const validSidekicks = sidekicks.filter(by => by.id).map(by => by.id);

const baseFilter = () => ({
  search: "",
  sidekick: [],
  set: [],
  team: [],
  keyword: [],
  rule: [],
});

export default {
  name: "Sidekicks",
  components: {
    CardWrapper,
    HeroCard,
    KeywordFilter,
    PaginatedSingleCardGroupList,
    ResizableCardList,
    RuleFilter, 
    SearchFilter,
    SetFilter,
    SidekickFilter,
    TeamFilter,
  },
  data: () => ({
    filter: baseFilter(),
    lastFilterTime: 0,
    sidekicks,
  }),
  computed: {
    sidekicksFound() {
      if(this.sidekicks.length === 1) return "1 Sidekick";
      return `${this.sidekicks.length} Sidekicks`;
    },
  },
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.sidekick = toIntArray(query.by).filter(sidekick => validSidekicks.includes(sidekick));
    this.filter.set = toIntArray(query.set).filter(set => Metadata.setsArray[set - 1]);
    this.filter.team = toIntArray(query.team).filter(team => Metadata.teamsArray[team]);
    this.filter.keyword = toIntArray(query.keyword).filter(keyword => Metadata.keywordsArray[keyword - 1]);
    this.filter.rule = toIntArray(query.rule).filter(rule => Metadata.rulesArray[rule - 1]);
    this.search();
  },
  methods: {
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.search) query.s = encodeURI(filter.search);
      if(filter.sidekick.length) query.by = filter.sidekick.join(",");
      if(filter.set.length) query.set = filter.set.join(",");
      if(filter.team.length) query.team = filter.team.join(",");
      if(filter.keyword.length) query.keyword = filter.keyword.join(",");
      if(filter.rule.length) query.rule = filter.rule.join(",");
      
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
      this.sidekicks = sidekicks;
      groupSearchSetup(this.sidekicks);

      this.sidekicks = filterById(this.sidekicks, this.filter.sidekick);
      this.sidekicks = filterBySet(this.sidekicks, this.filter.set);
      this.sidekicks = filterGroupByCardProp(this.sidekicks, "team", this.filter.team);
      this.sidekicks = filterGroupByKeyword(this.sidekicks, this.filter.keyword);
      this.sidekicks = filterGroupByRule(this.sidekicks, this.filter.rule);
      this.sidekicks = filterGroupBySearch(this.sidekicks, Metadata.cardTypes.OFFICER.id, this.filter.search);

      this.sidekicks.forEach(sidekicks => {
        sidekicks.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          return a.name.localeCompare(b.name);
        });

        sidekicks.results = numberOfCards(sidekicks.filteredCards);
      });

      sortGroups(this.sidekicks, ALPHA_SORT);

      this.lastFilterTime = Date.now();
    }
  }
}
</script>