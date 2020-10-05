export default {
  id: 17,
  heroes: [
    {
      id: 147,
      name: "Happy Hogan",
      team: 0,
      cards: [
        {
          name: "Head of Security",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            { keyword: 43 },
            "KO all Wounds you gained this turn."
          ]
        },
        {
          name: "Watchful Eye",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 2 },
              ": ",
              { keyword: 41, text: "Danger Sense 2" },
              ". If this revealed any Master Strikes, KO those Strikes, then you may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Loyal Friend",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "0+",
          abilities: [
            { keyword: 43 },
            { keyword: 42 }
          ]
        },
        {
          name: "Asset Management",
          hc: 2,
          rarity: 3,
          cost: 5,
          attack: "0+",
          abilities: [
            { keyword: 42, text: "Double Striker" }
          ]
        }
      ]
    },
    {
      id: 148,
      name: "High Tech Spider-Man",
      team: 3,
      cards: [
        {
          name: "Advanced Targeting System",
          hc: 1,
          rarity: 1,
          cost: 2,
          abilities: [
            "Reveal the top card of your deck. If it costs 2 or less, draw it.",
            [
              { hc: 1 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Recon Drone Connection",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            { keyword: 7 },
            { keyword: 41, text: "Danger Sense 3" }
          ]
        },
        {
          name: "Spider-Grip",
          hc: 5,
          rarity: 2,
          cost: 2,
          attack: "2",
          abilities: [
            { keyword: 7 },
            [
              { hc: 5 },
              ": Choose two Villains in adjacent city spaces. Each of them gets ",
              { bold: "-1" },
              { icon: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "Friendly Neighborhood...",
          hc: 5,
          rarity: 3,
          cost: 2,
          attack: "0+",
          abilities: [
            { keyword: 7 },
            { keyword: 43 },
            [
              "You get ",
              { bold: "+3" },
              { icon: 1 },
              ", usable only against the Mastermind or Villains on the Rooftops or Streets."
            ]
          ]
        }
      ]
    },
    {
      id: 149,
      name: "Peter Parker, Homecoming",
      team: 3,
      cards: [
        {
          name: "Avenger in Training",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "2+",
          abilities: [
            { keyword: 7 },
            [
              { hc: 2 },
              ": ",
              { keyword: 41, text: "Danger Sense 1" },
              ". If this revealed a Villain, you may fight it."
            ]
          ]
        },
        {
          name: "Heightened Senses",
          hc: 1,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            { keyword: 41, text: "Danger Sense 2" },
            "Reveal the top card of your deck. If it costs 2 or less, draw it."
          ]
        },
        {
          name: "Homemade Web-Shooters",
          hc: 5,
          rarity: 2,
          cost: 2,
          attack: "2+",
          abilities: [
            { keyword: 7 },
            [
              { hc: 5 },
              ": ",
              { keyword: 41, text: "Danger Sense 1" },
              ". If this revealed a Bystander, rescue it."
            ]
          ]
        },
        {
          name: "Something is Happening",
          hc: 4,
          rarity: 3,
          cost: 2,
          attack: "0+",
          abilities: [
            { keyword: 7 },
            { keyword: 43 },
            [
              { keyword: 41, text: "Danger Sense 4" },
              ". If this revealed any Scheme Twists, you may shuffle the Villain Deck."
            ]
          ]
        }
      ]
    },
    {
      id: 150,
      name: "Peter's Allies",
      team: 3,
      cards: [
        {
          name: "Ned",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            { keyword: 43 },
            [
              { hc: 1 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Michelle",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "You may choose a Villain or Mastermind. You can fight it using only ",
              { icon: 2 },
              " this turn."
            ]
          ]
        },
        {
          name: "Liz",
          hc: 2,
          rarity: 2,
          cost: 6,
          recruit: "4",
          abilities: [
            [
              "Whenever you ",
              { keyword: 43 },
              " a card to another player, you may reveal this to draw two cards instead of one."
            ]
          ]
        },
        {
          name: "May Parker",
          hc: 1,
          rarity: 3,
          cost: 7,
          recruit: "5",
          abilities: [
            { keyword: 43 },
            [
              { team: 3 },
              ": Each Villain gets ",
              { bold: "-2" },
              { icon: 1 },
              " this turn. The next time you fight the Mastermind this turn, it gets ",
              { bold: "-2" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 151,
      name: "Tony Stark",
      team: 1,
      cards: [
        {
          name: "Genius, Billionaire...",
          hc: 5,
          rarity: 1,
          cost: 2,
          recruit: "1",
          attack: "1",
          abilities: [
            { keyword: 43 }
          ]
        },
        {
          name: "Stay Out of Trouble",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 43 },
            [
              { hc: 5 },
              ": ",
              { keyword: 41, text: "Danger Sense 2" }
            ]
          ]
        },
        {
          name: "Little Grey Area",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { team: 1 },
              ": ",
              { keyword: 41, text: "Danger Sense 1" },
              ". If this revealed a Villain, then Villains from that same Villain Group get ",
              { bold: "-1" },
              { icon: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "As Usual, I Did All the Work",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            { keyword: 43 },
            [
              "If another player accepts this ",
              { keyword: 43 },
              ", then at the end of this turn, move all cards that entered that player's Victory Pile this turn into your Victory Pile."
            ]
          ]
        }
      ]
    },
  ],
  masterminds: [
    {
      id: 46,
      name: "Adrian Toomes",
      vAttack: "5",
      vp: 6,
      cards: [
        {
          name: "Adrian Toomes",
          vAttack: "5+",
          abilities: [
            [
              { keyword: 42, text: "Double Striker" }
            ],
            [
              { bold: "Always Leads" },
              ": Salvagers"
            ],
            [
              { bold: "Master Strike" },
              ": Starting from the Sewers, each Villain in the city uses its “Escape“ ability."
            ]
          ]
        },
        {
          name: "Epic Adrian Toomes",
          vAttack: "5+",
          epic: true,
          abilities: [
            [
              { keyword: 42, text: "Triple Striker" }
            ],
            [
              { bold: "Always Leads" },
              ": Salvagers"
            ],
            [
              { bold: "Master Strike" },
              ": Starting from the Sewers, each Villain in the city uses its “Ambush“ ability, then its “Escape“ ability."
            ]
          ]
        },
        {
          name: "Don't Interfere",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 41, text: "Danger Sense 4" },
              ". If this revealed any Bystanders, rescue them."
            ]
          ]
        },
        {
          name: "More Harm than Good",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards a ",
              { team: 3 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Take Everything",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may put a card from your discard pile on top of your deck."
            ]
          ]
        },
        {
          name: "The World's Changed",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 41, text: "Danger Sense 3" },
              ". Put all Henchmen Villains revealed this way into your Victory Pile, then do their “Fight“ abilities."
            ]
          ]
        }
      ]
    },
    {
      id: 47,
      name: "Vulture",
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Vulture",
          vAttack: "8+",
          dense: true,
          abilities: [
            [
              { keyword: 42 }
            ],
            [
              { bold: "Always Leads" },
              ": Vulture Tech"
            ],
            [
              { bold: "Master Strike" },
              ": Put a Wound from the Wound Stack below each HQ space as a “Winged Assault.“ Whenever a player gains or KOs a Hero from the HQ, the player on their right gains one of the Wounds below that HQ space."
            ]
          ]
        },
        {
          name: "Epic Vulture",
          vAttack: "10+",
          epic: true,
          dense: true,
          abilities: [
            [
              { keyword: 42 }
            ],
            [
              { bold: "Always Leads" },
              ": Vulture Tech"
            ],
            [
              { bold: "Master Strike" },
              ": Put a Wound from the Wound Stack or KO pile below each HQ space as a “Winged Assault.“ Whenever a player gains or KOs a Hero from the HQ, the player on their right gains one of the Wounds below that HQ space, putting it on top of their deck."
            ]
          ]
        },
        {
          name: "Bird of Prey",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards a ",
              { team: 3 },
              " Hero or discards two cards."
            ]
          ]
        },
        {
          name: "Lurking Shadow",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 41, text: "Danger Sense 2" },
              ". If the Rooftops are empty, a Villain you revealed enters the Rooftops."
            ]
          ]
        },
        {
          name: "Mid Air Heist",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+5" },
              { icon: 2 },
              " usable only to recruit ",
              { hc: 5 },
              " Heroes."
            ]
          ]
        },
        {
          name: "Winged Assault",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put two “Winged Assault“ Wounds from under the HQ into each other player's discard pile."
            ]
          ]
        }
      ]
    },
  ],
  schemes: [
    {
      id: 84,
      name: "Distract the Hero",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Use at least 1",
              { team: 3 },
              " Hero."
            ],
            [
              { bold: "Twist" },
              ": If you get any Victory Points this turn, put this Twist on the bottom of the Villain Deck. Otherwise, stack this Twist next to the Scheme as a “Villainous Interruption.“"
            ],
            [
              { bold: "Evil Wins" },
              ": When there have been 5 Villainous Interruptions."
            ],
          ]
        },
      ]
    },
    {
      id: 85,
      name: "Explosion at the Washington Monument",
      cards: [
        {
          dense: true,
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Shuffle 18 Bystanders and 14 Wounds, then deal them evenly into eight decks. Put these decks in a row, as Floors of the Washington Monument."
            ],
            [
              { bold: "Special Rules" },
              ": Whenever you fight a Villain, you may reveal any face-down card from any Floor. If it's a Bystander, rescue it. If it's a Wound, put it back face-up."
            ],
            [
              { bold: "Twist" },
              ": KO the topmost Floor of the Washington Monument. You gain one of the Wounds KO'd this way."
            ],
            [
              { bold: "Evil Wins" },
              ": When 10 Bystanders are in the KO pile and/or Escape Pile, or all Floors are KO'd."
            ],
          ]
        },
      ]
    },
    {
      id: 86,
      name: "Ferry Disaster",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists. Put the Bystander Stack above the Sewers as the “Ferry.“"
            ],
            [
              { bold: "Twist 1-4" },
              ": If there's a Villain in the city space below the Ferry, KO 2 Bystanders from the Ferry. Whether you KO'd or not, the Ferry moves one space left."
            ],
            [
              { bold: "Twist 5-8" },
              ": Same effect, but it moves right."
            ],
            [
              { bold: "Twist 9" },
              ": KO half the Bystanders from the Bystander deck, rounding up."
            ],
            [
              { bold: "Evil Wins" },
              ": When 7 Bystanders are in the KO pile and/or Escape Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 87,
      name: "Scavenge Alien Weaponry",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists. Add an extra Henchmen Group of 10 cards as Smugglers."
            ],
            [
              { bold: "Special Rules" },
              ": Smugglers have ",
              { keyword: 42 },
              "."
            ],
            [
              { bold: "Twist" },
              ": Play two cards from the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Villains per player have escaped or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
  ]
}