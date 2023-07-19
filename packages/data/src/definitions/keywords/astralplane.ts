import { KeywordDefinition } from "../ruleTypes";

export const astralplane: KeywordDefinition = [
  [
    "The Fear Lords are cruel demons that move themselves and others beyond the physical world to a realm of pure psychic energy. There they prey on the human psyche, evoking nightmare and terror. This is represented with new “Astral Plane” abilities."
  ],
  {
    points: [
      ["Some Villains say things like “Fight: If this Villain was in the city, it enters the Astral Plane.”"],
      ["The Astral Plane is a single, unique space that only exists in games with cards that use the Astral Plane. It sits immediately to the right of the Villain Deck."],
      [
        "While a Villain is in the Astral Plane, it has no physical form: ",
        { bold: "It can only be fought with " },
        { icon: 2 },
        { bold: ", not " },
        { icon: 1 },
        ". To fight a ",
        { bold: "5" },
        { icon: 1 },
        " Villain you must spend ",
        { bold: "5" },
        { icon: 2 },
        ". When you fight a Villain in the Astral Plane, put it in your Victory Pile and do its Fight effect as normal."
      ],
      [
        { bold: "When a Villain enters the Astral Plane, any Villain already there escapes. " },
        "This causes all the same effects as if that Villain had escaped the city (including KO’ing from the HQ, discarding from captured Bystanders, and Escape abilities)."
      ],
      [
        "Villains still get ",
        { bold: "-" },
        { icon: 1 },
        " and ",
        { bold: "+" },
        { icon: 1 },
        " bonuses while in the Astral Plane. You just use ",
        { icon: 2 },
        " to fight the total ",
        { icon: 1 },
        "."
      ],
      [
        "The Mastermind “Nightmare” can also enter the Astral Plane. While there, he can only be fought with ",
        { icon: 2 },
        ", not ",
        { icon: 1 },
        ". If he escapes the Astral Plane, do all the normal effects for a Villain escaping the city. Then do the Escape ability written on Nightmare, which moves him to the Mastermind space."
      ],
      ["The Astral Plane is not a city space. It’s not “adjacent” to any city spaces. Card effects can’t move or swap Villains to or from the Astral Plane unless they explicitly mention the Astral Plane."],
      ["Villains do Ambush effects when they enter the city. The Astral Plane is not part of the city, so Villains that enter the Astral Plane don’t do their Ambush effects at that time."],
      [
        "For keywords from other sets: To fight a “Chivalrous Duel” enemy in the Astral Plane, you must spend ",
        { icon: 2 },
        " from a single Hero name. You must spend ",
        { icon: 2 },
        " to use Excessive Violence or Human Shields from the Astral Plane. You can’t use “Piercing Energy” on enemies in the Astral Plane. “Bribe” and other cards that say “You can spend any combination of ",
        { icon: 2 },
        " and ",
        { icon: 1 },
        " to fight that Villain this turn.” do not work against enemies in the Astral Plane.",
      ]
    ]
  }
];