<template>
  <span>
    <span v-if="typeof ability === 'string'">{{ ability }}</span>
    <span class="font-weight-bold" v-else-if="ability.bold">{{ ability.bold }}</span>
    <HeroClassIcon v-else-if="ability.hc" :icon="ability.hc" width="24px"/>
    <TeamIcon v-else-if="ability.team" :icon="ability.team" width="24px"/>
    <AbilityIcon v-else-if="ability.icon" :icon="ability.icon" width="32px"/>
    <Keyword v-else-if="ability.keyword" :keyword="ability.keyword"/>
  </span>
</template>

<script>
import HeroClassIcon from "./HeroClassIcon.vue";
import TeamIcon from "./TeamIcon.vue";
import AbilityIcon from "./AbilityIcon.vue";
import Keyword from "./Keyword.vue";

export default {
  name: "CardAbility",
  props: ["ability"],
  components: {
    HeroClassIcon,
    TeamIcon,
    AbilityIcon,
    Keyword
  },
  data: () => ({})
};
</script>