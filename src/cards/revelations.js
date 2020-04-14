export default {
  heroes: [
    {
      name: "Captain Marvel, Agent of S.H.I.E.L.D.",
      team: 2,
      cards: [
        {
          name: "The Sword of S.H.I.E.L.D.",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              {
                team: 2
              },
              {
                team: 2
              },
              {
                team: 2
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Radiant Blast",
          hc: 3,
          rarity: 1,

        },
        {
          name: "Dominate the Battlefield",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "2+",
          abilities: [
            [
              {
                hc: 3
              },
              ": ",
              {
                keyword: 1
              }
            ]
          ]
        }
      ]
    }
  ]
};