import { KeywordDefinition } from "../ruleTypes";

export const tacticalformation: KeywordDefinition = [
  [
    "X-Force is known for precise strike force tactics. X-Factor Investigations likewise plans their missions to the finest detail. With this new keyword, some Heroes say things like “Tactical Formation 445: You get ",
    { bold: "+3" },
    { icon: 1 },
    ".” "
  ],
  {
    points: [
      { bold: "You can use this ability only if you have two Heroes that cost 4 and one Hero that costs 5." },
      "You can count the “Tactical Formation” card itself.",
      "“Heroes you have” includes Heroes in your hand and Heroes you already played this turn (unless they have been put somewhere else, like the KO pile or bottom of the Sidekick stack.)",
    ]
  }
];