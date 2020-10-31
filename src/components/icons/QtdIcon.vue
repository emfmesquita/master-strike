<template>
  <Icon :label="label" :allowClickOnMobile="allowClickOnMobile">
    <template v-slot:default="{ on }">
      <img v-on="on" class="qtd-icon" v-if="qtd > 0" src="../../assets/icons/rarity/common.svg" :width="width" draggable="false"/>
    </template>
  </Icon>
</template>

<script>
import IconMixin from "./iconMixin";
import Icon from "./Icon.vue";

export default {
  name: "QtdIcon",
  props: ["qtd", "width"],
  mixins: [IconMixin],
  components: { Icon },
  computed: {
    label() {
      return this.qtd === 1 ? "1 card" : `${this.qtd} cards`;
    }
  }
};
</script>

<style scoped lang="scss">
.rarity-icon {
  user-select: none;
}
</style>