import { KeywordDefinition } from "../ruleTypes";

export const ritualartifact: KeywordDefinition = [
  [
    "Marvel’s sorcerers invoke Rituals of awesome power, anchored by mystic talismans. This is represented with a special type of ",
    { keyword: 13 },
    ": Ritual Artifacts. These use the ",
    { keyword: 13 },
    " rules, with some new twists."
  ],
  {
    points: [
      [
        "They say things like “Ritual Artifact — If you drew a card, you may discard this Artifact to get ",
        { bold: "+3" },
        { icon: 1 },
        ".“"
      ],
      [
        "If you have fulfilled the listed Ritual condition this turn, you can discard the Ritual Artifact to get the listed effect."
      ],
      [
        "You don’t have to use the Ritual Artifact even if you fulfill the Ritual condition. You might want to save it for a future turn instead of discarding it."
      ],
      [
        "You can use as many Ritual Artifacts as you wish in a turn, including using multiple Ritual Artifacts with the same name. If you draw one card, that’s enough to use the Rituals of multiple Artifacts that each have the condition “Draw a card.”"
      ],
      [
        "If you use a “draw a card” ability, and it draws you a Ritual Artifact with the condition “draw a card,” then you can play that Artifact and use it right away. It’s ok that the Artifact wasn’t in play when you fulfilled the Ritual condition earlier in the turn."
      ],
      [
        "If a card lets you “copy” a Ritual Artifact card or “play a copy of it,” then you can use its Ritual effect (or “Thrown Artifact” or “Once per turn” Artifact ability) once, and you don’t need to fulfill the ritual condition. You don’t need to immediately discard the copy card to use the Ritual. The copy doesn’t stay in play as an Artifact."
      ],
    ]
  }
];