
<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <template v-if="icon">
            <v-icon v-if="icon === 5" :style="{ fontSize: width + 'px', paddingBottom: '4px' }" style="color: #000">mdi-arrow-right-thick </v-icon>
            <img v-else class="ability-icon" :class="iconClass"  :src="iconSrc" :width="width" draggable="false"/>
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
  props: ["icon", "width", "noAdjust", "iconSrcOverride"],
  computed: {
    iconSrc() {
      const icon = this.iconSrcOverride || iconArray[this.icon - 1].value;
      return require(`../../assets/icons/${icon}.svg`);
    },
    iconClass() {
      return {
        'adjust-icon': this.icon !== 3 && this.icon !== 5 && this.noAdjust === undefined
      };
    },
    label() {
      return iconArray[this.icon - 1].label;
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

.adjust-icon {
  margin: -6px;
  padding-bottom: 4px;
}
</style>