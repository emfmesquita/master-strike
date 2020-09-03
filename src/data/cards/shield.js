export default {
  heroes: [
    {
      id: 194,
      name: "Agent Phil Coulson",
      set: 22,
      team: 2,
      cards: [
        {
          name: "Impeccable Planning",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 61, text: "S.H.I.E.L.D. Level 3" },
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Build the Strike Team",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            "Reveal the top card of the S.H.I.E.L.D. Officer Stack. Gain it or put it on the bottom of the stack.",
            [
              { hc: 1 },
              ": You may send it ",
              { keyword: 60 },
              "."
            ]
          ]
        },
        {
          name: "Approve Orbital Strike",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            "Choose one:",
            [
              "- Send a ",
              { team: 2 },
              " Hero from your hand ",
              { keyword: 60 },
              "."
            ],
            [
              "- Or you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each 2 ",
              { keyword: 61, text: "S.H.I.E.L.D. Levels" },
              " you have."
            ]
          ]
        },
        {
          name: "Fake But Inspiring Death",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "4+",
          dense: true,
          abilities: [
            [
              "During any player's turn, when another ",
              { team: 2 },
              " Hero is put into the KO pile, you may discard this card to send that Hero ",
              { keyword: 60 },
              " in your Victory Pile instead. If you do, draw three cards."
            ],
            [
              { keyword: 61, text: "S.H.I.E.L.D. Level 8" },
              ": You get ",
              { bold: "+4" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 195,
      name: "Deathlok",
      set: 22,
      team: 2,
      cards: [
        {
          name: "Authorize Lethal Force",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            "Draw a card.",
            [
              { keyword: 61, text: "S.H.I.E.L.D. Level 1" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Reanimate Into Service",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 5 },
              ": You may send a ",
              { team: 2 },
              " Hero ",
              { keyword: 60 },
              " from your discard pile or the KO pile."
            ]
          ]
        },
        {
          name: "Headlok",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "0+",
          recruit: "3",
          abilities: [
            [
              { keyword: 61, text: "S.H.I.E.L.D. Level 3" },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
            [
              "If your S.H.I.E.L.D. Level is less than 3, you may send a ",
              { team: 2 },
              " card from your discard pile ",
              { keyword: 60 },
              "."
            ]
          ]
        },
        {
          name: "Behind Enemy Lines",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "5",
          recruit: "0+",
          abilities: [
            [
              "You may send a ",
              { team: 2 },
              " Hero from your discard pile ",
              { keyword: 60 },
              "."
            ],
            [
              { keyword: 61, text: "S.H.I.E.L.D. Level 3" },
              ": You get the total printed ",
              { icon: 2 },
              " of all the ",
              { team: 2 },
              " Heroes in your Victory Pile."
            ]
          ]
        },

      ]
    },
  ]
}