<template>
  <v-card class="mx-auto hero-card" :class="classes" raised :style="{ background, height: cardHeight }">
    <div ref="cardHeader">
      <div class="text-center font-weight-black card-title" :class="titleClasses">{{ card.name }}</div>
      <div :class="subTitleClasses">{{ card.subTitle }}</div>
    </div>

    <div class="card-abilities" :class="{ dense }" v-if="card.abilities" ref="cardAbilities">
      <div v-for="(ability, idx) in card.abilities" :key="idx">
        <shared-description-group :description="ability" :dense="dense"/>
      </div>
    </div>

    <TeamIcon class="card-team" v-if="card.team" :icon="card.team" width="40px"/>
    <HeroClassIcon class="card-hero-class" v-if="card.hc" :icon="card.hc" width="32px"/>

    <shared-rule v-if="card.hc2" :rule="{ rule: 2 }">
      <HeroClassIcon class="card-second-hero-class"  :icon="card.hc2" width="32px"/>
    </shared-rule>
    <RarityIcon v-if="card.rarity" class="card-rarity" :icon="card.rarity" width="24px"/>
    <SetIcon v-else-if="card.set" class="set-icon" :set="card.set" width="24px" />

    <template v-if="card.qtd > 0">
      <QtdIcon class="card-qtd-icon" :qtd="card.qtd" width="32px"/>
      <span class="card-qtd icon-text text-center font-weight-black">
        {{ card.qtd }}
      </span>
    </template>

    <shared-rule v-if="card.divided === 1" :rule="{ rule: 4 }">
      <DividedCardIcon class="divided-card-icon-left" size="12px" left />
    </shared-rule>
    <shared-rule v-if="card.divided === 2" :rule="{ rule: 4 }">
      <DividedCardIcon class="divided-card-icon-right" size="12px" right />
    </shared-rule>

    <template v-if="card.recruit">
      <AbilityIcon class="card-recruit-icon absolute-icon" :icon="2" width="80px"/>
      <span 
        class="card-recruit icon-text text-center font-weight-black" 
        :class="{ small: card.recruit.length > 2 }">
        {{ card.recruit }}
      </span>
    </template>

    <template v-if="card.attack">
      <AbilityIcon class="card-attack-icon absolute-icon" :icon="1" width="64px"/>
      <span 
        class="card-attack icon-text text-center font-weight-black" 
        :class="{ small: card.attack.length > 2 }">
        {{ card.attack }}
      </span>
    </template>

    <template v-if="card.piercing">
      <AbilityIcon class="card-attack-icon absolute-icon" :icon="6" width="64px"/>
      <span 
        class="card-attack icon-text text-center font-weight-black" 
        :class="{ small: card.piercing.length > 2 }">
        {{ card.piercing }}
      </span>
    </template>

    <template v-if="card.cost">
      <AbilityIcon class="card-cost-icon absolute-icon" :icon="card.overrideType === 1 ? 1 : 3" width="90px"/>
      <span 
        class="card-cost icon-text text-center font-weight-black"
        :class="{ small: card.cost.length > 2 }">
        <template v-if="!card.costAsterisk">
          {{ card.costText }}
        </template>
        <shared-rule v-else class="card-cost-asterisk" :rule="{ rule: 10, keywordStyle: true }">
          {{ card.costText }}
        </shared-rule>
      </span>
    </template>
  </v-card>
</template>

<script>
import CardMixin from "./cardMixin";
import TeamIcon from "../icons/TeamIcon.vue";
import HeroClassIcon from "../icons/HeroClassIcon.vue";
import QtdIcon from "../icons/QtdIcon.vue";
import RarityIcon from "../icons/RarityIcon.vue";
import AbilityIcon from "../icons/AbilityIcon.vue";
import SetIcon from "../icons/SetIcon.vue";
import DividedCardIcon from "../icons/DividedCardIcon.vue";
import { heroClassArray } from "../../constants/heroClass";

export default {
  name: "HeroCard",
  mixins: [CardMixin(62)],
  components: {
    TeamIcon,
    HeroClassIcon,
    QtdIcon,
    RarityIcon,
    AbilityIcon,
    DividedCardIcon,
    SetIcon,
  },
  computed: {
    background() {
      const baseColor = heroClassArray[this.card.hc || 0].bgColor;
      if(!this.card.hc2) return baseColor;
      const secondColor = heroClassArray[this.card.hc2 || 0].bgColor;
      return `linear-gradient(${baseColor} 35%, ${secondColor} 65%)`;
    },
    subTitleClasses() {
      return {
        'text-center card-sub-title': true,
        'card-red-sub-title': !!this.card.transformed
      };
    },
    classes() {
      return {
        "hero-divided-left": this.card.divided === 1,
        "hero-divided-right": this.card.divided === 2,
        "disabled": this.card.disabled
      }
    }
  }
};
</script>

<style scoped lang="scss">
.hero-card {
  padding: 6px;
  color: #000;
  border: solid 1px rgba(#000, .2);

  &.disabled {
    filter: blur(0px) grayscale(60%) opacity(0.4);
  }

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

  &.hero-divided-left:before, &.hero-divided-right:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
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
  .card-second-hero-class {
    position: absolute;
    left: 4px;
    top: 56px;
  }
  .card-rarity {
    position: absolute;
    right: 2px;
    top: 6px;
  }

  .card-abilities {
    font-size: 12px;
    padding-top: 16px;
    padding-left: 50px;
    padding-right: 16px;

    &.dense {
      font-size: 10px;
      padding-left: 46px;
      padding-right: 10px;
    }
  }
  
  .card-cost-icon {
    right: -13px;
    bottom: -13px;
  }
  .card-cost {
    right: 0px;
    bottom: 0px;
    font-size: 32px !important;
    
    &.small {
      font-size: 24px !important;
    }

    .card-cost-asterisk {
      pointer-events: all;
    }
  }
  
  .card-recruit-icon {
    left: -7px;
    bottom: 56px;
  }
  .card-recruit {
    left: 0px;
    bottom: 60px;
  }

  .card-attack-icon {
    left: 0px;
    bottom: 10px;
  }
  .card-attack {
    left: 0px;
    bottom: 10px;
  }

  .card-title {
    line-height: 24px;
    padding: 0px 24px;
    &.small {
      font-size: 14px;
    }
    &.smaller {
      font-size: 12px;
    }
  }

  .card-sub-title {
    font-size: 12px;
    line-height: 16px;
    padding: 0px 24px;
    &.card-red-sub-title {
      color: #d00;
    }
  }

  .divided-card-icon-left {
    color: #000;
    position: absolute;
    right: 2px;
    top: 130px
  }
  .divided-card-icon-right {
    color: #000;
    position: absolute;
    left: 2px;
    top: 130px
  }
}
</style>