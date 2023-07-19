import { RuleDefinition} from "../ruleTypes";

export const sidekicks: RuleDefinition = [
    [
      { italic: "Secret Wars" },
      " adds a new Sidekick Stack to the game. Players can pay ",
      { bold: "2" },
      { icon: 2 },
      " to recruit ",
      { bold: "up to one Sidekick per turn" },
      ". When card effects tell you to “gain Sidekicks,” that doesn’t count against that one-per-turn limit."
    ],
    { header: "Special Sidekicks: Pet Avengers" },
    [
      { italic: "Civil War" },
      " comes with 15 new “Special Sidekicks:” superpowered pets known as the Pet Avengers! When you set up, shuffle them ",
      { bold: "face down" },
      " into a Sidekick Stack. ",
      { bold: " Once per turn" },
      ", a player can pay ",
      { bold: "2" },
      { icon: 2 },
      " to recruit a Sidekick from the top of the Sidekick Stack. When you play any Sidekick, return it to the bottom of the Sidekick Stack."
    ],
    { header: "Special Sidekicks: X-Students" },
    [
      { italic: "Messiah Complex" },
      " set comes with 14 new “Special Sidekicks”: X-Men students, X-Force recruits, and X-Factor. When you set up, shuffle them face down into a Sidekick Stack.",
      { bold: " Once per turn, a player can pay 2" },
      { icon: 2 },
      { bold: " to recruit a Sidekick from the top of the Sidekick Stack. When you play any Sidekick, return it to the bottom of the Sidekick Stack." },
    ],
    {
      points: [
        [
          "You still “played” that Sidekick and can use Superpower abilities based on its Hero Class."
        ],
        [
          "When a card effect says “gain a Sidekick,” put the top card of the Sidekick Stack into your discard pile. That doesn’t count against the pay-to-recruit-once-per-turn limit."
        ],
        [
          "If you have the Sidekicks from ",
          { italic: "Legendary®: Secret Wars Volume 1" },
          ", ",
          { italic: "Legendary®: Civil War" },
          " and/or ",
          { italic: "Legendary®: Messiah Complex" },
          " shuffle them all into a single face-down Sidekick Stack."
        ]
      ]
    },
  ];