export default {
  heroes: [
    {
      id: 101,
      name: "Agent X-13",
      set: 12,
      team: 2,
      cards: [
        {
          name: "Sniper Squad",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              { team: 2 },
              { team: 2 },
              { team: 2 },
              { team: 2 },
              ": ",
              { keyword: 23, text: "Woman Out of Time" }
            ]
          ]
        },
        {
          name: "Paramilitary Ops",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other ",
              { team: 2 },
              " Hero you played this turn that costs 1 or more."
            ]
          ]
        },
        {
          name: "Spy Network",
          hc: 1,
          rarity: 2,
          cost: 4,
          attack: "0+",
          abilities: [
            [
              "Choose one: Gain a S.H.I.E.L.D. Officer, or you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { hc: 1 },
              ": ",
              { keyword: 23, text: "Woman Out of Time" }
            ]
          ]
        },
        {
          name: "Mobilize for War",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "KO up to two ",
              { team: 2 },
              " Heroes from your hand and/or discard pile."
            ],
            [
              { keyword: 24 },
              ": For each card KO'd this way, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 102,
      name: "Captain America (Falcon)",
      set: 12,
      team: 1,
      cards: [
        {
          name: "Aerial Catch",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 2 },
              ": Rescue a Bystander."
            ]
          ]
        },
        {
          name: "Winged Salvation",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 24 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Flying Shield Block",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            "Once per turn, if a player would gain a Wound, you may reveal this card and rescue a Bystander instead."
          ]
        },
        {
          name: "Star-Spangled Hero",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              " for each Hero Class you have."
            ],
            [
              { keyword: 24 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              " for each Hero Class you have."
            ]
          ]
        }
      ]
    },
    {
      id: 103,
      name: "Captain America 1941",
      set: 12,
      team: 1,
      cards: [
        {
          name: "Devoted Patriot",
          hc: 4,
          rarity: 1,
          cost: 3,
          abilities: [
            "Draw a card.",
            [
              { hc: 4 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Storm the Beachhead",
          hc: 5,
          rarity: 1,
          cost: 5,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero class you have."
            ],
            [
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Liberate the Prisoners",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { team: 1 },
              ": Rescue a Bystander."
            ],
            [
              { keyword: 24 },
              ": ",
              "Draw a Card."
            ]
          ]
        },
        {
          name: "Punch Evil in the Face",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "5",
          abilities: [
            [
              { keyword: 24 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        }
      ]
    },
    {
      id: 104,
      name: "Steve Rogers, Director of S.H.I.E.L.D.",
      filterName: "Steve Rogers",
      set: 12,
      team: 2,
      cards: [
        {
          name: "International Strike Force",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Hero Class you have."
            ],
            [
              { keyword: 24 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero Class you have."
            ]
          ]
        },
        {
          name: "Reassign to Civilian Duty",
          hc: 2,
          rarity: 1,
          cost: 5,
          attack: "2",
          abilities: [
            [
              { team: 2 },
              { team: 2 },
              { team: 2 },
              ": You may KO a ",
              { team: 2 },
              " Hero that you played this turn. If you do, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Shadow of Wars Past",
          hc: 1,
          rarity: 2,
          cost: 4,
          attack: "2",
          abilities: [
            [
              { keyword: 24 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Save the World",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            "Rescue a Bystander.",
            [
              { keyword: 24 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 105,
      name: "Winter Soldier",
      set: 12,
      team: 0,
      cards: [
        {
          name: "Bionic Arm",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { hc: 5 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "Sniper Nest",
          hc: 5,
          rarity: 1,
          cost: 4,
          recruit: "1",
          abilities: [
            "Draw a card.",
            [
              { hc: 5 },
              ": ",
              { keyword: 23, text: "Man Out of Time" }
            ]
          ]
        },
        {
          name: "KGB Training",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              "If you played at least 7 other cards this turn you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "2>4",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4",
          abilities: [
            [
              "A Hero in your hand gains ",
              { keyword: 23, text: "Man Out of Time" },
              " this turn."
            ],
            [
              { hc: 5 },
              ": Another Hero in your hand gains ",
              { keyword: 23, text: "Man Out of Time" },
              " this turn."
            ]
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 29,
      name: "Arnim Zola",
      set: 12,
      vAttack: "6",
      vp: 6,
      cards: [
        {
          name: "Arnim Zola",
          vAttack: "6+",
          abilities: [
            [
              { keyword: 25, text: "Ultimate Abomination" }
            ],
            [
              { bold: "Always Leads" },
              ": Zola's Creations"
            ],
            [
              { bold: "Master Strike" },
              ": For each Hero in the HQ that has less than 2 printed ",
              { icon: 1 },
              ", put that Hero on the bottom of the Hero Deck, and each player discards a card of that Hero's cost."
            ]
          ]
        },
        {
          name: "Dominate the Weak",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The player of your choice gains a Hero from the HQ that has less than 2 printed ",
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Computer-Uploaded Genius",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 5 },
              " Hero or discards a card.",
            ]
          ]
        },
        {
          name: "Pet Projects",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a Zola's Creations Villain from their Victory Pile or gains a Wound.",
            ]
          ]
        },
        {
          name: "Crush Pacifist Resistance",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO up to two of your Heroes that have less than 2 printed ",
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 30,
      name: "Baron Heinrich Zemo",
      tacticName: "Baron Zemo",
      set: 12,
      vAttack: "9",
      vp: 6,
      cards: [
        {
          name: "Baron Heinrich Zemo",
          vAttack: "9+",
          dense: true,
          abilities: [
            [
              "Whenever you fight a Villain, you may use 2",
              { icon: 2 },
              " to rescue a Bystander. Baron Zemo gets ",
              { bold: "+9" },
              { icon: 1 },
              " unless you are a ",
              { keyword: 24 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Masters of Evil (WWII)"
            ],
            [
              { bold: "Master Strike" },
              ": Each player KOs a Bystander from their Victory Pile. Any player who cannot do so gains a Wound."
            ]
          ]
        },
        {
          name: "Fallen Idols",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player that is not a ",
              { keyword: 24 },
              " discards a card."
            ]
          ]
        },
        {
          name: "Finding Zemo",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top five cards of the Villain Deck. If you revealed any Bystanders, KO them and each other player gains a Wound. Put the rest back in random order.",
            ]
          ]
        },
        {
          name: "Hatred for the Avengers",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": For each of your ",
              { team: 1 },
              " Heroes, rescue a Bystander."
            ]
          ]
        },
        {
          name: "Prisoners of War",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals an ",
              { team: 1 },
              " Hero or chooses a Bystander from their Victory Pile, and you rescue that Bystander."
            ]
          ]
        }
      ]
    },
  ],
  schemes: [
    {
      id: 56,
      name: "Brainwash the Military",
      set: 12,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists. Add 12 S.H.I.E.L.D. Officers to the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": S.H.I.E.L.D. Officers in the Villain Deck are Villains. Their ",
              { icon: 1 },
              " is 3 plus the number of Twists stacked next to this Scheme. When you defeat a S.H.I.E.L.D. Officer, gain it as a Hero."
            ],
            [
              { bold: "Twist 1-6" },
              ": Stack this Twists next to the Scheme as a “Traitor Battalion.“ Play another card from the Villain Deck."
            ],
            [
              { bold: "Twist 7" },
              ": All S.H.I.E.L.D. Officers in the city escape."
            ],
            [
              { bold: "Evil Wins" },
              ": When 5 S.H.I.E.L.D. Officers escape."
            ],
          ]
        },
      ]
    },
    {
      id: 57,
      name: "Change the Outcome of WWII",
      set: 12,
      cards: [
        {
          dense: true,
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists. Add an extra Villain Group."
            ],
            [
              { bold: "Twist" },
              ": The Axis invades a new country. Put all Villains and Bystanders from the city on the bottom of the Villain Deck. The number of city spaces changes. Play 2 cards from the Villain Deck. If any Villains escape this country, stack a Twist next to the scheme as a “conquered capital.“"
            ],
            [
              { bold: "Twist 1" },
              ": Poland: 4 spaces."
            ],
            [
              { bold: "Twist 2" },
              ": France: 3 spaces."
            ],
            [
              { bold: "Twist 3" },
              ": USSR: 6 spaces."
            ],
            [
              { bold: "Twist 4" },
              ": England: 3 spaces."
            ],
            [
              { bold: "Twist 5" },
              ": USA: 5 spaces."
            ],
            [
              { bold: "Twist 6" },
              ": Australia: 2 spaces."
            ],
            [
              { bold: "Twist 7" },
              ": Switzerland: 1 space."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 capitals are conquered."
            ],
          ]
        },
      ]
    },
    {
      id: 58,
      name: "Go Back in Time to Slay Heroes' Ancestors",
      set: 12,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists. 8 Heroes in Hero deck."
            ],
            [
              { bold: "Twist" },
              ": Put a Hero form the HQ next to the Scheme, “Purged from the Timestream.“"
            ],
            [
              { bold: "Special Rules" },
              ": Whenever a Hero is in the HQ whose Hero Name has been Purged from the Timestream, KO that Hero."
            ],
            [
              { bold: "Evil Wins" },
              ": When the Hero Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 59,
      name: "The Unbreakable Enigma Code",
      set: 12,
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists."
            ],
            [
              { bold: "Twists 1-5" },
              ": Put a card from the Hero Deck face down next to the scheme as part of the “Enigma Code.“ Mix up those cards face-down."
            ],
            [
              { bold: "Twist 6" },
              ": Evil Wins!"
            ],
            [
              { bold: "Special Rules" },
              ": Whenever you fight a Villain, you may pay ",
              { bold: "1" },
              { icon: 2 },
              " to look at one of the face-down Enigma Cards. When you fight the Mastermind, first guess the color of each Enigma card, and then reveal them. If you guessed them right, fight the Mastermind as normal. If not, your turn ends, and mix up the Enigma cards face-down."
            ],
          ]
        },
      ]
    },
  ]
}