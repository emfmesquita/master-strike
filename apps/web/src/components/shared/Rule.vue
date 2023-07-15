<template>
  <span>
    <v-dialog
      v-model="dialog"
      scrollable
      :max-width="width"
    >
      <template v-slot:activator="{ on }">
        <span v-on="on" class="rule" :class="classes">
          <slot>{{ text }}</slot>
        </span>
      </template>

      <shared-rule-card :rule="rule" v-if="dialog">
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
      </shared-rule-card>
    </v-dialog>
  </span>

</template>

<script>
import { keywordsArray } from "../../constants/keywords";
import { rulesArray } from "../../constants/rules";

const obj = (rule) => rule.rule ? rulesArray[rule.rule - 1] : keywordsArray[rule.keyword - 1];

export default {
  name: "Rule",
  props: ["rule"],
  computed: {
    text() {
      return this.rule.text || obj(this.rule).label;
    },
    width() {
      return this.$vuetify.breakpoint.mdAndUp ? "800px" : "500px";
    },
    classes() {
      return {
        'red-keyword': this.rule.keyword === 43,
        'font-weight-bold': !!this.rule.keyword || !!this.rule.keywordStyle,
        'extra-rule': !!this.rule.rule && !this.rule.keywordStyle
      }
    }
  },
  data: () => ({
    dialog: false
  })
};
</script>

<style scoped lang="scss">
.rule {
  cursor: pointer;
}
.red-keyword {
  color: #d00;
}
.extra-rule {
  text-decoration: underline;
}
</style>
