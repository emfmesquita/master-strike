<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ keywordsFound() }}</v-chip>
              <v-btn icon title="Clear Filter" @click="clearFilter">
                <v-icon>mdi-eraser</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SearchFilter v-model="filter.search" @change="filterChanged" />
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ keywords.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
        <v-divider></v-divider>
      </template>
    </shared-side-bar>

    <v-container style="paddingBottom: 100px">
    </v-container>

    <ResizableCardList v-model="filter.search" :foundText="keywordsFound()" @change="filterChanged">
      <template v-if="keywords.length">
        <v-lazy :key="keywordKey(keyword)" v-for="   keyword   in keywords">
          <v-row>
            <v-col cols="12">
              <shared-rule-card :rule="{ keyword: keyword.id, keywordStyle: true }" />
            </v-col>
          </v-row>
        </v-lazy>
      </template>
    </ResizableCardList>

    <shared-footer />
  </div>
</template>

<script>

import { sortBy } from "lodash";
import SearchFilter from "../components/filters/SearchFilter.vue";
import ResizableCardList from "../components/shared/ResizableCardList.vue";
import { keywordsArray } from "../constants/keywords";

const allKeywords = sortBy(keywordsArray.filter(k => k.value !== 'none'), "label");

const baseFilter = () => ({
  search: ""
});

export default {
  name: "Keywords",
  components: {
    ResizableCardList,
    SearchFilter,
  },
  data: () => ({
    filter: baseFilter(),
    lastFilterTime: 0,
    heroes: []
  }),
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.search();
  },
  computed: {},
  methods: {
    keywordsFound() {
      if (this.keywords.length === 1) return "1 Keyword";
      return `${this.keywords.length} Keywords`;
    },
    keywordKey(keyword) {
      return `${this.lastFilterTime}-${keyword.id}-${keyword.value}`;
    },
    setQuery() {
      const query = {};
      const filter = this.filter;
      if (filter.search) query.s = encodeURI(filter.search);

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
      this.keywords = allKeywords;

      if (this.filter.search) {
        this.keywords = this.keywords.filter(keyword => keyword.label.toLowerCase().includes(this.filter.search.toLowerCase()));
      }

      this.lastFilterTime = Date.now();
    }
  }
};
</script>
