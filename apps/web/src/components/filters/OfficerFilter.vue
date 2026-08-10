<template>
  <v-autocomplete
    :value="value"
    :items="officers"
    multiple
    label="Officer"
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
import { getAllOfficers } from "../../services/cardUtils";

export default {
  name: "OfficerFilter",
  props: ["value"],
  data() {
    return {
      officers: []
    }
  },
  mounted() {
    const officers = getAllOfficers().map(officer => ({
      id: officer.id,
      label: officer.filterName ? officer.filterName : officer.name
    }));
    officers.sort((a, b) => a.label.localeCompare(b.label));
    this.officers = Object.freeze(officers);
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