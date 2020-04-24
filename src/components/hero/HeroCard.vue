<template>
  <v-card class="mx-auto hero-card" :class="classes" raised :style="{ backgroundColor }">
    <TeamIcon class="card-team" v-if="team" :icon="team" width="40px"/>
    <HeroClassIcon class="card-hero-class" v-if="card.hc" :icon="card.hc" width="32px"/>
    <RarityIcon class="card-rarity" :icon="card.rarity" width="24px"/>
    <div class="text-center font-weight-black card-header">{{ card.name }}</div>
    <div :class="subTitleClasses">{{ subTitle }}</div>

    <div class="card-abilities" v-if="card.abilities">
      <div v-for="(ability, idx) in card.abilities" :key="idx">
        <shared-description-group :description="ability"/>
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
import TeamIcon from "../shared/TeamIcon.vue";
import HeroClassIcon from "../shared/HeroClassIcon.vue";
import RarityIcon from "../shared/RarityIcon.vue";
import AbilityIcon from "../shared/AbilityIcon.vue";
import { heroClassArray } from "../../constants/hero-class";

export default {
  name: "HeroCard",
  props: ["card", "hero"],
  data: () => ({
      
  }),
  components: {
    TeamIcon,
    HeroClassIcon,
    RarityIcon,
    AbilityIcon
  },
  computed: {
    backgroundColor() {
      return heroClassArray[this.card.hc || 0].bgColor;
    },
    team() {
      return this.card.team !== undefined ? this.card.team : this.hero.team;
    },
    subTitle() {
      return this.card.redSubTitle || this.card.subTitle || this.hero.name;
    },
    subTitleClasses() {
      return {
        'text-center': true,
        'card-sub-title': true,
        'card-red-sub-title': !!this.card.redSubTitle
      };
    },
    classes() {
      console.log(this.card.divided === 1)
      return {
        "hero-divided-left": this.card.divided === 1,
        "hero-divided-right": this.card.divided === 2
      }
    }
  }
};
</script>

<style scoped lang="scss">
.hero-card {
  height: 280px;
  padding: 6px;
  color: #000;
  border: solid 1px rgba(#000, .2);

  &.hero-divided-left {
    border-right-width: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    box-shadow: initial;
  }
  &.hero-divided-right {
    border-left-width: 0px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: initial;
  }

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

  .card-sub-title {
    font-size: 12px;
    &.card-red-sub-title {
      color: #d00;
    }
  }
  .card-abilities {
    font-size: 12px;
  }
}
</style>