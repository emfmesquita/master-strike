import { RuleDefinition} from "../ruleTypes";

export const traps: RuleDefinition = [
  [
    "The ",
    { italic: "Legendary® X-Men" },
    " set adds a completely new card type to ",
    { italic: "Legendary" },
    ": ",
    { bold: "Traps" },
    "."
  ],
  {
    points: [
      [
        "When a Trap is played from the Villain Deck, it gives you a challenge to complete this turn to avoid the Trap. If you complete the challenge, put the Trap in your Victory Pile and get its VP."
      ],
      [
        "If you fail to complete the challenge, then at the end of the turn you must suffer the listed consequences! ",
        { italic: "(after you draw your new hand)" }
      ],
      [
        "A Trap is not a Villain and don’t push forward Villains in the city."
      ] 
    ]
  },
];