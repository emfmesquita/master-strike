export default {
  heroes: [
    {
      id: 208,
      name: "Adam Warlock",
      set: 28,
      team: 1,
      cards: [
        {
          name: "Transmute Matter",
          hc: 1,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { keyword: 66, text: "Burn 2 Shards" },
              ": Halve the cost of a Hero in the HQ this turn. ",
              { italic: "(Round the cost up.)" }
            ]
          ]
        },
        {
          name: "Regenerative Cocoon",
          hc: 4,
          rarity: 1,
          cost: 4,
          abilities: [
            [
              "To play this, you must discard a card."
            ],
            [
              "When you draw a new hand of cards at the end of this turn, draw two extra cards."
            ]
          ]
        },
        {
          name: "Soulblast",
          hc: 1,
          rarity: 2,
          cost: 5,
          abilities: [
            [
              "Gain 2 ",
              { rule: 1 },
              "."
            ],
            [
              { hc: 1 },
              ": ",
              { keyword: 66, text: "Burn 4 Shards" },
              ": Defeat a Villain."
            ]
          ]
        },
        {
          name: "Manifest the Soul Gem",
          hc: 3,
          rarity: 3,
          cost: 8,
          dense: true,
          abilities: [
            [
              "Gain 4 ",
              { rule: 1 },
              "."
            ],
            [
              { team: 1 },
              { team: 1 },
              ": ",
              { keyword: 66, text: "Burn 8 Shards" },
              ": Defeat the Mastermind once. Then reveal the top card of the Villain Deck. If it's a Master Strike, then Adam Warlock is corrupted by power. At the start of next turn, add the Magus Mastermind to the game with one random Tactic. ",
              { italic: "(If he has never been in this game.)" },
            ]
          ]
        },

      ]
    },
    {
      id: 209,
      name: "Captain Mar-Vell",
      set: 28,
      team: 1,
      cards: [
        {
          name: "Cosmic Awareness",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "If you would get ",
              { icon: 1 },
              " from ",
              { keyword: 41 },
              " this turn, gain that many ",
              { rule: 1 },
              " instead."
            ],
            [
              { keyword: 41, text: "Danger Sense 1" }
            ],
            [
              { hc: 3 },
              ": Instead, same effect with ",
              { keyword: 41, text: "Danger Sense 2" },
              "."
            ]
          ]
        },
        {
          name: "Kree Genetics",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "If you gained any ",
              { rule: 1 },
              " this turn, draw a card."
            ]
          ]
        },
        {
          name: "Channel the Nega-Bands",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "2",
          abilities: [
            [
              { team: 1 },
              ": Reveal the top card of your deck. If it costs 1 or more, gain a ",
              { rule: 1, text: "Shard" },
              ". If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Protector of the Universe",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 4" }
            ],
            [
              "If you gained any ",
              { rule: 1 },
              " this turn before playing this card, ",
              { keyword: 41, text: "Danger Sense 7" },
              " instead."
            ],
          ]
        },

      ]
    },
    {
      id: 210,
      name: "Moondragon",
      set: 28,
      team: 1,
      cards: [
        {
          name: "Peaceful Meditation",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "When you draw a new hand of cards at the end of this turn, if you didn't fight anything this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Psionic Warning",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 2" }
            ],
            [
              { hc: 2 },
              ": If this revealed any Scheme Twists, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Psychokinetic Blast",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "1+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 4" }
            ],
            [
              { team: 1 },
              ": If this revealed at least two Master Strikes, you may shuffle the Villain Deck."
            ]
          ]
        },
        {
          name: "Lunar Dragon Form",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 1" }
            ],
            [
              "If this revealed a Scheme Twist, you get ",
              { bold: "+3" },
              { icon: 1 },
              " and you may shuffle the Villain Deck."
            ],
          ]
        },

      ]
    },
    {
      id: 211,
      name: "Nebula",
      set: 28,
      team: 12,
      cards: [
        {
          name: "Ruthless Cyborg",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "Whenever you take any number of ",
              { rule: 1 },
              " from a Villain, Mastermind, or other player this turn, you may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "Galactic Rogue",
          hc: 2,
          rarity: 1,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "A Villain gains a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 2 },
              { hc: 5 },
              ": Take a ",
              { rule: 1, text: "Shard" },
              " from a Villain."
            ]
          ]
        },
        {
          name: "Illusion Device",
          hc: 5,
          rarity: 2,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 5 },
              ": Choose another player. Unless that player reveals a ",
              { hc: 1 },
              " Hero, take one of their ",
              { rule: 1 },
              " or “rescue“ a Bystander from their Victory Pile."
            ]
          ]
        },
        {
          name: "Daring Raid",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5",
          recruit: "0+",
          abilities: [
            [
              "Whenever you take any number of ",
              { rule: 1 },
              " from a Villain, Mastermind, or other player this turn, you get ",
              { bold: "+3" },
              { icon: 2 },
              "."
            ],
          ]
        },

      ]
    },
    {
      id: 212,
      name: "Nova",
      filterName: "Nova (ItC)",
      set: 28,
      team: 1,
      cards: [
        {
          name: "Draw From the Worldmind",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "0+",
          recruit: "0+",
          abilities: [
            "Draw a card.",
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " or ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Electromagnetic Wave",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          abilities: [
            [
              "Choose one: You get ",
              { bold: "+2" },
              { icon: 2 },
              ", or you gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 3 },
              ": Instead, do both."
            ]
          ]
        },
        {
          name: "Declare Galactic Threat",
          hc: 5,
          rarity: 2,
          cost: 6,
          abilities: [
            [
              "A Villain gains ",
              { keyword: 6 },
              { hc: 5 },
              " this turn. ",
              { italic: "(It loses any previous Cosmic Threat abilities and penalties it had.)" }
            ],
            "If there were no Villains in the city, draw two cards instead."
          ]
        },
        {
          name: "Mobilize the Nova Corps",
          hc: 3,
          rarity: 3,
          cost: 8,
          abilities: [
            [
              "Choose one: Draw three cards or a Mastermind gains ",
              { keyword: 6 },
              { hc: 3 },
              " this turn. ",
              { italic: "(It loses any previous Cosmic Threat abilities and penalties it had.)" }
            ],
          ]
        },

      ]
    },
    {
      id: 213,
      name: "Phyla-Vell",
      set: 28,
      team: 12,
      cards: [
        {
          name: "Channel Cosmic Power",
          hc: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Quantum Sword",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "If you have at least 4 ",
              { rule: 1 },
              ", you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Martyr",
          hc: 4,
          rarity: 2,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "If any player would gain a Wound, you may discard this card and gain 2 ",
              { rule: 1 },
              " instead."
            ]
          ]
        },
        {
          name: "Avatar of Oblivion",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            [
              "You may KO a card from your hand or discard pile. If you do, gain 2 ",
              { rule: 1 },
              "."
            ],
            [
              "Then, if you have at least 8 ",
              { rule: 1 },
              ", you get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 214,
      name: "Quasar",
      set: 28,
      team: 1,
      cards: [
        {
          name: "Manipulate Gravitons",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 1 },
              ": Whenever you recruit a Hero from the HQ this turn, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Cosmic Champion",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 66, text: "Burn a Shards" },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "The Quantum Bands",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "1",
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { keyword: 66, text: "Burn 2 Shards" },
              ": You man KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "The Star Brand",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Whenever you defeat a Villain or Mastermind this turn, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { keyword: 66, text: "Burn 4 Shards" },
              ": You get ",
              { bold: "+7" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 215,
      name: "Ronan the Accuser",
      set: 28,
      team: 0,
      cards: [
        {
          name: "Universal Weapon",
          hc: 5,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { keyword: 66, text: "Burn 2 Shards" },
              ": Draw two cards."
            ]
          ]
        },
        {
          name: "Rally Kree Warriors",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "Whenever you rescue a Bystander this turn, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 4 },
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Accuse Enemies of the Empire",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              { keyword: 68 },
              { hc: 5 },
              ". Each player that wins rescues a Bystander. If the Mastermind wins, it captures a Bystander."
            ]
          ]
        },
        {
          name: "Seek the Infinity Gems",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            [
              { keyword: 68 },
              { hc: 4 },
              ". Each other player that loses must lose a ",
              { rule: 1, text: "Shard" },
              ". Each player that wins gains 2 ",
              { rule: 1 },
              ". If the Mastermind wins, a Villain gains 2 ",
              { rule: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 216,
      name: "Yondu",
      set: 28,
      team: 12,
      cards: [
        {
          name: "Whistling Arrow",
          hc: 3,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Gain a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { hc: 3 },
              ": ",
              { keyword: 66, text: "Burn any number of Shards" },
              ": Defeat a Villain with printed VP equal to the number of Shards you turned. ",
              { italic: "(This can't affect a Villain with 0 VP or no printed VP.)" }
            ]
          ]
        },
        {
          name: "Interstellar Hunter",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 2" }
            ],
            [
              { hc: 1 },
              ": If this revealed any Master Strikes, draw a card."
            ]
          ]
        },
        {
          name: "Anticipate Their Movements",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "1+",
          abilities: [
            [
              { keyword: 41, text: "Danger Sense 3" }
            ],
            [
              { team: 12 },
              ": You may do the Fight effect of a Henchman Villain revealed this way. ",
              { italic: "(Don't defeat it.)" }
            ]
          ]
        },
        {
          name: "Space Pirate",
          hc: 5,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Choose one: Gain a Hero from the HQ for free, or gain a ",
              { rule: 1, text: "Shard" },
              " for each empty city space."
            ],
            [
              { team: 12 },
              { team: 12 },
              { team: 12 },
              ": Do both."
            ]
          ]
        },

      ]
    },
  ]
}