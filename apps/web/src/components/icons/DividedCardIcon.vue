<template>
  <Icon label="Divided Card" :allowClickOnMobile="allowClickOnMobile">
    <template v-slot:default="{ on }">
      <v-icon v-on="on" :style="{ fontSize: size }" style="color: #000">{{ icon }}</v-icon>
    </template>
  </Icon>
</template>

<script>
import IconMixin from "./iconMixin";
import Icon from "./Icon.vue";

export default {
  name: "DividedCardIcon",
  mixins: [IconMixin],
  components: { Icon },
  props: {
    "left": Boolean, 
    "right": Boolean, 
    "size": String
  },
  computed: {
    icon() {
      if(this.left) return 'mdi-arrow-collapse-right';
      if(this.right) return 'mdi-arrow-collapse-left';
      return '';
    }
  }
};
</script>