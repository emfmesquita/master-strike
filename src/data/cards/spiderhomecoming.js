export default {
    heroes: [
      {
        id: 147,
        name: "Happy Hogan",
        set: 17,
        team: 0,
        cards: [
          {
            name: "Head of Security",
            hc: 2,
            rarity: 1,
            cost: 3,
            recruit: "2",
            abilities: [
              { keyword: 43 },
              "KO all Wounds you gained this turn."
            ]
          },
          {
            name: "Watchful Eye",
            hc: 2,
            rarity: 1,
            cost: 4,
            attack: "2+",
            abilities: [
              [
                { hc: 2 },
                ": ",
                { keyword: 41, text: "Danger Sense 2" },
                ". If this revealed any Master Strikes, KO those Strikes, then you may KO a card from your hand or discard pile."
              ]
            ]
          },
          {
            name: "Loyal Friend",
            hc: 5,
            rarity: 2,
            cost: 5,
            attack: "0+",
            abilities: [
              { keyword: 43 },
              { keyword: 42 }
            ]
          },
          {
            name: "Asset Management",
            hc: 2,
            rarity: 3,
            cost: 5,
            attack: "0+",
            abilities: [
              { keyword: 42, text: "Double Striker" }
            ]
          }
        ]
      },
      {
        id: 148,
        name: "High Tech Spider-Man",
        set: 17,
        team: 3,
        cards: [
          {
            name: "Advanced Targeting System",
            hc: 1,
            rarity: 1,
            cost: 2,
            abilities: [
              "Reveal the top card of your deck. If it costs 2 or less, draw it.",
              [
                { hc: 1 },
                ": Draw a card."
              ]
            ]
          },
          {
            name: "Recon Drone Connection",
            hc: 5,
            rarity: 1,
            cost: 2,
            attack: "0+",
            abilities: [
              { keyword: 7 },
              { keyword: 41, text: "Danger Sense 3" }
            ]
          },
          {
            name: "Spider-Grip",
            hc: 5,
            rarity: 2,
            cost: 2,
            attack: "2",
            abilities: [
              { keyword: 7 },
              [
                { hc: 5 },
                ": Choose two Villains in adjacent city spaces. Each of them gets ",
                { bold: "-1" },
                { icon: 1 },
                " this turn."
              ]
            ]
          },
          {
            name: "Friendly Neighborhood...",
            hc: 5,
            rarity: 3,
            cost: 2,
            attack: "0+",
            abilities: [
              { keyword: 7 },
              { keyword: 43 },
              [
                "You get ",
                { bold: "+3" },
                { icon: 1 },
                " usable only against the Mastermind or Villains on the Rooftops or Streets."
              ]
            ]
          }
        ]
      },
      {
        id: 149,
        name: "Peter Parker, Homecoming",
        set: 17,
        team: 3,
        cards: [
          {
            name: "Avenger in Training",
            hc: 2,
            rarity: 1,
            cost: 2,
            abilities: [
              { keyword: 7 },
              [
                { hc: 2 },
                ": ",
                { keyword: 41, text: "Danger Sense 1" },
                ". If this revealed a Villain, you may fight it."
              ]
            ]
          },
          {
            name: "Heightened Senses",
            hc: 1,
            rarity: 1,
            cost: 2,
            abilities: [
              { keyword: 41, text: "Danger Sense 2" },
              "Reveal the top card of your deck. If it costs 2 or less, draw it."
            ]
          },
          {
            name: "Homemade Web-Shooters",
            hc: 5,
            rarity: 2,
            cost: 2,
            attack: "2+",
            abilities: [
              { keyword: 7 },
              [
                { hc: 5 },
                ": ",
                { keyword: 41, text: "Danger Sense 1" },
                ". If this revealed a Bystander, rescue it."
              ]
            ]
          },
          {
            name: "Something is Happening",
            hc: 4,
            rarity: 3,
            cost: 2,
            attack: "0+",
            abilities: [
              { keyword: 7 },
              { keyword: 43 },
              [
                { keyword: 41, text: "Danger Sense 4" },
                ". If this revealed any Scheme Twists, you may shuffle the Villain Deck."
              ]
            ]
          }
        ]
      },
      {
        id: 150,
        name: "Peter's Allies",
        set: 17,
        team: 3,
        cards: [
          {
            name: "Ned",
            hc: 1,
            rarity: 1,
            cost: 2,
            recruit: "1+",
            abilities: [
              { keyword: 43 },
              [
                { hc: 1 },
                ": You get ",
                { bold: "+2" },
                { icon: 2 },
                "."
              ]
            ]
          },
          {
            name: "Michelle",
            hc: 1,
            rarity: 1,
            cost: 3,
            recruit: "2",
            abilities: [
              [
                "You may choose a Villain or Mastermind. You can fight it using only ",
                { icon: 2 },
                " this turn."
              ]
            ]
          },
          {
            name: "Liz",
            hc: 2,
            rarity: 2,
            cost: 6,
            recruit: "4",
            abilities: [
              [
                "Whenever you ",
                { keyword: 43 },
                " a card to another player, you may reveal this to draw two cards instead of one."
              ]
            ]
          },
          {
            name: "May Parker",
            hc: 1,
            rarity: 3,
            cost: 7,
            recruit: "5",
            abilities: [
              { keyword: 43 },
              [
                { team: 3 },
                ": Each Villain gets ",
                { bold: "-2" },
                { icon: 1 },
                " this turn. The next time you fight the Mastermind this turn, it gets ",
                { bold: "-2" },
                { icon: 1 },
                "."
              ]
            ]
          }
        ]
      },
      {
        id: 151,
        name: "Tony Stark",
        set: 17,
        team: 1,
        cards: [
          {
            name: "Genius, Billionaire...",
            hc: 5,
            rarity: 1,
            cost: 2,
            recruit: "1",
            attack: "1",
            abilities: [
              { keyword: 43 }
            ]
          },
          {
            name: "Stay Out of Trouble",
            hc: 5,
            rarity: 1,
            cost: 4,
            attack: "2+",
            abilities: [
              { keyword: 43 },
              [
                { hc: 5 },
                ": ",
                { keyword: 41, text: "Danger Sense 2" }
              ]
            ]
          },
          {
            name: "Little Grey Area",
            hc: 3,
            rarity: 2,
            cost: 5,
            attack: "3+",
            abilities: [
              [
                { team: 1 },
                ": ",
                { keyword: 41, text: "Danger Sense 1" },
                ". If this revealed a Villain, then Villains from that same Villain Group get ",
                { bold: "-1" },
                { icon: 1 },
                " this turn."
              ]
            ]
          },
          {
            name: "As Usual, I Did All the Work",
            hc: 3,
            rarity: 3,
            cost: 7,
            attack: "5",
            abilities: [
              { keyword: 43 },
              [
                "If another player accepts this ",
                { keyword: 43 },
                ", then at the end of this turn, move all cards that entered that player's Victory Pile this turn into your Victory Pile."
              ]
            ]
          }
        ]
      },
    ]
  }