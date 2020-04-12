<template>
  <img class="hero-class-icon" v-if="icon" :src="hc"/>
</template>

<script>
import { heroClassArray } from "../../constants/hero-class";

export default {
  name: "TeamIcon",
  props: ["icon"],
  computed: {
    hc() {
      const hc = heroClassArray[this.icon];
      return require(`../../assets/icons/heroclasses/${hc}.svg`);
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.hero-class-icon {
  user-select: none;
}
</style>