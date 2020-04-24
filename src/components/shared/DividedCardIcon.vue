<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on">
          <v-icon :style="{ fontSize: size }" style="color: #000">{{ icon }}</v-icon>
        </span>
      </template>
      <span>Divided Card</span>
    </v-tooltip>
  </span>
  
</template>

<script>

export default {
  name: "DividedCardIcon",
  props: ["left", "right", "size"],
  computed: {
    icon() {
      if(this.left !== undefined) return 'mdi-arrow-collapse-right';
      if(this.right !== undefined) return 'mdi-arrow-collapse-left';
      return '';
    }
  },
  data: () => ({})
};
</script>