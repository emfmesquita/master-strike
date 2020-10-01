export default {
  heroes: [
    {
      id: 85,
      name: "Agent Venom",
      set: 11,
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
          dense: true,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
      set: 11,
      vAttack: "8+",
      vp: 6,
      cards: [
        {
          name: "Spider-Queen",
          dense: true,
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
      set: 11,
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
      set: 11,
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
      set: 11,
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
  ]
}