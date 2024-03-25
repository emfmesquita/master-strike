import { CardSetDef } from '../cardTypes';

export const MSAntManWasp: CardSetDef = {
  id: 39,
  heroes: [
    {
      id: 273,
      name: "Scott Lang, Cat Burglar",
      team: 8,
      cards: [
        {
          name: "Petty Larceny",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ScottLangCatBurgler_2Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 1,
          recruit: "1+",
          abilities: [
            [
              { keyword: 94 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ],
          ]
        },
        {
          name: "Shocking Support",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ScottLangCatBurgler_3Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 94 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "X-Con Security Van",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ScottLangCatBurgler_4Common.png",
          hc: 5,
          qtd: 3,
          rarity: 1,
          cost: 5,
          attack: "2",
          abilities: [
            [
              { keyword: 94 },
              ": You may move a villain to an empty city space. If you do, KO one of your Heroes."
            ],
          ]
        },
        {
          name: "Anything for Cassie",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ScottLangCatBurgler_5Uncommon.png",
          hc: 2,
          qtd: 2,
          rarity: 2,
          cost: 2,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              "Whenever you gain a Wound this turn, return that Wound to the Wound Deck."
            ],
            [
              { keyword: 94 },
              ": Rescue a Bystander."
            ],
          ]
        },
        {
          name: "Putting a Crew Together",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ScottLangCatBurgler_6Uncommon.png",
          hc: 4,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { keyword: 94 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each different cost of card you have."
            ],
          ]
        },
        {
          name: "The Big Score",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ScottLangCatBurgler_1Rare.png",
          hc: 1,
          qtd: 1,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              { keyword: 94 },
              ": You get ",
              { bold: "+4" },
              { icon: 1 },
              ". If the card revealed from the Villain Deck is a Master Strike, KO it and put a card from the Bystander Deck on top of the Villain Deck."
            ],
          ]
        },
      ]
    },
    {
      id: 274,
      name: "Ant-Man",
      filterName: "Ant-Man (MS AW)",
      team: 1,
      cards: [
        {
          name: "Hitch a Ride",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Ant-ManMCU_2Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 2,
          costAsterisk: true,
          recruit: "1+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 1 }
            ],
            [
              { keyword: 95 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Look Out for the Little Guy!",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Ant-ManMCU_3Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 3,
          costAsterisk: true,
          attack: "1",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 4 },
            ],
            [
              "Reveal the top card of your deck. If it's ",
              { hc: 4 }, 
              " or has ",
              { keyword: 26 }, 
              " draw it."
            ],
          ]
        },
        {
          name: "Shrink Away",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Ant-ManMCU_4Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 1 },
            ],
            [
              { hc: 1 },
              ": All Villains and the Mastermind get ",
              { bold: "-1" },
              { icon: 1 }, 
              " this turn."
            ]
          ]
        },
        {
          name: "Bug Swarm",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Ant-ManMCU_5Uncommon.png",
          hc: 4,
          qtd: 2,
          rarity: 2,
          cost: 5,
          costAsterisk: true,
          recruit: "2",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
            ],
            [
              { keyword: 95 },
              ": You may KO a card from your hand or discard pile."
            ],
          ]
        },
        {
          name: "Tiny little Risk",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Ant-ManMCU_6Uncommon.png",
          hc: 1,
          qtd: 2,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 1 },
              { hc: 1 },
              { hc: 1 },
            ],
            [
              { keyword: 94 },
              ": Draw two cards."
            ],
          ]
        },
        {
          name: "Giant-Man",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Ant-ManMCU_1Rare.png",
          hc: 4,
          qtd: 1,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          attack: "6+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you played this turn that's ",
              { hc: 4 },
              " and/or has Size-Changing."
            ]
          ]
        },
      ]
    },
    {
      id: 275,
      name: "Wasp",
      filterName: "Wasp (MS AW)",
      team: 1,
      cards: [
        {
          name: "Flitting Sting",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WaspMCU_2Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 3,
          costAsterisk: true,
          recruit: "1+",
          attack: "1+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 3 }
            ],
            [
              { hc: 3 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              ", and ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Positive Ions",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WaspMCU_4Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 3 },
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other card you have with a “+“ symbol in its ",
              { icon: 1 },
              " icon."
            ],
          ]
        },
        {
          name: "Master Physicist",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WaspMCU_3Common.png",
          hc: 5,
          qtd: 3,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          recruit: "2+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 5 },
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each other card you have with a “+“ symbol in its ",
              { icon: 2 },
              " icon."
            ]
          ]
        },
        {
          name: "Follow my Lead",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WaspMCU_5Uncommon.png",
          hc: 3,
          qtd: 2,
          rarity: 2,
          cost: 2,
          costAsterisk: true,
          attack: "1+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 3 },
            ],
            [
              "If this is the first card you played this turn, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Infiltrate",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WaspMCU_6Uncommon.png",
          hc: 5,
          qtd: 2,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "1+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
            ],
            [
              "When you draw a new hand this turn, draw an extra card."
            ],
            [
              { keyword: 94 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Hope Returns",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WaspMCU_1Rare.png",
          hc: 3,
          qtd: 1,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          attack: "4+",
          recruit: "4+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each other card you have with a “+“ symbol in its ",
              { icon: 2 },
              " icon."
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other card you have with a “+“ symbol in its ",
              { icon: 1 },
              " icon."
            ]
          ]
        },
      ]
    },
    {
      id: 276,
      name: "Cassie Lang",
      team: 1,
      cards: [
        {
          name: "Start Small",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CassieLang_2Common.png",
          hc: 5,
          qtd: 3,
          rarity: 1,
          cost: 2,
          costAsterisk: true,
          recruit: "2",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 5 }
            ],
            [
              "To play this, you must discard a card. Then, if you have a Villain in your Victory Pile worth 2",
              { icon: 4 },
              " or less, draw a card."
            ]
          ]
        },
        {
          name: "Giant Hug",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CassieLang_3Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          recruit: "2",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 4 },
            ],
            [
              "Choose a player. If that player reveals a card that costs 5 or more, that player draws a card."
            ],
          ]
        },
        {
          name: "Colossal Stomp",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CassieLang_4Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 4 },
            ],
            [
              { hc: 4 },
              ": You may defeat a Villain worth 2",
              { icon: 4 },
              " or less."
            ]
          ]
        },
        {
          name: "Quantum Beacon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CassieLang_5Uncommon.png",
          hc: 5,
          qtd: 2,
          rarity: 2,
          cost: 5,
          costAsterisk: true,
          attack: "3",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
            ],
            [
              { hc: 5 },
              ": Reveal the top card of the Villain Deck. If it's a Bystander, rescue it. If it's a Vilain worth 2",
              { icon: 4 },
              " or less, you may fight it this turn. If you rescue or defeat that card, don't play a card from the Vilain Deck next turn."
            ],
          ]
        },
        {
          name: "Learn from the Past",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CassieLang_6Uncommon.png",
          hc: 4,
          qtd: 2,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "3",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
            ],
            [
              { hc: 4 },
              ": You may do the Fight effect of a Villain in your Victory Pile worth 2",
              { icon: 4 },
              " or less."
            ],
          ]
        },
        {
          name: "Inspire Revolution",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CassieLang_1Rare.png",
          hc: 4,
          qtd: 1,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          attack: "5+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain worth 2",
              { icon: 4 },
              " or less in your Victory Pile."
            ]
          ]
        },
      ]
    },
    {
      id: 277,
      name: "Janet van Dyne",
      team: 0,
      cards: [
        {
          name: "Subatomic Size",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/JanetVanDyne_5Uncommon.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 2,
          costAsterisk: true,
          attack: "0+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 1 },
              { hc: 1 },
            ],
            [
              "Draw a card."
            ],
            [
              { hc: 1 },
              { hc: 1 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Search for Peace",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/JanetVanDyne_2Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { hc: 1 },
              ": ",
              { keyword: 96 },
              ". You get ",
              { bold: "+" },
              { icon: 2 },
              " equal to the Found Hero's printed ",
              { icon: 2 },
              "."
            ],
          ]
        },
        {
          name: "Prepare for War",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/JanetVanDyne_3Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 3 },
              ": ",
              { keyword: 96 },
              ". You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the Found Hero's printed ",
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Wasp of Another Generation",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/JanetVanDyne_4Common.png",
          hc: 1,
          qtd: 2,
          rarity: 2,
          cost: 5,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 1 },
            ],
            [
              { hc: 1 },
              ": ",
              { keyword: 96 },
              ". You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each time you explored this turn."
            ],
          ]
        },
        {
          name: "Quantum Contradiction",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/JanetVanDyne_6Uncommon.png",
          hc: 3,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "4",
          recruit: "4",
          abilities: [
            [
              "When you play this, put it on top of the Hero Deck or KO it."
            ],
          ]
        },
        {
          name: "Finally Found You",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/JanetVanDyne_1Rare.png",
          hc: 1,
          qtd: 1,
          rarity: 3,
          cost: 8,
          attack: "4+",
          recruit: "4+",
          abilities: [
            [
              { keyword: 96 }
            ],
            [
              { hc: 1 },
              ": You get ",
              { bold: "+" },
              { icon: 2 },
              " equal to the Fourd Hero's printed ",
              { icon: 2 },
              " and ",
              { bold: "+" },
              { icon: 1 },
              " equal to its printed ",
              { icon: 1 },
              "."
            ]
          ]
        },
      ]
    },
    {
      id: 278,
      name: "Freedom Fighters",
      team: 0,
      cards: [
        {
          name: "Mystics",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FreedomFighters_2Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 3,
          recruit: "1",
          abilities: [
            [
              "When you draw a new hand this turn, draw an extra card."
            ],
          ]
        },
        {
          name: "Steel Warrior",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FreedomFighters_3Common.png",
          hc: 2,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              { keyword: 49, text: "Streets Conqueror 1" }
            ],
            [
              "Draw a card."
            ],
          ]
        },
        {
          name: "Xolum",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FreedomFighters_4Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { keyword: 49, text: "Bridge Conqueror 1" }
            ],
            [
              { hc: 3 },
              ":  You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Veb",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FreedomFighters_5Uncommon.png",
          hc: 2,
          qtd: 2,
          rarity: 2,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "Reveal the top card of your deck. If that card has any “holes“ printed inside any of its icons ",
              { italic: "(0, 4, 6, 8, or 9)" },
              ", draw it.",
            ],
            [
              { hc: 2 },
              ": You may KO the card you drew this way."
            ],
          ]
        },
        {
          name: "Quaz",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FreedomFighters_6Uncommon.png",
          hc: 3,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "2+",
          recruit: "2+",
          abilities: [
            [
              { hc: 3 },
              ": Choose ",
              { icon: 2 },
              " or ",
              { icon: 1 },
              ". Then ",
              { keyword: 96 },
              "."
            ],
            [
              "You get the printed value of the icon you chose on the Found Hero."
            ]
          ]
        },
        {
          name: "Freedom Forever",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/FreedomFighters_1Rare.png",
          hc: 2,
          qtd: 1,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { keyword: 96 },
            ],
            [
              { hc: 2 },
              ": You may choose a player to gain the Found Hero."
            ]
          ]
        },
      ]
    },
    {
      id: 279,
      name: "Jentorra",
      team: 0,
      cards: [
        {
          name: "Take the High Ground",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Jentorra_2Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { keyword: 49, text: "Bridge Conqueror 1" }
            ],
            [
              "If there are no Villains on the Rooftops, draw a card."
            ],
          ]
        },
        {
          name: "Hit and Run",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Jentorra_3Common.png",
          hc: 2,
          qtd: 3,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "2",
          abilities: [
            [
              "You may move a Villain to an adjacent city space. If another Villain is already there, swap them."
            ],
            [
              { hc: 2 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Unite the Oppressed",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Jentorra_4Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              ": ",
              { keyword: 49, text: "Sewers Conqueror 2" }
            ],
          ]
        },
        {
          name: "Find Your Courage",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Jentorra_5Uncommon.png",
          hc: 2,
          qtd: 2,
          rarity: 2,
          cost: 5,
          recruit: "3+",
          abilities: [
            [
              { hc: 2 },
              ": ",
              { keyword: 96 },
              ". If the Found Hero is ",
              { hc: 2 },
              " or has no team icon, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ],
          ]
        },
        {
          name: "Lead Powerful Allies",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Jentorra_6Uncommon.png",
          hc: 4,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              ": ",
              { keyword: 96 },
              ". You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the Found Hero's cost."
            ],
          ]
        },
        {
          name: "Conquer the Conqueror",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Jentorra_1Rare.png",
          hc: 2,
          qtd: 1,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              { keyword: 49, text: "Bridge Conqueror 1" }
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain worth, 4",
              { icon: 4 },
              " or more and each Mastermind Tactic in your Victory Pile."
            ]
          ]
        },
      ]
    },
    {
      id: 280,
      name: "Ant Army",
      team: 0,
      cards: [
        {
          name: "Up the Ante",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/AntArmy_2Common.png",
          hc: 2,
          qtd: 3,
          rarity: 1,
          cost: 1,
          attack: "1",
          abilities: [
            [
              { keyword: 94 },
              ": Draw a card."
            ],
          ]
        },
        {
          name: "Antagonize",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/AntArmy_3Common.png",
          hc: 2,
          qtd: 3,
          rarity: 1,
          cost: 2,
          costAsterisk: true,
          attack: "1+",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 2 }
            ],
            [
              { keyword: 95 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Anticipate",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/AntArmy_4Common.png",
          hc: 5,
          qtd: 3,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          recruit: "2",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 5 }
            ],
            [
              { keyword: 95 },
              ": Draw a card."
            ],
          ]
        },
        {
          name: "Antiproton Experiments",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/AntArmy_5Uncommon.png",
          hc: 5,
          qtd: 2,
          rarity: 2,
          cost: 5,
          costAsterisk: true,
          attack: "1+",
          recruit: "1+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
            ],
            [
              { keyword: 95 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              " and ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Anti-Tank Weapons",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/AntArmy_6Uncommon.png",
          hc: 5,
          qtd: 2,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
            ],
            [
              { hc: 5 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Revolutionary Anthem",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/AntArmy_1Rare.png",
          hc: 5,
          qtd: 1,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          attack: "4+",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
            ],
            [
              { keyword: 95 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { keyword: 94 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              ". If the card revealed from the Villain Deck is a Scheme Twist, you get another ",
              { bold: "+2" },
              { icon: 1 },
              ", and you may shuffle that deck."
            ]
          ]
        },
      ]
    },
  ],
  masterminds: [
    {
      id: 97,
      name: "Darren Cross",
      vp: 6,
      vAttack: "8",
      cards: [
        {
          name: "Darren Cross",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/DarrenCross.png",
          vAttack: "8+",
          abilities: [
            [
              { keyword: 49, text: "Bank Conqueror 6" }
            ],
            [
              { bold: "Always Leads" },
              ": Cross Technologies",
            ],
            [
              { bold: "Master Strike" },
              ": Darren Cross ",
              { keyword: 97, text: "Double-Crosses" },
              " each player. Then he ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Yellowjacket",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/DarrenCross_Transformed.png",
          vAttack: "12",
          vAttackAsterisk: true,
          transformed: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards a ",
              { hc: 2 },
              " Hero or ",
              { keyword: 26 },
              " Hero or gains a Wound. Yellowjacket ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Corporate Raider",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/DarrenCrossTactic1.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO one of your Heroes with a ",
              { icon: 2 },
              " icon. If the Bank is empty, move a Villain to the Bank."
            ],
            [
              "This Mastermind ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Protect My Investments",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/DarrenCrossTactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If the Bank is empty, each other player chooses a Villain worth 2",
              { icon: 4 },
              " or more from their Victory Pile. You choose one of those Villains to enter the Bank.",
            ],
            [
              "This Mastermind ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Shrinking Research Budget",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/DarrenCrossTactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each Hero currently in the HQ that has no ",
              { keyword: 26 },
              " abilities gains ",
              { keyword: 26 },
              " for one of its Hero Classes."
            ],
            [
              "This Mastermind ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Steal Pym Particles",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/DarrenCrossTactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player shuffles a ",
              { hc: 1 },
              ", ",
              { hc: 5 },
              ", or ",
              { keyword: 26 },
              " card from their hand or discard pile into the Hero Deck."
            ],
            [
              "This Mastermind ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
      ]
    },
    {
      id: 98,
      name: "Ghost, Master Thief",
      vp: 6,
      vAttack: "8",
      tacticName: "Ghost",
      cards: [
        {
          name: "Ghost, Master Thief",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/GhostMasterThief.png",
          vAttack: "8+",
          abilities: [
            [
              "Ghost gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each different cost among her “Kidnapped Victimis.“ While this side is face up, you may recruit cards from her Kidnapped Victims ",
              { italic: "(in any order)" },
              ", spending 2",
              { icon: 2 },
              " extra for each."
            ],
            [
              { bold: "Always Leads" },
              ": Ghost Chasers",
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a ",
              { hc: 2 },
              " Hero or discards two cards with ",
              { icon: 2 },
              " icons. Ghost ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Ghost, Intangible",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/GhostMasterThief_Transformed.png",
          vAttack: "6",
          vAttackAsterisk: true,
          transformed: true,
          abilities: [
            [
              "You can't fight Ghost unless you made at least 6",
              { icon: 2 },
              " this turn.",
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards a ",
              { hc: 1 },
              " Hero or puts a non-grey Hero from their hand or discard pile next to Ghost as a “Kidnapped Victim.“ Ghost ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Elaborate Rescue Plan",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/GhostMasterThiefTactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may choose a player to gain one of Ghost's Kidnapped Victims."
            ],
            [
              "Ghost ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Nightmarish Wraith",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/GhostMasterThiefTactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player puts a non-grey Hero from their discard pile next to Ghost as a Kidnapped Victim.",
            ],
            [
              "Ghost ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Shadowy Abduction",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/GhostMasterThiefTactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put the highest cost Hero from the HQ next to Ghost as a Kidnapped Victim."
            ],
            [
              "Ghost ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Draining Quantum Energy Chamber",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/GhostMasterThiefTactic1.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and KOs one of their cards that shares a Hero Class with any of Ghost's Kidnapped Victims."
            ],
            [
              "Ghost ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
      ]
    },
    {
      id: 99,
      name: "Kang, Quantum Conqueror",
      vp: 7,
      vAttack: "11",
      tacticName: "Kang",
      cards: [
        {
          name: "Kang, Quantum Conqueror",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KangQuantumConqueror.png",
          vAttack: "11+",
          abilities: [
            [
              { keyword: 49, text: "Rooftops Conqueror 3, Streets Conqueror 3, Bridge Conqueror 3" }
            ],
            [
              { bold: "Always Leads" },
              ": Armada of Kang. Set aside the Villains from an extra Villain Group as “Timeline Variants.“",
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards a ",
              { hc: 4 },
              " Hero or gains a Wound. Put a random Timeline Variant Villain face up in the “Multiverse“ space. Kang ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Kang, Multiverse Conqueror",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KangQuantumConqueror_Transformed.png",
          vAttack: "10+",
          transformed: true,
          abilities: [
            [
              { keyword: 49, text: "Multiverse Conqueror 8" }
            ],
            [
              "While either side of Kang is face up, the “Multiverse“ is a space to his left that can hold multiple Villains. You can fight them ",
              { italic: "(in any order)" },
              " only while this side is face up."
            ],
            [
              { bold: "Master Strike" },
              ": If there are any Villains in the Multiverse, each player gains a Wound. Then a Villain from the Multiverse enters an empty space among the Rooftops, Streets or Bridge. Kang ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Conqueror's Wrath",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/Kang%203.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If there are any Villains in the Rooftops, Streets, and/or Bridge, each player gains a Wound. If there are any Villains in the Multiverse, each player gains a Wound."
            ],
            [
              "Kang ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Kang's Defiance",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KangQuantumConquerorTactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If any of the Rooftops, Streets, or Bridge are empty, reveal the top card of the Villain Deck. If it's a Villain, it enters one of those spaces.",
            ],
            [
              "Put a random Timeline Variant Villain face up in the “Multiverse“ space.",
            ],
            [
              "Kang ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "Multiversal Engine Core",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KangQuantumConquerorTactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Kang ",
              { keyword: 97, text: "Double-Crosses" },
              " each other player."
            ],
            [
              "Put a random Timeline Variant Villain face up in the “Multiverse“ space.",
            ],
            [
              "Kang ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
        {
          name: "The Time Sphere",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KangQuantumConquerorTactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player puts two cards from their hand on the bottom of their deck. You draw two cards."
            ],
            [
              "Kang ",
              { keyword: 45, text: "Transforms" },
              "."
            ],
          ]
        },
      ]
    },
  ],
  henchmen: [
    {
      id: 41,
      name: "Quantumnauts",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/Quantumnauts.png",
      vAttack: "2+",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { keyword: 49, text: "Rooftops Conqueror 1" }
            ],
            [
              { keyword: 49, text: "Streets Conqueror 1" }
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
      ]
    },
    {
      id: 42,
      name: "Quantum Hound",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/QuantumHound.png",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Choose ",
              { icon: 2 },
              " or ",
              { icon: 1 },
              ". Then ",
              { keyword: 96 },
              ". If the Found Hero has the icon you chose, KO one of your Heroes."
            ]
          ]
        },
      ]
    },
    {
      id: 43,
      name: "Tardigrade",
      imageUrl: "",
      vAttack: "4",
      vp: 1,
      cards: [
        {
          name: "Tardigrade (Covert)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/TardigradeCovert.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 1 },
              { hc: 1 },
              { hc: 1 },
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Tardigrade (Instinct)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/TardigradeInstinct.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 2 },
              { hc: 2 },
              { hc: 2 },
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Tardigrade (Ranged)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/TardigradeRanged.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Tardigrade (Strength)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/TardigradeStrength.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Tardigrade (Tech)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/TardigradeTech.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
            ],
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
      id: 119,
      name: "Cross Technologies",
      cards: [
        {
          name: "Hydra Arms Dealer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/CrossTechnologiesHydraArmsDealer.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              ", usable only to recruit Heroes with an ",
              { icon: 1 },
              " icon.",
            ],
          ]
        },
        {
          name: "Cross' Security Detail",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/CrossTechnologiesCrosssSecurityDetail.png",
          qtd: 2,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              "While the back side of a Mastermind card is face up, this Villain gets ",
              { bold: "+2" },
              { icon: 1 },
              " and “",
              { bold: "Escape" },
              ": Each player discards a card.“",
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes.",
            ],
          ]
        },
        {
          name: "Shrinksperiments",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/CT3.png",
          qtd: 2,
          vAttack: "6",
          vAttackAsterisk: true,
          vp: "3",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 5 }
            ],
            [
              { bold: "Fight" },
              ": A Hero in the HQ loses all ",
              { keyword: 26 },
              " abilities, then gains ",
              { keyword: 26 },
              " ",
              { hc: 5 },
              " this turn.",
            ],
          ]
        },
        {
          name: "Yellowjacket Prototype",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/CrossTechnologiesYellowJacketPrototype.png",
          qtd: 1,
          vAttack: "9",
          vAttackAsterisk: true,
          vp: "5",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 2 },
              { hc: 2 },
              { hc: 2 },
              { hc: 2 },
            ],
            [
              { bold: "Ambush" },
              ": Each player reveals a ",
              { hc: 2 },
              " Hero or gains a Wound.",
            ],
            [
              { bold: "Escape" },
              ": Same effect.",
            ],
          ]
        },
        {
          name: "Take Over Pym Technologies",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/CrossTechnologiesAmbushSchemeTakeOverPymTechnologies.png",
          qtd: 1,
          overrideType: 5,
          vp: "2",
          ambush: true,
          abilities: [
            [
              { bold: "Ambush" },
              ": This Scheme captures Bystanders equal to the number of players plus 1, as “Pym Tech Scientists.“",
            ],
            [
              { bold: "Special Rules" },
              ": Once per turn, you may pay ",
              { bold: "3" },
              { icon: 2 },
              " or discard a card with ",
              { keyword: 26 },
              ". If you do, rescue a Pym Tech Scientist and draw a card. If you rescue the last Scientist, defeat this Scheme.",
            ],
            [
              { bold: "Twist" },
              ": This captures another Pym Tech Scientist. Then, if it has 3 or more Scientists, each player discards a card.",
            ],
          ]
        },
      ]
    },
    {
      id: 120,
      name: "Ghost Chasers",
      cards: [
        {
          name: "Sonny Burch's Goons",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/GhostChasersSonnyBurchsGoons.png",
          qtd: 1,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 94 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              ".",
            ],
          ]
        },
        {
          name: "Anitolov",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/GC%202.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 94 },
              ": You may KO up to two of your Heroes.",
            ],
          ]
        },
        {
          name: "Corrupted Government Agents",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/GhostChasersCorruptedGovernmentAgents.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Ambush" },
              ": Corrupted Government Agents ",
              { keyword: 97 },
              " each player.",
            ],
            [
              { bold: "Fight" },
              ": You may look at the top three cards of any deck and put them back in any order.",
            ],
          ]
        },
        {
          name: "Uzman, with Truth Serum",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/GhostChasersUzmanWithTruthSerum.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Fight" },
              ": Look at the top card of the Hero Deck and claim a Hero Class it has. Choose another player to guess “Truth“ or “Lie.“ If they guessed right, they either KO that Hero or choose a player to gain it. If they guessed wrong, you decide what to do with that Hero Instead. ",
              { italic: "(In solo, you just decide.)" },
            ],
          ]
        },
        {
          name: "Sonny Burch",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/GhostChasersSonnyBurch.png",
          qtd: 1,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              { bold: "Ambush" },
              ": Sonny Burch ",
              { keyword: 97, text: "Double-Crosses" },
              " each player.",
            ],
            [
              { bold: "Fight" },
              ": ",
              { keyword: 94 },
              ": You may choose a player to gain a ",
              { hc: 5 },
              " or ",
              { hc: 3 },
              " Hero from the HQ.",
            ],
          ]
        },
        {
          name: "Dr. Bill Foster",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/GhostChasersDrBillFoster.png",
          qtd: 1,
          vAttack: "0",
          vAttackAsterisk: true,
          vp: "4",
          abilities: [
            [
              "To fight Dr. Bill Foster, you must solve a math equation: Discard three cards such that the costs of two of them add up to the cost of the third. They can't all cost 0.",
            ],
            [
              { bold: "Escape" },
              ": Each player discards a card that costs 0.",
            ],
          ]
        },
        {
          name: "Goliath",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/GhostChasersGoliath.png",
          qtd: 1,
          vAttack: "8",
          vAttackAsterisk: true,
          vp: "5",
          abilities: [
            [
              { keyword: 26 },
              " ",
              { hc: 4 },
            ],
            [
              { bold: "Ambush" },
              ": Goliath ",
              { keyword: 97, text: "Double-Crosses" },
              " each player.",
            ],
            [
              { bold: "Fight" },
              ": Goliath topples over, crushing another Villain. You may defeat a Villain that has 4",
              { icon: 1 },
              " or less in an adjacent city space.",
            ],
          ]
        },
        {
          name: "High-Speed Car Chase",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/GhostChasersAmbushSchemeHigh-SpeedCarChase.png",
          qtd: 1,
          overrideType: 5,
          vp: "3",
          ambush: true,
          abilities: [
            [
              { bold: "Ambush" },
              ": Stack 2 cards from the Wound Deck next to this Scheme as “Dangerous Stunts.“",
            ],
            [
              { bold: "Twist" },
              ": If there is a Villain in the Streets: Add 2 Dangerous Stunts. Then if there are at least 5 Stunts, there is a “car crash“: Each player gains one of the Stunts as a Wound. KO the rest of the Stunts and this Scheme."
            ],
            [
              "Otherwise: Return a Dangerous Stunt to the Wound Deck. If there are still Stunts here, move a Villain to the Streets. If there aren't any Stunts, defeat this Scheme.",
            ],
          ]
        },
      ]
    },
    {
      id: 121,
      name: "Armada of Kang",
      cards: [
        {
          name: "Quantumnaut Elite",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ArmadaOfKangQuantumnautElite.png",
          qtd: 1,
          vAttack: "4+",
          vp: "4",
          abilities: [
            [
              { keyword: 49, text: "Rooftops Conqueror 2" }
            ],
            [
              { keyword: 49, text: "Streets Conqueror 2" }
            ],
            [
              { bold: "Fight" },
              ": KO two of your Heroes.",
            ],
          ]
        },
        {
          name: "Troop Ships of Kang",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ArmadaOfKangTroopShipsOfKang.png",
          qtd: 1,
          vAttack: "4+",
          vp: "3",
          abilities: [
            [
              { keyword: 49, text: "Rooftops Conqueror 2" }
            ],
            [
              { bold: "Ambush" },
              ": A Villain worth 2",
              { icon: 4 },
              " or 3",
              { icon: 4 },
              " from any player's Victory Pile enters the city.",
            ],
          ]
        },
        {
          name: "City Defense System",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ArmadaOfKangCityDefenseSystem.png",
          qtd: 1,
          vAttack: "4+",
          vp: "3",
          abilities: [
            [
              { keyword: 49, text: "Streets Conqueror 2" }
            ],
            [
              { bold: "Ambush" },
              ": Each player reveals a ",
              { hc: 3 },
              " Hero or gains a Wound.",
            ],
            [
              { bold: "Escape" },
              ": Same effect.",
            ],
          ]
        },
        {
          name: "Lord Krylar's Yacht",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ArmadaOfKangLordKrylarsYacht.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Ambush" },
              ": You may say ",
              { italic: "“I'm sure we can trust Lord Krylar...“" },
              " If you do: Draw a card, reveal it, and if it has an odd numbered cost, Lord Krylar ",
              { keyword: 97, text: "Double-Crosses" },
              " each player. ",
            ],
            [
              { bold: "Fight" },
              ": Same effect.",
            ],
            [
              { bold: "Escape" },
              ": Same effect.",
            ],
          ]
        },
        {
          name: "Energy Shield",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ArmadaOfKangEnergyShield.png",
          qtd: 1,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              { keyword: 49, text: "Streets Conqueror 2" }
            ],
            [
              { bold: "Ambush" },
              ": Put this Energy Shield above the Mastermind space. While it's there, you can't fight the Mastermind. ",
              { italic: "(You can still fight the Energy Shield.)" },
            ],
          ]
        },
        {
          name: "Pursuit Craft",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ArmadaOfKangPursuitCraft.png",
          qtd: 1,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              { keyword: 49, text: "Rooftops Conqueror 2" }
            ],
            [
              { bold: "Ambush" },
              ": ",
              { italic: "(After this enters the city)" },
              " If other Villains or the Mastermind have Conqueror abilities naming any empty city spaces, Pursuit Craft moves to one of those city spaces.",
            ],
          ]
        },
        {
          name: "M.O.D.O.K.",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ArmadaOfKangMODOK.png",
          qtd: 1,
          vAttack: "8",
          vAttackAsterisk: true,
          vp: "5",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
            ],
            [
              { bold: "Ambush" },
              ": M.O.D.O.K. ",
              { keyword: 97, text: "Double-Crosses" },
              " each player.",
            ],
            [
              { bold: "Fight" },
              ": Each player KOs one of their Heroes.",
            ],
          ]
        },
        {
          name: "Build a Conquering Army",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ArmadaOfKangAmbushSchemeBuildAConqueringArmy.png",
          qtd: 1,
          overrideType: 5,
          vp: "4",
          ambush: true,
          abilities: [
            [
              { bold: "Ambush" },
              ": If the Bridge is empty, move a Villain to the Bridge. Choose an unused Henchman Group and stack Henchmen from it next to this Scheme equal to the number of players.",
            ],
            [
              { bold: "Special Rules" },
              ": Players may fight Henchmen stacked here. While here, those Henchmen also have “",
              { keyword: 49, text: "Bridge Conqueror 1" },
              ".“ If you defeat the last Henchman here, defeat this Scheme."
            ],
            [
              { bold: "Twist" },
              ": Stack another of those Henchmen next to this Scheme ",
              { italic: "(from a Victory Pile if necessary)" },
              ". Then, if there are two more Henchmen here than the number of players: Each player gains a Wound, 3 of those Henchmen enter the city, and you KO this Scheme and the rest of those Henchmen."
            ],
          ]
        },
      ]
    },
    {
      id: 122,
      name: "Quantum Realm",
      cards: [
        {
          name: "Axian Bartender",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/QuantumRealmAxianBartender.png",
          qtd: 1,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Ambush" },
              ": Any number of times this turn, you may pay 2",
              { icon: 2 },
              " to “buy a refreshment“ and KO a Wound from your hand or from any player's discard pile.",
            ],
            [
              { bold: "Fight" },
              ": Same effect.",
            ],
          ]
        },
        {
          name: "Axiam Maitre D'",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/QuantumRealmAxianMaitreD.png",
          qtd: 1,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 96 },
              ". The Found Hero costs 2 less to recruit this turn.",
            ],
          ]
        },
        {
          name: "Lord Krylar's Valet",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/QuantumRealmLordKrylarsValet.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 96 },
              ". You get +",
              { icon: 2 },
              " equal to the Found Hero's printed ",
              { icon: 2 },
              ".",
            ],
          ]
        },
        {
          name: "Sky Manta",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/QuantumRealmSkyManta.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 96 },
              ". If you recruit the Found Hero this turn, set it aside. When you draw a new hand this turn, add that card to your hand.",
            ],
          ]
        },
        {
          name: "Lord Krylar's Appetizer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/QuantumRealmLordKrylarsAppetizer.png",
          qtd: 1,
          vAttack: "6",
          vAttackAsterisk: true,
          vp: "3",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 1 },
              { hc: 1 },
              { hc: 1 },
              { hc: 1 },
            ],
            [
              { bold: "Fight" },
              ": Choose a player to “eat the appetizer“ and KO a card of their choice from their discard pile.",
            ],
          ]
        },
        {
          name: "Hungering Energy",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/QuantumRealmHungeringEnergy.png",
          qtd: 1,
          vAttack: "7",
          vAttackAsterisk: true,
          vp: "4",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes.",
            ],
          ]
        },
        {
          name: "Quantumoeba",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/QuantumRealmQuantumoeba.png",
          qtd: 1,
          vAttack: "8",
          vAttackAsterisk: true,
          vp: "5",
          abilities: [
            [
              { keyword: 50 },
              " ",
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
              { hc: 4 },
            ],
            [
              { bold: "Ambush" },
              ": Quantumoeba “eats“ a Henchman from any player's Victory Pile, capturing it and gaining its printed ",
              { icon: 1 },
              ".",
            ],
            [
              { bold: "Fight" },
              ": Put the eaten Henchman in your Victory Pile and do its Fight effect.",
            ],
          ]
        },
        {
          name: "Quantumania",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/QuantumRealmAmbushSchemeQuantumania.png",
          qtd: 1,
          overrideType: 5,
          vp: "2",
          ambush: true,
          abilities: [
            [
              { bold: "Ambush" },
              ": Each player puts a non-grey Hero from their hand or discard pile next to this Scheme as a “Quantum Duplicate.“ Then do the Twist effect below.",
            ],
            [
              { bold: "Twist" },
              ": The top card of the Hero Deck becomes another Quantum Duplicate. Each player reveals their hand and discards all their cards that have the same name as any Quantum Duplicate."
            ],
            [
              { bold: "Special Rules" },
              ": Players may spend ",
              { icon: 1 },
              " equal to a Quantum Duplicate's printed cost to KO that Hero or choose a player to gain it. When there are no more Quantum Duplicates, defeat this Scheme."
            ],
          ]
        },
      ]
    },
  ],
  schemes: [
    {
      id: 178,
      name: "Auction Shrink Tech to Highest Bidder",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/Auction%20Shrink%20Tech%20To%20Highest%20Bidder.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Set aside all 14 cards of a random extra Hero that has any ",
              { keyword: 26 },
              " cards as “Shrink Tech.“",
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme as a “Hostile Bid.“ Reveal a random Hero from the Shrink Tech. This turn you may recruit that Hero, but it costs 1",
              { icon: 2 },
              " more for each Hostile Bid. If you recruit it, either KO that Hero or choose any player to gain it. If you don't recruit it by the end of this turn, stack it next to the Scheme as “Controlled by Arms Dealers.“",
            ],
            [
              { bold: "Evil Wins" },
              ": When 8 Shrink Tech cards are Controlled by Arms Dealers.",
            ],
          ]
        },
      ]
    },
    {
      id: 179,
      name: "Safeguard Dark Secrets",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/Safeguard%20Dark%20Secrets.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 5 Twists.",
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Mastermind as a “Secret,“ then play another card from the Villain Deck.",
            ],
            [
              { bold: "Special Rules" },
              ": You have the ability “",
              { keyword: 94 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              ". Shuffle a Secret from next to the Mastermind into the Villain Deck.“",
            ],
            [
              { bold: "Evil Wins" },
              ": When the Mastermind has 5 Secrets.",
            ],
          ]
        },
      ]
    },
    {
      id: 180,
      name: "Escape an Imprisoning Dimension",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/Escape%20An%20Imprisoning%20Dimension.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 5 Twists.",
            ],
            [
              { bold: "Special Rules" },
              ": During your turn, any number of times, you may spend 1",
              { icon: 1 },
              " to “Seal“ an unsealed city space or unsealed Mastermind space by putting a card above it from the Wound Stack.",
            ],
            [
              { bold: "Twist" },
              ": If any city space with a Villain in it or the Mastermind space is not “sealed,“ stack this Twist next to the Mastermind as a “Discovered Escape Route.“ Otherwise, return 3 Seals from above spaces to the Wound Deck, shuffle this Twist into the Villain Deck, and play another card from the Villain Deck.",
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Escape Routes have been discovered.",
            ],
          ]
        },
      ]
    },
    {
      id: 181,
      name: "Siphon Energy from the Quantum Realm",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/Siphon%20Energy%20From%20The%20Quantum%20Realm.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists. Set aside the “Quantum Realm“ Villain Group as an extra group. Shuffle its Ambush Scheme into the Villain Deck.",
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Mastermind as a “Quantum Siphon.“ Put a random set aside Quantum Realm Villain on the Siphons. Do its Ambush effect. If there was already a Quantum Realm Villain on the Siphons, KO It.",
            ],
            [
              { bold: "Special Rules" },
              ": You may fight Villains on the Quantum Siphons. They get ",
              { bold: "+1" },
              { icon: 1 },
              " for each two Siphons.",
            ],
            [
              { bold: "Evil Wins" },
              ": When 4 Quantum Realm Villains have been KO'd or there are 9 Quantum Siphons.",
            ],
          ]
        },
      ]
    },
  ],
  bystanders: [
    {
      id: 58,
      name: "Agent Jimmy Woo",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/Agent%20Jimmy%20Woo.png",
      vp: 1,
      cards: [
        {
          qtd: 2,
          abilities: [
            [
              { bold: "Rescue" },
              ": Do some “close-up magic“: Reveal the top two cards of your deck. The player on your left says one of those card names ",
              { italic: "(in solo mode, say one yourself)" },
              ". Mix them up, reveal one and say “Is this your card?“. If it draw it. Put the rest back in any order.",
            ],
          ]
        }
      ]
    },
    {
      id: 59,
      name: "Maggie Lang",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/Maggie%20Lang.png",
      vp: 1,
      cards: [
        {
          qtd: 2,
          abilities: [
            [
              { bold: "Rescue" },
              ": You may return a card that costs 2 or less from your discard pile to your hand.",
            ],
          ]
        }
      ]
    },
    {
      id: 60,
      name: "Officer Jim Paxton",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/Officer%20Jim%20Paxton.png",
      vp: 1,
      cards: [
        {
          qtd: 1,
          abilities: [
            [
              { bold: "Rescue" },
              ": You may defeat a Henchman.",
            ],
          ]
        }
      ]
    },
    {
      id: 61,
      name: "Young Cassie Lang",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/Young%20Cassie%20Lang.png",
      vp: 1,
      cards: [
        {
          qtd: 2,
          abilities: [
            [
              { bold: "Rescue" },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              ", usable only to recruit a Hero that costs 2 or less or a Hero with ",
              { keyword: 26 },
              ".",
            ],
          ]
        }
      ]
    },
  ],
}
