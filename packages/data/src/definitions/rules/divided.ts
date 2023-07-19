import { RuleDefinition} from "../ruleTypes";

export const divided: RuleDefinition = [
  [
    "Each Divided Card has two miniature cards printed on the same card."
  ],
  {
    points: [
      [
        "If a Divided Card costs “3” on each side, its cost is 3. Pay ",
        { bold: "3" },
        { icon: 2 },
        " to recruit it from the HQ, not ",
        { bold: "6" },
        { icon: 2 },
        "."
      ],
      [
        "When you play a Divided Card, you choose which side to play. You generate all the ",
        { icon: 2 },
        ", ",
        { icon: 1 },
        ", and special abilities of that side as normal. You ignore the other side, as if it didn’t exist.",
      ],
      [
        "Each side of a Divided Card has a different Hero Class, like ",
        { hc: 4 },
        " or ",
        { hc: 3 },
        ". You can play the ",
        { hc: 4 },
        " side to get ready to use a Superpower Ability that triggers on ",
        { hc: 4 },
        " cards later in your turn."
      ],
      [
        "Different sides of Divided Cards often let you choose between Recruit, Attack, drawing cards, and other effects. Choose carefully which side to play!"
      ],
      [
        "While a Divided Card is anywhere else, including your hand, deck, discard pile, HQ, etc., it counts as all its Hero Classes, Teams, card names, Hero Names. (It still counts as 1 card, not 2.) While in those places, it counts as ”a multicolored card” and its ”printed ",
        { icon: 1 },
        "” is the total of both ",
        { icon: 1 },
        " numbers printed on it. However, once you play the card, it only counts as the side you choose, and it is no longer ”a multicolored card.”"
      ],
      [
        "One Divided Card in your discard pile can potentially power up ",
        { keyword: 58 },
        " by ",
        { bold: "+2" },
        { icon: 1 },
        ", since it has two Hero Classes. It still counts as one card though, not two cards, so you can't discard a single Divided card for an effect that says to “discard two cards.“"
      ],
      [
        "You can ",
        { keyword: 10 },
        " with a Divided card if either side has ",
        { keyword: 10 },
        "."
      ],
      [
        "When sorting and setting up, always use the Hero Name on the left side of a Divided Card."
      ]
    ]
  }
];