<template>
  <img class="team-icon" v-if="icon" :src="team"/>
</template>

<script>
import { teamArray } from "../../constants/team";

export default {
  name: "TeamIcon",
  props: ["icon"],
  computed: {
    team() {
      const team = teamArray[this.icon];
      return require(`../../assets/icons/teams/${team}.svg`);
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.team-icon {
  user-select: none;
}
</style>