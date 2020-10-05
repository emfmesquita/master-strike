export default {
  id: 24,
  heroes: [
    {
      id: 185,
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
              { team: 2 },
              { team: 2 },
              { team: 2 },
              { team: 2 },
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
              },
              "."
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
              },
              "."
            ],
            [
              {
                hc: 4
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
                hc: 5
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
              ". ",
              { italic: "(If both, you get both.)" }
            ]
          ]
        },
        {
          name: "Warflight",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "Whenever you ",
              { keyword: 57 },
              " this turn, you get both",
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
              },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 187,
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
                hc: 2
              },
              ": Choose one - Draw a card or you get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "."
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
              },
              "."
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
                team: 1
              },
              {
                team: 1
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
      team: 1,
      cards: [
        {
          name: "Too Fast to See",
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
                hc: 2
              },
              ": Instead, ",
              {
                keyword: 57,
                text: "Hyperspeed 3"
              },
              " for",
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
                hc: 4
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
                hc: 2
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
              " your entire remaining deck. ",
              { italic: "(Don't reshuffle.)" }
            ],
            [
              {
                team: 1
              },
              {
                team: 1
              },
              {
                team: 1
              },
              {
                team: 1
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
              "As you play this card, you may choose a color and/or a team icon. This card is that color and team icon this turn. ",
              { italic: "(instead of " },
              {
                hc: 1
              },
              { italic: "and" },
              {
                team: 1
              },
              { italic: ")" }
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
                hc: 3
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
                hc: 2
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
                hc: 4
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
                hc: 3
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
                hc: 1
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
                hc: 1
              },
              {
                hc: 1
              },
              {
                hc: 1
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
                hc: 2
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
          attack: "3",
          abilities: [
            [
              "Choose a Hero Class. ",
              { italic: "(" },
              { hc: 4 },
              { italic: "," },
              { hc: 2 },
              { italic: "," },
              { hc: 1 },
              { italic: "," },
              { hc: 5 },
              { italic: "or " },
              { hc: 3 },
              { italic: ")" },
              " Reveal the top card of your deck. If it's the Hero Class you named, draw it. Otherwise, put it back on the top or bottom."
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
                hc: 1
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
              ": You may fight a Henchman from your Victory Pile this turn. If you do, KO it and rescue a Bystander. ",
              { italic: "(Do that Henchman's Fight effect too.)" },
            ]
          ]
        },
        {
          name: "Military-Industrial Complex ",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "0+",
          attack: "2",
          abilities: [
            [
              "Whenever you defeat a Villain this turn, you get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              },
              "."
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
                hc: 3
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
  ],
  masterminds: [
    {
      id: 62,
      name: "Grim Reaper",
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Grim Reaper",
          vAttack: "8+",
          abilities: [
            [
              "Grim Reaper gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { rule: 6, text: "Location" },
              " card in the city."
            ],
            [
              { bold: "Always Leads" },
              ": Lethal Legion"
            ],
            [
              { bold: "Master Strike" },
              ": This Strike enters the city as a ",
              { bold: "7" },
              { icon: 1 },
              " “Graveyard“ ",
              { rule: 6, text: "Location" },
              " that says “This gets ",
              { bold: "+2" },
              { icon: 1 },
              " while there's a Villain here.“ It's Worth 5VP."
            ]
          ]
        },
        {
          name: "Epic Grim Reaper",
          vAttack: "9+",
          epic: true,
          dense: true,
          abilities: [
            [
              "Grim Reaper gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each ",
              { rule: 6, text: "Location" },
              " card in the city."
            ],
            [
              { bold: "Always Leads" },
              ": Lethal Legion"
            ],
            [
              { bold: "Master Strike" },
              ": This Strike enters the city as an ",
              { bold: "8" },
              { icon: 1 },
              " “Graveyard“ ",
              { rule: 6, text: "Location" },
              " that says “This gets ",
              { bold: "+3" },
              { icon: 1 },
              " while there's a Villain here.“ It's worth 6VP. Then, if there are at least three Location cards in the city, each player gains a Wound."
            ]
          ]
        },
        {
          name: "Carnival of Concussions",
          tactic: true,
          overrideType: 4,
          overrideSubType: 2,
          abilities: [
            [
              { bold: "Fight" },
              ": If this was not already a ",
              { rule: 6, text: "Location", keywordStyle: true },
              ", draw three cards, and this card enters the city as a Location with this ability:"
            ],
            { divider: true },
            [
              "Whenever you fight a Villain here, each other player KOs a Bystander from their Victory Pile."
            ]
          ]
        },
        {
          name: "Cult of Skulls",
          tactic: true,
          dense: true,
          overrideType: 4,
          overrideSubType: 2,
          abilities: [
            [
              { bold: "Fight" },
              ": If this was not already a ",
              { rule: 6, text: "Location", keywordStyle: true },
              ", KO up to two cards from your discard pile, and this card enters the city as a Location with this ability:"
            ],
            { divider: true },
            [
              "Whenever you fight a Villain here, each other player reveals their hand and discards a non-grey card."
            ]
          ]
        },
        {
          name: "Maze of Bones",
          tactic: true,
          dense: true,
          overrideType: 4,
          overrideSubType: 2,
          abilities: [
            [
              { bold: "Fight" },
              ": If this was not already a ",
              { rule: 6, text: "Location", keywordStyle: true },
              ", look at the top four cards of your deck, KO any number of them, and put the rest back in any order. Then this card enters the city as a Location with this ability:"
            ],
            { divider: true },
            [
              "Whenever you fight a Villain here, each other player gains a Wound."
            ]
          ]
        },
        {
          name: "Prison of Coffins",
          tactic: true,
          dense: true,
          overrideType: 4,
          overrideSubType: 2,
          abilities: [
            [
              { bold: "Fight" },
              ": If this was not already a ",
              { rule: 6, text: "Location", keywordStyle: true },
              ", you get ",
              { bold: "+5" },
              { icon: 2 },
              ", and this card enters the city as a Location with this ability:",
            ],
            { divider: true },
            [
              "Whenever you fight a Villain here, each other player puts a Villain from their Victory Pile into the Escape Pile."
            ]
          ]
        }
      ]
    },
    {
      id: 63,
      name: "Hood, The",
      tacticName: "The Hood",
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "The Hood",
          vAttack: "9+",
          abilities: [
            { keyword: 58 },
            [
              { bold: "Always Leads" },
              ": Hood's Gang"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals the top 6 cards of their deck, discards all the non-grey Heroes revealed, and puts the rest back in any order."
            ]
          ]
        },
        {
          name: "Epic Hood",
          vAttack: "10+",
          epic: true,
          abilities: [
            { keyword: 58, text: "Double Dark Memories" },
            [
              { bold: "Always Leads" },
              ": Hood's Gang"
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards their deck, then shuffles 6 random grey cards from their discard pile to form their new deck."
            ]
          ]
        },
        {
          name: "Demonic Revelation",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and discards a non-grey Hero."
            ]
          ]
        },
        {
          name: "Focus Magic Through Guns",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 1 },
              " Hero or discards a card."
            ],
            [
              "Then each other player reveals a ",
              { hc: 5 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Paean to Dormammu",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards their deck."
            ]
          ]
        },
        {
          name: "The Hood's Warehouse",
          tactic: true,
          overrideType: 4,
          overrideSubType: 2,
          abilities: [
            [
              { bold: "Fight" },
              ": If this was not already a ",
              { rule: 6, text: "Location", keywordStyle: true },
              ", rescue 4 Bystanders, and this card enters the city as a Location with this ability:"
            ],
            { divider: true },
            [
              "When you fight a Villain here, play another card from the Villain Deck."
            ]
          ]
        }
      ]
    },
    {
      id: 64,
      name: "Mandarin",
      vAttack: "16",
      vp: 6,
      cards: [
        {
          name: "Mandarin",
          vAttackAsterisk: true,
          dense: true,
          abilities: [
            [
              "All Mandarin's Rings get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              "Mandarin gets ",
              { bold: "-1" },
              { icon: 1 },
              " for each Mandarin's Ring among all players' Victory Piles. ",
              { italic: "(" },
              { bold: "-3" },
              { icon: 1 },
              { italic: " for each in solo.)" },
            ],
            [
              { bold: "Always Leads" },
              ": Mandarin's Rings"
            ],
            [
              { bold: "Master Strike" },
              ": Each player chooses a Mandarin's Ring from their Victory Pile to enter the city. Any player who didn't have a Ring gains a Wound instead."
            ]
          ]
        },
        {
          name: "Epic Mandarin",
          vAttack: "26",
          vAttackAsterisk: true,
          epic: true,
          dense: true,
          abilities: [
            [
              "All Mandarin's Rings get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              "Mandarin gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each Mandarin's Ring among all players' Victory Piles. ",
              { italic: "(" },
              { bold: "-6" },
              { icon: 1 },
              { italic: " for each in solo.)" },
            ],
            [
              { bold: "Always Leads" },
              ": Mandarin's Rings"
            ],
            [
              { bold: "Master Strike" },
              ": Each player chooses a Mandarin's Ring from their Victory Pile to enter the city. Any player who didn't have a Ring gains a Wound to the top of their deck instead."
            ]
          ]
        },
        {
          name: "Circles Unbroken",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Draw a card for each Mandarin's Ring in your Victory Pile."
            ]
          ]
        },
        {
          name: "Dragon of Heaven Spaceship",
          vAttack: "9",
          tactic: true,
          dense: true,
          overrideType: 4,
          overrideSubType: 2,
          abilities: [
            [
              { bold: "Fight" },
              ": If this was not already a ",
              { rule: 6, text: "Location", keywordStyle: true },
              ", KO up to two of your Heroes, and this card enters the city as a Location with this ability:"
            ],
            { divider: true },
            [
              "Whenever you fight a Villain here, each other player reveals their hand and KOs one of their non-grey Heroes."
            ],
            [
              { bold: "Fight" },
              ": KO up to two of your Heroes."
            ]
          ]
        },
        {
          name: "Intertwining Powers",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player without at least two Mandarin's Rings in their Victory Pile gains a Wound."
            ]
          ]
        },
        {
          name: "Rings Seek Their True Hand",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Hero or puts a Mandarin's Ring from their Victory Pile into the Escape Pile."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 33,
      name: "HYDRA Base",
      vAttack: "2+",
      vp: 1,
      cards: [
        {
          subTitle: "Henchman Location",
          subType: 2,
          abilities: [
            [
              "HYDRA Base gets ",
              { bold: "+2" },
              { icon: 1 },
              " while there's a Villain here."
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
      ]
    },
    {
      id: 34,
      name: "Mandarin's Rings",
      subTitle: "Henchman Villain - Mandarin's Rings",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          name: "Daimonic, The White Light",
          abilities: [
            [
              { bold: "Fight" },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Incandescence, The Flame Blast",
          abilities: [
            [
              { bold: "Fight" },
              ": You may KO a card from your discard pile."
            ]
          ]
        },
        {
          name: "Influence, The Impact Beam",
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
        {
          name: "Liar, The Mento-Intensifier",
          abilities: [
            [
              { bold: "Fight" },
              ": Look at the top card of another player's deck. Say it is “Good“ or “Bad.“ That player chooses to put it in your discard pile or their discard pile."
            ]
          ]
        },
        {
          name: "Lightning, The Electro-Blast",
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top card of your deck. You may KO it."
            ]
          ]
        },
        {
          name: "Nightbringer, The Black Light",
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top three cards of the Villain Deck. You may defeat a Villain you revealed worth 2VP or less. ",
              { italic: "(Do its Fight effect.)" },
              " Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Remaker, The Matter Rearranger",
          abilities: [
            [
              { bold: "Fight" },
              ": You may choose a card from your hand or discard pile. The player on your right puts it in their hand."
            ]
          ]
        },
        {
          name: "Spectral, The Disintegration Beam",
          abilities: [
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Spin, The Vortex Beam",
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top six cards of your deck. Discard all of them that cost 0, then put the rest back in any order."
            ]
          ]
        },
        {
          name: "Zero, The Ice Blast",
          abilities: [
            [
              { bold: "Fight" },
              ": Choose a card you played this turn that costs 0. When you draw a new hand of cards at the end of this turn, add that card to your hand as an extra card."
            ]
          ]
        },
      ]
    },
  ],
  schemes: [
    {
      id: 114,
      name: "Earthquake Drains the Ocean",
      cards: [
        {
          name: "Earthquake Drains the Ocean",
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Add an extra Villain Group."
            ],
            [
              { bold: "Special Rules" },
              ": There are two extra “Low Tide“ city spaces on the left side of the city, so the city has 7 spaces total."
            ],
            [
              { bold: "Twist" },
              ": The tide rushes in. This Scheme ",
              { rule: 7, text: "Transforms", keywordStyle: true },
              "."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Villains per player have escaped or the Villain Deck runs out."
            ],
          ]
        },
        {
          name: "Tsunami Crushes the Coast",
          transformed: true,
          dense: true,
          abilities: [
            [
              { bold: "Special Rules" },
              ": The Low Tide, Bridge, and Streets city spaces no longer exist. The city has 3 spaces total. Put this Scheme on the Streets to mark the edge of the city. Villains in destroyed city spaces escape, starting from the left."
            ],
            [
              { bold: "Twist" },
              ": The tide rushes out. This Scheme ",
              { rule: 7, text: "Transforms", keywordStyle: true },
              ", then play another card from the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Villains per player have escaped or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 115,
      name: "House of M",
      cards: [
        {
          name: "House of M",
          dense: true,
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Hero Deck is 4",
              { team: 4 },
              " Heroes and 2 non-",
              { team: 4 },
              " Heroes. ",
              { italic: "(Or substitute another team for all " },
              { team: 4 },
              { italic: " icons on both sides.)" },
              " Add 14 Scarlet Witch Hero cards to the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Each Scarlet Witch in the city is a Villain with ",
              { icon: 1 },
              " equal to its ",
              { icon: 3 },
              { bold: "+3" },
              ". If you fight one, gain it as a Hero."
            ],
            [
              { bold: "Twist" },
              ": KO all non-",
              { team: 4 },
              " Heroes from the HQ. If there are at least 2 Scarlet Witch cards in the city, this Scheme ",
              { rule: 7, text: "Transforms", keywordStyle: true },
              ". Otherwise play another card from the Villain Deck."
            ],
          ]
        },
        {
          name: "”No More Mutants”",
          transformed: true,
          abilities: [
            [
              { bold: "Special Rules" },
              ": Each Scarlet Witch in the city is a Villain with ",
              { icon: 1 },
              " equal to its ",
              { icon: 3 },
              { bold: "+4" },
              ". If you fight one, gain it as a Hero."
            ],
            [
              { bold: "Twist" },
              ": KO all ",
              { team: 4 },
              " Heroes from the HQ. Play another card from the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When the number of non-grey Heroes in the KO pile is ten plus double the number of players."
            ],
          ]
        },
      ]
    },
    {
      id: 116,
      name: "Secret HYDRA Corruption",
      cards: [
        {
          name: "Secret HYDRA Corruption",
          dense: true,
          abilities: [
            [
              { bold: "Setup" },
              ": 30 Officers in the S.H.I.E.L.D. Officer stack. 1 player: 7 Twists. 2-3 players: 9 Twists. 4-5 players: 11 Twists."
            ],
            [
              { bold: "Special Rules" },
              ": Officers stacked next to this Scheme are “Hydra Sympathizers.“ You may pay ",
              { bold: "3" },
              { icon: 2 },
              " to have the player of your choice gain one as a Hero."
            ],
            [
              { bold: "Twist" },
              ": For each Twist in the KO pile ",
              { italic: "(including this one)" },
              ", put a card from the S.H.I.E.L.D. Officer stack next to this Scheme. Then this Scheme ",
              { rule: 7, text: "Transforms", keywordStyle: true },
              "."
            ],
          ]
        },
        {
          name: "Open HYDRA Revolution",
          transformed: true,
          dense: true,
          abilities: [
            [
              { bold: "Special Rules" },
              ": Officers next to this Scheme are ",
              { bold: "3" },
              { icon: 1 },
              " “Hydra Traitor“ Villains. When you fight one, return it to the Officer Stack and KO one of your Heroes."
            ],
            [
              { bold: "Twist" },
              ": For each Twist in the KO pile ",
              { italic: "(including this one)" },
              ", put a card from the S.H.I.E.L.D. Officer stack next to this Scheme, Then if Evil hasn't won yet, this Scheme ",
              { rule: 7, text: "Transforms", keywordStyle: true },
              "."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 15 Officers next to this Scheme or the S.H.I.E.L.D. Officer Stack runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 117,
      name: "Korvac Saga, The",
      cards: [
        {
          name: "The Korvac Saga",
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist" },
              ": Each player must discard down to four cards or KO a Bystander from their Victory Pile to “search for the Korvac Entity.“ This Scheme ",
              { rule: 7, text: "Transforms", keywordStyle: true },
              "."
            ],
          ]
        },
        {
          name: "Korvac Revealed",
          transformed: true,
          abilities: [
            [
              { bold: "Special Rules" },
              ": This Scheme counts as a ",
              { bold: "19" },
              { icon: 1 },
              " “Korvac“ Villain worth 9VP. If you defeat Korvac, KO the Mastermind and all its Tactics."
            ],
            [
              { bold: "Twist: 2,4,6" },
              ": Each player discards an ",
              { team: 1 },
              " Hero or gains a Wound. This Scheme ",
              { rule: 7, text: "Transforms", keywordStyle: true },
              "."
            ],
            [
              { bold: "Twist 8" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
  ]
};