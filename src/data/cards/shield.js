export default {
  heroes: [
    {
      id: 194,
      name: "Agent Phil Coulson",
      set: 25,
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
      set: 25,
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
    {
      id: 196,
      name: "Mockingbird",
      set: 25,
      team: 2,
      cards: [
        {
          name: "Take Cover",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { hc: 2 },
              ": If that card was a ",
              { team: 2 },
              " Hero, you may send it, ",
              { keyword: 60 },
              "."
            ]
          ]
        },
        {
          name: "Battle Staves",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { keyword: 61, text: "S.H.I.E.L.D. Level 2" },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Spymaster",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "1+",
          abilities: [
            "Choose one:",
            [
              "- Send a card from the S.H.I.E.L.D. Officer Stack  ",
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
          name: "Infinity Formula",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            "Draw a card.",
            [
              "Send two cards from the S.H.I.E.L.D. Officer Stack ",
              { keyword: 60 },
              "."
            ],
            [
              "Then you get ",
              { bold: "+1" },
              { icon: 2 },
              " and ",
              { bold: "+1" },
              { icon: 1 },
              " for each 2 ",
              { keyword: 61, text: "S.H.I.E.L.D. Levels" },
              " you have."
            ]
          ]
        },

      ]
    },
    {
      id: 197,
      name: "Quake",
      set: 25,
      team: 2,
      cards: [
        {
          name: "Going Underground",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "3",
          abilities: [
            [
              "To play this, you must discard a ",
              { team: 2 },
              " Hero."
            ],
            [
              { hc: 3 },
              ": You may send the Hero you discarded ",
              { keyword: 60 },
              "."
            ],
          ]
        },
        {
          name: "Aftershock",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 61, text: "S.H.I.E.L.D. Level 2" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Tectonic Wave",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "2+",
          dense: true,
          abilities: [
            [
              "Whenever you fight a Villain this turn, if its ",
              { icon: 1 },
              " is higher than your ",
              { keyword: 61 },
              ", you may send a ",
              { team: 2 },
              " Hero from the S.H.I.E.L.D. Officer Stack ",
              { keyword: 60 },
              "."
            ],
            [
              { keyword: 61, text: "S.H.I.E.L.D. Level 4" },
              ": You get ",
              { bold: "+4" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Roil the Earth",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "0+",
          dense: true,
          abilities: [
            [
              "You may send a ",
              { team: 2 },
              " Hero from the S.H.I.E.L.D. Officer Stack ",
              { keyword: 60 },
              "."
            ],
            [
              "Then, for each ",
              { keyword: 61 },
              " you have up to 5, choose a Hero from the HQ. Put all those Heroes on the bottom of the Hero Deck and you get their total printed ",
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
  ]
}