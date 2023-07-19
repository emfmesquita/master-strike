<template>
  <v-card class="mx-auto villain-card" :class="classes" raised :style="cardHeightStyle">
    <div ref="cardHeader">
      <div class="text-center font-weight-black card-title" :class="titleClasses">{{ card.name }}</div>
      <div :class="subtitleClasses">
        <shared-rule v-if="card.subType === 1" :rule="{ rule: 5, text: card.subtitle }" />
        <shared-rule v-else-if="card.subType === 2" :rule="{ rule: 6, text: card.subtitle }" />
        <shared-rule v-else-if="card.subType === 3" :rule="{ rule: 9, text: card.subtitle }" />
        <template v-else>{{ card.subtitle }}</template>
      </div>
    </div>

    <div v-if="card.abilities" class="card-abilities" :class="{ dense }" ref="cardAbilities">
      <div v-for="(ability, idx) in card.abilities" :key="idx">
        <shared-bullet-point-description v-if="ability.points" :points="ability.points" />
        <shared-description-group v-else :description="ability" :dense="dense"/>
      </div>
    </div>

    <SetIcon v-if="card.set" class="set-icon" :set="card.set" width="24px" />
    <SetIcon v-if="card.set2" class="set-icon2" :set="card.set2" width="24px" />

    <template v-if="card.qtd > 0">
      <QtdIcon class="card-qtd-icon" :qtd="card.qtd" width="32px"/>
      <span class="card-qtd icon-text text-center font-weight-black">
        {{ card.qtd }}
      </span>
    </template>

    <template v-if="card.vpNum >= 0">
      <AbilityIcon class="card-vp-icon absolute-icon" :icon="4" width="42px"/>
      <span class="card-vp icon-text text-center font-weight-black">
        {{ card.vp }}
      </span>
    </template>

    <template v-if="card.vAttackText">
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
import QtdIcon from "../icons/QtdIcon.vue";
import SetIcon from "../icons/SetIcon.vue";
import { Metadata } from '@master-strike/data';

export default {
  name: "VillainCard",
  mixins: [CardMixin(62)],
  components: {
    AbilityIcon,
    SetIcon,
    QtdIcon
  },
  computed: {
    subtitleClasses() {
      return {
        'text-center card-sub-title': true
      };
    },
    classes() {
      const subType = this.card.subType || this.card.overrideSubType;
      return {
        "disabled": this.card.disabled,
        "henchman": !subType && this.card.type === Metadata.cardTypes.HENCHMEN.id,
        "villain": !subType && this.card.type === Metadata.cardTypes.VILLAIN.id,
        "location": subType === Metadata.cardSubTypes.LOCATION.id,
        "trap": subType === Metadata.cardSubTypes.TRAP.id,
        "villainous-weapon": subType === Metadata.cardSubTypes.VILLAINOUS_WEAPON.id,
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
    bottom: 92px;
    width: 20px !important;
    line-height: 20px !important;
    font-size: 16px !important;
    -webkit-text-stroke-width: 1px !important;
  }

  .card-title {
    line-height: 24px;
    padding: 0px 20px;
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
    padding: 0px 20px;
  }
}
</style>