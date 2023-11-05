import { RuleDefinition} from "../ruleTypes";

export const multiplemasterminds: RuleDefinition = [
  [
    "When some powerful Villains escape, they ascend to become new Masterminds, so there are multiple Masterminds in the game! Schemes can do this too."
  ],
  {
    points: [
      [
        "Players must defeat all the Masterminds to win."
      ],
      [
        "When a Master Strike occurs, each Mastermind does its Master Strike ability. The player whose turn it is picks the order."
      ],
      [
        "If an effect says it does something to “the Mastermind,” you pick which Mastermind it affects."
      ],
      [
        "An ascending Mastermind doesn’t have Mastermind Tactics. You only need to fight it once to defeat it and put it into your Victory Pile. Once it’s in your Victory Pile, it’s considered a Villain card again, not a Mastermind or Tactic card."
      ],
      [
        "Ascended Masterminds keep their other abilities, like Fateful Resurrection and Circle of Kung-Fu."
      ]
    ]
  }
];