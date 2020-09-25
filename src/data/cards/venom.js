export default {
  heroes: [
    {
      id: 177,
      name: "Carnage",
      set: 22,
      team: 20,
      cards: [
        {
          name: "Rending Claws",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 30 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Carnivore",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "0+",
          abilities: [
            [
              { keyword: 54, text: "Digest 4" },
              ": Draw two cards."
            ],
            [
              { keyword: 55 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Gruesome Feast",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { keyword: 30 },
              ": Reveal the top card of your deck. You may KO it."
            ]
          ]
        },
        {
          name: "Feast or Famine",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              { keyword: 30 },
              ": Reveal the top card of your deck. If it costs 0, KO it and you may repeat this process."
            ]
          ]
        },

      ]
    },
    {
      id: 178,
      name: "Venom",
      filterName: "Venom (Venom)",
      set: 22,
      team: 20,
      cards: [
        {
          name: "Devouring Drool",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 54, text: "Digest 3" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { keyword: 55 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ],
            [
              { hc: 2 },
              ": Instead, you get both."
            ]
          ]
        },
        {
          name: "Razor Teeth",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2",
          recruit: "0+",
          abilities: [
            [
              { keyword: 30 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Symbiotic Adaptation",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "0+",
          recruit: "0+",
          abilities: [
            { bold: "Choose one:" },
            [
              "- You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each other card you played this turn with a ",
              { icon: 2 },
              " icon."
            ],
            [
              "- Or you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each other card you played this turn with an ",
              { icon: 1 },
              " icon."
            ]
          ]
        },
        {
          name: "Insatiable Hunger",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 54, text: "Digest 8" },
              ": KO a card from your Victory Pile. You get ",
              { bold: "+6" },
              { icon: 1 },
              "."
            ],
            [
              { keyword: 55 },
              ": KO a card from your hand or discard pile. You get ",
              { bold: "+6" },
              { icon: 2 },
              "."
            ],
            [
              { team: 20 },
              { team: 20 },
              ": Instead, do both."
            ],
          ]
        },

      ]
    },
    {
      id: 179,
      name: "Venom Rocket",
      set: 22,
      team: 20,
      cards: [
        {
          name: "Hungry for Action",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 54, text: "Digest 3" },
              ": You may discard a card. If you do, draw a card."
            ]
          ]
        },
        {
          name: "Spring the Trap",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "If a Master Strike or Villain that has an Ambush ability was played this turn, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Serious Overkill",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              { keyword: 30 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Ultimate Survivor",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "When a Master Strike is played, before it takes effect, you may put Ultimate Survivor from your hand on top of your deck. If you do, you may put any card from the HQ into your hand."
            ]
          ]
        },

      ]
    },
    {
      id: 180,
      name: "Venomized Dr. Strange",
      set: 22,
      team: 20,
      cards: [
        {
          name: "Cauldron of the Cosmos",
          hc: 3,
          rarity: 1,
          cost: 2,
          recruit: "1",
          abilities: [
            [
              { keyword: 54, text: "Digest 2" },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "See Future Timelines",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 3 },
              ": Reveal the top card of your deck. If it costs 0, discard it and you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Complete the Grand Ritual",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              "If you played a 4-cost card and a 2-cost card this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Crystal of Kadavus",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "4",
          abilities: [
            "Reveal the top three cards of your deck. Draw one of them, discard one, and KO one.",
            [
              { team: 20 },
              { team: 20 },
              ": Do this ability again."
            ],
          ]
        },

      ]
    },
    {
      id: 181,
      name: "Venompool",
      set: 22,
      team: 20,
      cards: [
        {
          name: "Digest That Chimichanga",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              { keyword: 54, text: "Digest 2" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { keyword: 55 },
              ": “Rescue“ a Bystander."
            ],
            [
              { hc: 4 },
              ": Instead, you get both."
            ]
          ]
        },
        {
          name: "Shenanigans",
          hc: 5,
          rarity: 1,
          cost: 3,
          abilities: [
            [
              "Draw two cards. But you can't draw any more cards until the end of this turn."
            ]
          ]
        },
        {
          name: "Can I Get a Little Gratitude?",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Whenever you Rescue a Bystander this turn, do any “rescue“ ability on it an extra time."
            ],
            [
              { keyword: 30 },
              ": “Rescue“ a Bystander."
            ]
          ]
        },
        {
          name: "Play to the Crowd",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              { keyword: 54, text: "Digest 7" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each two Bystanders in your Victory Pile."
            ],
            [
              { keyword: 55 },
              ": “Rescue“ two Bystanders."
            ],
            [
              { team: 20 },
              { team: 20 },
              ": Instead, do both ",
              { italic: "(in order)" },
              "."
            ],
          ]
        },

      ]
    },
  ],
  masterminds: [
    {
      id: 59,
      name: "Hybrid",
      set: 22,
      attack: "6",
      vp: 6,
      cards: [
        {
          name: "Hybrid",
          dense: true,
          abilities: [
            [
              "If you fight Hybrid while he's bonded to a Villain, defeat that Villain and rescue three Bystanders instead of taking a Tactic."
            ],
            [
              { bold: "Always Leads" },
              ": Life Foundation"
            ],
            [
              { bold: "Master Strike" },
              ": A Villain from the city ",
              { keyword: 53 },
              " with Hybrid, If Hybrid was already bonded, then each player gains a Wound instead."
            ]
          ]
        },
        {
          name: "Epic Hybrid",
          attack: "8",
          epic: true,
          dense: true,
          abilities: [
            [
              "If you fight Hybrid while he's bonded to a Villain, defeat that Villain and rescue three Bystanders instead of taking a Tactic."
            ],
            [
              { bold: "Always Leads" },
              ": Life Foundation"
            ],
            [
              { bold: "Master Strike" },
              ": The highest ",
              { icon: 1 },
              " unbonded Villain from the city and/or Escape Pile ",
              { keyword: 53 },
              " with Hybrid. If no new bond could occur, then each player gains a Wound instead."
            ]
          ]
        },
        {
          name: "Alien Awakening",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final tactic, a Henchman Villain from any Victory Pile ",
              { keyword: 53 },
              " with Hybrid."
            ]
          ]
        },
        {
          name: "Escaped Monstrosity",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, a Villain from the city or Escape Pile ",
              { keyword: 53 },
              " with Hybrid."
            ]
          ]
        },
        {
          name: "Life Foundation Research",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Life Foundation Villain in your Victory Pile."
            ]
          ]
        },
        {
          name: "Symbiotic Call",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, reveal the top four cards of the Villain Deck. A Henchman Villain you revealed ",
              { keyword: 53 },
              " with Hybrid. Put the rest back in any order."
            ]
          ]
        }
      ]
    },
    {
      id: 60,
      name: "Poison Thanos",
      set: 22,
      attack: "12",
      vp: 7,
      cards: [
        {
          name: "Poison Thanos",
          attack: "12+",
          dense: true,
          abilities: [
            [
              "Poison Thanos gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each different cost among cards in his “Poisoned Souls“ pile."
            ],
            [
              { bold: "Always Leads" },
              ": Poisons"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals their hand and puts one of their non-grey Heroes next to Thanos in a “Poisoned Souls“ pile."
            ]
          ]
        },
        {
          name: "Epic Poison Thanos",
          attack: "13+",
          dense: true,
          epic: true,
          abilities: [
            [
              "Poison Thanos gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each different cost among cards in his “Poisoned Souls“ pile."
            ],
            [
              { bold: "Always Leads" },
              ": Poisons"
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals their hand and puts one of their non-grey Heroes next to Thanos in a “Poisoned Souls“ pile."
            ]
          ]
        },
        {
          name: "Desperate Rescue",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may gain a Hero from Poison Thanos' “Poisoned Souls“ pile."
            ]
          ]
        },
        {
          name: "Poisoned Loyalties",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player puts a Poisons card from their discard pile into Poison Thanos' “Poisoned Souls“ pile."
            ]
          ]
        },
        {
          name: "Searing Poisons",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards a Poisons card from their hand or gains a Wound."
            ]
          ]
        },
        {
          name: "Soul Seize",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Put all Heroes that cost 5 or more from the HQ into Poison Thanos' “Poisoned Souls“ pile."
            ]
          ]
        }
      ]
    },
  ]
}