import { KeywordDefinition } from "../ruleTypes";

export const shieldlevel: KeywordDefinition = [
  [
    "This keyword represents how S.H.I.E.L.D. agents unlock special operations, resources, and abilities as they rise through the ranks of the organization. Sending agents on undercover missions, fighting Hydra, and defeating rogue S.H.I.E.L.D. operatives are all good ways to increase your S.H.I.E.L.D. Level."
  ],
  {
    points: [
      [
        { bold: "Your S.H.I.E.L.D. Level is the number of S.H.I.E.L.D. and/or HYDRA cards in your Victory Pile." }
      ],
      [
        "Some cards say things like “S.H.I.E.L.D. Level 2: Draw a card.“ You can use this ability only if your S.H.I.E.L.D. Level is 2 or higher."
      ],
      [
        "This counts any card with the ",
        { team: 2 },
        " or ",
        { team: 13 },
        " team icons, as well as any card with “S.H.I.E.L.D.“ or “Hydra“ in its card name, Villain Group name, or Mastermind name. So this includes S.H.I.E.L.D. Assault Squads, Hydra Kidnappers, Hydra High Council Tactics, etc."
      ],
      [
        "This never consumes the cards in your Victory Pile - it just checks to make sure you have them."
      ],
      [
        "Heroes that use S.H.I.E.L.D. Level all have ways to get the needed cards into your Victory Pile."
      ],
      [
        { bold: "Note:" },
        " When playing with Hydra Villain Groups and/or multiple Heroes that use S.H.I.E.L.D. Levels, your S.H.I.E.L.D. Levels will naturally be higher."
      ]
    ]
  }
];