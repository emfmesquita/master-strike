export default {
    heroes: [
      {
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
                { keyword: 26 }
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
                { bold: "+1"},
                { icon: 1},
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
                { bold: "+2"},
                { icon: 1}
              ],
              [
                { hc: 1},
                ": ",
                { keyword: 26 }
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
                { keyword: 27 },
                ": For each card KO'd this way, you get ",
                { bold: "+1"},
                { icon: 1}
              ]
            ]
          }
        ]
      },
      {
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
               { hc: 2},
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
                { keyword: 27 },
                ": You get ",
                { bold: "+2"},
                { icon: 1}
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
                { bold: "+2"},
                { icon: 1},
                " for each Hero Class you have."
              ],
              [
                { keyword: 27 },
                ": You get ",
                { bold: "+2"},
                { icon: 2},
                " for each Hero Class you have."
              ]
            ]
          }
        ]
      },
      {
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
               { hc: 4},
               ": ",
               { keyword: 25}
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
                { bold: "+1"},
                { icon: 1},
                " for each Hero class you have."
              ],
              [
                { keyword: 25 }
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
                { team: 1},
                ": Rescue a Bystander"
              ],
              [
                { keyword: 27},
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
                { keyword: 27},
                ": ",
                { keyword: 25}
              ]
            ]
          }
        ]
      },
      {
        name: "Steve Rogers, Director of S.H.I.E.L.D.",
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
                { bold: "+1"},
                { icon: 2},
                " for each Hero Class you have."
              ],
              [
                { keyword: 27},
                ": You get ",
                { bold: "+1"},
                { icon: 1},
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
                { team: 2},
                { team: 2},
                { team: 2},
                ": You may KO a ",
                { team: 2},
                " Hero that you played this turn. If you do, rescue a Bystander."
              ]
            ]
          },
          {
            name: "Shadow of Wars Past",
            hc: 1,
            rarity: 2,
            cost: 6,
            attack: "2",
            abilities: [
              [
                { keyword: 27},
                ": ",
                { keyword: 25}
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
              "Rescue a Bystander",
              [
                { keyword: 27},
                ": You get ",
                { bold: "+3"},
                { icon: 1}
              ]
            ]
          }
        ]
      },
      {
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
               { hc: 5},
               ": ",
               { keyword: 25}
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
                { hc: 5},
                ": ",
                { keyword: 25}
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
                "If you played at least 7 other cards this turn you get +2 Attack.",
                { bold: "+2"},
                { icon: 1}
              ]
            ]
          },
          {
            name: "2>4",
            hc: 5,
            rarity: 3,
            cost: 8,
            attack: "4",
            abilities: [
              [
                "A Hero in your hand gains ",
                { keyword: 25},
                " this turn."
              ],
              [
                { hc: 5},
                ": Another Hero in your hand gains ",
                { keyword: 25},
                " this turn."
              ]
            ]
          }
        ]
      }
    ]
  }