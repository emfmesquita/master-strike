export default {
  heroes: [
    {
      id: 198,
      name: "Beta Ray Bill",
      set: 26,
      team: 21,
      cards: [
        {
          name: "Hope of the Korbinites",
          hc: 4,
          rarity: 1,
          cost: 1,
          recruit: "2",
          abilities: [
            "To play this, you must discard a card.",
            [
              "Then, if you are ",
              { keyword: 63 },
              ", draw a card."
            ]
          ]
        },
        {
          name: "Bio-Engineered Cyborg",
          hc: 5,
          rarity: 1,
          cost: 5,
          attack: "3",
          abilities: [
            "You may discard a card. If you do, draw a card."
          ]
        },
        {
          name: "Stormbreaker",
          hc: 3,
          rarity: 2,
          cost: 4,
          dense: true,
          abilities: [
            [
              "You cannot throw Stormbreaker unless you are ",
              { keyword: 63 },
              "."
            ],
            [
              { keyword: 14 },
              " — To throw this, you must discard a card from your hand. Then you get ",
              { bold: "+2" },
              { icon: 1 },
              " for each card you discarded from your hand this turn."
            ]
          ]
        },
        {
          name: "The Warship Skuttlebutt",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            [
              "You may discard a card. Then count the number of cards you discarded from your hand this turn. Draw that many cards."
            ]
          ]
        },

      ]
    },
    {
      id: 199,
      name: "Lady Sif",
      set: 26,
      team: 21,
      cards: [
        {
          name: "Dimensional Blade",
          hc: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              { keyword: 14 },
              " — When you throw this you get ",
              { bold: "+1" },
              { icon: 2 },
              " and ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ]
          ]
        },
        {
          name: "Weapons Master",
          hc: 2,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "If you control any Artifacts, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Winged Helm",
          hc: 4,
          rarity: 2,
          cost: 3,
          abilities: [
            [
              { keyword: 14 },
              " — You may throw this to get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              "During any player's turn, if a player would gain a Wound, you may throw this to prevent that Wound and draw two cards instead."
            ]
          ]
        },
        {
          name: "Golden Apples of Idunn",
          hc: 1,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              { keyword: 14 },
              " — When you throw this, you get ",
              { bold: "+4" },
              { icon: 1 },
              " and you may KO a card from your hand or discard pile."
            ]
          ]
        },

      ]
    },
    {
      id: 200,
      name: "Thor",
      filterName: "Thor (HoA)",
      set: 26,
      team: 21,
      cards: [
        {
          name: "Test of Virtue",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "2",
          abilities: [
            [
              "If you are ",
              { keyword: 63 },
              ", you get ",
              { bold: "+2" },
              { icon: 1 },
              ".",
            ]
          ]
        },
        {
          name: "Divine Lightning",
          hc: 3,
          rarity: 1,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other card you played this turn that makes you ",
              { keyword: 63 },
              "."
            ]
          ]
        },
        {
          name: "Mjolnir",
          hc: 4,
          rarity: 2,
          cost: 4,
          abilities: [
            [
              "You cannot throw Mjolnir unless you are ",
              { keyword: 63 },
              "."
            ],
            [
              { keyword: 14 },
              " — When you throw this, you get ",
              { bold: "+3" },
              { icon: 1 },
              ", then you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { hc: 3 },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Royal Decree",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "5",
          abilities: [
            [
              { team: 21 },
              ": Each player who is ",
              { keyword: 63 },
              " draws a card. Each Villain that isn't worth at least 5VP gets ",
              { bold: "-1" },
              { icon: 1 },
              " this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 201,
      name: "Valkyrie",
      set: 26,
      team: 21,
      cards: [
        {
          name: "Dragonfang",
          hc: 4,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              { keyword: 14 },
              " — When you throw this, you get ",
              { keyword: 49, text: "Sewers Conqueror 2" },
              ".",
            ]
          ]
        },
        {
          name: "Flying Stallion",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 49, text: "Rooftops Conqueror 1" },
            [
              "When an Ambush ability is played, before it takes effect, you may discard this card. If you do, draw two extra cards at the end of this turn."
            ]
          ]
        },
        {
          name: "Usher to Valhalla",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "2+",
          abilities: [
            { keyword: 49, text: "Bridge Conqueror 1" },
            [
              { team: 21 },
              ": The first time you defeat a Villain this turn, you may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "Ride of the Valkyries",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            { keyword: 49, text: "Streets Conqueror 1" },
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for every 4 Heroes in the KO pile."
            ]
          ]
        },

      ]
    },
    {
      id: 202,
      name: "Warriors Three, The",
      set: 26,
      team: 21,
      cards: [
        {
          name: "Fandral the Dashing",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            "You may move a Villain to an adjacent city space. If another Villain is already there, swap them.",
            [
              { hc: 1 },
              ": Draw a card.",
            ]
          ]
        },
        {
          name: "Hogun the Grim",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              { hc: 4 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Volstagg the Valiant",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            { keyword: 49, text: "Bridge Conqueror 1" },
            [
              { hc: 2 },
              ": Instead, ",
              { keyword: 49, text: "Bridge Conqueror 3" },
            ]
          ]
        },
        {
          name: "Three Stand as One",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              "If you played at least three other non-grey Heroes with different card names this turn, you get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
            [
              { team: 21 },
              ": ",
              { keyword: 49, text: "Streets Conqueror 3" }
            ]
          ]
        },

      ]
    },
  ],
  masterminds: [
    {
      id: 67,
      name: "Hela, Goddess of Death",
      tacticName: "Hela",
      set: 26,
      attack: "10",
      vp: 6,
      cards: [
        {
          name: "Hela, Goddess of Death",
          attack: "10+",
          dense: true,
          abilities: [
            { keyword: 49, text: "Bridge Conqueror 5, Streets Conqueror 5" },
            [
              { bold: "Always Leads" },
              ": Omens of Ragnarok"
            ],
            [
              { bold: "Master Strike" },
              ": This Strike enters the city as a ",
              { bold: "5" },
              { icon: 1 },
              " “Army of the Dead“ Villain worth 3VP. Then choose a Villain worth 3VP or more from your Victory Pile ",
              { italic: "(including an Army of the Dead)" },
              " to enter the city. If you didn't have any, each player gains a Wound."
            ]
          ]
        },
        {
          name: "Epic Hela, Goddess of Death",
          attack: "12+",
          epic: true,
          dense: true,
          abilities: [
            { keyword: 49, text: "Bridge Conqueror 6, Streets Conqueror 6, Rooftops Conqueror 6" },
            [
              { bold: "Always Leads" },
              ": Omens of Ragnarok"
            ],
            [
              { bold: "Master Strike" },
              ": This Strike enters the city as a ",
              { bold: "6" },
              { icon: 1 },
              " “Army of the Dead“ Villain worth 4VP. Then choose a Villain worth 4VP or more from your Victory Pile ",
              { italic: "(including an Army of the Dead)" },
              " to enter the city. If you didn't have any, each player gains a Wound."
            ]
          ]
        },
        {
          name: "Hela's Cloak",
          tactic: true,
          attack: "+2",
          vp: -1,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. Hela captures this card as a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              "."
            ],
            { divider: true },
            [
              { keyword: 13 },
              " - Once during each player's turn, if you would gain a Wound, you may draw a card instead."
            ]
          ]
        },
        {
          name: "The Nightsword",
          tactic: true,
          attack: "+3",
          vp: -1,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. Hela captures this card as a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              "."
            ],
            { divider: true },
            [
              { keyword: 14 },
              " - When you throw this, you get ",
              { keyword: 49, text: "Bridge Conqueror 3" },
              "."
            ]
          ]
        },
        {
          name: "Seize Bifrost, The Rainbow Bridge",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top card of the Villain Deck. If it's a Villain, that Villain enters the Bridge or Streets, if one of those spaces is empty."
            ]
          ]
        },
        {
          name: "Naglfar, Longship of Fingernails",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The player on your right reveals the Villain from their Victory Pile that's worth the most VP. That Villain enters the Bridge or Streets, if one of those spaces is empty."
            ]
          ]
        }
      ]
    },
    {
      id: 68,
      name: "Malekith the Accursed",
      tacticName: "Malekith",
      set: 26,
      attack: "8",
      vp: 6,
      cards: [
        {
          name: "Malekith the Accursed",
          dense: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": Dark Council"
            ],
            [
              { bold: "Master Strike" },
              ": Malekith captures a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              " from the city or from any player's control or discard pile. Then this Master Strike enters the city as a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              " called “Darkspear“ that gives ",
              { bold: "+2" },
              { icon: 1 },
              ". When you gain a Darkspear, it becomes a ",
              { keyword: 14 },
              " that gives ",
              { bold: "+2" },
              { icon: 1 },
              " when thrown."
            ]
          ]
        },
        {
          name: "Epic Malekith the Accursed",
          attack: "10",
          epic: true,
          dense: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": Dark Council"
            ],
            [
              { bold: "Master Strike" },
              ": Malekith captures a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              " from the city, then captures one from any player's control or discard pile. Then this Master Strike enters the city as a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              " called “Darkspear“ that gives ",
              { bold: "+3" },
              { icon: 1 },
              ". When you gain a Darkspear, it becomes a ",
              { keyword: 14 },
              " that gives ",
              { bold: "+2" },
              { icon: 1 },
              " when thrown."
            ]
          ]
        },
        {
          name: "Black Hammer of the Accursed",
          tactic: true,
          attack: "+4",
          vp: -1,
          dense: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. Malekith captures a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              " from the city or from any player's control or discard pile. The this Tactic enters the city as a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              "."
            ],
            { divider: true },
            [
              { keyword: 13 },
              " - Once per turn, you may KO a Hero from your discard pile."
            ]
          ]
        },
        {
          name: "Dagger of Living Abyss",
          tactic: true,
          attack: "+2",
          vp: -1,
          dense: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. Malekith captures a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              " from the city or from any player's control or discard pile. The this Tactic enters the city as a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              "."
            ],
            { divider: true },
            [
              { keyword: 13 },
              " - Once per turn, you may defeat a Villain worth 2VP or less."
            ]
          ]
        },
        {
          name: "The Hunting Horn of Faerie",
          tactic: true,
          attack: "+3",
          vp: -1,
          dense: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. Malekith captures a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              " from the city or from any player's control or discard pile. The this Tactic enters the city as a ",
              { rule: 9, text: "Villainous Weapon", keywordStyle: true },
              "."
            ],
            { divider: true },
            [
              { keyword: 13 },
              " - Once per turn, draw a card."
            ]
          ]
        },
        {
          name: "Vulnerable to Cold Iron",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              " for each ",
              { hc: 5 },
              " Hero you have."
            ]
          ]
        }
      ]
    },
  ]
}