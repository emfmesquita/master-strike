export default {
  heroes: [
    {
      id: 106,
      name: "Captain America, Secret Avenger",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Bold Leadership",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Hero Class you have."
            ]
          ]
        },
        {
          name: "Inspire a Nation",
          hc: 4,
          rarity: 1,
          cost: 3,
          divided: 1,
          abilities: [
            [
              "Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Inspire a Man",
          subTitle: "Battlestar",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          divided: 2,
          abilities: []
        },
        {
          name: "Karmic Balance",
          hc: 3,
          rarity: 2,
          cost: 6,
          recruit: "4",
          abilities: [
            [
              "Reveal the top card of the Hero Deck. You may recruit it this turn. If you do, you may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "Control Like a Puppet",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              { team: 4 },
              ": Choose a Villain in the city. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to its VP, usable only against other Villains or the Mastermind."
            ]
          ]
        },

      ]
    },
    {
      id: 107,
      name: "Cloak & Dagger",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Above",
          subTitle: "Cloak",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          divided: 1,
          abilities: []
        },
        {
          name: "Below",
          subTitle: "Dagger",
          team: 6,
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          divided: 2,
          abilities: [
            [
              "You get ",
              { bold: "+3" },
              { icon: 2 },
              " usable only to recruit Heroes in the HQ space under the Sewers."
            ]
          ]
        },
        {
          name: "Flee",
          subTitle: "Cloak",
          hc: 1,
          rarity: 1,
          cost: 4,
          divided: 1,
          recruit: "2+",
          abilities: [
            { keyword: 27 },
            [
              { hc: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Fight",
          subTitle: "Dagger",
          team: 6,
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          divided: 2,
          abilities: [
            { keyword: 27 },
            [
              { hc: 3 },
              " You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Darkness",
          subTitle: "Cloak",
          hc: 1,
          rarity: 2,
          cost: 6,
          divided: 1,
          attack: "3",
          abilities: [
            [
              { hc: 1 },
              ": Reveal the top card of your deck. If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Light",
          subTitle: "Dagger",
          team: 6,
          hc: 3,
          rarity: 2,
          cost: 6,
          recruit: "3",
          divided: 2,
          abilities: [
            [
              { hc: 3 },
              ": Reveal the top card of your deck. If it costs 1 or more, draw it."
            ]
          ]
        },
        {
          name: "Penumbra",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Whenever you play a ",
              { rule: 4 },
              " card this turn, play both sides as if they were two different cards."
            ]
          ]
        },

      ]
    },
    {
      id: 108,
      name: "Daredevil",
      filterName: "Daredevil (CW)",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Dual Existence",
          hc: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Look at the top two cards of your deck. Draw one and put the other back."
            ]
          ]
        },
        {
          name: "Roundhouse Side Kick",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Choose a number, then reveal the top card of your deck. If that card is that cost, gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Hidden Identity",
          hc: 2,
          rarity: 2,
          cost: 6,
          divided: 1,
          recruit: "3",
          abilities: [
            [
              "The next Hero you recruit this turn goes on top of your deck."
            ]
          ]
        },
        {
          name: "Revealed Identity",
          subTitle: "Iron Fist",
          team: 6,
          hc: 4,
          rarity: 2,
          cost: 6,
          divided: 2,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each different cost of Hero you have."
            ]
          ]
        },
        {
          name: "Master of Martial Arts",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              { team: 1 },
              ": Discard the top two cards of your deck. If they have different costs, you get ",
              { bold: "+2" },
              { icon: 1 },
              ", then repeat this process."
            ]
          ]
        },

      ]
    },
    {
      id: 109,
      name: "Falcon",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Rapid Reinforcements",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            "Put a Hero from the HQ on the bottom of the Hero Deck.",
            [
              { hc: 5 },
              ": If that Hero had a ",
              { icon: 2 },
              " icon, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Talk with Birds",
          hc: 3,
          rarity: 1,
          cost: 4,
          divided: 1,
          attack: "2",
          abilities: [
            [
              { hc: 3 },
              ": Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Squawk Back",
          subTitle: "Redwing",
          hc: 2,
          rarity: 1,
          cost: 4,
          divided: 2,
          abilities: [
            [
              "Look at the top three cards of your deck. Draw one. Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Scout the Battlefield",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card in the HQ with an ",
              { icon: 1 },
              " icon."
            ]
          ]
        },
        {
          name: "Fly in a Friend",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              { team: 1 },
              ": You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the printed ",
              { icon: 1 },
              " of a Hero in the HQ."
            ]
          ]
        },

      ]
    },
    {
      id: 110,
      name: "Goliath",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Brilliant Biochemist",
          hc: 5,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          divided: 1,
          recruit: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ]
          ]
        },
        {
          name: "Massive Warrior",
          hc: 4,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          divided: 2,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ]
          ]
        },
        {
          name: "Growth Industry",
          hc: 5,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            [
              { hc: 5 },
              ": Draw a card."
            ],
          ]
        },
        {
          name: "Being Big is Best",
          hc: 4,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "3+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other card you played this turn that costs 4 or more."
            ]
          ]
        },
        {
          name: "Enormous Implications",
          hc: 4,
          rarity: 3,
          cost: 8,
          costAsterisk: true,
          attack: "0+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the cost of another card you played this turn."
            ]
          ]
        },

      ]
    },
    {
      id: 111,
      name: "Hercules",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Manly Dullard",
          hc: 4,
          rarity: 1,
          cost: 3,
          divided: 1,
          attack: "3",
          abilities: [
            [
              "To play this, you must discard a card from your hand."
            ]
          ]
        },
        {
          name: "Boy Genius",
          subTitle: "Amadeus Cho",
          team: 0,
          hc: 5,
          rarity: 1,
          cost: 3,
          divided: 2,
          abilities: [
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Crowd Favorite",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 2 },
              ": Whenever you defeat a Villain this turn, rescue a Bystander."
            ],
          ]
        },
        {
          name: "Prince of Power",
          hc: 4,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              { hc: 4 },
              ": Reveal the top card of your deck. If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Son of Zeus",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "Rescue a Bystander. Then, you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in your Victory Pile."
            ],
            [
              { team: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Bystander in your Victory Pile."
            ]
          ]
        },

      ]
    },
    {
      id: 112,
      name: "Hulkling",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Half-Kree",
          hc: 4,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          divided: 1,
          recruit: "3",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "Gain a Wound."
            ]
          ]
        },
        {
          name: "Half-Skrull",
          hc: 1,
          rarity: 1,
          cost: 4,
          costAsterisk: true,
          divided: 2,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 1 }
            ]
          ]
        },
        {
          name: "Cellular Regeneration",
          hc: 4,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              "You may KO a Wound from your hand or discard pile. If you do, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Impersonate",
          hc: 1,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 1 }
            ],
            [
              "Play this card as a copy of another Hero you played this turn. This card is both ",
              { hc: 1 },
              " and the class and color you copy."
            ]
          ]
        },
        {
          name: "Enormous Shapeshifter",
          hc: 1,
          rarity: 3,
          cost: 8,
          costAsterisk: true,
          attack: "4+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 1 }
            ],
            [
              { hc: 1 },
              ": You get ",
              { bold: "+4" },
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 113,
      name: "Luke Cage",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Cautious",
          hc: 4,
          rarity: 1,
          cost: 3,
          divided: 1,
          attack: "2",
          abilities: []
        },
        {
          name: "Reckless",
          subTitle: "Jessica Jones",
          team: 6,
          hc: 2,
          rarity: 1,
          cost: 3,
          divided: 2,
          attack: "3",
          abilities: [
            [
              "Gain a Wound."
            ]
          ]
        },
        {
          name: "Take a Bullet for the Team",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              "If any player would gain a Wound, you may discard this card instead. If you do, draw two cards."
            ],
          ]
        },
        {
          name: "Sweet Christmas",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { hc: 2 },
              ": Look at the top three cards of your deck. Discard them all or put them back in any order."
            ]
          ]
        },
        {
          name: "Unbreakable Skin",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              { team: 1 },
              ": ",
              { keyword: 28 },
              " the Wound Stack. While it's fortified, players can't gain Wounds. At the beginning of your next turn, put this card in your discard pile."
            ]
          ]
        },

      ]
    },
    {
      id: 114,
      name: "Patriot",
      set: 13,
      team: 1,
      cards: [
        {
          name: "New Generation of Heroes",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Hero Name among your non-",
              { team: 2 },
              " Heroes."
            ]
          ]
        },
        {
          name: "Intuitive Tactician",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Name among your non-",
              { team: 2 },
              " Heroes."
            ]
          ]
        },
        {
          name: "Incredible Effort",
          hc: 1,
          rarity: 2,
          cost: 5,
          divided: 1,
          attack: "1+",
          abilities: [
            [
              { hc: 1 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Effortless",
          subTitle: "Hawkeye",
          hc: 5,
          rarity: 2,
          cost: 5,
          divided: 2,
          recruit: "3",
          abilities: []
        },
        {
          name: "Lead the Young Avengers",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "3",
          abilities: [
            [
              "Reveal the top three cards of your deck. If you revealed at least three different Hero Names this way, draw those three cards. Otherwise, put them back in any order."
            ]
          ]
        },

      ]
    },
    {
      id: 115,
      name: "Peter Parker",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Conflicted Loyalties",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              { hc: 5 },
              ": Reveal the top card of your deck. If it costs 2 or less, draw it."
            ]
          ]
        },
        {
          name: "Spider-Man Unmasked",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ],
            [
              { hc: 2 },
              ": Put that Sidekick on top of your deck."
            ]
          ]
        },
        {
          name: "Protect My Family",
          hc: 5,
          rarity: 2,
          cost: 2,
          divided: 1,
          attack: "1",
          abilities: [
            [
              "Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Hot Bowl of Soup",
          subTitle: "Aunt May",
          team: 3,
          hc: 2,
          rarity: 2,
          cost: 2,
          divided: 2,
          recruit: "1",
          abilities: [
            "You may KO a Wound from your hand or discard pile."
          ]
        },
        {
          name: "Reluctant Celebrity",
          hc: 2,
          rarity: 3,
          cost: 2,
          attack: "2+",
          abilities: [
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each extra card you've drawn this turn.",
            ]
          ]
        },

      ]
    },
    {
      id: 116,
      name: "Speedball",
      set: 13,
      team: 16,
      cards: [
        {
          name: "Reckless Rescue Attempt",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 3 },
              ": Reveal the top card of the Villain Deck. If it's a Villain, rescue a Bystander. Otherwise, KO a Bystander from the Bystander Deck."
            ]
          ]
        },
        {
          name: "Bounce Around",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 1 },
              ": If there are any Bystanders in the city or KO pile, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Double Down",
          hc: 3,
          rarity: 2,
          cost: 5,
          divided: 1,
          abilities: [
            [
              "Draw two cards."
            ]
          ]
        },
        {
          name: "Bubble Up",
          subTitle: "Namorita",
          hc: 1,
          rarity: 2,
          cost: 5,
          divided: 2,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+3" },
              { icon: 1 },
              " usable only against Villains on the Bridge or against the Mastermind."
            ]
          ]
        },
        {
          name: "Kinetic Force Field",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "If a Master Strike would occur, you may reveal this card to KO that Master Strike, cancel its effects, and draw a card."
            ]
          ]
        },

      ]
    },
    {
      id: 117,
      name: "Stature",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Shrink to Nothing",
          hc: 5,
          rarity: 1,
          cost: 2,
          costAsterisk: true,
          attack: "0+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            "Draw a card.",
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
          name: "Crush Ants",
          hc: 4,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          divided: 1,
          attack: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              { hc: 4 },
              ": Defeat a Villain that has ",
              { bold: "3" },
              { icon: 1 },
              " or less."
            ]
          ]
        },
        {
          name: "Crush File Sizes",
          hc: 5,
          rarity: 1,
          cost: 5,
          costAsterisk: true,
          divided: 2,
          recruit: "2",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            [
              { hc: 5 },
              ": Draw a card."
            ],
          ]
        },
        {
          name: "Growing Confidence",
          hc: 4,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          attack: "2+",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              { hc: 4 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Villain in your Victory Pile that has a printed ",
              { icon: 1 },
              " 3 or less."
            ]
          ]
        },
        {
          name: "Trample the Tiny",
          hc: 4,
          rarity: 3,
          cost: 8,
          costAsterisk: true,
          attack: "5",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 4 }
            ],
            [
              { hc: 4 },
              ": Defeat each Villain that has 4 ",
              { icon: 1 },
              " or less."
            ]
          ]
        },

      ]
    },
    {
      id: 118,
      name: "Storm & Black Panther",
      set: 13,
      team: 4,
      cards: [
        {
          name: "Gathering Rain Clouds",
          subTitle: "Storm",
          hc: 3,
          rarity: 1,
          cost: 2,
          recruit: "1",
          divided: 1,
          abilities: [
            [
              { hc: 3 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Gathering Clues",
          subTitle: "Black Panther",
          team: 1,
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          divided: 2,
          abilities: [
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Lightning Strike",
          subTitle: "Storm",
          hc: 3,
          rarity: 1,
          cost: 3,
          divided: 1,
          attack: "2",
          abilities: [
            [
              "Any Villain you fight on the Rooftops this turn gets ",
              { bold: "-1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Pouncing Strike",
          subTitle: "Black Panther",
          team: 1,
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          divided: 2,
          abilities: [
            [
              "You may move a Villain to an adjacent empty city space."
            ]
          ]
        },
        {
          name: "Tsunami of Water",
          subTitle: "Storm",
          hc: 3,
          rarity: 2,
          cost: 5,
          divided: 1,
          attack: "3",
          abilities: [
            [
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              " usable only against the Mastermind."
            ]
          ]
        },
        {
          name: "Tsunami of Justice",
          subTitle: "Black Panther",
          team: 1,
          hc: 1,
          rarity: 2,
          cost: 5,
          divided: 2,
          attack: "3",
          abilities: [
            [
              { hc: 1 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "King & Queen of Wakanda",
          team: 1,
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "Reveal any number of multi-class cards from your hand. Gain that many ",
              { rule: 11 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 119,
      name: "Tigra",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Friendship",
          hc: 1,
          rarity: 1,
          cost: 2,
          divided: 1,
          recruit: "1",
          abilities: [
            [
              { hc: 1 },
              ": Gain a ",
              { rule: 11, text: "Sidekick" },
              "."
            ]
          ]
        },
        {
          name: "Ferocity",
          hc: 2,
          rarity: 1,
          cost: 2,
          divided: 2,
          attack: "1",
          abilities: [
            [
              { hc: 2 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Supernatural Senses",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { hc: 2 },
              { hc: 2 },
              ": You may KO the card you discarded this way."
            ],
          ]
        },
        {
          name: "Can't Surprise a Cat",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              "If an Ambush effect would occur, you may discard this card to cancel that effect and draw two cards."
            ]
          ]
        },
        {
          name: "Mystic Talisman",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "Recruit a Hero from the HQ for free."
            ],
            [
              { team: 1 },
              ": You get that Hero's printed ",
              { icon: 2 },
              " and ",
              { icon: 1 },
              "."
            ]
          ]
        },

      ]
    },
    {
      id: 120,
      name: "Vision",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Dual Existence",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 27 },
            [
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Through Solid Objects",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            { keyword: 27 },
            [
              "Choose a Hero Class. Reveal the top card of your deck. If it's the Hero class you named, then draw it."
            ]
          ]
        },
        {
          name: "Lighter than Air",
          hc: 3,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          divided: 1,
          recruit: "3",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 3 }
            ],
            { keyword: 27 }
          ]
        },
        {
          name: "Harder than Diamond",
          hc: 5,
          rarity: 2,
          cost: 6,
          costAsterisk: true,
          divided: 2,
          attack: "3",
          abilities: [
            [
              { keyword: 26 },
              { bold: ": " },
              { hc: 5 }
            ],
            { keyword: 27 }
          ]
        },
        {
          name: "Insubstantial Accomplishments",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            { keyword: 27 },
            [
              "When you play this, you may swap a card from your hand with the top two cards of your deck."
            ]
          ]
        },

      ]
    },
    {
      id: 121,
      name: "Wiccan",
      set: 13,
      team: 1,
      cards: [
        {
          name: "Sorcerous Illusions",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            { keyword: 27 },
            [
              { hc: 1 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Astral Projection",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 27 },
            [
              "Choose a number, and then reveal the top card of your deck. If that card is that cost, then you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Supersonic Spells",
          hc: 3,
          rarity: 2,
          cost: 4,
          divided: 1,
          attack: "2",
          abilities: [
            [
              { hc: 3 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Supersonic Speed",
          subTitle: "Speed",
          hc: 1,
          rarity: 2,
          cost: 4,
          divided: 2,
          abilities: [
            "Draw a card.",
            [
              { hc: 1 },
              ": Draw another card."
            ]
          ]
        },
        {
          name: "Clairvoyance",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "3",
          abilities: [
            [
              "Choose a number, and then reveal the top card of your deck. If that card is that cost, draw it and draw another card."
            ]
          ]
        },

      ]
    },
  ]
}