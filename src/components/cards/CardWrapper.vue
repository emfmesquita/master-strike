<template>
  <div v-resize="calculateContentHeightDebounced" :style="wrapperStyle">
    <slot :contentHeight="contentHeight"></slot>
    <div class="dummy" ref="dummyCard">
      <slot :contentHeight="-1"></slot>
    </div>
  </div>
</template>

<script>
import { get } from "lodash";

export default {
  name: "CardWrapper",
  props: {
    height: {
      type: Number,
      default: 280
    },
  },
  data() {
    return {
      loaded: false,
      contentHeight: -1,
      timeout: null
    }
  },
  mounted() {
    // calculates only when all children are rendered
    this.$nextTick(() => {
      this.calculateContentHeight();
      this.loaded = true;
    });
  },
  updated() {
    this.calculateContentHeightDebounced();
  },
  beforeDestroy() {
    if (this.timeout) clearTimeout(this.timeout);
  },
  computed: {
    wrapperStyle() {
      return {
        height: this.height + "px"
      }
    }
  },
  methods: {
    calculateContentHeightDebounced() {
      if(!this.loaded) return;
      if(this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(this.calculateContentHeight, 50);
    },
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