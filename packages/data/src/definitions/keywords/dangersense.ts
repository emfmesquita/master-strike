import { KeywordDefinition } from "../ruleTypes";

export const dangersense: KeywordDefinition = [
  [
    { bold: "Danger Sense on Heroes" }
  ],
  [
    "This keyword represents heroes using their superpowers to detect danger and evade it"
  ],
  {
    points: [
      [
        "Some cards say things like “",
        { bold: "Danger Sense 2." },
        "” This means ",
        { bold: "“Reveal the top 2 cards of the Villain Deck. You get +1" },
        { icon: 1 },
        { bold: " for each Villain you revealed. Put all the cards back on top in any order.”" }

      ],
      [
        "Cards can say Danger Sense 1, 2, 3, or even 4, revealing that many cards."
      ],
      [
        "Several Danger Sense cards also say they have additional effects when they reveal particular kinds of cards."
      ],
      [
        "Sometimes you can use one Danger Sense card to put a particular card on top of the Villain Deck, and then use a different Danger Sense card to benefit from that card being on top of that deck."
      ],
      [
        "Danger Sense can also be a good way to delay nasty Scheme Twists, Master Strikes, and powerful Villains. But you won’t be able to avoid them forever!"
      ]
    ]
  },
  [
    { bold: "Danger Sense on Villains" }
  ],
  [
    "The arrival of the Black Order of Thanos often signals a world's imminent destruction. Although that world can sense grave danger approaching, they are often powerless to stop it. The Black Order work together to guard each other and their lord. To represent this, these Villains use Danger Sense in a new way. "
  ],
  {
    points: [
      [
        "Some cards say “Ambush: Danger Sense 2, helping all Black Order Villains and the Mastermind.“"
      ],
      [
        "To do this, reveal the top cards of the Villain Deck and rearrange them, just like normal Danger Sense. However, ",
        { bold: "the +1" },
        { icon: 1 },
        { bold: " bonus for each Villain card revealed is gained by all Black Order Villains in the city and the Mastermind this turn, instead of being gained by a player." }
      ],
      [
        "This bonus wears off at the end of the turn."
      ]
    ]
  }
];