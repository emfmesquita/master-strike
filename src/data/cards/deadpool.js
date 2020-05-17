export default {
  heroes: [
    {
      id: 122,
      name: "Bob, Agent of HYDRA",
      set: 14,
      team: 13,
      cards: [
        {
          name: "Bullets Flying, Bob Hiding",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2½ ",
          abilities: [
            [
              {keyword: 30},
              ": Draw a card."
            ]
          ]
        },
        {
          name: "HYDRA Half-Wit",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1½ ",
          abilities: [
            [
              "Reveal the top card of your deck. If it's HYDRA or S.H.I.E.L.D.",
              { team: 13},
              " or ",
              { team: 2},
              ", draw it."
            ]
          ]
        },
        {
          name: "How Do I Get Out of Here??",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              { hc: 1 },
              ": Look at the top card of another player's deck. Ask them a yes or no question about it. If they guess right, then they draw that card. If not, then you draw a card."
            ]
          ]
        },
        {
          name: "Epic Middle Manager",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "5",
          abilities: [
            [
              { keyword: 30 },
              ": KO up to two ",
              { team: 13},
              " and/or ",
              { team: 2},
              " Heroes from your discard pile. Draw a card for each Hero KO'd this way."

            ]
          ]
        }
      ]
    },
    {
      id: 123,
      name: "Deadpool",
      set: 14,
      team: 17,
      cards: [
        {
          name: "Nighttime Is the Right Time",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "If it's between 8 p.m. and midnight, you get ",
              { bold: "+2" },
              { icon: 1 },
              ". Otherwise, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ],
            [
              { hc: 5 },
              ": Screw it, just take both!"
            ]
          ]
        },
        {
          name: "It'll Grow Back",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2½+",
          abilities: [
            [
              "If you have a Wound in your hand or discard pile, KO it at you get ",
              { bold: "+1" },
              { icon: 1 },
              ". Otherwise, gain a Wound. These days, getting wounded mostly just pisses me off."
            ]
          ]
        },
        {
          name: "Running Commentary",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3½+",
          abilities: [
            [
              "You get ",
              { bold: "+1/2" },
              { icon: 1 },
              " for each other card with flavor text you played this turn. Now maybe you'll stop telling me to shut up."
            ]
          ]
        },
        {
          name: "Deadpool Rage!",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { keyword: 30 },
              ": Take another turn after this one. But don't use this ability more than once per game — trilogies are stupid."
            ]
          ]
        }
      ]
    },
    {
      id: 124,
      name: "Slapstick",
      set: 14,
      team: 17,
      cards: [
        {
          name: "Napoleon Complex",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              { hc: 3},
              ": If any other players are taller than you, draw a card. If any other players are shorter than you, you get +1 Recruit. If both, get both!"
            ]
          ]
        },
        {
          name: "Saturday Morning Harpoons",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2½ ",
          abilities: [
            [
              { keyword: 30},
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Surprise Chainsaw",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4½ ",
          abilities: [
            [
              { keyword: 30},
              ": When you have a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Electroplasmic Insanity ",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "5",
          abilities: [
            [
              { keyword: 30 },
              ": Recruit a Hero from the HQ for free. Then, you may shuffle your discard pile into your deck."
            ]
          ]
        }
      ]
    },
    {
      id: 125,
      name: "Solo",
      set: 14,
      team: 17,
      cards: [
        {
          name: "Half-Cocked",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1½ ",
          recruit: "1½ ",
          abilities: [
           
          ]
        },
        {
          name: "Merc's Gotta Get Paid ",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2½ ",
          recruit: "0+",
          abilities: [
            [
              { keyword: 30},
              ": You get ",
              { bold: "+1" },
              { icon: 2}
            ]
          ]
        },
        {
          name: "Guns on My Guns",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3½ ",
          abilities: [
            [
              { hc: 5},
              ": Does the top card of your deck have a gun in the art? If so, draw that gun!"
            ]
          ]
        },
        {
          name: "Cut in Half ",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "2½ ",
          abilities: [
            [
              "Choose a Villain. Cut its Attack in half this turn."
            ],
            [
              { team: 17},
              ": Cut the Mastermind's Attack in half for one fight this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 126,
      name: "Stingray",
      set: 14,
      team: 17,
      cards: [
        {
          name: "Nighttime Is the Right Time",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "1½ ",
          recruit: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              "You may move a Villain to an adjacent city space. If another Villain is already there, swap them."
            ]
          ]
        },
        {
          name: "Superpowered Swimsuit",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1½+",
          abilities: [
            [
              { hc: 5},
              ": You get ",
              { bold: "+2"},
              { icon: 1},
              ", usable only against Villains in the Sewers or Bridge or the Mastermind."
            ]
          ]
        },
        {
          name: "Sting of the Stingray's Sting",
          hc: 3,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              {keyword: 30},
              ": You may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "PhD in Oceanography",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            "You may KO a card from your hand or discard pile.",
            [
              { team: 17 },
              ": You get ",
              { bold: "+1/2"},
              { icon: 1},
              " for each Hero in the KO pile."
            ]
          ]
        }
      ]
    }
  ]
}