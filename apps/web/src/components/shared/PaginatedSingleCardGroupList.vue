<template>
  <v-container v-if="pages.length">
    <v-lazy :min-height="lineHeight" :key="idx" v-for="(page, idx) in pages">
      <v-row>
        <v-col :class="{ 'px-1': dense }" :cols="columnSize" :key="group.id" v-for="group in page">
          <template v-if="!group.cards"></template>
          <template v-else-if="group.cards.length === 1">
            <slot :card="group.cards[0]" :cardHeight="cardHeight(group)" />
          </template>
          <CardGroup v-else :group="group" :dense="true" :cardHeight="cardHeight(group)" :pageSize="1">
            <template v-slot:default="{ card }">
              <slot :card="card" :cardHeight="cardHeight(group)" />
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
  props: {
    groups: {
      type: Array,
      default: () => []
    },
    dense: {
      type: Boolean,
      default: false
    },
    lineHeight: {
      type: Number,
      default: 304
    }
  },
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
  },
  methods: {
    cardHeight(group) {
      return group.cards && group.cards.length > 1 ? this.lineHeight - 98 : this.lineHeight - 24;
    }
  }
};
</script>

<style lang="scss">
</style>