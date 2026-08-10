<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ officersFound }}</v-chip>
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
              <OfficerFilter v-model="filter.officer" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[8]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <TeamFilter v-model="filter.team" :cardTypes="[8]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <KeywordFilter v-model="filter.keyword" :cardTypes="[8]" @input="filterChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ officers.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
      </template>
    </shared-side-bar>

    <ResizableCardList v-model="filter.search" :foundText="officersFound" @change="filterChanged">
      <template v-if="officers.length">
        <PaginatedSingleCardGroupList :groups="officers" :key="lastFilterTime" :lineHeight="334">
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
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import OfficerFilter from "../components/filters/OfficerFilter.vue";
import TeamFilter from "../components/filters/TeamFilter.vue";

import { Metadata } from "@master-strike/data";

import { getAllOfficers, numberOfCards } from "../services/cardUtils.js";
import { toIntArray } from "../services/queryUtils.js";
import { 
  groupSearchSetup,
  filterGroupBySearch, 
  filterBySet, 
  filterGroupByCardProp,
  filterGroupByKeyword, 
  filterById,
} from "../services/searchUtils.js";
import { sortGroups, ALPHA_SORT } from "../services/sortUtils.js";

const officers = getAllOfficers();
const validOfficers = officers.filter(by => by.id).map(by => by.id);

const baseFilter = () => ({
  search: "",
  officer: [],
  set: [],
  team: [],
  keyword: [],
});

export default {
  name: "Officers",
  components: {
    CardWrapper,
    HeroCard,
    KeywordFilter,
    PaginatedSingleCardGroupList,
    ResizableCardList,
    SearchFilter,
    SetFilter,
    OfficerFilter,
    TeamFilter,
  },
  data: () => ({
    filter: baseFilter(),
    lastFilterTime: 0,
    officers,
  }),
  computed: {
    officersFound() {
      if(this.officers.length === 1) return "1 Officer";
      return `${this.officers.length} Officers`;
    },
  },
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.officer = toIntArray(query.by).filter(officer => validOfficers.includes(officer));
    this.filter.set = toIntArray(query.set).filter(set => Metadata.setsArray[set - 1]);
    this.filter.team = toIntArray(query.team).filter(team => Metadata.teamsArray[team]);
    this.filter.keyword = toIntArray(query.keyword).filter(keyword => Metadata.keywordsArray[keyword - 1]);
    this.search();
  },
  methods: {
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.search) query.s = encodeURI(filter.search);
      if(filter.officer.length) query.by = filter.officer.join(",");
      if(filter.set.length) query.set = filter.set.join(",");
      if(filter.team.length) query.team = filter.team.join(",");
      if(filter.keyword.length) query.keyword = filter.keyword.join(",");
      
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
      this.officers = officers;
      groupSearchSetup(this.officers);

      this.officers = filterById(this.officers, this.filter.officer);
      this.officers = filterBySet(this.officers, this.filter.set);
      this.officers = filterGroupByCardProp(this.officers, "team", this.filter.team);
      this.officers = filterGroupByKeyword(this.officers, this.filter.keyword);
      this.officers = filterGroupBySearch(this.officers, Metadata.cardTypes.OFFICER.id, this.filter.search);

      this.officers.forEach(officers => {
        officers.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          return a.name.localeCompare(b.name);
        });

        officers.results = numberOfCards(officers.filteredCards);
      });

      sortGroups(this.officers, ALPHA_SORT);

      this.lastFilterTime = Date.now();
    }
  }
}
</script>