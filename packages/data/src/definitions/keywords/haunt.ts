import { KeywordDefinition } from "../ruleTypes";

export const haunt: KeywordDefinition = [
  [
    "Zarathos and his Fallen can control Heroes' bodies like twisted puppets. They say things like “Ambush: Haunt the rightmost unhaunted Hero in the HQ.",
  ],
  {
    points: [
      [
        "This means: ",
        { bold: "Tuck this Villain beneath that Hero, 'Haunting' it, so you can see the Villain's name. Players can't recruit that Haunted Hero while the Haunting Villain is under it." },
      ],
      [
        "Instead, a player can spend ",
        { icon: 1 },
        " equal to ",
        { underlined: "the Haunted Hero's cost" },
        " to “exorcise” that Haunted Hero. If a player does, they either KO the Haunted Hero or choose a player to gain it. Then the Haunting Villain enters the city, ignoring any Ambush effects it has.",
      ],
      [
        "While a Villain is Haunting a Hero, you can't fight the Haunting Villain itself - you have to spend ",
        { icon: 1 },
        " to exorcise the Haunted Hero first, driving the Haunting Villain into the city so you can finish it off there.",
      ],
      [
        "Exorcizing a Haunted Hero is not a “fight” - don't do any Fight abilities on the Haunting Villain. ",
      ],
      [
        "A Hero can't be Haunted by two Villains at once. Haunt abilities all say to Haunt an “unhaunted Hero.”",
      ],
      [
        "Zarathos’ Master Strikes and Tactics can cause him to Haunt a Hero in the same way. Exorcizing that Hero drives Zarathos back to the Mastermind space.",
      ],
      [
        "A “Haunted Hero” is still a Hero, so it can still be affected by things that affect Heroes in the HQ. A Villain escaping the city that KOs a Hero from the HQ (that costs 6 or less) can KO a Haunted Hero. Card effects that let you “gain a Hero from the HQ” or “Put a Hero from the HQ on the bottom of the Hero Deck” still work on Haunted Heroes. However, card effects that say “recruit a Hero from the HQ for free” don't work on Haunted Heroes, since you can't recruit them.",
      ],
      [
        "If something causes a Haunted Hero to leave the HQ, then the Haunting Villain stays in that HQ space and Haunts the new Hero that arrives to refill that HQ space.",
      ],
      [
        "If an HQ space is “destroyed,” KO any Haunted Hero there and the Haunting Villain there enters the city, ignoring any Ambush effects.",
      ],
    ]
  }
];