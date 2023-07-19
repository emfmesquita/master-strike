import { KeywordDefinition } from "../ruleTypes";

export const fortify: KeywordDefinition = [
  [
    "This keyword represents Villains setting up nasty traps for the players."
  ],
  {
    points: [
      [
        "Some Villains say things like “",
        { bold: "Escape: Fortify" },
        " the Mastermind. While it’s fortified, the Mastermind can’t be fought.”"
      ],
      [
        "Put this Villain on or near the specified place. While it’s there, it has the listed effect. Any player can fight that Villain as normal to end that Fortify effect and put that Villain into their Victory Pile."
      ],
      [
        "If a card would fortify a place, don’t do anything if there’s already a Villain fortifying that place."
      ]
    ]
  }
];