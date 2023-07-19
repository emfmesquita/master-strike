<template>
  <Icon :label="label" :allowClickOnMobile="allowClickOnMobile">
    <template v-slot:default="{ on }">
      <img v-on="on" class="rarity-icon" v-if="icon" :src="rarity" :width="width" draggable="false"/>
    </template>
  </Icon>
</template>

<script>
import { Metadata } from '@master-strike/data';
import IconMixin from "./iconMixin";
import Icon from "./Icon.vue";

export default {
  name: "RarityIcon",
  props: ["icon", "width"],
  mixins: [IconMixin],
  components: { Icon },
  computed: {
    rarity() {
      const rarity = Metadata.raritiesArray[this.icon - 1].value;
      return require(`../../assets/icons/rarity/${rarity}.svg`);
    },
    label() {
      return Metadata.raritiesArray[this.icon - 1].qtdLabel;
    }
  }
};
</script>

<style scoped lang="scss">
.rarity-icon {
  user-select: none;
}
</style>