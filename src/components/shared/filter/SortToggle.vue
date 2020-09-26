<template>
  <v-btn-toggle
    class="d-flex justify-center"
    :value="value"
    mandatory
    @change="sortChanged"
  >
    <v-btn value="alpha">
      <v-icon small>mdi-sort-alphabetical-ascending</v-icon>
      <span class="pa-1 subtitle-2">Alpha</span>
    </v-btn>
    <v-btn value="results">
      <v-icon small>mdi-cards</v-icon>
      <span class="pa-1 subtitle-2">Results</span>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: "SortToggle",
  props: ["value"],
  methods: {
    sortChanged(newValue) {
      this.$emit('input', newValue);
    }
  }
}
</script>