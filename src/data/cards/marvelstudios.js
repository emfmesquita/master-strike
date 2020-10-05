export default {
  id: 20,
  masterminds: [
    {
      id: 56,
      name: "Iron Monger",
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
  ],
  schemes: [
    {
      id: 100,
      name: "Asgard Under Siege",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Add an extra Henchman group to the Villain Deck."
            ],
            [
              { bold: "Twist" },
              ": Play the top 2 cards of the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": If 12 Villains escape."
            ],
          ]
        },
      ]
    },
    {
      id: 101,
      name: "Destroy the Cities of Earth!",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. 12 Bystanders in the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Each Villain gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander it has."
            ],
            [
              { bold: "Twist" },
              ": Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When 8 Bystanders are carried away by escaping Villains."
            ],
          ]
        },
      ]
    },
    {
      id: 102,
      name: "Enslave Minds with the Chitauri Scepter",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. 6 Heroes. Chitauri Villain Group required. Shuffle 12 random Heroes from the Hero Deck into the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Heroes in the Villain Deck count as “Enslaved“ Villains with ",
              { icon: 1 },
              " equal to the Hero's ",
              { icon: 3 },
              { bold: "+2" },
              ". If you defeat that Hero, you gain it."
            ],
            [
              { bold: "Twist" },
              ": The highest-cost Hero from the HQ moves into the Sewers as an “Enslaved“ Villain, as above."
            ],
            [
              { bold: "Evil Wins" },
              ": If 6 Heroes get into the Escaped Villains pile."
            ],
          ]
        },
      ]
    },
    {
      id: 103,
      name: "Invade Asgard",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists. Each Twist is a Dark Portal."
            ],
            [
              { bold: "Twist 1" },
              ": Put the Dark Portal above the Mastermind. The Mastermind gets ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Twists 2-6" },
              ": Put the Dark Portal in the leftmost city space that doesn't yet have a Dark Portal. Villains in that city space get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Twist 7" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 104,
      name: "Radioactive Palladium Poisoning",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Wound stack holds 6 Wounds per player."
            ],
            [
              { bold: "Twist" },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound."
            ],
            [
              { bold: "Evil Wins" },
              ": If the Wound stack runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 105,
      name: "Replace Earth's Leaders with HYDRA",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 5 Twists. 3 additional Twists next to this Scheme. 18 total Bystanders in the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Bystanders in the Villain Deck count as “Infiltrator“ Villains, with ",
              { icon: 1 },
              " equal to the number of Twists next to this Scheme."
            ],
            [
              { bold: "Twist" },
              ": Put the Twist next to this Scheme."
            ],
            [
              { bold: "Evil Wins" },
              ": If 5 “Infiltrators“ escape."
            ],
          ]
        },
      ]
    },
  ]
}