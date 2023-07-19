import { KeywordDefinition } from "../ruleTypes";

export const striker: KeywordDefinition = [
  [
    "This keyword represents Villains and Masterminds that get more confident and powerful as the Mastermind smashes Heroes. It means ",
    { bold: " “This gets +1" },
    { icon: 1 },
    { bold: " for each Master Strike in the KO pile and/or stacked next to the Mastermind.”" }
  ],
  {
    points: [
      [
        "A couple of Hero cards also have the Striker ability and give you ",
        { bold: "+" },
        { icon: 1 },
        " the same way."
      ],
      [
        "A couple of cards say “Double Striker,” meaning they get ",
        { bold: "+2" },
        { icon: 1 },
        " per Strike, or even “Triple Striker” meaning ",
        { bold: "+3" },
        { icon: 1 },
        " per Strike."
      ]
    ]
  },
  [
    "By default, most Master Strikes go to the KO pile when they occur. However, some Masterminds specifically put their Master Strikes in unusual places. Striker also counts all face-up Master Strike cards in any of these unusual places. For example, for these Masterminds:"
  ],
  {
    points: [
      [
        { bold: "Galactus" },
        " – Count Master Strikes in the city."
      ],
      [
        { bold: "Macho Gomez" },
        " – Count Master Strikes in front of all players."
      ],
      [
        { bold: "Deathbird" },
        " – Count Master Strikes in the city, Escape Pile, and all players’ Victory Piles."
      ],
      [
        { bold: "Mysterio" },
        " – Count Master Strikes in all players’ Victory Piles. Don’t count Master Strikes shuffled into his Tactics, since they’re not face up."
      ]
    ]
  }
];