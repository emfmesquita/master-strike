import { RuleDefinition} from "../ruleTypes";

export const locations: RuleDefinition = [
  [
    "This card type represents infamous strongholds in the Marvel Universe."
  ],
  {
    points: [
      [
        "When a Location is played from the Villain Deck, place it above the nearest city space that does not have a Location. Leave enough room that Villains can move through the city as normal."
      ],
      [
        "Once placed, Locations don’t move. Villains don’t push Locations forward. You can have a Villain in a city space that has a Location above it."
      ],
      [
        "Most Locations specify special abilities that happen when you fight Villains in that space. Some Locations become stronger when there’s a Villain in that space. Some Villains and Masterminds say they become stronger based on Locations."
      ],
      [
        "You can fight a Location by spending the listed amount of ",
        { icon: 1 },
        ", putting it into your Victory Pile, and doing any Fight ability the Location may have.",
      ],
      [
        "If a new Location is played, and every city space already has a Location, then KO the Location with the lowest ",
        { icon: 1 },
        " to make room. (If tied, the current player chooses.) This might KO the newly played Location or one of the previous Locations.",
      ],
      [
        "In 1-player solo mode, when a Location tells “each other player” to do something, do it yourself."
      ],
    ]
  },
  [
    { bold: "Location Clarifications" }
  ],
  {
    points: [
      [
        { bold: "Locations do not count as Villains." },
        " Special abilities that mention Villains do not work on Locations."
      ],
      [
        "If a Mastermind or Scheme destroys a city space with a Location, KO that Location."
      ],
      [
        "A city space with a Location above it and no Villains still counts as “empty” for abilities like Last Stand."
      ],
      [
        "Each Mastermind in the set has at least one Tactic that becomes a Location. You win when the Mastermind has no face down Tactics left under them. You don’t also have to defeat all the Tactic cards that have turned into Locations in the city.",
      ],
      [
        "Locations don’t usually capture Bystanders, but some card abilities can make them capture Bystanders. Rescue them when you fight that Location."
      ],
    ]
  },
];