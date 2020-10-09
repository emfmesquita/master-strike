import { getTextWidth } from "../../services/cardUtils";

const CardMixin = (minContentEmptySpace = 0) => ({
  props: {
    height: {
      type: Number,
      default: 280
    },
    contentHeight: {
      type: Number,
      default: -1
    },
    card: Object
  },
  computed: {
    titleClasses() {
      return {
        small: getTextWidth(this.card.name, "16px Roboto") > 152,
        smaller: getTextWidth(this.card.name, "14px Roboto") > 152
      }
    },
    maxContentHeight() {
      return this.height - minContentEmptySpace;
    },
    cardHeight() {
      return `${this.height}px`;
    },
    cardHeightStyle() {
      return {
        height: this.cardHeight
      }
    },
    dense() {
      return this.contentHeight > this.maxContentHeight;
    }
  }
});

export default CardMixin;