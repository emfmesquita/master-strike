<template>
  <v-card class="mx-auto scheme-card" :class="classes" raised :style="cardHeightStyle">
    <div ref="cardHeader">
      <div class="text-center font-weight-black card-title" :class="titleClasses">{{ card.name }}</div>
      <div :class="subtitleClasses">
        <shared-rule v-if="card.veiled" :rule="{ rule: 13, text: card.subtitle }" />
        <shared-rule v-else-if="card.unveiled" :rule="{ rule: 14, text: card.subtitle }" />
        <shared-rule v-else-if="card.transformed" :rule="{ rule: 7, text: card.subtitle }" />
        <shared-rule v-else-if="card.ambush" :rule="{ rule: 16, text: card.subtitle }" />
        <template v-else>{{ card.subtitle }}</template>
      </div>
    </div>

    <div v-if="card.abilities" class="card-abilities" :class="{ dense, vp }" ref="cardAbilities">
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
  </v-card>
</template>

<script>
import AbilityIcon from "../icons/AbilityIcon.vue";
import CardMixin from "./cardMixin";
import QtdIcon from "../icons/QtdIcon.vue";
import SetIcon from "../icons/SetIcon.vue";

export default {
  name: "SchemeCard",
  mixins: [CardMixin(12)],
  components: {
    AbilityIcon,
    QtdIcon,
    SetIcon
  },
  computed: {
    subtitleClasses() {
      return {
        'text-center card-sub-title': true,
        'card-red-sub-title': !!this.card.transformed
      };
    },
    classes() {
      return {
        "disabled": this.card.disabled
      }
    },
    vp() {
      return this.card.vp > 0;
    }
  }
};
</script>

<style scoped lang="scss">
.scheme-card {
  padding: 6px;
  color: #000;
  background-color: #C6ECD9;
  border: solid 1px rgba(#000, .2);

  &.disabled {
    filter: blur(0px) grayscale(60%) opacity(0.4);
  }

  .card-abilities {
    font-size: 12px;
    padding-top: 16px;
    padding-left: 6px;
    padding-right: 6px;

    &.vp.dense {
      font-size: 9px;
      padding-right: 24px;
    }

    &.vp {
      font-size: 10px;
      padding-left: 4px;
      padding-right: 24px;
      padding-top: 2px;
    }

    &.dense {
      font-size: 10px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 2px;
    }
  }

  .card-title {
    line-height: 24px;
    padding: 0px 20px;
    &.small {
      font-size: 14px;
      line-height: 18px;
    }
    &.smaller {
      font-size: 12px;
      line-height: 16px;
    }
  }

  .card-sub-title {
    font-size: 12px;
    line-height: 16px;
    padding: 0px 20px;
    &.card-red-sub-title {
      color: #d00;
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
    font-size: 14px !important;
    -webkit-text-stroke-width: 3px !important;
  }
}
</style>