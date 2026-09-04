<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <v-container>
        <v-row align="center">
          <v-col cols="12">
            <v-btn
              block
              color="pink"
              class="white--text"
              @click="randomize"
            >
              <v-icon left>mdi-refresh</v-icon> Randomize Both
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <SetFilter v-model="filter.set" :cardTypes="[2,5]" @input="filterChanged"/>
          </v-col>
        </v-row>
      </v-container>
      <template v-slot:collapsed>
        <v-btn
          block
          color="pink"
          class="white--text pa-0"
          @click="randomize"
        >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </template>
    </shared-side-bar>

    <v-container style="paddingBottom: 100px">
      <v-row align="center">
        <v-col cols="12" class="d-flex align-center pb-0">
          <span class="title">Mastermind</span>
          <v-spacer />
          <v-btn
            color="pink"
            class="white--text"
            @click="rerollMastermind"
          >
            <v-icon left>mdi-dice-multiple</v-icon>
            Reroll
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="mastermind">
        <v-col cols="12">
          <CardGroup :key="mastermindKey" :group="mastermind" :cardHeight="310">
            <template v-slot:default="{ card }">
              <CardWrapper :height="310">
                <template v-slot:default="{ contentHeight }">
                  <HeroCard v-if="card.overrideType === 1" :height="310" :card="card" :contentHeight="contentHeight" />
                  <VillainCard v-else-if="card.overrideType === 4" :height="310" :card="card" :contentHeight="contentHeight" />
                  <MastermindCard v-else :card="card" :height="310" :contentHeight="contentHeight" />
                </template>
              </CardWrapper>
            </template>
          </CardGroup>
        </v-col>
      </v-row>
      <v-row v-if="!mastermind">
        <v-col cols="12">
          <div class="text-center grey--text">No mastermind available for the selected sets.</div>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" class="d-flex align-center pb-0 pt-6">
          <span class="title">Scheme</span>
          <v-spacer />
          <v-btn
            color="pink"
            class="white--text"
            @click="rerollScheme"
          >
            <v-icon left>mdi-dice-multiple</v-icon>
            Reroll
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="scheme && schemeHasMultipleCards">
        <v-col cols="12" md="6" lg="4">
          <CardGroup :key="schemeKey" :group="scheme" :dense="true" :cardHeight="schemeCardHeight" :pageSize="1">
            <template v-slot:default="{ card }">
              <CardWrapper :height="schemeCardHeight">
                <template v-slot:default="{ contentHeight }">
                  <MastermindCard v-if="card.overrideType === 2" :card="card" :height="schemeCardHeight" :contentHeight="contentHeight" />
                  <SchemeCard v-else :card="card" :height="schemeCardHeight" :contentHeight="contentHeight" />
                </template>
              </CardWrapper>
            </template>
          </CardGroup>
        </v-col>
      </v-row>
      <v-row v-if="scheme && !schemeHasMultipleCards">
        <v-col cols="12" md="6" lg="4">
          <CardWrapper :key="schemeKey" :height="schemeCardHeight">
            <template v-slot:default="{ contentHeight }">
              <MastermindCard v-if="scheme.cards[0].overrideType === 2" :card="scheme.cards[0]" :height="schemeCardHeight" :contentHeight="contentHeight" />
              <SchemeCard v-else :card="scheme.cards[0]" :height="schemeCardHeight" :contentHeight="contentHeight" />
            </template>
          </CardWrapper>
        </v-col>
      </v-row>
      <v-row v-if="!scheme">
        <v-col cols="12">
          <div class="text-center grey--text">No scheme available for the selected sets.</div>
        </v-col>
      </v-row>
    </v-container>

    <shared-footer />
  </div>
</template>

<script>
import CardGroup from "../components/shared/CardGroup.vue";
import CardWrapper from "../components/cards/CardWrapper.vue";
import HeroCard from "../components/cards/HeroCard.vue";
import MastermindCard from "../components/cards/MastermindCard.vue";
import SchemeCard from "../components/cards/SchemeCard.vue";
import SetFilter from "../components/filters/SetFilter.vue";
import VillainCard from "../components/cards/VillainCard.vue";

