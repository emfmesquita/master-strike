<template>
  <v-card class="mx-auto wound-card" :class="classes" raised :style="{ height: cardHeight }">
    <div ref="cardHeader">
      <div class="text-center font-weight-black card-title" :class="titleClasses">{{ card.name }}</div>
      <div :class="subtitleClasses">
        <shared-rule v-if="card.set === 13" :rule="{ rule: 17, text: card.subtitle }" />
        <shared-rule v-else-if="card.set === 41" :rule="{ rule: 18, text: card.subtitle }" />
        <template v-else>{{ card.subtitle }}</template>
      </div>
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

    <template v-if="card.cost !== undefined">
      <AbilityIcon class="card-cost-icon absolute-icon" :icon="card.overrideType === 1 ? 1 : 3" width="90px"/>
      <span class="card-cost icon-text text-center font-weight-black">
        <template>
          {{ card.cost }}
        </template>
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
  name: "WoundCard",
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
.wound-card {
  padding: 6px;
  color: #000;
  border: solid 1px rgba(#000, .2);
  background: #d84037;

  &.disabled {
    filter: blur(0px) grayscale(60%) opacity(0.4);
  }

  .card-qtd {
    right: 5px;
    top: 11px;
    width: 24px !important;
    line-height: 20px !important;
    font-size: 20px !important;
    -webkit-text-stroke-width: 1px !important;
  }

  .card-abilities {
    font-size: 12px;
    padding-top: 16px;
    padding-left: 50px;
    padding-right: 30px;
  }

  .card-cost-icon {
    right: -13px;
    bottom: -13px;
  }
  .card-cost {
    right: 0px;
    bottom: 0px;
    font-size: 32px !important;
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