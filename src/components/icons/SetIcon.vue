<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <img class="set-icon" :src="setIcon" :width="width" draggable="false"/>
        </span>
      </template>
      <span>{{ label }}</span>
    </v-tooltip>
  </span>
</template>

<script>
import { setsArray } from "../../constants/sets";

export default {
  name: "TeamIcon",
  props: ["set", "width"],
  computed: {
    setIcon() {
      const set = setsArray[this.set - 1].value;
      let src = "";
      try {
        src = require(`../../assets/icons/sets/${set}.svg`);
      } catch (error) {
        src = require(`../../assets/icons/teams/unaffiliated.svg`);
      }
      return src;
    },
    label() {
      const label = setsArray[this.set - 1].label;
      return `Set: ${label}`;
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.set-icon {
  user-select: none;
  vertical-align: middle;
  margin: -2px;
  padding-bottom: 1px;
}
</style>