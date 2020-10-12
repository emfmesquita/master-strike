<template>
  <div>
    <div>
      <v-container v-if="!resizing" style="paddingBottom: 100px" ref="list">
        <v-row v-if="$vuetify.breakpoint.mdAndDown && $store.getters.sideBarCollapsed">
          <v-col class="py-0">
            <SearchFilter :value="value" @input="onInput" @change="onChange"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="text-center title">{{ foundText }}</div>
          </v-col>
        </v-row>

        <slot></slot>
      </v-container>
      <div v-else :style="{ height: lastHeight + 'px' }" />
    </div>
  </div>
</template>

<script>
import { bus } from "../../services/eventBus";
import SearchFilter from "../filters/SearchFilter.vue";

export default {
  name: "ResizableCardList",
  props: {
    value: String,
    foundText: String
  },
  components: { SearchFilter },
  data() {
    return {
      timeout: null,
      resizing: false,
      lastHeight: 0
    }
  },
  mounted() {
    bus.$on(bus.E.SCREEN_RESIZE_WIDTH, this.onResize);
    bus.$on(bus.E.TOGGLE_SIDE_BAR, this.onResize);

    // considers resizing only children is rendered first time
    this.$nextTick(() => {
      this.loaded = true;
    });
  },
  beforeDestroy() {
    bus.$off(bus.E.SCREEN_RESIZE_WIDTH, this.onResize);
    bus.$off(bus.E.TOGGLE_SIDE_BAR, this.onResize);
    if (this.timeout) clearTimeout(this.timeout);
  },
  methods: {
    onResize() {
      if(!this.loaded) return;
      if(this.$refs.list && !this.resizing) {
        this.lastHeight = this.$refs.list.offsetHeight;
      } 
      this.resizing = true;
      if(this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.resizing = false, 300);
    },
    onInput(newValue) {
      this.$emit('input', newValue);
    },
    onChange(newValue) {
      this.$emit("change", newValue);
    }
  }
}
</script>