import { KeywordDefinition } from "../ruleTypes";

export const fatefulresurrection: KeywordDefinition = [
  [
    "On a Villain card, “Fight: Fateful Resurrection” means “Fight: Reveal the top card of the Villain Deck. If it’s a Scheme Twist or Master Strike, this Villain reenters the city.”"
  ],
  {
    points: [
      [
        "If a Villain resurrects this way, you still rescue its Bystanders and do its other Fight effects."
      ],
      [
        "The Villain pushes into the Sewers and does any Ambush abilities as normal."
      ],
      [
        "If a Mastermind Tactic resurrects this way, shuffle it back into the other face down Tactics."
      ],
      [
        "If a Villain that has ascended to become a Mastermind resurrects this way, it stays a Mastermind and does not reenter the city."
      ]
    ]
  }
];