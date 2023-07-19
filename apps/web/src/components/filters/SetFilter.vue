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
        <SetIcon :set="item.id" width="32px" allowClickOnMobile />
      </div>
    </template>
    <template v-slot:item="{ item }">
      <SetIcon class="pr-3" :set="item.id" width="32px" allowClickOnMobile />
      <span class="mt-1">{{ item.label }}</span>
    </template>
  </v-select>
</template>

<script>
import SetIcon from "../icons/SetIcon.vue";
import { Metadata } from "@master-strike/data";

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
    this.sets = Object.freeze(Metadata.setsArray.filter(set => window.hasIntersection(set.cardTypes, this.cardTypes)));
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