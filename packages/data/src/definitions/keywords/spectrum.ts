import { KeywordDefinition } from "../ruleTypes";

export const spectrum: KeywordDefinition = [
  [
    "Some cards have abilities like “",
    { bold: "Spectrum:" },
    " Draw a card.” You can use a card’s Spectrum abilities only if you have at least 3 classes of Hero. (e.g. ",
    { hc: 1 },
    ", ",
    { hc: 4 },
    " and ",
    { hc: 3 },
    ")"
  ],
  {
    points: [
      [
        "Grey S.H.I.E.L.D. Heroes, HYDRA Allies, New Recruits and normal grey Sidekicks don’t have classes, so they don’t help."
      ],
      [
        "You can count all the classes you have among cards you played this turn and cards in your hand."
      ],
      [
        "Multiclass cards work especially well with Spectrum."
      ]
    ]
  }
];