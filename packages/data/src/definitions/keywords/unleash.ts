import { KeywordDefinition } from "../ruleTypes";

export const unleash: KeywordDefinition = [
  [
    "At the perfect moment, Black Widows shed their disguised identities, reveal themselves, and strike. To represent this, Heroes use the Unleash keyword.",
  ],
  {
    points: [
      [
        "When an effect says “Unleash a Hero from Undercover“: ",
        { bold: "Return that Hero from your Victory Pile to your hand." },
      ],
      [
        "If you have several cards Undercover with a trigger like “When you fight a Villain, you may Unleash this card from Undercover,“ fighting one Villain is enough to Unleash any number of those cards.",
      ],
      [
        "When you Unleash a Hero back to your hand, you can play that Hero on the same turn as normal. At the end of your turn, it will go to your discard pile as normal. It doesn't return to your Victory Pile unless an effect tells the card to go Undercover again.",
      ],
      [
        "If you Unleash cards based on fighting Villains or the Mastermind, you can do the Unleash effects and/or Fight effects from that enemy in any order.",
      ],
    ]
  }
];