<template>
  <v-card class="mx-auto mm-card" :class="classes" raised :style="{ background, height: height || '280px' }">
    <div class="text-center font-weight-black card-header" :class="{ small: smallName, smaller: smallerName }">{{ card.name }}</div>
    <div :class="subTitleClasses">{{ card.subTitle }}</div>

    <div class="card-abilities" :class="{ dense: card.dense }" v-if="card.abilities">
      <div v-for="(ability, idx) in card.abilities" :key="idx">
        <shared-description-group :description="ability" :dense="card.dense"/>
      </div>
    </div>

    <template v-if="card.vp > 0">
      <AbilityIcon class="card-vp-icon absolute-icon" noAdjust :icon="4" width="42px"/>
      <span class="card-vp icon-text text-center font-weight-black">
        {{ card.vp }}
      </span>
    </template>

    <template v-if="card.vAttack">
      <AbilityIcon class="card-attack-icon absolute-icon" noAdjust :icon="1" width="90px"/> 
      <span class="card-attack icon-text text-center font-weight-black">
        <template v-if="!card.vAttackAsterisk">
          {{ card.vAttackText }}
        </template>
        <shared-rule v-else class="card-attack-asterisk" :rule="{ rule: 10, keywordStyle: true }">
          {{ card.vAttackText }}
        </shared-rule>
      </span>
    </template>
  </v-card>
</template>

<script>
import AbilityIcon from "../icons/AbilityIcon.vue";
import { getTextWidth } from "../../services/cardUtils";

export default {
  name: "MastermindCard",
  props: ["card", "height"],
  data: () => ({
      
  }),
  components: {
    AbilityIcon
  },
  computed: {
    background() {
      return this.card.tactic ? "#E6CDE6" : "#CE9CCE";
    },
    subTitleClasses() {
      return {
        'text-center card-sub-title': true,
        'card-red-sub-title': !!this.card.epic || !!this.card.transformed
      };
    },
    classes() {
      return {
        "disabled": this.card.disabled
      }
    },
    smallName() {
      return getTextWidth(this.card.name, "16px Roboto") > 152;
    },
    smallerName() {
      return getTextWidth(this.card.name, "14px Roboto") > 152;
    }
  }
};
</script>

<style scoped lang="scss">
.mm-card {
  padding: 6px;
  color: #000;
  border: solid 1px rgba(#000, .2);

  &.disabled {
    filter: blur(0px) grayscale(60%) opacity(0.4);
  }

  .card-abilities {
    font-size: 12px;
    padding-top: 30px;
    padding-left: 16px;
    padding-right: 32px;

    &.dense {
      font-size: 10px;
      padding-top: 16px;
      padding-left: 10px;
      padding-right: 24px;
    }
  }
  
  .card-attack-icon {
    right: -13px;
    bottom: -13px;
  }
  .card-attack {
    right: 0px;
    bottom: 0px;
    font-size: 32px !important;

    .card-attack-asterisk {
      pointer-events: all;
    }
  }
  
  .card-vp-icon {
    right: -4px;
    bottom: 82px;
  }
  .card-vp {
    right: 7px;
    bottom: 93px;
    width: 20px !important;
    line-height: 20px !important;
    font-size: 16px !important;
    -webkit-text-stroke-width: 1px !important;
  }

  .icon-text {
    position: absolute;
    width: 64px;
    font-size: 28px;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    line-height: 64px;
    user-select: none;
    pointer-events: none;

    &.small {
      font-size: 24px;
      -webkit-text-stroke-width: 1px;
    }
  }

  .card-header {
    line-height: 24px;
    padding: 0px 6px;
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
    padding: 0px 6px;
    &.card-red-sub-title {
      color: #d00;
    }
  }
}
</style>