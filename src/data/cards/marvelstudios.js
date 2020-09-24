export default {
  masterminds: [
    {
      id: 56,
      name: "Iron Monger",
      set: 20,
      attack: "9",
      vp: 5,
      cards: [
        {
          name: "Iron Monger",
          attack: "9+",
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
  ]
}