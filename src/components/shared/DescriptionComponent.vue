<template>
  <span>
    <span v-if="typeof descriptionComponent === 'string'">{{ descriptionComponent }}</span>
    <span class="font-weight-bold" v-else-if="descriptionComponent.bold">{{ descriptionComponent.bold }}</span>
    <span class="font-italic" v-else-if="descriptionComponent.italic">{{ descriptionComponent.italic }}</span>
    <HeroClassIcon v-else-if="descriptionComponent.hc" :icon="descriptionComponent.hc" :width="hcWidth"/>
    <TeamIcon v-else-if="descriptionComponent.team" :icon="descriptionComponent.team" :width="teamWidth"/>
    <AbilityIcon v-else-if="descriptionComponent.icon" :icon="descriptionComponent.icon" :width="abilityWidth"/>
    <shared-rule v-else-if="descriptionComponent.keyword || descriptionComponent.rule" :rule="descriptionComponent"/>
    <v-divider class="ability-divider" v-else-if="descriptionComponent.divider"/>
  </span>
</template>

<script>
import HeroClassIcon from "../icons/HeroClassIcon.vue";
import TeamIcon from "../icons/TeamIcon.vue";
import AbilityIcon from "../icons/AbilityIcon.vue";

export default {
  name: "DescriptionComponent",
  props: ["descriptionComponent", "dense"],
  components: {
    HeroClassIcon,
    TeamIcon,
    AbilityIcon
  },
  data: () => ({}),
  computed: {
    hcWidth() {
      return this.dense ? "18px" : "24px";
    },
    teamWidth() {
      return this.dense ? "20px" : "26px";
    },
    abilityWidth() {
      return this.dense ? "26px" : "32px";
    }
  }
};
</script>

<style scoped>
.ability-divider {
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>