<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ schemesFound }}</v-chip>
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
              <SchemeFilter v-model="filter.scheme" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[5]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <KeywordFilter v-model="filter.keyword" :cardTypes="[5]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RuleFilter v-model="filter.rule" :cardTypes="[5]" @input="filterChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ schemes.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
      </template>
    </shared-side-bar>

    <ResizableCardList v-model="filter.search" :foundText="schemesFound" @change="filterChanged">
      <template v-if="schemes.length">
        <PaginatedSingleCardGroupList :groups="schemes" :dense="true" :key="lastFilterTime" :lineHeight="364">
          <template v-slot:default="{ card, cardHeight }">
            <CardWrapper :height="cardHeight">
              <template v-slot:default="{ contentHeight }">
                <MastermindCard v-if="card.overrideType === 2" :card="card" :height="cardHeight" :contentHeight="contentHeight" />
                <SchemeCard v-else :card="card" :height="cardHeight" :contentHeight="contentHeight" />
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
import KeywordFilter from "../components/filters/KeywordFilter.vue";
import PaginatedSingleCardGroupList from "../components/shared/PaginatedSingleCardGroupList.vue";
import ResizableCardList from "../components/shared/ResizableCardList.vue";
import RuleFilter from "../components/filters/RuleFilter.vue";
import MastermindCard from "../components/cards/MastermindCard.vue";
import SchemeCard from "../components/cards/SchemeCard.vue";
import SchemeFilter from "../components/filters/SchemeFilter.vue";
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";

import { Metadata } from "@master-strike/data";

import { getAllSchemes, numberOfCards } from "../services/cardUtils";
import { toIntArray } from "../services/queryUtils";
import { 
  groupSearchSetup,
  filterGroupBySearch, 
  filterBySet, 
  filterGroupByKeyword, 
  filterGroupByRule,
  filterById,
} from "../services/searchUtils";
import { sortGroups, ALPHA_SORT } from "../services/sortUtils";

const schemes = getAllSchemes();
const validSchemes = schemes.filter(scheme => scheme.id).map(scheme => scheme.id);

const baseFilter = () => ({
  search: "",
  scheme: [],
  set: [],
  keyword: [],
  rule: [],
});

export default {
  name: "Schemes",
  components: {
    CardWrapper,
    KeywordFilter,
    PaginatedSingleCardGroupList,
    ResizableCardList,
    RuleFilter, 
    MastermindCard,
    SchemeCard,
    SchemeFilter,
    SearchFilter,
    SetFilter,
  },
  data: () => ({
    filter: baseFilter(),
    lastFilterTime: 0,
    schemes,
  }),
  computed: {
    schemesFound() {
      if(this.schemes.length === 1) return "1 Scheme";
      return `${this.schemes.length} Schemes`;
    }
  },
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.scheme = toIntArray(query.scheme).filter(scheme => validSchemes.includes(scheme));
    this.filter.set = toIntArray(query.set).filter(set => Metadata.setsArray[set - 1]);
    this.filter.keyword = toIntArray(query.keyword).filter(keyword => Metadata.keywordsArray[keyword - 1]);
    this.filter.rule = toIntArray(query.rule).filter(rule => Metadata.rulesArray[rule - 1]);
    this.search();
  },
  methods: {
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.search) query.s = encodeURI(filter.search);
      if(filter.scheme.length) query.scheme = filter.scheme.join(",");
      if(filter.set.length) query.set = filter.set.join(",");
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
      this.schemes = schemes;
      groupSearchSetup(this.schemes);

      this.schemes = filterById(this.schemes, this.filter.scheme);
      this.schemes = filterBySet(this.schemes, this.filter.set);
      this.schemes = filterGroupByKeyword(this.schemes, this.filter.keyword);
      this.schemes = filterGroupByRule(this.schemes, this.filter.rule);
      this.schemes = filterGroupBySearch(this.schemes, Metadata.cardTypes.SCHEME.id, this.filter.search);

      this.schemes.forEach(scheme => {
        scheme.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          if(a.transformed && !b.transformed) return 1;
          if(!a.transformed && b.transformed) return -1;
          return a.name.localeCompare(b.name);
        });

        scheme.results = numberOfCards(scheme.filteredCards);
      });

      sortGroups(this.schemes, ALPHA_SORT);

      this.lastFilterTime = Date.now();
    }
  }
}
</script>