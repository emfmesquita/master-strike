import { CardSetDef } from '../cardTypes';

export const MarvelStudios: CardSetDef = {
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/iron-monger-01.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/iron-monger-02.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/iron-monger-05.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/iron-monger-04.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/iron-monger-03.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/hammer-drone-army.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/hydra-pilots.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/hydra-spies.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/ten-rings-fanatics.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/chitauri-03.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/chitauri-04.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/chitauri-01.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/chitauri-02.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/gamma-hunters-01.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/gamma-hunters-03.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/gamma-hunters-04.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/gamma-hunters-02.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/enemies-of-asgard-02-1.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/enemies-of-asgard-04-1.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/enemies-of-asgard-03-1.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/enemies-of-asgard-01-1.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-03-1.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-04-1.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-01-1.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-02-1.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/iron-foes-01.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/iron-foes-02.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/iron-foes-03.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/iron-foes-04.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-03-11.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-02-11.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-06-5.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-07-5.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-01-11.png",
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
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/scheme-05-5.png",
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