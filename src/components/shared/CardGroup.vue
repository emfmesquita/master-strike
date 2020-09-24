<template>
  <v-card class="mx-auto card-group" outlined>
    <v-container>
      <v-row>
        <v-col cols="12">
          <SetChip v-for="set in setArray" :key="set" class="set-chip float-right" :short="numberOfColumns <= 2" :set="set"/>
          <NumberOfCards class="number-of-cards" :number="numberOfCards" size="16"/>
          <span :class="titleClasses">{{ group.name }}</span>
        </v-col>
      </v-row>
      <v-row>
        <template v-if="pages.length === 1">
          <v-col
            :cols="columnSize"
            :class="{'divided-column-left': card.divided === 1, 'divided-column-right': card.divided === 2}"  
            v-for="card in pages[0]" :key="card.name"
          >
            <slot :card="card"/>
          </v-col>
        </template>
        <v-col v-else cols="12" class="carousel-column">
          <v-carousel
            height="350"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(page, i) in pages" :key="i">
              <v-sheet height="100%" >
                <v-row class="inner-carousel-row">
                  <v-col
                    :cols="columnSize"
                    :class="{'divided-column-left': card.divided === 1, 'divided-column-right': card.divided === 2}"  
                    v-for="card in page" :key="card.name"
                  >
                    <slot :card="card"/>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import SetChip from "../shared/SetChip.vue";
import NumberOfCards from "../shared/NumberOfCards";
import { numberOfCards } from "../../services/cardUtils";

export default {
  name: "CardGroup",
  props: ["group"],
  components: { SetChip, NumberOfCards },
  data: () => ({}),
  computed: {
    numberOfColumns() {
      const expandedSideBar = !this.$store.getters.sideBarCollapsed;
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return expandedSideBar ? 1 : 2
        case 'md': return expandedSideBar ? 2 : 3
        case 'lg': return 4
        case 'xl': return 4
      }
      return 4;
    },
    columnSize() {
      return 12 / this.numberOfColumns;
    },
    cards() {
      return this.group.filteredCards === undefined ? this.group.cards : this.group.filteredCards;
    },
    numberOfCards() {
      return this.group.results === undefined ? numberOfCards(this.cards) : this.group.results;
    },
    titleClasses() {
      const short = this.numberOfColumns === 1;
      return {
        'title': !short,
        'subtitle-1 font-weight-bold': short
      };
    }, 
    pages() {
      const cards = this.cards;
      const numberOfPages = Math.ceil(cards.length / this.numberOfColumns);
      const pages = [];
      for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
        const page = [];
        for (let column = 0; column < this.numberOfColumns; column++) {
          const card = cards[pageNumber * this.numberOfColumns + column];
          if(card) page.push(card);
        }
        pages.push(page);
      }
      return pages;
    },
    setArray() {
      if(this.group.set === undefined) return [];

      // sets are reversed to consider float-right
      if(Array.isArray(this.group.set)) return this.group.set.slice(0).reverse()
      
      return [this.group.set];
    }
  }
};
</script>

<style lang="scss">
.card-group {
  background-color:#f2f2f2 !important;
  .set-chip {
    padding-left: 16px;
    margin-bottom: 2px;
  }
  .carousel-column {
    padding: 0px;
  }
  .inner-carousel-row {
    padding-left: 12px;
    padding-right: 12px;
  }
  .v-window__prev, .v-window__next {
    bottom: 6px;
    top: initial;
    z-index: 99;
  }
  .v-sheet {
    background: initial;
  }
  .v-carousel__controls__item.v-item--active {
    color: #1976d2 !important;
  }
  .v-carousel__controls__item i {
    color: #1976d2 !important;
  }
  .divided-column-left {
    padding-right: 0px;
  }
  .divided-column-right {
    padding-left: 0px;
  }
  .number-of-cards {
    position: absolute;
    top: -16px;
    left: 4px;
  }
}
</style>