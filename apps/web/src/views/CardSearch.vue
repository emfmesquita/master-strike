<template>
  <div>
    <shared-header />

    <v-container>
      <v-row>
        <v-col sm="12">
          <div  class="text-center title">{{ cardCount }} Cards indexed in {{ startupDuration }}ms</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12">
          <v-text-field
            label="Search" 
            clearable 
            v-model="search"
            @input="makeSearch">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="2" sm="3">
          <v-checkbox class="text-center" v-model="subtitle" label="Subtitle" @change="changeIndexes"/>
        </v-col>
        <v-col lg="2" sm="3">
          <v-checkbox v-model="type" label="Type" @change="changeIndexes">
          </v-checkbox>
        </v-col>
        <v-col lg="2" sm="3">
          <v-checkbox v-model="set" label="Set" @change="changeIndexes">
          </v-checkbox>
        </v-col>
        <v-col lg="2" sm="3">
          <v-checkbox v-model="group" label="Group" @change="changeIndexes">
          </v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col :key="result.name + result.set" v-for="result in results" cols="12" sm="12" xs="12" md="6" xl="4">
          <v-card elevation="2">
            <v-card-text>
              <p class="text-h6 text--primary mb-0">
                {{result.name}}
              </p>
              <p class="text-subtitle-1 mb-1">
                {{result.subtitle}}
              </p>

              <v-expansion-panels :flat="true">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Details
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <pre class="text-body text--primary" style="white-space: pre-wrap">{{JSON.stringify(result, null, 2)}}</pre>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>              

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip v-bind="attrs" v-on="on" class="ma-2" color="primary">
                    {{result.type}}
                  </v-chip>
                </template>
                <span>Card Type</span>
              </v-tooltip>

              <v-tooltip bottom v-if="!!result.group">
                <template v-slot:activator="{ on, attrs }">
                  <v-chip v-bind="attrs" v-on="on" class="ma-2" color="green" text-color="white">
                    {{result.group}}
                  </v-chip>
                </template>
                <span>Group</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-chip v-bind="attrs" v-on="on" class="ma-2" color="red" text-color="white">
                    {{result.set}}
                  </v-chip>
                </template>
                <span>Set</span>
              </v-tooltip>
              
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
import { CardSearchEngine } from '@master-strike/data';

export default {
  name: "CardSearch",
  data: () => ({
    results: [],
    searchEngine: new CardSearchEngine(),
    search: '',
    subtitle: false,
    type: false,
    set: false,
    group: false,
  }),
  computed: {
    cardCount() {
      return this.searchEngine.getCardCount();
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
    changeIndexes() {
      this.searchEngine = new CardSearchEngine(10, this.subtitle, this.type, this.set, this.group);
      this.makeSearch(this.search);
    }
  }
}
</script>