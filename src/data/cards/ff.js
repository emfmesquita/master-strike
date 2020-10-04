export default {
  heroes: [
    {
      id: 33,
      name: "Human Torch",
      set: 4,
      team: 5,
      cards: [
        {
          name: "Call for Backup",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              "You may KO a Wound from your hand or discard pile. If you do, you get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              },
              "."
            ]
          ]
        },
        {
          name: "Hothead",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "4",
          abilities: [
            [
              "You gain a Wound."
            ]
          ]
        },
        {
          name: "Flame On!",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              { keyword: 4, text: "Focus 6" },
              { icon: 2 },
              { icon: 5 },
              " You get ",
              { bold: "+4 " },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Nova Flame",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [
              {
                team: 5
              },
              ": You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              " for each city space that contains a Villain."
            ]
          ]
        }
      ]
    },
    {
      id: 34,
      name: "Invisible Woman",
      set: 4,
      team: 5,
      cards: [
        {
          name: "Disappearing Act",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              {
                keyword: 4, text: "Focus 2"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              "You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Four of a Kind",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "If you played any other cards that cost 4 ",
              {
                icon: 3
              },
              " this turn, you get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Unseen Rescue",
          hc: 1,
          rarity: 2,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              { icon: 5 },
              " Rescue a Bystander. You may only use this ability up to four times this turn.",
            ]
          ]
        },
        {
          name: "Invisible Barrier",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "If an ambush effect would occur, you may reveal this card and draw two cards instead."
            ]
          ]
        }
      ]
    },
    {
      id: 35,
      name: "Mr. Fantastic",
      set: 4,
      team: 5,
      cards: [
        {
          name: "Twisting Equations",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              {
                keyword: 4, text: "Focus 2"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              "When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Unstable Molecules",
          hc: 5,
          rarity: 1,
          cost: 5,
          abilities: [
            "Draw two cards."
          ]
        },
        {
          name: "One Gigantic Hand",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "1+",
          abilities: [
            [
              {
                team: 5
              },
              ": You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              " for each card in your hand."
            ]
          ]
        },
        {
          name: "Ultimate Nullifier",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "If an Enemy you fight this turn would have a fight effect, you may cancel that effect instead."
            ],
            [
              {
                keyword: 4, text: "Focus 1"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              " You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              " usable only against the Mastermind."
            ]
          ]
        }
      ]
    },
    {
      id: 36,
      name: "Silver Surfer",
      set: 4,
      team: 0,
      cards: [
        {
          name: "Warp Speed",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              { icon: 5 },
              "Draw a card."
            ]
          ]
        },
        {
          name: "Epic Destiny",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 6" },
              { icon: 2 },
              { icon: 5 },
              " Defeat a Villain of ",
              { bold: "5 " },
              { icon: 1 },
              " or ",
              { bold: "6 " },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "The Power Cosmic",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "3",
          abilities: [
            [
              { keyword: 4, text: "Focus 9" },
              { icon: 2 },
              { icon: 5 },
              " You get ",
              { bold: "+9 " },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Energy Surge",
          hc: 3,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Double the ",
              { icon: 2 },
              " you have."
            ]
          ]
        }
      ]
    },
    {
      id: 37,
      name: "Thing",
      set: 4,
      team: 5,
      cards: [
        {
          name: "It Started on Yancy Street",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              {
                team: 5
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 2
              },
              "."
            ]
          ]
        },
        {
          name: "Knuckle Sandwich",
          hc: 4,
          rarity: 1,
          cost: 5,
          recruit: "3",
          attack: "0+",
          abilities: [
            [
              {
                keyword: 4, text: "Focus 3"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              "You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Crime Stopper",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            "Whenever you defeat a Villain in the Bank this turn, rescue a Bystander.",
            [
              {
                keyword: 4, text: "Focus 1"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              "Move a Villain to an adjacent city space. If another Villain is already there, swap them."
            ]
          ]
        },
        {
          name: "It's Clobberin' Time!",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              {
                hc: 4
              },
              ": You get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              "for each other ",
              {
                hc: 4
              },
              "card you played this turn."
            ]

          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 10,
      name: "Galactus",
      set: 4,
      vAttack: "20",
      vp: 7,
      cards: [
        {
          name: "Galactus",
          vAttackAsterisk: true,
          dense: true,
          abilities: [
            [
              { keyword: 6 },
              ": ",
              { hc: 4 },
              { hc: 2 },
              { hc: 1 },
              { hc: 5 },
              { hc: 3 },
            ],
            [
              { bold: "Always Leads" },
              ": Heralds of Galactus"
            ],
            [
              { bold: "Master Strike" },
              ": Destroy the city space closest to Galactus. Any Villain there escapes. Put this Master Strike there."
            ],
            [
              { bold: "Galactus Wins" },
              ": When the city is destroyed."
            ]
          ]
        },
        {
          name: "Cosmic Entity",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose ",
              { hc: 4 },
              ", ",
              { hc: 2 },
              ", ",
              { hc: 1 },
              ", ",
              { hc: 5 },
              " or ",
              { hc: 3 },
              ". Each player reveals any number of cards of that class, then draws that many cards."
            ]
          ]
        },
        {
          name: "Force of Eternity",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": When you draw a new hand of cards at the end of this turn, draw six extra cards, then discard six cards."
            ]
          ]
        },
        {
          name: "Panicked Mobs",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose ",
              { hc: 4 },
              ", ",
              { hc: 2 },
              ", ",
              { hc: 1 },
              ", ",
              { hc: 5 },
              " or ",
              { hc: 3 },
              ". Each player reveals any number of cards of that class, then rescues that many Bystanders."
            ]
          ]
        },
        {
          name: "Sunder the Earth",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player KOs all Heroes from their discard pile with the same card name as a Hero in the HQ."
            ]
          ]
        }
      ]
    },
    {
      id: 11,
      name: "Mole Man",
      set: 4,
      vAttack: "7",
      vp: 6,
      cards: [
        {
          name: "Mole Man",
          vAttack: "7+",
          abilities: [
            [
              "Mole Man gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Subterranea Villain that has escaped."
            ],
            [
              { bold: "Always Leads" },
              ": Subterranea"
            ],
            [
              { bold: "Master Strike" },
              ": All Subterranea Villains in the city escape. If any Villains escaped this way, each player gains a Wound."
            ]
          ]
        },
        {
          name: "Dig to Freedom",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player chooses a Subterranea Villain in their Victory Pile and puts it into the Escaped Villains pile."
            ]
          ]
        },
        {
          name: "Master of Monsters",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, reveal the top six cards of the Villain Deck. Play all the Subterranea Villains you revealed. Put the rest on the bottom of the Villain Deck in random order."
            ]
          ]
        },
        {
          name: "Secret Tunnel",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+6" },
              { icon: 1 },
              " usable only against Villains in the Streets."
            ]
          ]
        },
        {
          name: "Underground Riches",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+6" },
              { icon: 2 },
              " usable only to recruit Heroes in the HQ space under the Streets."
            ]
          ]
        }
      ]
    },
  ],
  schemes: [
    {
      id: 17,
      name: "Bathe the Earth in Cosmic Rays",
      set: 4,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists."
            ],
            [
              { bold: "Twist" },
              ": Each player in turn does the following: Reveal your hand. KO one of your non-grey Heroes. Choose a Hero from the HQ with the same or lower cost and put it into your hand."
            ],
            [
              { bold: "Evil Wins" },
              ": When the number of non-grey Heroes in the KO pile is six times the number of players."
            ],
          ]
        },
      ]
    },
    {
      id: 18,
      name: "Flood the Planet with Melted Glaciers",
      set: 4,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist" },
              ": Stack the Twist next to the Scheme as “Rising Waters.“ Then KO each Hero from the HQ whose cost is less than or equal to the number of Rising Waters in that stack."
            ],
            [
              { bold: "Evil Wins" },
              ": When 20 non-grey Heroes are KO'd."
            ],
          ]
        },
      ]
    },
    {
      id: 19,
      name: "Invincible Force Field",
      set: 4,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Mastermind as a “Force Field.“"
            ],
            [
              { bold: "Special Rules" },
              ": To fight the Mastermind, you must also spend ",
              { bold: "1" },
              { icon: 1 },
              " or ",
              { bold: "1" },
              { icon: 2 },
              " for each Force Field next to them."
            ],
            [
              { bold: "Twist 7" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 20,
      name: "Pull Reality Into the Negative Zone",
      set: 4,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist 2, 4, and 6" },
              ": Until the next Twist, Enemies cost ",
              { icon: 2 },
              " to fight and Heroes cost ",
              { icon: 1 },
              " to recruit."
            ],
            [
              { bold: "Twist 7" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
  ]
}