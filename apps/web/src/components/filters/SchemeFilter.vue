<template>
  <v-autocomplete
    :value="value"
    :items="schemes"
    multiple
    label="Scheme"
    item-text="label"
    item-value="id" 
    clearable
    @change="filterChanged"
  >
    <template v-slot:selection="{ item }">
      <v-chip class="ma-1 chip-ellipsis" @click.stop="remove(item.id)">
        {{item.label}}
      </v-chip>
    </template>
  </v-autocomplete>
</template>

<script>
import { getAllSchemes } from "../../services/cardUtils";

export default {
  name: "SchemeFilter",
  props: ["value"],
  data() {
    return {
      schemes: []
    }
  },
  mounted() {
    const schemes = getAllSchemes().map(scheme => ({
      id: scheme.id,
      label: scheme.name
    }));
    schemes.sort((a, b) => a.label.localeCompare(b.label));
    this.schemes = Object.freeze(schemes);
  },
  methods: {
    filterChanged(newValue) {
      this.$emit('input', newValue);
    },
    remove(toRemoveId) {
      this.filterChanged(this.value.filter(id => id !== toRemoveId));
    }
  }
}
</script>