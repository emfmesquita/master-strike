import { RuleDefinition} from "../ruleTypes";

export const shards: RuleDefinition = [
    [
      "“Shard“ tokens represents cosmic energy. These tokens can be gained by players, Villains, and Masterminds. Many players like to personalize their Shards by using glass beads, wooden cubes, or plastic tokens instead. There is no limit to the number of Shards that can be in the game at once. (This is a change from the past, when the number of Shards was limited.)"
    ],
    {
      points: [
        [
          { bold: "Players:" },
          " When you gain a Shard, put it in front of you. ",
          { bold: "You can spend a Shard to get +1" },
          { icon: 1 },
          " (returning the Shard to the supply). You can use a Shard immediately, or you can keep to use on any future turn. You can spend as many Shards as you wish in a single turn. Shards are not worth Victory Points."
        ],
        [
          { bold: "Villains:" },
          " When a Villain gains Shards, put them on that Villain. That Villain gets ",
          { bold: "+1" },
          { icon: 1 },
          " for each Shard it has. After you defeat a Villain, ",
          { bold: "you take one of its Shards" },
          ". Return the rest of that Villain's Shards to the supply. When a Villain escapes, ",
          { bold: "the Mastermind gains one of the Shards on that Villain" },
          ". Return the rest to the supply."
        ],
        [
          { bold: "Masterminds:" },
          " When a Mastermind gains Shards, put them on that Mastermind. That Mastermind gets ",
          { bold: "+1" },
          { icon: 1 },
          " for each Shard it has. After you fight a Mastermind, ",
          { bold: "you take one of its Shards" },
          ". Return the rest to the supply. Then do the Fight effect on the Mastermind Tactic, which might give the Mastermind additional Shards."
        ],
      ]
    }
  ];