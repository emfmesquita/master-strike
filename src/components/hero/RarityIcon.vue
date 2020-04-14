
<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <img class="rarity-icon" v-if="icon" :src="rarity" :width="width" draggable="false"/>
        </span>
      </template>
      <span>{{ label }}</span>
    </v-tooltip>
  </span>
  
</template>

<script>
import { rarityArray } from "../../constants/rarity";

export default {
  name: "RarityIcon",
  props: ["icon", "width"],
  computed: {
    rarity() {
      const rarity = rarityArray[this.icon - 1].value;
      return require(`../../assets/icons/rarity/${rarity}.svg`);
    },
    label() {
      return rarityArray[this.icon - 1].label;
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