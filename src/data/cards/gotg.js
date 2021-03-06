export default {
  id: 7,
  heroes: [
    {
      id: 58,
      name: "Drax the Destroyer",
      team: 12,
      cards: [
        {
          name: "Knives of the Hunter",
          hc: 4,
          rarity: 1,
          cost: 3,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Interstellar Tracker",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { hc: 2 },
              ": You may KO the card you discarded this way."
            ]
          ]
        },
        {
          name: "The Destroyer",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              { team: 12 },
              ": Each other player reveals an ",
              { hc: 2 },
              " Hero or discards an Artifact they control. For each Artifact discarded this way, you gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Avatar of Destruction",
          hc: 2,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Double the ",
              { icon: 1 },
              " you have."
            ]
          ]
        }
      ]
    },
    {
      id: 59,
      name: "Gamora",
      team: 12,
      cards: [
        {
          name: "Bounty Hunter",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "2",
          abilities: [
            [
              "A Villain gains a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Deadliest Woman in the Universe",
          hc: 2,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Gain two ",
              { rule: 1 },
              "."
            ],
            [
              { hc: 1 },
              ": Gain another ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Galactic Assassin",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "A Villain of your choice gets no ",
              { icon: 1 },
              " from ",
              { rule: 1 },
              " this turn."
            ],
            [
              { hc: 1 },
              { hc: 1 },
              ": The Mastermind gets no ",
              { icon: 1 },
              " from ",
              { rule: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "Godslayer Blade",
          hc: 1,
          rarity: 3,
          cost: 8,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, gain two ",
              { rule: 1 },
              "."
            ],
            [
              "Once per turn, you may spend 5 ",
              { rule: 1 },
              " to get ",
              { bold: "+10" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 60,
      name: "Groot",
      team: 12,
      cards: [
        {
          name: "Prune the Growths",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 4 },
              ": You may KO a card from your hand or discard pile. If you do, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Surviving Sprig",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            "When you draw a new hand of cards at the end of this turn, draw an extra card."
          ]
        },
        {
          name: "Groot and Branches",
          hc: 1,
          rarity: 2,
          cost: 4,
          abilities: [
            [
              "Gain two ",
              { rule: 1 },
              ". You may spend Shards to get ",
              { icon: 2 },
              " this turn."
            ],
            [
              { hc: 1 },
              ": You may choose another player. That player gains a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "I Am Groot",
          hc: 4,
          rarity: 3,
          cost: 8,
          recruit: "5",
          abilities: [
            [
              "When you recruit your next Hero this turn, you gain ",
              { rule: 1 },
              " equal to that Hero's cost."
            ]
          ]
        }
      ]
    },
    {
      id: 61,
      name: "Rocket Raccoon",
      team: 12,
      cards: [
        {
          name: "Gritty Scavenger",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "You may discard a card. If you do, draw a card."
            ]
          ]
        },
        {
          name: "Trigger Happy",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { team: 12 },
              ": You gain a ",
              { rule: 1, text: "Shard" },
              " for each other ",
              { team: 12 },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Incoming Detector",
          hc: 2,
          rarity: 2,
          cost: 4,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Whenever a Master Strike or Villain's Ambush ability is completed, you may gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Vengeance is Rocket",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Master Strike in the KO pile and/or stacked next to the Mastermind."
            ]
          ]
        }
      ]
    },
    {
      id: 62,
      name: "Star-Lord",
      team: 12,
      cards: [
        {
          name: "Element Guns",
          hc: 3,
          rarity: 1,
          cost: 4,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Legendary Outlaw",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "Choose an Artifact any player controls with a “once per turn“ ability. Play a copy of one of those abilities."
            ]
          ]
        },
        {
          name: "Implanted Memory Chip",
          hc: 5,
          rarity: 2,
          cost: 6,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, draw a card."
            ]
          ]
        },
        {
          name: "Sentient Starship",
          hc: 3,
          rarity: 3,
          cost: 8,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, gain a ",
              { rule: 1, text: "Shard" },
              " for each Artifact you control."
            ]
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 18,
      name: "Supreme Intelligence of the Kree",
      tacticName: "Supreme Intelligence",
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "Supreme Intelligence of the Kree",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Kree Starforce"
            ],
            [
              { bold: "Master Strike" },
              ": The Supreme Intelligence gains a ",
              { rule: 1, text: "Shard" },
              ". Then each player reveals their hand and discards each with cost equal to, and cost one higher than, the number of Shards on the Supreme Intelligence."
            ]
          ]
        },
        {
          name: "Combined Knowledge of All Kree",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The Supreme Intelligence gains a ",
              { rule: 1, text: "Shard" },
              " for each Kree Villain in the city and/or the Escape Pile."
            ]
          ]
        },
        {
          name: "Cosmic Omniscience",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The Supreme Intelligence gains a ",
              { rule: 1, text: "Shard" },
              " for each Master Strike in the KO pile."
            ]
          ]
        },
        {
          name: "Countermeasure Protocols",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The Supreme Intelligence gains a ",
              { rule: 1, text: "Shard" },
              " for each Mastermind Tactic (including this one) in any player's Victory Pile."
            ]
          ]
        },
        {
          name: "Guide Kree Evolution",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The Supreme Intelligence and Kree Villains in the city each gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 19,
      name: "Thanos",
      vAttack: "24",
      vp: 7,
      cards: [
        {
          name: "Thanos",
          vAttackAsterisk: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": Infinity Gems"
            ],
            [
              "Thanos gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each Infinity Gem Artifact card controlled by any player."
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals their hand and puts one of their non-grey Heroes next to Thanos in a “Bound Souls“ pile."
            ]
          ]
        },
        {
          name: "Centuries of Envy",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards an Infinity Gem Artifact card they control."
            ]
          ]
        },
        {
          name: "God of Death",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and gains a Wound for each card that player has with the same card name as any card in Thanos' Bound Souls pile."
            ]
          ]
        },
        {
          name: "Keeper of Souls",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Gain a Hero from Thanos' Bound Souls pile. Then each other player puts a non-grey Hero from their discard pile into Thanos' Bound Souls pile."
            ]
          ]
        },
        {
          name: "The Mad Titan",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and discards all cards with the same card name as any card in Thanos' Bound Souls pile."
            ]
          ]
        }
      ]
    },
  ],
  villains: [
    {
      id: 25,
      name: "Kree Starforce",
      cards: [
        {
          name: "Captain Atlas",
          qtd: 1,
          vAttack: "6+",
          vp: "4",
          abilities: [
            [
              "Captain Atlas gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { rule: 1, text: "Shard" },
              " on the Mastermind."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player loses a ",
              { rule: 1, text: "Shard" },
              ". Each player that cannot do so gains a Wound."
            ]
          ]
        },
        {
          name: "Demon Druid",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Another Villain in the city gains two ",
              { rule: 1 },
              "."
            ]
          ]
        },
        {
          name: "Dr. Minerva",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each Kree Villain in the city gains a ",
              { rule: 1, text: "Shard" },
              { italic: " (including this Villain)." }
            ]
          ]
        },
        {
          name: "Korath the Pursuer",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player may draw a card. Korath gains a ",
              { rule: 1, text: "Shard" },
              " for each card drawn this way."
            ],
            [
              {
                bold: "Escape"
              },
              ": If Korath had any ",
              { rule: 1 },
              ", each player gains a Wound."
            ]
          ]
        },
        {
          name: "Ronan the Accuser",
          qtd: 1,
          vAttack: "7",
          vp: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player simultaneously points their finger to accuse another player. Each player who was accused the most gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Shatterax",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Put a ",
              { rule: 1, text: "Shard" },
              " on each Hero in the HQ. When a player gains that Hero, they gain that ",
              { rule: 1, text: "Shard" },
              ". If that Hero leaves the HQ some other way, return that ",
              { rule: 1, text: "Shard" },
              " to the supply."
            ]
          ]
        },
        {
          name: "Supremor",
          qtd: 2,
          vAttack: "3",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Supremor and the Mastermind each gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 26,
      name: "Infinity Gems",
      cards: [
        {
          name: "Mind Gem",
          qtd: 1,
          vAttack: "6",
          vp: "0",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Mind Gem gains a ",
              { rule: 1, text: "Shard" },
              " for each Scheme Twist in the KO pile and/or stacked next to the Scheme."
            ],
            [
              {
                bold: "Fight"
              },
              ": Put this into your discard pile as an Artifact."
            ],
            [
              { keyword: 13, text: "Artifact -"},
              " Once per turn, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Power Gem",
          qtd: 1,
          vAttack: "7",
          vp: "0",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Power Gem gains a ",
              { rule: 1, text: "Shard" },
              " for each Master Strike in the KO pile and/or stacked next to the Mastermind."
            ],
            [
              {
                bold: "Fight"
              },
              ": Put this into your discard pile as an Artifact."
            ],
            [
              { keyword: 13, text: "Artifact -"},
              " Once per turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Reality Gem",
          qtd: 2,
          vAttack: "5",
          vp: "0",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Reality Gem gains a ",
              { rule: 1, text: "Shard" },
              " for each Infinity Gem Villain card in the city and/or Escape pile."
            ],
            [
              {
                bold: "Fight"
              },
              ": Put this into your discard pile as an Artifact."
            ],
            [
              { keyword: 13, text: "Artifact -"},
              " Before you play a card from the Villain Deck, you may first reveal the top card of the Villain Deck. If it's not a Scheme Twist, you may put it on the bottom of the Villain Deck. If you do, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Soul Gem",
          qtd: 1,
          vAttack: "6",
          vp: "0",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Soul Gem gains a ",
              { rule: 1, text: "Shard" },
              " for each Villain in the city."
            ],
            [
              {
                bold: "Fight"
              },
              ": Put this into your discard pile as an Artifact."
            ],
            [
              { keyword: 13, text: "Artifact -"},
              " Whenever you defeat a Villain, put a ",
              { rule: 1, text: "Shard" },
              " on Soul Gem from the supply. Once per turn, you get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the number of Shards on Soul Gem."
            ]
          ]
        },
        {
          name: "Space Gem",
          qtd: 2,
          vAttack: "5",
          vp: "0",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Space Gem gains a ",
              { rule: 1, text: "Shard" },
              " for each empty space in the city."
            ],
            [
              {
                bold: "Fight"
              },
              ": Put this into your discard pile as an Artifact."
            ],
            [
              { keyword: 13, text: "Artifact -"},
              " Once per turn, you may move a Villain to another city space. If another Villain is already there, swap them. If you moved any Villains this way, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Time Gem",
          qtd: 1,
          vAttack: "6",
          vp: "0",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Play another card from the Villain Deck. Time Gem gains ",
              { rule: 1 },
              " equal to that card's printed Victory Points."
            ],
            [
              {
                bold: "Fight"
              },
              ": Put this into your discard pile as an Artifact."
            ],
            [
              { keyword: 13, text: "Artifact -"},
              " When you play this Artifact, take another turn after this one. Use this ability only if this is the fist time any player has played the Time Gem this game."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 33,
      name: "Forge the Infinity Gauntlet",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Always include the Infinity Gems Villain Group."
            ],
            [
              { bold: "Twist" },
              ": Starting to your left and going clockwise, the first player with an Infinity Gem Artifact card in play or in their discard pile chooses on of those Infinity Gems to enter the city. Then put a ",
              { rule: 1, text: "Shard" },
              " on each Infinity Gem in the city."
            ],
            [
              { bold: "Evil Wins" },
              ": When 6 Infinity Gem Villains are in the city and/or the Escape Pile."
            ],
            [
              { bold: "Evil Wins" },
              ": When a player controls 4 Infinity Gem Artifacts, that player is corrupted by power. That player wins, Evil wins, and all other players lose."
            ],
          ]
        },
      ]
    },
    {
      id: 34,
      name: "Intergalactic Kree Nega-Bomb",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Make a face down 'Nega-Bomb Deck' of 6 Bystanders."
            ],
            [
              { bold: "Twist" },
              ": Shuffle this Twist into the Nega-Bomb Deck. Then reveal a random card from that deck. If it's a Bystander, rescue it. If it's a Twist, KO it, KO all Heroes from the HQ, and each player gains a Wound."
            ],
            [
              { bold: "Evil Wins" },
              ": When 16 non-grey Heroes are in the KO pile."
            ],
          ]
        },
      ]
    },
    {
      id: 35,
      name: "Kree-Skrull War, The",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Always include Kree Starforce and Skrull Villain Groups."
            ],
            [
              { bold: "Twists 1-7" },
              ": All Kree and Skrulls escape from the city. Then, if there are more Kree than Skrulls in the Escape Pile, stack this Twist next to the Mastermind as a Kree Conquest. If there are more Skrulls than Kree in the Escape Pile, stack this Twist next to the Villain Deck as a Skrull Conquest."
            ],
            [
              { bold: "Twist 8" },
              ": Stack this Twist on the side with the most Conquests."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 4 Kree Conquests or 4 Skrull Conquests."
            ],
          ]
        },
      ]
    },
    {
      id: 36,
      name: "Unite the Shards",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 30 ",
              { rule: 1 },
              " in the supply. Twists equal to the number of players plus 5."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme. Then for each Twist in that stack, the Mastermind gains a ",
              { rule: 1, text: "Shard" },
              "."
            ],
            [
              { bold: "Special Rules" },
              ": During your turn, any number of times, you may spend ",
              { bold: "2" },
              { icon: 2 },
              " to gain one of the Mastermind's ",
              { rule: 1 },
              "."
            ],
            [
              { bold: "Evil Wins" },
              ": When the Mastermind has 10 ",
              { rule: 1 },
              " or when there are no more ",
              { rule: 1 },
              " in the supply.",
            ],
          ]
        },
      ]
    },
  ]
}