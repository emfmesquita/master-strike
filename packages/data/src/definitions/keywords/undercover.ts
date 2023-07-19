import { KeywordDefinition } from "../ruleTypes";

export const undercover: KeywordDefinition = [
  [
    "This keyword represents sending S.H.I.E.L.D. agents off the grid on special missions to recover valuable intel. Also, it represents the Black Widows and their contacts going off the grid on special missions to recover valuable intel."
  ],
  {
    points: [
      [
        "Some cards say things like “You may send one of your other Heroes Undercover.“ This means ",
        { bold: "“Put that Hero into your Victory Pile. It's worth 1 Victory Point.“" }
      ],
      [
        "This can help get your starting S.H.I.E.L.D. Agents and Troopers out of your deck so that you draw your more powerful Heroes more often. You can also use it to get rid of other S.H.I.E.L.D. cards like Officers that you might not need later in the game."
      ],
      [
        "If you play a card, and it sends itself Undercover, you still get its ",
        { icon: 2 },
        " and ",
        { icon: 1 },
        ", and other abilities."
      ],
      [
        "Sending ",
        { team: 2 },
        "  Heroes Undercover is also key to increasing your ",
        { keyword: 61 },
        "."
      ]
    ]
  }
];