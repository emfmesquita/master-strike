import { KeywordDefinition } from "../ruleTypes";

export const switcheroo: KeywordDefinition = [
  [
    "This keyword represents how Heroes like Squirrel Girl and Jessica Jones unpredictably switch up their tactics. Sometimes they instantly switch to new fighting stances, while other times they switch in new Heroes altogether."
  ],
  {
    points: [
      [
        "Some Hero cards say things like “",
        { bold: "Switcheroo 4." },
        "”"
      ],
      [
        "This means “",
        { bold: "You can reveal this card from your hand and put it on the bottom of the Hero Deck. If you do, you may put a Hero of the specified printed cost from the HQ into your hand." },
        "”"
      ],
      [
        "So when you have a Switcheroo card in your hand, you can choose to play it for its normal ",
        { icon: 2 },
        ", ",
        { icon: 1 },
        ", and other effects. Or you can choose to permanently swap it for another card in the HQ instead."
      ],
      [
        "You use Switcheroo ",
        { italic: "instead"},
        " of playing the card. So when you Switcheroo, you don’t get any ",
        { icon: 2 },
        ", ",
        { icon: 1 },
        ", or other effects from the Switcheroo card that you put on the bottom of the Hero Deck."
      ],
      [
        { bold: "Remember:" },
        " You put the Switcheroo card on the bottom of the collective Hero Deck on the board – not your personal deck."
      ],
      [
        "It’s totally fine to Switcheroo into a card of a different Hero Name."
      ],
      [
        "You can only use Switcheroo during your turn, when you could play cards from your hand. So you can’t use it during other players’ turns, and you can’t use it while playing a card from the Villain Deck, like during a Master Strike, Scheme Twist, or Villain’s Ambush ability."
      ],
      [
        "You can’t Switcheroo into S.H.I.E.L.D. Officers or Sidekicks, since they aren’t in the HQ."
      ],
      [
        "Switcheroo doesn’t count as “recruiting” a Hero, so you can’t use abilities like Wall-Crawl or Soaring Flight when you Switcheroo."
      ],
      [
        "Switcheroo uses the “printed cost” of cards in the HQ, so even if special abilities make cards in the HQ cost more or less, Switcheroo still uses the cost number literally printed on the card."
      ]
    ]
  }
];