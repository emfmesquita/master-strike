<template>
  <span>
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="500px"
    >
      <template v-slot:activator="{ on }">
        <span v-on="on" class="font-weight-bold keyword">
          <slot>{{ label }}</slot>
        </span>
      </template>

      <v-card v-if="dialog">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{ label }}
        </v-card-title>

        <v-card-text>
          <div v-for="(rule, idx) in keywordRules" :key="idx">
            <shared-bullet-point-description v-if="typeof rule === 'object' && rule.points" :points="rule.points" />
            <shared-description-group v-else :description="rule" />
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
  
</template>

<script>
import { keywordsArray } from "../../constants/keywords";
import { keywords } from "../../data";

export default {
  name: "Keyword",
  props: ["keyword"],
  computed: {
    label() {
      return keywordsArray[this.keyword - 1].label;
    },
    keywordRules() {
      const keywordValue = keywordsArray[this.keyword - 1].value;
      return keywords[keywordValue] || [];
    }
  },
  data: () => ({
    dialog: false
  })
};
</script>

<style scoped lang="scss">
.keyword {
  cursor: pointer;
}
</style>