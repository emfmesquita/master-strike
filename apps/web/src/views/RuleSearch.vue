<template>
  <div>
    <shared-header />

    <v-container>
      <v-row>
        <v-col sm="12">
          <div  class="text-center title">{{ ruleCount }} Rules indexed in {{ startupDuration }}ms</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12">
          <v-text-field
            label="Search" 
            clearable 
            @input="makeSearch">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col :key="result.name + result.set" v-for="result in results" cols="12" sm="12" xs="12" md="12" xl="6">
          <v-card elevation="2">
            <v-card-text>
              <p class="text-h5 text--primary">
                {{result.name}}
              </p>

              <pre class="text-body text--primary" style="white-space: pre-wrap">{{JSON.stringify(result, null, 2)}}</pre>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
import { RuleSearchEngine } from '@master-strike/data';

export default {
  name: "RuleSearch",
  data: () => ({
    results: [],
    searchEngine: new RuleSearchEngine(),
  }),
  computed: {
    ruleCount() {
      return this.searchEngine.getRulesCount();
    },
    startupDuration() {
      return this.searchEngine.getStartupDuration();
    }
  },
  methods: {
    makeSearch(newValue) {
      clearTimeout(this._debounceTimerId);
      this._debounceTimerId = setTimeout(async () => {
        this.results = await this.searchEngine.search(newValue);
      }, 750);
    },
  }
}
</script>