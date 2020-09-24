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
              { keyword: 30 },
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
              "Reveal the top card of your deck. If it's ",
              { team: 13 },
              " or ",
              { team: 2 },
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
              { team: 13 },
              " and/or ",
              { team: 2 },
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
              { hc: 3 },
              ": If any other players are taller than you, draw a card. If any other players are shorter than you, you get ",
              { bold: "+1" },
              { icon: 2 },
              ". If both, get both!"
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
              { keyword: 30 },
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
              { keyword: 30 },
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
          abilities: []
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
              { keyword: 30 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
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
              { hc: 5 },
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
              "Choose a Villain. Cut its ",
              { icon: 1 },
              " in half this turn."
            ],
            [
              { team: 17 },
              ": Cut the Mastermind's ",
              { icon: 1 },
              " in half for one fight this turn."
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
          name: "Deck Chairs on the Titanic",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "1½ ",
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
              "Draw a card."
            ],
            [
              { hc: 5 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
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
              { keyword: 30 },
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
              { bold: "+1/2" },
              { icon: 1 },
              " for each Hero in the KO pile."
            ]
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 36,
      name: "Evil Deadpool",
      set: 14,
      attack: "11",
      vp: 6,
      cards: [
        {
          name: "Evil Deadpool",
          attack: "11+",
          dense: true,
          abilities: [
            { keyword: 31, text: "Revenge for Mastermind Tactics" },
            [
              { bold: "Always Leads" },
              ": Evil Deadpool Corpse"
            ],
            [
              { bold: "Master Strike" },
              ": Without talking, each player simultaneously discards a card. Whoever discards the lowest-costing card ",
              { italic: "(or tied for lowest)" },
              " gains a Wound."
            ]
          ]
        },
        {
          name: "Evil Even Oddball",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand. Whoever has the fewest cards with odd-numbered costs ",
              { italic: "(or tied for fewest)" },
              " gains a Wound."
            ]
          ]
        },
        {
          name: "Hyper-Insane Healing Factor",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, you get ",
              { bold: "+6" },
              { icon: 2 },
              " and shuffle this Tactic back into the other Tactics."
            ]
          ]
        },
        {
          name: "Of Course it's Corpse",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The other player with the fewest Evil Deadpool Corpse Villains in their Victory Pile ",
              { italic: "(or tied for fewest)" },
              " gains a Wound."
            ]
          ]
        },
        {
          name: "Stitched from Dead (Pool) Parts",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards the top card of their deck. Whoever discards the lowest-costing card ",
              { italic: "(or tied for lowest)" },
              " gains a Wound."
            ]
          ]
        }
      ]
    },
    {
      id: 37,
      name: "Macho Gomez",
      set: 14,
      attack: "9",
      vp: 6,
      cards: [
        {
          name: "Macho Gomez",
          attack: "9+",
          dense: true,
          abilities: [
            { keyword: 31, text: "Revenge for Deadpool's “Friends“" },
            [
              { bold: "Always Leads" },
              ": Deadpool's “Friends“"
            ],
            [
              { bold: "Master Strike" },
              ": Put this Strike in front of you as a “Bounty on Your Head.“ Then, each player gains a Wound for each Bounty on them. Any number of times during your turn, you may pay 1",
              { icon: 2 },
              " to move a Bounty from you to the player on your left."
            ]
          ]
        },
        {
          name: "Bounty Payout",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each “Bounty on Your Head“ on other players."
            ]
          ]
        },
        {
          name: "Interstellar Assassin",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get for each “Bounty on Your Head“ discards down to 4 cards."
            ]
          ]
        },
        {
          name: "Renegotiate the Contract",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Redistribute the “Bounty on Your Head“ cards among any number of players."
            ]
          ]
        },
        {
          name: "Super Macho Man",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue a Bystander for each “Bounty on Your Head“ on other players."
            ]
          ]
        }
      ]
    },
  ]
}