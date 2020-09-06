export default {
  heroes: [
    {
      id: 58,
      name: "Drax the Destroyer",
      set: 7,
      team: 12,
      cards: [
        {
          name: "Knives of the Hunter",
          hc: 4,
          rarity: 1,
          cost: 3,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Interstellar Tracker",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { hc: 2 },
              ": You may KO the card you discarded this way."
            ]
          ]
        },
        {
          name: "The Destroyer",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              { team: 12 },
              ": Each other player reveals an ",
              { hc: 2 },
              " Hero or discards an Artifact they control. For each Artifact discarded this way, you gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Avatar of Destruction",
          hc: 2,
          rarity: 3,
          cost: 7,
          abilities: [
            [
              "Double the ",
              { icon: 1 },
              " you have."
            ]
          ]
        }
      ]
    },
    {
      id: 59,
      name: "Gamora",
      set: 7,
      team: 12,
      cards: [
        {
          name: "Bounty Hunter",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "2",
          abilities: [
            [
              "A Villain gains a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Deadliest Woman in the Universe",
          hc: 2,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Gain two ",
              { rule: 1 },
              "."
            ],
            [
              { hc: 1 },
              ": Gain another ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Galactic Assassin",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "A Villain of your choice gets no ",
              { icon: 1 },
              " from ",
              { rule: 1 },
              " this turn."
            ],
            [
              { hc: 1 },
              { hc: 1 },
              ": The Mastermind gets no ",
              { icon: 1 },
              " from ",
              { rule: 1 },
              " this turn."
            ]
          ]
        },
        {
          name: "Godslayer Blade",
          hc: 1,
          rarity: 3,
          cost: 8,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, gain two ",
              { rule: 1 },
              "."
            ],
            [
              "Once per turn, you may spend 5 ",
              { rule: 1 },
              " to get ",
              { bold: "+10" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 60,
      name: "Groot",
      set: 7,
      team: 12,
      cards: [
        {
          name: "Prune the Growths",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { hc: 4 },
              ": You may KO a card from your hand or discard pile. If you do, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Surviving Sprig",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            "When you draw a new hand of cards at the end of this turn, draw an extra card."
          ]
        },
        {
          name: "Groot and Branches",
          hc: 1,
          rarity: 2,
          cost: 4,
          abilities: [
            [
              "Gain two ",
              { rule: 1 },
              ". You may spend Shards to get ",
              { icon: 2 },
              " this turn."
            ],
            [
              { hc: 1 },
              ": You may choose another player. That player gains a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "I Am Groot",
          hc: 4,
          rarity: 3,
          cost: 8,
          recruit: "5",
          abilities: [
            [
              "When you recruit your next Hero this turn, you gain ",
              { rule: 1 },
              " equal to that Hero's cost."
            ]
          ]
        }
      ]
    },
    {
      id: 61,
      name: "Rocket Raccoon",
      set: 7,
      team: 12,
      cards: [
        {
          name: "Gritty Scavenger",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              "You may discard a card. If you do, draw a card."
            ]
          ]
        },
        {
          name: "Trigger Happy",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { team: 12 },
              ": You gain a ",
              { rule: 1, text: "Shard" },
              " for each other ",
              { team: 12 },
              " Hero you played this turn."
            ]
          ]
        },
        {
          name: "Incoming Detector",
          hc: 2,
          rarity: 2,
          cost: 4,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Whenever a Master Strike or Villain's Ambush ability is completed, you may gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Vengeance is Rocket",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Master Strike in the KO pile and/or stacked next to the Mastermind."
            ]
          ]
        }
      ]
    },
    {
      id: 62,
      name: "Star-Lord",
      set: 7,
      team: 12,
      cards: [
        {
          name: "Element Guns",
          hc: 3,
          rarity: 1,
          cost: 4,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, gain a ",
              { rule: 1, text: "Shard" },
              "."
            ]
          ]
        },
        {
          name: "Legendary Outlaw",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "Choose an Artifact any player controls with a 'once per turn' ability. Play a copy of one of those abilities."
            ]
          ]
        },
        {
          name: "Implanted Memory Chip",
          hc: 5,
          rarity: 2,
          cost: 6,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, draw a card."
            ]
          ]
        },
        {
          name: "Sentient Starship",
          hc: 3,
          rarity: 3,
          cost: 8,
          abilities: [
            { keyword: 13, text: "Artifact -" },
            [
              "Once per turn, gain a ",
              { rule: 1, text: "Shard" },
              " for each Artifact you control."
            ]
          ]
        }
      ]
    }
  ]
}