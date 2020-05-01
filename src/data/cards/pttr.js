export default {
  heroes: [
    {
      name: "Black Cat",
      set: 6,
      team: 3,
      cards: [
        {
          name: "Pickpocket",
          hc: 1,
          rarity: 1,
          cost: 1,
          attack: "0+",
          abilities: [
            { keyword: 8 },
            [
              "Reveal the top card of any player's deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that card's printed ",
              { icon: 2 },
              " plus its printed ",
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    }
  ]
}