<template>
  <v-select
    :value="value"
    :items="keywords"
    multiple
    clearable
    item-text="label"
    item-value="id"
    label="Keyword"
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
  name: "KeywordFilter",
  props: ["value", "cardTypes"],
  data() {
    return {
      keywords: []
    }
  },
  mounted() {
    const keywords = Metadata.keywordsArray.filter(keyword => window.hasIntersection(keyword.cardTypes, this.cardTypes));
    const l = keyword => keyword.sortLabel || keyword.label;
    keywords.sort((a, b) => l(a).localeCompare(l(b)));
    this.keywords = Object.freeze(keywords);
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