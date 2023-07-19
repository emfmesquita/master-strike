import { KeywordDefinition } from "../ruleTypes";

export const dodge: KeywordDefinition = [
  {
    points: [
      [
        "Dodge means ",
        { bold: "“During your turn, you may discard this card from your hand to draw another card.”" }
      ],
      [
        "When you Dodge a card from your hand, ignore all the other text on that card. ",
        { italic: "(Unless it specifically mentions Dodging)" },
        ". You didn't “play” the Dodged card, so it's Hero Class/color don't help you trigger Superpower abilities of other cards you play that turn."
      ],
      [
        "Some Allies count the number of cards you discarded this turn. This includes cards you discarded with Dodge."
      ],
      [
        "Many Dodge cards have effects that can be specifically strong or weak in different situations. That way you can play them when they're strong and Dodge them away when they're weak. Dodge also helps to sculpt your hand towards Recruit Points or Attack as you see fit."
      ]
    ]
  }
];