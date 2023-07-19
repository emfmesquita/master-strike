import { KeywordDefinition } from "../ruleTypes";

export const manoutoftime: KeywordDefinition = [
  [
    "Heroes from 1941 use this keyword ability to represent fighting in both the past and the present. It also represents how Psy-Lord, Brainstorm and Kang the Conqueror return from the future.",
  ],
  {
    points: [
      [
        "This keyword means “",
        { bold: "After you use this card’s abilities, set it aside. At the beginning of your next turn, play this card a second time and then discard it." },
        "”"
      ],
      [
        "The card is discarded the second time you play it, so you can only play the card twice. You can’t use Man Out of Time again to play that card for a third turn."
      ],
      [
        "Play your returning Man Out of Time cards after the “Play a Villain Card” part of your turn and before you start playing out your hand."
      ],
      [
        "You “played” a Man Out of Time card on both the first turn you played it and the second turn when you replayed it, so it can help activate your Superpower Abilities on both turns."
      ],
      "You can use a Focus ability on a Man Out of Time card throughout the first and second turns you play the card.",
      "If a special ability lets you copy (or play a copy of) a Hero card, you can't use Man Out of Time on the copy.",
      "Some enemies send your cards Out of Time, setting them asside in the same way. When you play and discard that card at the start of your next turn, you can't use Man Out of Time again."
    ]
  }
];