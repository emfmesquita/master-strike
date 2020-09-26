<template>
  <v-select
    :value="value"
    :items="sets"
    multiple
    label="Set"
    item-text="label"
    item-value="id" 
    clearable
    @input="filterChanged"
  >
    <template v-slot:selection="{ item }">
      <v-tooltip top>
        <template v-slot:activator="{ on }" dense>
          <span v-on="on">
            <v-chip class="ma-1" style="cursor: pointer" @click.stop="remove(item.id)">
              {{item.initials}}
            </v-chip>
          </span>
        </template>
        <span>{{ item.label }}</span>
      </v-tooltip>
    </template>
  </v-select>
</template>

<script>
import { setsArray } from "../../../constants/sets";

export default {
  name: "SetFilter",
  props: ["value", "cardTypes"],
  data() {
    return {
      sets: []
    }
  },
  mounted() {
    this.sets = Object.freeze(setsArray.filter(set => window.hasIntersection(set.cardTypes, this.cardTypes)));
  },
  methods: {
    filterChanged(newValue) {
      this.$emit('input', newValue);
    },
    remove(id) {
      this.filterChanged(this.value.filter(setId => setId !== id));
    }
  }
}
</script>