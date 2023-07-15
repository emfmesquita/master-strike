import { CardSet } from '../types';

export const AntMan: CardSet = {
  id: 21,
  heroes: [
    {
      id: 172,
      name: "Ant-Man",
      team: 1,
      cards: [
        {
          name: "Ride the Ants",
          hc: 5,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          attack: "1",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 5 }
            ],
            "Draw a card."
          ]
        },
        {
          name: "Risky Science",
          hc: 5,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 }
            ],
            [
              { hc: 5 },
              ": You may discard a card. If you do, draw a card."
            ]
          ]
        },
        {
          name: "Giant Ego",
          hc: 4,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 5 }
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each extra card you drew this turn."
            ]
          ]
        },
        {
          name: "Pym Particles",
          hc: 5,
          rarity: 3,
          cost: 9,
          attack: "5",
          costAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
              { hc: 5 }
            ],
            [
              "A hero in the HQ with no Size-Changing abilities gain ",
              { keyword: 26 },
              " ",
              { hc: 5 },
              " this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 173,
      name: "Black Knight",
      team: 1,
      cards: [
        {
          name: "Amulet of Avalon",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { keyword: 51 },
              " by the color of your choice."
            ]
          ]
        },
        {
          name: "Defend the Weak",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 4 },
              ": Return a 0-cost card from your discard pile to your hand."
            ]
          ]
        },
        {
          name: "Flying Steed",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "When a Master Strike is played, before it takes effect, you may discard this card. If you do, draw three extra cards at the end of this turn."
            ]
          ]
        },
        {
          name: "The Ebony Blade",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the printed ",
              { icon: 1 },
              " of a Villain in your Victory Pile. ",
              { italic: "(Mastermind tactics aren't Villains.)" }
            ]
          ]
        }
      ]
    },
    {
      id: 174,
      name: "Jocasta",
      team: 1,
      cards: [
        {
          name: "Creation of Ultron",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 5 },
              ": You get ",
              { keyword: 51 },
              " by ",
              { hc: 5 },
              "."
            ]
          ]
        },
        {
          name: "Reprocess",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              "If your discard pile is empty, you get ",
              { bold: "+2" },
              { icon: 2 },
              ". Otherwise, shuffle your discard pile into your deck."
            ]
          ]
        },
        {
          name: "Holographic Image Inducer",
          hc: 5,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 5 }
            ],
            "Draw two cards."
          ]
        },
        {
          name: "Electromagnetic Eyebeams",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              "If your discard pile is empty, you get ",
              { bold: "+2" },
              { icon: 1 },
              ". Otherwise shuffle your discard pile into your deck."
            ]
          ]
        }
      ]
    },
    {
      id: 175,
      name: "Wasp",
      team: 1,
      cards: [
        {
          name: "Bio-Electric Sting",
          hc: 1,
          rarity: 1,
          cost: 3,
          costAsterisk: true,
          attack: "1+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 1 },
              { hc: 1 }
            ],
            [
              { hc: 1 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Tiny Winged Justice",
          hc: 1,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          recruit: "2",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 1 }
            ],
            [
              { hc: 1 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Swarm Tactics",
          hc: 3,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 1 }
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you recruited this turn."
            ]
          ]
        },
        {
          name: "Founding Avenger",
          hc: 1,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          attack: "4+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 1 },
              { hc: 1 },
              { hc: 1 },
              { hc: 1 },
              { hc: 1 }
            ],
            [
              { team: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other ",
              { team: 1 },
              " card you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 176,
      name: "Wonder Man",
      team: 1,
      cards: [
        {
          name: "One-Hit Wonder",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "Chose one: Draw a card, or you get ",
              { keyword: 51 },
              " by ",
              { hc: 4 },
              "."
            ]
          ]
        },
        {
          name: "Ionic Energy",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            "You may put a card from the HQ on the bottom of the Hero Deck.",
            [
              { hc: 3 },
              ": You get ",
              { keyword: 51 },
              " by ",
              { hc: 3 },
              "."
            ]
          ]
        },
        {
          name: "Absorb Ambient Power",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "Put a card from the HQ on the bottom of the Hero Deck. If that card had a ",
              { icon: 2 },
              " icon, you get ",
              { bold: "+3" },
              { icon: 2 },
              ". If that card had an ",
              { icon: 1 },
              " icon, you get ",
              { bold: "+3" },
              { icon: 1 },
              ". ",
              { italic: "(if both, get both.)" }
            ]
          ]
        },
        {
          name: "8th Wonder of the World",
          hc: 4,
          rarity: 3,
          cost: 8,
          costAsterisk: true,
          attack: "4+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 4 }
            ],
            [
              "Choose any number of cards from the HQ. Put them on the bottom of the Hero Deck. Then you get ",
              { keyword: 51 },
              " by ",
              { hc: 3 },
              " and ",
              { hc: 4 },
              "."
            ]
          ]
        }
      ]
    },
  ],
  masterminds: [
    {
      id: 57,
      name: "Morgan Le Fay",
      vAttack: "7",
      vp: 6,
      cards: [
        {
          name: "Morgan Le Fay",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 52 },
            [
              { bold: "Always Leads" },
              ": Queen's Vengeance"
            ],
            [
              { bold: "Master Strike" },
              ": Each player in turn reveals a ",
              { hc: 1 },
              " Hero or gains a 0-cost Hero or Wound from the KO pile."
            ]
          ]
        },
        {
          name: "Epic Morgan Le Fay",
          vAttack: "9",
          vAttackAsterisk: true,
          epic: true,
          abilities: [
            { keyword: 52 },
            [
              { bold: "Always Leads" },
              ": Queen's Vengeance"
            ],
            [
              { bold: "Master Strike" },
              ": Each player in turn gains a Wound, then gains a 0-cost Hero from the KO pile."
            ]
          ]
        },
        {
          name: "Reverse the Flow of Time",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": For the rest of the game, players take turns in the opposite order around the table."
            ]
          ]
        },
        {
          name: "Sorcerous Blasts",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards a ",
              { hc: 1 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Stolen Tomes of Merlin",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+4" },
              { icon: 2 },
              " usable only for recruiting ",
              { hc: 1 },
              " and/or ",
              { hc: 3 },
              " Heroes."
            ]
          ]
        },
        {
          name: "Transmogrify",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player in turn KOs a non-grey Hero from their discard pile, then gains a card from the KO pile that has a lower cost."
            ]
          ]
        }
      ]
    },
    {
      id: 58,
      name: "Ultron",
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "Ultron",
          vAttack: "9+",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Ultron's Legacy"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or puts a non-grey Hero from their discard pile into a “Threat Analysis pile“ next to Ultron. Ultron is ",
              { keyword: 51 },
              " by each color in his Threat Analysis pile."
            ]
          ]
        },
        {
          name: "Epic Ultron",
          vAttack: "10+",
          epic: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": Ultron's Legacy"
            ],
            [
              { bold: "Master Strike" },
              ": Each player puts a non-grey Hero from their hand into a “Threat Analysis pile“ next to Ultron. Ultron is ",
              { keyword: 51, text: "Triple Empowered" },
              " by each color in his Threat Analysis pile."
            ]
          ]
        },
        {
          name: "Arrogant Blindspot",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may gain a Hero from Ultron's Threat Analysis pile."
            ]
          ]
        },
        {
          name: "Paralyzing Encephalo-Ray",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and discards each card that has the same card name as any card in Ultron's Threat Analysis pile."
            ]
          ]
        },
        {
          name: "Predictive Analysis",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put the top three cards of the Hero Deck into Ultron's Threat Analysis pile."
            ]
          ]
        },
        {
          name: "Self-Repairing Legions",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player in turn reveals a ",
              { hc: 5 },
              " Hero or puts an Ultron's Legacy Villain from the Victory Pile into an empty city space."
            ]
          ]
        }
      ]
    },
  ],
  villains: [
    {
      id: 76,
      name: "Ultron's Legacy",
      cards: [
        {
          name: "Ultron Roboticks",
          qtd: 1,
          vp: "2",
          vAttack: "3",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 }
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Original Ultron-1",
          qtd: 1,
          vp: "2",
          vAttack: "3+",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 3 }
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Legions of Ultron",
          qtd: 1,
          vp: "3",
          vAttack: "4+",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 5 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Alkhema",
          qtd: 1,
          vp: "3",
          vAttack: "4+",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 2 }
            ],
            [
              {
                bold: "Fight"
              },
              ": KO a card from your discard pile."
            ]
          ]
        },
        {
          name: "Ultron-Pym",
          qtd: 1,
          vp: "3",
          vAttack: "6",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
              { hc: 5 }
            ],
            [
              {
                bold: "Fight"
              },
              ": A Hero in the HQ with no Size-Changing abilites gains ",
              { keyword: 26 },
              " ",
              { hc: 5 },
              " this turn."
            ]
          ]
        },
        {
          name: "Future Ultron Prime",
          qtd: 1,
          vp: "5",
          vAttack: "5+",
          abilities: [
            [
              { keyword: 51, text: "Double Empowered" },
              " by ",
              { hc: 5 }
            ],
            [
              {
                bold: "Ambush"
              },
              ": Put all non-",
              { hc: 5 },
              " Heroes from the HQ on the bottom of the Hero Deck."
            ]
          ]
        },
        {
          name: "Brutish Ultron-14",
          qtd: 1,
          vp: "4",
          vAttack: "5+",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 4 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Each player reveals a ",
              { hc: 4 },
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
          name: "Crimson Cowl",
          qtd: 1,
          vp: "4",
          vAttack: "5+",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 1 }
            ],
            [
              {
                bold: "Ambush"
              },
              ": Crimson Cowl captures a Bystander."
            ]
          ]
        }
      ]
    },
    {
      id: 77,
      name: "Queen's Vengeance",
      cards: [
        {
          name: "Daystar",
          qtd: 1,
          vp: "2",
          vAttack: "5",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
              { hc: 3 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Reveal the top card of your deck. You may KO it."
            ]
          ]
        },
        {
          name: "Blackbird",
          qtd: 1,
          vp: "3",
          vAttack: "3",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 52 },
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Gigantus",
          qtd: 1,
          vp: "4",
          vAttack: "7",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
              { hc: 4 }
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Iron Knight",
          qtd: 1,
          vp: "4",
          vAttack: "4",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 52 },
            [
              {
                bold: "Escape"
              },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Yeoman America",
          qtd: 1,
          vp: "5",
          vAttack: "5",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 52 },
            [
              {
                bold: "Fight"
              },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each color of Hero you have ",
              { italic: "(including grey)" },
              "."
            ]
          ]
        },
        {
          name: "Star-Knight",
          qtd: 1,
          vp: "3",
          vAttack: "3",
          vAttackAsterisk: true,
          abilities: [
            { keyword: 52 },
            [
              {
                bold: "Fight"
              },
              ": KO a card from your discard pile."
            ]
          ]
        },
        {
          name: "Pixie",
          qtd: 1,
          vp: "2",
          vAttack: "3",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 1 },
              { hc: 1 },
              { hc: 1 },
              { hc: 1 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Reveal a ",
              { hc: 1 },
              " Hero or play another card from the Villain Deck."
            ]
          ]
        },
        {
          name: "Mordred the Evil",
          qtd: 1,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Choose a card in your discard pile. The player to your right gains it."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player simultaneously does that same effect."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 106,
      name: "Age of Ultron",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. 4-5 Players: Add another Hero."
            ],
            [
              { bold: "Twist" },
              ": Put the top card of the Hero Deck next to the Scheme in an “Evolution“ Pile. Then this Twist enters the city as an “Evolved Ultron“ Villain."
            ],
            [
              { bold: "Special Rules" },
              ": Evolved Ultrons have ",
              { bold: "4" },
              { icon: 1 },
              " and are ",
              { keyword: 51 },
              " by each color in the Evolution pile. They're worth 6VP."
            ],
            [
              { bold: "Evil Wins" },
              ": When 7 Evolved Ultrons are in the city and/or Escape Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 107,
      name: "Pull Earth into Medieval Times",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists."
            ],
            [
              { bold: "Twist 1-6" },
              ": Until the start of your next turn, all Villains and Mastermind everywhere have ",
              { keyword: 52 },
              "."
            ],
            [
              { bold: "Twist 7-9" },
              ": Each player puts a Villain from the Victory Pile into the Escape Pile."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Villains per player have escaped."
            ],
          ]
        },
      ]
    },
    {
      id: 108,
      name: "Transform Commuters into Giant Ants",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": Twists equal to the number of players plus 6."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme. Then for each Twist in that stack, put a Bystander face down next to the Mastermind as a ",
              { bold: "2" },
              { icon: 1 },
              " “Giant Ant“ Villain. When you fight one, rescue it as a Bystander."
            ],
            [
              { bold: "Evil Wins" },
              ": When ther are 10 Giant Ants next to the Mastermind."
            ],
          ]
        },
      ]
    },
    {
      id: 109,
      name: "Trap Heroes in the Microverse",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Add all 14 cards for and extra Hero the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Heroes in the Villain Deck are “Micro-Sized“ Villains with ",
              { icon: 1 },
              " equal to their printed cost. They have ",
              { keyword: 26 },
              " for their card color and no outher abilites while in the city. When you fight one, choose any player to gain it as a Hero."
            ],
            [
              { bold: "Twist" },
              ": Play two cards from the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Villains per player have escaped or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
  ]
}