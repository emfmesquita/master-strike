export default {
  heroes: [
    {
      id: 152,
      name: "Gwenpool",
      set: 18,
      team: 18,
      cards: [
        {
          name: "Come On, Nobody Reads Card Names",
          hc: 1,
          rarity: 1,
          cost: 2,
          attack: "0+",
          recruit: "0+",
          abilities: [
            { keyword: 3, text: "Versatile 1" },
            [
              { hc: 1 },
              ": Instead, ",
              { keyword: 3, text: "Versatile 3" },
              "."
            ]
          ]
        },
        {
          name: "I'll Rescue You If I Feel Like It",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "Reveal the top card of the Bystander Deck. If it's a Special Bystander, rescue it. Otherwise, put it on the bottom of that deck."
            ]
          ]
        },
        {
          name: "I Heard Keywords Are Powerful",
          hc: 2,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 2 }
            ],
            [
              { hc: 2 },
              ": Draw a card."
            ],
            { keyword: 44 }
          ]
        },
        {
          name: "I'm the Best at Board Games",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { keyword: 9 },
              " each other player. For each player that discards a card this way, draw a card."
            ]
          ]
        }
      ]
    },
    {
      id: 153,
      name: "Ms. Marvel",
      set: 18,
      team: 18,
      cards: [
        {
          name: "Long Arm of the Law",
          hc: 1,
          rarity: 1,
          cost: 3,
          costAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 1 }
            ],
            "Draw a card.",
            [
              { hc: 1 },
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Big Impact",
          hc: 4,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            { keyword: 3, text: "Versatile 2" },
          ]
        },
        {
          name: "Need to Stretch My Legs",
          hc: 1,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 1 }
            ],
            [
              { team: 18 },
              ": You may KO a card from your hand or discard pile."
            ],
            { keyword: 44 }
          ]
        },
        {
          name: "Rising Hope",
          hc: 4,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 },
              { bold: ", " },
              { hc: 1 }
            ],
            { keyword: 3, text: "Versatile 4" },
            { keyword: 44 }
          ]
        }
      ]
    },
    {
      id: 154,
      name: "Nova",
      filterName: "Nova (Champ)",
      set: 18,
      team: 18,
      cards: [
        {
          name: "Space Cop",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "0+",
          recruit: "0+",
          abilities: [
            { keyword: 3, text: "Versatile 1" },
            [
              { team: 18 },
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Interstellar Hero",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "0+",
          recruit: "0+",
          abilities: [
            { keyword: 3, text: "Versatile 2" },
            { keyword: 44 }
          ]
        },
        {
          name: "Holographic Projection",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "2+",
          recruit: "0+",
          abilities: [
            [
              { hc: 3 },
              { bold: ": " },
              { keyword: 3, text: "Versatile 3" },
              "."
            ]
          ]
        },
        {
          name: "Growing Nova Force",
          hc: 3,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 3 },
              { bold: ", " },
              { hc: 4 }
            ],
            [
              "For each other card you played this turn with a ",
              { icon: 2 },
              " icon, you get ",
              { bold: "+1" },
              { icon: 2 },
              ". For each other card you played this turn with an ",
              { icon: 1 },
              " icon, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 155,
      name: "Totally Awesome Hulk",
      set: 18,
      team: 18,
      cards: [
        {
          name: "Beloved Behemoth",
          hc: 4,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              { hc: 4 },
              ": The first time you defeat a Villain this turn, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Incredible Mind, Awesome Body",
          hc: 5,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          recruit: "1",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            "Draw a card.",
            { keyword: 44 }
          ]
        },
        {
          name: "Growing Pains",
          hc: 4,
          rarity: 2,
          cost: 5,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "If you have a Wound in your hand or discard pile, KO it and you get ",
              { bold: "+2" },
              { icon: 1 },
              ". Otherwise, gain a Wound."
            ]
          ]
        },
        {
          name: "7th Smartest Man in the World",
          hc: 5,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          attack: "5+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 },
              { bold: ", " },
              { hc: 4 }
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each extra card you drew this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 156,
      name: "Viv Vision",
      set: 18,
      team: 18,
      cards: [
        {
          name: "Walking Wi-Fi",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 5 },
              ": Whenever you recruit a Hero from the HQ this turn, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Expanding Neural Network",
          hc: 5,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            [
              { hc: 5 },
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Crowdsourcing",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "0+",
          abilities: [
            { keyword: 3, text: "Versatile 3" },
            { keyword: 44 }
          ]
        },
        {
          name: "Alter Molecular Density",
          hc: 5,
          rarity: 3,
          cost: 9,
          costAsterisk: true,
          recruit: "5",
          attack: "0+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 },
              { bold: ", " },
              { hc: 3 }
            ],
            [
              "Whenever you recruit a Hero this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
  ]
}