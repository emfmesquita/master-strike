export default {
  heroes: [
    {
      id: 185,
      name: "Captain Marvel, Agent of S.H.I.E.L.D.",
      set: 24,
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
              "If you drew any extra cards this turn, you get ",
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
                keyword: 59
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
                keyword: 59
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
      id: 186,
      name: "Darkhawk",
      set: 24,
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
                keyword: 57,
                text: "Hyperspeed 4"
              },
              " for that icon."
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
                keyword: 57,
                text: "Hyperspeed 7"
              }
            ],
            [
              {
                hc: 5
              },
              {
                hc: 5
              },
              ": Instead, ",
              {
                keyword: 57,
                text: "Hyperspeed 9"
              }
            ]
          ]
        }
      ]
    },
    {
      id: 187,
      name: "Hellcat",
      set: 24,
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
      id: 188,
      name: "Photon",
      set: 24,
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
                keyword: 57,
                text: "Hyperspeed 3"
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
              ": ",
              {
                keyword: 59
              }
            ]
          ]
        }
      ]
    },
    {
      id: 189,
      name: "Quicksilver",
      set: 24,
      team: 1,
      cards: [
        {
          name: "Infrared Conversation",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          attack: "0+",
          abilities: [
            [
              {
                keyword: 57,
                text: "Hyperspeed 3"
              },
              " for",
              {
                icon: 2
              },
              "."
            ],
            [
              {
                hc:2
              },
              ": Instead, ",
              {
                keyword: 57,
                text: "Hyperspeed 3"
              },
              " for",
              {
                icon:2
              },
              "and" ,
              {
                icon:1
              }
            ]
          ]
        },
        {
          name: "Perpetual Motion",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              {
                hc:4
              },
              ": ",
              {
                keyword: 57,
                text: "Hyperspeed 4"
              }
            ]
          ]

        },
        {
          name: "Jittery Impatience",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "2",
          recruit: "2",
          abilities: [
            [
              "Look at the top card of your deck. Discard it or put it back."
            ],
            [
              {
                hc:2
              },
              ": You may KO the card you discarded this way."
            ]
          ]
        },
        {
          name: "Around the World Punch",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            [
              {
                keyword: 57
              },
              " your entire remaining deck. (Don't reshuffle.)",
            ],
            [
              {
                team:1
              },
              {
                team:1
              },
              {
                team:1
              },
              {
                team:1
              },
              ": Before you do that, put your discard pile on top of your deck."
            ]
          ]
        }
      ]
    },
    {
      id: 190,
      name: "Ronin",
      set: 24,
      team: 1,
      cards: [
        {
          name: "Mysterious Identity",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "As you play this card, you may choose a color and/or a team icon. This card is that color and team icon this turn. (instead of",
              {
                hc:1
              },
              "and",
              {
                team: 1
              },
              ")."
            ]
          ]
        },
        {
          name: "Storm of Arrows",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              {
                keyword: 57,
                text: "Hyperspeed 4"
              }
            ],
            [
              {
                hc:3
              },
              ": Draw a card."
            ]
          ]

        },
        {
          name: "Haunted by Loss",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
             {
               hc:2
             },
             ": ",
             {
               keyword: 58
             }
            ]
          ]
        },
        {
          name: "Brooding Fury",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              {
                keyword: 58
              }
            ],
            [
              {
                hc:4
              },
              ": ",
              {
                keyword: 58
              },
              " again."
            ]
          ]
        }
      ]
    },
    {
      id: 191,
      name: "Scarlet Witch",
      set: 24,
      team: 1,
      cards: [
        {
          name: "Hex Bolt",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              {
                hc:3
              },
              ": Discard the top card of any player's deck. You may play a copy of that card this turn."
            ]
          ]
        },
        {
          name: "Alter Reality",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              "Reveal the top card of your deck. Discard it or put it back."
            ],
            [
              {
                hc:1
              },
              ": ",
              {
                keyword: 58
              }
            ]
          ]

        },
        {
          name: "Chaos Magic",
          hc: 1,
          rarity: 2,
          cost: 4,
          abilities: [
            [
              "Reveal the top card of the Hero Deck. You may play a copy of that card this turn. When you do, put that card on the bottom of the Hero Deck."
            ]
          ]
        },
        {
          name: "Warp Time and Space",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "Reveal the top three cards of the Hero Deck. Put one of them in your hand. Put the rest on the top or bottom of the Hero Deck in any order."
            ],
            [
              {
                hc:1
              },
              {
                hc:1
              },
              {
                hc:1
              },
              ": ",
              {
                keyword: 58
              }
            ]
          ]
        }
      ]
    },
    {
      id: 192,
      name: "Speed",
      set: 24,
      team: 1,
      cards: [
        {
          name: "Accelerate",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              {
                keyword: 57,
                text: "Hyperspeed 2"
              }
            ],
            [
              {
                hc:2
              },
              ": Instead, ",
              {
                keyword: 57,
                text: "Hyperspeed 6"
              }
            ]
          ]
        },
        {
          name: "Speedy Delivery ",
          hc: 2,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "1",
          abilities: [
            [
              "The next Hero you recruit this turn goes on top of your deck."
            ]
          ]

        },
        {
          name: "Race to the Rescue",
          hc: 1,
          rarity: 2,
          cost: 5,
          abilities: [
            [
              "Choose a Hero Class. (",
              {
                hc: 4
              },
              {
                hc: 2
              },
              {
                hc: 1
              },
              {
                hc: 5
              },
              {
                hc: 3
              },
              " ) Reveal the top card of your deck. If it's the Hero Class you named, draw it. Otherwise, put it back on the top or bottom."
            ]
          ]
        },
        {
          name: "Break the Sound Barrier",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            [
              "Look at the top six cards of your deck, draw two of them, and put the rest back on the top or bottom in any order."
            ],
            [
              {
                hc:1
              },
              ": ",
              {
                keyword: 57,
                text: "Hyperspeed 6"
              }
            ]
          ]
        }
      ]
    },
    {
      id: 193,
      name: "War Machine",
      set: 24,
      team: 1,
      cards: [
        {
          name: "Simulated Target Practice",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              {
                hc: 5
              },
              ": You may fight a Henchman from your Victory Pile this turn. If you do, KO it and rescue a Bystander. (Do that Henchman's Fight effect too.)"
            ]
          ]
        },
        {
          name: "Military-Industrial Complex ",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              "Whenever you defeat a Villain this turn, you get ",
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
          name: "Hypersonic Cannon",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "0+",
          abilities: [
            [
              {
                keyword: 57,
                text: "Hyperspeed 5"
              }
            ],
            [
              {
                hc:3
              },
              ": You may KO a card from your discard pile."
            ]
          ]
        },
        {
          name: "Overwhelming Firepower ",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "5",
          abilities: [
            [
              "Whenever you defeat a Villain or Mastermind this turn, draw a card and rescue a Bystander."
            ]
          ]
        }
      ]
    }
  ]
};