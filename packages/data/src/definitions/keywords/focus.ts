import { KeywordDefinition } from "../ruleTypes";

export const focus: KeywordDefinition = [
  [
    "The ",
    { bold: "“Focus“" },
    " keyword lets you transform your Recruit Points into powerful, flexible effects. Some hero cards say things like “",
    { bold: "Focus 2" },
    { icon: 2 },
    " ",
    { icon: 5 },
    " Draw a card.”"
  ],
  {
    points: [
      [
        { bold: "When you play a card with a Focus ability, you can pay the cost on the left side of the arrow to get the effect on the right side of the arrow. You can use that Focus ability as many times as you want for the rest of the turn." },
      ],
      [
        "For example, say you play a card that says: “",
        { bold: "Focus 2" },
        { icon: 2 },
        " ",
        { icon: 5 },
        " Draw a card.” For the rest of your turn, you can use 2 Recruit points to draw a card, as many times as you want, as long as you have the Recruit points available. You can even play more Heroes, recruit, fight, then use the Focus ability again."
      ],
      [
        { bold: "Note:" },
        " You can use Focus abilities and still use the “Healing” ability on Wounds."
      ],
      [
        "Super-Skrull uses the Fantastic Four's abilities with a twist, focusing ",
        { icon: 1 },
        " instead of ",
        { icon: 2 },
        "."
      ]
    ]
  }
];