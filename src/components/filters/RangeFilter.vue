<template>
  <v-range-slider
    :value="value"
    :max="max"
    :min="min"
    ticks="always"
    tick-size="4"
    thumb-label="always"
    thumb-size="0"
    class="align-center"
    @change="filterChanged"
  >
    <template v-slot:thumb-label="{ value }">
      <AbilityIcon 
        class="absolute-icon" 
        :class="thumbClass(value)"
        :icon="icon" 
        :width="width(value)" 
        :iconSrcOverride="value < 0 ? 'block' : null"
      />
      <span v-if="value >= 0" class="thumb icon-text text-center font-weight-black">
        {{ value }}
      </span>
    </template>
  </v-range-slider>
</template>

<script>
import AbilityIcon from "../icons/AbilityIcon.vue";

export default {
  name: "RangeFilter",
  props: ["value", "icon", "min", "max"],
  components: { AbilityIcon },
  data: () => ({}),
  methods: {
    filterChanged(newValue) {
      if(this.value[0] === newValue[0] && this.value[1] === newValue[1]) return;
      this.$emit('input', newValue);
    },
    isRecruit(value) {
      return value >= 0 && this.icon === 2;
    },
    width(value) {
      return this.isRecruit(value) ? "48px" : "32px";
    },
    thumbClass(value) {
      const recruit = this.isRecruit(value);
      return {
        thumb: !recruit,
        "recruit-thumb": recruit
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .thumb {
    top: -32px;
    left: -16px;
  }
  .recruit-thumb {
    top: -43px; 
    left: -24px
  }
  .icon-text {
    position: absolute;
    width: 32px;
    font-size: 16px;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    line-height: 32px;
    user-select: none;
    pointer-events: none;
  }
</style>