<template>
  <span>
    <span v-if="typeof ability === 'string'">{{ ability }}</span>
    <span class="font-weight-bold" v-else-if="ability.bold">{{ ability.bold }}</span>
    <HeroClassIcon class="icon" v-else-if="ability.hc" :icon="ability.hc"/>
    <AttackIcon v-else-if="ability.icon === 1" width="24px"/>
  </span>
</template>

<script>
import HeroClassIcon from "./HeroClassIcon.vue";
import AttackIcon from "./AttackIcon.vue";

export default {
  name: "CardAbility",
  props: ["ability"],
  components: {
    HeroClassIcon,
    AttackIcon
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.icon {
  width: 24px;
}
</style>