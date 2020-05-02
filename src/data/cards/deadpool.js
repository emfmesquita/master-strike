export default {
  heroes: [
    {
      name: "Deadpool",
      set: 14,
      team: 17,
      cards: [
        {
          name: "Nighttime Is the Right Time",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "If it's between 8 p.m. and midnight, you get ",
              { bold: "+2" },
              { icon: 1 },
              ". Otherwise, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ],
            [
              { hc: 5 },
              ": Screw it, just take both!"
            ]
          ]
        },
        {
          name: "It'll Grow Back",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2½+",
          abilities: [
            [
              "If you have a Wound in your hand or discard pile, KO it at you get ",
              { bold: "+1" },
              { icon: 1 },
              ". Otherwise, gain a Wound. These days, getting wounded mostly just pisses me off."
            ]
          ]
        },
        {
          name: "Running Commentary",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3½+",
          abilities: [
            [
              "You get ",
              { bold: "+1/2" },
              { icon: 1 },
              " for each other card with flavor text you played this turn. Now maybe you'll stop telling me to shut up."
            ]
          ]
        },
        {
          name: "Deadpool Rage!",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { keyword: 30 },
              ": Take another turn after this one. But don't use this ability more than once per game — trilogies are stupid."
            ]
          ]
        }
      ]
    },
  ]
}