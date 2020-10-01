<template>
  <v-container v-if="pages.length">
    <v-lazy min-height="300" :key="idx" v-for="(page, idx) in pages">
      <v-row>
        <v-col :cols="columnSize" :key="group.id" v-for="group in page">
          <template v-if="!group.cards"></template>
          <template v-else-if="group.cards.length === 1">
            <slot :card="group.cards[0]" :multipleCards="false" />
          </template>
          <CardGroup v-else :group="group" :dense="true" :pageSize="1">
            <template v-slot:default="{ card }">
              <slot :card="card" :multipleCards="true" />
            </template>
          </CardGroup>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
import CardGroup from "./CardGroup.vue";
import { numberOfColumns, pages } from "../../services/pageUtils";

export default {
  name: "PaginatedSingleCardGroupList",
  props: ["groups"],
  components: { CardGroup },
  data: () => ({}),
  computed: {
    numberOfColumns() {
      return numberOfColumns(this);
    },
    columnSize() {
      return 12 / this.numberOfColumns;
    },
    pages() {
      return pages(this.groups, this.numberOfColumns);
    }
  }
};
</script>

<style lang="scss">
</style>