export default {
  id: 9,
  heroes: [
    {
      id: 69,
      name: "Howard the Duck",
      set: [9, 23],
      team: 0,
      cards: [
        {
          name: "Traveling Companion",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "Reveal the top card of the Bystander Deck. If it's a special Bystander, rescue it. Otherwise, put it on the bottom of that deck."
            ]
          ]
        },
        {
          name: "Rebel Without a Cause",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Reveal the top card of your deck if it Costs ",
              { bold: "0" },
              { icon: 3 },
              " or has no team icon, draw it."
            ]
          ]
        },
        {
          name: "Right Place, Wrong Time",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other Hero you played this turn with no team icon."
            ]
          ]
        },
        {
          name: "Interplanetary Visitor",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Reveal the top three cards of your deck. Draw one of them, discard one, and KO one."
            ]
          ]
        }
      ]
    },
    {
      id: 70,
      name: "Man-Thing",
      set: [9, 23],
      team: 0,
      cards: [
        {
          name: "Form from Ooze",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            { keyword: 1 },
            [
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              " usable only against villains in the Sewers or the Mastermind."
            ]
          ]
        },
        {
          name: "Burn the Fearful",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Choose a Villain or Mastermind. If there are no other Villains adjacent to it, it gets ",
              { bold: "-1" },
              { icon: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "Travel the Nexus of Realities",
          hc: 1,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            { keyword: 1 },
            [
              "You may move a Villain to another city space. If another Villain is already there, swap them."
            ]
          ]
        },
        {
          name: "Eternity of Solitude",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each empty city space."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 11,
      name: "Circus of Crime",
      set: [9, 23],
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top card of your deck. If it costs ",
              { bold: "0" },
              { icon: 3 },
              ", KO it. Otherwise, draw it."
            ]
          ]
        },
      ]
    },
    {
      id: 12,
      name: "Spider-Slayer",
      set: [9, 23],
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top two cards of your deck. Put any that cost ",
              { bold: "2" },
              { icon: 3 },
              " or less into your hand. Put the rest back in any order."
            ]
          ]
        },
      ]
    },
  ]
}