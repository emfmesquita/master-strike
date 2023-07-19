import { KeywordDefinition } from "../ruleTypes";

export const burnshards: KeywordDefinition = [
  [
    "Some Heroes say things like “Burn 2 ",
    { rule: 1 },
    ": Draw two cards.”"
  ],
  {
    points: [
      [
        "This means: ",
        { bold: "Once this turn, you may spend that many Shards to do the listed effect." }
      ],
      [
        "You can wait to use this until later in the turn."
      ],
      [
        "You don’t get the normal ",
        { bold: "+1" },
        { icon: 1 },
        " per Shard when you burn Shards this way."
      ]
    ]
  }
];