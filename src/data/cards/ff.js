export default {
  heroes: [
    {
      id: 33,
      name: "Human Torch",
      set: 4,
      team: 5,
      cards: [
        {
          name: "Call for Backup",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              "You may KO a Wound from your hand or discard pile. If you do, you get ",
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
          name: "Hothead",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "4",
          abilities: [
            [
              "You gain a Wound."
            ]
          ]
        },
        {
          name: "Flame On!",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              { keyword: 4, text: "Focus 6" },
              { icon: 2 },
              { icon: 5 },
              " You get ",
              { bold: "+4 " },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Nova Flame",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [
              {
                team: 5
              },
              ": You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              " for each city space that contains a Villain."
            ]
          ]
        }
      ]
    },
    {
      id: 34,
      name: "Invisible Woman",
      set: 4,
      team: 5,
      cards: [
        {
          name: "Disappearing Act",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              {
                keyword: 4, text: "Focus 2"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              "You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Four of a Kind",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "If you played any other cards that cost 4 ",
              {
                icon: 3
              },
              " this turn, you get ",
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
          name: "Unseen Rescue",
          hc: 1,
          rarity: 2,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              { icon: 5 },
              " Rescue a Bystander. You may only use this ability up to four times this turn.",
            ]
          ]
        },
        {
          name: "Invisible Barrier",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "If an ambush effect would occur, you may reveal this card and draw two cards instead."
            ]
          ]
        }
      ]
    },
    {
      id: 35,
      name: "Mr. Fantastic",
      set: 4,
      team: 5,
      cards: [
        {
          name: "Twisting Equations",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              {
                keyword: 4, text: "Focus 2"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              "When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Unstable Molecules",
          hc: 5,
          rarity: 1,
          cost: 5,
          abilities: [
            "Draw two cards."
          ]
        },
        {
          name: "One Gigantic Hand",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "1+",
          abilities: [
            [
              {
                team: 5
              },
              ": You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              " for each card in your hand."
            ]
          ]
        },
        {
          name: "Ultimate Nullifier",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "If an Enemy you fight this turn would have a fight effect, you may cancel that effect instead."
            ],
            [
              {
                keyword: 4, text: "Focus 1"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              " You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              " usable only against the Mastermind."
            ]
          ]
        }
      ]
    },
    {
      id: 36,
      name: "Silver Surfer",
      set: 4,
      team: 0,
      cards: [
        {
          name: "Warp Speed",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              { icon: 5 },
              "Draw a card."
            ]
          ]
        },
        {
          name: "Epic Destiny",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 6" },
              { icon: 2 },
              { icon: 5 },
              " Defeat a Villain of ",
              { bold: "5 " },
              { icon: 1 },
              " or ",
              { bold: "6 " },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "The Power Cosmic",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "3",
          abilities: [
            [
              { keyword: 4, text: "Focus 9" },
              { icon: 2 },
              { icon: 5 },
              " You get ",
              { bold: "+9 " },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Energy Surge",
          hc: 3,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Double the ",
              { icon: 2 },
              " you have."
            ]
          ]
        }
      ]
    },
    {
      id: 37,
      name: "Thing",
      set: 4,
      team: 5,
      cards: [
        {
          name: "It Started on Yancy Street",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              {
                team: 5
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 2
              },
              "."
            ]
          ]
        },
        {
          name: "Knuckle Sandwich",
          hc: 4,
          rarity: 1,
          cost: 5,
          recruit: "3",
          attack: "0+",
          abilities: [
            [
              {
                keyword: 4, text: "Focus 3"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              "You get ",
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
          name: "Crime Stopper",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            "Whenever you defeat a Villain in the Bank this turn, rescue a Bystander.",
            [
              {
                keyword: 4, text: "Focus 1"
              },
              {
                icon: 2
              },
              {
                icon: 5
              },
              "Move a Villain to an adjacent city space. If another Villain is already there, swap them."
            ]
          ]
        },
        {
          name: "It's Clobberin' Time!",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              {
                hc: 4
              },
              ": You get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              "for each other ",
              {
                hc: 4
              },
              "card you played this turn."
            ]

          ]
        }
      ]
    }
  ]
}