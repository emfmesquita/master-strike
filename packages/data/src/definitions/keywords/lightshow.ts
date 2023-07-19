import { KeywordDefinition } from "../ruleTypes";

export const lightshow: KeywordDefinition = [
  [
    "This keyword represents X-Men using fireworks and blinding bursts in spectacular combinations."
  ],
  {
    points: [
      [
        "Some Heroes say things like “",
        { bold: "Lightshow:" },
        " You get ",
        { bold: "+3" },
        { icon: 1 },
        ".” ",
        { bold: " Once per turn, if you played at least two Lightshow cards this turn, you can use a single Lightshow ability from any of those cards." },
      ],
      [
        "If you play three, four, or more Lightshow cards you still use only a single Lightshow ability."
      ]
    ]
  }
];