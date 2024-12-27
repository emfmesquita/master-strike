<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <v-chip class="text-center font-weight-bold mr-2">{{ woundsFound }}</v-chip>
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
              <WoundFilter v-model="filter.wound" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SetFilter v-model="filter.set" :cardTypes="[7]" @input="filterChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <RuleFilter v-model="filter.rule" :cardTypes="[7]" @input="filterChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ wounds.length }}</v-chip>
        </div>
        <v-btn small icon title="Clear Filter" @click="clearFilter" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
      </template>
    </shared-side-bar>

    <ResizableCardList v-model="filter.search" :foundText="woundsFound" @change="filterChanged">
      <template v-if="wounds.length">
        <PaginatedSingleCardGroupList :groups="wounds" :key="lastFilterTime" :lineHeight="334">
          <template v-slot:default="{ card, cardHeight }">
            <CardWrapper :height="cardHeight">
              <template v-slot:default="{ contentHeight }">
                <HeroCard v-if="card.overrideType === 1" :card="card" :height="cardHeight" :contentHeight="contentHeight" />
                <WoundCard v-else :card="card" :height="cardHeight" :contentHeight="contentHeight" />
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
import WoundCard from "../components/cards/WoundCard.vue";
import PaginatedSingleCardGroupList from "../components/shared/PaginatedSingleCardGroupList.vue";
import ResizableCardList from "../components/shared/ResizableCardList.vue";
import RuleFilter from "../components/filters/RuleFilter.vue";
import SearchFilter from "../components/filters/SearchFilter.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import WoundFilter from "../components/filters/WoundFilter.vue";

import { Metadata } from "@master-strike/data";

import { getAllWounds, numberOfCards } from "../services/cardUtils";
import { toIntArray } from "../services/queryUtils";
import { 
  groupSearchSetup,
  filterGroupBySearch, 
  filterBySet,
  filterGroupByRule,
  filterById,
} from "../services/searchUtils";
import { sortGroups, ALPHA_SORT } from "../services/sortUtils";

const wounds = getAllWounds();
const validWounds = wounds.filter(by => by.id).map(by => by.id);

const baseFilter = () => ({
  search: "",
  wound: [],
  set: [],
  rule: [],
});

export default {
  name: "Wounds",
  components: {
    CardWrapper,
    WoundCard,
    HeroCard,
    PaginatedSingleCardGroupList,
    ResizableCardList,
    RuleFilter, 
    SearchFilter,
    SetFilter,
    WoundFilter,
  },
  data: () => ({
    filter: baseFilter(),
    lastFilterTime: 0,
    wounds,
  }),
  computed: {
    woundsFound() {
      if(this.wounds.length === 1) return "1 Wound";
      return `${this.wounds.length} Wounds`;
    },
  },
  created() {
    const query = this.$route.query;
    this.filter.search = decodeURI(query.s || "");
    this.filter.wound = toIntArray(query.by).filter(wound => validWounds.includes(wound));
    this.filter.set = toIntArray(query.set).filter(set => Metadata.setsArray[set - 1]);
    this.filter.rule = toIntArray(query.rule).filter(rule => Metadata.rulesArray[rule - 1]);
    this.search();
  },
  methods: {
    setQuery() {
      const query = {};
      const filter = this.filter;
      if(filter.search) query.s = encodeURI(filter.search);
      if(filter.wound.length) query.by = filter.wound.join(",");
      if(filter.set.length) query.set = filter.set.join(",");
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
      this.wounds = wounds;
      groupSearchSetup(this.wounds);

      this.wounds = filterById(this.wounds, this.filter.wound);
      this.wounds = filterBySet(this.wounds, this.filter.set);
      this.wounds = filterGroupByRule(this.wounds, this.filter.rule);
      this.wounds = filterGroupBySearch(this.wounds, Metadata.cardTypes.WOUND.id, this.filter.search);

      this.wounds.forEach(wounds => {
        wounds.filteredCards.sort((a,b) => {
          if(a.disabled && !b.disabled) return 1;
          if(!a.disabled && b.disabled) return -1;
          return a.name.localeCompare(b.name);
        });

        wounds.results = numberOfCards(wounds.filteredCards);
      });

      sortGroups(this.wounds, ALPHA_SORT);

      this.lastFilterTime = Date.now();
    }
  }
}
</script>