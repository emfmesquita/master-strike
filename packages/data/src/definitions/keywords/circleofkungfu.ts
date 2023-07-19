import { KeywordDefinition } from "../ruleTypes";

export const circleofkungfu: KeywordDefinition = [
  [
    "“5th Circle of Kung-Fu” means “During your turn, this Villain has ",
    { bold: "+5" },
    { icon: 1 },
    " unless you reveal a Hero that costs 5 or more.”"
  ],
  {
    points: [
      [
        "Likewise, the 7th Circle gets ",
        { bold: "+7" },
        { icon: 1 },
        " unless you reveal a Hero that costs 7 or more, etc."
      ],
      [
        "If a Villain or Mastermind already has a Circle of Kung-Fu, and a Scheme gives them another one, only count the highest circle – don’t add them up."
      ]
    ]
  }
];