import { KeywordDefinition } from "../ruleTypes";

export const versatile: KeywordDefinition = [
  [
    "This keyword represents Heroes who think quickly on their feet to react perfectly to any situation."
  ],
  {
    points: [
      [
        "“",
        { bold: "Versatile 2" },
        "” means “",
        { bold: "You get +2" },
        { icon: 2 },
        { bold: " or +2" },
        { icon: 1 },
        { bold: "." },
        "” Other cards use different Versatile numbers."
      ],
      [
        "You choose to get all ",
        { icon: 2 },
        " or all ",
        { icon: 1 },
        " when you play the card. You can’t divide it up."
      ],
      [
        "However, if you play multiple Versatile cards in a turn, you can choose ",
        { icon: 2 },
        " for some cards and ",
        { icon: 1 },
        " for others, if you wish."
      ],
      [
        "If you use ",
        { keyword: 44 },
        " to play a Versatile card twice, you could get ",
        { icon: 2 },
        " with one play and get ",
        { icon: 1 },
        " with the other play, or choose the same for both."
      ],
    ]
  }
];