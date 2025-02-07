<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on" :style="{ width: blockSize, display: 'block' }">
          <span class="cards-number" :style="{'font-size': fontSize }">{{ maxVP }}</span>
          <AbilityIcon class="absolute-icon vp-icon" :icon="4" :width="iconSize" :noTooltip="true"/>
        </span>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
  </span>
</template>

<script>


import AbilityIcon from "../icons/AbilityIcon.vue";

export default {
  name: "MaxVP",
  props: {
    maxVP: String,
    size: Number,
  },
  components: {
    AbilityIcon,
  },
  computed: {
    fontSize() {
      return `${this.size}px`;
    },
    iconSize() {
      return `${Math.floor(3.6*this.size)}px`;
    },
    blockSize() {
      return `${Math.floor(2*this.size)}px`;
    },
    avatarSize() {
      return `${2 * this.size}px`;
    },
    tooltip() {
      return `${this.maxVP} max printed VP`;
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.cards-number {
  font-weight: bold;
  z-index: 1;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #000;
  user-select: none;
  pointer-events: none;
  position: absolute;
  text-align: center;
  width: 30px;
}
.cards-number-avatar {
  border-color:rgba(0, 0, 0, 0.12) !important;
  border-style: solid;
  border-width: 1px;
}
.vp-icon {
  top: -17px;
  left: -13px;
}
</style>