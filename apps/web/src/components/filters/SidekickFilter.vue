<template>
  <v-autocomplete
    :value="value"
    :items="sidekicks"
    multiple
    label="Sidekick"
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
import { getAllSidekicks } from "../../services/cardUtils";

export default {
  name: "SidekickFilter",
  props: ["value"],
  data() {
    return {
      sidekicks: []
    }
  },
  mounted() {
    const sidekicks = getAllSidekicks().map(sidekick => ({
      id: sidekick.id,
      label: sidekick.filterName ? sidekick.filterName : sidekick.name
    }));
    sidekicks.sort((a, b) => a.label.localeCompare(b.label));
    this.sidekicks = Object.freeze(sidekicks);
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