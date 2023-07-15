<template>
  <v-autocomplete
    :value="value"
    :items="villains"
    multiple
    label="Villain"
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
import { getAllVillains } from "../../services/cardUtils";

export default {
  name: "VillainFilter",
  props: ["value"],
  data() {
    return {
      villains: []
    }
  },
  mounted() {
    const villains = getAllVillains().map(villain => ({
      id: villain.id,
      label: villain.filterName ? villain.filterName : villain.name
    }));
    villains.sort((a, b) => a.label.localeCompare(b.label));
    this.villains = Object.freeze(villains);
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