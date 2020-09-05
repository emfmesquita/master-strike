<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <img class="team-icon" :src="team" :width="width" draggable="false"/>
        </span>
      </template>
      <span>{{ label }}</span>
    </v-tooltip>
  </span>
</template>

<script>
import { teamArray } from "../../constants/team";

export default {
  name: "TeamIcon",
  props: ["icon", "width"],
  computed: {
    team() {
      const team = teamArray[this.icon].value;
      let src = "";
      try {
        src = require(`../../assets/icons/teams/${team}.svg`);
      } catch (error) {
        src = require(`../../assets/icons/teams/unaffiliated.svg`);
      }
      return src;
    },
    label() {
      const label = teamArray[this.icon].label;
      return `Team: ${label}`;
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.team-icon {
  user-select: none;
  vertical-align: middle;
  margin: -2px;
  padding-bottom: 1px;
}
</style>