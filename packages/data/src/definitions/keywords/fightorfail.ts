import { KeywordDefinition } from "../ruleTypes";

export const fightorfail: KeywordDefinition = [
  [
    "Enemies with ",
    { keyword: 15 },
    " sometimes also say things like “Fight or Fail: KO one of your Heroes."
  ],
  {
    points: [
      [
        { bold: "Do the “Fight or Fail” effect if you successfully fight that Enemy or if you try to fight them but the Uru-Enchanted Weapons’ " },
        { icon: 1 },
        { bold: " bonus causes you to fail." }
      ],
      [
        "You can’t try to fight an enemy unless you have enough ",
        { icon: 1 },
        " points to match its printed ",
        { icon: 1 },
        "."
      ],
    ]
  },
];