import { KeywordDefinition } from "../ruleTypes";

export const chivalrousduel: KeywordDefinition = [
  [
    "This keyword represents how Morgan le Fay, the knights of her “Queen’s Vengeance”, and Clan Yashida samurai hail from a realm of honorable single combat. You can’t gang up on an enemy in a Chivalrous Duel – you have to pick just one Hero Name to duel the enemy."
  ],
  {
    points: [
      [
        { bold: "To fight an enemy with “Chivalrous Duel,” you  can only use " },
        { icon: 1 },
        { bold: " from a single Hero Name." }
      ],
      [
        "For example, to fight a ",
        { bold: "3" },
        { icon: 1 },
        " Villain with Chivalrous Duel, you can spend ",
        { bold: "3" },
        { icon: 1 },
        " from two different Black Knight hero cards. But you can’t combine ",
        { bold: "2" },
        { icon: 1 },
        " from Black Knight cards and ",
        { bold: "1" },
        { icon: 1 },
        " from a Wasp card."
      ],
      [
        "If a Hero has no Hero Name listed, (like S.H.I.E.L.D. Trooper, or any Sidekick, or a Villain that became a Hero) then its Hero Name is the same as its card name. So you can play three S.H.I.E.L.D. Troopers then fight a ",
        { bold: "3" },
        { icon: 1 },
        " Villain with Chivalrous Duel. But you can’t spend ",
        { bold: "2" },
        { icon: 1 },
        " from Black Knight cards and ",
        { bold: "1" },
        { icon: 1 },
        " from a S.H.I.E.L.D. Trooper to fight an enemy with Chivalrous Duel."
      ],
      [
        "You can’t use ",
        { icon: 1 },
        " you get from anything that’s not a Hero card, including Microscopic Size-Changing Villains, Mastermind Tactics, Shard tokens from other sets, etc. You can use ",
        { icon: 1 },
        " from Hero Artifacts in other sets with the right Hero Name."
      ],
      [
        "In a setup with lots of Chivalrous Duels, like fighting Morgan le Fay or the Scheme “Pull Earth into Medieval Times,” you will want to build your deck to concentrate your ",
        { icon: 1 },
        " cards into just one or two Hero Names!"
      ]
    ]
  }
];