export default {
  heroes: [
    {
      name: "Wolverine",
      team: 4,
      cards: [
        {
          name: "Keen Senses",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              {
                hc: 2
              },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Healing Factor",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            "You may KO a Wound from your hand or discard pile. If you do, draw a card."
          ]
        },
        {
          name: "Frenzied Slashing",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              {
                hc: 2
              },
              ": Draw two cards."
            ]
          ]
        },
        {
          name: "Berserker Rage",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            "Draw three cards.",
            [
              {
                hc: 2
              },
              ": You get",
              {
                bold: " +1"
              },
              {
                icon: 1
              },
              "for each extra card you've drawn this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Thor",
      team: 1,
      cards: [
        {
          name: "Odinson",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              {
                hc: 4
              },
              ": You get ",
              {
                bold: " +2"
              },
              {
                icon: 2
              }
            ]
          ]
        },
        {
          name: "Surge of Power",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              "If you made",
              {
                bold: " 8 "
              },
              "or more ",
              {
                icon: 2
              },
              "this turn, you get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              }
            ]
          ]
        },
        {
          name: "Call Lightning",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              {
                hc: 3
              },
              ": You get ",
              {
                bold: " +3"
              },
              {
                icon: 1
              }
            ]
          ]
        },
        {
          name: "God of Thunder",
          hc: 3,
          rarity: 3,
          cost: 8,
          recruit: "5",
          attack: "0+",
          abilities: [
            [
              "You can use ",
              {
                icon: 2
              },
              " as ",
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
      name: "Black Widow",
      team: 1,
      cards: [
        {
          name: "Dangerous Rescue",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              {
                hc:1
              },
              "You may KO a card from your hand or discard pile. If you do, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Mission Accomplished",
          hc: 5,
          rarity: 1,
          cost: 2,
          abilities: [
            "Draw a Card.",
            [
              {
                hc: 5
              },
              "Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Covert Operation ",
          hc: 1,
          rarity: 2,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 1
              },
              "for each Bystander in your Victory pile."
            ]
          ]
        },
        {
          name: "Silent Sniper",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "Defeat a Villain or Mastermind that has a Bystander.",
            ]
          ]
        }
      ]
    },
    {
      name: "Captain America",
      team: 1,
      cards: [
        {
          name: "Avengers Assemble!",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          abilities: [
            [
              "You get ",
              {
                bold: "+1"
              },
              {
                icon: 2
              },
              "for each color of Hero you have."
            ]
          ]
        },
        {
          name: "Perfect Teamwork",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "You get ",
            { 
              bold: "+1"
            },
            {
              icon: 1
            },
            "for each color of Hero you have."
            ]
          ]
        },
        {
          name: "Diving Block",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "If you would gain a Wound, you may reveal this card and draw a card instead."
            ]
          ]
        },
        {
          name: "A Day Unlike Any Other",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              {
                team: 1
              },
              ": You get ",
              {
                bold: "+3"
              },
              {
                icon: 1
              },
              " for each other",
              {
                team: 1
              },
              "you played this turn."
            ]
          ]
        }
      ]
    },
    {
      name: "Cyclops",
      team: 1,
      cards: [
        {
          name: "Determination",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "3",
          abilities: [
            [
              "To play this card, you must discard a card from your hand. "
            ]
          ]
        },
        {
          name: "Optic Blast ",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "3",
          abilities: [
            [
              "To play this card, you must discard a card from your hand."
            ]
          ]
        },
        {
          name: "Unending Energy",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "If a card effect makes you discard this card, you may return this card to your hand."
            ]
          ]
        },
        {
          name: "X-Men Unitedr",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [ 
              {
                team: 4
              },
              ": You get ",
              {
                bold: "+2"
              },
              {
                icon: 1
              },
              " for each other",
              {
                team: 4
              },
              " you played this turn."
            ]
          ]
        }
      ]
    }
    
  ]
}