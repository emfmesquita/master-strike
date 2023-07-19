import { KeywordDefinition } from "../ruleTypes";

export const shatter: KeywordDefinition = [
  [
    "Rictor's earthquake powers, Siryn's sonic shrieks, and Shatterstar's bioelectric shocks can Shatter even the strongest defenses. Some Heroes say things like “Shatter a Villain in the Sewers.”"
  ],
  {
    points: [
      [
        "This means ",
        { bold: "“Halve that enemy's current " },
        { icon: 1 },
        { bold: ". (round up to the nearest whole number.)”" },
        " This effect lasts until the end of this turn."
      ],
      [
        "You can shatter the same Villain multiple times, halving their ",
        { icon: 1 },
        " (rounding up) each time."
      ],
      "“Shatter a Villain” can't be used on a Mastermind.",
      "“Shatter the Mastermind” lasts for one fight against one Mastermind.",
      "A few cards even let you Shatter a Hero in the HQ, halving their current cost (round up) the same way.",
      [
        "Technically, the Villain gets - ",
        { icon: 1 },
        " equal to half its current ",
        { icon: 1 },
        " . For example: Pestilence has 5 printed ",
        { icon: 1 },
        ". Apocalypse says “Four Horsemen Villains get ",
        { bold: "+2" },
        { icon: 1 },
        ".” Shattering gives her ",
        { bold: "-3" },
        { icon: 1 },
        ", from ",
        { bold: "7" },
        { icon: 1 },
        " to ",
        { bold: "4" },
        { icon: 1 },
        "."
      ],
    ]
  }
];