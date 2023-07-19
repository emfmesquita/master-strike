import { KeywordDefinition } from "../ruleTypes";

export const feast: KeywordDefinition = [
  [
    "This Keyword states that when you fight a Villain or Mastermind with this ability you treat it as a fight effect.",
  ],
  {
    points: [
      [
        "For example: ",
        { bold: "“Feast”" },
        " means ",
        { bold: "“Fight: KO the top card of your deck.”" },
      ],
      [
        "Likewise, ",
        { bold: "“Feast on each player”" },
        " means ",
        { bold: "“KO the top card of each player’s deck.”" },
      ]
    ]
  },
  [
    "Some Maximum Carnage Villains create special effects when they feast on certain cards:"
  ],
  {
    points: [
      [
        "Carnage’s Master Strike starts with “Feast on each player.” That means each player does the ",
        { bold: "“Feast”" },
        " effect. Then Carnage’s Master Strike causes Wounds when he feasts on certain cards."
      ],
      [
        "Note that Carnage’s Master Strike is the only effect that feasts on every player. The “Maximum Carnage” Villains and Carnage’s Mastermind Tactics each feast on only one player."
      ],
      [
        "While Carnage’s Master Strike causes Wounds, the Feast abilities on his Mastermind Tactics and most of his Villains don’t cause Wounds."
      ]
    ]
  }
];