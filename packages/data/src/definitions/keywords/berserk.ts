import { KeywordDefinition } from "../ruleTypes";

export const berserk: KeywordDefinition = [
  [
    "This keyword represents some X-Men going into a berserker rage of unpredictable violence."
  ],
  {
    points: [
      [
        "“Berserk” means “",
        { bold: "Discard the top card of your deck. You get +" },
        { icon: 1 },
        { bold: " equal to the discarded card’s printed " },
        { icon: 1 },
        { bold: "." },
        "” (So if the discarded card gives “",
        { bold: "+2" },
        { icon: 1 },
        "”, you just count 2.)"
      ],
      [
        "Some cards say “Berserk, Berserk, Berserk” so you discard three cards in a row"
      ],
      [
        "Some cards say things like “",
        { bold: "Berserk. X-Gene " },
        { hc: 5 },
        { bold: ":" },
        " You get ",
        { bold: "+1" },
        { icon: 1 },
        ".” You do the card abilities in order, so Berserk might discard a ",
        { hc: 5 },
        " card from your deck, letting you use your X-Gene ability."
      ]
    ]
  }
];