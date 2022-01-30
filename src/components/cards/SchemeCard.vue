<template>
  <v-card class="mx-auto scheme-card" :class="classes" raised :style="cardHeightStyle">
    <div ref="cardHeader">
      <div class="text-center font-weight-black card-title" :class="titleClasses">{{ card.name }}</div>
      <div :class="subTitleClasses">
        <shared-rule v-if="card.veiled" :rule="{ rule: 13, text: card.subTitle }" />
        <shared-rule v-else-if="card.unveiled" :rule="{ rule: 14, text: card.subTitle }" />
        <shared-rule v-else-if="card.transformed" :rule="{ rule: 7, text: card.subTitle }" />
        <template v-else>{{ card.subTitle }}</template>
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
  </v-card>
</template>

<script>
import CardMixin from "./cardMixin";
import SetIcon from "../icons/SetIcon.vue";

export default {
  name: "SchemeCard",
  mixins: [CardMixin(12)],
  components: {
    SetIcon
  },
  computed: {
    subTitleClasses() {
      return {
        'text-center card-sub-title': true,
        'card-red-sub-title': !!this.card.transformed
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

    &.dense {
      font-size: 10px;
      padding-left: 4px;
      padding-right: 4px;
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
}
</style>