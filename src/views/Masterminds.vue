<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        MM
      </template>

      <template v-slot:collapsed>
        MM
      </template>
    </shared-side-bar>

    <v-container style="paddingBottom: 100px" :class="{ xlzoom: $vuetify.breakpoint.xl }">
      <template v-if="masterminds.length">
        <v-lazy min-height="410" :key="mmKey(mm)" v-for="mm in masterminds">
          <v-row>
            <v-col cols="12">
              <CardGroup :group="mm">
                <template v-slot:default="{ card }">
                  <HeroCard v-if="card.gainAsHero" :card="card" :hero="mm" />
                  <MastermindCard v-else :card="card" :mastermind="mm"/>
                </template>
              </CardGroup>
            </v-col>
          </v-row>
        </v-lazy>
      </template>
    </v-container>

    <shared-footer />
  </div>
</template>

<script>
import MastermindCard from "../components/mastermind/MastermindCard.vue";
import HeroCard from "../components/hero/HeroCard.vue";
import CardGroup from "../components/shared/CardGroup.vue";
import { getAllMasterminds } from "../services/cardUtils";

const masterminds = getAllMasterminds();


export default {
  name: "Masterminds",
  components: { MastermindCard, HeroCard, CardGroup },
  data: () => ({
    masterminds,
    lastFilterTime: 0,
  }),
  methods: {
    mmKey(mm) {
      return `${this.lastFilterTime}-${mm.name}`;
    },
  }
}
</script>

<style lang="scss">
</style>