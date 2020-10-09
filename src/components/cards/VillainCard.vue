<template>
  <v-card class="mx-auto villain-card" :class="classes" raised :style="cardHeightStyle">
    <div ref="cardHeader">
      <div class="text-center font-weight-black card-title" :class="titleClasses">{{ card.name }}</div>
      <div :class="subTitleClasses">
        <shared-rule v-if="card.subType === 1" :rule="{ rule: 5, text: card.subTitle }" />
        <shared-rule v-else-if="card.subType === 2" :rule="{ rule: 6, text: card.subTitle }" />
        <shared-rule v-else-if="card.subType === 3" :rule="{ rule: 9, text: card.subTitle }" />
        <template v-else>{{ card.subTitle }}</template>
      </div>
    </div>

    <div v-if="card.abilities" class="card-abilities" :class="{ dense }" ref="cardAbilities">
      <div v-for="(ability, idx) in card.abilities" :key="idx">
        <shared-description-group :description="ability" :dense="dense"/>
      </div>
    </div>

    <SetIcon v-if="card.set" class="set-icon" :set="card.set" width="24px" />
    <SetIcon v-if="card.set2" class="set-icon2" :set="card.set2" width="24px" />

    <template v-if="card.vp > 0">
      <AbilityIcon class="card-vp-icon absolute-icon" :icon="4" width="42px"/>
      <span class="card-vp icon-text text-center font-weight-black">
        {{ card.vp }}
      </span>
    </template>

    <template v-if="card.vAttack">
      <AbilityIcon class="card-attack-icon absolute-icon" :icon="1" width="90px"/> 
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
import CardMixin from "./cardMixin";
import AbilityIcon from "../icons/AbilityIcon.vue";
import SetIcon from "../icons/SetIcon.vue";
import { cardSubTypes, cardTypes } from "../../constants/cardTypes";

export default {
  name: "VillainCard",
  mixins: [CardMixin(62)],
  components: {
    AbilityIcon,
    SetIcon
  },
  computed: {
    subTitleClasses() {
      return {
        'text-center card-sub-title': true
      };
    },
    classes() {
      const subType = this.card.subType || this.card.overrideSubType;
      return {
        "disabled": this.card.disabled,
        "henchman": !subType && this.card.type === cardTypes.HENCHMEN.id,
        "villain": !subType && this.card.type === cardTypes.VILLAIN.id,
        "location": subType === cardSubTypes.LOCATION.id,
        "trap": subType === cardSubTypes.TRAP.id,
        "villainous-weapon": subType === cardSubTypes.VILLAINOUS_WEAPON.id,
      }
    }
  }
};
</script>

<style scoped lang="scss">
.villain-card {
  padding: 6px;
  color: #000;
  border: solid 1px rgba(#000, .2);

  .set-icon {
    position: absolute;
    top: 6px;
    right: 8px;
  }

  .set-icon2 {
    position: absolute;
    top: 24px;
    right: 8px;
  }

  &.villain {
    background-color: #ffd9b3;
  }

  &.henchman {
    background-color: #ffd9b3;
  }

  &.location {
    background-color: #e6ffcc;
  }

  &.trap {
    background-color: #e6ffcc;
  }

  &.villainous-weapon {
    background: radial-gradient(circle, #F0F0F0 35%, #b9b9b9 100%);
  }

  &.disabled {
    filter: blur(0px) grayscale(60%) opacity(0.4);
  }

  .card-abilities {
    font-size: 12px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 24px;

    &.dense {
      font-size: 10px;
      padding-left: 10px;
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

  .card-title {
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
  }
}
</style>