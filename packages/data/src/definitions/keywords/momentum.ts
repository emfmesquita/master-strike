import { KeywordDefinition } from "../ruleTypes";

export const momentum: KeywordDefinition = [
  [
    "The Annihilation Wave is a fast-moving invasion force. While pushing forward, they feed on the resources of new territory, becoming more powerful. This is represented by the new “Momentum“ keyword."
  ],
  {
    points: [
      [
        "Some Villains say things like “Momentum 3.“ This means ",
        { bold: "“This Villain gets +3" },
        { icon: 1 },
        { bold: " if it entered another city space this turn.“" },
      ],
      [
        "This works on the turn the Villain enters the city. It also works on any other turn when it is pushed into another city space by another Villain, or by a special ability moving or swapping it to another space."
      ],
      [
        "The Mastermind Annihilus has the variant “",
        { bold: "Mass Momentum 2" },
        ".“ This means ",
        { bold: "he gets +2" },
        { icon: 1 },
        { bold: " for each Villain currently in the city that entered a new city space this turn." },
        " (This doesn't include Villains who entered the Escape Pile this turn.)"
      ],
      "For both Momentum and Mass Momentum, it doesn't matter how many different city spaces a Villain entered during a turn. It only matters if it entered any new city spaces at all.",
      "If a board gets complicated, with special abilities moving Villains around, some players like to shift Momentum Villains up a bit to help signal that they have entered a new space this turn."
    ]
  }
];