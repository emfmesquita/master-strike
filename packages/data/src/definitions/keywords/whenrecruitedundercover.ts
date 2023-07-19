import { KeywordDefinition } from "../ruleTypes";

export const whenrecruitedundercover: KeywordDefinition = [
  [
    "Red Guardian works as a sleeper agent until the right time to reveal himself. To represent this, all his cards say “When Recruited: Send this Undercover.“ “",
    { keyword: 69, text: "When Recruited" },
    "“ abilities also appear in ",
    { italic: "Legendary" },
    "®: Realm of Kings and Messiah Complex."
  ],
  {
    points: [
      [
        "“When Recruited“ means: ",
        { bold: "“Do this ability when you recruit this Hero.“" },
      ],
      [
        "In this case, you pay the Hero's normal recruit cost, put it in your Victory Pile worth 1VP, and refil that HQ space with a card from the Hero Deck.",
      ],
      [
        "Other abilities ",
        { keyword: 84 },
        " the card at the right time.",
      ],
      [
        "If you recruit a Hero with multiple effects telling you to put it in different places ",
        { italic: "(like " },
        { keyword: 7},
        { italic: ", " },
        { keyword: 37},
        { italic: ", “When Recruited: Send this Undercover“, etc.)" },
        ", you choose which one applies.",
      ],
    ]
  }
];