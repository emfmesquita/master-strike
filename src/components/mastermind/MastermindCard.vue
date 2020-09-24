<template>
  <v-card class="mx-auto mm-card" :class="classes" raised :style="{ background }">
    <div class="text-center font-weight-black card-header" :class="{ small: smallName, smaller: smallerName }">{{ card.name }}</div>
    <div :class="subTitleClasses">{{ subTitle }}</div>

    <div class="card-abilities" :class="{ dense: card.dense }" v-if="card.abilities">
      <div v-for="(ability, idx) in card.abilities" :key="idx">
        <shared-description-group :description="ability" :dense="card.dense"/>
      </div>
    </div>

    <template v-if="mastermind.vp">
      <AbilityIcon class="card-vp-icon absolute-icon" noAdjust :icon="4" width="42px"/>
      <span class="card-vp icon-text text-center font-weight-black">
        {{ mastermind.vp }}
      </span>
    </template>

    <template v-if="attack">
      <AbilityIcon class="card-attack-icon absolute-icon" noAdjust :icon="1" width="90px"/> 
      <span class="card-attack icon-text text-center font-weight-black">
        <template v-if="!card.attackAsterisk">
          {{ attack }}
        </template>
        <shared-rule v-else class="card-attack-asterisk" :noUnderline=true :rule="{ rule: 10 }">
          {{ attack }}*
        </shared-rule>
      </span>
    </template>
  </v-card>
</template>

<script>
import AbilityIcon from "../shared/AbilityIcon.vue";
import { getTextWidth } from "../../services/cardUtils";

export default {
  name: "MastermindCard",
  props: ["card", "mastermind"],
  data: () => ({
      
  }),
  components: {
    AbilityIcon
  },
  computed: {
    background() {
      return this.card.tactic ? "#E6CDE6" : "#CE9CCE";
    },
    type() {
      return [6, 8].includes(this.mastermind.set) ? "Commander": "Mastermind";
    },
    subTitle() {
      const name = this.mastermind.tacticName || this.mastermind.name;
      if(this.card.tactic) return `${this.type} Tactic - ${name}`;
      if(this.card.epic) return `Epic ${this.type}`;
      return this.type;
    },
    subTitleClasses() {
      return {
        'text-center card-sub-title': true,
        'card-red-sub-title': !!this.card.epic
      };
    },
    attack() {
      if(this.card.attack) return this.card.attack;
      return this.mastermind.attack;
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
  height: 280px;
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
    padding: 0px 24px;
    &.card-red-sub-title {
      color: #d00;
    }
  }
}
</style>