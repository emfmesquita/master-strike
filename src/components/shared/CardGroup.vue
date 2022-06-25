<template>
  <v-card class="mx-auto card-group" :class="{ 'pb-0': dense, 'dense': dense }" outlined>
    <v-container :class="{ 'pb-0': dense, 'pt-2': dense }">
      <v-row>
        <v-col cols="12" :class="{ 'py-0': dense }" class="pb-0">
          <template v-if="!dense">
            <SetIcon v-for="set in setArray" :key="set" class="set float-right" :set="set" width="42px" />
          </template>
          <NumberOfCards v-if="!dense" class="number-of-cards" :number="numberOfCards" :size="16"/>
          <MaxVP v-if="!dense && group.maxVP" class="max-vp" :maxVP="group.maxVP" :size="16"/>
          <span class="group-title" :class="titleClasses">{{ group.name }}</span>
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
            v-model="currentPage"
            :height="carouselHeight"
            hide-delimiter-background
            :hide-delimiters="manyPages"
            :show-arrows-on-hover="!manyPages"
            :show-arrows="!dense || manyPages"
          >
            <v-carousel-item v-for="(page, i) in pages" :key="i">
              <v-sheet height="100%" >
                <v-row class="inner-carousel-row">
                  <v-col
                    :cols="columnSize"
                    :class="{'divided-column-left': card.divided === 1, 'divided-column-right': card.divided === 2, 'pa-1': dense}"  
                    v-for="card in page" :key="card.name"
                  >
                    <slot :card="card"/>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <div v-if="manyPages" class="page-indicator font-weight-bold">{{currentPage+1}}/{{pages.length}}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import SetIcon from "../icons/SetIcon.vue";
import NumberOfCards from "../shared/NumberOfCards";
import MaxVP from "../shared/MaxVP";
import { numberOfCards } from "../../services/cardUtils";
import { numberOfColumns, pages } from "../../services/pageUtils";

export default {
  name: "CardGroup",
  props: {
    group: Object, 
    pageSize: Number,
    dense: {
      type: Boolean,
      default: false
    },
    cardHeight: {
      type: Number,
      default: 280
    }
  },
  components: { SetIcon, NumberOfCards, MaxVP },
  data: () => ({
    currentPage: 0
  }),
  computed: {
    numberOfColumns() {
      return this.pageSize || numberOfColumns(this);
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
      const short = this.numberOfColumns === 1 || this.dense;
      return {
        'title': !short,
        'subtitle-1 font-weight-bold': short
      };
    }, 
    pages() {
      return pages(this.cards, this.numberOfColumns);
    },
    manyPages() {
      return this.pages.length > 4;
    },
    setArray() {
      if(this.group.set === undefined) return [];

      // sets are reversed to consider float-right
      if(Array.isArray(this.group.set)) return this.group.set.slice(0).reverse()
      
      return [this.group.set];
    },
    carouselHeight() {
      const extra = this.dense ? 36 : 70;
      return this.cardHeight + extra;
    }
  }
};
</script>

<style lang="scss">
.card-group {
  background-color:#f2f2f2 !important;

  &.dense {
    .v-window__prev, .v-window__next {
      bottom: 3px;
      top: initial;
      z-index: 99;

      .v-btn {
        width: 24px;
        height: 20px;
      }

      .v-icon {
        font-size: 20px !important;
      }
    }

    .page-indicator {
      bottom: 3px;
    }

    .v-carousel__controls {
      height: 31px;
    }
  }
  &:not(.dense) {
    .v-window__prev, .v-window__next {
      bottom: 6px;
      top: initial;
      z-index: 99;
    }

    .page-indicator {
      bottom: 26px;
    }
  }

  .group-title {
    white-space: nowrap;
  }
  .page-indicator {
    color: black;
    font-size: 14px;
    text-align: center;
    width: 100%;
    position: absolute;
  }
  .set {
    padding-right: 4px;
    padding-right: 4px;
    margin-bottom: 2px;
  }
  .carousel-column {
    padding: 0px;
  }
  .inner-carousel-row {
    padding-left: 12px;
    padding-right: 12px;
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
    top: -12px;
    left: 8px;
  }
  .max-vp {
    position: absolute;
    top: -12px;
    left: 48px;
  }
}
</style>