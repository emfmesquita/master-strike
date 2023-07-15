<template>
  <div :style="style">
    <slot :contentHeight="contentHeight"></slot>
    <div class="dummy">
      <slot :contentHeight="-1"></slot>
    </div>
  </div>
</template>

<script>
import { get } from "lodash";

export default {
  name: "DynamicCard",
  props: {
    height: {
      type: Number,
      default: 280
    },
  },
  data() {
    return {
      contentHeight: -1
    }
  },
  mounted() {
    // calculates only when all children are rendered
    this.$nextTick(this.calculateContentHeight);
  },
  computed: {
    style() {
      return {
        height: this.height + "px",
      }
    }
  },
  methods: {
    calculateContentHeight() {
      const headerEl = get(this, "$children[1].$refs.cardHeader");
      const abilitiesEl = get(this, "$children[1].$refs.cardAbilities");
      if(!headerEl || !abilitiesEl) {
        this.contentHeight = -1;
      } else {
        this.contentHeight = headerEl.offsetHeight + abilitiesEl.offsetHeight;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dummy {
  visibility: hidden;
  position: relative;
}
</style>