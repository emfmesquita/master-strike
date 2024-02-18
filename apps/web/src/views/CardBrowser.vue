<template>
  <div>
    <shared-header />

    <shared-side-bar>
      <template v-slot:default>
        <v-treeview 
          :items="items"
          :active.sync="active"
          dense
          activatable
          open-on-click
          class="text-body-2"
        >
        </v-treeview>
    
      </template>
      <template v-slot:collapsed>
        <SortToggleCollapsed v-model="sortMethod" @input="sortChanged" vp="true" />
      </template>
    </shared-side-bar>

    <v-container fluid  class="px-10">
      <v-row>        
        <v-col :key="result.name + result.set" v-for="result in cards" cols="12" md="12" lg="6" xl="4">
          <v-card elevation="2">
            <v-card-text>
              <p class="text-h6 text--primary mb-0">
                {{result.name}}
              </p>
              <p class="text-subtitle-1 mb-1">
                {{result.subtitle}}
              </p>

              <v-container class="d-flex justify-center mb-6">
                <v-img
                  v-if="!!result.imageUrl"
                  :max-width="imgWidth"
                  :src="result.imageUrl"
                >
                </v-img>

              </v-container>

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
  name: "CardBrowser",
  data: () => ({
    results: [],
    active: [],
    searchEngine: new CardSearchEngine(),
  }),
  computed: {
    imgWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300;
        case 'sm': return 400;
        case 'md': return 400;
        case 'lg': return 300;
        case 'xl': return 400;
      }
      return 400;
    },
    items() {
      const byCardType = this.searchEngine.getBrowser();
      const k = Object.keys;
      return k(byCardType).map((type, typeId) => ({
        id: typeId,
        name: `${type} :`,
        children: k(byCardType[type]).map((set, setId) => ({
          id: `${typeId}_${setId}`,
          name: `${set} :`,
          children: k(byCardType[type][set]).map((group, gruopId) => ({
            id: `${typeId}_${setId}_${gruopId}`,
            name: group
          }))
        }))
      }));
    },
    cards() {
      if(!this.active.length) return [];
      const id = this.active[0];
      const [typeId, setId, groupId] = id.split('_');
      const byCardType = this.searchEngine.getBrowser();
      const k = Object.keys;
      
      const type = k(byCardType)[parseInt(typeId)];
      const set = k(byCardType[type])[parseInt(setId)];
      const group = k(byCardType[type][set])[parseInt(groupId)];
      return byCardType[type][set][group];
    }
  },
  methods: {
  }
}
</script>