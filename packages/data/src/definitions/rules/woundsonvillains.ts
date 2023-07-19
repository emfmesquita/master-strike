import { RuleDefinition} from "../ruleTypes";

export const woundsonvillains: RuleDefinition = [
  [
    "Some Wakandans are also inspired by Panthers and Wolves to stalk their villainous prey. They wear enemies down with harrying attacks, slashing claws, and wounds before closing in to finish them off for good. To represent this, some Hero cards say things like “Wound a Villain.“"
  ],
  {
    points: [
      [
        "To do this: ",
        { bold: "Put a Wound onto a Villain from the Wound Stack or from the KO pile. A Villain gets -1" },
        { icon: 1 },
        { bold: " for each Wound on it. When that Villain is defeated or leaves the city, return all Wounds on it to the Wound Stack." },
      ],
      [
        "If a Villain has ",
        { bold: "0" },
        { icon: 1 },
        " or negative ",
        { icon: 1 },
        ", they don't disappear automatically, but you can fight them during your turn by spending ",
        { bold: "0" },
        { icon: 1 },
        ". (If you fight a Villain with negative ",
        { icon: 1 },
        " you won't get a refund.)"
      ],
      [
        "Some cards specifically say they Wound the Mastermind. This works the same way, with all of the Mastermind's Wounds returning to the Wound Stack after a Mastermind Tactic is fought. The Wounds go away even if the Mastermind Tactic tells you to shuffle the Tactic back into the Mastermind's other Tactics or put the Tactic somewhere else."
      ],
      [
        "Killmonger has ",
        { bold: "5" },
        { icon: 1 },
        " and says “While Killmonger has more than ",
        { bold: "0" },
        { icon: 1 },
        ", you cannot fight him. Instead, you may spend",
        { icon: 1 },
        " equal to his ",
        { icon: 1 },
        " to Wound him and get ",
        { bold: "1" },
        { icon: 2 },
        ".“ So players will have to spend ",
        { bold: "5" },
        { icon: 1 },
        ", then ",
        { bold: "4" },
        { icon: 1 },
        ", ",
        { bold: "3" },
        { icon: 1 },
        ", ",
        { bold: "2" },
        { icon: 1 },
        ", and ",
        { bold: "1" },
        { icon: 1 },
        ", getting ",
        { bold: "5" },
        { icon: 2 },
        " along the way. Then a player can fight him at ",
        { bold: "0" },
        { icon: 1 },
        " to take a random Tactic, remove Killmonger's Wounds (and not get ",
        { bold: "+1" },
        { icon: 2 },
        " ). Malice and Preyy work similarly. You can Wound them this way multiple times per turn. This does not count as a “Fight.“ Don't rescue captured Bystanders. You can still use the “Healing“ ability on your own Wounds the same turn you Wound an enemy this way.",
      ],
      [
        "If your Wound Stack contains different kinds of Wounds, like the Grievous Wounds from Legendary® Civil War, then whenever you return Wounds to the Wound Stack, put them on the bottom. Wounds on enemies are face up."
      ],
      [
        "If an effect causes “each player“ to gain a Wound (or do anything else), start with the current player then go clockwise."
      ],
    ]
  }
];