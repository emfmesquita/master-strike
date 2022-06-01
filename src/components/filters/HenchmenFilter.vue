<template>
  <v-autocomplete
    :value="value"
    :items="henchmen"
    multiple
    label="Henchman"
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
import { getAllHenchmen } from "../../services/cardUtils";

export default {
  name: "HenchmenFilter",
  props: ["value"],
  data() {
    return {
      henchmen: []
    }
  },
  mounted() {
    const henchmen = getAllHenchmen().map(hm => ({
      id: hm.id,
      label: hm.name
    }));
    henchmen.sort((a, b) => a.label.localeCompare(b.label));
    this.henchmen = Object.freeze(henchmen);
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