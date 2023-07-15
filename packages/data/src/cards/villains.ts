import { CardSet } from '../types';

export const Villains: CardSet = {
  id: 6,
  heroes: [
    {
      id: 43,
      name: "Bullseye",
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
  ],
  masterminds: [
    {
      id: 14,
      name: "Dr. Strange",
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Dr. Strange",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Defenders"
            ],
            [
              { bold: "Command Strike" },
              ": Reveal the top three cards of the Adversary Deck. Put the Adversary you revealed with the highest printed ",
              { icon: 1 },
              " on top of that deck. Then play a Plot Twist from among the cards you revealed. Then put the rest of those cards on the bottom of that deck in random order."
            ]
          ]
        },
        {
          name: "Book of the Vishanti",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 1 },
              " Ally or discards all the cards in their hand, then draws as many cards as they discarded."
            ]
          ]
        },
        {
          name: "Crimson Bands of Cyttorak",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand, then gains a Bindings for each non-grey Ally that player has."
            ]
          ]
        },
        {
          name: "Eye of Agamotto",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal cards from the Ally Deck equal to the number of players. Put one of those cards into each player's discard pile.",
            ]
          ]
        },
        {
          name: "Winds of Watoomb",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": After you draw a new hand of cards at the end of this turn, each player simultaneously passes a non-grey Ally from their hand to the hand of the player on their left."
            ]
          ]
        }
      ]
    },
    {
      id: 15,
      name: "Nick Fury",
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "Nick Fury",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Avengers"
            ],
            [
              { bold: "Command Strike" },
              ": Stack this Strike next to Nick Fury. Then ",
              { keyword: 9, text: "demolish" },
              " each player once for each Strike stacked here."
            ]
          ]
        },
        {
          name: "Bounty on Fury's Head",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO any number of your ",
              { team: 13 },
              " Allies. For each Ally you KO'd this way, you may gain a Madame HYDRA."
            ]
          ]
        },
        {
          name: "Purge Hydra",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and discards two ",
              { team: 13 },
              " Allies."
            ]
          ]
        },
        {
          name: "The Avengers Initiative",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Ally or chooses an Avengers Adversary from their Victory Pile and it enters the Bridge."
            ]
          ]
        },
        {
          name: "Total Fury",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Defeat an Adversary whose ",
              { icon: 1 },
              " is less than the number of ",
              { team: 13 },
              " Allies in the KO pile."
            ]
          ]
        }
      ]
    },
    {
      id: 16,
      name: "Odin",
      vAttack: "10",
      vp: 6,
      cards: [
        {
          name: "Odin",
          vAttack: "10+",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Asgardian Warriors"
            ],
            [
              "Odin gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Asgardian Warrior in the city and in the Overrun Pile."
            ],
            [
              { bold: "Command Strike" },
              ": Each player puts an Asgardian Warrior from their Victory Pile into an empty city space. Any player who cannot do so gains a Bindings."
            ]
          ]
        },
        {
          name: "Divine Justice",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player with a Bindings in their discard pile gains another Bindings."
            ]
          ]
        },
        {
          name: "Might of Valhalla",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Draw a card for each Asgardian Warrior in your Victory Pile."
            ]
          ]
        },
        {
          name: "Riches of Asgard",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Asgardian Warrior in your Victory Pile."
            ]
          ]
        },
        {
          name: "Ride of the Valkyries",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { team: 10 },
              " Ally or discards a card for each Asgardian Warrior in the Overrun Pile."
            ]
          ]
        }
      ]
    },
    {
      id: 17,
      name: "Professor X",
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Professor X",
          vAttack: "8+",
          abilities: [
            [
              { bold: "Always Leads" },
              ": X-men First Class"
            ],
            [
              { bold: "Command Strike" },
              ": Choose the two highest-cost Allies in the Lair. Stack them next to Professor X as “Telepathic Pawns.“ Professor X gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Ally stacked next to him. Players can recrut the top Ally in the stack next to Professor X."
            ]
          ]
        },
        {
          name: "Cerebro Device",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top three cards of the Adversary Deck. Play any Adversaries you revealed that have “",
              { keyword: 12 },
              "“. Put the rest back in random order."
            ]
          ]
        },
        {
          name: "Mental Dominance",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Stack the top three cards of the Ally Deck next to Professor X in random order as “Telepathic Pawns.“"
            ]
          ]
        },
        {
          name: "Mightiest Mutant Mind",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { team: 11 },
              " Ally or stacks a non-grey Ally from their hand next to Professor X as a “Telepathic Pawn.“"
            ]
          ]
        },
        {
          name: "Telepathic Imprisonment",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { team: 11 },
              " Ally or gains a Bindings."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 7,
      name: "Asgardian Warriors",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Draw a card."
            ]
          ]
        },
      ]
    },
    {
      id: 8,
      name: "Cops",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Gain a New Recruit."
            ]
          ]
        },
      ]
    },
    {
      id: 9,
      name: "Multiple Man",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": KO one of your Allies for each other Multiple Man in your Victory Pile."
            ]
          ]
        },
      ]
    },
    {
      id: 10,
      name: "S.H.I.E.L.D. Assault Squad",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Discard the top card of your deck. Then KO an Ally from your discard pile."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 18,
      name: "Avengers",
      cards: [
        {
          name: "Ant-Man",
          qtd: 2,
          vAttack: "3",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 11, text: "Elusive 4" }
            ]
          ]
        },
        {
          name: "Captain America",
          qtd: 1,
          vAttack: "4+",
          vp: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals three colors of Allies or gains a Bindings. ",
              { italic: "(Grey is a color.)" },
            ],
            [
              {
                bold: "Fight"
              },
              ": Same effect."
            ],
            [
              "Captain America gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each color of Ally in the Lair."
            ],
            [
              {
                bold: "Overrun"
              },
              ": ",
              { keyword: 9 },
              " each player."
            ]
          ]
        },
        {
          name: "Hulk",
          qtd: 1,
          vAttack: "8",
          vp: "6",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 9 },
              " each player twice."
            ],
            [
              {
                bold: "Fight"
              },
              ": Same effect."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Iron Man",
          qtd: 1,
          vAttack: "7",
          vp: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals a ",
              { hc: 5 },
              " Ally or gains a Bindings."
            ],
            [
              {
                bold: "Fight"
              },
              ": Same effect."
            ],
            [
              {
                bold: "Overrun"
              },
              ": ",
              { keyword: 9 },
              " each player."
            ]
          ]
        },
        {
          name: "Thor",
          qtd: 1,
          vAttack: "7",
          vp: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": KO each Ally from the Lair that costs 7",
              { icon: 3 },
              " or more."
            ],
            [
              {
                bold: "Fight"
              },
              ": Same effect."
            ],
            [
              {
                bold: "Overrun"
              },
              ": ",
              { keyword: 9 },
              " each player."
            ]
          ]
        },
        {
          name: "Wasp",
          qtd: 2,
          vAttack: "1",
          vp: "4",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 11, text: "Elusive 7" }
            ]
          ]
        }
      ]
    },
    {
      id: 19,
      name: "Defenders",
      cards: [
        {
          name: "Daredevil",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": The next Ally you recruit this turn goes on top of your deck."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Each player reveals the top card of their deck and if it costs 1",
              { icon: 3 },
              " or more, discards it."
            ]
          ]
        },
        {
          name: "Iron Fist",
          qtd: 2,
          vAttack: "3",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              "To fight Iron Fist, you must also reveal three Allies with different costs."
            ]
          ]
        },
        {
          name: "Namor, The Sub-Mariner",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": If any other Defenders Adversaries are in the city, each player gains a Bindings."
            ],
            [
              {
                bold: "Fight"
              },
              ": Same Effect."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Same Effect."
            ]
          ]
        },
        {
          name: "Luke Cage",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals the top three cards of their deck. You choose which players discard them and which players put them back on top in the order of their choice."
            ]
          ]
        }
      ]
    },
    {
      id: 20,
      name: "Marvel Knights",
      cards: [
        {
          name: "Black Panther",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player draws a card."
            ]
          ]
        },
        {
          name: "Elektra",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO one of your Allies. Then KO a Bindings from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Punisher",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Reveal the top card of your deck. If it costs 0",
              { icon: 3 },
              ", KO it."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Each player reveals the top card of their deck and if it costs 1",
              { icon: 3 },
              " or more, KOs it."
            ]
          ]
        },
        {
          name: "Ghost Rider",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": You may KO another Adversary from your Victory Pile. If you do, you get ",
              { bold: "+3" },
              { icon: 2 },
              "."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Each player may KO an Adversary from their Victory Pile. Any player who does not do so gains a Bindings."
            ]
          ]
        }
      ]
    },
    {
      id: 21,
      name: "Spider Friends",
      cards: [
        {
          name: "Black Cat",
          qtd: 2,
          vAttack: "2",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 11, text: "Elusive 6" }
            ],
            [
              {
                bold: "Fight"
              },
              ": Each player reveals the top card of their deck. Choose any number of those cards to be discarded."
            ]
          ]
        },
        {
          name: "Firestar",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Reveal the top card of your deck. If it has a ",
              { icon: 2 },
              " icon, KO it."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Each player reveals the top card of their deck, and if it has an ",
              { icon: 1 },
              " icon, KO it."
            ]
          ]
        },
        {
          name: "Moon Knight",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO one of your Allies. Then, if you fought Moon Knight on the Rooftops, KO another of your Allies."
            ]
          ]
        },
        {
          name: "Spider-Man",
          qtd: 2,
          vAttack: "2",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Reveal the top card of the Adversary Deck. If that card is worth 2",
              { icon: 4 },
              " or less, play it. If you play a card from the Adversary Deck this way, put Spider-Man back on top of the Adversary Deck."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Each player gains a Bindings."
            ]
          ]
        }
      ]
    },
    {
      id: 22,
      name: "Uncanny Avengers",
      cards: [
        {
          name: "Havok",
          qtd: 2,
          vAttack: "4+",
          vp: "2",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Ambush"
              },
              ": Each player who does not reveal a ",
              { hc: 3 },
              " Ally discards two cards, then draws a card."
            ]
          ]
        },
        {
          name: "Rogue",
          qtd: 2,
          vAttack: "4+",
          vp: "2",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Each other player discards the top card of their deck. Play a copy of one of those Allies."
            ]
          ]
        },
        {
          name: "Scarlet Witch",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Reveal the top three cards of your deck. Put any that have odd-numbered costs into your hand and discard the rest. ",
              { italic: "(0 is even.)" }
            ]
          ]
        },
        {
          name: "Wolverine",
          qtd: 2,
          vAttack: "7+",
          vp: "5",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              "Wolverine gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you've drawn this turn."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Each player reveals an ",
              { hc: 2 },
              " Ally or gains a Bindings. Then shuffle Wolverine back into the Adversary deck."
            ]
          ]
        }
      ]
    },
    {
      id: 23,
      name: "Uncanny X-Men",
      cards: [
        {
          name: "Colossus",
          qtd: 2,
          vAttack: "5+",
          vp: "3",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Fight"
              },
              ": You may KO a Bindings from your hand or discard pile. If you don't, each other player gains a Bindings."
            ]
          ]
        },
        {
          name: "Nightcrawler",
          qtd: 2,
          vAttack: "4+",
          vp: "2",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Choose an Ally you played this turn. When you draw a new hand of cards at the end of this turn, add that Ally to your new hand as an extra card."
            ]
          ]
        },
        {
          name: "Shadowcat",
          qtd: 2,
          vAttack: "2*+",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              { keyword: 11, text: "Elusive 5" }
            ]
          ]
        },
        {
          name: "Storm",
          qtd: 2,
          vAttack: "4+",
          vp: "2",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Ambush"
              },
              ": ",
              { italic: "(After Storm enters the city)" },
              ". Move Storm to the Rooftops. If another Adversary is already there, swap them."
            ],
            [
              {
                bold: "Fight"
              },
              ": If you fight Storm on the Rooftops, each other player gains a Bindings."
            ]
          ]
        }
      ]
    },
    {
      id: 24,
      name: "X-Men First Class",
      cards: [
        {
          name: "Angel",
          qtd: 2,
          vAttack: "4+",
          vp: "2",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Draws two cards, then discard a card."
            ]
          ]
        },
        {
          name: "Iceman",
          qtd: 2,
          vAttack: "5+",
          vp: "3",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Fight"
              },
              ": Draw a card for each ",
              { hc: 3 },
              " Ally you played this turn."
            ]
          ]
        },
        {
          name: "Jean Grey",
          qtd: 1,
          vAttack: "6+",
          vp: "4",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Ambush"
              },
              ": Jean Grey guards a Bystander for each Adversary in the city with X-Treme Attack ",
              { italic: "(including Jean)" },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Bystander you kidnapped this turn."
            ]
          ]
        },
        {
          name: "Beast",
          qtd: 2,
          vAttack: "5+",
          vp: "3",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Allies. Then KO another of your Allies if there are any other Adversaries in the city with X-Treme Attack."
            ]
          ]
        },
        {
          name: "Cyclops",
          qtd: 1,
          vAttack: "6+",
          vp: "4",
          abilities: [
            [
              { keyword: 12 }
            ],
            [
              "To Fight Cyclops, you must also discard a card."
            ],
            [
              {
                bold: "Overrun"
              },
              ": Each player reveals a ",
              { team: 11 },
              " Ally or discards a card."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 25,
      name: "Build an Underground MegaVault Prison",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. The Bindings stack holds 5 Bindings per player."
            ],
            [
              { bold: "Twist" },
              ": If there is an Adversary in the Sewers, each player gains a Bindings. Otherwise, reveal the top card of the Adversary Deck. If that card is an Adversary, it enters the Sewers."
            ],
            [
              { bold: "Good Wins" },
              ": When the Bindings stack runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 26,
      name: "Cage Villains in Power-Suppressing Cells",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Stack 2 Cops per player next to this Plot."
            ],
            [
              { bold: "Twist" },
              ": Each player returns all Cops from their Victory Pile to the Cop Stack. Then each player puts a non-grey Ally from their hand in front of them. Put a Cop from the Cop Stack on top of each of those Allies."
            ],
            [
              { bold: "Special Rules" },
              ": You can fight any Cop on top of Allies. If you do, the player of your choice gains that Ally."
            ],
            [
              { bold: "Good Wins" },
              ": When a Twist must put out a Cop, but the Cop Stack is already empty."
            ],
          ]
        },
      ]
    },
    {
      id: 27,
      name: "Crown Thor King of Asgard",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Put the Thor Adversary next to this Plot."
            ],
            [
              { bold: "Twist" },
              ": If Thor is in the city, he overruns. Otherwise, Thor enters the Bridge from wherever he is, and Thor guards 3 Bystanders."
            ],
            [
              { bold: "Special Rules" },
              ": Whenever Thor overruns, stack a Plot Twist from the KO pile next to this Plot as a “Triumph of Asgard.“"
            ],
            [
              { bold: "Good Wins" },
              ": When there are 3 Triumphs of Asgard next to this Plot."
            ],
          ]
        },
      ]
    },
    {
      id: 28,
      name: "Crush HYDRA",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twists 1-7" },
              ": Each Adversary in the city captures a New Recruit, or if there are no more New Recruits, a Madame HYDRA."
            ],
            [
              { bold: "Twist 8" },
              ": Put all captured Allies from the city into the Overrun Pile."
            ],
            [
              { bold: "Special Rules" },
              ": An Adversary gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Ally it has captured. When you fight that Adversary, gain those Allies."
            ],
            [
              { bold: "Good Wins" },
              ": When there are 11 Allies in the Overrun Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 29,
      name: "Graduation at Xavier's X-Academy",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Stack 8 Bystanders next to this Plot as “Young Mutants.“"
            ],
            [
              { bold: "Twist" },
              ": Put a Bystander from next to this Plot into the Overrun Pile."
            ],
            [
              { bold: "Good Wins" },
              ": When there are 8 Bystanders in the Overrun Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 30,
      name: "Infiltrate the Lair with Spies",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists, Stack 21 Bystanders next to this Plot as “Infiltrating Spies.“"
            ],
            [
              { bold: "Twist" },
              ": Put all Bystanders from the Lair into the Overrun pile. Then put a Bystander from next to this Plot into each Lair space under the Bridge, Streets, and Sewers."
            ],
            [
              { bold: "Special Rules" },
              ": When you recruit an Ally, kidnap any Bystander in that Lair space. When an Ally leaves the Lair in any other way, put any Bystander from that Lair space into the Overrun Pile."
            ],
            [
              { bold: "Good Wins" },
              ": When there are 12 Bystanders in the Overrun Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 31,
      name: "Mass Produce War Machine Armor",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists, Include 10 S.H.I.E.L.D. Assault Squads as one of the Backup Adversary groups."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Plot as “War Machine Technology.“ An Assault Squad from the current player's Victory Pile enters the Bridge."
            ],
            [
              { bold: "Special Rules" },
              ": Assault Squads get ",
              { bold: "+1" },
              { icon: 1 },
              " for each War Machine Technology next to the Plot."
            ],
            [
              { bold: "Good Wins" },
              ": When there are 3 Assault Squads in the Overrun Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 32,
      name: "Resurrect Heroes with Norn Stones",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twists 1-6" },
              ": An Adversary from the current player's Victory Pile enters the Bridge. Then play the top card of the Adversary Deck."
            ],
            [
              { bold: "Twists 7-8" },
              ": Each player puts an Adversary from their Victory Pile into the Overrun Pile."
            ],
            [
              { bold: "Good Wins" },
              ": When there are 3 Adversaries per player in the Overrun Pile."
            ],
          ]
        },
      ]
    },
  ]
}