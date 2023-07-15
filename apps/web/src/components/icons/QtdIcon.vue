<template>
  <Icon :label="label" :allowClickOnMobile="allowClickOnMobile">
    <template v-slot:default="{ on }">
      <img v-on="on" class="qtd-icon" v-if="qtd > 0" :src="icon" :width="width" draggable="false"/>
    </template>
  </Icon>
</template>

<script>
import { rarityArray } from "../../constants/rarity";
import IconMixin from "./iconMixin";
import Icon from "./Icon.vue";

export default {
  name: "QtdIcon",
  props: ["qtd", "width", "rarity"],
  mixins: [IconMixin],
  components: { Icon },
  computed: {
    icon() {
      if(!this.rarity) return require("../../assets/icons/rarity/common.svg");
      const rarity = rarityArray[this.rarity - 1].value;
      return require(`../../assets/icons/rarity/${rarity}.svg`);
    },
    label() {
      const qtdLabel = this.qtd === 1 ? "1 card" : `${this.qtd} cards`;
      if(!this.rarity) return qtdLabel;
      
      const rarityLabel = rarityArray[this.rarity - 1].label;
      return `${rarityLabel} (${qtdLabel})`;
    }
  }
};
</script>

<style scoped lang="scss">
.rarity-icon {
  user-select: none;
}
</style>