<template>
  <span>
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="500px"
    >
      <template v-slot:activator="{ on }">
        <span v-on="on" class="rule" :class="classes">
          <slot>{{ text }}</slot>
        </span>
      </template>

      <v-card v-if="dialog">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{ label }}
        </v-card-title>

        <v-card-text class="pa-5">
          <div v-for="(rule, idx) in rules" :key="idx">
            <shared-bullet-point-description v-if="typeof rule === 'object' && rule.points" :points="rule.points" :padded=true />
            <shared-description-group v-else :description="rule" :padded=true />
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
import { rulesArray } from "../../constants/rules";
import { rules } from "../../data";

const obj = (rule) => rule.rule ? rulesArray[rule.rule - 1] : keywordsArray[rule.keyword - 1];

export default {
  name: "Rule",
  props: ["rule", "noUnderline"],
  computed: {
    label() {
      return obj(this.rule).label;
    },
    text() {
      return this.rule.text || obj(this.rule).label;
    },
    rules() {
      const val = obj(this.rule).value;
      const src = this.rule.rule ? rules : keywords;
      return src[val] || [];
    },
    classes() {
      return {
        'red-keyword': this.rule.keyword === 43,
        'font-weight-bold': !!this.rule.keyword,
        'extra-rule': !!this.rule.rule && !this.noUnderline
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