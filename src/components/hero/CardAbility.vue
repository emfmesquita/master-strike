<template>
  <span>
    <span v-if="typeof ability === 'string'">{{ ability }}</span>
    <span class="font-weight-bold" v-else-if="ability.bold">{{ ability.bold }}</span>
    <HeroClassIcon class="icon" v-else-if="ability.hc" :icon="ability.hc"/>
    <TeamIcon class="icon" v-else-if="ability.team" :icon="ability.team"/>
    <AbilityIcon v-else-if="ability.icon" :icon="ability.icon" width="32px"/>
  </span>
</template>

<script>
import HeroClassIcon from "./HeroClassIcon.vue";
import TeamIcon from "./TeamIcon.vue";
import AbilityIcon from "./AbilityIcon.vue";

export default {
  name: "CardAbility",
  props: ["ability"],
  components: {
    HeroClassIcon,
    TeamIcon,
    AbilityIcon
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.icon {
  width: 24px;
}
</style>