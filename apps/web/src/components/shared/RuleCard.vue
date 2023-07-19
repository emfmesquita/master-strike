<template>
  <v-card>
    <v-card-title class="headline grey lighten-2" primary-title>
      {{ title }}
    </v-card-title>

    <v-card-text class="pa-5">
      <div v-for="(  rule, idx  ) in rules" :key="idx">
        <shared-bullet-point-description v-if="typeof rule === 'object' && rule.points" :points="rule.points"
          :noBullets="rule.noBullets" :padded=true />
        <shared-description-group v-else :description="rule" :padded=true />
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <slot />
  </v-card>
</template>

<script>
import { KeywordDefinitions, Metadata, RuleDefinitions } from '@master-strike/data';

const obj = (rule) => rule.rule ? Metadata.rulesArray[rule.rule - 1] : Metadata.keywordsArray[rule.keyword - 1];

export default {
  name: "RuleCard",
  props: [ "rule" ],
  computed: {
    title() {
      const ruleObj = obj(this.rule);
      return ruleObj.title || ruleObj.label;
    },
    text() {
      return this.rule.text || obj(this.rule).label;
    },
    rules() {
      const val = obj(this.rule).value;
      const src = this.rule.rule ? RuleDefinitions : KeywordDefinitions;
      return src[val] || [];
    },
  },
  data: () => ({
    dialog: false
  })
};
</script>
