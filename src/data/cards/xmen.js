export default {
  heroes: [
    {
      name: "Aurora and Northstar",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Northern Lights",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            { keyword: 41 },
            [
              { keyword: 42 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Blazing Flare",
          subTitle: "Aurora",
          hc: 3,
          rarity: 1,
          divided: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
                { keyword: 42 },
                ": You get ",
                { bold: "+2"},
                { icon: 2 },
                "."
            ]
          ]
        },
        {
          name: "Blazing Fists",
          subTitle: "Northstar",
          hc: 4,
          rarity: 1,
          divided: 2,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 40 }
          ]
        },
        {
          name: "Twin Blast",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            { keyword: 41 },
            [
              { keyword: 42 },
              ": You get ",
              { bold: "+3"},
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Mach 10",
          hc: 2,
          rarity: 3,
          cost: 7,
          recruit: "4",
          attack: "0+",
          abilities: [
            { keyword: 41 },
            [
              "All Heroes you recruit this turn have ",
              { keyword: 41 },
              "."
            ],
            [
              { keyword: 42 },
              ": You get ",
              { bold: "+2"},
              { icon: 1 },
              "for each ",
              { keyword: 42 },
              " card you played this turn."
            ]
          ]
        }
      ]
    },
  ]
}