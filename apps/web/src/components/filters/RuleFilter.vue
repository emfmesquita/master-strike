<template>
  <v-select
    :value="value"
    :items="rules"
    multiple
    clearable
    item-text="label"
    item-value="id"
    label="Extra Rules"
    @change="filterChanged"
  >
    <template v-slot:selection="{ item }">
      <v-chip class="ma-1 chip-ellipsis" @click.stop="remove(item.id)">
        {{item.label}}
      </v-chip>
    </template>
  </v-select>
</template>

<script>
import { Metadata } from '@master-strike/data';

export default {
  name: "RuleFilter",
  props: ["value", "cardTypes"],
  data() {
    return {
      rules: []
    }
  },
  mounted() {
    const rules = Metadata.rulesArray.filter(rule => window.hasIntersection(rule.cardTypes, this.cardTypes));
    const l = rule => rule.sortLabel || rule.label;
    rules.sort((a, b) => l(a).localeCompare(l(b)));
    this.rules = Object.freeze(rules);
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