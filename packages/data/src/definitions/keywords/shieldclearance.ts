import { KeywordDefinition } from "../ruleTypes";

export const shieldclearance: KeywordDefinition = [
  [
    "This keyword represents pro-registration S.H.I.E.L.D. forces that can be only defeated with the help of S.H.I.E.L.D. information.",
  ],
  {
    points: [
      [
        "If a Villain says “S.H.I.E.L.D. Clearance,” ",
        { bold: "then you must discard a " },
        { team: 2 },
        { bold: " Hero as an additional cost to fight that Villain." }
      ],
      [
        "Likewise, if a Mastermind has “Double S.H.I.E.L.D. Clearance,” then you must discard two ",
        { team: 2 },
        " Heroes each time you fight them."
      ],
      [
        "If you are playing with ",
        { team: 13 },
        " Heroes, you may discard them instead of ",
        { team: 2 },
        " Heroes.",
      ]
    ]
  }
];