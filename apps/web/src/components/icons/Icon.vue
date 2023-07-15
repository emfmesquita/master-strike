
<template>
  <span v-on="iconOn">
    <v-tooltip v-if="!noTooltip" top content-class="ms-icon">
      <template v-slot:activator="{ on }">
        <slot :on="on" />
      </template>
      <span>{{ label }}</span>
    </v-tooltip>
    <slot v-else />
  </span>
</template>

<script>
import IconMixin from "./iconMixin";

export default {
  name: "Icon",
  mixins: [IconMixin],
  props: {
    label: String,
    noTooltip: Boolean,
  },
  computed: {
    iconOn() {
      if(this.allowClickOnMobile || !window.isMobile) return {};
      return {
        click: this.stopClick
      }
    }
  },
  methods: {
    stopClick: e => e.stopPropagation()
  }
};
</script>

<style lang="scss">
.ms-icon {
  z-index: 500 !important;
}
</style>