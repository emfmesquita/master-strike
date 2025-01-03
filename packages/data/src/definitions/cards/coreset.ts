import { CardSetDef } from '../cardTypes';

export const CoreSet: CardSetDef = {
  id: 1,
  heroes: [
    {
      id: 1,
      name: "Black Widow",
      filterName: "Black Widow (Core/MS)",
      set: [1, 20],
      team: 1,
      cards: [
        {
          name: "Dangerous Rescue",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-widow-04.png",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile. If you do, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Mission Accomplished",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-widow-03.png",
          hc: 5,
          rarity: 1,
          cost: 2,
          abilities: [
            "Draw a Card.",
            [
              { hc: 5 },
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Covert Operation",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-widow-02.png",
          hc: 1,
          rarity: 2,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in your Victory Pile."
            ]
          ]
        },
        {
          name: "Silent Sniper",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/black-widow-01.png",
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
      id: 2,
      name: "Captain America",
      set: [1, 20],
      team: 1,
      cards: [
        {
          name: "Avengers Assemble!",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-04.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each color of Hero you have."
            ]
          ]
        },
        {
          name: "Perfect Teamwork",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-03.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each color of Hero you have."
            ]
          ]
        },
        {
          name: "Diving Block",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-02.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/captain-america-01.png",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              { team: 1 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              " for each other ",
              { team: 1 },
              " you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Cyclops",
      team: 4,
      cards: [
        {
          name: "Determination",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cyclops-03.png",
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
          name: "Optic Blast",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cyclops-04.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cyclops-02.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cyclops-01.png",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [
              { team: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              " for each other ",
              { team: 4 },
              " Hero you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Deadpool",
      filterName: "Deadpool (Core Set)",
      team: 0,
      cards: [
        {
          name: "Here, Hold This for a Second",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deadpool-04.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deadpool-03.png",
          hc: 1,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other Hero with an odd-numbered ",
              { icon: 3 },
              " you played this turn."
            ]
          ]
        },
        {
          name: "Hey, Can I Get a Do-Over?",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deadpool-02.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/deadpool-01.png",
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
      id: 5,
      name: "Emma Frost",
      team: 4,
      cards: [
        {
          name: "Mental Discipline",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/emma-frost-03.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/emma-frost-04.png",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 1 },
              ": You may play the top card of the Villain Deck. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Psychic Link",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/emma-frost-02.png",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Each player may reveal another ",
              { team: 4 },
              " Hero. Each player who does draws a card."
            ]
          ]
        },
        {
          name: "Diamond Form",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/emma-frost-01.png",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "5",
          recruit: "0+",
          abilities: [
            [
              "Whenever you defeat a Villain or Mastermind this turn, you get ",
              { bold: "+3" },
              { icon: 2 },
              "."

            ]
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Gambit",
      team: 4,
      cards: [
        {
          name: "Card Shark",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gambit-03.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Reveal the top card of your deck. If it's an ",
              { team: 4 },
              " Hero, draw it."
            ]
          ]
        },
        {
          name: "Stack the Deck",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gambit-04.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gambit-02.png",
          hc: 2,
          rarity: 2,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "Reveal the top card of your deck. Discard it or put it back."
            ],
            [
              { hc: 2 },
              ": Do the same thing to each other player's deck."
            ]
          ]
        },
        {
          name: "High Stakes Jackpot",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/gambit-01.png",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Reveal the top card of your deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that card's cost."
            ]
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Hawkeye",
      set: [1, 20],
      team: 1,
      cards: [
        {
          name: "Quick Draw",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hawkeye-03.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hawkeye-04.png",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { team: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Covering Fire",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hawkeye-02.png",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { hc: 5 },
              ": Choose one: each other player draws a card or each other player discards a card."
            ]
          ]
        },
        {
          name: "Impossible Trick Shot",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hawkeye-01.png",
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
      id: 8,
      name: "Hulk",
      set: [1, 20],
      team: 1,
      cards: [
        {
          name: "Growing Anger",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulk-03.png",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Unstoppable Hulk",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulk-04.png",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You may KO a Wound from your hand or discard pile. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Crazed Rampage",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulk-02.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/hulk-01.png",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+5" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 9,
      name: "Iron Man",
      set: [1, 20],
      team: 1,
      cards: [
        {
          name: "Endless Invention",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-man-04.png",
          hc: 5,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Draw a card."
            ],
            [
              { hc: 5 },
              ": Draw another card."
            ]
          ]
        },
        {
          name: "Repulsor Rays",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-man-03.png",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 3 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Arc Reactor",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-man-02.png",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other",
              { hc: 5 },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Quantum Breakthrough",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/iron-man-01.png",
          hc: 5,
          rarity: 3,
          cost: 7,
          abilities: [

            "Draw two cards.",
            [
              { hc: 5 },
              ": Draw two more cards."
            ]

          ]
        }
      ]
    },
    {
      id: 10,
      name: "Nick Fury",
      set: [1, 20],
      team: 2,
      cards: [
        {
          name: "Battlefield Promotion",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nick-fury-04.png",
          hc: 1,
          rarity: 1,
          cost: 4,
          abilities: [
            [
              "You may KO a ",
              { team: 2 },
              " Hero from your hand or discard pile. If you do, you may gain a S.H.I.E.L.D. Officer to your hand."
            ]
          ]
        },
        {
          name: "High-Tech Weaponry",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nick-fury-03.png",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Legendary Commander",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nick-fury-02.png",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "1+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other",
              { team: 2 },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Pure Fury",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/nick-fury-01.png",
          hc: 5,
          rarity: 3,
          cost: 8,
          abilities: [
            [
              "Defeat any Villain or Mastermind whose ",
              { icon: 1 },
              " is less than the number of ",
              { team: 2 },
              " Heroes in the KO pile."
            ]
          ]
        }
      ]
    },
    {
      id: 11,
      name: "Rogue",
      team: 4,
      cards: [
        {
          name: "Borrowed Brawn",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rogue-03.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Energy Drain",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rogue-04.png",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile. If you do, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Copy Powers",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rogue-02.png",
          hc: 1,
          rarity: 2,
          cost: 5,
          abilities: [
            [
              "Play this card as a copy of another Hero you played this turn. This card is both ",
              { hc: 1 },
              " and the color you copy."
            ]
          ]
        },
        {
          name: "Steal Abilities",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/rogue-01.png",
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
      id: 12,
      name: "Spider-Man",
      team: 3,
      cards: [
        {
          name: "Astonishing Strength",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/spider-man-04.png",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            [
              "Reveal the top card of your deck. If that card costs ",
              { bold: "2" },
              { icon: 3 },
              " or less, draw it."
            ]
          ]
        },
        {
          name: "Great Responsibility",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/spider-man-03.png",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "Reveal the top card of your deck. If that card costs ",
              { bold: "2" },
              { icon: 3 },
              " or less, draw it."
            ]
          ]
        },
        {
          name: "Web-Shooters",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/spider-man-02.png",
          hc: 5,
          rarity: 2,
          cost: 2,
          abilities: [
            [
              "Rescue a Bystander."
            ],
            [
              "Reveal the top card of your deck. If that card costs ",
              { bold: "2" },
              { icon: 3 },
              " or less, draw it."
            ]
          ]
        },
        {
          name: "The Amazing Spider-Man",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/spider-man-01.png",
          hc: 1,
          rarity: 3,
          cost: 2,
          abilities: [
            [
              "Reveal the top three cards of your deck. Put any that cost ",
              { bold: "2" },
              { icon: 3 },
              " or less into your hand. Put the rest back in any order."
            ]
          ]
        }
      ]
    },
    {
      id: 13,
      name: "Storm",
      team: 4,
      cards: [
        {
          name: "Gathering Stormclouds",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/storm-03.png",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 3 },
              ":  Draw a card."
            ]
          ]
        },
        {
          name: "Lightning Bolt",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/storm-04.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Any Villain you fight on the Rooftops this turn gets ",
              { bold: "-2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Spinning Cyclone",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/storm-01.png",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "You may move a Villain to a new city space. Rescue any Bystanders captured by that Villain."
            ],
            [
              { italic: "(If you move a Villain to a city space that already has Villain, swap them.)" }
            ]
          ]
        },
        {
          name: "Tidal Wave",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/storm-02.png",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "Any Villain you fight on the Bridge this turn gets ",
              { bold: "-2" },
              { icon: 1 },
              "."
            ],
            [
              { hc: 3 },
              ": The Mastermind gets ",
              { bold: "-2" },
              { icon: 1 },
              " this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 14,
      name: "Thor",
      filterName: "Thor (Core Set)",
      set: [1, 20],
      team: 1,
      cards: [
        {
          name: "Odinson",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thor-03.png",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Surge of Power",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thor-04.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              "If you made ",
              { bold: "8" },
              " or more ",
              { icon: 2 },
              " this turn, you get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Call Lightning",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thor-02.png",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { hc: 3 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "God of Thunder",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/thor-01.png",
          hc: 3,
          rarity: 3,
          cost: 8,
          recruit: "5",
          attack: "0+",
          abilities: [
            [
              "You can use ",
              { icon: 2 },
              " as ",
              { icon: 1 },
              " this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 15,
      name: "Wolverine",
      filterName: "Wolverine (Core Set)",
      team: 4,
      cards: [
        {
          name: "Keen Senses",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolverine-04.png",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Healing Factor",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolverine-03.png",
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
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolverine-02.png",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              { hc: 2 },
              ": Draw two cards."
            ]
          ]
        },
        {
          name: "Berserker Rage",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/wolverine-01.png",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            "Draw three cards.",
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each extra card you've drawn this turn."
            ]
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 1,
      name: "Dr. Doom",
      vAttack: "9",
      vp: 5,
      cards: [
        {
          name: "Dr. Doom",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dr-doom-01.png",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Doombot Legion"
            ],
            [
              { bold: "Master Strike" },
              ": Each player with exactly 6 cards in hand reveals a ",
              { hc: 5 },
              " Hero or puts 2 cards from their hand on top of their deck."
            ]
          ]
        },
        {
          name: "Dark Technology",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dr-doom-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may recruit a ",
              { hc: 5 },
              " or ",
              { hc: 3 },
              " Hero from the HQ for free."
            ]
          ]
        },
        {
          name: "Monarch's Decree",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dr-doom-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose one: each other player draws a card or each other player discards a card."
            ]
          ]
        },
        {
          name: "Secrets of Time Travel",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dr-doom-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Take another turn after this one."
            ]
          ]
        },
        {
          name: "Treasures of Latveria",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/dr-doom-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": When you draw a new hand of cards at the end of this turn, draw three extra cards."
            ]
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Loki",
      set: [1, 20],
      vAttack: "10",
      vp: 5,
      cards: [
        {
          name: "Loki",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/loki-01.png",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Enemies of Asgard"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a ",
              { hc: 4 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Cruel Ruler",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/loki-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Defeat a Villain in the City for free."
            ]
          ]
        },
        {
          name: "Maniacal Tyrant",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/loki-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO up to four cards from your discard pile."
            ]
          ]
        },
        {
          name: "Vanishing Illusions",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/loki-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player KOs a Villain from their Victory Pile."
            ]
          ]
        },
        {
          name: "Whispers and Lies",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/loki-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player KOs two Bystanders from their Victory Pile."
            ]
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Magneto",
      vAttack: "8",
      vp: 5,
      cards: [
        {
          name: "Magneto",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/magneto-01.png",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Brotherhood"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals an ",
              { team: 4 },
              " Hero or discards down to four cards."
            ]
          ]
        },
        {
          name: "Bitter Captor",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/magneto-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Recruit an ",
              { team: 4 },
              " Hero from the HQ for free."
            ]
          ]
        },
        {
          name: "Crushing Shockwave",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/magneto-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals an ",
              { team: 4 },
              " Hero or gains two Wounds."
            ]
          ]
        },
        {
          name: "Electromagnetic Bubble",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/magneto-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose one of your ",
              { team: 4 },
              " Heroes. When you draw a new hand of cards at the end of this turn, add that Hero to your hand as a seventh card."
            ]
          ]
        },
        {
          name: "Xavier's Nemesis",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/magneto-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": For each of your ",
              { team: 4 },
              " Heroes, rescue a Bystander."
            ]
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Red Skull",
      set: [1, 20],
      vAttack: "7",
      vp: 5,
      cards: [
        {
          name: "Red Skull",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/red-skull-01.png",
          abilities: [
            [
              { bold: "Always Leads" },
              ": HYDRA"
            ],
            [
              { bold: "Master Strike" },
              ": Each player KOs a Hero from their hand."
            ]
          ]
        },
        {
          name: "Endless Resources",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/red-skull-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+4" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "HYDRA Conspiracy",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/red-skull-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Draw two cards. Then draw another card for each HYDRA Villain in your Victory Pile."
            ]
          ]
        },
        {
          name: "Negablast Grenades",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/red-skull-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Ruthless Dictator",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/red-skull-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Look at the top three cards of your deck. KO one, discard one and put one back on top of your deck."
            ]
          ]
        }
      ]
    }
  ],
  henchmen: [
    {
      id: 1,
      name: "Doombot Legion",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/doombot-legion.png",
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
      id: 2,
      name: "Hand Ninjas",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/hand-ninjas.png",
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
      id: 3,
      name: "Savage Land Mutates",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/savage-land-mutants.png",
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
      id: 4,
      name: "Sentinel",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/sentinel.png",
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
  villains: [
    {
      id: 1,
      name: "Brotherhood",
      cards: [
        {
          name: "Blob",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/brotherhood-04.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              "You can't defeat Blob unless you have an ",
              { team: 4 },
              " Hero."
            ]
          ]
        },
        {
          name: "Juggernaut",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/brotherhood-03.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player KOs two Heroes from their discard pile."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player KOs two Heroes from their hand."
            ]
          ]
        },
        {
          name: "Mystique",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/brotherhood-02.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Escape"
              },
              ": Mystique becomes a Scheme Twist that takes effect immediately."
            ]
          ]
        },
        {
          name: "Sabretooth",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/brotherhood-01.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals an ",
              { team: 4 },
              " Hero or gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Enemies of Asgard",
      filterName: "Enemies of Asgard (Core Set)",
      cards: [
        {
          name: "Destroyer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/enemies-of-asgard-03.png",
          qtd: 1,
          vAttack: "7",
          vp: "5",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO all your ",
              { team: 2 },
              " Heroes."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player KOs two of their Heroes."
            ]
          ]
        },
        {
          name: "Enchantress",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/enemies-of-asgard-02.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Draw three cards."
            ]
          ]
        },
        {
          name: "Frost Giant",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/enemies-of-asgard-04.png",
          qtd: 3,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals a ",
              { hc: 3 },
              " Hero or gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Ymir, Frost Giant King",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/enemies-of-asgard-01.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals a ",
              { hc: 3 },
              " Hero or gains a Wound."
            ],
            [
              {
                bold: "Fight"
              },
              ": Choose a player. That player KOs any number of Wounds from their hand and discard pile."
            ]
          ]
        }
      ]
    },
    {
      id: 3,
      name: "HYDRA",
      filterName: "HYDRA (Core Set)",
      cards: [
        {
          name: "Endless Armies of HYDRA",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-02.png",
          qtd: 3,
          vAttack: "4",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Play the top two cards of the Villain Deck."
            ]
          ]
        },
        {
          name: "HYDRA Kidnappers",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-01.png",
          qtd: 3,
          vAttack: "3",
          vp: "1",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": You may gain a S.H.I.E.L.D. Officer."
            ]
          ]
        },
        {
          name: "Supreme HYDRA",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-03.png",
          qtd: 1,
          vAttack: "6",
          vp: "3*",
          abilities: [
            [
              "Supreme HYDRA is worth ",
              { bold: "+3" },
              { icon: 4 },
              " for each other HYDRA Villain in your Victory Pile."
            ]
          ]
        },
        {
          name: "Viper",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hydra-04.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player without another HYDRA Villain in their Victory Pile gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Masters of Evil",
      cards: [
        {
          name: "Baron Zemo",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/masters-of-evil-02.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": For each of your ",
              { team: 1 },
              " Heroes, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Melter",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/masters-of-evil-01.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals the top card of their deck. For each card, you choose to KO it or put it back."
            ]
          ]
        },
        {
          name: "Ultron",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/masters-of-evil-04.png",
          qtd: 2,
          vAttack: "6",
          vp: "2+",
          abilities: [
            [
              "Ultron is worth ",
              { bold: "+1" },
              { icon: 4 },
              " for each ",
              { hc: 5 },
              " Hero you have among all your cards at the end of the game."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Whirlwind",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/masters-of-evil-03.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": If you fight Whirlwind on the Rooftops or Bridge, KO two of your Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Radiation",
      cards: [
        {
          name: "Abomination",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/radiation-04.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": If you fight Abomination on the Streets or Bridge, rescue three Bystanders."
            ]
          ]
        },
        {
          name: "The Leader",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/radiation-03.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Play the top card of the Villain Deck."
            ]
          ]
        },
        {
          name: "Maestro",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/radiation-02.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": For each of your ",
              { hc: 4 },
              " Heroes, KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Zzzax",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/radiation-01.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player reveals a ",
              { hc: 4 },
              " Hero or gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Skrulls",
      cards: [
        {
          name: "Paibok the Power Skrull",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/skrulls-01.png",
          qtd: 1,
          vAttack: "8",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Choose a Hero in the HQ for each player. Each player gains that Hero."
            ]
          ]
        },
        {
          name: "Skrull Queen Veranke",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/skrulls-02.png",
          qtd: 1,
          vAttack: "*",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Put the highest-cost Hero from the HQ under this Villain. This Villain's ",
              { icon: 1 },
              " is equal to that Hero's ",
              { icon: 3 },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": Gain that Hero."
            ]
          ]
        },
        {
          name: "Skrull Shapeshifters",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/skrulls-03.png",
          qtd: 3,
          vAttack: "*",
          vp: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Put the rightmost Hero from the HQ under this Villain. This Villain's ",
              { icon: 1 },
              " is equal to that Hero's ",
              { icon: 3 },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": Gain that Hero"
            ]
          ]
        },
        {
          name: "Super-Skrull",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/skrulls-04.png",
          qtd: 3,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Each player KOs one of their Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Spider-Foes",
      cards: [
        {
          name: "Doctor Octopus",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/spider-foes-01.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": When you draw a new hand of cards at the end of this turn, draw eight cards instead of six."
            ]
          ]
        },
        {
          name: "Green Goblin",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/spider-foes-03.png",
          qtd: 2,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Green Goblin captures a Bystander."
            ]
          ]
        },
        {
          name: "The Lizard",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/spider-foes-02.png",
          qtd: 2,
          vAttack: "3",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": If you fight the Lizard in the Sewers, each other player gains a Wound."
            ]
          ]
        },
        {
          name: "Venom",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/spider-foes-04.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              "You can't defeat Venom unless you have a ",
              { hc: 1 },
              " Hero."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player gains a Wound."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 1,
      name: "Midtown Bank Robbery",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/5Scheme(36).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. 12 total Bystanders in the Villain Deck."
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
      id: 2,
      name: "Secret Invasion of the Skrull Shapeshifters",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/2Scheme(33).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. 6 Heroes. Skrull Villain Group required. Shuffle 12 random Heroes from the Hero Deck into the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Heroes in the Villain Deck count as Skrull Villains with ",
              { icon: 1 },
              " equal to the Hero's ",
              { icon: 3 },
              { bold: "+2" },
              ". If you defeat that Hero, you gain it."
            ],
            [
              { bold: "Twist" },
              ": The highest-cost Hero from the HQ moves into the Sewers as a Skrull Villain, as above."
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
      id: 3,
      name: "Legacy Virus, The",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/4Scheme(35).png",
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
      id: 4,
      name: "Negative Zone Prison Breakout",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/8Scheme(39).png",
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
      id: 5,
      name: "Portals to the Dark Dimension",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/7Scheme(38).png",
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
      id: 6,
      name: "Replace Earth's Leaders with Killbots",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/3Scheme(34).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 5 Twists. 3 additional Twists next to this Scheme. 18 total Bystanders in the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Bystanders in the Villain Deck count as Killbot Villains, with ",
              { icon: 1 },
              " equal to the number of Twists next to this Scheme."
            ],
            [
              { bold: "Twist" },
              ": Put the Twist next to this Scheme."
            ],
            [
              { bold: "Evil Wins" },
              ": If 5 “Killbots“ escape."
            ],
          ]
        },
      ]
    },
    {
      id: 7,
      set: [1, 20],
      name: "Super Hero Civil War",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/1Scheme(32).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": For 2-3 players, use 8 Twists. For 4-5 players, use 5 Twists. If only 2 players, use only 4 Heroes in the Hero Deck."
            ],
            [
              { bold: "Twist" },
              ": KO all the Heroes in the HQ."
            ],
            [
              { bold: "Evil Wins" },
              ": If the Hero Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 8,
      set: [1, 20],
      name: "Unleash the Power of the Cosmic Cube",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/6Scheme(37).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist" },
              ": Put the Twist next to this Scheme."
            ],
            [
              { bold: "Twist 5-6" },
              ": Each player gains a Wound."
            ],
            [
              { bold: "Twist 7" },
              ": Each player gains 3 Wounds."
            ],
            [
              { bold: "Twist 8" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
  ],
  bystanders: [
    {
      id: 1,
      name: "Bystander",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystanders.png",
      vp: 1,
      cards: [
        {
          qtd: 30,
          abilities: []
        }
      ]
    }
  ],
  wounds: [
    {
      id: 1,
      name: "Wound",
      filterName: "Wound (Core)",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Wounds/wound.png",
      set: 1,
      cards: [
        {
          qtd: 30,
          abilities: [
            [
              { bold: "Healing" },
              ": If you don't recruit any Heroes or defeat any Villains on your turn, you may KO all the Wounds from your hand.",
            ],
          ]
        }
      ]
    }
  ],
}