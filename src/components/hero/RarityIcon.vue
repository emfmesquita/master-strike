
<template>
  <img class="rarity-icon" v-if="icon" :src="hc"/>
</template>

<script>
import { rarityArray } from "../../constants/rarity";

export default {
  name: "RarityIcon",
  props: ["icon"],
  computed: {
    hc() {
      const rarity = rarityArray[this.icon];
      return require(`../../assets/icons/rarity/${rarity}.svg`);
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.rarity-icon {
  user-select: none;
}
</style>