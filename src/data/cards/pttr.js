export default {
  heroes: [
    {
      name: "Black Cat",
      set: 6,
      team: 3,
      cards: [
        {
          name: "Casual Bank Robbery",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            { keyword: 8 },
            [
              "You get another ",
              { bold: "+1" },
              { icon: 2 },
              "usable only to recruit the Hero in the HQ Space under the Bank."
            ]
          ]
        },
        {
          name: "Pickpocket",
          hc: 1,
          rarity: 1,
          cost: 1,
          attack: "0+",
          abilities: [
            { keyword: 8 },
            [
              "Reveal the top card of any player's deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that card's printed ",
              { icon: 2 },
              " plus its printed ",
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Jinx",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            "Each player reveals the top card of their deck. Choose any number of those cards to be discarded."
          ]
        },
        {
          name: "Cat Burglar",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              "Each other player reveals a ",
              { hc: 1},
              " Hero or chooses a Bystander from their Victory Pile. You rescue those Bystanders."
            ],
            [
              { team: 3},
              ": You get ",
              { bold: "+1"},
              { icon: 1},
              " for each Bystander you rescued this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Moon Knight",
      set: 6,
      team: 6,
      cards: [
        {
          name: "Climbing Claws",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            { keyword: 8 },
            [
              { hc: 2},
              ": You get ",
              { bold: "+1"},
              { icon: 2}
            ]
          ]
        },
        {
          name: "Lunar Communion",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            { keyword: 8 },
            [
              "Whenever you defeat a Villain on the Rooftops this turn, you may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "Crescent Moon Darts",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Reveal the top card of your deck. If it's ",
            { hc: 2},
            " or ",
            { hc: 5},
            ", draw it."
            ]
          ]
        },
        {
          name: "Golden Ankh of Khonshu",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "Whenever you defeat a Villain on the Rooftops this turn, rescue Bystanders equal to that Villain's printed ",
              { icon: 4},
              "."
            ],
            [
              { hc: 5},
              ": You may move a Villain to the Rooftops. If another Villain is already there, swap them."
            ]
          ]
        }
      ]
    },
    {
      name: "Scarlet Spider",
      set: 6,
      team: 3,
      cards: [
        {
          name: "Flip Out ",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            { keyword: 8 },
            [
              { team: 3},
              ": Draw a card.",
            ]
          ]
        },
        {
          name: "Perfect Hunter ",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "1",
          abilities: [
            { keyword: 8 },
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Leap from Above",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            {keyword: 8},
            [
            { hc: 2},
            ": You get ",
            { bold: "+2"},
            { icon: 1}
            ]
          ]
        },
        {
          name: "Sting of the Spider ",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "Whenever you put a card on top of your deck this turn, you may draw that card."
            ]
          ]
        }
      ]
    },
    {
      name: "Spider-Woman",
      set: 6,
      team: 3,
      cards: [
        {
          name: "Bioelectric Shock",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            { keyword: 8 },
            [
              "Reveal the top card of your deck. If that card has an ",
              { icon: 1},
              " icon, draw it."
            ]
          ]
        },
        {
          name: "Radioactive Spider",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "3",
          abilities: [
            [
              "To play this card, you must put a card from your hand on top of your deck."
            ]
          ]
        },
        {
          name: "Venom Blast",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            {keyword: 8},
            [
              "Reveal the top card of your deck. If that card has a ",
              { icon: 2},
              " icon, draw it."
            ]
          ]
        },
        {
          name: "Arachno-Pheromones",
          hc: 1,
          rarity: 3,
          cost: 7,
          abilities: [
            "Recruit a Hero from the HQ for free.",
            [
              { team: 3},
              ": Put that Hero on top of your deck."
            ]
          ]
        }
      ]
    },
    {
      name: "Symbiote Spider-Man",
      set: 6,
      team: 3,
      cards: [
        {
          name: "Dark Strength",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            { keyword: 8 },
            [
              "Reveal the top card of your deck. If it costs 1 ",
              { icon: 3},
              " or 2 ",
              { icon: 3},
              ", you get ",
              { bold: "+2"},
              { icon: 1}
            ]
          ]
        },
        {
          name: "Spider-Sense Tingling",
          hc: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Reveal the top two cards of your deck. Put any that cost 2 ",
              { icon: 3},
              " or less into your hand. Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Shadowed Spider",
          hc: 1,
          rarity: 2,
          cost: 2,
          attack: "1+",
          abilities: [
            {keyword: 8},
            [
              "You get +1 Attack",
              { bold: "+1"},
              { icon: 1},
              " for each other Hero you played this turn that costs 1 ",
              { icon: 3},
              " or 2 ",
              { icon: 3}
            ]
          ]
        },
        {
          name: "Thwip!",
          hc: 3,
          rarity: 3,
          cost: 2,
          attack: "4",
          abilities: [
            "To play this card, you must put two cards from your hand on top of your deck."
          ]
        }
      ]
    }
  ]
}