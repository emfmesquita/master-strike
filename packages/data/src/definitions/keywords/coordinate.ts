import { KeywordDefinition } from "../ruleTypes";

export const coordinate: KeywordDefinition = [
  [
    "This keyword represents how Tony Stark and May Parker act as mentors to Spider-Man in the movie, helping him reach his full potential and become a true hero."
  ],
  [
    { bold: "Coordinating allows you to let another player “borrow” one of your cards." },
    " It is a critical way to help other players defeat tough enemies. During another player’s turn, you can Coordinate with them like this:"
  ],
  {
    points: [
      [
        "Discard a Coordinate card from your hand and then draw a new card to replace it."
      ],
      [
        "That player can now play a copy of the card you coordinated with them. (A copy counts as playing the exact same card including its ",
        { icon: 1 },
        ", ",
        { icon: 2 },
        ", special abilities, and Hero Class symbol.)"
      ]
    ]
  },
  [
    "You can only Coordinate one card to each player on their turn. However, multiple players can each Coordinate one card to the player whose turn it is, in order to give that player a huge advantage. "
  ],
  {
    points: [
      [
        "If you are playing a solo game, once per turn, you may discard a card with Coordinate to draw a card."
      ],
      [
        "Coordinate is printed on cards in red text to make it easier to notice during other players’ turns."
      ]
    ]
  },
  [
    "There are a couple of things about Coordinate specific to Marvel Legendary® that don’t apply to Legendary® Encounters:"
  ],
  {
    points: [
      [
        "When you offer to Coordinate a card to another player, that player can decline. If so, you don’t discard that card and that player doesn’t play a copy of it."
      ],
      [
        "If you are playing with the Final Showdown, you can’t Coordinate during that Showdown."
      ]
    ]
  }
];