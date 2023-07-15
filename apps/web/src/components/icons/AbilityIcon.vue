
<template>
  <Icon :label="label" :noTooltip="noTooltip" :allowClickOnMobile="allowClickOnMobile">
    <template v-slot:default="{ on }">
      <span v-on="on">
        <template v-if="icon">
          <v-icon v-if="icon === 5" :style="focusStyle">mdi-arrow-right-thick</v-icon>
          <img v-else class="ability-icon" :src="iconSrc" :width="width" draggable="false"/>
        </template>
      </span>
    </template>
  </Icon>
</template>

<script>
import { iconArray } from "../../constants/icon";
import IconMixin from "./iconMixin";
import Icon from "./Icon.vue";

export default {
  name: "AbilityIcon",
  props: {
    icon: Number, 
    width: String, 
    iconSrcOverride: String, 
    noTooltip: Boolean,
  },
  mixins: [IconMixin],
  components: { Icon },
  computed: {
    iconSrc() {
      const icon = this.iconSrcOverride || iconArray[this.icon - 1].value;
      return require(`../../assets/icons/${icon}.svg`);
    },
    label() {
      return iconArray[this.icon - 1].label;
    },
    focusStyle() {
      if(this.icon !== 5) return {};
      const numericWidth = Number(this.width.substr(0, this.width.length - 2));
      const fontSize = Math.floor(3 * numericWidth / 4) + "px";
      return {
        fontSize,
        position: "relative",
        color: "#000",
        top: "4px",
        left: "3px"
      }
    }
  }
};
</script>

<style scoped lang="scss">
.ability-icon {
  user-select: none;
  vertical-align: middle;
}
</style>