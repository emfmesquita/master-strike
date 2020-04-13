<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on"><img class="team-icon" v-if="icon" :src="team" :width="width"/></span>
      </template>
      <span>{{ label }}</span>
    </v-tooltip>
  </span>
</template>

<script>
import { teamArray } from "../../constants/team";

export default {
  name: "TeamIcon",
  props: ["icon", "width", "classProp"],
  computed: {
    team() {
      const team = teamArray[this.icon].value;
      return require(`../../assets/icons/teams/${team}.svg`);
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
}
</style>