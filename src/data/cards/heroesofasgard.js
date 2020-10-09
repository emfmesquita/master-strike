export default {
  id: 26,
  heroes: [
    {
      id: 198,
      name: "Beta Ray Bill",
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
      vAttack: "10",
      vp: 6,
      cards: [
        {
          name: "Hela, Goddess of Death",
          vAttack: "10+",
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
          vAttack: "12+",
          epic: true,
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
          vAttack: "+2",
          vp: -1,
          overrideType: 4,
          overrideSubType: 3,
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
          vAttack: "+3",
          vp: -1,
          overrideType: 4,
          overrideSubType: 3,
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
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Malekith the Accursed",
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
          vAttack: "10",
          epic: true,
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
          vAttack: "+4",
          vp: -1,
          overrideType: 4,
          overrideSubType: 3,
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
          vAttack: "+2",
          vp: -1,
          overrideType: 4,
          overrideSubType: 3,
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
          vAttack: "+3",
          vp: -1,
          overrideType: 4,
          overrideSubType: 3,
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
  ],
  schemes: [
    {
      id: 122,
      name: "Asgardian Test of Worth",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists."
            ],
            [
              { bold: "Twist 1-7" },
              ": Each player who is not ",
              { keyword: 63 },
              " discards a card. Then, if at least half the players ",
              { italic: "(round up)" },
              " are not ",
              { keyword: 63 },
              ", put this Twist next to the Scheme as a “Moral Failing.“"
            ],
            [
              { bold: "Twist 8-11" },
              ": Put this Twist next to the Scheme as a “Moral Failing.“"
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 5 Moral Failings."
            ],
          ]
        },
      ]
    },
    {
      id: 123,
      name: "Dark World of Svartalfheim, The",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 10 Twists."
            ],
            [
              { bold: "Twist" },
              ": Put this Twist next to a city space of HQ space that doesn't already have one, as “Eternal Darkness.“"
            ],
            [
              { bold: "Special Rules" },
              ": Villains in city spaces with Eternal Darkness get ",
              { bold: "+1" },
              { icon: 1 },
              ". To recruit a Hero in an HQ space with Eternal Darkness, you must pay an extra ",
              { bold: "1" },
              { icon: 2 },
              "."
            ],
            [
              { bold: "Evil Wins" },
              ": When all city spaces or all HQ spaces are covered in Eternal Darkness."
            ],
          ]
        },
      ]
    },
    {
      id: 124,
      name: "War of the Frost Giants",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists."
            ],
            [
              { bold: "Twist 1-7" },
              ": This Twist enters the city as a “Frost Giant Invader“ Villain worth 6VP with ",
              { bold: "6" },
              { icon: 1 },
              " and the ability “If you are not ",
              { keyword: 63 },
              ", this gets ",
              { bold: "+4" },
              { icon: 1 },
              ".“"
            ],
            [
              { bold: "Twist 8-9" },
              ": Same effect, then a Frost Giant Invader from each player's Victory Pile enters the city."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 5 Frost Giant Invaders in the city and/or Escape Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 125,
      name: "Ragnarok, Twilight of the Gods",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists."
            ],
            [
              { bold: "Twist" },
              ": Choose a Villain from your Victory Pile worth at least 2VP to enter the city. Then, if the total ",
              { icon: 1 },
              " of Villains in the city is at least as high as the Guardian ",
              { icon: 1 },
              " listed below, put this Twist next to the Scheme as a “Guardian Defeated.“"
            ],
            [
              { bold: "Twist 1" },
              ": Balder, 11",
              { icon: 1 }
            ],
            [
              { bold: "Twist 2" },
              ": Odin, 24",
              { icon: 1 }
            ],
            [
              { bold: "Twist 3" },
              ": Vidar, 19",
              { icon: 1 }
            ],
            [
              { bold: "Twist 4" },
              ": Tyr, 16",
              { icon: 1 }
            ],
            [
              { bold: "Twist 5" },
              ": Heimdall, 12",
              { icon: 1 }
            ],
            [
              { bold: "Twist 6" },
              ": Frey, 7",
              { icon: 1 }
            ],
            [
              { bold: "Twist 7" },
              ": Frigga, 8",
              { icon: 1 }
            ],
            [
              { bold: "Twist 8-11" },
              ": Warriors of Valhalla, 6",
              { icon: 1 }
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 5 Guardians Defeated."
            ],
          ]
        },
      ]
    },
  ]
}