import { KeywordDefinition } from "../ruleTypes";

export const hydralevel: KeywordDefinition = [
  [
    "Some Villain Groups try to rise through the ranks of the Hydra organization, achieving higher Hydra Levels and ever-greater power. To do this, they help Hydra operatives achieve their missions and escape the city unharmed. They also subvert double agents to infiltrate S.H.I.E.L.D., then escape it with key intel."
  ],
  {
    points: [
      [
        { bold: "The Hydra Level is the number of S.H.I.E.L.D. and/or HYDRA cards in the Escape Pile." }
      ],
      [
        "Some Villains and Masterminds say things like “Growing Man gets ",
        { bold: "+" },
        { icon: 1 },
        " equal to the Hydra Level.“"
      ],
      [
        "Like ",
        { keyword: 61 },
        ", this includes any card with the ",
        { team: 2 },
        " or ",
        { team: 13 },
        " team icons, as well as any card with “S.H.I.E.L.D.“ or “Hydra“ in its card name, Villain Group name, or Mastermind name."
      ],
      [
        "Some abilities put ",
        { team: 2 },
        " cards directly from S.H.I.E.L.D. Officer Stack into the Escape Pile to increase the Hydra Level. This is not an “escape“ unless it's a Villain escaping from the city, so it won't KO a Hero of cost 6 or less from the HQ."
      ]
    ]
  }
];