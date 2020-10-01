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
      <div class="pa-1" @click.stop="remove(item.id)">
        <SetIcon :set="item.id" width="32px" />
      </div>
    </template>
  </v-select>
</template>

<script>
import SetIcon from "../icons/SetIcon.vue";
import { setsArray } from "../../constants/sets";

export default {
  name: "SetFilter",
  props: ["value", "cardTypes"],
  components: { SetIcon },
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
    remove(toRemoveId) {
      this.filterChanged(this.value.filter(id => id !== toRemoveId));
    }
  }
}
</script>