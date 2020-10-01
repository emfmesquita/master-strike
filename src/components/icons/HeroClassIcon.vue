<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <img class="hero-class-icon" v-if="icon" :src="hc" :width="width" draggable="false"/>
        </span>
      </template>
      <span>{{ label }}</span>
    </v-tooltip>
  </span>
</template>

<script>
import { heroClassArray } from "../../constants/heroClass";

export default {
  name: "TeamIcon",
  props: ["icon", "width"],
  computed: {
    hc() {
      const hc = heroClassArray[this.icon].value;
      return require(`../../assets/icons/heroclasses/${hc}.svg`);
    },
    label() {
      const label = heroClassArray[this.icon].label;
      return `Hero Class: ${label}`;
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.hero-class-icon {
  user-select: none;
  vertical-align: middle;
  margin: -2px;
  padding-bottom: 1px;
}
</style>