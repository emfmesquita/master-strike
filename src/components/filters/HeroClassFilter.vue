<template>
  <v-select
    :value="value"
    :items="hcs"
    multiple
    clearable
    item-text="label"
    item-value="id"
    label="Hero Class"
    @change="filterChanged"
  >
    <template v-slot:selection="{ item }">
      <span style="cursor: pointer" @click.stop="remove(item.id)">
        <HeroClassIcon :icon="item.id" width="32px"/>
      </span>
    </template>
    <template v-slot:item="{ item }">
      <HeroClassIcon class="pr-2" :icon="item.id" width="32px" />
      <span class="mt-1">{{ item.label }}</span>
    </template>
  </v-select>
</template>

<script>
import { heroClassArray } from "../../constants/heroClass";
import HeroClassIcon from "../icons/HeroClassIcon.vue";

export default {
  name: "HeroClassFilter",
  props: ["value"],
  data() {
    return {
      hcs: []
    }
  },
  components: { HeroClassIcon },
  mounted() {
    const hcs = heroClassArray.slice();
    hcs.shift();
    this.hcs = Object.freeze(hcs);
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