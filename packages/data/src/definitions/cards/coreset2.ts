import { CardSetDef } from '../cardTypes';

export const CoreSet2: CardSetDef = {
  id: 42,
  heroes: [
    {
      id: 290,
      name: "Black Widow",
      filterName: "Black Widow (Core Set 2E)",
      team: 1,
      cards: [
        {
          name: "Covert Operation",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "If you have at least 4 Bystanders in your Victory Pile, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Gather Intel",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              { hc: 5 },
              ": Rescue a Bystander. Then if you have at least 4 Bystanders in your Victory Pile, draw a card."
            ]
          ]
        },
        {
          name: "Dangerous Rescue",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              { hc: 5 },
              ": You may KO a card from your hand or discard pile. If you do, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Intelligence Network",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            "Draw a Card.",
            "Rescue a Bystander.",
            [
              "Then you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in your Victory Pile.",
            ]
          ]
        }
      ]
    },
    {
      id: 291,
      name: "Captain America",
      filterName: "Captain America (Core Set 2E)",
      team: 1,
      cards: [
        {
          name: "Avengers Assemble!",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "1+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Hero Class you have."
            ]
          ]
        },
        {
          name: "Perfect Teamwork",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Class you have."
            ]
          ]
        },
        {
          name: "Vibranium Shield",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "Once per turn, when a player gains a Wound, you may reveal this card to return that Wound to the Wound Deck and draw a card."
            ]
          ]
        },
        {
          name: "A Day Unlike Any Other",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Class you have."
            ],
            [
              { team: 1 },
              ": You also get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other ",
              { team: 1 },
              " Hero you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 292,
      name: "Cyclops",
      filterName: "Cyclops (Core Set 2E)",
      team: 4,
      cards: [
        {
          name: "Determination",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "3",
          abilities: [
            [
              "To play this, you must discard a card."
            ]
          ]
        },
        {
          name: "Optic Blast",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "3",
          abilities: [
            [
              "To play this, you must discard a card."
            ]
          ]
        },
        {
          name: "Unending Energy",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "When a card effect causes you to discard this card from your hand, you may return it to your hand."
            ]
          ]
        },
        {
          name: "X-Men United",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            "To play this, you must discard a card.",
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you discarded from your hand this turn.",
            ],
            [
              { team: 4 },
              ": You also get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other ",
              { team: 4 },
              " Hero you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 293,
      name: "Emma Frost",
      filterName: "Emma Frost (Core Set 2E)",
      team: 4,
      cards: [
        {
          name: "Mental Discipline",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "1",
          abilities: [
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Shadowed Thoughts",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 1 },
              ": You may get ",
              { bold: "+3" },
              { icon: 1 },
              ". If you do, reveal the top card of the Villain Deck and if it's a Master Strike, play it."
            ]
          ]
        },
        {
          name: "Psychic Link",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "Each player may reveal another ",
              { team: 4 },
              " Hero. Each player who does draws a card."
            ]
          ]
        },
        {
          name: "Diamond Form",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "If a Master Strike would occur, you may reveal this card to KO that Master Strike and shuffle a card from the Bystander Deck into the Villain Deck instead."
            ]
          ]
        }
      ]
    },
    {
      id: 294,
      name: "Gambit",
      filterName: "Gambit (Core Set 2E)",
      team: 4,
      cards: [
        {
          name: "Stack the Deck",
          hc: 1,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Draw two cards. Then put a card from your hand on top of your deck."
            ]
          ]
        },
        {
          name: "Kinetic Card",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "Reveal the top card of your deck. If it's an ",
              { team: 4 },
              " Hero, draw it. Otherwise, discard it or put it back."
            ]
          ]
        },
        {
          name: "Hypnotic Charm",
          hc: 1,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              "For each player, reveal the top card of their deck and you decide if that player discards it or puts it back."
            ],
            [
              { hc: 1 },
              ": You may KO the card you revealed from your own deck."
            ]
          ]
        },
        {
          name: "High-Stakes Jackpot",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Reveal the top card of your deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that card's cost. Discard it or put it back."
            ]
          ]
        }
      ]
    },
    {
      id: 295,
      name: "Hawkeye",
      filterName: "Hawkeye (Core Set 2E)",
      team: 1,
      cards: [
        {
          name: "Trick Arrow",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              "If you drew any cards this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Quick Draw",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            [
              "Draw a card.",
            ]
          ]
        },
        {
          name: "Supporting Fire",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              { hc: 3 },
              ": Each player draws a card."
            ]
          ]
        },
        {
          name: "Pinpoint Precision",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              "Whenever you fight the Mastermind this turn, look at two of their face down Mastermind Tactics at random and choose which one to fight.",
            ],
            [
              { team: 1 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 296,
      name: "Hulk",
      filterName: "Hulk (Core Set 2E)",
      team: 1,
      cards: [
        {
          name: "Growing Rage",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Don't Make Me Angry",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You may KO a Wound from your hand or discard pile. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Crazed Rampage",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "4",
          abilities: [
            [
              "Each player reveals another ",
              { hc: 4 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Hulk Smash!",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              { hc: 4 },
              ": You may gain a Wound. If you do, you get ",
              { bold: "+5" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 297,
      name: "Iron Man",
      filterName: "Iron Man (Core Set 2E)",
      team: 1,
      cards: [
        {
          name: "Endless Invention",
          hc: 5,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Draw a card."
            ],
            [
              { hc: 5 },
              ": Draw another card."
            ]
          ]
        },
        {
          name: "Repulsor Rays",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "If you played at least 8 other cards this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Overloaded Unibeam",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other",
              { hc: 5 },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Quantum Breakthrough",
          hc: 5,
          rarity: 3,
          cost: 8,
          abilities: [

            "Draw two cards.",
            [
              { team: 1 },
              ": Draw two more cards."
            ]

          ]
        }
      ]
    },
    {
      id: 298,
      name: "Nick Fury",
      filterName: "Nick Fury (Core Set 2E)",
      team: 2,
      cards: [
        {
          name: "Stealth Assault Squad",
          hc: 1,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              " if you played another ",
              { team: 2 },
              " Hero that costs 1 or more this turn."
            ]
          ]
        },
        {
          name: "Weapon Bank",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 5 },
              ": If the Bank is empty, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Battlefield Promotion",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              { hc: 1 },
              ": You may KO a ",
              { team: 2 },
              " Hero from your hand or discard pile. If you do, reveal the top three cards of the Officer Deck. You may gain one of them to your hand. Put the rest back on the bottom of that deck.",
            ]
          ]
        },
        {
          name: "Pure Fury",
          hc: 5,
          rarity: 3,
          cost: 8,
          abilities: [
            [
              "You may KO a ",
              { team: 2 },
              " Hero from your hand or discard pile."
            ],
            [
              "Then you may fight any Villain or Mastermind for free whose ",
              { icon: 1 },
              " is less than the number of ",
              { team: 2 },
              " Heroes in the KO pile.",
            ]
          ]
        }
      ]
    },
    {
      id: 299,
      name: "Rogue",
      filterName: "Rogue (Core Set 2E)",
      team: 4,
      cards: [
        {
          name: "Borrowed Brawn",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Energy Drain",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "1+",
          abilities: [
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile. If you do, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Stolen Powers",
          hc: 1,
          rarity: 2,
          cost: 5,
          abilities: [
            [
              "Play this card as a copy of one of your Heroes that you played this turn.",
            ]
          ]
        },
        {
          name: "Grand Larceny",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { team: 4 },
              ": Each player discards the top card of their deck. Play a copy of one of those cards."
            ]
          ]
        }
      ]
    },
    {
      id: 300,
      name: "Spider-Man",
      filterName: "Spider-Man (Core Set 2E)",
      team: 3,
      cards: [
        {
          name: "Witty Banter",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "2",
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
          name: "Web-Shooters",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            "Reveal the top card of your deck. If it costs 2 or less, draw it.",
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Astonishing Strength",
          hc: 4,
          rarity: 2,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "Reveal the top card of your deck. If it costs 2 or less, draw it."
            ],
            [
              { hc: 4 },
              ": If that card costs 0, you may KO it instead."
            ]
          ]
        },
        {
          name: "With Great Power...",
          hc: 2,
          rarity: 3,
          cost: 2,
          abilities: [
            "Reveal the top two cards of your deck. Draw each one of them that costs 2 or less. Put the rest back in any order.",
            [
              { team: 3 },
              ": Instead, rescue a Bystander then do the above effect but revealing three cards."
            ]
          ]
        }
      ]
    },
    {
      id: 301,
      name: "Spider-Man (Miles Morales)",
      team: 3,
      cards: [
        {
          name: "Venom Strike",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
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
          name: "Web-Trap",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { hc: 2 },
              ": When you draw a new hand this turn, draw an extra card.",
            ]
          ]
        },
        {
          name: "Spider-Camouflage",
          hc: 1,
          rarity: 2,
          cost: 2,
          attack: "2",
          abilities: [
            [
              "You may set aside a card from your hand. When you draw a new hand this turn, add that card to your hand."
            ],
          ]
        },
        {
          name: "Jump Dimensions",
          hc: 5,
          rarity: 3,
          cost: 2,
          attack: "2",
          abilities: [
            [
              { team: 3 },
              ": Rescue a Bystander. Then discard up to three cards. When you draw a new hand this turn, draw as many extra cards as you discarded this way."
            ],
          ]
        }
      ]
    },
    {
      id: 302,
      name: "Storm",
      filterName: "Storm (Core Set 2E)",
      team: 4,
      cards: [
        {
          name: "Revitalizing Rain",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Lightning Bolt",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              " usable only against Villains on the Rooftops."
            ],
            [
              { hc: 3 },
              ": You may use this bonus ",
              { icon: 1 },
              " against the Mastermind instead.",
            ]
          ]
        },
        {
          name: "Spinning Cyclone",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "You may move a Villain to another city space. If another Villain is already there, swap them."
            ]
          ]
        },
        {
          name: "Tidal Wave",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "You get ",
              { bold: "+3" },
              { icon: 1 },
              " usable only against Villains in the Sewers or Bridge.",
            ],
            [
              { hc: 3 },
              ": You may use this bonus ",
              { icon: 1 },
              " against the Mastermind instead.",
            ]
          ]
        }
      ]
    },
    {
      id: 303,
      name: "Thor",
      filterName: "Thor (Core Set 2E)",
      team: 1,
      cards: [
        {
          name: "Odinson",
          hc: 4,
          rarity: 1,
          cost: 5,
          recruit: "3+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Glory of Asgard",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              "Once this turn, if you made at least ",
              { bold: "8" },
              { icon: 2 },
              " this turn, you get ",
              { bold: "+3" },
              { icon: 1 },
              ".",
            ]
          ]
        },
        {
          name: "Spark of the Divine",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "3",
          abilities: [
            [
              "Once this turn, if you made at least ",
              { bold: "8" },
              { icon: 2 },
              " this turn, you may KO a card from your hand or discard pile. If you do, you get ",
              { bold: "+3" },
              { icon: 1 },
              ".",
            ]
          ]
        },
        {
          name: "God of Thunder",
          hc: 4,
          rarity: 3,
          cost: 8,
          recruit: "5",
          abilities: [
            [
              "You can spend any amount of your ",
              { icon: 2 },
              " as ",
              { icon: 1 },
              " this turn.",
            ]
          ]
        }
      ]
    },
    {
      id: 304,
      name: "Wolverine",
      filterName: "Wolverine (Core Set 2E)",
      team: 4,
      cards: [
        {
          name: "Keen Senses",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Healing Factor",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            "You may KO a Wound from your hand or discard pile. If you do, draw a card."
          ]
        },
        {
          name: "Frenzied Slashing",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "2",
          abilities: [
            [
              { hc: 2 },
              ": Draw two cards."
            ]
          ]
        },
        {
          name: "Berserker Rage",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            "Draw three cards.",
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each extra card you drew this turn."
            ]
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 105,
      name: "Red Skull, Hydra Overlord",
      vAttack: "7",
      vp: 6,
      cards: [
        {
          name: "Red Skull, Hydra Overlord",
          vAttack: "7+",
          abilities: [
            [
              "Red Skull gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hydra Villain in the city and/or Escape Pile."
            ],
            [
              { bold: "Always Leads" },
              ": Any “Hydra“ Villain Group"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or discards down to 4 cards."
            ]
          ]
        },
        {
          name: "Epic Red Skull, Hydra Overlord",
          vAttack: "10+",
          epic: true,
          abilities: [
            [
              "Red Skull gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each Hydra Villain in the city and/or Escape Pile."
            ],
            [
              { bold: "Always Leads" },
              ": Any “Hydra“ Villain Group"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or discards down to 3 cards."
            ]
          ]
        },
        {
          name: "Dust of Death",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player KOs a non-grey Hero from their discard pile."
            ]
          ]
        },
        {
          name: "Ruthless Command",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top three cards of your deck. KO one, discard one, and put one back on top."
            ]
          ]
        },
        {
          name: "Two More Shall Take Its Place",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic: Shuffle two cards from the Bystander Deck into the Villain Deck, then play two cards from the Villain Deck."
            ]
          ]
        },
        {
          name: "Vast Resources",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+4" },
              { icon: 2 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 106,
      name: "Magneto",
      filterName: "Magneto (Core Set 2E)",
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "Magneto",
          vAttack: "9+",
          abilities: [
            [
              "Magneto gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { hc: 5 },
              " Hero you played this turn."
            ],
            [
              { bold: "Always Leads" },
              ": Any “Brotherhood“ or “X-Men“ Villain Group"
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards an ",
              { team: 4 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Epic Magneto",
          vAttack: "11+",
          epic: true,
          abilities: [
            [
              "Magneto gets ",
              { bold: "+1" },
              { icon: 1 },
              "  for each Hero you played this turn that's ",
              { hc: 5 },
              " and/or ",
              { hc: 3 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Any “Brotherhood“ or “X-Men“ Villain Group"
            ],
            [
              { bold: "Master Strike" },
              ": Each player KOs one of their ",
              { team: 4 },
              " Heroes or gains a Wound."
            ]
          ]
        },
        {
          name: "Bitter Captor",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Gain an ",
              { team: 4 },
              " Hero from the HQ or gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Crush In Steel",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player KOs one of their non-grey Heroes."
            ]
          ]
        },
        {
          name: "Electromagnetic Shockwave",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards an ",
              { team: 4 },
              " Hero or discards down to three cards."
            ]
          ]
        },
        {
          name: "Imprisoning Sphere",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may set aside one of your ",
              { team: 4 },
              " or ",
              { team: 2 },
              " Heroes. When you draw a new hand this turn, add that Hero to your hand as an extra card."
            ]
          ]
        }
      ]
    },
    {
      id: 107,
      name: "Doctor Doom",
      filterName: "Doctor Doom (Core Set 2E)",
      vAttack: "10",
      vp: 6,
      cards: [
        {
          name: "Doctor Doom",
          vAttack: "10+",
          abilities: [
            [
              "If there is at least one Omen of Doom, all Doombot Legions get ",
              { bold: "+1" },
              { icon: 1 },
              ". If there are at least four Omens, then instead Doctor Doom and all Doombot Legions get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Doombot Legions"
            ],
            [
              { bold: "Master Strike" },
              ": Stack this Strike next to Doctor Doom as an “Omen of Doom.“ Then each player discards cards equal to the number of Omens or gains a Wound."
            ]
          ]
        },
        {
          name: "Epic Doctor Doom",
          vAttack: "12+",
          epic: true,
          abilities: [
            [
              "All Doombot Legions get ",
              { bold: "+2" },
              { icon: 1 },
              ". If there are at least four Omens of Doom, then instead Doctor Doom and all Doombot Legions get ",
              { bold: "+4" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Doombot Legions"
            ],
            [
              { bold: "Master Strike" },
              ": Stack this Strike next to Doctor Doom as an “Omen of Doom.“ Then each player discards cards equal to one plus the number of Omens or gains a Wound."
            ]
          ]
        },
        {
          name: "Dark Technology",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may recruit a ",
              { hc: 5 },
              " or ",
              { hc: 3 },
              " Hero from the HQ for free."
            ]
          ]
        },
        {
          name: "Monarch's Decree",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose one:"
            ],
            {
              points: [
                "Each other player draws a card, or",
                "Each other player discards a card.",
              ]
            },
          ]
        },
        {
          name: "Secrets of Time Travel",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic: Take another turn after this one."
            ]
          ]
        },
        {
          name: "Treasures of Latveria",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": When you draw a new hand this turn, draw three extra cards."
            ]
          ]
        }
      ]
    },
    {
      id: 108,
      name: "Loki",
      filterName: "Loki (Core Set 2E)",
      vAttack: "11",
      vp: 6,
      cards: [
        {
          name: "Loki",
          vAttack: "11+",
          abilities: [
            [
              "Loki gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Class among his “Hypno-Thralls.“"
            ],
            [
              { bold: "Always Leads" },
              ": Enemies of Asgard"
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards a ",
              { hc: 4 },
              " Hero or stacks a non-grey Hero from their hand next to Loki as a Hypno-Thrall."
            ]
          ]
        },
        {
          name: "Epic Loki",
          vAttack: "12+",
          epic: true,
          abilities: [
            [
              "Loki gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each Hero Class among his “Hypno-Thralls.“"
            ],
            [
              { bold: "Always Leads" },
              ": Enemies of Asgard"
            ],
            [
              { bold: "Master Strike" },
              ": Stack the top card of the Hero Deck next to Loki as a Hypno-Thrall. Each player KOs one of their ",
              { hc: 4 },
              " Heroes or stacks a non-grey Hero from their hand next to Loki as a Hypno-Thrall."
            ]
          ]
        },
        {
          name: "Broken Illusions",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Either KO one of Loki's Hypno-Thralls or choose a player to gain it."
            ]
          ]
        },
        {
          name: "Cruel Manipulations",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and discards all cards that have the same card names as any cards in Loki's Hypno-Thralls."
            ],
          ]
        },
        {
          name: "Scion of the Frost Giants",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO up to three grey Heroes from your discard pile."
            ]
          ]
        },
        {
          name: "Whispers and Lies",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put all Heroes that cost 5 or more from the HQ into Loki's Hypno-Thralls. Then refill all those HQ spaces."
            ]
          ]
        }
      ]
    },
    {
      id: 109,
      name: "Doctor Octopus",
      vAttack: "8",
      vp: 8,
      cards: [
        {
          name: "Doctor Octopus",
          vAttack: "8+",
          abilities: [
            [
              "Doctor Octopus gets ",
              { bold: "+4" },
              { icon: 1 },
              " unless you played at least 8 cards or a Hero that costs 8 this turn."
            ],
            [
              { bold: "Always Leads" },
              ": Any “Sinister“ Villain Group"
            ],
            [
              { bold: "Master Strike" },
              ": Each player may discard a ",
              { team: 3 },
              " Hero. Any player who doesn't must reveal the top 8 cards of their deck, discard all non-Grey Heroes revealed, and put the rest back in random order."
            ]
          ]
        },
        {
          name: "Epic Doctor Octopus",
          vAttack: "8+",
          epic: true,
          abilities: [
            [
              "Doctor Octopus gets ",
              { bold: "+4" },
              { icon: 1 },
              " unless you played at least 8 cards this turn and gets ",
              { bold: "+4" },
              { icon: 1 },
              " unless you played a Hero that costs 8 this turn."
            ],
            [
              { bold: "Always Leads" },
              ": Any “Sinister“ Villain Group"
            ],
            [
              { bold: "Master Strike" },
              ": Each player may KO one of their ",
              { team: 3 },
              " Heroes. Any player who doesn't must reveal the top 8 cards of their deck, KO a non-grey Hero revealed, discard all other non-grey Heroes revealed, and put the rest back in random order."
            ]
          ]
        },
        {
          name: "Absolute Octarchy",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a card that costs 8 or gains a Wound."
            ]
          ]
        },
        {
          name: "High Octane",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top 8 cards of the Hero Deck. You may gain one of them that costs 8. Shuffle the rest back into the Hero Deck."
            ],
          ]
        },
        {
          name: "Octal Octyls",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Look at the top 8 cards of your deck. Draw one and discard the rest."
            ]
          ]
        },
        {
          name: "Octet of Valence Electrons",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": When you draw a new hand this turn, draw 8 cards instead of 6."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 45,
      name: "Doombot Legion",
      filterName: "Doombot Legion (Core Set 2E)",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Look at the top three cards of your deck. KO one of them. Put the rest back in any order."
            ]
          ]
        },
      ]
    },
    {
      id: 46,
      name: "Hand Ninjas",
      filterName: "Hand Ninjas (Core Set 2E)",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": If you fight Hand Ninjas in the Sewers or Rooftops, KO one of your Heroes. Otherwise, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
      ]
    },
    {
      id: 47,
      name: "Savage Land Mutates",
      filterName: "Savage Land Mutates (Core Set 2E)",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top card of your deck. If it's grey, KO it. If it's ",
              { hc: 4 },
              " or ",
              { hc: 2 },
              ", draw it."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 127,
      name: "Brotherhood of Mutants",
      cards: [
        {
          name: "The Blob",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Put the Blob to the left of the Mastermind space. Nothing moves the Blob. While he's there, you can't fight the Mastermind. ",
              { italic: "(You can still fight the Blob.)" }
            ],
          ]
        },
        {
          name: "Mystique",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player discards an ",
              { team: 4 },
              " Hero."
            ],
            [
              {
                bold: "Escape"
              },
              ": Mystique becomes a Scheme Twist that takes effect immediately."
            ]
          ]
        },
        {
          name: "Sabretooth",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals a ",
              { hc: 2 },
              " Hero or gains a Wound."
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
          name: "Juggernaut",
          qtd: 2,
          vAttack: "7",
          vp: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals their hand and discards all cards that have the same card names as any Heroes in the HQ. Then put all heroes from the HQ on the bottom of the Hero Deck."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO two of your Heroes."
            ],
          ]
        }
      ]
    },
    {
      id: 128,
      name: "Enemies of Asgard",
      filterName: "Enemies of Asgard (Core Set 2E)",
      cards: [
        {
          name: "Frost Giant Warrior",
          qtd: 3,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player discards a ",
              { hc: 3 },
              " Hero or gains a Wound.",
            ],
            [
              {
                bold: "Fight"
              },
              ": You may KO a grey Hero from your discard pile."
            ],
          ]
        },
        {
          name: "Enchantress",
          qtd: 2,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              "Enchantress gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander she has."
            ],
            [
              {
                bold: "Ambush"
              },
              ": Enchantress captures a Bystander from the Bystander Deck and from each player's Victory Pile ",
              { italic: "(of that player's choice)." }
            ],
          ]
        },
        {
          name: "Ymir, Frost Giant King",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Choose a Frost Giant Warrior from any player's Victory Pile to enter the city."
            ],
            [
              {
                bold: "Fight"
              },
              ": You may KO a grey Hero from your discard pile."
            ],
          ]
        },
        {
          name: "Destroyer",
          qtd: 1,
          vAttack: "8",
          vp: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player KOs a non-grey Hero from their discard pile."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO up to two grey Heroes from your discard pile."
            ],
            [
              {
                bold: "Escape"
              },
              ": Repeat the Ambush effect."
            ]
          ]
        }
      ]
    },
    {
      id: 129,
      name: "Hydra",
      filterName: "Hydra (Core Set 2E)",
      cards: [
        {
          name: "Hydra Kidnappers",
          qtd: 3,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Hydra Kidnappers capture a card from the S.H.I.E.L.D. Officer Deck or ",
              { rule: 11, text: "Sidekick" },
              " Deck.",
            ],
            [
              {
                bold: "Fight"
              },
              ": Choose a player to gain that Hero."
            ],
          ]
        },
        {
          name: "Endless Armies of Hydra",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player KOs one of their Heroes. Then play two cards from the Villain Deck.",
            ],
          ]
        },
        {
          name: "Viper",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player without another Hydra Villain in their Victory Pile gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ],
          ]
        },
        {
          name: "Baron Strucker, Supreme Hydra",
          qtd: 1,
          vAttack: "6+",
          vp: "4",
          abilities: [
            [
              "Baron Strucker gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each other Hydra Villain in the city and/or Escape Pile."
            ],
            [
              {
                bold: "Fight"
              },
              ": Shuffle four cards from the Bystander Deck into the Villain Deck. Then play two cards from the villain deck."
            ],
          ]
        }
      ]
    },
    {
      id: 130,
      name: "Masters of Evil",
      filterName: "Masters of Evil (Core Set 2E)",
      cards: [
        {
          name: "Whirlwind",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { italic: "(After this enters the city)" },
              " Two Villains in the city swap spaces.",
            ],
            [
              {
                bold: "Fight"
              },
              ": If you fight Whirlwind on the Rooftops or Bridge, KO one of your Heroes."
            ],
          ]
        },
        {
          name: "Melter",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals the top card of their deck. For each card, you choose to KO it or put it back.",
            ],
          ]
        },
        {
          name: "Baron Zemo",
          qtd: 2,
          vAttack: "4+",
          vp: "3",
          abilities: [
            [
              "Baron Zemo gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander he has."
            ],
            [
              {
                bold: "Ambush"
              },
              ": Baron Zemo captures a Bystander. Then he captures another Bystander for each ",
              { team: 1 },
              " Hero in the HQ."
            ],
          ]
        },
        {
          name: "Ultron",
          qtd: 2,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              "Ultron gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { hc: 5 },
              " Hero in the HQ.",
            ],
            [
              {
                bold: "Fight"
              },
              ": Choose a ",
              { hc: 5 },
              " Hero from the HQ. Either KO that Hero or choose a player to gain it."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound."
            ],
          ]
        }
      ]
    },
    {
      id: 131,
      name: "Radiation",
      filterName: "Radiation (Core Set 2E)",
      cards: [
        {
          name: "The Leader",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Reveal a ",
              { hc: 4 },
              " Hero or play a card from the Villain Deck.",
            ],
          ]
        },
        {
          name: "Zzzax",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals a ",
              { hc: 4 },
              " Hero or gains a Wound.",
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ],
          ]
        },
        {
          name: "Abomination",
          qtd: 2,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              "Abomination gets ",
              { bold: "+" },
              { icon: 1 },
              " equal to the printed ",
              { icon: 1 },
              " of the Hero in the HQ space under his current city space."
            ],
            [
              {
                bold: "Fight"
              },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each of your ",
              { hc: 4 },
              " Heroes."
            ],
          ]
        },
        {
          name: "Maestro, Wasteland Hulk",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Count your ",
              { hc: 4 },
              " Heroes. KO that many of your Heroes."
            ],
          ]
        }
      ]
    },
    {
      id: 132,
      name: "Sinister Spider-Foes",
      cards: [
        {
          name: "The Lizard",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": If you fight the Lizard in the Sewers, KO one of your Heroes and each other player gains a Wound.",
            ],
          ]
        },
        {
          name: "Scorpion",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": If there is another Spider-Foes Villain in the city, each player gains a Wound.",
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ],
          ]
        },
        {
          name: "Green Goblin",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Green Goblin captures a Bystander. Put him on the Bridge. If there's another Villain there, swap them."
            ],
          ]
        },
        {
          name: "Venom",
          qtd: 2,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              "Venom gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero he has."
            ],
            [
              {
                bold: "Ambush"
              },
              ": Venom captures a Hero from the ",
              { rule: 11, text: "Sidekick" },
              " Deck and each Hero that costs 2 or less from the HQ."
            ],
            [
              {
                bold: "Fight"
              },
              ": You may gain a Hero captured by Venom. Put the rest on the bottom of the Hero Deck and/or ",
              { rule: 11, text: "Sidekick" },
              " deck as appropriate."
            ],
          ]
        }
      ]
    },
    {
      id: 133,
      name: "Sinister Syndicate",
      cards: [
        {
          name: "Beetle",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Count your ",
              { hc: 1 },
              " Heroes, then draw that many cards.",
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player reveals a ",
              { hc: 1 },
              " Hero or gains a Wound."
            ],
          ]
        },
        {
          name: "Boomerang",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes. Then reveal the top card of the Villain Deck. If it's a Villain, put Boomerang in its place and play that Villain."
            ],
          ]
        },
        {
          name: "Hydro-Man",
          qtd: 2,
          vAttack: "4+",
          vp: "3",
          abilities: [
            [
              "Hydro-Man gets ",
              { bold: "+2" },
              { icon: 1 },
              " in the Sewers and Bridge."
            ],
            [
              {
                bold: "Fight"
              },
              ": If you fight Hydro-Man in the Sewers or Bridge, KO one of your Heroes."
            ],
          ]
        },
        {
          name: "Speed Demon",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Speed Demon moves two extra spaces forward. If this pushes any other Villains forward, each player discards a card."
            ],
          ]
        }
      ]
    },
    {
      id: 134,
      name: "Skrulls",
      filterName: "Skrulls (Core Set 2E)",
      cards: [
        {
          name: "Skrull Shapeshifter",
          qtd: 3,
          vAttack: "1+",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Skrull Shapeshifter captures the rightmost Hero from the HQ. It gets ",
              { bold: "+" },
              { icon: 1 },
              " equal to that Hero's cost.",
            ],
            [
              {
                bold: "Fight"
              },
              ": Either KO that Hero or choose a player to gain it."
            ],
          ]
        },
        {
          name: "Super-Skrull",
          qtd: 3,
          vAttack: "2+",
          vp: "3",
          abilities: [
            [
              "Super-Skrull gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Class among Heroes in the HQ."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ],
          ]
        },
        {
          name: "Paibok the Power Skrull",
          qtd: 1,
          vAttack: "5+",
          vp: "5",
          abilities: [
            [
              "Paibok gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Class among Heroes in the HQ."
            ],
            [
              {
                bold: "Fight"
              },
              ": Choose a Hero from the HQ for each player. Each player gains that Hero."
            ],
          ]
        },
        {
          name: "Skrull Queen Veranke",
          qtd: 1,
          vAttack: "2+",
          vp: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Skrull Queen Veranke captures the highest-cost Hero from the HQ. She gets ",
              { bold: "+" },
              { icon: 1 },
              " equal to its cost."
            ],
            [
              {
                bold: "Fight"
              },
              ": Either KO that Hero or choose a player to gain it."
            ],
          ]
        }
      ]
    },
  ],
  schemes: [
    {
      id: 189,
      name: "Bank Robbery Hostage Crisis",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists. Add an extra Villain Group."
            ],
            [
              { bold: "Special Rules" },
              ": Each Villain gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander it has.",
            ],
            [
              { bold: "Twists 1-8" },
              ": Any Villain in the Bank captures 2 Bystanders. If the bank is empty, move a Villain from another city space to the bank instead. Either way, play another card from the Villain Deck."
            ],
            [
              { bold: "Twist 9" },
              ": Put all Bystanders from the city into the Escape Pile."
            ],
            [
              { bold: "Evil Wins" },
              ": When 5 Bystanders are in the Escape Pile or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 190,
      name: "Enshrouded Identity",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 3 Twists, plus 1 Twist per player. There is no Mastermind yet. Instead, put 3 S.H.I.E.L.D. Officers next to the Mastermind space as “Bodyguards.“"
            ],
            [
              { bold: "Special Rules" },
              ": Bodyguards are Villains with ",
              { bold: "3" },
              { icon: 1 },
              " and “",
              { bold: "Fight" },
              ": Either KO this card or choose a player to gain it as a Hero.“ Whenever a Master Strike occurs, if there is no Mastermind yet, add a Bodyguard instead. The first time there are no Bodyguards, add a random Mastermind to the game. (Do any “Start of Game“ effects it has.) You can't fight that Mastermind while it has any Bodyguards.",
            ],
            [
              { bold: "Twist" },
              ": Add two Bodyguards."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 9 Bodyguards or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 191,
      name: "Legacy Virus, The",
      filterName: "Legacy Virus, The (Core Set 2E)",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists. Wound Deck holds 6 Wounds per player."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme as a “Virus Mutation.“ Then each player reveals a Hero whose cost is greater than the number of Virus Mutations or gains a Wound.",
            ],
            [
              { bold: "Evil Wins" },
              ": When the Wound Deck or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 192,
      name: "Negative Zone Prison Breakout",
      filterName: "Negative Zone Prison Breakout (Core Set 2E)",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists plus 1 per player. Add an extra Villain Group. Add 4 extra Bystanders."
            ],
            [
              { bold: "Twist" },
              ": Play two cards from the Villain Deck.",
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 3 Villains per player in the Escape Pile or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 193,
      name: "Portals to the Dark Dimension",
      filterName: "Portals to the Dark Dimension (Core Set 2E)",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists. Each Twist is a “Dark Portal.“"
            ],
            [
              { bold: "Twists 1-5" },
              ": Put this Dark Portal above the rightmost city space that doesn't yet have a Dark Portal. Villains in that city space get ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ],
            [
              { bold: "Twist 6" },
              ": Put this Dark Portal above the Mastermind. The Mastermind gets ",
              { bold: "+1" },
              { icon: 1 },
              ".",
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
      id: 194,
      name: "Replace Earth's Leaders with Killbots",
      filterName: "Replace Earth's Leaders with Killbots (Core Set 2E)",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 10 Twists. Stack 1 additional Twist next to this Scheme as  “Killgorithm.“"
            ],
            [
              { bold: "Special Rules" },
              ": Bystanders in the Villain Deck are “Killbot“ Villains with ",
              { icon: 1 },
              " equal to the number of Killgorithms. They have “",
              { bold: "Fight" },
              ": Rescue this as a Bystander.“",
            ],
            [
              { bold: "Twists 1-9" },
              ": Add this Twist to the Killgorithms. Two Killbots enter the city from the Bystander Deck.",
            ],
            [
              { bold: "Twist 10" },
              ": All Killbots in the city escape.",
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 6 Bystander cards in the Escape Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 195,
      name: "Secret Invasion of the Skrull Shapeshifters",
      filterName: "Secret Invasion of the Skrull Shapeshifters (Core Set 2E)",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. Always include the Skrull Villain Group. Add an extra Hero to the Hero Deck. Shuffle 4 random cards from the Hero Deck into the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Hero cards in the Villain Deck and city are “Skrull Infiltrator“ Villains with ",
              { icon: 1 },
              " equal to that Hero's cost +3. They have “",
              { bold: "Fight" },
              ": Either KO this card or choose a player to gain it as a Hero.“",
            ],
            [
              { bold: "Twists 1-5" },
              ": The leftmost Hero from the HQ enters the Sewers as a Skrull Infiltrator.",
            ],
            [
              { bold: "Twist 6" },
              ": All Skrulls in the city escape.",
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 6 Hero cards in the Escape Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 196,
      name: "Superhero Civil War",
      filterName: "Superhero Civil War (Core Set 2E)",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 1-3 players: 6 Twists. 4-5 players: 5 Twists. For exactly 2 players: Use 4 Heroes in the Hero Deck."
            ],
            [
              { bold: "Twist" },
              ": KO all Heroes from the HQ.",
            ],
            [
              { bold: "Evil Wins" },
              ": When the Hero Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 197,
      name: "Unleash the Power of the Cosmic Cube",
      filterName: "Unleash the Power of the Cosmic Cube (Core Set 2E)",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twists 1-3" },
              ": Each player discards a card.",
            ],
            [
              { bold: "Twist 4" },
              ": Each player discards two cards.",
            ],
            [
              { bold: "Twists 5-6" },
              ": Each player gains a Wound.",
            ],
            [
              { bold: "Twist 7" },
              ": Each player gains two Wounds.",
            ],
            [
              { bold: "Twist 8" },
              ": Evil Wins!",
            ],
          ]
        },
      ]
    },
  ],
  bystanders: [
    {
      id: 62,
      name: "Bystander",
      filterName: "Bystander (Core Set 2E)",
      vp: 1,
      cards: [
        {
          qtd: 30,
          abilities: []
        }
      ]
    },
    {
      id: 63,
      name: "Experimental Geneticist",
      vp: 1,
      cards: [
        {
          qtd: 4,
          abilities: [
            [
              { bold: "Rescue" },
              ": Reveal the top two cards of your deck. You may KO one of them. Put the rest back in any order."
            ]
          ]
        }
      ]
    },
    {
      id: 64,
      name: "Kindly Caretaker",
      vp: 1,
      cards: [
        {
          qtd: 4,
          abilities: [
            [
              { bold: "Rescue" },
              ": KO a Wound from your hand or discard pile. If you don't have any, draw a card instead."
            ]
          ]
        }
      ]
    },
    {
      id: 65,
      name: "Police Officer",
      vp: 1,
      cards: [
        {
          qtd: 4,
          abilities: [
            [
              { bold: "Rescue" },
              ": You may use the “Fight“ ability of a Henchman Villain in any player's Victory Pile."
            ]
          ]
        }
      ]
    },
  ],
  wounds: [
    {
      id: 22,
      name: "Wound",
      filterName: "Wound (Core Set 2E)",
      cards: [
        {
          cost: 0,
          qtd: 30,
          abilities: [
            [
              { bold: "Healing" },
              ": If you don't recruit or fight anything on your turn, you may KO all the Wounds from your hand.",
            ],
          ]
        }
      ]
    }
  ],
  officers: [
    {
      id: 13,
      name: "S.H.I.E.L.D. Officer",
      filterName: "S.H.I.E.L.D. Officer (Core Set 2E)",
      cards: [
        {
          team: 2,
          qtd: 20,
          cost: 3,
          recruit: "2",
          abilities: []
        }
      ]
    },
    {
      id: 14,
      name: "Covert Specialist",
      cards: [
        {
          subtitle: "S.H.I.E.L.D. Officer",
          team: 2,
          qtd: 2,
          hc: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 1 },
              ": Draw a card."
            ]
          ]
        }
      ]
    },
    {
      id: 15,
      name: "Instinct Specialist",
      cards: [
        {
          subtitle: "S.H.I.E.L.D. Officer",
          team: 2,
          qtd: 2,
          hc: 2,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        }
      ]
    },
    {
      id: 16,
      name: "Ranged Specialist",
      cards: [
        {
          subtitle: "S.H.I.E.L.D. Officer",
          team: 2,
          qtd: 2,
          hc: 3,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 3 },
              ": Draw a card."
            ]
          ]
        }
      ]
    },
    {
      id: 17,
      name: "Strength Specialist",
      cards: [
        {
          subtitle: "S.H.I.E.L.D. Officer",
          team: 2,
          qtd: 2,
          hc: 4,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 4 },
              ": Draw a card."
            ]
          ]
        }
      ]
    },
    {
      id: 18,
      name: "Tech Specialist",
      cards: [
        {
          subtitle: "S.H.I.E.L.D. Officer",
          team: 2,
          qtd: 2,
          hc: 5,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 5 },
              ": Draw a card."
            ]
          ]
        }
      ]
    }
  ],
  sidekicks: [
    {
      id: 17,
      name: "Daring Sidekick",
      cards: [
        {
          subtitle: "Hero - Sidekick",
          team: 0,
          qtd: 24,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "Draw a card",
            ],
            [
              "Return this ",
              { rule: 11, text: "Sidekick" },
              " to the bottom of the ",
              { rule: 11, text: "Sidekick" },
              " Deck.",
            ],
          ]
        }
      ]
    },
  ]
}