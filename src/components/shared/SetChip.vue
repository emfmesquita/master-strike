<template>
  <span>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <span v-on="on" >
          <v-chip small>
            {{ label }}
          </v-chip>
        </span>
      </template>
      <span>{{ tooltip }}</span>
    </v-tooltip>
  </span>
</template>

<script>
import { setsArray } from "../../constants/sets";

export default {
  name: "SetChip",
  props: ["set", "short"],
  computed: {
    setObj() {
      return setsArray[this.set - 1];
    },
    label() {
      return this.short ? this.setObj.initials : this.setObj.label;
    },
    tooltip() {
      return this.short ? `Set: ${this.setObj.label}` : "Set"
    }
  },
  data: () => ({})
};
</script>