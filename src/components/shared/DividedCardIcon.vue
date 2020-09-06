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
  },
  data: () => ({})
};
</script>