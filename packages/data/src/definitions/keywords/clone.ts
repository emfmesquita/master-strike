import { KeywordDefinition } from "../ruleTypes";

export const clone: KeywordDefinition = [
  { header: "Clone Heroes" },
  [
    "Multiple Man and the Stepford Cuckoos are literal clones. M and her sisters can transform into copies of each other. Shatterstar is genetically engineered from cloned DNA. All of these use the new Clone keyword, saying things like “",
    { hc: 2 },
    ": Clone“"
  ],
  {
    points: [
      [
        "Clone means: ",
        { bold: "You may gain another copy of this card from the HQ. If there are none in the HQ, you may gain a copy from the Hero Deck and shuffle it." }
      ],
      "“Gain” means “put it into your discard pile.”",
      "If you Clone a S.H.I.E.L.D. Officer or Sidekick, search and shuffle that stack instead.",
    ]
  },
  { header: "“When Recruited” Clones" },
  [
    "Some Heroes say “When Recruited: Clone”. This means ",
    { bold: "Use the Clone ability immediately when you recruit this Hero." },
    " (Do this right after you put the recruited Hero in your discard pile, after you refill its HQ space.)",
  ],
  {
    points: [
      [
        "Use a “When Recruited” ability only when you recruit a Hero, not when an ability causes you to “gain” a Hero or “put it in your hand.” So the copy you gain from “When Recruited: Clone” ",
        { bold: "won't" },
        " make you gain more copies.",
      ],
      [
        "Some Heroes say things like “When Recruited — ",
        { hc: 1 },
        ": Clone.” ",
        { bold: "Use this ability only if you have played a " },
        { hc: 1 },
        { bold: " Hero this turn before recruiting this card." },
      ],
    ]
  },
  { header: "Clone Villains" },
  [
    "On a Villain, “Ambush: Clone” means: ",
    { bold: "Search the Villain Deck for a copy of this Villain, and it enters the city, ignoring any further Clone effects. Shuffle that deck." },
    " When you Clone a “Predator X” Villain, just use the first “Predator X” you find in the Villain Deck. If you can't find a Clone copy of a Villain (or Hero), just move on."
  ],
];