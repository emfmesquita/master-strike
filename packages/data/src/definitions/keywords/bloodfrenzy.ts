import { KeywordDefinition } from "../ruleTypes";

export const bloodfrenzy: KeywordDefinition = [
  [
    "Vampires and Werewolves famously crave the taste of blood. Furious rage drives them to seek more of the red delight, gaining strength from every kind of blood they drain. This is shown by the new Blood Frenzy keyword.",
  ],
  {
    points: [
      [
        "Blood Frenzy on a Hero card means ",
        { bold: "“You get +1" },
        { icon: 1 },
        { bold: " for each different VP value you have among cards in your Victory Pile.”" },
      ],
      [
        "Likewise on a Villain card, during your turn Blood Frenzy means ",
        { bold: "“This Villain gets +1" },
        { icon: 1 },
        { bold: " for each different VP value you have among cards in your Victory Pile.”" },
      ],
      [
        "(VP means “Victory Points,” shown as ",
        { bold: "4" },
        { icon: 4 },
        ".)",
      ],
      [
        "It only matters how many different VP values you have among cards in your Victory Pile. It doesn't matter how many you have of any single value. So if your Victory Pile has cards worth 0, 1, 1, 1, 2, 2, and 5 VP, then Blood Frenzy would give ",
        { bold: "+4" },
        { icon: 1 },
        ".",
      ],
      [
        "This includes Bystanders in your Victory Pile. Horrifically, even heroic Vampires and Werewolves cannot always resist draining blood from innocents!",
      ],
      [
        "Use whatever VP a card is worth, not just its printed VP. If a Master Strike becomes “a Villain worth 4VP,” then it counts as 4VP for Blood Frenzy. An “Undercover” Agent worth 1VP counts as 1VP too.",
      ],
      [
        "If a card gets into your Victory Pile somehow with no printed or specified VP value, it counts as “0 VP,” which is a number that can help your Blood Frenzy.",
      ],
    ]
  }
];