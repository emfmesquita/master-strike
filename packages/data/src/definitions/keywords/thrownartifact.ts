import { KeywordDefinition } from "../ruleTypes";

export const thrownartifact: KeywordDefinition = [
  [
    "These are ",
    { keyword: 13 },
    " cards that a player can “throw” at the perfect moment. When you gain a card that’s an Artifact, put it into your discard pile like any other. When you draw that Artifact later in the game, you may play it in front of you when the time comes. This means you “control” that Artifact. At the end of your turn, when you discard all the cards you played that turn, the Artifacts you control stay in front of you for future turns and are not discarded."
  ],
  {
    points: [
      [
        { bold: "To “throw” a Thrown Artifact, put it on the bottom of your deck and use its ability. " }
      ],
      [
        "You can throw it on the same turn that you play the Throw Artifact, or you can wait until a later turn."
      ],
      [
        "If you use this when your deck has not many cards left, you might draw the Thrown Artifact again quite soon. (Much like Thor's hammer, a Thrown Artifact can return to your hand very quickly!)"
      ],
      [
        "You can throw as many Artifacts as you want in a turn, including multiple Artifacts with the same card name."
      ],
      [
        "You can only throw artifacts during your turn (unless it specifically says otherwise)."
      ],
      [
        "If a card effect like Rogue, Hulkling, or Scarlet Witch would let you “copy“ an Artifact card, you can use that Artifact's “Once per turn“ or “When you throw this“ ability once, and there is no other effect. (Don't put anything on the bottom of your deck.)."
      ]
    ]
  }
];