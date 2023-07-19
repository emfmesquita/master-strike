import { KeywordDefinition } from "../ruleTypes";

export const indigestion: KeywordDefinition = [
  [
    "Venompool shares a twisted sense of humor with the original Venom and Carnage. It wasn’t enough for them to have Digest abilities while eating people – they had to have Indigestion abilities too! Let’s just say you don’t want to see what happens when Carnage is eating somebody and gets Indigestion…"
  ],
  {
    points: [
      [
        { bold: "If you don’t have enough cards in your Victory Pile to use a card’s Digest ability, use its Indigestion ability instead." }
      ],
      [
        "For example, some Heroes say things like:",
      ]
    ]
  },
  {
    noBullets: true,
    points: [
      [
        "“",
        { bold: "Digest 4" },
        ": Draw two cards"
      ],
      [
        { bold: "Indigestion" },
        ": You get ",
        { bold: "+2" },
        { icon: 2 },
        ".“"
      ],
    ]
  },
  {
    points: [
      [
        "When you play this card, if you have at least 4 cards in your Victory Pile, then you use the Digest ability and draw two cards."
      ],
      [
        "If you have zero to three cards in your Victory Pile, then you use the Indigestion ability instead, getting ",
        { bold: "+2" },
        { icon: 2 },
        "."
      ],
      [
        "If you have enough cards in your Victory Pile to use the Digest ability, you cannot choose to use the Indigestion ability instead."
      ],
    ]
  },
];