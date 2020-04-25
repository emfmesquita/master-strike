export default {
    heroes: [
      {
        name: "Silver Surfer",
        set: 4,
        team: 0,
        cards: [
          {
            name: "Warp Speed",
            hc: 1,
            rarity: 1,
            cost: 3,
            recruit: "2",
            abilities: [
              [
                { keyword: 4 },
                { bold: " 2" },
                { icon: 2 },
                { icon: 5 },
                "Draw a card."
              ]
            ]
          },
          {
            name: "Epic Destiny",
            hc: 4,
            rarity: 1,
            cost: 4,
            recruit: "2",
            abilities: [
              [
                { keyword: 4 },
                { bold: " 6" },
                { icon: 2 },
                { icon: 5 },
                " Defeat a Villain of ",
                { bold: "5 " },
                { icon: 1 },
                " or ",
                { bold: "6 " },
                { icon: 1 },
                "."
              ]
            ]
          },
          {
            name: "The Power Cosmic",
            hc: 3,
            rarity: 2,
            cost: 6,
            attack: "0+",
            recruit: "3",
            abilities: [
              [
                { keyword: 4 },
                { bold: " 9" },
                { icon: 2 },
                { icon: 5 },
                " You get ",
                { bold: "+9 " },
                { icon: 1 },
                "."
              ]
            ]
          },
          {
            name: "Energy Surge",
            hc: 3,
            rarity: 3,
            cost: 7,
            abilities: [
              [
                "Double the ",
                { icon: 2 },
                " you have."
              ]
            ]
          }
        ]
      },
    ]
  }