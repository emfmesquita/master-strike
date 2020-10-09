
<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <template v-if="icon">
            <v-icon v-if="icon === 5" :style="focusStyle" style="color: #000">mdi-arrow-right-thick</v-icon>
            <img v-else class="ability-icon"  :src="iconSrc" :width="width" draggable="false"/>
          </template>
        </span>
      </template>
      <span>{{ label }}</span>
    </v-tooltip>
  </span>
</template>

<script>
import { iconArray } from "../../constants/icon";

export default {
  name: "AbilityIcon",
  props: ["icon", "width", "iconSrcOverride"],
  computed: {
    iconSrc() {
      const icon = this.iconSrcOverride || iconArray[this.icon - 1].value;
      return require(`../../assets/icons/${icon}.svg`);
    },
    label() {
      return iconArray[this.icon - 1].label;
    },
    focusStyle() {
      return {
        fontSize: this.width + 'px',
        position: "relative",
        top: "4px",
        left: "3px"
      }
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.ability-icon {
  user-select: none;
  vertical-align: middle;
}
</style>