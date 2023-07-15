<template>
  <Icon :label="label" :allowClickOnMobile="allowClickOnMobile">
    <template v-slot:default="{ on }">
      <v-img v-on="on" class="set-icon" :src="setIcon" :width="width" :min-width="width" :min-height="width" :max-width="width" :max-height="width" draggable="false"/>
    </template>
  </Icon>
</template>

<script>
import { setsArray } from "../../constants/sets";
import IconMixin from "./iconMixin";
import Icon from "./Icon.vue";

export default {
  name: "SetIcon",
  props: ["set", "width"],
  mixins: [IconMixin],
  components: { Icon },
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
  }
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