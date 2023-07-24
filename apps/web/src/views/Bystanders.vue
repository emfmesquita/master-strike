<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ bystandersFound }}</v-chip>
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
              <BystanderFilter v-model="filter.bystander" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[6]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <KeywordFilter v-model="filter.keyword" :cardTypes="[6]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RuleFilter v-model="filter.rule" :cardTypes="[6]" @input="filterChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ bystanders.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
      </template>
    </shared-side-bar>

    <ResizableCardList v-model="filter.search" :foundText="bystandersFound" @change="filterChanged">
      <template v-if="bystanders.length">
        <PaginatedSingleCardGroupList :groups="bystanders" :key="lastFilterTime" :lineHeight="334">
          <template v-slot:default="{ card, cardHeight }">
            <CardWrapper :height="cardHeight">
              <template v-slot:default="{ contentHeight }">
                <HeroCard v-if="card.overrideType === 1" :card="card" :height="cardHeight" :contentHeight="contentHeight" />
                <BystanderCard v-else :card="card" :height="cardHeight" :contentHeight="contentHeight" />
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
import BystanderCard from "../components/cards/BystanderCard.vue";
import KeywordFilter from "../components/filters/KeywordFilter.vue";
import PaginatedSingleCardGroupList from "../components/shared/PaginatedSingleCardGroupList.vue";
import ResizableCardList from "../components/shared/ResizableCardList.vue";
import RuleFilter from "../components/filters/RuleFilter.vue";
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import BystanderFilter from "../components/filters/BystanderFilter.vue";

import { Metadata } from "@master-strike/data";

import { getAllBystanders, numberOfCards } from "../services/cardUtils";
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

const bystanders = getAllBystanders();
const validBystanders = bystanders.filter(by => by.id).map(by => by.id);

const baseFilter = () => ({
  search: "",
  bystander: [],
  set: [],
  keyword: [],
  rule: [],
});

export default {
  name: "Bystanders",
  components: {
    CardWrapper,
    BystanderCard,
    HeroCard,
    KeywordFilter,
    PaginatedSingleCardGroupList,
    ResizableCardList,
    RuleFilter, 
    SearchFilter,
    SetFilter,
    BystanderFilter,
  },
  data: () => ({
    filter: baseFilter(),
    lastFilterTime: 0,
    bystanders,
  }),
  computed: {
    bystandersFound() {
      if(this.bystanders.length === 1) return "1 Bystrander";
      return `${this.bystanders.length} Bystranders`;
    },
  },
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.search = decodeURI(query.s || "");
    this.filter.bystander = toIntArray(query.by).filter(bystander => validBystanders.includes(bystander));
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
      if(filter.bystander.length) query.by = filter.bystander.join(",");
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
      this.bystanders = bystanders;
      groupSearchSetup(this.bystanders);

      this.bystanders = filterById(this.bystanders, this.filter.bystander);
      console.log(this.bystanders)
      this.bystanders = filterBySet(this.bystanders, this.filter.set);
      this.bystanders = filterGroupByKeyword(this.bystanders, this.filter.keyword);
      this.bystanders = filterGroupByRule(this.bystanders, this.filter.rule);
      this.bystanders = filterGroupBySearch(this.bystanders, Metadata.cardTypes.BYSTANDER.id, this.filter.search);

      this.bystanders.forEach(bystanders => {
        bystanders.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          return a.name.localeCompare(b.name);
        });

        bystanders.results = numberOfCards(bystanders.filteredCards);
      });

      sortGroups(this.bystanders, ALPHA_SORT);

      this.lastFilterTime = Date.now();
    }
  }
}
</script>