<template>
  <v-card class="mx-auto hero-card" raised :style="{ backgroundColor }">
    <TeamIcon class="card-team" v-if="team" :icon="team" width="40px"/>
    <HeroClassIcon class="card-hero-class" v-if="card.hc" :icon="card.hc" width="32px"/>
    <RarityIcon class="card-rarity" :icon="card.rarity" width="24px"/>
    <div class="text-center font-weight-black card-header">{{ card.name }}</div>
    <div class="text-center card-sub-header">{{ hero.name }}</div>

    <div class="card-abilities" v-if="card.abilities">
      <div v-for="(ability, idx) in card.abilities" :key="idx">
        <template v-if="Array.isArray(ability)">
          <CardAbility v-for="(abilityComponent, componetIdx) in ability" :key="componetIdx" :ability="abilityComponent" />
        </template>
        <CardAbility v-else  :ability="ability" />
      </div>
    </div>

    <template v-if="card.recruit">
      <AbilityIcon class="card-recruit-icon absolute-icon" icon="2" width="72px"/>
      <span class="card-recruit icon-text text-center font-weight-bold">{{ card.recruit }}</span>
    </template>

    <template v-if="card.attack">
      <AbilityIcon class="card-attack-icon absolute-icon" icon="1" width="64px"/>
      <span class="card-attack icon-text text-center font-weight-bold">{{ card.attack }}</span>
    </template>

    <template v-if="card.cost >= 0">
      <AbilityIcon class="card-cost-icon absolute-icon" icon="3" width="64px"/>
      <span class="card-cost icon-text text-center font-weight-bold">{{ card.cost }}</span>
    </template>
  </v-card>
</template>

<script>
import TeamIcon from "./TeamIcon.vue";
import HeroClassIcon from "./HeroClassIcon.vue";
import CardAbility from "./CardAbility.vue";
import RarityIcon from "./RarityIcon.vue";
import AbilityIcon from "./AbilityIcon.vue";
import { heroClassArray } from "../../constants/hero-class";

export default {
  name: "HeroCard",
  props: ["card", "hero"],
  data: () => ({
      
  }),
  components: {
    TeamIcon,
    HeroClassIcon,
    CardAbility,
    RarityIcon,
    AbilityIcon
  },
  computed: {
    backgroundColor() {
      return heroClassArray[this.card.hc || 0].bgColor;
    },
    team() {
      return this.card.team || this.hero.team;
    }
  }
};
</script>

<style scoped lang="scss">
.hero-card {
  height: 280px;
  padding: 6px;
  .card-team {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .card-hero-class {
    position: absolute;
    left: 4px;
    top: 30px;
  }
  .card-rarity {
    position: absolute;
    right: 2px;
    top: 6px;
  }

  .card-abilities {
    padding-top: 30px;
    padding-left: 50px;
    padding-right: 16px;
  }
  
  .card-cost-icon {
    right: 0px;
    bottom: 0px;
  }
  .card-cost {
    width: 64px;
    right: 1px;
    bottom: 2px;
    font-size: 32px;
  }
  
  .card-recruit-icon {
    left: -4px;
    bottom: 50px;
  }
  .card-recruit {
    width: 64px;
    left: 0px;
    bottom: 50px;
    font-size: 24px;
  }

  .card-attack-icon {
    left: 0px;
    bottom: 0px;
  }
  .card-attack {
    width: 64px;
    left: 0px;
    bottom: 0px;
    font-size: 24px;
  }

  .icon-text {
    position: absolute;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    line-height: 64px;
    user-select: none;
    pointer-events: none;
  }

  .absolute-icon {
    position: absolute;
    user-select: none;
  }

  .card-sub-header {
    font-size: 12px;
  }
  .card-abilities {
    font-size: 12px;
  }
}
</style>