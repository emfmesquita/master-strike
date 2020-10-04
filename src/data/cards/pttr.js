export default {
  heroes: [
    {
      id: 38,
      name: "Black Cat",
      set: 5,
      team: 3,
      cards: [
        {
          name: "Casual Bank Robbery",
          hc: 1,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            { keyword: 7 },
            [
              "You get another ",
              { bold: "+1" },
              { icon: 2 },
              "usable only to recruit the Hero in the HQ Space under the Bank."
            ]
          ]
        },
        {
          name: "Pickpocket",
          hc: 1,
          rarity: 1,
          cost: 1,
          attack: "0+",
          abilities: [
            { keyword: 7 },
            [
              "Reveal the top card of any player's deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that card's printed ",
              { icon: 2 },
              " plus its printed ",
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Jinx",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            "Each player reveals the top card of their deck. Choose any number of those cards to be discarded."
          ]
        },
        {
          name: "Cat Burglar",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              "Each other player reveals a ",
              { hc: 1 },
              " Hero or chooses a Bystander from their Victory Pile. You rescue those Bystanders."
            ],
            [
              { team: 3 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander you rescued this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 39,
      name: "Moon Knight",
      set: 5,
      team: 6,
      cards: [
        {
          name: "Climbing Claws",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            { keyword: 7 },
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Lunar Communion",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            { keyword: 7 },
            [
              "Whenever you defeat a Villain on the Rooftops this turn, you may KO one of your cards or a card from your discard pile."
            ]
          ]
        },
        {
          name: "Crescent Moon Darts",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Reveal the top card of your deck. If it's ",
              { hc: 2 },
              " or ",
              { hc: 5 },
              ", draw it."
            ]
          ]
        },
        {
          name: "Golden Ankh of Khonshu",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "Whenever you defeat a Villain on the Rooftops this turn, rescue Bystanders equal to that Villain's printed ",
              { icon: 4 },
              "."
            ],
            [
              { hc: 5 },
              ": You may move a Villain to the Rooftops. If another Villain is already there, swap them."
            ]
          ]
        }
      ]
    },
    {
      id: 40,
      name: "Scarlet Spider",
      set: 5,
      team: 3,
      cards: [
        {
          name: "Flip Out ",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            { keyword: 7 },
            [
              { team: 3 },
              ": Draw a card.",
            ]
          ]
        },
        {
          name: "Perfect Hunter ",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "1",
          abilities: [
            { keyword: 7 },
            [
              "Draw a card."
            ]
          ]
        },
        {
          name: "Leap from Above",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            { keyword: 7 },
            [
              { hc: 2 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Sting of the Spider ",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "Whenever you put a card on top of your deck this turn, you may draw that card."
            ]
          ]
        }
      ]
    },
    {
      id: 41,
      name: "Spider-Woman",
      set: 5,
      team: 3,
      cards: [
        {
          name: "Bioelectric Shock",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            { keyword: 7 },
            [
              "Reveal the top card of your deck. If that card has an ",
              { icon: 1 },
              " icon, draw it."
            ]
          ]
        },
        {
          name: "Radioactive Spider",
          hc: 4,
          rarity: 1,
          cost: 2,
          recruit: "3",
          abilities: [
            [
              "To play this card, you must put a card from your hand on top of your deck."
            ]
          ]
        },
        {
          name: "Venom Blast",
          hc: 3,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            { keyword: 7 },
            [
              "Reveal the top card of your deck. If that card has a ",
              { icon: 2 },
              " icon, draw it."
            ]
          ]
        },
        {
          name: "Arachno-Pheromones",
          hc: 1,
          rarity: 3,
          cost: 7,
          abilities: [
            "Recruit a Hero from the HQ for free.",
            [
              { team: 3 },
              ": Put that Hero on top of your deck."
            ]
          ]
        }
      ]
    },
    {
      id: 42,
      name: "Symbiote Spider-Man",
      set: 5,
      team: 3,
      cards: [
        {
          name: "Dark Strength",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            { keyword: 7 },
            [
              "Reveal the top card of your deck. If it costs 1 ",
              { icon: 3 },
              " or 2 ",
              { icon: 3 },
              ", you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Spider-Sense Tingling",
          hc: 2,
          rarity: 1,
          cost: 2,
          abilities: [
            [
              "Reveal the top two cards of your deck. Put any that cost 2 ",
              { icon: 3 },
              " or less into your hand. Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Shadowed Spider",
          hc: 1,
          rarity: 2,
          cost: 2,
          attack: "1+",
          abilities: [
            { keyword: 7 },
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other Hero you played this turn that costs 1 ",
              { icon: 3 },
              " or 2 ",
              { icon: 3 },
              "."
            ]
          ]
        },
        {
          name: "Thwip!",
          hc: 3,
          rarity: 3,
          cost: 2,
          attack: "4",
          abilities: [
            "To play this card, you must put two cards from your hand on top of your deck."
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 12,
      name: "Carnage",
      set: 5,
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "Carnage",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Maximum Carnage"
            ],
            [
              { bold: "Master Strike" },
              ": ",
              { keyword: 8 },
              " on each player. Whenever this Master Strike feasts on a player's 0-cost Hero, that player gains a Wound."
            ]
          ]
        },
        {
          name: "Drooling Jaws",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each player reveals the top card of their deck. Then Carnage ",
              { keyword: 8, text: "feasts" },
              " on the player of your choice.",
            ]
          ]
        },
        {
          name: "Endless Hunger",
          tactic: true,
          abilities: [
            { keyword: 8 },
            [
              "If Carnage feasts on a 0-cost Hero this way, repeat this process."
            ]
          ]
        },
        {
          name: "Feed Me",
          tactic: true,
          abilities: [
            { keyword: 8 },
            [
              "You get ",
              { bold: "+" },
              { icon: 2 },
              " equal to the ",
              { icon: 3 },
              "  of the card Carnage feasts on."
            ]
          ]
        },
        {
          name: "Om Nom Nom",
          tactic: true,
          abilities: [
            { keyword: 8 },
            [
              "If Carnage feasts on a 0-cost Hero this way, each other player KOs a Bystander from their Victory Pile."
            ]
          ]
        }
      ]
    },
    {
      id: 13,
      name: "Mysterio",
      set: 5,
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Mysterio",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Sinister Six"
            ],
            [
              { bold: "Master Strike" },
              ": Shuffle this Master Strike into Mysterio's face down Mastermind Tactics. That card becomes a Mastermind Tactic worth ",
              { bold: "6" },
              { icon: 4 },
              "."
            ]
          ]
        },
        {
          name: "Blurring Images",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Mastermind Tactic Mysterio has left after this one."
            ]
          ]
        },
        {
          name: "Captive Audience",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue a Bystander for each Mastermind Tactic Mysterio has left after this one."
            ]
          ]
        },
        {
          name: "Master of Illusions",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, shuffle a Master Strike Tactic from each other player's Victory Pile back into Mysterio's Mastermind Tactics.",
            ]
          ]
        },
        {
          name: "Mists of Deception",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, reveal the top five cards of the Villain Deck. Play all the Master Strikes you revealed. Put the rest on the bottom of that deck in random order."
            ]
          ]
        }
      ]
    },
  ],
  schemes: [
    {
      id: 21,
      name: "The Clone Saga",
      set: 5,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist" },
              ": Each player reveals two non-grey Heroes with the same card name or discards down to 3 cards."
            ],
            [
              { bold: "Evil Wins" },
              ": When 2 Villains with the same card name have escaped or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 22,
      name: "Invade the Daily Bugle News HQ",
      set: 5,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Add 6 extra Henchmen from a single Henchman Group to the Hero Deck."
            ],
            [
              { bold: "Special Rules" },
              ": You can fight Villains in the HQ."
            ],
            [
              { bold: "Twist" },
              ": KO a Hero from the HQ. Put the highest-",
              { icon: 1 },
              " Villain from the city into that HQ space."
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 5 Villains in the HQ."
            ],
          ]
        },
      ]
    },
    {
      id: 23,
      name: "Splice Humans with Spider DNA",
      set: 5,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Include Sinister Six as one of the Villain Groups."
            ],
            [
              { bold: "Special Rules" },
              ": Sinister Six Villains get ",
              { bold: "+3" },
              { icon: 1 },
              ". All Hero cards have ",
              { keyword: 7 },
              "."
            ],
            [
              { bold: "Twist" },
              ": Each player puts a Sinister Six Villain from their Victory Pile on top of the Villain Deck. No matter how many players did so, play a single card from the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When 6 Sinister Six Villains have escaped or the Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 24,
      name: "Weave a Web of Lies",
      set: 5,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists."
            ],
            [
              { bold: "Special Rules" },
              ": Whenever you defeat a Villain, you may pay ",
              { bold: "1" },
              { icon: 2 },
              ". If you do, rescue a Bystander.",
            ],
            [
              "You can't fight the Mastermind unless you have a Bystander in your Victory Pile for each Twist next to the Mastermind.",
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Mastermind."
            ],
            [
              { bold: "Twist 7" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
  ]
}