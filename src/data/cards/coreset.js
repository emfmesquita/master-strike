export default {
  heroes: [
    {
      name: "Black Widow",
      set: 1,
      team: 1,
      cards: [
        {
          name: "Dangerous Rescue",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              {
                hc:1
              },
              ": You may KO a card from your hand or discard pile. If you do, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Mission Accomplished",
          hc: 5,
          rarity: 1,
          cost: 2,
          abilities: [
            "Draw a Card.",
            [
              {
                hc: 5
              },
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Covert Operation ",
          hc: 1,
          rarity: 2,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each Bystander in your Victory pile."
            ]
          ]
        },
        {
          name: "Silent Sniper",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Defeat a Villain or Mastermind that has a Bystander.",
            ]
          ]
        }
      ]
    },
    {
      name: "Captain America",
      set: 1,
      team: 1,
      cards: [
        {
          name: "Avengers Assemble!",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              },
              "for each color of Hero you have."
            ]
          ]
        },
        {
          name: "Perfect Teamwork",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "You get ",
            { 
              bold: "+1"
            },
            {
              icon: 1
            },
            "for each color of Hero you have."
            ]
          ]
        },
        {
          name: "Diving Block",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "If you would gain a Wound, you may reveal this card and draw a card instead."
            ]
          ]
        },
        {
          name: "A Day Unlike Any Other",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              {
                team: 1
              },
              ": You get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              " for each other",
              {
                team: 1
              },
              "you played this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Cyclops",
      set: 1,
      team: 1,
      cards: [
        {
          name: "Determination",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "3",
          abilities: [
            [
              "To play this card, you must discard a card from your hand. "
            ]
          ]
        },
        {
          name: "Optic Blast ",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "3",
          abilities: [
            [
              "To play this card, you must discard a card from your hand."
            ]
          ]
        },
        {
          name: "Unending Energy",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "If a card effect makes you discard this card, you may return this card to your hand."
            ]
          ]
        },
        {
          name: "X-Men United",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [ 
              {
                team: 4
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              " for each other",
              {
                team: 4
              },
              "you played this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Deadpool",
      set: 1,
      cards: [
        {
          name: "Here, Hold This for a Second",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "A Villain of your choice captures a Bystander."
            ]
          ]
        },
        {
          name: "Oddball",
          hc: 1,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              " for each other Hero with an odd-numbered",
              {
                icon: 3
              },
              "you played this turn."
            ]
          ]
        },
        {
          name: "Hey, Can I Get a Do-Over?",
          hc: 2,
          rarity: 2,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "If this is the first Hero you played this turn, you may discard the rest of your hand and draw four cards."
            ]
          ]
        },
        {
          name: "Random Acts of Unkindness",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "6",
          abilities: [
            [ 
              "You may gain a Wound to your hand. Then each player passes a card from their hand to the player on their left."
            ]
          ]
        }
      ]
    },
    {
      name: "Emma Frost",
      set: 1,
      team: 4,
      cards: [
        {
          name: "Mental Discipline",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "1",
          abilities: [
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Shadowed Thoughts",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              {
                hc:1
              },
              ": You may play the top card of the Villain Deck. If you do, you get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              } ,
              "."
            ]
          ]
        },
        {
          name: "Psychic Link",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Each player may reveal another",
              {
                team: 4
              },
              "Hero. Each player who does draws a card."
            ]
          ]
        },
        {
          name: "Diamond Form",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [ 
              "Whenever you defeat a Villain or Mastermind this turn, you get ",
              {
                bold: "+3"
              },
              {
                icon: 2
              },
              "."

            ]
          ]
        }
      ]
    },
    {
      name: "Gambit",
      set: 1,
      team: 4,
      cards: [
        {
          name: "Card Shark",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Reveal the top card of your deck. If it's an",
              {
                team: 4
              },
              "Hero, draw it."
            ]
          ]
        },
        {
          name: "Stack the Deck",
          hc: 1,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Draw two cards. Then put a card from your hand on top of your deck."
            ]
          ]
        },
        {
          name: "Hypnotic Charm",
          hc: 2,
          rarity: 2,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "Reveal the top card of your deck. Discard it or put it back."
            ],
            [
              {
                hc:2
              },
              ": Do the same thing to each other player's deck."
            ]
          ]
        },
        {
          name: "High Stakes Jackpot",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [ 
              "Reveal the top card of your deck. You get ",
              {
                bold: "+"
              },
              {
                icon: 1
              },
              "equal to that card's cost."
            ]
          ]
        }
      ]
    },
    {
      name: "Hawkeye",
      set: 1,
      team: 1,
      cards: [
        {
          name: "Quick Draw",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            [
              "Draw a card.",
            ]
          ]
        },
        {
          name: "Team Player",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              {
                hc: 5
              }, ": You get +1 Attack."
            ]
          ]
        },
        {
          name: "Covering Fire",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              {
              hc: 5
              },
              ": Choose one: each other player draws a card or each other player discards a card."
            ]
          ]
        },
        {
          name: "Impossible Trick Shot",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [ 
              "Whenever you defeat a Villain or Mastermind this turn, rescue three Bystanders.",
            ]
          ]
        }
      ]
    },
    {
      name: "Hulk",
      set: 1,
      team: 1,
      cards: [
        {
          name: "Growing Anger",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              {
                hc:5
              },
              ": You get +1 Attack."
            ]
          ]
        },
        {
          name: "Unstoppable Hulk",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You may KO a Wound from your hand or discard pile. If you do, you get ",
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
          name: "Crazed Rampage ",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "4",
          abilities: [
            [
              "Each player gains a Wound."
            ]
          ]
        },
        {
          name: "Hulk Smash!",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [ 
              {
                hc:4
              },
              ": You get +5 Attack.",
            ]
          ]
        }
      ]
    },
    {
      name: "Iron Man",
      set: 1,
      team: 1,
      cards: [
        {
          name: "Endless Invention",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "Draw a card."
            ],
            [
                {
                  hc:5
                },
                ": Draw another card."
            ]
          ]
        },
        {
          name: "Repulsor Rays",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              {
                hc:3
              },
              ": You get +1 Attack."
            ]
          ]
        },
        {
          name: "Arc Reactor",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              {
                hc:5
              },
              ": You get +1 Attack for each other",
              {
                hc:5
              },
              "Hero you played this turn."
            ]
          ]
        },
        {
          name: "Quantum Breakthrough",
          hc: 5,
          rarity: 3,
          cost: 7,
          abilities: [
            
            "Draw two cards.",
            [
              {
                hc:5
               },
              ": Draw two more cards."
            ]
            
          ]
        }
      ]
    },
    {
      name: "Nick Fury",
      set: 1,
      team: 2,
      cards: [
        {
          name: "Battlefield Promotion",
          hc: 1,
          rarity: 1,
          cost: 4,
          abilities: [
            [
              "You may KO a",
              {
                team:2
              },
              "Hero from your hand or discard pile. If you do, you may gain a S.H.I.E.L.D. Officer to your hand."
            ]
          ]
        },
        {
          name: "High-Tech Weaponry",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              {
                hc:5
              },
              ": You get +1 Attack."
            ]
          ]
        },
        {
          name: "Legendary Commander",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "1+",
          abilities: [
            [
              "You get ",
              {
                bold: "1+"
              },
              {
                icon: 1
              },
              "for each other",
              {
                team:2
              },
              "Hero you played this turn."
            ]
          ]
        },
        {
          name: "Pure Fury",
          hc: 5,
          rarity: 3,
          cost: 8,
          abilities: [
            [
              "Defeat any Villain or Mastermind whose ",
              {
                icon:1
              },
              "is less than the number of",
              {
                team:2
              },
              "Heroes in the KO pile."
            ]
          ]
        }
      ]
    },
    {
      name: "Rogue",
      set: 1,
      team: 4,
      cards: [
        {
          name: "Borrowed Brawn",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              {
                hc:4
              },
              ": You get",
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
          name: "Energy Drain",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              {
                hc:1
              },
              "You may KO a card from your hand or discard pile. If you do, you get ",
              {
                bold: "+1"
              },
              {
                icon:2
              },
              "."
            ]
          ]
        },
        {
          name: "Copy Powers",
          hc: 1,
          rarity: 2,
          cost: 5,
          abilities: [
            [
              "Play this card as a copy of another Hero you played this turn. This card is both",
              {
                hc:1
              },
              "and the color you copy."
            ]
          ]
        },
        {
          name: "Steal Abilities",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            [
              "Each player discards the top card of their deck. Play a copy of each of those cards."
            ]
          ]
        }
      ]
    },
    {
      name: "Spider-Man",
      set: 1,
      team: 3,
      cards: [
        {
          name: "Astonishing Strength",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            [
              "Reveal the top card of your deck. If that card costs",
              {
                bold: " 2"
              },
              {
                icon:3
              },
              "or less, draw it."
            ]
          ]
        },
        {
          name: "Great Responsibility",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            [
              "Reveal the top card of your deck. If that card costs",
              {
                bold: " 2"
              },
              {
                icon:3
              },
              "or less, draw it."
            ]
          ]
        },
        {
          name: "Web-Shooters",
          hc: 5,
          rarity: 2,
          cost: 2,
          abilities: [
            [
              "Rescue a Bystander."
            ],
            [
              "Reveal the top card of your deck. If that card costs 2 or less, draw it."
            ]
          ]
        },
        {
          name: "The Amazing Spider-Man",
          hc: 1,
          rarity: 3,
          cost: 2,
          abilities: [
            [
              "Reveal the top three cards of your deck. Put any that cost ",
              {
                bold: "2"
              },
              {
                icon:3
              },
              "or less into your hand. Put the rest back in any order."
            ]
          ]
        }
      ]
    },
    {
      name: "Storm",
      set: 1,
      team: 4,
      cards: [
        {
          name: "Gathering Stormclouds",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              {
                hc:3
              },
              ":  Draw a card."
            ]
          ]
        },
        {
          name: "Lightning Bolt",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Any Villain you fight on the Rooftops this turn gets ",
              {
                bold: "-2"
              },
              {
                icon:1
              },
              "."
            ]
          ]
        },
        {
          name: "Spinning Cyclone",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "You may move a Villain to a new city space. Rescue any Bystanders captured by that Villain. (If you move a Villain to a city space that already has Villain, swap them.)"
            ]
          ]
        },
        {
          name: "Tidal Wave",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
              [
                "Any Villain you fight on the Bridge this turn gets ",
                {
                  bold: "-2"
                },
                {
                  icon:1
                }
              ],
              [
                {
                  hc:3
                },
                ": The Mastermind gets ",
                {
                  bold: "-2"
                },
                {
                  icon:1
                },
                "this turn."
              ]
          ]
        }
      ]
    },
    {
      name: "Thor",
      set: 1,
      team: 1,
      cards: [
        {
          name: "Odinson",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2+",
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
                icon: 2
              }
            ]
          ]
        },
        {
          name: "Surge of Power",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              "If you made",
              {
                bold: " 8 "
              },
              "or more",
              {
                icon: 2
              },
              "this turn, you get ",
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
          name: "Call Lightning",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
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
          name: "God of Thunder",
          hc: 3,
          rarity: 3,
          cost: 8,
          recruit: "5",
          attack: "0+",
          abilities: [
            [
              "You can use",
              {
                icon: 2
              },
              "as",
              {
                icon: 1
              },
              "this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Wolverine",
      set: 1,
      team: 4,
      cards: [
        {
          name: "Keen Senses",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              {
                hc: 2
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Healing Factor",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            "You may KO a Wound from your hand or discard pile. If you do, draw a card."
          ]
        },
        {
          name: "Frenzied Slashing",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              {
                hc: 2
              },
              ": Draw two cards."
            ]
          ]
        },
        {
          name: "Berserker Rage",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            "Draw three cards.",
            [
              {
                hc: 2
              },
              ": You get",
              {
                bold: " +1"
              },
              {
                icon: 1
              },
              "for each extra card you've drawn this turn."
            ]
          ]
        }
      ]
    }   
  ]
}