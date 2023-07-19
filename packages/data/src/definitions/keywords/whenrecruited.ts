import { KeywordDefinition } from "../ruleTypes";

export const whenrecruited: KeywordDefinition = [
  [
    "The Inhumans' powerful decision to go to war is shown with new special abilities they use “When Recruited.“"
  ],
  {
    points: [
      [
        "Some Heroes say things like: “When Recruited: You get ",
        { bold: "+3" },
        { icon: 1 },
        ".“ ",
        { bold: "Use this “When Recruited“ ability immediately when you recruit this Hero." }
      ],
      [
        "You pay the Hero's normal recruit cost, move it from the HQ into your discard pile, and refill that HQ space with a card from the Hero Deck. When all that is done, then you must use the “When Recruited“ ability."
      ],
      [
        "When you play that card from your hand in later turns, don't use the “When Recruited“ ability again. Instead, use the card's normal abilities, ",
        { icon: 2 },
        ", and ",
        { icon: 1 },
        ". A horizontal line separates the “When Recruited“ ability from the card's normal abilities."
      ],
      [
        "If a special ability tells you to ",
        { bold: "“gain“" },
        " a Hero or ",
        { bold: "“put“" },
        " a Hero somewhere, then you ",
        { bold: "don't" },
        " use that Hero's “When Recruited“ ability, since you didn't pay ",
        { icon: 2 },
        " and you didn't recruit that Hero. This is true even if the special ability tells you to “gain“ the Hero from the HQ."
      ],
      [
        "However, you ",
        { bold: "do" },
        " use the “When Recruited“ ability if a special ability lets you “recruit a Hero for free“ or recruit it at a reduced cost or from some unusual place, since then you are still recruiting the Hero."
      ],
      [
        "You may wish to keep some Heroes in the HQ until you especially need their “When Recruited“ ability."
      ]
    ]
  }
];