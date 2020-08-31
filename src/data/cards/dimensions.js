export default {
  heroes: [
    {
      id: 182,
      name: "Jessica Jones",
      set: 23,
      team: 6,
      cards: [
        {
          name: "Find Tiny Friends",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            { keyword: 56, text: "Switcheroo 4" }
          ]
        },
        {
          name: "Alias Investigations",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "1",
          abilities: [
            { keyword: 56, text: "Switcheroo 5" },
            { divider: true },
            [
              { keyword: 32 },
              " for a card with an ",
              { icon: 1 },
              " icon."
            ]
          ]
        },
        {
          name: "Crack the Case",
          hc: 4,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            { keyword: 56, text: "Switcheroo 6" },
            { divider: true },
            [
              { keyword: 32 },
              " for a card with an ",
              { icon: 2 },
              " icon. You may draw that card or KO it."
            ]
          ]
        },
        {
          name: "Uncover Hidden Evil",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              { hc: 1 },
              ": ",
              { keyword: 32 },
              " the Villain Deck for a Villain. You may put it into your Victory Pile and do its Fight effect. Otherwise, put it back on the top or bottom of that deck."
            ]
          ]
        }
      ]
    },
    {
      id: 183,
      name: "Ms. America",
      set: 23,
      team: 1,
      cards: [
        {
          name: "Star Power",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 1 },
            [
              { hc: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Search Parallel Dimensions",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              { keyword: 32 },
              " for an ",
              { team: 1 },
              " card and ",
              { keyword: 1 },
              " it."
            ]
          ]
        },
        {
          name: "Kick a Hole in Reality",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { hc: 4 },
              ": Reveal the top card of your deck. KO it or ",
              { keyword: 1 },
              " it."
            ]
          ]
        },
        {
          name: "Hyper-Cosmic Awareness",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other card in your hand."
            ]
          ]
        }
      ]
    },
    {
      id: 184,
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
            { keyword: 56, text: "Switcheroo 3" },
            { divider: true },
            [
              { keyword: 32 },
              " for a card that costs 3 or less."
            ]
          ]
        },
        {
          name: "Nut Punch",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 56, text: "Switcheroo 4" },
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
            { keyword: 56, text: "Switcheroo 5" },
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
              { keyword: 56 },
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