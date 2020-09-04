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
  ]
}