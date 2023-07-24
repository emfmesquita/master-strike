<template>
  <v-autocomplete
    :value="value"
    :items="bystanders"
    multiple
    label="Bystander"
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
import { getAllBystanders } from "../../services/cardUtils";

export default {
  name: "BystanderFilter",
  props: ["value"],
  data() {
    return {
      bystanders: []
    }
  },
  mounted() {
    const bystanders = getAllBystanders().map(bystander => ({
      id: bystander.id,
      label: bystander.name
    }));
    bystanders.sort((a, b) => a.label.localeCompare(b.label));
    this.bystanders = Object.freeze(bystanders);
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