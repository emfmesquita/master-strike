<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <v-avatar class="cards-number-avatar" color="#e0e0e0" :size="avatarSize">
            <span class="cards-number" :style="{'font-size': fontSize }">{{ number }}</span>
            <v-icon color="pink" class="cards-icon" :size="iconSize">mdi-cards</v-icon>
          </v-avatar>
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
      return `${Math.floor(1.6*this.size)}px`;
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
}
.cards-number {
  font-weight: bold;
  z-index: 1;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  user-select: none;
  pointer-events: none;
}
.cards-number-avatar {
  border-color:rgba(0, 0, 0, 0.12) !important;
  border-style: solid;
  border-width: 1px;
}
</style>