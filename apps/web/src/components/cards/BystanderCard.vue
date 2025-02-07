<template>
  <v-card class="mx-auto bystander-card" :class="classes" raised :style="{ height: cardHeight }">
    <div ref="cardHeader">
      <div class="text-center font-weight-black card-title" :class="titleClasses">{{ card.name }}</div>
      <div :class="subtitleClasses">{{ card.subtitle }}</div>
    </div>

    <div class="card-abilities" :class="{ dense }" v-if="card.abilities" ref="cardAbilities">
      <div v-for="(ability, idx) in card.abilities" :key="idx">
        <shared-bullet-point-description v-if="ability.points" :points="ability.points" />
        <shared-description-group v-else :description="ability" :dense="dense"/>
      </div>
    </div>

    <SetIcon v-if="card.set" class="set-icon" :set="card.set" width="24px" />
    <SetIcon v-if="card.set2" class="set-icon2" :set="card.set2" width="24px" />

    <template v-if="card.qtd > 0">
      <QtdIcon class="card-qtd-icon" :qtd="card.qtd" :rarity="card.rarity" width="32px"/>
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
import QtdIcon from "../icons/QtdIcon.vue";
import AbilityIcon from "../icons/AbilityIcon.vue";
import SetIcon from "../icons/SetIcon.vue";

export default {
  name: "BystanderCard",
  mixins: [CardMixin(62)],
  components: {
    QtdIcon,
    AbilityIcon,
    SetIcon,
  },
  computed: {
    subtitleClasses() {
      return {
        'text-center card-sub-title': true
      };
    },
    classes() {
      return {
        "disabled": this.card.disabled
      }
    }
  }
};
</script>

<style scoped lang="scss">
.bystander-card {
  padding: 6px;
  color: #000;
  border: solid 1px rgba(#000, .2);
  background: #ffdb61;

  &.disabled {
    filter: blur(0px) grayscale(60%) opacity(0.4);
  }

  .card-qtd {
    right: 5px;
    top: 11px;
    width: 24px !important;
    line-height: 20px !important;
    font-size: 16px !important;
    -webkit-text-stroke-width: 3px !important;
  }


  .card-abilities {
    font-size: 12px;
    padding-top: 16px;
    padding-left: 36px;
    padding-right: 30px;
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
  }

  
  .set-icon {
    position: absolute;
    top: 40px;
    right: 6px;
  }

  .set-icon2 {
    position: absolute;
    top: 58px;
    right: 6px;
  }
}
</style>