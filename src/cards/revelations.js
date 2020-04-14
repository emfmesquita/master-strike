export default {
  heroes: [
    {
      name: "Captain Marvel, Agent of S.H.I.E.L.D.",
      team: 2,
      cards: [
        {
          name: "The Sword of S.H.I.E.L.D.",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              {
                team: 2
              },
              {
                team: 2
              },
              {
                team: 2
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Radiant Blast",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "If you drew any extra cards this turn, you get",
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
          name: "Dominate the Battlefield",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "2+",
          abilities: [
            [
              {
                hc: 3
              },
              ": ",
              {
                keyword: 66
              }
            ]
          ]
        },
        {
          name: "Higher, Further, Faster",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "Choose one: Draw three cards or ",
              {
                keyword: 66
              }
            ],
            [
              { 
                hc:4
              },
              {
                hc: 4
              },
              ": Instead, do both."
            ]
          ]
        }
      ]
    },
    {
      name: "Darkhawk",
      team: 1,
      cards: [
        {
          name: "Balance the Darkforce",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "1",
          attack: "1",
          abilities: [
            [
              {
                hc:5
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Hawk Dive",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "Choose",
              {
                icon: 2
              },
              "or",
              {
                icon: 1
              },
              ". Then ",
              {
                keyword: 64
              },
              {
                bold: "4 "
              },
              "for that icon."
            ]
          ]

        },
        {
          name: "Travel to Nullspace",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "If the most recent Hero you played this turn has a",
              {
                icon: 2
              },
              "icon, you get ",
              {
                bold: "+3"
              },
              {
                icon: 2
              },
              ". If it has an",
              {
                icon: 1
              },
              "icon, you get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              ". (If both, you get both.)"  
            ]
          ]
        },
        {
          name: "Warflight",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recent: "0+",
          abilities: [
            [
              "Whenever you Hyperspeed this turn, you get both",
              {
                icon: 2
              },
              "from",
              {
                icon: 2
              },
              "icons and",
              {
                icon: 1
              },
              "from",
              {
                icon: 1
              },
              "icons."
            ],
            [
              {
                keyword: 64
              },
              {
                bold: "7"
              }
            ],
            [
              {
                hc: 5
              },
              {
                hc: 5
              },
              ": Instead,",
              {
                keyword: 64
              },
              {
                bold: "9"
              }
            ]
          ]
        }
      ]
    },
    {
      name: "Hellcat",
      team: 1,
      cards: [
        {
          name: "Catlike Agility",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              {
                hc:2
              },
              ": : Choose one - Draw a card or you get ",
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
          name: "Part-Time PI",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              "Reveal the top card of any deck. If it's not a Scheme Twist, you may put it on the bottom of that deck."
            ],
            [
              {
                hc: 2
              },
              ": Choose one - Draw a card or you get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              }
            ]
          ]

        },
        {
          name: "Demon Sight",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "Guess Villain, Bystander, Strike, or Twist. Then reveal the top card of the Villain Deck. If you guessed right, you get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              "."  
            ],
            [
              {
                team: 1
              },
              ": If it was a Villain, you may fight it this turn."
            ]
          ]
        },
        {
          name: "Second Chance at Life",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "If a Master Strike or Scheme Twist would occur, you may discard this card from your hand instead. If you do, draw three cards, then shuffle that Strike or Twist back into the Villain Deck.",
            ]
          ]
        }
      ]
    },
    {
      name: "Photon",
      team: 1,
      cards: [
        {
          name: "Infrared Conversation",
          hc: 3,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "To play this, you must discard a card. Draw two cards."
            ]
          ]
        },
        {
          name: "Ultraviolet Radiation",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "3+",
          abilities: [
            [
              "To play this, you must discard a card."
            ],
            [
              {
                hc: 3
              },
              ": ",
              {
                keyword: 64
              },
              {
                bold: "3."
              }
            ]
          ]

        },
        {
          name: "Light the Way",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each card you discarded from your hand this turn."  
            ]
          ]
        },
        {
          name: "Coruscating Vengeance",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [
              {
                team:1
              },
              {
                team:1
              },
              ":",
              {
                keyword: 66
              }
            ]
          ]
        }
      ]
    }
  ]
};