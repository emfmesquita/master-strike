export default {
  heroes: [
    {
      id: 71,
      name: "Apocalyptic Kitty Pryde",
      set: 10,
      team: 4,
      cards: [
        {
          name: "Phase Out",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile. If you do, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Infiltrate HQ",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "You may put a Hero from the HQ on the bottom of the Hero Deck. The Hero that replaces it in the HQ costs 1 less during this turn."
            ]
          ]
        },
        {
          name: "Disrupt Circuits",
          hc: 1,
          hc2: 5,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1 " },
              { icon: 1 },
              " for each ",
              { hc: 5 },
              " Hero in the HQ."
            ]
          ]
        },
        {
          name: "Untouchable",
          hc: 1,
          rarity: 3,
          cost: 7,
          recruit: "5",
          abilities: [
            "When any player defeats a Villain or Mastermind with a “Fight“ effect, you may discard this card to cancel that fight effect. If you do, draw three cards."
          ]
        }
      ]
    },
    {
      id: 72,
      name: "Black Bolt",
      set: 10,
      team: 15,
      cards: [
        {
          name: "Destructive Whisper",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " if you reveal four cards with no rules text."
            ]
          ]
        },
        {
          name: "Speak No Words",
          hc: 1,
          hc2: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "1",
          abilities: [
            [

            ]
          ]
        },
        {
          name: "Silence is Golden",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4+",
          recruit: "0+",
          abilities: [
            [
              "Choose a card you played this turn with no rules text. You get its ",
              { icon: 2 },
              " and ",
              { icon: 1 },
              " again."
            ]
          ]
        },
        {
          name: "Hypersonic Scream",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "3",
          abilities: [
            "For each card with no rules text you played this turn, draw a card."
          ]
        }
      ]
    },
    {
      id: 73,
      name: "Black Panther",
      set: 10,
      team: 15,
      cards: [
        {
          name: "Catlike Reflexes",
          hc: 2,
          hc2: 1,
          rarity: 1,
          cost: 3,
          recruit: "1",
          abilities: [
            "Draw a card."
          ]
        },
        {
          name: "Multifaceted Genius",
          hc: 4,
          hc2: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other multicolored card you played this turn."
            ]
          ]
        },
        {
          name: "Stalk the Urban Jungle",
          hc: 4,
          hc2: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            "Whenever you defeat a Villain on the Rooftops or Streets this turn, you may KO one of your cards or a card from your discard pile."
          ]
        },
        {
          name: "King of Wakanda",
          hc: 2,
          hc2: 5,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Gain three ",
              { rule: 11 },
              "."
            ],
            [
              { team: 15 },
              ": Put them on top of your deck."
            ]
          ]
        }
      ]
    },
    {
      id: 74,
      name: "Captain Marvel",
      set: 10,
      team: 1,
      cards: [
        {
          name: "Absorb Energies",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { hc: 3 },
              ": For each other ",
              { hc: 3 },
              " Hero you have played this turn, you get",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Supersonic Flight",
          hc: 4,
          hc2: 3,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Marvelous Strength",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { hc: 4 },
              ": For each other ",
              { hc: 4 },
              " Hero you have played this turn, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Cosmic Energies",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              { hc: 4 },
              { hc: 4 },
              { hc: 3 },
              { hc: 3 },
              ": You get ",
              { bold: "+6" },
              { icon: 1 },
              "."
            ]

          ]
        }
      ]
    },
    {
      id: 75,
      name: "Dr. Strange",
      set: 10,
      team: 15,
      cards: [
        {
          name: "Cloak of Levitation",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 3 },
              ": Reveal the top card of your deck. Draw it or ",
              { keyword: 1 },
              " it.",

            ]
          ]
        },
        {
          name: "Trust Me, I'm a Doctor",
          hc: 2,
          hc2: 3,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            [
              { team: 15 },
              ": You may KO a card from your hand or discard pile. If you do, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Fight the Future",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { hc: 2 },
              ": Reveal the top card of the Villain Deck. If it's a Villain, you get ",
              { bold: "+2" },
              { icon: 1 },
              " and may fight that Villain this turn."
            ]
          ]
        },
        {
          name: "Sorcerer Supreme ",
          hc: 1,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Reveal the top three cards of your deck. Draw any number of them and ",
              { keyword: 1 },
              " the rest."
            ]

          ]
        }
      ]
    },
    {
      id: 76,
      name: "Lady Thor",
      set: 10,
      team: 1,
      cards: [
        {
          name: "Mysterious Origin",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "Once per turn, if you made at least ",
              { bold: "6" },
              { icon: 2 },
              " this turn, draw a card."
            ]
          ]
        },
        {
          name: "Chosen by Asgard",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              "Once per turn, if you made at least ",
              { bold: "6" },
              { icon: 2 },
              " this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Heir to the Hammer",
          hc: 4,
          hc2: 3,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              { hc: 4 },
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Living Thunderstorm",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "0+",
          recruit: "4",
          abilities: [
            [
              "Once per turn, if you made at least ",
              { bold: "6" },
              { icon: 2 },
              " this turn, you get ",
              { bold: "+6" },
              { icon: 1 },
              "."
            ]

          ]
        }
      ]
    },
    {
      id: 77,
      name: "Magik",
      set: 10,
      team: 4,
      cards: [
        {
          name: "Rally the New Mutants",
          hc: 1,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Gain a ",
              { rule: 11, text: "Sidekick" },
              ".",
            ],
            [
              { hc: 1 },
              ": Gain another ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Travel through Limbo",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 1 },
            [
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Dimensional Portal",
          hc: 1,
          hc2: 3,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            { keyword: 1 },
            [
              "For each ",
              { rule: 11, text: "Sidekick" },
              " you played this turn, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Wield the Soulsword",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "2+",
          abilities: [
            { keyword: 1 },
            [
              "Choose a Villain or Mastermind in your Victory Pile. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to its printed VP."
            ]

          ]
        }
      ]
    },
    {
      id: 78,
      name: "Maximus",
      set: 10,
      team: 14,
      cards: [
        {
          name: "Mental Domination",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 1 },
              ": Defeat a Henchman Villain for free"
            ]
          ]
        },
        {
          name: "Enslave the Will",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 5 },
              ": Whenever you defeat a Villain this turn, you gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Pieces on a Chessboard",
          hc: 1,
          hc2: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            "You may have a Henchman Villain from your Victory Pile enter the city. If you do, draw a card."
          ]
        },
        {
          name: "Inhuman Mastery",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Each other player reveals a",
              { hc: 5 },
              " hero or chooses a Henchman Villain from their Victory Pile. You defeat all those Henchmen for free."
            ],
            [
              { team: 14 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "for each Henchman you defeated this turn."
            ]

          ]
        }
      ]
    },
    {
      id: 79,
      name: "Namor, the Sub-Mariner",
      set: 10,
      team: 14,
      cards: [
        {
          name: "Lead the Armies of Atlantis",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 2 },
              ": Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Ruler of the Seas ",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              ", usable only against Villains on the Bridge or the Mastermind."
            ]
          ]
        },
        {
          name: "Feed the Shark",
          hc: 4,
          hc2: 2,
          rarity: 2,
          cost: 6,
          attack: "2",
          abilities: [
            "You may KO a card from your hand or discard pile. If you do, draw a card."
          ]
        },
        {
          name: "Imperius Rex",
          hc: 4,
          rarity: 3,
          cost: 7,
          abilities: [
            "Defeat a Villain for free.",
            [
              { hc: 4 },
              { hc: 4 },
              { hc: 2 },
              { hc: 2 },
              ": Instead, defeat the Mastermind once for free."
            ]
          ]
        }
      ]
    },
    {
      id: 80,
      name: "Old Man Logan",
      set: 10,
      team: 4,
      cards: [
        {
          name: "Last Survivor",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { hc: 2 },
              ": You may KO a card from your hand or discard pile. If you KO a wound this way, draw a card."
            ]
          ]
        },
        {
          name: "Loner ",
          hc: 2,
          hc2: 1,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "If you don't recruit any heroes this turn, you get .",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Rage Out",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { hc: 2 },
              { keyword: 17, text: ": Cross-Dimensional Wolverine Rampage." },
              " For each other player who gained a Wound this way, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "No More Heroes",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              "Reveal your hand. You get ",
              { bold: "+5" },
              { icon: 1 },
              " if you haven't played any ",
              { team: 2 },
              " or ",
              { team: 13 },
              " cards this turn and don't have any in your hand."
            ]
          ]
        }
      ]
    },
    {
      id: 81,
      name: "Proxima Midnight",
      set: 10,
      team: 14,
      cards: [
        {
          name: "Inspiration Through Power",
          hc: 2,
          hc2: 1,
          rarity: 1,
          cost: 2,
          attack: "1",
          recruit: "1",
          abilities: []
        },
        {
          name: "Master Combatant",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "If the most recent Hero you have played this turn has a ",
              { icon: 2 },
              " icon, you get ",
              { bold: "+2" },
              { icon: 2 },
              ". If it has an ",
              { icon: 1 },
              " icon, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "General of the Black Order",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3",
          recruit: "0+",
          abilities: [
            [
              { hc: 2 },
              ": You get ",
              { bold: "+3 " },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Supernova Spear",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "4+",
          recruit: "4+",
          abilities: [
            [
              { hc: 1 },
              ": You get ",
              { bold: "+4" },
              { icon: 2 },
              " and ",
              { bold: "+4" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 82,
      name: "Superior Iron Man",
      set: 10,
      team: 15,
      cards: [
        {
          name: "Armor Upgrades",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { hc: 5 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Optimized Technology",
          hc: 5,
          hc2: 3,
          rarity: 1,
          cost: 5,
          attack: "2",
          abilities: [
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Superior to Others",
          hc: 3,
          rarity: 2,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 3 },
              ": Look at the top two cards of your deck. If one of them has a higher cost than the other, draw it. Put the rest back in any order.",
            ]
          ]
        },
        {
          name: "#Humblebrag",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "5",
          abilities: [
            [
              "Draw a card for each other player who has fewer cards in their Victory Pile than you."
            ]
          ]
        }
      ]
    },
    {
      id: 83,
      name: "Thanos",
      set: 10,
      team: 14,
      cards: [
        {
          name: "Transdimensional Overlord",
          hc: 4,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            { keyword: 1 },
            [
              "You may KO a Bystander from your Victory Pile. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Revel in Destruction",
          hc: 4,
          hc2: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { team: 14 },
              ": KO a Bystander from the Bystander Stack. Then, you get ",
              { bold: "+1" },
              { icon: 2 },
              " for every three Bystanders in the KO pile."
            ]
          ]
        },
        {
          name: "Galactic Domination",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              { hc: 3 },
              ": Each other player reveals a ",
              { hc: 3 },
              " Hero or chooses a Bystander from their Victory Pile. You “rescue“ those bystanders.",
            ]
          ]
        },
        {
          name: "Utter Annihilation",
          hc: 3,
          rarity: 3,
          cost: 8,
          abilities: [
            [
              "KO six Bystanders from the Bystander Stack. Then, defeat any Villain or Mastermind whose ",
              { icon: 1 },
              " is less than the number of Bystanders in the KO pile."
            ]
          ]
        }
      ]
    },
    {
      id: 84,
      name: "Ultimate Spider-Man",
      set: 10,
      team: 3,
      cards: [
        {
          name: "Leaping Spider",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            "Reveal the top card of your deck. If it costs 2 or less, draw it.",
            [
              { hc: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Marvel Team-Up",
          hc: 4,
          hc2: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Gain a ",
              { rule: 11, text: "Sidekick" },
              ".",
            ],
            [
              "Reveal the top card of your deck. If it costs 2 or less, draw it."
            ]
          ]
        },
        {
          name: "Web-Slinger ",
          hc: 5,
          rarity: 2,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              ", usable only against the Mastermind or Villains on the Rooftops or Bridge."
            ],
            [
              "Reveal the top card of your deck. If it costs 2 or less, draw it."
            ]
          ]
        },
        {
          name: "Hero from Another Dimension",
          hc: 1,
          rarity: 3,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              " for each other card you have played this turn that costs 1 or 2."
            ]
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 21,
      name: "Madelyne Pryor, Goblin Queen",
      tacticName: "Madelyne Pryor",
      set: 10,
      vAttack: "10",
      vp: 6,
      cards: [
        {
          name: "Madelyne Pryor, Goblin Queen",
          vAttackAsterisk: true,
          dense: true,
          abilities: [
            [
              "Bystanders captured by Madelyne are “Demon Goblin“ Villains with ",
              { bold: "2" },
              { icon: 1 },
              ". You can fight them to rescue them as Bystanders. You can't fight her while she has any Demon Goblins."
            ],
            [
              { bold: "Always Leads" },
              ": Limbo"
            ],
            [
              { bold: "Master Strike" },
              ": Madelyne captures 4 Bystanders. If she already had any Bystanders before that, then each player gains a Wound."
            ]
          ]
        },
        {
          name: "City of Demon Goblins",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Madelyne captures five Bystanders."
            ]
          ]
        },
        {
          name: "Corrupted Clone of Jean Grey",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals an ",
              { team: 4 },
              " Hero or gains a Wound.",
            ]
          ]
        },
        {
          name: "Everyone's a Demon on the Inside",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Madelyne captures a Bystander from each other player's Victory Pile.",
            ]
          ]
        },
        {
          name: "Gather the Harvest",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": For each Limbo Villain in the city and/or Escape Pile, Madelyne captures a Bystander."
            ]
          ]
        }
      ]
    },
    {
      id: 22,
      name: "Nimrod, Super Sentinel",
      tacticName: "Nimrod",
      set: 10,
      vAttack: "6",
      vp: 6,
      cards: [
        {
          name: "Nimrod, Super Sentinel",
          vAttackAsterisk: true,
          dense: true,
          abilities: [
            [
              "You can't fight Nimrod unless you made at least ",
              { bold: "6" },
              { icon: 2 },
              " this turn."
            ],
            [
              { bold: "Always Leads" },
              ": Sentinel Territories"
            ],
            [
              { bold: "Master Strike" },
              ": Each player who does not reveal a ",
              { hc: 5 },
              " Hero must choose ",
              { icon: 2 },
              " or ",
              { icon: 1 },
              ", then discard all their cards with that icon."
            ]
          ]
        },
        {
          name: "Adapt and Destroy",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ":  Choose ",
              { icon: 2 },
              " or ",
              { icon: 1 },
              ". Each other player reveals their hand and discards a card with that icon."
            ]
          ]
        },
        {
          name: "Detect Mutation",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ":  Choose ",
              { icon: 2 },
              " or ",
              { icon: 1 },
              ". Then, reveal the top card of your deck. If that card has that icon, draw it and repeat this process."
            ]
          ]
        },
        {
          name: "Scatter the Mutants",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ":  Choose ",
              { icon: 2 },
              " or ",
              { icon: 1 },
              ". Put all Heroes from the HQ with that icon on the bottom of the Hero Deck."
            ]
          ]
        },
        {
          name: "Teleport and Incarcerate",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ":  Choose ",
              { icon: 2 },
              " or ",
              { icon: 1 },
              ". Then, reveal the top card of that Hero Deck. If that card has that icon, gain that card, and ",
              { keyword: 1 },
              " it."
            ]
          ]
        }
      ]
    },
    {
      id: 23,
      name: "Wasteland Hulk",
      set: 10,
      vAttack: "7",
      vp: 6,
      cards: [
        {
          name: "Wasteland Hulk",
          vAttack: "7+",
          abilities: [
            [
              "Wasteland Hulk gets ",
              { bold: "+3" },
              { icon: 1 },
              " for each of his Mastermind Tactics among all players' Victory Piles."
            ],
            [
              { bold: "Always Leads" },
              ": Wasteland"
            ],
            [
              { bold: "Master Strike" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Hulk Rampage" }
            ]
          ]
        },
        {
          name: "Brutal Beating",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player counts the number of Wounds in their discard pile, then discards that many cards."
            ]
          ]
        },
        {
          name: "Memories of Pain",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player puts two Wounds from their discard pile on top of their deck.",
            ]
          ]
        },
        {
          name: "Radioactive Regeneration",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO up to two Wounds from your hand and/or discard pile.",
            ]
          ]
        },
        {
          name: "Revert to Bruce Banner",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You gain a ",
              { hc: 5 },
              "Hero from the HQ for free."
            ]
          ]
        }
      ]
    },
    {
      id: 24,
      name: "Zombie Green Goblin",
      tacticName: "Green Goblin",
      set: 10,
      vAttack: "11",
      vp: 6,
      cards: [
        {
          name: "Zombie Green Goblin",
          vAttack: "11+",
          dense: true,
          abilities: [
            [
              "Zombie Green Goblin gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero in the KO pile that costs 7 or more."
            ],
            [
              { bold: "Always Leads" },
              ": The Deadlands"
            ],
            [
              { bold: "Master Strike" },
              ": ",
              { keyword: 16 },
              ". KO each Hero in the HQ that costs 7 or more. Then, each player discards a card for each Hero in the KO pile that costs 7 or more."
            ]
          ]
        },
        {
          name: "Army of Cadavers",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 16 },
              { italic: " (this effect never makes Mastermind Tactics return.)" },
              " Then, each other player discards a card for each Villain in the city that has “",
              { keyword: 16 },
              ".“"
            ]
          ]
        },
        {
          name: "The Hungry Dead",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 16 },
              { italic: " (this effect never makes Mastermind Tactics return.)" },
              " Then, each other player gains a Wound if there are any Villains in the city with “",
              { keyword: 16 },
              ".“"
            ]
          ]
        },
        {
          name: "Love to Have You for Dinner",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 16 },
              { italic: " (this effect never makes Mastermind Tactics return.)" },
              " Then, reveal the top 5 cards of the Hero Deck. KO all those Heroes that cost 7 or more. Put the rest on the bottom of the Hero Deck in random order."
            ]
          ]
        },
        {
          name: "Reign of Terror",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 16 },
              { italic: " (this effect never makes Mastermind Tactics return.)" },
              " Then, put all Heroes from the HQ that cost 6 or less on the bottom of the Hero Deck."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 13,
      name: "Ghost Racers",
      set: 10,
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 16 }
            ],
            [
              { bold: "Fight" },
              ": Reveal a ",
              { hc: 1 },
              " Hero or KO one of your Heroes with an ",
              { icon: 1 },
              " icon."
            ]
          ]
        },
      ]
    },
    {
      id: 14,
      name: "M.O.D.O.K.s",
      set: 10,
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": KO a Hero from your discard pile or the HQ. If that Hero has a ",
              { icon: 2 },
              " icon, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
      ]
    },
    {
      id: 15,
      name: "Thor Corps",
      set: 10,
      vp: 1,
      vAttack: "3",
      cards: [
        {
          hc: 4,
          hc2: 3,
          team: 1,
          recruit: "2+",
          overrideType: 1,
          abilities: [
            [
              { bold: "Fight" },
              ": Gain this as a Hero."
            ],
            { divider: true },
            [
              { hc: 4 },
              { hc: 3 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
      ]
    },
  ]
}