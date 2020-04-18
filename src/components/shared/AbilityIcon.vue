
<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <img class="ability-icon" :class="iconClass" v-if="icon" :src="iconSrc" :width="width" draggable="false"/>
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
  props: ["icon", "width"],
  computed: {
    iconSrc() {
      const icon = iconArray[this.icon - 1].value;
      return require(`../../assets/icons/${icon}.svg`);
    },
    iconClass() {
      return {
        'adjust-icon': this.icon === 1 || this.icon === 2
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