import { KeywordDefinition } from "../ruleTypes";

export const fail: KeywordDefinition = [
  [
    "Some Berserk Enemies say “Fail: You gain a Wound.”"
  ],
  {
    points: [
      [
        "Do the “Fail” effect if you try to fight that Enemy but the ",
        { keyword: 36 },
        " ",
        { icon: 1 },
        " bonus causes you to fail."
      ],
      [
        "You can’t try to fight an Enemy unless you have enough points to match its printed ",
        { icon: 1 },
        "."
      ],
    ]
  },
];