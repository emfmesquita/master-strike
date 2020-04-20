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
      <span>Set</span>
    </v-tooltip>
  </span>
</template>

<script>
import { setsArray } from "../../constants/sets";

export default {
  name: "SetChip",
  props: ["set"],
  computed: {
    label() {
      return setsArray[this.set - 1].label;
    }
  },
  data: () => ({})
};
</script>