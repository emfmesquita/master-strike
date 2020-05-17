export default {
  heroes: [
    {
      id: 132,
      name: "Aurora and Northstar",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Northern Lights",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            { keyword: 37 },
            [
              { keyword: 38 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Blazing Flare",
          subTitle: "Aurora",
          hc: 3,
          rarity: 1,
          divided: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
                { keyword: 38 },
                ": You get ",
                { bold: "+2"},
                { icon: 2 },
                "."
            ]
          ]
        },
        {
          name: "Blazing Fists",
          subTitle: "Northstar",
          hc: 4,
          rarity: 1,
          divided: 2,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 36 }
          ]
        },
        {
          name: "Twin Blast",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            { keyword: 37 },
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+3"},
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Mach 10",
          hc: 2,
          rarity: 3,
          cost: 7,
          recruit: "4",
          attack: "0+",
          abilities: [
            { keyword: 37 },
            [
              "All Heroes you recruit this turn have ",
              { keyword: 37 },
              "."
            ],
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+2"},
              { icon: 1 },
              "for each ",
              { keyword: 38 },
              " card you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 133,
      name: "Banshee",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Sonar Detection",
          hc: 1,
          rarity: 1,
          cost: 2,
          piercing: "0+",
          abilities: [
            "Draw a card.",
            { keyword: 35 },
            [
              { keyword: 34 },
              { hc: 1 },
              ": You get ",
              { bold: "+1"},
              { icon: 6 },
              "."
            ]
          ]
        },
        {
          name: "Speed of Sound",
          hc: 3,
          rarity: 1,
          cost: 3,
          piercing: "2",
          abilities: [
            { keyword: 37 },
            { keyword: 35 }
          ]
        },
        {
          name: "Sonic Blastwave",
          hc: 3,
          rarity: 2,
          cost: 5,
          recruit: "3",
          piercing: "0+",
          abilities: [
            { keyword: 35 },
            [
              { hc: 3 },
              ": You may have this card produce ",
              { icon: 6 },
              " instead of",
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Bone-Shattering Howl",
          hc: 3,
          rarity: 3,
          cost: 8,
          piercing: "4",
          abilities: [
            { keyword: 35 },
            [
              { hc: 3 },
              { hc: 1 },
              ": You may use",
              { icon: 1 },
              " as if it were ",
              { icon: 6 },
              " this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 134,
      name: "Beast",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Captivating Conundrum",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { keyword: 34 },
              { hc: 5 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Furry Fury",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 36 },
            [
              { keyword: 34 },
              { hc: 4 },
              ": ",
              { keyword: 36 }

            ]
         ]
        },
        {
          name: "Calculated Rage",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { keyword: 36 }
            ]
          ]
        },
        {
          name: "Recursive Pummeling ",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            { keyword: 36 },
            [
              { keyword: 34 },
              { team: 4 },
              ": You may return a 0-cost, 3-cost, and 4-cost card from your discard pile to your hand."
            ]
          ]
        }
      ]
    },
    {
      id: 135,
      name: "Cannonball",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Kinetic Blast Field",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 37 },
            [
              { hc: 2 },
              ": You get ",
              { bold: "+2"},
              { icon: 1 }
            ]
          ]
        },
        {
          name: "Carry to the Air",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            { keyword: 37 },
            [
              { hc: 4 },
              ": The next Hero you recruit this turn has ",
              { keyword: 37 }

            ]
         ]
        },
        {
          name: "Natural Leader",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            { keyword: 37},
            [
              { hc: 4 },
              ": Return a ",
              { team: 2},
              "Hero from your discard pile to your hand."
            ]
          ]
        },
        {
          name: "Human Cannon",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            { keyword: 37 },
            [
              "If you played at least 6 other cards this turn, you get ",
              { bold: "+2"},
              { icon: 1}
            ]
          ]
        }
      ]
    },
    {
      id: 136,
      name: "Colossus and Wolverine",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Reliable",
          subTitle: "Colossus",
          hc: 4,
          rarity: 1,
          divided: 1,
          cost: 3,
          recruit: "2",
          abilities: [
          ]
        },
        {
          name: "Unpredictable",
          subTitle: "Wolverine",
          hc: 2,
          rarity: 1,
          divided: 2,
          cost: 3,
          attack: "1+",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 }
            ]
          ]
        },
        {
          name: "Fastball Special",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 37 },
            [
              { keyword: 34 },
              { hc: 2 },
              ": ",
              { keyword: 36 }
            ]
          ]
        },
        {
          name: "Insane Disregard for Danger",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            { keyword: 36 },
            [
              "If you have a Wound in your hand or discard pile, KO it. Otherwise, gain a Wound."
            ]
          ]
        },
        {
          name: "Uncanny X-Men",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 }
            ],
            [
              "Then, draw a card for each",
              { team: 4},
              "card you Berserked."
            ]
          ]
        }
      ]
    },
    {
      id: 137,
      name: "Dazzler",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Convert Sound to Light",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "1",
          piercing: "0+",
          abilities: [
            { keyword: 35 },
            [
              { keyword: 38},
              ": You get ",
              { bold: "+1"},
              { icon: 6},
              " for each Lightshow card you played this turn."
            ]
          ]
        },
        {
          name: "Dazzling Glamour",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 38 },
            [
              ": You get ",
              { bold: "+2"},
              { icon: 1 },
            ]
         ]
        },
        {
          name: "City-Wide Mega Concert",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { keyword: 38},
              ": When you draw a new hand of cards at the end of this turn, draw two extra cards."
            ]
          ]
        },
        {
          name: "Inspire the World ",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { keyword: 38 },
              ": Put a Hero from the HQ on top of your deck."
            ]
          ]
        }
      ]
    },
    {
      id: 138,
      name: "Havok",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Blinding Burst",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { keyword: 38},
              ": You get ",
              { bold: "+3"},
              { icon: 1},
              " usable only against the Mastermind."
            ]
          ]
        },
        {
          name: "Unleash Havok",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            "To play this card, you must discard a card from your hand.",
            [
              { keyword: 36},
              ", ",
              { keyword: 36}
            ]
         ]
        },
        {
          name: "Concussive Plasma",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { keyword: 34},
              { hc: 3 },
              ": You get ",
              { bold: "+1"},
              { icon: 1 },
              "for each ",
              { hc: 3 },
              "card in your discard pile."
            ]
          ]
        },
        {
          name: "Radiation Focus Array ",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            { keyword: 36},
            [
              { keyword: 34 },
              { hc: 3 },
              ": You get the total printed",
              { icon: 1},
              "of all the ",
              { hc: 3},
              " cards in your discard pile."
            ]
          ]
        }
      ]
    },
    {
      id: 139,
      name: "Jubilee",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Light a Spark",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            "Draw a card.",
            [
              { keyword: 38},
              ": You get ",
              { bold: "+1"},
              { icon: 2},
              " for each Lightshow card you played this turn."
            ]
          ]
        },
        {
          name: "Blasting Fireworks",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            "Draw a card.",
            [
              { keyword: 38},
              ": You get ",
              { bold: "+1"},
              { icon: 1},
              " for each Lightshow card you played this turn."
            ]
         ]
        },
        {
          name: "Unexpected Explosion ",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { keyword: 38},
              ": Look at the top card of your deck. If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Prismatic Cascade",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "5+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+1"},
              { icon: 2},
              "and ",
              { bold: "+1"},
              { icon: 1},
              "for each ",
              { keyword: 38 },
              " card you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 140,
      name: "Kitty Pryde",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Intangible Qualities",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          attack: "0+",
          abilities: [
            [
              "Put a card from the HQ on the bottom of the Hero deck. If that card had a ",
              { icon: 2},
              ", get",
              { bold: "+2"},
              { icon: 2},
              ". If that card had an ",
              { icon: 1},
              ", you get ",
              { bold: "+2"},
              { icon: 1},
              ". (If both, get both.)"
            ]
          ]
        },
        {
          name: "Going through a Phase",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              { keyword: 34},
              { team: 4},
              ": Draw a card."
            ]
         ]
        },
        {
          name: "Ghost in the Machine",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1"},
              { icon: 1 },
              "for each different cost among the Heroes in the HQ."
            ]
          ]
        },
        {
          name: "Lockheed, Kitty's Dragon",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            { keyword: 37 },
            [
             "Put a card from the HQ on the bottom of the Hero Deck. You get ",
             {  bold: "+"},
             {  icon: 1},
             " equal to its cost."
            ]
          ]
        }
      ]
    },
    {
      id: 141,
      name: "Legion",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Bend Steel",
          hc: 4,
          rarity: 1,
          divided: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            {keyword: 36}
          ]
        },
        {
          name: "Bend Light",
          hc: 1,
          rarity: 1,
          divided: 2,
          cost: 2,
          recruit: "1+",
          abilities: [
            [
              { keyword: 36 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 }
            ]
          ]
        },
        {
          name: "Split Personality",
          hc: 5,
          rarity: 1,
          divided: 1,
          cost: 3,
          attack: "2",
          abilities: [
          ]
        },
        {
          name: "Split Eardrums",
          hc: 3,
          rarity: 1,
          divided: 2,
          cost: 3,
          piercing: "2",
          abilities: [
            [
              { keyword: 35 }
            ]
          ]
        },
        {
          name: "Channel Time",
          hc: 2,
          rarity: 2,
          divided: 1,
          cost: 5,
          abilities: [
            "Draw two cards."
          ]
        },
        {
          name: "Channel Fire",
          hc: 5,
          rarity: 2,
          divided: 2,
          cost: 5,
          piercing: "2",
          abilities: [
            [
              "You get ",
              { bold: "+1"},
              { icon: 1},
              "for each different Hero Class in your discard pile."
            ]
          ]
        },
        {
          name: "Maelstrom of Clashing Powers ",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            { keyword: 37 },
            [
             "Reveal the top three cards of the Hero Deck. You get their total printed ",
             {  icon: 1},
             ". Put them on the bottom of the Hero Deck."
            ]
          ]
        }
      ]
    },
    {
      id: 142,
      name: "Longshot",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Fortune Favors the Bold",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "3",
          abilities: [
            [
              "To play this card, you must put a card from your hand on top of your deck.",
            ]
          ]
        },
        {
          name: "Flurry of Blades",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            {keyword: 36},
            [
              { hc: 5},
              ": ",
              { keyword: 36}
            ]
         ]
        },
        {
          name: "Make My Own Luck",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { hc: 1 },
              ": You may KO the card you discarded this way."
            ]
          ]
        },
        {
          name: "Escape from Mojo World",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            "Reveal the top card of the Villain Deck. If it's a Villain, you may put it on the bottom of that Deck.",
            [
              { team: 4},
              ": You get ",
              { bold: "+"},
              { icon: 1},
              "equal to the printed Victory Points of the card you revealed."
            ]
          ]
        }
      ]
    },
    {
      id: 143,
      name: "Phoenix",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Life & Death Incarnate",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "3",
          abilities: [
            "KO this card.",
            [
              "You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Obliterating Fire",
          hc: 3,
          rarity: 1,
          cost: 4,
          piercing: "4",
          abilities: [
            { keyword: 37},
            { keyword: 35},
            "KO this card."
         ]
        },
        {
          name: "Reincarnating Phoenix",
          hc: 1,
          rarity: 2,
          cost: 6,
          abilities: [
            "Draw two cards.",
            [
              "You may put a Hero that was KO'd this turn into your discard pile."
            ]
          ]
        },
        {
          name: "Driven Mad by Power",
          hc: 4,
          rarity: 3,
          cost: 9,
          attack: "6+",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
            ],
            [
              "KO all the cards you Berserked. If this card makes at least ",
              { bold: "13"},
              { icon: 1},
              ", then the Phoenix Force becomes corrupted by power and devours the Earth. You win, Evil wins, and all other players lose."
            ]
          ]
        }
      ]
    },
    {
      id: 144,
      name: "Polaris",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Ride the Magnetic Waves",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            { keyword: 37},
            [
              { hc: 1},
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Electromagnetic Pulse",
          hc: 3,
          rarity: 1,
          cost: 4,
          piercing: "2",
          abilities: [
            { keyword: 35 },
            [
              { hc: 3 },
              ": Draw a card."
            ]
         ]
        },
        {
          name: "Subtle Attunement",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "2",
          abilities: [
            { keyword: 37 },
            [
              { hc: 1},
              ": Look at the top two cards of your deck. You may KO one of them. Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Reverse Polarity",
          hc: 1,
          rarity: 3,
          cost: 8,
          recruit: "4",
          abilities: [
            { keyword: 37},
            [
              { keyword: 34},
              { team: 4},
              ": You can use Recruit as Attack ",
              { icon: 2 },
              " as ",
              { icon: 1 },
              "this turn, and vice versa. ",
            ]
          ]
        }
      ]
    },
    {
      id: 145,
      name: "Psylocke",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Psychic Knife",
          hc: 2,
          rarity: 1,
          cost: 2,
          piercing: "0+",
          abilities: [
            "Draw a card.",
            [
              { keyword: 35},
            ],
            [
              {hc: 2},
              ": You get ",
              { bold: "+1"},
              { icon: 6}
            ]
          ]
        },
        {
          name: "Precognition",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
           "Reveal the top card of the Hero Deck. You may recruit it this turn. If you do, draw a card."
         ]
        },
        {
          name: "Butterfly Effect ",
          hc: 1,
          rarity: 2,
          cost: 5,
          piercing: "2+",
          abilities: [
            { keyword: 35 },
            [
              { keyword: 34},
              { hc: 1},
              ": You get ",
              { bold: "+1"},
              { icon: 6}
            ]
          ]
        },
        {
          name: "Telepathic Ninjutsu",
          hc: 1,
          rarity: 3,
          cost: 7,
          piercing: "3",
          abilities: [
            { keyword: 35},
            [
              "Reveal the top card of the Hero Deck. The player of your choice puts it in their hand."
            ]
          ]
        }
      ]
    },
    {
      id: 146,
      name: "X-23",
      set: 16,
      team: 4,
      cards: [
        {
          name: "Adamantium Footclaws",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 34 },
              { hc: 2},
              ": Draw a card."
            ]

          ]
        },
        {
          name: "Healing Factor Genome",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 36},
            "You may KO a Wound from your hand or discard pile."
         ]
        },
        {
          name: "Bioengineered Assassin",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "2+",
          abilities: [
            { keyword: 36 },
            [
              { keyword: 34},
              { hc: 2},
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Heir to Wolverine",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              {keyword: 36},
              ", ",
              {keyword: 36}
            ],
            [
              { keyword: 34},
              { hc: 2},
              ": Count the",
              { hc: 2},
              " cards in your discard pile. ",
              { keyword: 36},
              " that many times."
            ]
          ]
        }
      ]
    }
  ]
}