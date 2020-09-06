export default {
  heroes: [
    {
      id: 43,
      name: "Bullseye",
      set: 6,
      team: 8,
      cards: [
        {
          name: "Fulfill the Contract",
          hc: 2,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            { keyword: 10 },
            [
              "Choose an Adversary Group. You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Adversary in your Victory Pile from that Adversary Group."
            ]
          ]
        },
        {
          name: "Everything's a Weapon",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Specialist Assassin",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "Choose an Adversary. It gets ",
              { bold: "-1" },
              { icon: 1 },
              " for each Adversary in your Victory Pile from that Adversary Group."
            ]
          ]
        },
        {
          name: "Perfect Aim",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              "You get ",
              { bold: "+5" },
              { icon: 1 },
              " for each Commander Tactic in your Victory Pile."
            ]
          ]
        },

      ]
    },
    {
      id: 44,
      name: "Dr. Octopus",
      set: 6,
      team: 9,
      cards: [
        {
          name: "Brilliant Research",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 5 },
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Crazed Experiments",
          hc: 5,
          rarity: 1,
          cost: 5,
          attack: "2",
          abilities: [
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Eighth Time's a Charm",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              "If this is the eighth card you played this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Octo-Pulverize",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            [
              "Discard cards from the top of your deck until your deck runs out or you have discarded 8 cards ",
              { italic: "(don't shuffle)" },
              ". Then you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you discarded this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 45,
      name: "Electro",
      set: 6,
      team: 9,
      cards: [
        {
          name: "Electroshock Therapy",
          hc: 3,
          rarity: 1,
          cost: 2,
          abilities: [
            { keyword: 10 },
            [
              "Reveal the top card of your deck. You may KO it."
            ]
          ]
        },
        {
          name: "Shocking Robbery",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "0+",
          abilities: [
            { keyword: 10 },
            [
              "You get ",
              { bold: "+3" },
              { icon: 1 },
              " usable only against Adversaries in the Bank."
            ],
            [
              { hc: 3 },
              ": Instead you may get ",
              { bold: "+3" },
              { icon: 1 },
              " usable only against the Commander."
            ]
          ]
        },
        {
          name: "Supercharge",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you discarded this turn."
            ]
          ]
        },
        {
          name: "Anti-Matter",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "All Adversaries and the Commander get ",
              { bold: "-1" },
              { icon: 1 },
              " this turn."
            ],
            [
              { team: 9 },
              { team: 9 },
              ": Same Effect."
            ]
          ]
        },

      ]
    },
    {
      id: 46,
      name: "Enchantress",
      set: 6,
      team: 10,
      cards: [
        {
          name: "Enchant the Senses",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { hc: 3 },
              ": Whenever you defeat an Adversary this turn, you gain a New Recruit."
            ]
          ]
        },
        {
          name: "Soul Sacrifice",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "1+",
          abilities: [
            [
              "You may KO a card from your hand or discard pile. You get ",
              { bold: "+" },
              { icon: 2 },
              " equal to that card's cost."
            ]
          ]
        },
        {
          name: "Irresistible Bribe",
          hc: 1,
          rarity: 2,
          cost: 6,
          recruit: "3",
          dense: true,
          abilities: [
            [
              "Choose an Adversary. You can spend any combination of ",
              { icon: 2 },
              " and ",
              { icon: 1 },
              " to fight that Adversary this turn."
            ],
            [
              { hc: 1 },
              { hc: 1 },
              ": You can also spend any combination of ",
              { icon: 2 },
              " and ",
              { icon: 1 },
              " to fight the Commander this turn."
            ]
          ]
        },
        {
          name: "Unending Anguish",
          hc: 1,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Draw three cards."
            ],
            [
              { team: 10 },
              ": Then put Unending Anguish on the bottom of your deck."
            ]
          ]
        },

      ]
    },
    {
      id: 47,
      name: "Green Goblin",
      set: 6,
      team: 9,
      cards: [
        {
          name: "Pumpkin Bombs",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 10 },
            [
              "If you discarded any cards this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Goblin Glider",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            { keyword: 10 },
            [
              "When you play or ",
              { keyword: 10 },
              " with this card, another ",
              { team: 13 },
              " Ally in your hand gains ",
              { keyword: 10 },
              " this turn."
            ]
          ]
        },
        {
          name: "Unstable Kidnapper",
          hc: 2,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            { keyword: 10 },
            [
              "If you discarded any cards this turn, kidnap a Bystander."
            ]
          ]
        },
        {
          name: "Experimental Goblin Serum",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Return from your discard pile to your hand all the cards you discarded this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 48,
      name: "Juggernaut",
      set: 6,
      team: 11,
      cards: [
        {
          name: "Crimson Gem of Cyttorak",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              { hc: 4 },
              ": Each other player reveals the top card of their deck, and if it costs 1",
              { icon: 3 },
              ", 2",
              { icon: 3 },
              ", or 3",
              { icon: 3 },
              ", discards it. You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each card discarded this way."
            ]
          ]
        },
        {
          name: "Size Matters",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other card you played this turn that costs 4",
              { icon: 3 },
              " or more."
            ]
          ]
        },
        {
          name: "Runaway Train",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "4",
          abilities: [
            [
              "To play this card, you must discard a card from your hand."
            ]
          ]
        },
        {
          name: "Unstoppable Force",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              "Choose one: Each player KOs two cards from their hand, or each player KOs two cards from their discard pile. Then you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each non-grey Ally KO'd this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 49,
      name: "Kingpin",
      set: 6,
      team: 8,
      cards: [
        {
          name: "Pull the Strings",
          hc: 1,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Whenever a card effect causes you to gain a New Recruit this turn, put that New Recruit into your hand."
            ],
            [
              "Gain a New Recruit."
            ]
          ]
        },
        {
          name: "Recruitment Day",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 4 },
              ": Gain a New Recruit."
            ]
          ]
        },
        {
          name: "Import Illegal Weapons",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each New Recruit you played this turn."
            ]
          ]
        },
        {
          name: "Endless Underlings",
          hc: 4,
          rarity: 3,
          cost: 8,
          abilities: [
            [
              "Gain three New Recruits."
            ],
            [
              { team: 8 },
              { team: 8 },
              ": If you would return a New Recruit to the New Recruit Stack this turn, put it on the bottom of your deck instead."
            ]
          ]
        },

      ]
    },
    {
      id: 50,
      name: "Kraven",
      set: 6,
      team: 9,
      cards: [
        {
          name: "Ceaseless Tracker",
          hc: 2,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            { keyword: 10 },
            [
              { team: 9 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Corner the Prey",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Choose an Adversary. If there are no empty city spaces adjacent to that Adversary, it gets ",
              { bold: "-1" },
              { icon: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "Hunt Down",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "Choose an Adversary and a direction. Move that Adversary as many adjacent, empty spaces as you can in that direction. You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each space it moved."
            ]
          ]
        },
        {
          name: "He's the Best Around",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the Cost of the highest-cost Ally in the Lair."
            ]
          ]
        },

      ]
    },
    {
      id: 51,
      name: "Loki",
      set: 6,
      team: 10,
      cards: [
        {
          name: "All Humans Are Expendable",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile. If you do, gain a New Recruit."
            ]
          ]
        },
        {
          name: "Illusionary Bindings",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              { hc: 3 },
              ": Each other player reveals a ",
              { hc: 3 },
              " Ally or gains a Bindings. If any number of players gained a Bindings this way, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Father of Lies",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Look at the top two cards of another player's deck. Without revealing those cards, call one of them ”Good” and one ”Bad.” That player puts one of those cards into their discard pile and the other into your discard pile."
            ]
          ]
        },
        {
          name: "God of Mischief",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "Each player reveals a ",
              { team: 10 },
              " Ally or reveals their hand. For each player that revealed their hand, you may swap a card from that hand with a card in the Lair of the same cost."
            ]
          ]
        },

      ]
    },
    {
      id: 52,
      name: "Magneto",
      set: 6,
      team: 11,
      cards: [
        {
          name: "Magnetic Levitation",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 10 },
            [
              "You may choose a Bindings from your hand or discard pile and have another player gain that Bindings. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Mutants Will Rule",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            { keyword: 10 },
            [
              { hc: 4 },
              ": Choose a player. That player reveals a ",
              { team: 11 },
              " Ally or gains a Bindings. If a Bindings is gained this way, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Weapons from Scrap Metal",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "If you discarded any cards this turn, draw a card."
            ]
          ]
        },
        {
          name: "Master of Magnetism",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              { team: 11 },
              ": For each other ",
              { team: 11 },
              " Ally you played this turn, choose a player to gain a Bindings. Then you get ",
              { bold: "+2" },
              { icon: 1 },
              " for each Bindings gained this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 53,
      name: "Mysterio",
      set: 6,
      team: 9,
      cards: [
        {
          name: "Psychedelic Mist",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            { keyword: 10 },
            [
              { hc: 1 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Shifting Decoy",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "Put a card from the lair on the bottom of the Ally Deck. If that card had a ",
              { icon: 2 },
              " icon, you get ",
              { bold: "+2" },
              { icon: 2 },
              ". If that card had an ",
              { icon: 1 },
              " icon, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Holographic Illusion",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each color of Ally in the Lair."
            ]
          ]
        },
        {
          name: "False Reflection",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          dense: true,
          abilities: [
            [
              "Put a card from the Lair on the bottom of the Ally Deck. You get ",
              { bold: "+" },
              { icon: 2 },
              " equal to that card's printed ",
              { icon: 2 },
              " and ",
              { bold: "+" },
              { icon: 1 },
              " equal to that card's printed ",
              { icon: 1 },
              "."
            ],
            [
              { team: 9 },
              ": Then, for each other ",
              { team: 9 },
              " Ally you played this turn, do the same effect. ",
              { italic: "(Use a different Ally from the Lair each time.)" }
            ]
          ]
        },

      ]
    },
    {
      id: 54,
      name: "Mystique",
      set: 6,
      team: 11,
      cards: [
        {
          name: "Show Your True Colors",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            { keyword: 10 },
            [
              "As you play this card, you may choose a class. This card is that class instead of ",
              { hc: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "Hidden Weapons",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 2 },
              { hc: 5 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Turn the Tide",
          hc: 2,
          rarity: 2,
          cost: 4,
          abilities: [
            [
              "Reveal the top card of the Ally Deck. You may play a copy of that card this turn. When you do, put that card on the bottom of the Ally Deck."
            ]
          ]
        },
        {
          name: "Spy Games",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "Reveal the top five cards of the Ally Deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to their total printed ",
              { icon: 1 },
              ". Then put them back in any order."
            ]
          ]
        },

      ]
    },
    {
      id: 55,
      name: "Sabretooth",
      set: 6,
      team: 11,
      cards: [
        {
          name: "Leap of the Tiger",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "Reveal the top card of your deck, then put it back on top of your deck or into your discard pile. If that card was an ",
              { hc: 2 },
              " Ally, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Take One for the Team",
          hc: 2,
          rarity: 1,
          cost: 4,
          recruit: "1",
          abilities: [
            [
              "Reveal the top card of your deck. If it's a ",
              { team: 11 },
              " Ally, you may draw it. Otherwise, you may KO it."
            ]
          ]
        },
        {
          name: "Stealthy Predator",
          hc: 1,
          rarity: 2,
          cost: 2,
          abilities: [
            [
              "Reveal the top three cards of your deck. Draw one of them, discard one, and put the other back on top of your deck."
            ]
          ]
        },
        {
          name: "Upper Hand",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Each player reveals a ",
              { hc: 2 },
              " Ally or reveals the top card of their deck. Choose any number of those revealed top cards to be KO'd."
            ],
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card KO'd this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 56,
      name: "Ultron",
      set: 6,
      team: 0,
      cards: [
        {
          name: "Encephalo-Ray",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            { keyword: 10 },
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other ",
              { hc: 5 },
              " Ally you played this turn."
            ]
          ]
        },
        {
          name: "Army of Ultrons",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            { keyword: 10 },
            [
              "Reveal a ",
              { team: 13 },
              " card from your hand. That card is ",
              { hc: 5 },
              " instead of its normal color this turn."
            ]
          ]
        },
        {
          name: "Genetic Experimentation",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { hc: 5 },
              ": Kidnap a Bystander for each other ",
              { hc: 5 },
              " Ally you played this turn."
            ]
          ]
        },
        {
          name: "Molecular Rearrangement",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              "Each other player reveals a ",
              { hc: 5 },
              " Ally or discards their hand. Each player who discarded their hand this way draws 5 cards."
            ],
            [
              { hc: 5 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              " for each Ally discarded this way that costs 7",
              { icon: 3 },
              " or more."
            ]
          ]
        },

      ]
    },
    {
      id: 57,
      name: "Venom",
      filterName: "Venom (Villains)",
      set: 6,
      team: 9,
      cards: [
        {
          name: "Symbiote Takeover",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 4 },
              ": Kidnap a Bystander."
            ]
          ]
        },
        {
          name: "Devour",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You may KO a Bystander from your Victory Pile. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Horrify the Populace",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "Each Adversary with a ",
              { bold: "4" },
              { icon: 1 },
              " or more guards a Bystander."
            ]
          ]
        },
        {
          name: "Ravenous Greed",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5",
          recruit: "0+",
          abilities: [
            [
              "Each other player reveals an ",
              { hc: 2 },
              " Ally or KOs a Bystander from their Victory Pile."
            ],
            [
              { hc: 2 },
              ": Kidnap all Bystanders that were KO'd this turn. Then you get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Bystander you kidnapped this turn."
            ]
          ]
        },

      ]
    },
  ]
}