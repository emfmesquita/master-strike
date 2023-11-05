import { KeywordDefinition } from "../ruleTypes";

export const empowered: KeywordDefinition = [
  [
    "This keyword represents Heroes and Villains who draw power from ambient energy, technology, or superpowers around them."
  ],
  {
    points: [
      [
        "Some Heroes say things like “You get ",
        { bold: "Empowered" },  
        " by ",
        { hc: 4 },
        ".” This means ",
        { bold: "“You get +1" },
        { icon: 1 },
        { bold: " for each " },
        { hc: 4 },
        { bold: " card in the HQ.”" },
      ],
      [
        "On Villains and Masterminds “",
        { bold: "Empowered" },
        " by ",
        { hc: 5 },
        "” means ",
        { bold: "“This gets +1" },
        { icon: 1 },
        { bold: " for each " },
        { hc: 5 },
        { bold: " card in the HQ.”" }
      ],
      [
        "Uatu the Watcher is sometimes Empowered by a specific Hero Name or Hero Team, in the same way."
      ],
      [
        "As heroes enter and leave the HQ, an Empowered card can get stronger or weaker. You only check the ",
        { icon: 1 },
        " bonus at the moment you play your Empowered Hero or at the moment you fight the Empowered enemy."
      ],
      [
        "One clever move is to recruit a Hero from the HQ at the right time, changing the colors in the HQ to weaken an Empowered enemy or try to strengthen an Empowered Hero in your hand."
      ],
      [
        "Some cards are even “Double Empowered”, “Triple Empowered”, or Quadruple Empowered” meaning that they get ",
        { bold: "+2" },
        { icon: 1 },
        ", ",
        { bold: "+3" },
        { icon: 1 },
        ", or ",
        { bold: "+4" },
        { icon: 1 },
        " for each appropriate card in the HQ."
      ],
      [
        "(A multicolored or divided card from counts if either half is the correct color. For example, an “Empowered by ",
        { hc: 3 },
        " and ",
        { hc: 4 },
        "” ability can get ",
        { bold: "+1" },
        { icon: 1 },
        " from a ",
        { hc: 1 },
        { hc: 3 },
        " card or from a ",
        { hc: 2 },
        { hc: 4 },
        " card. However, a “",
        { hc: 3 },
        { hc: 4 },
        "” card in the HQ would only give ",
        { bold: "+1" },
        { icon: 1 },
        ", not ",
        { bold: "+2" },
        { icon: 1 },
        ".)"
      ],
      [
        "Abilities that let you put cards from the HQ on the bottom of the Hero Deck are especially useful at setting up Empowered Heroes or Empowered Villains. They are also great at giving you more Hero Ambushes!"
      ]
    ]
  }
];