
<template>
  <img class="ability-icon" v-if="icon" :src="iconSrc"/>
</template>

<script>
import { iconArray } from "../../constants/icon";

export default {
  name: "AbilityIcon",
  props: ["icon"],
  computed: {
    iconSrc() {
      const icon = iconArray[this.icon];
      return require(`../../assets/icons/${icon}.svg`);
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.ability-icon {
  user-select: none;
}
</style>