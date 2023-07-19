import { KeywordDefinition } from "../ruleTypes";

export const woundedfury: KeywordDefinition = [
  [
    "This keyword represents how wounding a Hulk often just makes it ANGRIER and STRONGER! It also includes Villains attacking with more furious bloodlust as they wound you."
  ],
  {
    points: [
      [
        "When a Hero card says “Wounded Fury”, it means ",
        { bold: "“You get +1" },
        { icon: 1 },
        { bold: " for each Wound in your discard pile.”" }
      ],
      [
        "Likewise, when a Villain or Mastermind says “Wounded Fury”, it means ",
        { bold: "“It gets +1" },
        { icon: 1 },
        { bold: " for each Wound in your discard pile.”" }
      ]
    ]
  }
];