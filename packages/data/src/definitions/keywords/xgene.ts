import { KeywordDefinition } from "../ruleTypes";

export const xgene: KeywordDefinition = [
  [
    "This keyword represents X-Men combining unique mutant powers with their signature teamwork."
  ],
  {
    points: [
      [
        "Some Heroes say things like “",
        { bold: "X-Gene " },
        { hc: 3 },
        { bold: ":" },
        " You get ",
        { bold: "+2" },
        { icon: 1 },
        ".” This means “If you have a ",
        { hc: 3 },
        " card in your discard pile, you get ",
        { bold: "+2" },
        { icon: 1 },
        ".“ ",
        { bold: " You can use a card’s X-Gene ability only if you have the specified kind of card in your discard pile." },
      ],
      [
        "You can only use a card’s X-Gene ability once, no matter how many matching cards you have in your discard pile."
      ],
      [
        "Remember: when you play a card during your turn, it stays in front of you until the end of turn. Then all the cards you played that turn go to the discard pile. So if you have an empty discard pile, you can’t play a ",
        { hc: 5 },
        " card from your hand, then immediately play a card with “",
        { bold: "X-Gene " },
        { hc: 5 },
        "“ and use that X-Gene ability."
      ],
      [
        "One cool combo is to recruit a ",
        { hc: 4 },
        " Hero into your discard pile, then play your “",
        { bold: "X-Gene " },
        { hc: 4 },
        "“ card, and you’ll get to use its X-Gene ability.",

      ]
    ]
  }
];