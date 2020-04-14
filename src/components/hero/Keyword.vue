<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on" class="font-weight-bold">
          {{ label }}
        </span>
      </template>
      <span>{{ label }}</span>
    </v-tooltip>
  </span>
  
</template>

<script>
import { keywordsArray } from "../../constants/keywords";

export default {
  name: "Keyword",
  props: ["keyword"],
  computed: {
    label() {
      return keywordsArray[this.keyword - 1].label;
    }
  },
  data: () => ({})
};
</script>

<style scoped lang="scss">

</style>