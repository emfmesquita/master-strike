<template>
  <v-autocomplete
    :value="value"
    :items="masterminds"
    multiple
    label="Mastermind"
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
import { getAllMasterminds } from "../../services/cardUtils";

export default {
  name: "MastermindFilter",
  props: ["value"],
  data() {
    return {
      masterminds: []
    }
  },
  mounted() {
    const masterminds = getAllMasterminds().map(mm => ({
      id: mm.id,
      label: mm.filterName ? mm.filterName : mm.name
    }));
    masterminds.sort((a, b) => a.label.localeCompare(b.label));
    this.masterminds = Object.freeze(masterminds);
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