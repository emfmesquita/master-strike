export default {
  heroes: [
    {
      name: "Angel",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Diving Catch",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "When a card effect causes you to discard this card, rescue a Bystander and draw two cards.",
            ]
          ]
        },
        {
          name: "High-Speed Chase",
          hc: 1,
          rarity: 1,
          cost: 3,
          abilities: [
            "Draw two cards, then discard a card."
          ]
        },
        {
          name: "Drop off a Friend",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "You may discard a card. You get ",
              {
                bold: "+"
              },
              {
                icon: 1
              },
              " equal to that card's Cost."
            ]
          ]
        },
        {
          name: "Strength of Spirit",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Discard any number of cards. Draw that many cards."
            ]
          ]
        }
      ]
    },
    {
      name: "Professor X",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Psionic Astral Form",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { team: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Class Dismissed",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            "You may put a Hero from the HQ on the bottom of the Hero Deck.",
            [
              { hc: 2 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Telepathic Probe",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            "Reveal the top card of the Villain Deck. If it's a Bystander, you may rescue it. If it's a Villain, you may fight it this turn."
          ]
        },
        {
          name: "Mind Control",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "Whenever you defeat a Villain this turn, you may gain it. It becomes a grey Hero with no text that gives ",
              { bold: "+"},
              { icon: 1 },
              " equal to its ",
              { icon: 1 },
              ". ",
              { italic: "[ You still get its " },
              { icon: 4 },
              { italic: "]" }
            ]
          ]
        }
      ]
    },
    {
      name: "Bishop",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Absorb Energies",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          recruit: "0+",
          abilities: [
            [
              "Whenever a card you own is KO'd this turn, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Whatever the Cost",
          hc: 3,
          rarity: 1,
          cost: 2,
          abilities: [
            "Draw a card.",
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Concussive Blast",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              {
                hc: 3
              },
              {
                hc: 3
              },
              ": You get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Firepower from the Future",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Discard the top four cards of your deck. You get ",
              { bold: "+"},
              { icon: 1 },
              " equal to those cards' printed",
              { icon: 1 },
              ". "
            ],
            [
             {
               team: 4
             },
             ": KO any number of those cards."
            ]
          ]
        }
      ]
    },
    {
      name: "Blade",
      set: 3,
      team: 6,
      cards: [
        {
          name: "Night Hunter",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2",
          recruit: "0+",
          abilities: [
            [
              "Whenever you defeat a Villain in the Sewers or Rooftops this turn, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Stalk the Prey",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            "You may move a Villain to an adjacent city space. If another Villain is already there, swap them."
          ]
        },
        {
          name: "Nowhere to Hide",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "Whenever you defeat a Villain in the Sewers or Rooftops this turn, draw two cards."
            ]
          ]
        },
        {
          name: "Vampiric Surge",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1"},
              { icon: 1 },
              " for each Villain in your Victory Pile."
            ]
          ]
        }
      ]
    },
    {
      name: "Cable",
      set: 3,
      team: 7,
      cards: [
        {
          name: "Disaster Survivalist",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "When a Master Strike is played, before it takes effect, you may discard this card. If you do, draw three extra cards at the end of this turn."
            ]
          ]
        },
        {
          name: "Strike at the Heart of Evil ",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              " only when fighting Masterminds."
            ]
          ]
        },
        {
          name: "Rapid Response Force",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              {
                keyword: 51
              }
            ],
            [
              {
                team: 7
              },
              ": You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each other",
              {
                team: 7
              },
              "Hero you played this turn."
            ]
          ]
        },
        {
          name: "Army of One",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              "KO any number of cards from your hand. You get  ",
              { bold: "+1"},
              { icon: 1 },
              " for each card KO'd this way."
            ]
          ]
        }
      ]
    },
    {
      name: "Colossus",
      set: 3,
      team: 7,
      cards: [
        {
          name: "Draw Their Fire",
          hc: 4,
          rarity: 1,
          cost: 1,
          attack: "3",
          abilities: [
            [
              "You gain a Wound."
            ]
          ]
        },
        {
          name: "Invulnerability",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "If you would gain a Wound, you may discard this card instead. If you do, draw two cards."
            ]
          ]
        },
        {
          name: "Silent Statue",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              {
                hc: 4
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Russian Heavy Tank",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "If another player would gain a Wound, you may reveal this card to gain that Wound and draw a card."
            ]
          ]
        }
      ]
    },
    {
      name: "Daredevil",
      set: 3,
      team: 6,
      cards: [
        {
          name: "Backflip",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "When you play Backflip, the next Hero you recruit this turn goes on top of your deck."
            ]
          ]
        },
        {
          name: "Radar Sense",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "Choose a number, then reveal the top card of your deck. If the card is that ",
              {
                icon: 3
              },
              ", you get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              }
            ]
          ]
        },
        {
          name: "Blind Justice",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "Choose a number, then reveal the top card of your deck. If the card is that",
              {
                icon: 3
              },
              ", draw it."
            ]
          ]
        },
        {
          name: "The Man Without Fear ",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "7",
          abilities: [
            [
              "Choose a number, then reveal the top card of your deck. If the card is that",
              {
                icon: 3
              },
              ", draw it and repeat this process."
            ]
          ]
        }
      ]
    },
    {
      name: "Domino",
      set: 3,
      team: 7,
      cards: [
        {
          name: "Lucky Break ",
          hc: 5,
          rarity: 1,
          cost: 1,
          recruit: "0+",
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              {
                team: 7
              },
              {
                keyword: 3
              },
              {
                bold: " 1"
              }
            ]
          ]
        },
        {
          name: "Ready for Anything",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              {
                keyword: 3
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Specialized Ammunition",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "You may discard a card from your hand. If that card had a ",
              {
                icon: 2
              },
              "you get ",
              {
                bold: "+4"
              },
              {
                icon: 2
              },
              ". If that card had an ",
              {
                icon: 1
              },
              "icon, you get ",
              {
                bold: "+4"
              },
              {
                icon: 1
              }
            ]
          ]
        },
        {
          name: "Against All Odds",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              {
                keyword: 3
              },
              {
                bold:  " 5"
              }
            ],
            [
              {
                team: 7
              },
              ": This card and each other Versatile ability you use for the rest of this turn produces both",
              {
                icon: 2
              },
              "and",
              {
                icon: 1
              },
              "."
            ]
          ]
        }
      ]
    },
    {
      name: "Elektra",
      set: 3,
      team: 6,
      cards: [
        {
          name: "First Strike",
          hc: 1,
          rarity: 1,
          cost: 1,
          attack: "1+",
          abilities: [
            [
              "If this is the first card you played this turn, you get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              }
            ]
          ]
        },
        {
          name: "Ninjitsu",
          hc: 2,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
              "Draw a card.",
            [
              {
                hc: 1
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 2
              }
            ]
          ]
        },
        {
          name: "Sai Blades",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each Hero you played this turn that costs ",
              {
                bold: "1"
              },
              {
                icon: 3
              },
              "or ",
              {
                bold: "2"
              },
              {
                icon: 3
              },
              "."
            ]
          ]
        },
        {
          name: "Silent Meditation",
          hc: 2,
          rarity: 3,
          cost: 7,
          recruit: "5+",
          abilities: [
            [
              "When you play Silent Meditation, the next Hero you recruit this turn goes into your hand."
            ],
            [
              {
                team: 6
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 2
              }
            ]
          ]
        }
      ]
    }
  ]
}