export default {
  heroes: [
    {
      name: "Wolverine",
      team: 4,
      cards: [
        {
          name: "Keen Senses",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              {
                hc: 2
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Healing Factor",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            "You may KO a Wound from your hand or discard pile. If you do, draw a card."
          ]
        },
        {
          name: "Frenzied Slashing",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              {
                hc: 2
              },
              ": Draw two cards."
            ]
          ]
        },
        {
          name: "Berserker Rage",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            "Draw three cards.",
            [
              {
                hc: 2
              },
              ": You get",
              {
                bold: " +1"
              },
              {
                icon: 1
              },
              "for each extra card you've drawn this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Thor",
      team: 1,
      cards: [
        {
          name: "Odinson",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2+"
        },
        {
          name: "Surge of Power",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "0+"
        },
        {
          name: "Call Lightning",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              {
                hc: 3
              },
              ": You get ",
              {
                bold: " +1"
              }
            ]
          ]
        },
        {
          name: "God of Thunder",
          hc: 3,
          rarity: 3,
          cost: 8,
          recruit: "5",
          attack: "0+",
          abilities: [
            "You can use ",
            {
              icons: 2
            },
            " as ",
            {
              icons: 1
            },
            " this turn."
          ]
        }
      ]
    }
  ]
}