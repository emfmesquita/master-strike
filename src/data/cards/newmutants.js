export default {
  heroes: [
    {
      id: 203,
      name: "Karma",
      set: 27,
      team: 4,
      cards: [
        {
          name: "Sow Rivalry",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 1 },
              ": Choose a Villain. You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain adjacent to it."
            ]
          ]
        },
        {
          name: "Temporary Possession",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "Guess a color. Then reveal the top card of the Hero Deck and put it back on the top or bottom of that deck. If you guessed right, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Karmic Balance",
          hc: 3,
          rarity: 2,
          cost: 6,
          recruit: "4",
          abilities: [
            [
              "Reveal the top card of the Hero Deck. You may recruit it this turn. If you do, you may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "Control Like a Puppet",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              { team: 4 },
              ": Choose a Villain in the city. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to its VP, usable only against other Villains or the Mastermind."
            ]
          ]
        },

      ]
    },
    {
      id: 204,
      name: "Mirage",
      set: 27,
      team: 4,
      cards: [
        {
          name: "Dreams Made Real",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 64, text: "Moonlight" },
              ": You may discard a card. If you do, draw a card."
            ]
          ]
        },
        {
          name: "Empathic Link",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "When a card effect causes you to discard this card, set it aside. At the end of this turn, add it to your hand as an extra card."
            ]
          ]
        },
        {
          name: "Nightmare Wolves",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "1+",
          abilities: [
            [
              "You may have a ",
              { keyword: 65 },
              ". You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the cost of the card you discarded this way."
            ]
          ]
        },
        {
          name: "Haunted By the Demon Bear",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Whenever a card effect causes you to discard a card from your hand this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": You may have a ",
              { keyword: 65 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 205,
      name: "Sunspot",
      set: 27,
      team: 4,
      cards: [
        {
          name: "Absorb Radiation",
          hc: 3,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            [
              { keyword: 64, text: "Moonlight" },
              ": You may put a Hero from the HQ on the bottom of the Hero Deck."
            ],
            [
              { keyword: 64, text: "Sunlight" },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Solar-Powered",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": You may put a card from your hand on the bottom of you deck. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Thermokinetic Fury",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            "To play this, you must put a card from your hand on the bottom of your deck.",
            [
              { keyword: 64, text: "Sunlight" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              " for each other ",
              { team: 4 },
              " card you played this turn."
            ]
          ]
        },
        {
          name: "Empyreal Force",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            [
              "Choose any number of Heroes in the HQ. Put them on the bottom of the Hero Deck."
            ],
            [
              { keyword: 64, text: "Sunlight" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero in the HQ with an even-numbered cost."
            ]
          ]
        },

      ]
    },
    {
      id: 206,
      name: "Warlock",
      set: 27,
      team: 4,
      cards: [
        {
          name: "Earthling Choices",
          hc: 5,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Look at the top two cards of your deck. Draw one and discard the other."
            ]
          ]
        },
        {
          name: "Analyze Planetary Rotation",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { hc: 5 },
              ": Instead, you get both."
            ]
          ]
        },
        {
          name: "Techno-Organic Adaptation",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { hc: 5 },
              ": The first time you defeat a Villain this turn, you may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "Nanite Shapeshifter",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": Draw 3 cards."
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": You get ",
              { bold: "+3" },
              { icon: 2 },
              " and ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
            [
              { team: 4 },
              { team: 4 },
              { team: 4 },
              { team: 4 },
              ": Instead, you get both."
            ]
          ]
        },

      ]
    },
    {
      id: 207,
      name: "Wolfsbane",
      set: 27,
      team: 4,
      cards: [
        {
          name: "Night Vision",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 64, text: "Moonlight" },
              ": Look at the top two cards of your deck. Discard any number of them and put the rest back in any order."
            ]
          ]
        },
        {
          name: "Wolf Out",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": You may put a Hero from the HQ on the bottom of the Hero Deck."
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Howl at the Moon",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { keyword: 64, text: "Moonlight" },
              ": Look at the top card of your deck. KO it or put it back."
            ]
          ]
        },
        {
          name: "Nocturnal Savagery",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            "Look at the top three cards of your deck. Discard any number of them and put the rest back in any order.",
            [
              { keyword: 64, text: "Moonlight" },
              ": You get the total printed ",
              { icon: 1 },
              " of all the cards you discarded from your deck this turn."
            ]
          ]
        },

      ]
    },
  ]
}