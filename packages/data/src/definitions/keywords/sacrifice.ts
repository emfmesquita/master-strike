import { KeywordDefinition } from "../ruleTypes";

export const sacrifice: KeywordDefinition = [
  [
    "Across ",
    { italic: "Infinity War" },
    " and ",
    { italic: "Endgame" },
    ", multiple Avengers give their lives in heroic sacrifice to try to stop Thanos and save lives across the galaxy. This is represented with the Sacrifice keyword. Several Heroes say things like ”",
    { hc: 3 },
    { bold: " Sacrifice" },
    ": Take another turn after this one. Dont't play a card from the Villain Deck at the start of that turn.”"
  ],
  {
    points: [
      [
        { bold: "This means ”You may KO this card to use its Sacrifice ability only if you played another " },
        { hc: 3 },
        { bold: " Hero earlier this turn.”" },
      ],
      [
        "Sacrificing is always optional: you don't have to use the Sacrifice ability and KO the card, even if you played the matching Hero Class earlier in the turn. However, if you don't KO the Sacrifice card, you can't use the Sacrifice ability."
      ],
      [
        "You still get the normal ",
        { icon: 2 },
        ", ",
        { icon: 1 },
        ", and any non-Sacrifice abilities from the card, whether you Sacrifice it or not.",
      ],
      [
        "You have to choose whether to Sacrifice the card at the moment you play it. You can't wait then Sacrifice it later in the turn."
      ],
      [
        "If you Sacrifice it, you still ”played it this turn,” for triggering abilities like ”",
        { hc: 4 },
        ": You get ",
        { bold: "+1" },
        { icon: 1 },
        ".” However, it's no longer ”one of your Heroes” or ”a Hero you have,” since it has gone to the KO pile."
      ],
    ]
  }
];