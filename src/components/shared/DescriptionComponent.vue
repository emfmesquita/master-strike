<template>
  <span>
    <span v-if="typeof descriptionComponent === 'string'">{{ descriptionComponent }}</span>
    <span class="font-weight-bold" v-else-if="descriptionComponent.bold">{{ descriptionComponent.bold }}</span>
    <span class="font-italic" v-else-if="descriptionComponent.italic">{{ descriptionComponent.italic }}</span>
    <HeroClassIcon v-else-if="descriptionComponent.hc" :icon="descriptionComponent.hc" width="24px"/>
    <TeamIcon v-else-if="descriptionComponent.team" :icon="descriptionComponent.team" width="26px"/>
    <AbilityIcon v-else-if="descriptionComponent.icon" :icon="descriptionComponent.icon" width="32px"/>
    <shared-keyword v-else-if="descriptionComponent.keyword" :keyword="descriptionComponent"/>
    <v-divider class="ability-divider" v-else-if="descriptionComponent.divider"/>
  </span>
</template>

<script>
import HeroClassIcon from "./HeroClassIcon.vue";
import TeamIcon from "./TeamIcon.vue";
import AbilityIcon from "./AbilityIcon.vue";

export default {
  name: "DescriptionComponent",
  props: ["descriptionComponent"],
  components: {
    HeroClassIcon,
    TeamIcon,
    AbilityIcon
  },
  data: () => ({})
};
</script>

<style scoped>
.ability-divider {
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>