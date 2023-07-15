import { CardSet } from '../types';

export const MarvelStudios: CardSet = {
  id: 20,
  masterminds: [
    {
      id: 56,
      name: "Iron Monger",
      vAttack: "9",
      vp: 5,
      cards: [
        {
          name: "Iron Monger",
          vAttack: "9+",
          abilities: [
            [
              { keyword: 49, text: "Bank Conqueror 4" }
            ],
            [
              { bold: "Always Leads" },
              ": Iron Foes"
            ],
            [
              { bold: "Master Strike" },
              ": If there is a Villain in the Bank, each player gains a Wound. Otherwise, put this Master Strike into the Bank as a ",
              { bold: "6" },
              { icon: 1 },
              " “StaneTech Weaponry” Villain worth 4VP."
            ]
          ]
        },
        {
          name: "Hostile Takeover",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If there are no Villains in the bank, reveal the top card of the Villain Deck. If it’s a Villain, it enters the Bank."
            ]
          ]
        },
        {
          name: "Overloaded Arsenal",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound. Then each other player reveals a ",
              { hc: 3 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Sonic Stunner",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Hero or discards down to 4 cards."
            ]
          ]
        },
        {
          name: "Unexpected Betrayal",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If the Bank is empty, the player on your right chooses a Villain from their Victory Pile. That Villain enters the Bank."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 29,
      name: "Hammer Drone Army",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Look at the top two cards of your deck. KO one of them and put the other back."
            ]
          ]
        },
      ]
    },
    {
      id: 30,
      name: "HYDRA Pilots",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
      ]
    },
    {
      id: 31,
      name: "HYDRA Spies",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
      ]
    },
    {
      id: 32,
      name: "Ten Rings Fanatics",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 71,
      name: "Chitauri",
      cards: [
        {
          name: "Chitauri Soldier",
          qtd: 2,
          vp: "2",
          vAttack: "3+",
          abilities: [
            { keyword: 49, text: "Rooftops Conqueror 2" },
            [
              {
                bold: "Ambush"
              },
              ": Chitauri Soldier captures a Bystander."
            ]
          ]
        },
        {
          name: "Chitauri Commander",
          qtd: 2,
          vp: "2",
          vAttack: "3+",
          abilities: [
            { keyword: 49, text: "Rooftops Conqueror 2" },
            [
              {
                bold: "Ambush"
              },
              ": ",
              { italic: "(After this enters the city)" },
              " If the Rooftops are empty, reveal the top card of the Villain Deck. If it's a Villain, that Villain enters the Rooftops."
            ]
          ]
        },
        {
          name: "Chitauri Leviathan",
          qtd: 2,
          vp: "4",
          vAttack: "5+",
          abilities: [
            { keyword: 49, text: "Rooftops Conqueror 2" },
            [
              {
                bold: "Fight"
              },
              ": Each player with no Bystanders in their Victory Pile gains a Wound."
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
          name: "Chitauri Chariot",
          qtd: 2,
          vp: "3",
          vAttack: "4+",
          abilities: [
            { keyword: 49, text: "Rooftops Conqueror 2" },
            [
              {
                bold: "Ambush"
              },
              ": ",
              { italic: "(After this enters the city)" },
              " If the Rooftops are empty, move this Villain there."
            ]
          ]
        }
      ]
    },
    {
      id: 72,
      name: "Gamma Hunters",
      cards: [
        {
          name: "Sonic Cannon",
          qtd: 2,
          vp: "2",
          vAttack: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each Player discards two cards, then draws a card."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same Effect"
            ]
          ]
        },
        {
          name: "Lt. Gen “Thunderbolt“ Ross",
          qtd: 2,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each Player reveals their hand. Each player with any ",
              { hc: 4 },
              " cards must discard one of them or gain a Wound."
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
          name: "Abomination, Raging Monster",
          qtd: 2,
          vp: "4",
          vAttack: "4+",
          abilities: [
            { keyword: 49, text: "Streets Conqueror 3" },
            [
              {
                bold: "Ambush"
              },
              ": ",
              { italic: "(After this enters the city)" },
              " If the Streets are empty, move another Villain from any city space to the Streets."
            ]
          ]
        },
        {
          name: "Fighter Jet",
          qtd: 2,
          vp: "2",
          vAttack: "3+",
          abilities: [
            { keyword: 49, text: "Streets Conqueror 2" },
            [
              {
                bold: "Fight"
              },
              ": KO one of your heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 73,
      name: "Enemies of Asgard",
      filterName: "Enemies of Asgard (Marvel Studios)",
      cards: [
        {
          name: "Destroyer",
          qtd: 1,
          vp: "5",
          vAttack: "7",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO all your ",
              { team: 2 },
              " Heroes."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player KOs two of their Heroes."
            ]
          ]
        },
        {
          name: "Enslaved Hawkeye",
          qtd: 2,
          vp: "4",
          vAttack: "6",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Draw three cards"
            ]
          ]
        },
        {
          name: "Frost Giant",
          qtd: 3,
          vp: "2",
          vAttack: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals a ",
              { hc: 3 },
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
          name: "Laufey, Frost Giant King",
          qtd: 2,
          vp: "4",
          vAttack: "6",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals a ",
              { hc: 3 },
              " Hero or gains a Wound."
            ],
            [
              {
                bold: "Fight"
              },
              ": Choose a player. That player KOs any number of Wounds from their hand and discard pile."
            ]
          ]
        }
      ]
    },
    {
      id: 74,
      name: "HYDRA",
      filterName: "HYDRA (Marvel Studios)",
      cards: [
        {
          name: "Endless Armies of HYDRA",
          qtd: 3,
          vp: "3",
          vAttack: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Play the top two cards of the Villain Deck."
            ]
          ]
        },
        {
          name: "HYDRA Motorcycle Squad",
          qtd: 3,
          vp: "1",
          vAttack: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": You may gain a S.H.I.E.L.D. Officer."
            ]
          ]
        },
        {
          name: "Arnim Zola",
          qtd: 1,
          vp: "3+",
          vAttack: "6",
          abilities: [
            [
              "Arnim Zola is worth ",
              { bold: "+3" },
              { icon: 4 },
              " for each other HYDRA Villain in your Victory Pile."
            ]
          ]
        },
        {
          name: "HYDRA Tank",
          qtd: 1,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player without another HYDRA Villain in their Victory Pile gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        }
      ]
    },
    {
      id: 75,
      name: "Iron Foes",
      cards: [
        {
          name: "Hammer Drone Marine",
          qtd: 2,
          vp: "2",
          vAttack: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Look at the top three cards of your deck. KO one of them and put the rest back in any order."
            ]
          ]
        },
        {
          name: "Raza, Ten Rings Leader",
          qtd: 2,
          vp: "3",
          vAttack: "4+",
          abilities: [
            [
              "Raza gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander he has."
            ],
            [
              {
                bold: "Ambush"
              },
              ": Raza captures a Bystander from the Bystander Stack and a random Bystander from each player's Victory Pile."
            ]
          ]
        },
        {
          name: "Whiplash",
          qtd: 2,
          vp: "4",
          vAttack: "6",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals a ",
              { hc: 5 },
              " hero or gains a Wound."
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
          name: "Justin Hammer",
          qtd: 2,
          vp: "2",
          vAttack: "3+",
          abilities: [
            { keyword: 49, text: "Bank Conqueror 2" },
            [
              {
                bold: "Fight"
              },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              " usable only to recruit heroes in the HQ space under the Bank."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 100,
      name: "Asgard Under Siege",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Add an extra Henchman group to the Villain Deck."
            ],
            [
              { bold: "Twist" },
              ": Play the top 2 cards of the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": If 12 Villains escape."
            ],
          ]
        },
      ]
    },
    {
      id: 101,
      name: "Destroy the Cities of Earth!",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. 12 Bystanders in the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Each Villain gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander it has."
            ],
            [
              { bold: "Twist" },
              ": Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When 8 Bystanders are carried away by escaping Villains."
            ],
          ]
        },
      ]
    },
    {
      id: 102,
      name: "Enslave Minds with the Chitauri Scepter",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. 6 Heroes. Chitauri Villain Group required. Shuffle 12 random Heroes from the Hero Deck into the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Heroes in the Villain Deck count as “Enslaved“ Villains with ",
              { icon: 1 },
              " equal to the Hero's ",
              { icon: 3 },
              { bold: "+2" },
              ". If you defeat that Hero, you gain it."
            ],
            [
              { bold: "Twist" },
              ": The highest-cost Hero from the HQ moves into the Sewers as an “Enslaved“ Villain as above."
            ],
            [
              { bold: "Evil Wins" },
              ": If 6 Heroes get into the Escaped Villains pile."
            ],
          ]
        },
      ]
    },
    {
      id: 103,
      name: "Invade Asgard",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists. Each Twist is a Dark Portal."
            ],
            [
              { bold: "Twist 1" },
              ": Put the Dark Portal above the Mastermind. The Mastermind gets ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Twists 2-6" },
              ": Put the Dark Portal in the leftmost city space that doesn't yet have a Dark Portal. Villains in that city space get ",
              { bold: "+1" },
              { icon: 1 },
              "."
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
      id: 104,
      name: "Radioactive Palladium Poisoning",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Wound stack holds 6 Wounds per player."
            ],
            [
              { bold: "Twist" },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound."
            ],
            [
              { bold: "Evil Wins" },
              ": If the Wound stack runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 105,
      name: "Replace Earth's Leaders with HYDRA",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 5 Twists. 3 additional Twists next to this Scheme. 18 total Bystanders in the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Bystanders in the Villain Deck count as “Infiltrator“ Villains, with ",
              { icon: 1 },
              " equal to the number of Twists next to this Scheme."
            ],
            [
              { bold: "Twist" },
              ": Put the Twist next to this Scheme."
            ],
            [
              { bold: "Evil Wins" },
              ": If 5 “Infiltrators“ escape."
            ],
          ]
        },
      ]
    },
  ]
}