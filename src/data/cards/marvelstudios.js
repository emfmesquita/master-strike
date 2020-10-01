export default {
  masterminds: [
    {
      id: 56,
      name: "Iron Monger",
      set: 20,
      vAttack: "9",
      vp: 5,
      cards: [
        {
          name: "Iron Monger",
          vAttack: "9+",
          abilities: [
            [
              { keyword: 49, text: "Bank Conqueror 4" }
            ],
            [
              { bold: "Always Leads" },
              ": Iron Foes"
            ],
            [
              { bold: "Master Strike" },
              ": If there is a Villain in the Bank, each player gains a Wound. Otherwise, put this Master Strike into the Bank as a ",
              { bold: "6" },
              { icon: 1 },
              " “StaneTech Weaponry” Villain worth 4VP."
            ]
          ]
        },
        {
          name: "Hostile Takeover",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If there are no Villains in the bank, reveal the top card of the Villain Deck. If it’s a Villain, it enters the Bank."
            ]
          ]
        },
        {
          name: "Overloaded Arsenal",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound. Then each other player reveals a ",
              { hc: 3 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Sonic Stunner",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Hero or discards down to 4 cards."
            ]
          ]
        },
        {
          name: "Unexpected Betrayal",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If the Bank is empty, the player on your right chooses a Villain from their Victory Pile. That Villain enters the Bank."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 29,
      name: "Hammer Drone Army",
      set: 20,
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Look at the top two cards of your deck. KO one of them and put the other back."
            ]
          ]
        },
      ]
    },
    {
      id: 30,
      name: "HYDRA Pilots",
      set: 20,
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
      ]
    },
    {
      id: 31,
      name: "HYDRA Spies",
      set: 20,
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
      ]
    },
    {
      id: 32,
      name: "Ten Rings Fanatics",
      set: 20,
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
      ]
    },
  ]
}