<template>
  <v-autocomplete
    :value="value"
    :items="heroes"
    multiple
    label="Hero"
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
import { getAllHeroes } from "../../../services/cardUtils";

export default {
  name: "HeroFilter",
  props: ["value"],
  data() {
    return {
      heroes: []
    }
  },
  mounted() {
    const heroes = getAllHeroes().map(hero => ({
      id: hero.id,
      label: hero.filterName ? hero.filterName : hero.name
    }));
    heroes.sort((a, b) => a.label.localeCompare(b.label));
    this.heroes = Object.freeze(heroes);
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