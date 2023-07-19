import { KeywordDefinition } from "../ruleTypes";

export const triggeredartifact: KeywordDefinition = [
  [
    "Each ",
    { keyword: 13 },
    " in Legendary®: Marvel Studios' Guardians of the Galaxy set is a new variety called a “Triggered Artifact”. From gadgets to cannons, many of these literally have triggers!"
  ],
  {
    points: [
      ["Some cards say things like “Triggered Artifact — Whenever you draw a card during your turn, you get ",
      { bold: "+1" },
      { icon: 1 },
      ".” While you control this Artifact, ",
      { bold: "every time you do that trigger, you get the listed effect." }],
      ["If a card lets you “copy” a Triggered Artifact card or “play a copy of it,” then you can use that Triggered Artifact ability (or “Thrown Artifact,” “Once per turn” Artifact or “Ritual Artifact” ability) once, and you don’t need to fulfill the trigger. The copy doesn’t stay in play as an Artifact. The ‘Legendary Outlaw’ card from the 2014 Guardians set cannot copy any Artifacts in this set."],
    ]
  }
];