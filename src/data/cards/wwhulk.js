export default {
  heroes: [
    {
      name: "Amadeus Cho",
      set: 19,
      team: 18,
      cards: [
        {
          name: "Extrapolate",
          hc: 2,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            [
              {
                keyword: 52
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Gamma-Draining Nanites",
          hc: 5,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Draw a card."
            ],
            [
              "Then, if you drew two cards this turn, ",
              {
                keyword: 51
              },
              " this into Like Totally Smart Hulk."
            ]]
        },
        {
          name: "Like Totally Smart Hulk",
          redSubTitle: "Amadeus Cho, transformed",
          hc: 4,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              {
                keyword: 52
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
          name: "Renegade Genius",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1 "
              },
              {
                icon: 1
              },
              "for each different cost of Hero you have."
            ],
            [
              {
                keyword: 52
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Visualize the Variables",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            [
              "Whenever you use an ",
              {
                keyword: 52
              },
              " ability this turn, you may use it an extra time. "
            ],
            [
              {
                keyword: 52
              },
              ": Look at the top card of your deck. KO it or put it back."
            ]
          ]
        }
      ]
    },
    {
      name: "Bruce Banner",
      set: 19,
      team: 1,
      cards: [
        {
          name: "Solve the Impossible",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              {
                keyword: 52
              },
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Gamma Bomb Disaster",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              {
                keyword: 52
              },
              ": ",
              {
                keyword: 51
              },
              " this into Savage Hulk Unleashed."
            ]
          ]
        },
        {
          name: "Savage Hulk Unleashed",
          redSubTitle: "Bruce Banner, transformed",
          hc: 4,
          rarity: 1,
          cost: 5,
          attack: "0+",
          abilities: [
            [
              {
                keyword: 53
              },
              {
                bold: " 4"
              }
            ]
          ]
        },
        {
          name: "Dangerous Testing",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              {
                hc: 5
              },
              ": Reveal the top card of your deck. If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Gamma Ray Experiment",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              {
                keyword: 52
              },
              ": Look at the top three cards of your deck. Draw one of them, KO one, and put one back."
            ]
          ]
        }
      ]
    },
    {
      name: "Caiera",
      set: 19,
      team: 19,
      cards: [
        {
          name: "Shadow Queen",
          hc: 1,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              {
                keyword: 52
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Shadowforged Blade",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              {
                hc: 1
              },
              ": ",
              {
                keyword: 53
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Focus The Old Power",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "2",
          abilities: [
            [
              {
                keyword: 52
              },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Dutiful Protector",
          hc: 2,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Double the ",
              {
                icon: 2
              },
              " you have."
            ],
            [
              "If there are at least 3 Heroes per player in the KO pile, ",
              {
                keyword: 51
              },
              " this into Vengeful Destructor."
            ]
          ]
        },
        {
          name: "Vengeful Destructor",
          redSubTitle: "Caiera, transformed",
          hc: 4,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Double the ",
              {
                icon: 1
              },
              " you have."
            ]
          ]
        }
      ]
    },
    {
      name: "Gladiator Hulk",
      set: 19,
      team: 19,
      cards: [
        {
          name: "Don't Make Me Angry",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              {
                keyword: 53
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Seize The Throne",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              {
                keyword: 53
              },
              {
                bold: " 3"
              }
            ],
            [
              "Then, if you discarded at least two cards this turn, ",
              {
                keyword: 51
              },
              " this into Hulk Is King and put it on top of your deck."
            ]
          ]
        },
        {
          name: "Hulk Is King",
          redSubTitle: "Gladiator Hulk, transformed",
          hc: 4,
          rarity: 1,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "When a card effect causes you to discard this card, you may return this card to your hand."
            ]
          ]
        },
        {
          name: "The Green Scar",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              {
                hc: 4
              },
              ": ",
              {
                keyword: 18
              }
            ],
            [
              "If any players gained a Wound this way, you get ",
              {
                keyword: 54
              },
              "."
            ]
          ]
        },
        {
          name: "Double-Fisted Smashing",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            [
              "You get double",
              {
                icon: 1
              },
              " from each Smash this turn."
            ],
            [
              {
                keyword: 53
              },
              {
                bold: " 3"
              }
            ]
          ]
        }
      ]
    },
    {
      name: "Hiroim",
      set: 19,
      team: 19,
      cards: [
        {
          name: "Seek Redemption",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              {
                hc: 1
              },
              ": The first time you defeat a Villain this turn, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Save from the Rubble",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "1",
          abilities: [
            [
              "Draw a card.",
            ],
            [
              "If there are at least two Bystanders in your Victory Pile, ",
              {
                keyword: 51
              },
              " this into Hiroim Redeemed."
            ]
          ]
        },
        {
          name: "Hiroim Redeemed",
          redSubTitle: "Hiroim, transformed",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "1+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for every two Bystanders in your Victory Pile."
            ]
          ]
        },
        {
          name: "Mystic Shadow Priest",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "2",
          abilities: [
            [
              {
                team: 19
              },
              ": You may KO a 0-cost card from any player's discard pile. If you KO a Wound this way, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Blade of the People",
          hc: 2,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Choose one: Rescue three Bystanders, or defeat any Villain or Mastermind whose ",
              {
                icon: 1
              },
              " is less than the number of Bystanders in your Victory Pile."
            ]
          ]
        }
      ]
    },
    {
      name: "Hulkbuster Iron Man",
      set: 19,
      team: 1,
      cards: [
        {
          name: "Pound for Pound",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              {
                hc: 5
              },
              ": You get ",
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
          name: "Attune Techtonic Transducer",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              {
                keyword: 52
              },
              ": ",
              {
                keyword: 53
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Build the Suit",
          hc: 5,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              {
                hc: 5
              },
              {
                hc: 4
              },
              ": ",
              {
                keyword: 51
              },
              " this into Ultra-Massive Armor"
            ]
          ]
        },
        {
          name: "Ultra-Massive Armor",
          redSubTitle: "Hulkbuster Iron Man, transformed",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              "Draw two cards."
            ],
            [
              {
                keyword: 53
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Blade of the People",
          hc: 2,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Choose one: Rescue three Bystanders, or defeat any Villain or Mastermind whose ",
              {
                icon: 1
              },
              " is less than the number of Bystanders in your Victory Pile."
            ]
          ]
        }
      ]
    },
    {
      name: "Joe Fixit, Grey Hulk",
      set: 19,
      team: 8,
      cards: [
        {
          name: "Carefully Considered Smashing",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              {
                hc: 4
              },
              ": ",
              {
                keyword: 53
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Threaten And Bribe",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "Choose a Villain. You can spend any combination of",
              {
                icon: 2
              },
              "and",
              {
                icon: 1
              },
              "to fight it this turn."
            ]
          ]
        },
        {
          name: "Ambitious Enforcer",
          hc: 4,
          rarity: 2,
          cost: 6,
          recruit: "3",
          abilities: [
            [
              "When you defeat a Villain this turn that has 6",
              {
                icon: 1
              },
              " or more, ",
              {
                keyword: 51
              },
              " this into Underworld Boss and put it on top of your deck."
            ]
          ]
        },
        {
          name: "Underworld Boss",
          redSubTitle: "Joe Fixit, Grey Hulk, transformed",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              "Choose a Villain in your Victory Pile, You get ",
              {
                bold: "+"
              },
              {
                icon: 1
              },
              " equal to it's printed VP."
            ]
          ]
        },
        {
          name: "Hulk Runs This Town",
          hc: 1,
          rarity: 3,
          cost: 7,
          recruit: "4",
          abilities: [
            [
              "You can spend any combination of",
              {
                icon: 2
              },
              "and",
              {
                icon: 1
              },
              "to fight the Mastermind this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Korg",
      set: 19,
      team: 19,
      cards: [
        {
          name: "Nothing Beats Rock",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              {
                hc: 4
              },
              ": ",
              {
                keyword: 53
              },
              {
                bold: " 2"
              },
              ". If you ",
              {
                keyword: 53
              },
              " a Wound this way, KO it."
            ]
          ]
        },
        {
          name: "Move Mountains",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              {
                keyword: 52
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Forged by Fire",
          hc: 4,
          rarity: 2,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              {
                hc: 4
              },
              {
                hc: 4
              },
              ": ",
              {
                keyword: 51
              },
              " this into Lord of Granite."
            ]
          ]
        },
        {
          name: "Lord of Granite",
          redSubTitle: "Korg, transformed",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              {
                keyword: 53
              },
              {
                bold: " 3"
              }
            ]
          ]
        },
        {
          name: "Kronan Tactician",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            [
              "Put all cards from the HQ on the bottom of the Hero Deck in random order. You get their total printed",
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
      name: "Miek, The Unhived",
      set: 19,
      team: 19,
      cards: [
        {
          name: "This Bug Smashes You",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              {
                keyword: 53
              },
              {
                bold: " 1"
              }
            ]
          ]
        },
        {
          name: "Devouring Frenzy",
          hc: 2,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "Look at the top card of your deck. Put it back on the top or bottom."
            ],
            [
              {
                hc: 2
              },
              ": You may ",
              {
                keyword: 9
              },
              "."
            ]
          ]
        },
        {
          name: "Endless Appetite",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Whenever a card is KO'd from your deck this turn, you may draw a card."
            ]
          ]
        },
        {
          name: "Metamorphosis",
          hc: 1,
          rarity: 3,
          cost: 7,
          recruit: "5",
          abilities: [
            [
              "You may ",
              {
                keyword: 9
              },
              ". Then, if a card with an",
              {
                icon: 1
              },
              "was KO'd from your deck this turn, ",
              {
                keyword: 51
              },
              " this into Hive King Miek."
            ]
          ]
        },
        {
          name: "Hive King Miek",
          redSubTitle: "Miek, The Unhived, transformed",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "Look at the top three cards of your deck and put them back in any order. Then you may ",
              {
                keyword: 9
              },
              "."
            ]
          ]
        }
      ]
    },
    {
      name: "Namora",
      set: 19,
      team: 18,
      cards: [
        {
          name: "Crushing Tsunami",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              {
                hc: 3
              },
              ": ",
              {
                keyword: 53
              },
              {
                bold: " 3"
              }
            ]
          ]
        },
        {
          name: "Heart of the Ocean",
          hc: 1,
          rarity: 1,
          cost: 4,
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
              ", usable only against Villains in the Sewers or Bridge or the Mastermind."
            ]
          ]
        },
        {
          name: "Herculean Effort",
          hc: 3,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              "When you defeat a Villain in the Sewers or Bridge, ",
              {
                keyword: 51
              },
              " this into Master of Depths and put it on top of your deck."
            ]
          ]
        },
        {
          name: "Master of Depths",
          redSubTitle: "Namora, transformed",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              {
                keyword: 53
              },
              {
                bold: " 3"
              }
            ],
            [
              "If you ",
              {
                keyword: 53
              },
              " a 0-cost Hero this way, KO it."
            ]
          ]
        },
        {
          name: "Turning The Tide",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              {
                hc: 1
              },
              ": If the Bridge is empty, you may move a Villain there from another city space. A Villain moved this way gets",
              {
                bold: " -3"
              },
              {
                icon: 1
              },
              " this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "No-Name, Brood Queen",
      set: 19,
      team: 19,
      cards: [
        {
          name: "Surprise Attack",
          hc: 1,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "If this is the first card you played this turn, draw a card."
            ]
          ]
        },
        {
          name: "Appetite for Destruction",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Look at the top card of your deck. Discard it or put it back."
            ],
            [
              {
                hc: 1
              },
              ": You may ",
              {
                keyword: 9
              },
              "."
            ]
          ]
        },
        {
          name: "Bursting with Life",
          hc: 4,
          rarity: 2,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "You may ",
              {
                keyword: 9
              },
              ". Then, if a non-grey Hero was KO'd from your deck this turn, ",
              {
                keyword: 51
              },
              " this into Torrent of Broodlings."
            ]
          ]
        },
        {
          name: "Torrent of Broodlings",
          redSubTitle: "No-Name, Brood Queen, transformed",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "World Spanning Hunger",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              "Look at the top card of your deck. Then ",
              {
                keyword: 9
              },
              " up to three times. You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              " for each non-grey Hero that was KO'd from your deck this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Rick Jones",
      set: 19,
      team: 2,
      cards: [
        {
          name: "Hacktivist",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              {
                hc: 5
              },
              ": Reveal the top card of your deck. If it's a",
              {
                team: 2
              },
              ", draw it."
            ]
          ]
        },
        {
          name: "Seek the Nega-Bands",
          hc: 2,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "Reveal the top card of your deck. If it costs 3 or more, ",
              {
                keyword: 51
              },
              " this into Captain Marvel."
            ]
          ]
        },
        {
          name: "Captain Marvel",
          redSubTitle: "Rick Jones, transformed",
          hc: 3,
          team: 1,
          rarity: 1,
          cost: 5,
          attack: "2",
          abilities: [
            [
              "Reveal the top card of your deck. If it costs 3 or more, draw it."
            ]
          ]
        },
        {
          name: "Irradiated Blood",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "If you have at least 5 Villains in your Victory Pile, ",
              {
                keyword: 51
              },
              " this into A-Bomb and put it on top of your deck."
            ]
          ]
        },
        {
          name: "A-Bomb",
          redSubTitle: "Rick Jones, transformed",
          hc: 4,
          team: 0,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              {
                keyword: 53
              },
              {
                bold: " 5"
              }
            ]
          ]
        },
        {
          name: "Caught in Kree-Skrull War",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "If you defeat two Villains this turn, ",
              {
                keyword: 51
              },
              " this into The Destiny Force and put it on top of your deck."
            ]
          ]
        },
        {
          name: "The Destiny Force",
          redSubTitle: "Rick Jones, transformed",
          hc: 3,
          team: 1,
          rarity: 3,
          cost: 9,
          attack: "0+",
          abilities: [
            [
              "Count the number of different printed VP values in your Victory Pile. Draw that many cards."
            ]
          ]
        }
      ]
    },
    {
      name: "Sentry",
      set: 19,
      team: 1,
      cards: [
        {
          name: "Agoraphobia",
          hc: 1,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              {
                keyword: 51
              },
              " this into Golden Guardian of Good and put it in your discard pile."
            ]
          ]
        },
        {
          name: "Golden Guardian of Good",
          redSubTitle: "Sentry, transformed",
          hc: 4,
          rarity: 1,
          cost: 6,
          recruit: "0+",
          abilities: [
            [
              "You may ",
              {
                keyword: 51
              },
              " this into Agoraphobia and put it in your discard pile. If you do, you get ",
              {
                bold: "+4"
              },
              {
                icon: 1
              },
              "."
            ]
          ]
        },
        {
          name: "Rival Personalities ",
          hc: 4,
          rarity: 1,
          cost: 4,
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
              "for each card that ",
              {
                keyword: 51
              },
              " this turn."
            ]
          ]
        },
        {
          name: "Mournful Sentinel",
          hc: 3,
          rarity: 2,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "Reveal the top card of your deck. If it costs 1 or more, ",
              {
                keyword: 51
              },
              " this into The Void Unchained and put it on top of your deck."
            ]
          ]
        },
        {
          name: "The Void Unchained",
          redSubTitle: "Sentry, transformed",
          team: 0,
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Reveal the top card of your deck. If it costs 0, then ",
              {
                keyword: 9
              },
              ". Otherwise, ",
              {
                keyword: 51
              },
              " this into Mournful Sentinel and put it in your discard pile."
            ]
          ]
        },
        {
          name: "Vast Unstable Power",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "0+",
          smallAbilities: true,
          abilities: [
            [
              "Reveal the top five cards of the Hero Deck, gain their total printed",
              {
                icon: 1
              },
              ", and put them on the bottom of that deck. If this card makes ",
              {
                bold: 12
              },
              {
                icon: 1
              },
              " or more, then ",
              {
                keyword: 51
              },
              " this card into The Void Mastermind and add it to the game at the start of the next turn with one random Tactic."
            ]
          ]
        }
      ]
    },
    {
      name: "She-Hulk",
      set: 19,
      team: 1,
      cards: [
        {
          name: "Hurl Legal Objections",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "Once this turn, if you made at least ",
              {
                bold: "6"
              },
              {
                icon: 2
              },
              "this turn, ",
              {
                keyword: 51
              },
              " this into Hurl Trucks."
            ]
          ]
        },
        {
          name: "Hurl Trucks",
          redSubTitle: "She-Hulk, transformed",
          hc: 4,
          rarity: 1,
          cost: 6,
          attack: "2+",
          abilities: [
            [
              {
                keyword: 53
              },
              {
                bold: " 2"
              }
            ],
            [
              {
                keyword: 53
              },
              {
                bold: " 2"
              }
            ]
          ]
        },
        {
          name: "Window of Opportunity",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              {
                keyword: 51
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Radioactive Riot",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "Once this turn, if you made at least ",
              {
                bold: "6"
              },
              {
                icon: 2
              },
              "this turn, you may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Jade Giantess",
          hc: 4,
          rarity: 3,
          cost: 8,
          recruit: "4",
          attack: "0+",
          abilities: [
            [
              "For every ",
              {
                bold: "2"
              },
              {
                icon: 2
              },
              "you made this turn, Reveal the top card of the Hero Deck, put it on the bottom of that deck, and you get that card's printed",
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
      name: "Skaar, Son of Hulk",
      set: 19,
      team: 1,
      cards: [
        {
          name: "Anger Management ",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            [
              {
                hc:4
              },
              ": ",
              {
                keyword: 53
              } ,
              {
                bold: " 3"
              }
            ]
          ]
        },
        {
          name: "Scarred Past ",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              {
                hc:2
              },
              ": ",
              {
                keyword: 54
              }
            ]
          ]
        },
        {
          name: "Mood Swings",
          hc: 2,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              {
                hc: 2
              },
              ": You may gain a Wound. If you do, ",
              {
                keyword: 51
              },
              " this into Raging Savage."
            ]
          ]
        },
        {
          name: "Raging Savage",
          redSubTitle: "Skaar, Son of Hulk, transformed",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
             {
               keyword: 54
             }
            ]
          ]
        },
        {
          name: "Planetary-Level Revenge",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              {
                keyword:54
              }
            ],
            [
              "Then, you may KO any number of Wounds from your hand and/or discard pile, then draw that many cards."
            ]
          ]
        }
      ]
    }
  ]
};