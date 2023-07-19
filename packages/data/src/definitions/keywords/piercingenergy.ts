import { KeywordDefinition } from "../ruleTypes";

export const piercingenergy: KeywordDefinition = [
  [
    "This keyword represents X-Men using psychic knives & sonic screams to pierce enemy defenses."
  ],
  {
    points: [
      [
        "Some Heroes give you a new kind of points called “Piercing Energy,” using the ",
        { icon: 6 },
        " icon.",
        { bold: " You can fight a Villain or Mastermind by spending " },
        { icon: 6 },
        { bold: " points equal to that enemy’s printed Victory Points value " },
        "(",
        { icon: 4 },
        "). You ignore that enemy’s ",
        { icon: 1 },
        " and any ",
        { icon: 1 },
        " modifiers.",
      ],
      [
        "You can also ignore any special conditions for fighting that enemy, automatically rescuing any Human Shields."
      ],
      [
        "You can’t use Piercing Energy against cards that have no printed VP value, like Shadow-X Villains, or Master Strikes that become Villains."
      ]
    ]
  }
];