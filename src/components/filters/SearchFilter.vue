<template>
  <v-text-field
    :value="value"
    label="Search"
    maxlength="30"
    clearable
    @input="filterChanged"
    @keyup.enter="$event.target.blur()"
  ></v-text-field>
</template>

<script>
export default {
  name: "SearchFilter",
  props: ["value"],
  data: () => ({}),
  methods: {
    filterChanged(newValue) {
      clearTimeout(this._debounceTimerId);
      this.$emit('input', newValue);
      this._debounceTimerId = setTimeout(() => this.$emit('change', newValue), 750);
    }
  }
}
</script>