<template>
  <span>
    <v-tooltip top right>
      <template v-slot:activator="{ on }">
        <span v-on="on" :style="{ width: iconSize, display: 'block' }">          
          <span class="cards-number" :style="{'font-size': fontSize, width: iconSize }">{{ number }}</span>
          <v-icon color="pink" class="cards-icon" :size="iconSize">mdi-cards</v-icon>
        </span>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
  </span>
</template>

<script>

export default {
  name: "NumberOfCards",
  props: ["number", "size"],
  computed: {
    fontSize() {
      return `${this.size}px`;
    },
    iconSize() {
      return `${Math.floor(2*this.size)}px`;
    },
    avatarSize() {
      return `${2 * this.size}px`;
    },
    tooltip() {
      return `${this.number} card${ this.number === 1 ? '' : 's'}`;
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">
.cards-icon {
  position: absolute;
  top: -4px
}
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
}
.cards-number-avatar {
  border-color:rgba(0, 0, 0, 0.12) !important;
  border-style: solid;
  border-width: 1px;
}
</style>