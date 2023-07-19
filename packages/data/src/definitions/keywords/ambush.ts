import { KeywordDefinition } from "../ruleTypes";

export const ambush: KeywordDefinition = [
  [
    "Black Panther and White Wolf have mastered the pouncing attacks of their animal namesakes. Storm, Shuri, and Okoye are also full of surprises. To represent this, some Heroes say things like “",
    { hc: 2 },
    " Ambush: Draw a card.“ This is similar to how a Villain does its Ambush ability when it enters the city."
  ],
  {
    points: [
      [
        { bold: "When a Hero with a “" },
        { hc: 2 },
        { bold: " Ambush“ ability enters the HQ during your turn, you may use that Ambush ability if you have a " },
        { hc: 2 },
        { bold: " Hero." },
      ],
      [
        "As always, you “have a ",
        { hc: 2 },
        " Hero“ if you have played a ",
        { hc: 2 },
        " Hero this turn or if you have a ",
        { hc: 2 },
        " Hero in your hand (or if you control a ",
        { hc: 2 },
        " Hero Artifact)."
      ],
      [
        "New Heroes usually enter the HQ when you recruit a Hero or a Villain escapes from the city, creating an empty space in the HQ that you refill."
      ],
      [
        "In games with Hero Ambush abilities, you may want to recruit before you fight, in case a new Hero entering the HQ gives you extra ",
        { icon: 1 },
        " or cards that you can use to fight stronger enemies."
      ]
    ]
  }
];