import { KeywordDefinition } from "../ruleTypes";

export const endgame: KeywordDefinition = [
  [
    "This keyword represents how the Children of Thanos attack most fiercely in their final battles of their Endgame: the destruction of the Avengers, Wakanda, half of all life, and eventually all life in the universe. Some enemies say things like ”Endgame: ",
    { bold: "+3" },
    { icon: 1 },
    "”."
  ],
  {
    points: [
      [
        { bold: "It is the ”Endgame” whenever the Villain Deck holds 8 cards per player or fewer." }
      ],
      [
        "This gives Enemies their Endgame ",
        { icon: 1 },
        " bonus or other listed Endgame abilities."
      ],
      [
        "Captain Marvel is not in ",
        { italic: "Infinity War" },
        " and arrives only in the ",
        { italic: "Endgame" },
        " movie, reaching her full power in the final battle. Accordingly, she uses the Endgame keyword in the same way Enemies do."
      ],
      [
        "If you reach the Endgame and then cards are added back to the Villain Deck somehow, it might not be the Endgame anymore. If a Scheme has multiple Villain Decks, it is the Endgame if any of them are small enough."
      ],
      [
        "Some Enemies have special abilities that say ”It is the Endgame this turn.” This temporarily activates Endgame abilities for all Heroes and Enemies across the game this turn."
      ],
      [
        "Captain Marvel also has a card which says ”For the rest of this turn, it is the Endgame for your Hero cards.” This turns on Heroes' Endgame abilities, but it does not activete Enemies' Endgame abilities."
      ],
      [
        "If you are playing with Endgame abilities, you may find it easier to count 8 cards per player from the bottom of the Villain Deck and put that bottom section to the side of the rest of the Villain Deck. Or keep the Villain Deck in one stack but turn that bottom section of the deck 90 degrees, perpendicular to the top section. This will make it easier to see how close you are to the Endgame. Remember that it's technically all still one deck, so you might not want to do this if using a Scheme that shuffles the Villain Deck, like ”Sacrifice for the Soul Stone.”"
      ]
    ]
  }
];