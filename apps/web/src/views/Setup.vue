<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
              <div v-if="isEmpty">
                <v-chip class="text-center font-weight-bold mb-1">Empty Setup</v-chip>
              </div>
              <div v-if="!isEmpty">
                <v-chip small class="ma-1 font-weight-bold">{{ heroTitle }}</v-chip>
                <v-chip small class="ma-1 font-weight-bold">{{ mastermindTitle }}</v-chip>
                <v-chip small class="ma-1 font-weight-bold">{{ schemeTitle }}</v-chip>
              </div>
              <v-btn icon title="Clear Selection" @click="clearSelection">
                <v-icon>mdi-eraser</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <MastermindFilter :key="'mm-' + filterKey" v-model="selection.mastermind" @input="selectionChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <SchemeFilter :key="'scheme-' + filterKey" v-model="selection.scheme" @input="selectionChanged"/>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="12">
              <HeroFilter :key="'hero-' + filterKey" v-model="selection.hero" @input="selectionChanged"/>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:collapsed>
        <div class="text-center">
          <v-chip small class="text-center font-weight-bold mb-2">{{ selectedCount }}</v-chip>
        </div>
        <v-btn small icon title="Clear Selection" @click="clearSelection" class="mb-2 ml-2">
          <v-icon small>mdi-eraser</v-icon>
        </v-btn>
      </template>
    </shared-side-bar>

    <v-container v-if="isEmpty" style="paddingBottom: 100px">
      <v-row>
        <v-col cols="12" class="text-center grey--text py-12">
          Select the Mastermind(s), Scheme(s), and Heroes to view a setup.
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="!isEmpty" style="paddingBottom: 100px">
      <template v-if="masterminds.length">
        <v-row>
          <v-col cols="12">
            <div class="text-center title">{{ mastermindTitle }}</div>
          </v-col>
        </v-row>
        <v-row v-for="mm in masterminds" :key="groupKey('mm', mm)">
          <v-col cols="12">
            <CardGroup :group="mm" :cardHeight="cardHeight">
              <template v-slot:default="{ card }">
                <CardWrapper :height="cardHeight">
                  <template v-slot:default="{ contentHeight }">
                    <HeroCard v-if="card.overrideType === 1" :height="cardHeight" :card="card" :contentHeight="contentHeight" />
                    <VillainCard v-if="card.overrideType === 4" :height="cardHeight" :card="card" :contentHeight="contentHeight" />
                    <MastermindCard v-if="card.overrideType !== 1 && card.overrideType !== 4" :card="card" :height="cardHeight" :contentHeight="contentHeight" />
                  </template>
                </CardWrapper>
              </template>
            </CardGroup>
          </v-col>
        </v-row>
      </template>

      <template v-if="schemes.length">
        <v-row>
          <v-col cols="12">
            <div class="text-center title">{{ schemeTitle }}</div>
          </v-col>
        </v-row>
        <v-row v-for="scheme in schemes" :key="groupKey('scheme', scheme)">
          <v-col cols="12">
            <CardGroup :group="scheme" :cardHeight="340">
              <template v-slot:default="{ card }">
                <CardWrapper :height="340">
                  <template v-slot:default="{ contentHeight }">
                    <MastermindCard v-if="card.overrideType === 2" :card="card" :height="340" :contentHeight="contentHeight" />
                    <SchemeCard v-if="card.overrideType !== 2" :card="card" :height="340" :contentHeight="contentHeight" />
                  </template>
                </CardWrapper>
              </template>
            </CardGroup>
          </v-col>
        </v-row>
      </template>

      <template v-if="heroes.length">
        <v-row>
          <v-col cols="12">
            <div class="text-center title">{{ heroTitle }}</div>
          </v-col>
        </v-row>
        <v-row v-for="hero in heroes" :key="groupKey('hero', hero)">
          <v-col cols="12">
            <CardGroup :group="hero">
              <template v-slot:default="{ card }">
                <CardWrapper>
                  <template v-slot:default="{ contentHeight }">
                    <HeroCard :card="card" :contentHeight="contentHeight" />
                  </template>
                </CardWrapper>
              </template>
            </CardGroup>
          </v-col>
        </v-row>
      </template>
    </v-container>

    <shared-footer />
  </div>
</template>

<script>
import CardGroup from "../components/shared/CardGroup.vue";
import CardWrapper from "../components/cards/CardWrapper.vue";
import HeroCard from "../components/cards/HeroCard.vue";
import HeroFilter from "../components/filters/HeroFilter.vue";
import MastermindCard from "../components/cards/MastermindCard.vue";
import MastermindFilter from "../components/filters/MastermindFilter.vue";
import SchemeCard from "../components/cards/SchemeCard.vue";
import SchemeFilter from "../components/filters/SchemeFilter.vue";
import VillainCard from "../components/cards/VillainCard.vue";

