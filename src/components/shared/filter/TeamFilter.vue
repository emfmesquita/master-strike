<template>
  <v-select
    :value="value"
    :items="teams"
    multiple
    clearable
    item-text="label"
    item-value="id"
    label="Team"
    @change="filterChanged"
  >
    <template v-slot:selection="{ item }">
      <span style="cursor: pointer" @click.stop="remove(item.id)">
        <TeamIcon :icon="item.id" width="40px"/>
      </span>
    </template>
    <template v-slot:item="{ item }">
      <TeamIcon :icon="item.id" width="40px" />
      {{ item.label }}
    </template>
  </v-select>
</template>

<script>
import { teamArray } from "../../../constants/team";
import TeamIcon from "../TeamIcon.vue";

export default {
  name: "TeamFilter",
  props: ["value"],
  data() {
    return {
      teams: []
    }
  },
  components: { TeamIcon }, 
  mounted() {
    const teams = teamArray.slice();
    teams.sort((a, b) => a.label.localeCompare(b.label));
    this.teams = Object.freeze(teams);
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