import { KeywordDefinition } from "../ruleTypes";

export const phasing: KeywordDefinition = [
  [
    "This keyword represents Heroes becoming insubstantial and moving through solid objects."
  ],
  {
    points: [
      [
        "During your turn, if a card with Phasing is in your hand, ",
        { bold: " you may swap it with the top card of your deck." }
      ],
      [
        "This lets you get a different card instead, or save a crucial Phasing card for the next turn, or set up a combo that cares about the top card of your deck."
      ],
      [
        "Many Phasing cards have effects that can be especially strong or weak in different situations. That way you can play them when they're strong and Phase them away when they they're weak. You can also sculpt your hand towards Recruit or Attack."
      ],
      [
        "Swapping cards this way isn’t “playing a card,” “drawing a card,” or “putting a card on top of your deck,” so it doesn’t count for other abilities that trigger on those things."
      ]
    ]
  }
];