<template>
  <v-card class="mx-auto hero" outlined>
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="title">{{ hero.name }}</span>
          <SetChip class="set-chip float-right" :set="hero.set"/>
        </v-col>
      </v-row>
      <v-row>
        <template v-if="pages.length === 1">
          <v-col 
            cols="12" sm="6" md="4" lg="3" 
            :class="{'divided-column-left': card.divided === 1, 'divided-column-right': card.divided === 2}"  
            v-for="card in pages[0]" :key="card.name"
          >
            <HeroCard :card="card" :hero="hero"/>
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
                    cols="12" sm="6" md="4" lg="3"
                    class="das"
                    :class="{'divided-column-left': card.divided === 1, 'divided-column-right': card.divided === 2}"  
                    v-for="card in page" :key="card.name"
                  >
                    <HeroCard :card="card" :hero="hero"/>
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
import HeroCard from "./HeroCard.vue";
import SetChip from "../shared/SetChip.vue";

export default {
  name: "Hero",
  props: ["hero"],
  components: { HeroCard, SetChip },
  data: () => ({}),
  computed: {
    numberOfColumns() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 2
        case 'md': return 3
        case 'lg': return 4
        case 'xl': return 4
      }
      return 4;
    },
    pages() {
      const numberOfPages = Math.ceil(this.hero.cards.length / this.numberOfColumns);
      const pages = [];
      for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
        const page = [];
        for (let column = 0; column < this.numberOfColumns; column++) {
          const card = this.hero.cards[pageNumber * this.numberOfColumns + column];
          if(card) page.push(card);
        }
        pages.push(page);
      }
      return pages;
    }
  }
};
</script>

<style lang="scss">
.hero {
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
}
</style>