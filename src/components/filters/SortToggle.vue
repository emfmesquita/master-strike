<template>
  <v-btn-toggle
    class="d-flex justify-center"
    :value="value"
    mandatory
    dense
    @change="sortChanged"
  >
    <v-btn value="alpha">
      <v-icon small>mdi-sort-alphabetical-ascending</v-icon>
      <span class="pa-1 subtitle-2">A-Z</span>
    </v-btn>
    <v-btn value="results">
      <v-icon small>mdi-cards</v-icon>
      <span class="pa-1 subtitle-2">Cards</span>
    </v-btn>
    <v-btn value="vp" v-if="vp">
      <v-icon small>mdi-brightness-5</v-icon>
      <span class="pa-1 subtitle-2">VP</span>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: "SortToggle",
  props: ["value", "vp"],
  methods: {
    sortChanged(newValue) {
      this.$emit('input', newValue);
    }
  }
}
</script>