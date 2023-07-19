import { KeywordDefinition } from "../ruleTypes";

export const excessivekindness: KeywordDefinition = [
  [
    "By contrast, the empath Mantis and the adorable Baby Groot are often way kinder than necessary. Their “Excessive Kindness” abilities work just like ",
    { keyword: 30 },
    ", except that you trigger them by spending ",
    { bold: "1" },
    { icon: 2 },
    " more than you need when recruiting a Hero."
  ],
  {
    points: [
      [
        "Some Heroes say things like “",
        { bold: "Excessive Kindness:" },
        " Draw a card.”"
      ],
      [
        { bold: "Once per turn, you can spend 1" },
        { icon: 2 },
        { bold: " more than you need to recruit a Hero “using Excessive Kindness.” If you do, you get to use all the “Excessive Kindness abilities on cards you played this turn." }
      ],
      [
        "Say you’ve played three Heroes with Excessive Kindness abilities this turn. If you spend ",
        { bold: "8" },
        { icon: 2 },
        " to recruit a Hero that has cost 7, then you’ll get to use all three Excessive Kindness abilities!"
      ],
      [
        "If you don’t recruit anything this turn, or if you don’t spend an extra ",
        { bold: "1" },
        { icon: 2 },
        " on someone, then you won’t be able to use Excessive Kindness."
      ],
      [
        "Since you can only recruit “using Excessive Kindness once per turn, you can only use a card’s Excessive Kindness ability once per turn. (It’s OK to play two cards with the same card name, recruit a Hero “using Excessive Kindness and use both of those cards’ Excessive Kindness abilities.)"
      ],
      [
        "If you recruit using Excessive Kindness and then draw or play more cards with Excessive Kindness abilities later in the turn, it will be too late to use those abilities."
      ]
    ]
  }
];