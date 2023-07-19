import { KeywordDefinition } from "../ruleTypes";

export const cosmicthreat: KeywordDefinition = [
  [
    "Some cosmic Villains use the Cosmic Threat keyword. Villains with this keyword have incredibly high Attack values with a special vulnerability. If an enemy has Cosmic Threat",
    { hc: 3 },
    ", that means: ",
    { bold: "“Once per turn, for each " },
    { hc: 3 },
    { bold: " card you reveal, this Enemy gets -3" },
    { icon: 1 },
    { bold: " this turn.”" },
  ],
  {
    points: [
      [
        "For example, The Shaper of Worlds has “Cosmic Threat ",
        { hc: 3 },
        "” and ",
        { bold: "10*" },
        { icon: 1 },
        ". If you reveal two ",
        { hc: 3 },
        " cards, he gets ",
        { bold: "-6" },
        { icon: 1 },
        " this turn, so he has ",
        { bold: "4" },
        { icon: 1 },
        " left. If you reveal four ",
        { hc: 3 },
        " cards, he gets ",
        { bold: "-12" },
        { icon: 1 },
        " this turn, so he has ",
        { bold: "0" },
        { icon: 1 },
        ", and you can fight him without spending any ",
        { icon: 1 },
        "."
      ],
      [
        "The Celestials say things like “Cosmic Threat ",
        { hc: 4 },
        " or ",
        { hc: 2 },
        "” You can choose to use either ",
        { hc: 4 },
        " or ",
        { hc: 2 },
        " cards for its Cosmic Threat in a single turn, ",
        { bold: "but you can’t use both to reduce its " },
        { icon: 1 },
        "."
      ],
      [
        "If you try to fight a Mastermind with Cosmic Threat a second time in the same turn, it will return to its full ",
        { icon: 1 },
        ", and you cannot use any Cosmic Threat abilities against it in additional fights that turn."
      ],
      [
        "You can use the same ",
        { hc: 3 },
        " cards to reduce the Attack on different “Cosmic Threat ",
        { hc: 3 },
        "“ Villains in one turn."
      ]
    ]
  }
];