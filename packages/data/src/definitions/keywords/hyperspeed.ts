import { KeywordDefinition } from "../ruleTypes";

export const hyperspeed: KeywordDefinition = [
  [
    "This keyword represents how Heroes like Quicksilver and Speed move blindingly fast, battering opponents with a flurry of unpredictable strikes. It also includes hyperspeed flight, hypersonic cannons and hyper-fast volleys of arrows."
  ],
  {
    points: [
      [
        "Some Hero cards say things like “Hyperspeed 5.” This means “",
        { bold: "Reveal the top 5 cards of your deck. You get +1" },
        { icon: 1 },
        { bold: " for each card with an " },
        { icon: 1 },
        { bold: " icon you revealed this way. Discard all those cards." },
        "”"
      ],
      [
        "It doesn’t matter what numbers are in the ",
        { icon: 1 },
        " icons. Ignore ",
        { icon: 2 },
        " and other icons on the revealed cards."
      ],
      [
        "When building a deck with lots of Hyperspeed, you will want as many cards with ",
        { icon: 1 },
        " icons as you can get – including cards with “0+” printed inside their ",
        { icon: 1 },
        " icon."
      ],
      [
        "You can also cleverly use abilities that let you set up the top card of your deck to have an ",
        { icon: 1 },
        " icon right before you play a card with Hyperspeed."
      ],
      [
        "Some cards explicitly tell you to “Hyperspeed 3 for ",
        { icon: 2 },
        ".” This means “Reveal the top 3 cards of your deck. You get ",
        { bold: "+1" },
        { icon: 2 },
        " for each card with a ",
        { icon: 2 },
        " icon you revealed this way. Discard all those cards.”"
      ],
      [
        "Finally, some cards say “Hyperspeed 3 for ",
        { icon: 2 },
        " and ",
        { icon: 1 },
        ".” In this case, if you revealed one card with a ",
        { icon: 2 },
        " icon and two cards that each had ",
        { icon: 2 },
        " and ",
        { icon: 1 },
        " icons, you would get ",
        { bold: "+3" },
        { icon: 2 },
        " and ",
        { bold: "+2" },
        { icon: 1 },
        ". Cards with both ",
        { icon: 2 },
        " and ",
        { icon: 1 },
        " icons can be very useful with Hyperspeed!"
      ]
    ]
  }
];