import { getAllHeroes, getAllMasterminds, getAllSchemes, maxVP, numberOfCards } from "../services/cardUtils";
import { toIntArray } from "../services/queryUtils";
import { groupSearchSetup } from "../services/searchUtils";
import { sortHeroCards, sortMastermindCards, sortSchemeCards } from "../services/sortUtils";

const allHeroes = getAllHeroes();
const allMasterminds = getAllMasterminds();
const allSchemes = getAllSchemes();

const validHeroes = allHeroes.filter(hero => hero.id).map(hero => hero.id);
const validMasterminds = allMasterminds.filter(mm => mm.id).map(mm => mm.id);
const validSchemes = allSchemes.filter(scheme => scheme.id).map(scheme => scheme.id);

const baseSelection = () => ({
  hero: [],
  mastermind: [],
  scheme: [],
});

const parseIds = (value, validIds) => {
  return [...new Set(toIntArray(value).filter(id => validIds.includes(id)))];
};

const groupsByIds = (groups, ids) => {
  if (!ids || !ids.length) return [];
  return ids.map(id => groups.find(group => group.id === id)).filter(Boolean);
};

const countLabel = (count, singular, plural) => {
  if (count === 1) return `1 ${singular}`;
  return `${count} ${plural}`;
};

export default {
  name: "Setup",
  components: {
    CardGroup,
    CardWrapper,
    HeroCard,
    HeroFilter,
    MastermindCard,
    MastermindFilter,
    SchemeCard,
    SchemeFilter,
    VillainCard,
  },
  data: () => ({
    cardHeight: 310,
    selection: baseSelection(),
    lastSelectionTime: 0,
    filterKey: 0,
    heroes: [],
    masterminds: [],
    schemes: [],
  }),
  created() {
    this.applyQuery(this.$route.query);
  },
  watch: {
    "$route.query"() {
      if (this.queryKey(this.$route.query) === this.selectionKey()) return;
      this.applyQuery(this.$route.query);
    }
  },
  computed: {
    isEmpty() {
      return !this.heroes.length && !this.masterminds.length && !this.schemes.length;
    },
    selectedCount() {
      return this.heroes.length + this.masterminds.length + this.schemes.length;
    },
    heroTitle() {
      return countLabel(this.heroes.length, "Hero", "Heroes");
    },
    mastermindTitle() {
      return countLabel(this.masterminds.length, "Mastermind", "Masterminds");
    },
    schemeTitle() {
      return countLabel(this.schemes.length, "Scheme", "Schemes");
    },
  },
  methods: {
    groupKey(prefix, group) {
      return `${this.lastSelectionTime}-${prefix}-${group.id}-${group.name}`;
    },
    queryKey(query) {
      return `${query.hero || ""}|${query.mm || ""}|${query.scheme || ""}`;
    },
    selectionKey() {
      return `${this.selection.hero.join(",")}|${this.selection.mastermind.join(",")}|${this.selection.scheme.join(",")}`;
    },
    applyQuery(query) {
      this.selection.hero = parseIds(query.hero, validHeroes);
      this.selection.mastermind = parseIds(query.mm, validMasterminds);
      this.selection.scheme = parseIds(query.scheme, validSchemes);
      this.applySelection();
    },
    applySelection() {
      this.heroes = groupsByIds(allHeroes, this.selection.hero);
      this.masterminds = groupsByIds(allMasterminds, this.selection.mastermind);
      this.schemes = groupsByIds(allSchemes, this.selection.scheme);

      groupSearchSetup(this.heroes);
      groupSearchSetup(this.masterminds);
      groupSearchSetup(this.schemes);

      this.heroes.forEach(hero => {
        sortHeroCards(hero);
        hero.results = numberOfCards(hero.filteredCards);
      });

      this.masterminds.forEach(mm => {
        sortMastermindCards(mm);
        mm.results = numberOfCards(mm.filteredCards);
        mm.maxVP = maxVP(mm.cards.filter(card => !card.epic && !card.transformed)) + "";
      });

      this.schemes.forEach(scheme => {
        sortSchemeCards(scheme);
        scheme.results = numberOfCards(scheme.filteredCards);
      });

      this.lastSelectionTime = Date.now();
    },
    setQuery() {
      const query = {};
      if (this.selection.hero.length) query.hero = this.selection.hero.join(",");
      if (this.selection.mastermind.length) query.mm = this.selection.mastermind.join(",");
      if (this.selection.scheme.length) query.scheme = this.selection.scheme.join(",");

      this.$router.replace({
        path: this.$route.path,
        query
      });
    },
    clearSelection() {
      this.selection = baseSelection();
      this.filterKey += 1;
      this.selectionChanged();
    },
    selectionChanged() {
      this.selection.hero = this.selection.hero || [];
      this.selection.mastermind = this.selection.mastermind || [];
      this.selection.scheme = this.selection.scheme || [];
      this.applySelection();
      this.setQuery();
    },
  }
};
</script>
