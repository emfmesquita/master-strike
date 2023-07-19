<template>
  <Icon :label="label" :allowClickOnMobile="allowClickOnMobile">
    <template v-slot:default="{ on }">
      <img v-on="on" class="hero-class-icon" v-if="icon" :src="hc" :width="width" draggable="false"/>
    </template>
  </Icon>
</template>

<script>
import { Metadata } from '@master-strike/data';
import IconMixin from "./iconMixin";
import Icon from "./Icon.vue";

export default {
  name: "HeroClassIcon",
  props: ["icon", "width"],
  mixins: [IconMixin],
  components: { Icon },
  computed: {
    hc() {
      const hc = Metadata.heroClassesArray[this.icon].value;
      return require(`../../assets/icons/heroclasses/${hc}.svg`);
    },
    label() {
      const label = Metadata.heroClassesArray[this.icon].label;
      return `Hero Class: ${label}`;
    }
  }
};
</script>

<style scoped lang="scss">
.hero-class-icon {
  user-select: none;
  vertical-align: middle;
  margin: -2px;
  padding-bottom: 1px;
}
</style>