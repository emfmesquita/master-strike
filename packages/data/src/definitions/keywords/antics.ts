import { KeywordDefinition } from "../ruleTypes";

export const antics: KeywordDefinition = [
  [
    "Some of Ant-Man's craziest moments come when he uses his power to control tiny ants, as well as shrinking himself down to ant size or growing ants to giant size!"
  ],
  {
    points: [
      [
        "Some cards say things like ",
        { bold: "“Antics" },
        ": You get ",
        { bold: "+2" },
        " ",
        { icon: 1 },
        ".“"
      ],
      [
        { bold: "You can use a card's Antics abilities only if you have at least three cards that cost 1 or 2 and/or have Size-Changing." }
      ],
      [
        "The Antics card itself can count towards those three cards if it costs 1 or 2 and/or has Size-Changing."
      ],
      [
        "“Cards you have“ includes both cards you played this turn and cards still in your hand, so both of those can help you use Antics."
      ],
      [
        "Use the Antics ability at the moment you play the Antics card. If you don't use it then, you can't go back and use it later in the turn."
      ],
    ]
  }
];