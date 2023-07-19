import { KeywordDefinition } from "../ruleTypes";

export const transform: KeywordDefinition = [
  [
    { bold: "Transforming Heroes" }
  ],
  [
    "Duality and transformation are key themes of Hulk stories: the puny, brilliant scientist transforming into a raging monster. The “Transform” keyword highlights this theme."
  ],
  {
    points: [
      [
        "Each Hero in this set has some special “Transformed” cards that go along with it. When you use these Heroes, ",
        { bold: "don’t" },
        " shuffle their “Transformed” cards into the Hero Deck. Instead, set them aside in a special Transformation Pile. You can’t recruit cards from this pile. Instead, you transform other cards into them."
      ],
      [
        "Some Hero cards like “Bruce Banner: Gamma Ray Experiments” say things like “...Transform this into Savage Hulk Unleashed.”"
      ],
      [
        "When you play a Hero card that says it transforms into another card, you complete all effects on the card you played and get its normal ",
        { icon: 2 },
        " and ",
        { icon: 1 },
        "."
      ],
      [
        "Then remove the transforming card from the game (putting it in the Transformation Pile) and put the newly transformed card into your hand instead (from the Transformation Pile). You can play the new Transformed card immediately that same turn."
      ],
      [
        "You still count as having played the transforming card you played and removed from the game, including effects like “You get ",
        { bold: "+1" },
        { icon: 1 },
        " for each ",
        { hc: 5 },
        " card you played this turn.” But if an effect asks you to reveal one of your cards, you can only reveal the new, transformed card, not the old card that you removed from the game."
      ],
      [
        "Some transforming cards tell you to put the new card on top of your deck or in your discard pile instead."
      ],
      [
        "You can look through the Transformation Pile at any time."
      ],
      [
        "At the end of the game, store a Hero’s Transformed cards with the rest of that Hero’s cards. To start a game, you only need to bring out the Transformed cards for the Heroes you’re using. Don’t bring out all the Transformed cards in the entire game."
      ],
      [
        "If you sleeve your cards, you can put the Transformed version of the card in the same sleeve, behind the Transforming card. When it’s time to transform, you just pull the back card to the front of the sleeve. It’s a little thicker in the sleeve, but it still shuffles well."
      ]
    ]
  },
  [
    { bold: "Transforming Masterminds" }
  ],
  [
    "Each Mastermind in this set is a double-sided “Transforming Mastermind” that transforms back and forth between two forms during the game."
  ],
  {
    points: [
      [
        "The side with the “Always Leads” ability starts face up."
      ],
      [
        "When a Master Strike or Mastermind Tactic ability occurs, it will tell you to “Transform” the Mastermind, meaning flip it over to its other side. (Don’t also do the Master Strike ability of the new side.)"
      ],
      [
        "A Mastermind only uses the abilities and ",
        { icon: 1 },
        " of its currently face up side. Ignore the special abilities and values on the currently face down side."
      ]
    ]
  }
];