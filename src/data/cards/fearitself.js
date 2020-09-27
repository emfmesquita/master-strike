export default {
  heroes: [
    {
      id: 63,
      name: "Greithoth, Breaker of Wills",
      set: 8,
      team: 10,
      cards: [
        {
          name: "Absorb Metal",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            [
              "If you control an ",
              { keyword: 13 },
              ", you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Mace of Chains",
          hc: 2,
          rarity: 1,
          cost: 3,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Break the Will to Resist",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { hc: 1 },
              ": Each player discards the bottom card of their deck. For each non-grey card discard this way, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Body of Uru",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the total number of ",
              { keyword: 13, text: "Artifacts" },
              " controlled by players and ",
              { keyword: 13, text: "Artifacts" },
              " the Lair."
            ]
          ]
        }
      ]
    },
    {
      id: 64,
      name: "Kuurth, Breaker of Stone",
      set: 8,
      team: 10,
      cards: [
        {
          name: "Reach for Power",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              "Reveal the top or bottom card of your deck. If it costs 4 or more, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Unstoppable Sledge",
          hc: 3,
          rarity: 1,
          cost: 4,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Contest of Strength",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { team: 10 },
              ": Discard the top card of any player's deck. Then reveal the top or bottom card of your deck. If the card you revealed has an equal or higher cost, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Break Every Bone",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "Reveal a card from your hand, the top card of your deck, and the bottom card of your deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to their total costs."
            ]
          ]
        }
      ]
    },
    {
      id: 65,
      name: "Nerkkod, Breaker of Oceans",
      set: 8,
      team: 10,
      cards: [
        {
          name: "Pull of the Tides",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "You may move an Adversary to an adjacent city space. If another Adversary is already there, swap them."
            ]
          ]
        },
        {
          name: "Feed My Undersea Legions",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Whenever you defeat an Adversary on the Bridge this turn, you may KO one of your cards or a card from your discard pile. If you do, gain a New Recruit."
            ]
          ]
        },
        {
          name: "Cudgel of the Deep",
          hc: 3,
          rarity: 2,
          cost: 5,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+3" },
              { icon: 1 },
              ", usable only against Adversaries on the Bridge or the Commander."
            ]
          ]
        },
        {
          name: "Break Their Loyalties",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { team: 10 },
              ": Each other player reveals their hand. Choose a New Recruit or Madame HYDRA from each of those players' hands and put them into your hand."
            ]
          ]
        }
      ]
    },
    {
      id: 66,
      name: "Nul, Breaker of Worlds",
      set: 8,
      team: 10,
      cards: [
        {
          name: "Demolition Derby",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 4 },
              ": Choose a player and ",
              { keyword: 9 },
              " them. If that player discards a card this way, draw a card."
            ]
          ]
        },
        {
          name: "Otherworldly Maul",
          hc: 2,
          rarity: 1,
          cost: 4,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+2" },
              { icon: 1 },
              " for each ",
              { hc: 4 },
              " Ally you played this turn."
            ]
          ]
        },
        {
          name: "Nul Smash!",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "Say “NUL SMASH!“ Then each player slaps a palm on the table. The last other player to slap a palm on the table gains a Bindings."
            ]
          ]
        },
        {
          name: "Break the World",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "KO up to two cards from your hand and/or discard pile. For each Bindings you KO this way, ",
              { keyword: 9, text: "demolish" },
              " each other player."
            ]
          ]
        }
      ]
    },
    {
      id: 67,
      name: "Skadi",
      set: 8,
      team: 13,
      cards: [
        {
          name: "Dark Prophecy",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 5 },
              ": Gain a Madame HYDRA."
            ]
          ]
        },
        {
          name: "Ancient Oath of HYDRA",
          hc: 5,
          rarity: 1,
          cost: 5,
          attack: "1",
          abilities: [
            [
              "You may discard a",
              { team: 13 },
              " Ally. If you do, draw two cards."
            ]
          ]
        },
        {
          name: "Hammer of the Serpent",
          hc: 4,
          rarity: 2,
          cost: 5,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+2" },
              { icon: 1 },
              " for each card you discarded this turn."
            ],
            { italic: "(Throwing an Artifact does not count as “discarding“ it.)" }
          ]
        },
        {
          name: "War Banner of HYDRA",
          hc: 1,
          rarity: 3,
          cost: 7,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other",
              { team: 13 },
              " Ally you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 68,
      name: "Skirn, Breaker of Men",
      set: 8,
      team: 10,
      cards: [
        {
          name: "Towering Leader",
          hc: 2,
          rarity: 1,
          cost: 3,
          abilities: [
            "Gain two New Recruits.",
            [
              { hc: 2 },
              ": Gain a third New Recruit."
            ]
          ]
        },
        {
          name: "Underhanded Dealings",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            "Look at the bottom card of your deck. Discard it or put it back.",
            [
              { hc: 1 },
              ": Draw a card from the bottom of your deck."
            ]
          ]
        },
        {
          name: "Titanic Bludgeon",
          hc: 3,
          rarity: 2,
          cost: 2,
          abilities: [
            { keyword: 14 },
            [
              "When you throw this, you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you've drawn this turn. ",
              { italic: "(This doesn't count the six cards you draw at the end of your turn.)" }
            ]
          ]
        },
        {
          name: "Break Your Hopes",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Each player reveals a ",
              { hc: 1 },
              " Ally or discards a card. For each card discarded this way, you draw a card."
            ]
          ]
        }
      ]
    },
  ],
  masterminds: [
    {
      id: 20,
      name: "Uru-Enchanted Iron Man",
      tacticName: "Uru Iron Man",
      set: 8,
      attack: "7",
      vp: 6,
      cards: [
        {
          name: "Uru-Enchanted Iron Man",
          attackAsterisk: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": The Mighty"
            ],
            [
              { bold: "Command Strike" },
              ": ",
              { keyword: 9 },
              " each player. Then stack this Strike next to Iron Man. Uru-Enchanted Iron Man has an ",
              { keyword: 15, text: "Uru-Enchanted Weapon" },
              " for each Strike stacked here."
            ]
          ]
        },
        {
          name: "Armor of the Destroyer",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": For each ",
              { hc: 5 },
              " Ally you have, ",
              { keyword: 9, text: "demolish" },
              " each other player."
            ]
          ]
        },
        {
          name: "Pepper Potts in Rescue Armor",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": A Bystander from the Bystander Stack becomes a Command Strike that takes effect immediately."
            ]
          ]
        },
        {
          name: "Quantum Inventions",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Draw two cards. Then, if you reveal a ",
              { hc: 5 },
              " card, draw two more cards.",
            ]
          ]
        },
        {
          name: "Repulsor Coils",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Ally or gains a Bindings.",
            ]
          ]
        }
      ]
    },
  ]
}