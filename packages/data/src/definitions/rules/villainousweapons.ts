import { RuleDefinition} from "../ruleTypes";

export const villainousweapons: RuleDefinition = [
  [
    "Villains and Masterminds can capture these ancient weapons to become even more powerful. But if you defeat them, you can seize those weapons to use as ",
    { keyword: 13, text: "Artifacts" },
    " of your own. Some of them also have Ambush effects, which happen when they enter the city captured by a Villain."
  ],
  {
    points: [
      [
        "Villainous Weapons are not Villains."
      ],
      [
        "When a Villainous Weapon is played from the Villain Deck, ",
        { bold: "the Weapon is captured by the Villain in the city that’s closest to the Villain Deck. If there are no Villains in the city, then KO the Weapon instead." }
      ],
      [
        "Villainous Weapons empower the Villain holding them, adding the ",
        { icon: 1 },
        " bonus printed on the Weapon. Tuck the Weapon under the Villain so you can see the Weapon’s ",
        { icon: 1 },
        " bonus right under the Villain’s ",
        { icon: 1 },
        "."
      ],
      [
        "An enemy can use any number of Weapons at the same time, getting all of their bonuses combined."
      ],
      [
        { bold: "When a Villain with any number of Villainous Weapons escapes the city, the Mastermind captures all those Weapons" },
        ", getting their ",
        { icon: 1 },
        " bonuses."
      ],
      [
        "When you fight a Villain or Mastermind holding any number of Weapons, ",
        { bold: "put all those Weapons into your discard pile as Artifacts." }
      ],
      [
        "When you have a Villainous Weapon in your hand, you can play it just like any other ",
        { keyword: 13 },
        "."
      ],
      [
        { bold: "You never get the Weapon’s printed " },
        { icon: 1 },
        { bold: " bonus" },
        " when you play the Artifact or control it. Only Villains and Masterminds get that ",
        { icon: 1 },
        " bonus. You only get the specific Artifact abilities written on the card."
      ],
      [
        "Villainous Weapons you have captured as Artifacts ",
        { bold: "have 0 cost" },
        ", have no color or Hero Class, and don’t count as Hero cards or Villain cards. Since they have no cost, Villainous Weapons can never make you Worthy. (How appropriate…)",
      ],
      [
        "If you have gained a Villainous Weapon, and a card effect makes an enemy capture that Weapon again, then it works as a Villainous Weapon again until someone defeats that enemy to reclaim it."
      ],
      [
        "Malekith, Hela, and Ronan have Mastermind Tactics that turn into Villainous Weapons. You win when the Mastermind has no face down Tactics left under them, even if there are still some Tactics that have turned into other card types."
      ]
    ]
  }
];