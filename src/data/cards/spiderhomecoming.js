export default {
    heroes: [
      {
        name: "High Tech Spider-Man",
        set: 17,
        team: 3,
        cards: [
          {
            name: "Advanced Targeting System",
            hc: 1,
            rarity: 1,
            cost: 2,
            abilities: [
              "Reveal the top card of your deck. If it costs 2 or less, draw it.",
              [
                { hc: 1 },
                ": Draw a card."
              ]
            ]
          },
          {
            name: "Recon Drone Connection",
            hc: 5,
            rarity: 1,
            cost: 2,
            attack: "0+",
            abilities: [
              { keyword: 8 },
              { keyword: 47, text: "Danger Sense 3" }
            ]
          },
          {
            name: "Spider-Grip",
            hc: 5,
            rarity: 2,
            cost: 2,
            attack: "2",
            abilities: [
              { keyword: 8 },
              [
                { hc: 5 },
                ": Choose two Villains in adjacent city spaces. Each of them gets ",
                { bold: "-1" },
                { icon: 1 },
                " this turn."
              ]
            ]
          },
          {
            name: "Friendly Neighborhood...",
            hc: 5,
            rarity: 3,
            cost: 2,
            attack: "0+",
            abilities: [
              { keyword: 8 },
              { keyword: 49 },
              [
                "You get ",
                { bold: "+3" },
                { icon: 1 },
                " usable only against the Mastermind or Villains on the Rooftops or Streets."
              ]
            ]
          }
        ]
      },
    ]
  }