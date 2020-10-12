<template>
  <div>
    <div @click="cardClick" :class="classes">
      <DynamicCard :height="height">
        <template v-slot:default="{ contentHeight }">
          <slot :contentHeight="contentHeight"></slot>
        </template>
      </DynamicCard>
    </div>
    <v-dialog
      v-if="$store.getters.canZoom && showZoom"
      v-model="showZoom"
      :max-width="zoomDialogWidth"
    >
      <div class="zoom-card-container" :style="zoomCardContainerStyle">
        <div class="zoom-card" @click="zoomedCardClick" :style="zoomCardStyle">
          <DynamicCard :height="height">
            <template v-slot:default="{ contentHeight }">
              <slot :contentHeight="contentHeight"></slot>
            </template>
          </DynamicCard>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import DynamicCard from "./DynamicCard.vue";
import { screenHeight, screenWidth } from "../../services/sceenUtils";
import { bus } from "../../services/eventBus";

export default {
  name: "CardWrapper",
  props: {
    height: {
      type: Number,
      default: 280
    },
  },
  components: { DynamicCard },
  data() {
    return {
      timeout: null,
      zoomLvl: 0,
      showZoom: false
    }
  },
  mounted() {
    bus.$on(bus.E.SCREEN_RESIZE, () => {
      this.showZoom = false;
    });
  },
  computed: {
    classes() {
      return {
        'zoomable-card': this.$store.getters.canZoom
      }
    },
    zoomCardStyle() {
      if(!this.showZoom) return {};
      const width = Math.floor(this.height * 0.75 / 0.9);
      return {
        transform: `scale(${this.zoomLvl})`,
        width: width + "px"
      }
    },
    zoomCardContainerStyle() {
      if(!this.showZoom) return {};
      const height = Math.floor(this.zoomLvl * this.height);
      return {
        height: height + "px",
      }
    },
    zoomDialogWidth() {
      return  Math.floor(this.zoomLvl * this.height * 0.75 / 0.9) + "px";
    }
  },
  methods: {
    calculate() {
      const sHeight = screenHeight();
      const sWidth = screenWidth();
      const ratioByHeight = 0.9 * (sHeight / this.height);
      const ratioByWidth = 0.9 * (sWidth - 48) / (this.height * 0.75);
      const safeRation = ratioByHeight > ratioByWidth ? ratioByWidth : ratioByHeight;
      this.zoomLvl = Math.floor(10 * safeRation) / 10;
    },
    cardClick() {
      if(!this.$store.getters.canZoom) return;
      this.calculate();
      this.showZoom = true;
    },
    zoomedCardClick() {
      this.showZoom = false;
    },
  }
}
</script>

<style lang="scss">
.zoomable-card {
  cursor: zoom-in;
}

.zoom-card-container {
  overflow: hidden;

  .zoom-card {
    transform-origin: 0 0;
    cursor: zoom-out;
  }
}
</style>