import { KeywordDefinition } from "../ruleTypes";

export const berserk: KeywordDefinition = [
  [
    { header: "Berserk Heroes"},
  ],
  [
    "This keyword represents some X-Men going into a berserker rage of unpredictable violence."
  ],
  {
    points: [
      [
        "“Berserk” on a Hero means “",
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
        "Some cards have Berserk multiple times, like “Berserk, Berserk, Berserk.” In this case, just do the Berserk effect multiple times, once at a time. So you discard three cards in a row, getting each of their printed ",
        { icon: 1 },
        ".",
      ],
      [
        "Building a deck with high printed ",
        { icon: 1 },
        "can increase the chance that your Berserk cards will be explosively powerful. You can also use special abilities to set up the top cards of your deck to have a higher ",
        { icon: 1 },
        " value before you play a card with Berserk.",
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
  },
  [
    { header: "Berserk Enemies"},
  ],
  [
    "As a new twist, this set also includes unpredictable Enemies with Berserk. When they face stronger Heroes, they become even more enraged and violent."
  ],
  {
    points: [
      [
        { bold: "When you try to fight an Enemy that has Berserk, discard the top card of your deck. That Enemy gets +" },
        { icon: 1 },
        { bold: " equal to the discarded card’s printed  " },
        { icon: 1 },
        { bold: "." },
      ],
      [
        "If you have at least as many ",
        { icon: 1 },
        " points as the Enemy’s improved ",
        { icon: 1 },
        ", spend that many ",
        { icon: 1 },
        " and defeat the Enemy as normal.",
      ],
      [
        "If you don’t have enough ",
        { icon: 1 },
        " points, then you don’t defeat this Enemy, you lose all your ",
        { icon: 1 },
        " points, and you can’t fight anymore this turn. You can still play cards and recruit. Don’t use that Enemy’s “Fight” effect. (Also don’t use any “When you fight” or “When you defeat” effects. You can’t use the “if you don’t fight…” Healing ability on normal Wounds.)",
      ],
      [
        "If an Enemy says Berserk multiple times, do the Berserk  effect that many times, giving all of that ",
        { icon: 1 },
        ".",
      ],
      [
        "Once you start to fight an Enemy, you can’t play any more cards until after that fight is complete. Remember to generate all the ",
        { icon: 1 },
        " you can before you fight them!",
      ],
      [
        "Look for ways to set up the top cards of your deck to have low or no ",
        { icon: 1 },
        " before you fight a Berserk Enemy.",
      ],
    ]
  },
];