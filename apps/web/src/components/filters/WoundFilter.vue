<template>
  <v-autocomplete
    :value="value"
    :items="wounds"
    multiple
    label="Wound"
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
import { getAllWounds } from "../../services/cardUtils";

export default {
  name: "WoundFilter",
  props: ["value"],
  data() {
    return {
      wounds: []
    }
  },
  mounted() {
    const wounds = getAllWounds().map(wound => ({
      id: wound.id,
      label: wound.filterName ? wound.filterName : wound.name
    }));
    wounds.sort((a, b) => a.label.localeCompare(b.label));
    this.wounds = Object.freeze(wounds);
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