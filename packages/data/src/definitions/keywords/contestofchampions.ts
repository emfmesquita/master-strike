import { KeywordDefinition } from "../ruleTypes";

export const contestofchampions: KeywordDefinition = [
  [
    "The Grandmaster and the Elders of the Universe are literally immortal. To them, mortals are merely playthings. This is shown with the Contest of Champions keyword. Some Villains and Masterminds say things like “Ambush: Contest of Champions ",
    { hc: 4 },
    ".” When this happens:"
  ],
  {
    points: [
      [
        "Each player in turn reveals a single card, either from their hand, or that they played this turn, or the top card of their deck. That player announces their “Contest Score,” which is that card’s printed cost, doubled if it’s a ",
        { hc: 4 },
        " card."
      ],
      [
        "You must choose carefully whether to use the best score you have from your hand, or to take a risk by trying the top card of your deck instead."
      ],
      [
        "After all players have announced their Contest Score, then Evil tries to win the contest. Reveal the top two cards of the Hero Deck, and Evil uses whichever card gives the highest Contest Score ",
        { italic: "(taking account of any doubling)" },
        ". Again, this is the card’s printed cost, doubled if it’s a ",
        { hc: 4 },
        " card. Then put both those cards on the bottom of the Hero Deck."
      ],
      [
        "Whichever score is highest (or tied for highest) “wins” the contest. Everyone else “loses.”"
      ],
      [
        "For example, in a 3-player game, say Alana’s score is 6, Piper’s score is 6, Melody’s score is 4, and Evil’s score is 6. Then Alana, Piper, and the Mastermind all win the contest, and Melody loses the contest."
      ],
      [
        "The card lists outcomes for winning & losing."
      ],
      [
        "A few cards reveal a Hero card and use its colors for a contest. This can create contests that are multicolor, such as “Contest of Champions ",
        { hc: 5 },
        ", ",
        { hc: 3 },
        ".” In this case, any card that includes either ",
        { hc: 5 },
        " or ",
        { hc: 3 },
        " will match the contest and have its score doubled. (A card that’s both ",
        { hc: 5 },
        " and ",
        { hc: 3 },
        " won’t be quadrupled.)"
      ],
      [
        "Some contests say that Evil reveals 4 or 6 cards from the Hero Deck. Evil’s Contest Score is still the highest-scoring single card."
      ]
    ]
  }
];