import { Metadata } from "@master-strike/data";
import { getAllMasterminds, getAllSchemes, maxVP, numberOfCards } from "../services/cardUtils";
import { toIntArray, toInteger } from "../services/queryUtils";
import { randomNumber } from "../services/randomUtils";
import { filterBySet } from "../services/searchUtils";

const allMasterminds = getAllMasterminds();
const allSchemes = getAllSchemes();

const pickRandom = (items, currentId) => {
  if (!items.length) return null;
  if (items.length === 1) return items[0];

  const others = items.filter(item => item.id !== currentId);
  const pool = others.length ? others : items;
  return pool[randomNumber(0, pool.length)];
};

const toDisplayMastermind = group => {
  if (!group) return null;
  return {
    ...group,
    filteredCards: group.cards,
    results: numberOfCards(group.cards),
    maxVP: maxVP(group.cards.filter(card => !card.epic && !card.transformed)) + "",
  };
};

const toDisplayScheme = group => {
  if (!group) return null;
  return {
    ...group,
    filteredCards: group.cards,
    results: numberOfCards(group.cards),
  };
};

export default {
  name: "Solo",
  data: () => ({
    mastermind: null,
    scheme: null,
    filter: {
      set: [],
    },
    lastMastermindTime: 0,
    lastSchemeTime: 0,
  }),
  components: {
    CardGroup,
    CardWrapper,
    HeroCard,
    MastermindCard,
    SchemeCard,
    SetFilter,
    VillainCard,
  },
  created() {
    const query = this.$route.query;
    this.filter.set = Metadata.setsArray.map(set => set.id);
    if (query.fs) {
      this.filter.set = toIntArray(query.fs).filter(setId => Metadata.setsArray.some(set => set.id === setId));
    }

    const mastermindId = toInteger(query.mm);
    const schemeId = toInteger(query.scheme);
    const savedMastermind = allMasterminds.find(mm => mm.id === mastermindId);
    const savedScheme = allSchemes.find(s => s.id === schemeId);
    if (savedMastermind) this.mastermind = toDisplayMastermind(savedMastermind);
    if (savedScheme) this.scheme = toDisplayScheme(savedScheme);
    if (!this.mastermind) this.pickMastermind();
    if (!this.scheme) this.pickScheme();
    this.setQuery();
  },
  computed: {
    schemeHasMultipleCards() {
      return !!(this.scheme && this.scheme.cards && this.scheme.cards.length > 1);
    },
    schemeCardHeight() {
      if (this.schemeHasMultipleCards) return 266;
      return 340;
    },
    mastermindKey() {
      if (!this.mastermind) return "mm-empty";
      return `mm-${this.lastMastermindTime}-${this.mastermind.id}`;
    },
    schemeKey() {
      if (!this.scheme) return "scheme-empty";
      return `scheme-${this.lastSchemeTime}-${this.scheme.id}`;
    },
  },
  methods: {
    setQuery() {
      const query = {};
      const filter = this.filter;
      if (filter.set.length && filter.set.length < Metadata.setsArray.length) query.fs = filter.set.join(",");
      if (this.mastermind) query.mm = "" + this.mastermind.id;
      if (this.scheme) query.scheme = "" + this.scheme.id;

      this.$router.replace({
        path: this.$route.path,
        query
      });
    },
    filterChanged() {
      this.setQuery();
    },
    filteredMasterminds() {
      return filterBySet(allMasterminds, this.filter.set);
    },
    filteredSchemes() {
      return filterBySet(allSchemes, this.filter.set);
    },
    pickMastermind() {
      const currentId = this.mastermind && this.mastermind.id;
      this.mastermind = toDisplayMastermind(pickRandom(this.filteredMasterminds(), currentId));
      this.lastMastermindTime = Date.now();
    },
    pickScheme() {
      const currentId = this.scheme && this.scheme.id;
      this.scheme = toDisplayScheme(pickRandom(this.filteredSchemes(), currentId));
      this.lastSchemeTime = Date.now();
    },
    randomize() {
      this.pickMastermind();
      this.pickScheme();
      this.setQuery();
    },
    rerollMastermind() {
      this.pickMastermind();
      this.setQuery();
    },
    rerollScheme() {
      this.pickScheme();
      this.setQuery();
    },
  }
}
</script>
