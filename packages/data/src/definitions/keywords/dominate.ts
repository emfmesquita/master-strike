import { KeywordDefinition } from "../ruleTypes";

export const dominate: KeywordDefinition = [
  [
    "This keyword represents Villains using telepathy, sorcery, or illusions to twist Heroes’ minds to evil."
  ],
  {
    points: [
      [
        "Some Villains and Masterminds say they “Dominate” Hero cards from various places. This means “",
        { bold: "Put those Heroes under this enemy. This enemy gets +1" },
        { icon: 1 },
        { bold: " for each Hero it’s Dominating" },
        ".”"
      ],
      [
        "When you fight that enemy, put one of those Dominated Heroes into each player’s discard pile. You choose which player gets which Hero, including yourself. There might not be enough for every player to get one. KO any excess Dominated Heroes."
      ],
      [
        "If a Villain escapes, any Heroes Dominated by that Villain go to the Escape Pile too."
      ]
    ]
  }
];