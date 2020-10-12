<template>
  <Icon :label="label" :allowClickOnMobile="allowClickOnMobile">
    <template v-slot:default="{ on }">
      <img v-on="on" class="team-icon" :src="team" :width="width" draggable="false"/>
    </template>
  </Icon>
</template>

<script>
import { teamArray } from "../../constants/team";
import IconMixin from "./iconMixin";
import Icon from "./Icon.vue";

export default {
  name: "TeamIcon",
  props: ["icon", "width"],
  mixins: [IconMixin],
  components: { Icon },
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
  }
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