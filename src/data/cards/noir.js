export default {
  heroes: [
    {
      id: 127,
      name: "Angel Noir",
      set: 15,
      team: 4,
      cards: [
        {
          name: "Impetuous Dive",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Multitalented",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              "Choose a Hero Class. ",
              { keyword: 32 },
              " for a card of that Hero Class."
            ]
          ]
        },
        {
          name: "Identical Twin Brother",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "You get the printed ",
              { icon: 2 },
              " and ",
              { icon: 1 },
              " of a Hero in the HQ. Then put that Hero on the bottom of the Hero Deck."
            ]
          ]
        },
        {
          name: "Missing Person Case",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "3",
          abilities: [
            [
              { keyword: 32 },
              " the Hero Deck for any card and put that card in your hand."
            ]
          ]
        },

      ]
    },
    {
      id: 128,
      name: "Daredevil Noir",
      set: 15,
      team: 6,
      cards: [
        {
          name: "Balancing Act",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              "The next Hero you recruit this turn goes on top of your deck."
            ]
          ]
        },
        {
          name: "Listen for Heartbeats",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Choose a number 1 or more. ",
              { keyword: 32 },
              " for a card of that cost."
            ]
          ]
        },
        {
          name: "Discover the Bodies",
          hc: 1,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              { hc: 1 },
              ": ",
              { keyword: 32 },
              " for a card that costs 0. KO that card."
            ]
          ]
        },
        {
          name: "Hitting Rock Bottom",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              "Discard a card from the top or bottom of your deck. If it costs 0, you get ",
              { bold: "+1" },
              { icon: 1 },
              " and repeat this process. If your deck runs out, stop."
            ]
          ]
        },

      ]
    },
    {
      id: 129,
      name: "Iron Man Noir",
      set: 15,
      team: 1,
      cards: [
        {
          name: "Steam-Powered Arsenal",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "3",
          abilities: [
            [
              "To play this, you must put another card from your hand on top of your deck."
            ]
          ]
        },
        {
          name: "Mechanized Plate-Mail",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              { keyword: 32 },
              " for a ",
              { hc: 5 },
              " card."
            ]
          ]
        },
        {
          name: "Learn from Enemies",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { hc: 5 },
              ": You may use the “Fight“ ability of a Villain worth 1",
              { icon: 4 },
              " in your Victory Pile."
            ]
          ]
        },
        {
          name: "Adventurers Assemble!",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Whenever you ",
              { keyword: 32 },
              " this turn, look at three cards instead of two."
            ],
            [
              "Choose ",
              { icon: 2 },
              " or ",
              { icon: 1 },
              ". ",
              { keyword: 32 },
              " for a card with that icon."
            ]
          ]
        },

      ]
    },
    {
      id: 130,
      name: "Luke Cage Noir",
      set: 15,
      team: 6,
      cards: [
        {
          name: "Follow Big Leads",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each other card you played this turn that costs 4 or more."
            ]
          ]
        },
        {
          name: "Private Investigations",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { keyword: 32 },
              " for a card that costs 4 or more."
            ]
          ]
        },
        {
          name: "Unbreakable Cage",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "Once per turn, if a player would gain a Wound, you may reveal this card and ",
              { keyword: 32 },
              " for any card instead."
            ]
          ]
        },
        {
          name: "Weight of the World",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              " for each other card you played this turn that costs 4 or more."
            ]
          ]
        },

      ]
    },
    {
      id: 131,
      name: "Spider-Man Noir",
      set: 15,
      team: 3,
      cards: [
        {
          name: "Gumshoe's Revolver",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { keyword: 32 },
              " for a card that costs 2 or less."
            ]
          ]
        },
        {
          name: "Webs of Darkness",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Solve the Crime",
          hc: 2,
          rarity: 2,
          cost: 2,
          attack: "2",
          abilities: [
            [
              { hc: 2 },
              ": ",
              { keyword: 32 },
              " the Bystander Stack for a Bystander and rescue it."
            ]
          ]
        },
        {
          name: "Spider-Totem's Chosen",
          hc: 4,
          rarity: 3,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { team: 3 },
              ": ",
              { keyword: 32 },
              " each player's deck for a card that costs 2 or less, play a copy of that card, then put it into their discard pile."
            ]
          ]
        },

      ]
    },
  ]
}