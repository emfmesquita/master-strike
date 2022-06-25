<template>
  <v-btn-toggle
    style="flex-direction: column"
    :value="value"
    mandatory
    group
    @change="sortChanged"
  >
    <v-btn small value="alpha" style="min-width: 0px">
      <v-icon small>mdi-sort-alphabetical-ascending</v-icon>
    </v-btn>
    <v-btn small value="results" style="min-width: 0px">
      <v-icon small>mdi-cards</v-icon>
    </v-btn>
    <v-btn v-if="vp" small value="vp" style="min-width: 0px">
      <v-icon small>mdi-brightness-5</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: "SortToggleCollapsed",
  props: ["value", "vp"],
  methods: {
    sortChanged(newValue) {
      this.$emit('input', newValue);
    }
  }
}
</script>