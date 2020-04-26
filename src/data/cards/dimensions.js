export default {
  heroes: [
    {
      name: "Squirrel Girl",
      set: 23,
      team: 1,
      cards: [
        {
          name: "Find Tiny Friends",
          hc: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            { keyword: 63, text: "Switcheroo 3" },
            { divider: true },
            [
              { keyword: 36 },
              " for a card that costs 3 or less."
            ]
          ]
        },
        {
          name: "Nut Punch",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            { keyword: 63, text: "Switcheroo 4" },
            { divider: true },
            [
              { hc: 2 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Squirrelgility",
          hc: 1,
          rarity: 2,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 63, text: "Switcheroo 5" },
            { divider: true },
            [
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              " if at least 2 cards entered the HQ this turn."
            ]
          ]
        },
        {
          name: "Unbeatable Squirrel Girl",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "5",
          abilities: [
            [
              "You may choose a number from 1 to 5. A Hero in your hand gains ",
              { keyword: 63 },
              " for that number."
            ],
            [
              { hc: 2 },
              { hc: 2 },
              ": You may choose a number from 1 to 8 instead."
            ]
          ]
        }
      ]
    },
  ]
}