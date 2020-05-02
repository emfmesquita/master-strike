export default {
  heroes: [
    {
      name: "Skadi",
      set: 8,
      team: 13,
      cards: [
        {
          name: "Dark Prophecy",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 5 },
              ": gain a Madame HYDRA."
            ]
          ]
        },
        {
          name: "Ancient Oath of HYDRA",
          hc: 5,
          rarity: 1,
          cost: 5,
          attack: "1",
          abilities: [
            [
              "You may discard a",
              { team: 13 },
              "Ally. If you do, draw two cards."
            ]
          ]
        },
        {
          name: "Hammer of the Serpent",
          hc: 4,
          rarity: 2,
          cost: 5,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+2 "},
              { icon: 1 },
              " for each card you discarded this turn."
            ],
            { italic: '[Throwing an Artifact does not count as "discarding" it.]' }
          ]
        },
        {
          name: "War Banner of HYDRA",
          hc: 1,
          rarity: 3,
          cost: 7,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+1 "},
              { icon: 1 },
              " for each other",
              { team: 13 },
              "Ally you played this turn."
            ]
          ]
        }
      ]
    },
  ]
}