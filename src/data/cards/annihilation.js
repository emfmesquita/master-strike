export default {
  id: 30,
  heroes: [
    {
      id: 222,
      name: "Brainstorm",
      team: 5,
      cards: [
        {
          name: "Time Loop Experiments",
          hc: 5,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            "Draw a card. Then put a card from your hand on top of your deck.",
            [
              { hc: 5 },
              ": ",
              { keyword: 23, text: "Woman Out of Time" }
            ]
          ]
        },
        {
          name: "Borrow from the Future",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            "Reveal the top card of your deck. If it costs 2 or more, draw it. Otherwise, discard it or put it back.",
            [
              { hc: 3 },
              ": ",
              { keyword: 23, text: "Woman Out of Time" }
            ]
          ]
        },
        {
          name: "Reprogram Doombot Legions",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { team: 5 },
              ": You may look at the top two cards of your deck. If you do, KO one of them and put the other back."
            ]
          ]
        },
        {
          name: "Protégé of Dr. Doom",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              "Use one of Dr. Doom's Mastermind Tactics. You can't use any of them more than once per game. If you have already used them all, get ",
              { bold: "+4" },
              { icon: 1 },
              " instead."
            ],
            [
              { italic: "(Take another turn; or draw three extra cards at end of turn; or you may recruit a " },
              { hc: 5 },
              { italic: " or " },
              { hc: 3 },
              { italic: " Hero for free; or all other players draw a card or discard a card.)" },
            ]
          ]
        }
      ]
    },
    {
      id: 223,
      name: "Fantastic Four United",
      team: 5,
      cards: [
        {
          name: "Human Torch",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " KO up to two Wounds from your hand and/or discard pile."
            ],
            [
              { keyword: 4, text: "Focus 6" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " You get ",
              { bold: "+6" },
              { icon: 1 },
              " and gain a Wound."
            ]
          ]
        },
        {
          name: "Thing",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "0+",
          recruit: "2+",
          abilities: [
            [
              { team: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ],
            [
              { keyword: 4, text: "Focus 3" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Invisible Woman",
          hc: 1,
          rarity: 2,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              "If you played any other cards that cost 4 this turn, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."

            ],
            [
              { keyword: 4, text: "Focus 4" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Rescue a Bystander, then you may KO a card from your hand or discard pile.",
            ]
          ]
        },
        {
          name: "Mr. Fantastic",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "2",
          abilities: [
            "Draw two cards.",
            [
              { keyword: 4, text: "Focus 5" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " You get ",
              { bold: "+7" },
              { icon: 1 },
              " usable only against the Mastermind."
            ]
          ]
        }
      ]
    },
    {
      id: 224,
      name: "Heralds of Galactus",
      team: 0,
      cards: [
        {
          name: "Firelord",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "This turn, your Heroes' Conqueror abilities also give you ",
              { icon: 1 },
              " if those city spaces have been destroyed.",
            ],
            [
              { hc: 3 },
              ": ",
              { keyword: 49, text: "Bridge Conqueror 2" },
            ]
          ]
        },
        {
          name: "Silver Surfer",
          hc: 3,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Draw a card, then you may move a Villain to an adjacent city space. If another Villain is already there, swap them."
            ]
          ]
        },
        {
          name: "Stardust",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "4",
          abilities: [
            [
              { keyword: 4, text: "Focus 4" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              { keyword: 49, text: "Rooftops Conqueror 4" },
            ],
            [
              { keyword: 4, text: "Focus 11" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Search the Hero Deck, HQ, or your deck or discard pile for “Galactus Hungers“ and put it on top of your deck. Shuffle any deck you searched."
            ]
          ]
        },
        {
          name: "Galactus Hungers",
          hc: 3,
          rarity: 3,
          cost: 10,
          attack: "8+",
          abilities: [
            [
              "If you have played another Herald of Galactus this turn, destroy the leftmost city space, defeat any Villain there, and then you get ",
              { bold: "+2" },
              { icon: 1 },
              " for each destroyed city space. If this destroys the last city space, Galactus consumes the Earth. You Win, Evil Wins, and all other players lose."
            ]
          ]
        }
      ]
    },
    {
      id: 225,
      name: "Psi-Lord",
      team: 5,
      cards: [
        {
          name: "Avert Future Tragedy",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          attack: "0+",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of the Villain Deck. If it's a Master Strike, you get ",
              { bold: "+3" },
              { icon: 1 },
              ", KO it, and replace it with the top card from the Bystander Stack."
            ],
            [
              { hc: 2 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Interdimensional Rescue",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 4, text: "Focus 1" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of the Villain Deck. If it's a Bystander, you get ",
              { bold: "+2" },
              { icon: 1 },
              ", rescue it, and shuffle the top card from the Bystander Stack into the Villain Deck."
            ],
            [
              { hc: 1 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Slip the Timestream",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "3",
          abilities: [
            [
              { keyword: 4, text: "Focus 1" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of the Villain Deck. If it's a Villain, you get ",
              { bold: "+1" },
              { icon: 1 },
              " and you may fight it this turn."
            ],
            [
              { hc: 2 },
              { hc: 1 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Reshape Reality",
          hc: 2,
          rarity: 3,
          cost: 7,
          recruit: "3",
          attack: "3+",
          abilities: [
            [
              { keyword: 4, text: "Focus 3" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of the Villain Deck. If it's a Scheme Twist, you get ",
              { bold: "+4" },
              { icon: 1 },
              " and shuffle the Villain Deck."
            ],
            [
              { team: 5 },
              { team: 5 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        }
      ]
    },
    {
      id: 226,
      name: "Super-Skrull",
      team: 0,
      cards: [
        {
          name: "Stretching Credibility",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 4, text: "Focus 2" },
              { icon: 1 },
              "  ",
              { icon: 5 },
              " When you draw a new hand of cards at the end of this turn, draw an extra card."
            ],
          ]
        },
        {
          name: "Rock Solid",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "0+",
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              ": ",
              { keyword: 49, text: "Sewers Conqueror 1." },
            ],
            [
              { keyword: 4, text: "Focus 3" },
              { icon: 1 },
              "  ",
              { icon: 5 },
              " You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Transparent Motives",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { keyword: 49, text: "Bank Conqueror 1" },
            ],
            [
              { keyword: 4, text: "Focus 3" },
              { icon: 1 },
              "  ",
              { icon: 5 },
              " You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Put to the Torch",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            { keyword: 49, text: "Bridge Conqueror 1" },
            { keyword: 49, text: "Streets Conqueror 1" },
            [
              "You may gain a Wound. If you do, you get ",
              { keyword: 49, text: "Rooftops Congueror 4" },
              "."
            ]

          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 76,
      name: "Annihilus",
      vAttack: "10",
      vp: 6,
      cards: [
        {
          name: "Annihilus",
          vAttack: "10+",
          abilities: [
            { keyword: 71, text: "Mass Momentum 2" },
            [
              { bold: "Always Leads" },
              ": Annihilation Wave ",
              { italic: "(1 player: Use 6 Henchmen.)" },
            ],
            [
              { bold: "Master Strike" },
              ": Reveal the top card of the Villain Deck. If it's a Bystander, Annihilus captures it. If it's a Villain, it enters the city, captures a Bystander, and moves forward an extra space ",
              { italic: "(before doing any Ambush ability)." },
            ],
          ]
        },
        {
          name: "Epic Annihilus",
          epic: true,
          vAttack: "12+",
          abilities: [
            { keyword: 71, text: "Mass Momentum 4" },
            [
              { bold: "Always Leads" },
              ": Annihilation Wave. Add an extra Villain Group ",
              { italic: "(even for 1 player.)" },
            ],
            [
              { bold: "Master Strike" },
              ": Play a card from the Villain Deck. If it's a Villain, play a second card from the Villain Deck.",
            ],
          ]
        },
        {
          name: "The Cosmic Control Rod",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals the top three cards of their deck, KOs the highest-cost Hero that is revealed this way and puts the rest back in any order."
            ]
          ]
        },
        {
          name: "Surging Annihilation",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Check all Annihilation Wave villains from each other player's victory pile. The one worth the most VP enters the city, and that player rescues bystanders equal to that villain's VP."
            ]
          ]
        },
        {
          name: "Deploy the Planet Killer",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final tactic: if Weaponized Galactus is in the city, he escapes. If Weaponized Galactus wasn't in the city and wasn't in any victory pile, then he enters the city from the Villain Deck and you shuffle the Villain Deck."
            ]
          ]
        },
        {
          name: "Pull Into the Negative Zone",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The cost of each hero currently in the HQ gets -2 this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 77,
      name: "Kang the Conqueror",
      tacticName: "Kang",
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Kang the Conqueror",
          vAttack: "8+",
          abilities: [
            [
              "Kang has ",
              { keyword: 49, text: "Conqueror 2" },
              " for each city space under a Time Incursion. ",
              { italic: "(He benefits from Villains there.)" },
              " Villains under a Time Incursion get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Timelines of Kang"
            ],
            [
              { bold: "Master Strike" },
              ": This Strike becomes a “Time Incursion.“ Put it above the rightmost city space that doesn't yet have a Time Incursion."
            ]
          ]
        },
        {
          name: "Epic Kang the Conqueror",
          epic: true,
          vAttack: "10+",
          abilities: [
            [
              "Kang has ",
              { keyword: 49, text: "Conqueror 3" },
              " for each city space under a Time Incursion. Villains under a Time Incursion get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Timelines of Kang"
            ],
            [
              { bold: "Master Strike" },
              ": This Strike becomes a “Time Incursion.“ Put it above the rightmost city space that doesn't yet have a Time Incursion. If there are any Villains in any Time Incursions, each player gains a Wound."
            ]
          ]
        },
        {
          name: "Iron Lad Grows Up to Become Kang",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic: Each player reveals their hand. You choose a card named “Iron Lad“ from the Escape Pile, or from ",
              { keyword: 23, text: "Man Out of Time" },
              ", or from any player's hand or discard pile or that you played this turn. Shuffle Iron Lad into Kang's Tactics as a Mastermind Tactic that says “",
              { bold: "Fight" },
              ": Gain this as a Hero.“"
            ]
          ]
        },
        {
          name: "Leap Into the Timestream",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic: Take another turn after this one. Don't play a card from the Villain Deck at the start of that turn."
            ]
          ]
        },
        {
          name: "Pull From the Future",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top two cards of the Villain Deck. Choose a Villain revealed this way to enter an empty city space under a Time Incursion. Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Savior From Another Timeline",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may gain a Hero from any HQ space under a Time Incurion. Send it as a ",
              { keyword: 23, text: "Man or Woman Out of Time" },
              "."
            ]
          ]
        }
      ]
    },
  ],
  schemes: [
    {
      id: 138,
      name: "Pulse Waves From the Negative Zone",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists."
            ],
            [
              { bold: "Twist 1,3,5,7" },
              ": “Negative Pulse“: This turn, Heroes in the HQ cost ",
              { bold: "-1" },
              { icon: 2 },
              " and Villains and Masterminds get ",
              { bold: "-1" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Twist 2,4,6,8" },
              ": “Positive Pulse“: This turn, Heroes in the HQ cost ",
              { bold: "+1" },
              { icon: 2 },
              " and Villains and Masterminds get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Twist 9" },
              ": Evil wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 139,
      name: "Sneak Attack the Heroes' Homes",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. Each player chooses a Hero to be part of the Hero Deck. Randomly select other Heroes up to the normal number of Heroes. Each player adds to their starting deck three non-rare cards with different names from the Hero they chose and three Wounds."
            ],
            [
              { bold: "Twist 1-5" },
              ": Each player discards a non-grey Hero or gains a Wound."
            ],
            [
              { bold: "Twist 6" },
              ": Evil Wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 140,
      name: "Put Humanity on Trial",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Stack 11 Bystanders next to the Scheme face down as “Galactus Jurors.“"
            ],
            [
              { bold: "Special Rules" },
              ": Each Twist gives you a challenge to achieve this turn. If you do it, you have convinced a Juror, and you rescue them. If you don't, put that Juror face up next to the Villain Deck, voting to condmen Humanity."
            ],
            [
              { bold: "Twist 1-2" },
              ": “Opening Arguments“: Discard three cards with different names."
            ],
            [
              { bold: "Twist 3,5,7" },
              ": “Question Witnesses“: Recruit a Hero that costs 5 or more."
            ],
            [
              { bold: "Twist 4,6,8" },
              ": “Introduce Evidence“: Defeat Villain(s) worth 3VP or more."
            ],
            [
              { bold: "Twist 9-11" },
              ": “Closing Arguments“: Defeat the Mastermind."
            ],
            [
              { bold: "Evil Wins" },
              ": When 6 Jurors vote to Condmen Humanity."
            ],
          ]
        },
      ]
    },
    {
      id: 141,
      name: "Breach Parallel Dimensions",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. Add 4 extra Bystanders to the Villain Deck. Deal the shuffled Villain Deck into several “Dimension“ decks where the first Dimension has 1 card, the next has 2 cards, then 3, 4, etc. ",
              { italic: "(The final Dimension might not have enough cards to reach its full number.)" }
            ],
            [
              { bold: "Special Rules" },
              ": Each turn, you choose which Dimension you play a card from. All players have “",
              { keyword: 4, text: "Focus 1" },
              { icon: 2 },
              "  ",
              { icon: 5 },
              " Reveal the top card of any Dimension and put it back on the top or bottom of that deck.“ If a Dimension ever has no cards left, even in the middle of a card ability, it is destroyed. Mark it with a face up Wound."
            ],
            [
              { bold: "Twist" },
              ": Choose a Dimension and play two cards from it. ",
              { italic: "(It's ok if it only has 1.)" }
            ],
            [
              { bold: "Evil Wins" },
              ": When at least half of the original Dimensions are destroyed."
            ],
          ]
        },
      ]
    },
  ]
}