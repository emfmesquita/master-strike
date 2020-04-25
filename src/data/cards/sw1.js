export default {
  heroes: [
    {
      name: "Black Panther",
      set: 9,
      team: 15,
      cards: [
        {
          name: "Catlike Reflexes",
          hc: 2,
          hc2: 1,
          rarity: 1,
          cost: 3,
          recruit: "1",
          abilities: [
            "Draw a card."
          ]
        },
        {
          name: "Multifaceted Genius",
          hc: 4,
          hc2: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other multicolored card you played this turn."
            ]
          ]
        },
        {
          name: "Stalk the Urban Jungle",
          hc: 4,
          hc2: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            "Whenever you defeat a Villain on the Rooftops or Streets this turn, you may KO one of your cards or a card from your discard pile."
          ]
        },
        {
          name: "King of Wakanda",
          hc: 2,
          hc2: 5,
          rarity: 3,
          cost: 7,
          abilities: [
            "Gain three sidekicks.",
            [
              { team: 15 },
              ": Put them on top of your deck."
            ]
          ]
        }
      ]
    },
  ]
}