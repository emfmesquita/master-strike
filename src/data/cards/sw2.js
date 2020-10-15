export default {
  id: 11,
  heroes: [
    {
      id: 85,
      name: "Agent Venom",
      team: 3,
      cards: [
        {
          name: "Multi-Gun",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1+",
          recruit: "1+",
          abilities: [
            [
              { keyword: 18 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " and ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Government Payroll",
          hc: 4,
          hc2: 2,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            { keyword: 7 },
            [
              { keyword: 19, text: "Patrol the Bank" },
              ": If it's empty, you get ",
              { bold: "+2" },
              { icon: 2 },
              ". If it's not, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Big Slimeportunity",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "2",
          recruit: "2",
          abilities: [
            { keyword: 7 },
            [
              { keyword: 19, text: "Patrol the Sewers" },
              ": If it's empty, draw a card."
            ]
          ]
        },
        {
          name: "Shapeshifting Symbiote",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            { keyword: 7 },
            [
              "For each other card you played this turn with a ",
              { icon: 2 },
              " icon, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ],
            [
              "For each other card you played this turn with a ",
              { icon: 1 },
              " icon, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { italic: "(If another card has both " },
              { icon: 2 },
              { italic: " and " },
              { icon: 1 },
              { italic: ", you get both bonuses.)" }
            ]
          ]
        },

      ]
    },
    {
      id: 86,
      name: "Arkon the Magnificent",
      team: 0,
      cards: [
        {
          name: "All-Terrain Barbarian",
          hc: 4,
          hc2: 1,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            { keyword: 7 },
            [
              { keyword: 19, text: "Patrol the Sewers" },
              ": If it's empty, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Quiver of Thunderbolts",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 18 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Warlord of Open Spaces",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { keyword: 19, text: "Patrol two adjacent city spaces" },
              ": If they're both empty, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Lord of Dragons",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Rooftops" },
              ": If it's empty, you get ",
              { bold: "+4" },
              { icon: 2 },
              " and ",
              { bold: "+4" },
              { icon: 1 },
              ". If it's not, defeat the Villain there for free."
            ]
          ]
        },

      ]
    },
    {
      id: 87,
      name: "Beast",
      filterName: "Beast (SW2)",
      team: 15,
      cards: [
        {
          name: "Balanced Attack",
          hc: 4,
          hc2: 5,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "Reveal the top card of your deck. If it's ",
              { hc: 5 },
              " or ",
              { hc: 4 },
              ", draw it."
            ]
          ]
        },
        {
          name: "Upside-down Thinking",
          hc: 4,
          hc2: 5,
          rarity: 1,
          cost: 4,
          abilities: [
            { keyword: 7 },
            [
              { keyword: 19, text: "Patrol any city space" },
              ": If it's empty, then the hero in the HQ space under it costs 3 less this turn."
            ]
          ]
        },
        {
          name: "Doctor of Beatdown",
          hc: 4,
          hc2: 5,
          rarity: 2,
          cost: 6,
          attack: "2+",
          abilities: [
            [
              "For each other ",
              { hc: 4 },
              " card you played this turn, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              "For each other ",
              { hc: 5 },
              " card you played this turn, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Multi-Variable Smackulus",
          hc: 4,
          hc2: 5,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            [
              { hc: 5 },
              { hc: 5 },
              { hc: 4 },
              { hc: 4 },
              ": Draw three cards."
            ]
          ]
        },

      ]
    },
    {
      id: 88,
      name: "Black Swan",
      team: 14,
      cards: [
        {
          name: "Apocalyptic Vision",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { hc: 3 },
              ": Reveal the top card of the Villain Deck. If it's a Scheme Twist, you get ",
              { bold: "+2" },
              { icon: 1 },
              ". Otherwise, put it back on the top or bottom."
            ]
          ]
        },
        {
          name: "Witness the End",
          hc: 2,
          rarity: 1,
          cost: 5,
          recruit: "2",
          abilities: [
            [
              { hc: 2 },
              ": You may KO a card from your hand or discard pile. If you do, draw a card."
            ]
          ]
        },
        {
          name: "Dark Foretelling",
          hc: 2,
          hc2: 3,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "Reveal the top three cards of the Villain Deck. Rescue any Bystanders you revealed, then put the rest back in any order."
            ]
          ]
        },
        {
          name: "Telepathic Control",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          abilities: [
            [
              "Reveal the top five cards of the Villain Deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the printed ",
              { icon: 4 },
              " of one of those cards. Put them back in any order."
            ],
            [
              { team: 14 },
              ": Instead, you get ",
              { bold: "+" },
              { icon: 1 },
              " for two of those cards."
            ]
          ]
        },

      ]
    },
    {
      id: 89,
      name: "Captain and the Devil, The",
      team: 1,
      cards: [
        {
          name: "Jurassic America",
          hc: 4,
          hc2: 5,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            [
              { keyword: 18 },
              ": you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Patriotic Chomp",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 18 },
              ": you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Feeding Grounds",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Streets" },
              ": If it's empty, you may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Dino-Roar of Triumph",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "Whenever you defeat a Villain this turn, each Villain and Mastermind adjacent to it gets ",
              { bold: "-2" },
              { icon: 1 },
              " this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 90,
      name: "Captain Britain",
      team: 15,
      cards: [
        {
          name: "Transatlantic Savior",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each different team icon among your heroes."
            ]
          ]
        },
        {
          name: "Combined Strength",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each different team icon among your heroes."
            ]
          ]
        },
        {
          name: "Raise the Union Jack",
          hc: 4,
          hc2: 1,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Rooftops" },
              ": If it's empty, reveal the top two cards of your deck. If they have different team icons, draw them. Otherwise, put them back in any order."
            ]
          ]
        },
        {
          name: "Lead the Captain Britain Corps",
          hc: 4,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "When you draw a new hand of cards at the end of this turn, draw three extra cards."
            ]
          ]
        },

      ]
    },
    {
      id: 91,
      name: "Corvus Glaive",
      team: 14,
      cards: [
        {
          name: "Let None Escape You",
          hc: 4,
          hc2: 2,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          attack: "0+",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Escape Pile" },
              ": If there are none Bystanders in it, you get ",
              { bold: "+2" },
              { icon: 1 },
              ". Otherwise, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Culling Blade",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "KO a Bystander from the Bystander Deck. If it's a Special Bystander, you may use its Rescue effect."
            ]
          ]
        },
        {
          name: "Rictus Grin",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { team: 14 },
              ": KO a Bystander from the Bystander Stack. Then, you get ",
              { bold: "+1" },
              { icon: 1 },
              " for every four Bystanders in the KO Pile."
            ]
          ]
        },
        {
          name: "Atom-Splitting Glaive",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [
              { team: 14 },
              ": You may KO a Bystander from the Escape Pile and from each player's Victory Pile. You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander KO'd this way."
            ]
          ]
        },

      ]
    },
    {
      id: 92,
      name: "Dr. Punisher, Soldier Supreme",
      team: 6,
      cards: [
        {
          name: "Sweep the Streets of Trash",
          hc: 5,
          hc2: 3,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Streets" },
              ": If it's empty, draw a card."
            ]
          ]
        },
        {
          name: "You're a Slow Learner",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 5 },
              ": Reveal the top card of your deck. If it costs 0, KO it and you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Ice Magic",
          hc: 3,
          rarity: 2,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "Reveal the top card of the Villain Deck. If it's a Villain, you may fight it this turn."
            ],
            [
              { hc: 3 },
              { hc: 3 },
              ": You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that Villain's printed ",
              { icon: 4 },
              "."
            ]
          ]
        },
        {
          name: "Calm Before the Storm",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              { keyword: 19, text: "Patrol every city space" },
              ": For each space that's empty, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 93,
      name: "Elsa Bloodstone",
      team: 2,
      cards: [
        {
          name: "Monster Hunter",
          hc: 1,
          hc2: 5,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Sewers" },
              ": If it's empty, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Bloodstone Pendant",
          hc: 2,
          rarity: 1,
          cost: 5,
          recruit: "2+",
          abilities: [
            [
              { keyword: 18 },
              ": You may KO a card from your hand or discard pile. If you do, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Defend the S.H.I.E.L.D. Wall",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              { keyword: 7 }
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other ",
              { team: 2 },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Prodigy of Ulysses Bloodstone",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [
              { keyword: 18 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 94,
      name: "Phoenix Force Cyclops",
      team: 4,
      cards: [
        {
          name: "Reincarnate",
          hc: 1,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "KO this card. Gain a hero from the S.H.I.E.L.D. Officer stack or HQ that costs 4 or less and put it into your hand."
            ]
          ]
        },
        {
          name: "Burn Out",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You may KO this card. If you do, you gain ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Rise from the Ashes",
          hc: 2,
          hc2: 3,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "Gain a Hero that was KO'd this turn."
            ]
          ]
        },
        {
          name: "Destruction Is Creation",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            [
              "KO up to three cards from your hand. Draw that many cards."
            ]
          ]
        },

      ]
    },
    {
      id: 95,
      name: "Ruby Summers",
      team: 4,
      cards: [
        {
          name: "Guerrilla Warfare",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              "When a card effect causes you to discard this card, if it is your turn, ",
              { keyword: 1 },
              " it instead. If it is not your turn, set it aside and add it to your hand at the end of this turn."
            ]
          ]
        },
        {
          name: "Heir to Legends",
          hc: 4,
          hc2: 3,
          rarity: 1,
          cost: 5,
          attack: "2",
          recruit: "2",
          abilities: [
            [
              "To play this card, you must discard a card from your hand."
            ]
          ]
        },
        {
          name: "Form of Solid Ruby ",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4",
          recruit: "0+",
          abilities: [
            [
              { team: 4 },
              ": Whenever you defeat a villain or mastermind this turn, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Extinction Blast",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "10",
          abilities: [
            [
              "To play this card, you must discard three cards from your hand."
            ]
          ]
        },

      ]
    },
    {
      id: 96,
      name: "Shang-Chi",
      team: 6,
      cards: [
        {
          name: "Shuffling Footwork",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 2 },
              ": You may shuffle your discard pile into your deck."
            ]
          ]
        },
        {
          name: "Acrobatic Kung-Fu",
          hc: 2,
          hc2: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 7 },
            [
              { keyword: 19, text: "Patrol the Rooftops" },
              ": If it's empty, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Seek the Empty Mind",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { keyword: 19, text: "Patrol your discard pile" },
              ": If it's empty, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Muscle Memory",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            { keyword: 7 },
            [
              "Any time you are shuffling your deck with this card in it, you may set this card aside and put it on top of your deck at the end of the shuffle."
            ]
          ]
        }
      ]
    },
    {
      id: 97,
      name: "Silk",
      team: 3,
      cards: [
        {
          name: "Long-Range Spider-Sense",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "2",
          abilities: [
            [
              { keyword: 18 },
              ": Reveal the top card of your deck. If it costs 2 or less, draw it."
            ]
          ]
        },
        {
          name: "Cascading Maneuver",
          hc: 4,
          hc2: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            { keyword: 7 },
            [
              { keyword: 18 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Silk Stalking",
          hc: 1,
          rarity: 2,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { team: 3 },
              ": Reveal the top card of your deck. If it costs 0, KO it. If it costs 1 or 2, draw it."
            ]
          ]
        },
        {
          name: "Borrowed Cloaking Device",
          hc: 5,
          rarity: 3,
          cost: 2,
          attack: "1",
          abilities: [
            { keyword: 7 },
            [
              { keyword: 18 },
              ": Reveal the top four cards of your deck. Put any combination of those cards with a total cost of 2 or less into your hand. But the rest back in any order."
            ]
          ]
        }
      ]
    },
    {
      id: 98,
      name: "Soulsword Colossus",
      team: 4,
      cards: [
        {
          name: "Invade the Inferno",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 1 },
              ": Once this turn, you may fight the top card of the Bystander Stack as if it were a ",
              { bold: "3" },
              { icon: 1 },
              " Demon Villain with “",
              { bold: "Fight" },
              ": KO one of your heroes.“"
            ]
          ]
        },
        {
          name: "Steel Interception",
          hc: 4,
          hc2: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "If a player would gain a Wound, you may discard this card instead. If you do, draw two cards."
            ]
          ]
        },
        {
          name: "Possessed by the Soulsword",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { hc: 4 },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Colossus Rampage" },
              ". You get ",
              { bold: "+2" },
              { icon: 1 },
              " if at least one other player didn't reveal a Colossus card."
            ]
          ]
        },
        {
          name: "Rescue My Family from Hell",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { team: 4 },
              ": You may gain an ",
              { team: 4 },
              " Hero from the HQ or the KO pile to your hand."
            ]
          ]
        }
      ]
    },
    {
      id: 99,
      name: "Spider-Gwen",
      team: 3,
      cards: [
        {
          name: "Fateful Bridge",
          hc: 2,
          hc2: 5,
          rarity: 1,
          cost: 2,
          attack: "2",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Bridge" },
              ": If it's empty, reveal the top card of your deck. If that card costs 2 or less, draw it."
            ]
          ]
        },
        {
          name: "Save the Day",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Rooftops" },
              ": If it's empty, rescue a Bystander, and then you get ",
              { bold: "+1" },
              { icon: 1 },
              " for every two Bystanders in your Victory Pile."
            ]
          ]
        },
        {
          name: "First Adventure",
          hc: 4,
          rarity: 2,
          cost: 2,
          attack: "1+",
          abilities: [
            { keyword: 7 },
            [
              { keyword: 19, text: "Patrol the Bank" },
              ": If it's empty, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { keyword: 19, text: "Patrol your Victory Pile" },
              ": If it's empty, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Intertwining Webs",
          hc: 1,
          rarity: 3,
          cost: 2,
          attack: "0+",
          abilities: [
            { keyword: 7 },
            [
              "Reveal the top three cards of your deck, then put them back in any order. You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you revealed that costs 2 or less."
            ]
          ]
        }
      ]
    },
    {
      id: 100,
      name: "Time-Traveling Jean Grey",
      team: 4,
      cards: [
        {
          name: "Throw Over the Railing",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { hc: 1 },
              ": Choose a Villain on the Rooftops or Bridge. It gets ",
              { bold: "-2" },
              { icon: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "Bridge to a Better Future",
          hc: 2,
          rarity: 1,
          cost: 4,
          abilities: [
            [
              { keyword: 19, text: "Patrol the Bridge" },
              ": If it's empty, then when you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Telekinesis",
          hc: 1,
          hc2: 3,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "You may move a villain to an adjacent city space. If another Villain is already there, swap them."
            ]
          ]
        },
        {
          name: "Change History",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { team: 4 },
              ": ",
              { keyword: 19, text: "Patrol any city space" },
              ": If it's empty, gain the hero in the HQ space under it. Put that hero on top of your deck."
            ]
          ]
        }
      ]
    },
  ],
  masterminds: [
    {
      id: 25,
      name: "Immortal Emperor Zheng-Zhu",
      tacticName: "Zheng-Zhu",
      vAttack: "7+",
      vp: 5,
      cards: [
        {
          name: "Immortal Emperor Zheng-Zhu",
          abilities: [
            [
              { keyword: 20, text: "7th Circle of Kung-Fu" }
            ],
            [
              { bold: "Always Leads" },
              ": K'un-Lun"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals a Hero that costs 7 or more, or they discard down to 3 cards."
            ]
          ]
        },
        {
          name: "Ultimate Kung-Fu Mastery",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a card with “",
              { keyword: 20, text: "Circle of Kung-Fu" },
              "“ from their Victory Pile or gains a Wound."
            ]
          ]
        },
        {
          name: "Emperor's Justice",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { team: 6 },
              " Hero or gains a Wound.",
            ]
          ]
        },
        {
          name: "Humble the Pretenders",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { team: 6 },
              " Hero or discards a card that costs less than 7.",
            ]
          ]
        },
        {
          name: "Imperial Edict",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose any number of Heroes from the HQ. Put them on the bottom of the Hero Deck in random order."
            ]
          ]
        }
      ]
    },
    {
      id: 26,
      name: "King Hyperion",
      tacticName: "Hyperion",
      vAttack: "12",
      vp: 6,
      cards: [
        {
          name: "King Hyperion",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Utopolis"
            ],
            [
              { bold: "Master Strike" },
              ": King Hyperion enters the city if he was not already there. Then, he ",
              { keyword: 22, text: "charges" },
              " three spaces."
            ],
            [
              { bold: "Escape" },
              ": Each player gains a wound. Put King Hyperion on the Mastermind space."
            ]
          ]
        },
        {
          name: "Worshipped by Millions",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If King Hyperion is in the city, put him back on the Mastermind space and shuffle this Tactic back into his Tactics. If you do, rescue six Bystanders."
            ]
          ]
        },
        {
          name: "Royal Treasury",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If King Hyperion is in the city, put him back on the Mastermind space and shuffle this Tactic back into his Tactics. If you do, you get ",
              { bold: "+5" },
              { icon: 2 },
              ".",
            ]
          ]
        },
        {
          name: "Monarch of Utopolis",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If King Hyperion is in the city, put him back on the Mastermind space and shuffle this Tactic back into his Tactics. If you do, when you drew a new hand of cards at the end of this turn, draw three extra cards.",
            ]
          ]
        },
        {
          name: "Rule with an Iron Fist",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If King Hyperion is in the city, put him back on the Mastermind space and shuffle this Tactic back into his Tactics. If you do, you may defeat a Villain in the city for free."
            ]
          ]
        }
      ]
    },
    {
      id: 27,
      name: "Shiklah, the Demon Bride",
      tacticName: "Shiklah",
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "Shiklah, the Demon Bride",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Monster Metropolis"
            ],
            [
              { bold: "Master Strike" },
              ": Reveal the top three cards of the Villain Deck. Put all the Scheme Twists you revealed on top of the Villain Deck. Put the rest on the bottom of that deck in random order."
            ]
          ]
        },
        {
          name: "Shiklah's Husband, Deadpool",
          hc: 1,
          attack: "5+",
          overrideType: 1,
          tactic: true,
          vp: -1,
          subTitle: "Mastermind Tactic - Shiklah",
          abilities: [
            [
              { bold: "Fight" },
              ": Gain this as a Hero.",
            ],
            { divider: true },
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero with an odd-numbered cost you played this turn. ",
              { italic: "(0 is even.)"}
            ]
          ]
        },
        {
          name: "Enslavement Beam",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 21 },
              ". If she resurrects, rescue four bystanders."
            ]
          ]
        },
        {
          name: "Drain Life",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 21 },
              ". If she resurrects, defeat a Villain in the city for free."
            ]
          ]
        },
        {
          name: "Infernal Power",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 21 },
              ". If she resurrects, draw two cards."
            ]
          ]
        }
      ]
    },
    {
      id: 28,
      name: "Spider-Queen",
      vAttack: "8+",
      vp: 6,
      cards: [
        {
          name: "Spider-Queen",
          abilities: [
            [
              "Spider-Queen gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in the Escape pile."
            ],
            [
              { bold: "Always Leads" },
              ": Spider-Infected"
            ],
            [
              { bold: "Master Strike" },
              ": Each player puts a Spider-Infected from their Victory Pile into an empty city space. Any player who cannot do so gains a Wound."
            ]
          ]
        },
        {
          name: "Sonic Scream",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top eight cards of the Villain Deck. Put all the Bystanders you revealed into the Escape pile. Put the rest on the bottom of the Villain Deck in random orders."
            ]
          ]
        },
        {
          name: "Infect the Entire City",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put a Bystander from the Bystander Deck into the Escape Pile. Then, each Spider-Infected in the city captures a Bystander.",
            ]
          ]
        },
        {
          name: "Control Arachnid Genes",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may gain a ",
              { team: 3 },
              " Hero from the HQ."
            ]
          ]
        },
        {
          name: "Web the Skyscrapers",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { team: 3 },
              " Hero or puts a Bystander from their Victory Pile into the Escape pile."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 16,
      name: "Khonshu Guardians",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              "While in the Sewers, Rooftops or Bridge, this is in “wolf form“ and gets ",
              { bold: "+2" },
              { icon: 1 },
              "."
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
      id: 17,
      name: "Magma Men",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ],
            { keyword: 21 }
          ]
        },
      ]
    },
    {
      id: 18,
      name: "Spider-Infected",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Ambush" },
              ": This captures a Bystander."
            ],
            [
              { bold: "Fight" },
              ": The next Hero you gain this turn has ",
              { keyword: 7 },
              "."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 34,
      name: "Deadpool's Secret Secret Wars",
      cards: [
        {
          name: "Deadpool",
          qtd: 1,
          vAttack: "5+",
          vp: "5",
          abilities: [
            { keyword: 20, text: "5th Circle of Kung-Fu" },
            [
              {
                bold: "Fight"
              },
              ": ",
              { keyword: 21 }
            ],
            [
              {
                bold: "Escape"
              },
              ": Deadpool ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability, “",
              { bold: "Master Strike" },
              ": Each player reveals a Hero with an odd-numbered cost or gains a Wound.“ (0 is even.)"
            ]
          ]
        },
        {
          name: "Doop",
          qtd: 2,
          vAttack: "2",
          vp: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              "You can't fight Doop if there is a Villain in an adjacent city space."
            ]
          ]
        },
        {
          name: "Howard the Duck",
          qtd: 2,
          vAttack: "1+",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Howard the Duck captures ",
              { italic: "(the heart of)" },
              " a Bystander."
            ],
            { keyword: 20, text: "7th Circle of Quack-Fu" }
          ]
        },
        {
          name: "Pink Sphinx",
          qtd: 3,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": ",
              { keyword: 18 },
              ": KO one of your Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 35,
      name: "Guardians of Knowhere",
      cards: [
        {
          name: "Angela",
          qtd: 1,
          vAttack: "7",
          vp: "5",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": ",
              { keyword: 21 }
            ],
            [
              {
                bold: "Escape"
              },
              ": Angela ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". She gains the ability, “",
              { bold: "Master Strike" },
              ": Each player KOs a Hero from their discard pile that costs 1 or more.“"
            ]
          ]
        },
        {
          name: "Drax the Destroyer",
          qtd: 2,
          vAttack: "5",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Reveal the top card of your deck. KO it or put it back. ",
              { keyword: 21 },
              "."
            ]
          ]
        },
        {
          name: "Gamora",
          qtd: 1,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 22 },
              " one space."
            ],
            [
              {
                bold: "Fight"
              },
              ": ",
              { italic: "(After this goes to your Victory Pile) " },
              { keyword: 19, text: "Patrol the Sewers" },
              ": If it's empty, each other player gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player gains a Wound."
            ]
          ]
        },
        {
          name: "Groot",
          qtd: 2,
          vAttack: "5",
          vp: "4",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": ",
              { keyword: 21 },
              ". If Groot resurrects this way, then he becomes Tiny Dancing Groot with ",
              { bold: "1" },
              { icon: 1 },
              " and no abilities for the rest of the turn."
            ]
          ]
        },
        {
          name: "Rocket Raccoon",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": ",
              { italic: "(After this goes to your Victory Pile) " },
              { keyword: 19, text: "Patrol the Bank" },
              ": If it's empty, draw a card. If it's not empty, KO one of your Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 36,
      name: "K'un-Lun",
      cards: [
        {
          name: "Laughing Skull",
          qtd: 2,
          vAttack: "5+",
          vp: "5",
          abilities: [
            { keyword: 20, text: "5th Circle of Kung-Fu" },
            [
              {
                bold: "Escape"
              },
              ": Each player reveals a Hero that costs 5 or more, or they discard a card."
            ]
          ]
        },
        {
          name: "Rand K'ai",
          qtd: 2,
          vAttack: "6+",
          vp: "6",
          abilities: [
            { keyword: 20, text: "6th Circle of Kung-Fu" },
            [
              {
                bold: "Escape"
              },
              ": Each player reveals a Hero that costs 6 or more, or they gain a Wound."
            ]
          ]
        },
        {
          name: "Razor Fist",
          qtd: 2,
          vAttack: "3+",
          vp: "3",
          abilities: [
            { keyword: 20, text: "3rd Circle of Kung-Fu" },
            [
              {
                bold: "Fight"
              },
              ": For each of your Heroes that costs 3, KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Red Sai",
          qtd: 2,
          vAttack: "4+",
          vp: "4",
          abilities: [
            { keyword: 20, text: "4th Circle of Kung-Fu" },
            [
              {
                bold: "Fight"
              },
              ": Draw a card for each of your Heroes that costs 4."
            ]
          ]
        }
      ]
    },
    {
      id: 37,
      name: "Monster Metropolis",
      cards: [
        {
          name: "Bug, Shiklah's Dragon",
          qtd: 2,
          vAttack: "4",
          vp: "3",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO a card from your discard pile.",
            ],
            { keyword: 21 }
          ]
        },
        {
          name: "Ghost Deadpool",
          qtd: 2,
          vAttack: "5",
          vp: "5",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": ",
              { keyword: 21 },
              ". Then, ",
              { keyword: 17, text: "Cross-Dimensional Deadpool Rampage" },
              "."
            ],
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Deadpool Rampage" },
              "."
            ]
          ]
        },
        {
          name: "Man-Thing",
          qtd: 2,
          vAttack: "5",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each Monster Metropolis Villain captures a Bystander."
            ],
            [
              {
                bold: "Fight"
              },
              ": ",
              { keyword: 21 }
            ]
          ]
        },
        {
          name: "Marcus Symbiote Centaur",
          qtd: 2,
          vAttack: "3+",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 22 },
              " two spaces."
            ],
            [
              "When in the Sewers, Rooftops or Bridge, he is in “wolf form“ and gets ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 38,
      name: "Utopolis",
      cards: [
        {
          name: "Doctor Spectrum",
          qtd: 3,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 22 },
              " one space."
            ],
            [
              {
                bold: "Fight"
              },
              ": ",
              { keyword: 18 },
              ": KO a card from your discard pile."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player who doesn't have ",
              { keyword: 18 },
              " discards a card."
            ]
          ]
        },
        {
          name: "Nighthawk",
          qtd: 2,
          vAttack: "4+",
          vp: "4",
          abilities: [
            [
              "While in the Sewers, Rooftops or Bridge, Nighthawk gains ",
              { bold: "+4" },
              { icon: 1 },
              "."
            ],
            [
              {
                bold: "Escape"
              },
              ": Nighthawk becomes a Scheme Twist that takes effect immediately."
            ]
          ]
        },
        {
          name: "Warrior Woman",
          qtd: 1,
          vAttack: "8",
          vp: "6",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 22 },
              " one space."
            ],
            [
              {
                bold: "Escape"
              },
              ": Warrior Woman ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". She gains the ability, “",
              { bold: "Master Strike" },
              ": ",
              { keyword: 19, text: "Patrol the Bank" },
              ": If there's a Villain there, each player discards a card with a ",
              { icon: 2 },
              " icon.“"
            ]
          ]
        },
        {
          name: "Whizzer",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 22 },
              " three spaces."
            ],
            [
              {
                bold: "Fight"
              },
              ": ",
              { italic: "(After this goes to your Victory Pile) " },
              { keyword: 19, text: "Patrol the Bridge" },
              ": If there's a Villain there, each other player gains a Wound."
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
    },
    {
      id: 39,
      name: "X-Men '92",
      cards: [
        {
          name: "'92 Beast",
          qtd: 2,
          vAttack: "5",
          hc: 4,
          team: 4,
          overrideType: 1,
          attack: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": ",
              { keyword: 22 },
              " one space."
            ],
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            { divider: true },
            [
              { hc: 5 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "'92 Jubilee",
          qtd: 3,
          vAttack: "4",
          hc: 3,
          team: 4,
          overrideType: 1,
          attack: "2+",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            { divider: true },
            [
              { keyword: 18 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "'92 Professor X",
          qtd: 1,
          vAttack: "8+",
          vp: "6",
          abilities: [
            [
              {
                bold: "Escape"
              },
              ": '92 Professor X ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability, “",
              { bold: "Master Strike" },
              ": Stack the two heroes from the HQ with the highest cost next to '92 Professor X. He gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero stacked there. Players can recruit the top card of the stack.“"
            ]
          ]
        },
        {
          name: "'92 Wolverine",
          qtd: 2,
          vAttack: "7",
          hc: 2,
          overrideType: 1,
          attack: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            [
              {
                bold: "Escape"
              },
              ": ",
              { keyword: 17, tex: "Cross-Dimensional Wolverine Rampage" }
            ],
            { divider: true },
            [
              { hc: 2 },
              ": Draw two cards."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 48,
      name: "Deadlands Hordes Charge the Wall",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Add an extra Villain Group."
            ],
            [
              { bold: "Twist" },
              ": Each Villain simultaneously ",
              { keyword: 22, text: "charges" },
              " two spaces. Play another card from the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When the number of escaped Villains equals the number of players plus 6."
            ],
          ]
        },
      ]
    },
    {
      id: 49,
      name: "Enthrone the Barons of Battleworld",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twists 1-7" },
              ": The Villain in the city or Escape Pile with the highest printed ",
              { icon: 1 },
              " ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". It gets ",
              { bold: "+2" },
              { icon: 1 },
              ". It gains the ability “",
              { bold: "Master Strike" },
              ": Each Player discards a card with cost equal to this Mastermind's printed ",
              { icon: 4 },
              ".“ ",
              { italic: "(Keep them separate from any Villains who ascend through Escape effects.)" }
            ],
            [
              { bold: "Twist 8" },
              ": The Villain in each player's Victory Pile with the highest printed ",
              { icon: 1 },
              " ascends the same way."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 6 Masterminds."
            ],
          ]
        },
      ]
    },
    {
      id: 50,
      name: "Fountain of Eternal Life, The",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. (1 player: 4 Twists.)"
            ],
            [
              { bold: "Special Rules" },
              ": All Villains and Mastermind Tactics have “",
              { bold: "Fight" },
              ": ",
              { keyword: 21 },
              ".“"
            ],
            [
              { bold: "Twist" },
              ": A Villain from your Victory Pile enters the Sewers. Put this Twist on the bottom of the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When the number of escaped Villains is 3 times the number of players."
            ],
          ]
        },
      ]
    },
    {
      id: 51,
      name: "God-Emperor of Battleworld, The",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist 1" },
              ":This Scheme ascends to becomes a new ",
              { bold: "9" },
              { icon: 1 },
              " ",
              { rule: 3, text: "“God-Emperor“ Mastermind" },
              " worth ",
              { bold: "9" },
              { icon: 4 },
              ". It has “",
              { bold: "Master Strike" },
              ": Each player with exactly six cards in hand reveals a ",
              { hc: 5 },
              "Hero or puts two cards from their hand on top of their deck.“"
            ],
            [
              { bold: "Twist 2-6" },
              ": Stack this Twist next to the Scheme. The God-Emperor gets another ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Twist 7" },
              ": If the God-Emperor lives, it KOs all other Masterminds."
            ],
            [
              { bold: "Twist 8" },
              ": Evil wins! ",
              { italic: "(If any Mastermind still lives.)" }
            ],
          ]
        },
      ]
    },
    {
      id: 52,
      name: "Mark of Khonshu, The",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 10 Twists. Always include Khonshu Guardians. Add all fourteen cards for an extra Hero to the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Heroes in the Villain Deck are “Khonshu Guardian“ Villains with ",
              { icon: 1 },
              " equal to their printed cost. While in the Sewers, Rooftops, or Bridge, they are in “wolf form“ and have double their ",
              { icon: 1 },
              ". When you defeat one, gain it as a Hero."
            ],
            [
              { bold: "Twist" },
              ": Play two cards from the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When 7 Khonshu Guardians escape ",
              { italic: "(includes both Villain and Henchman)" },
              "."
            ],
          ]
        },
      ]
    },
    {
      id: 53,
      name: "Master the Mysteries of Kung-Fu",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme."
            ],
            [
              { bold: "Special Rules" },
              ": Villains and the Mastermind have the ",
              { keyword: 20, text: "Circle of Kung-Fu" },
              " matching the number of Twists stacked here."
            ],
            [
              { bold: "Evil Wins" },
              ": When the number of escaped Villains is double the number of players."
            ],
          ]
        },
      ]
    },
    {
      id: 54,
      name: "Secret Wars",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twists 1-3" },
              ": Add ",
              { rule: 3, text: "another random Mastermind" },
              " to the game with one Tactic."
            ],
            [
              { bold: "Twist 8" },
              ": Evil wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 55,
      name: "Sinister Ambitions",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. Add 10 random Ambition cards to the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Ambition cards are Villains with their printed ",
              { icon: 1 },
              ". Add ",
              { bold: "+1" },
              { icon: 1 },
              " for each Twist stacked next to the Scheme. They are worth ",
              { bold: "4" },
              { icon: 4 },
              ". Whenever an Ambition Villain escapes, do its Ambition effect."
            ],
            [
              { bold: "Twist 1-5" },
              ": Stack this Twist next to the Scheme. Play another card from the Villain Deck."
            ],
            [
              { bold: "Twist 6" },
              ": Each Ambition Villain in the city escapes."
            ],
            [
              { bold: "Evil Wins" },
              ": When 4 Ambition Villains escape."
            ],
          ]
        },
      ]
    },
  ]
}