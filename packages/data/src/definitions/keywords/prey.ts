import { KeywordDefinition } from "../ruleTypes";

export const prey: KeywordDefinition = [
  [
    "Some Villains say things like “Ambush: Prey on the fewest ",
    { hc: 5 },
    ".” After this Villain enters the Sewers, each player reveals their hand, and you check which player has the fewest ",
    { hc: 5 },
    " cards. (The current player decides how to break ties, including ties of 0 ",
    { hc: 5 },
    " cards.) ",
    { bold: "Put this Villain in front of that player, “Preying” on them." }
  ],
  {
    points: [
      [
        "Any player may still fight that Villain as normal. However: ",
        { bold: "if no player defeats that Villain by the end of the preyed-on player's turn, use that Villain's “Finish the Prey”ability against that player, then that Villain enters the Sewers, ignoring its Ambush effects." }
      ],
      [
        { bold: "Important: Do the “Finish the Prey” ability after that player draws their new hand at end of turn." },
        " Some players like to lean the Prey Villain on their deck as a reminder to Finish the Prey then."
      ],
      "After Lady Deathstrike Finishes the Prey, or if you fight her while she's Preying on a player, return her to the Mastermind space. You still take one of her Tactics if you fight her while she's Preying.",
      "Multiple enemies can prey on a player at once."
    ]
  }
];