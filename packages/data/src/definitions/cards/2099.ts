import { CardSetDef } from '../cardTypes';

export const Marvel2099: CardSetDef = {
  id: 40,
  heroes: [
    {
      id: 281,
      name: "Spider-Man 2099",
      team: 3,
      cards: [
        {
          name: "Retractable Talons",
          imageUrl: "",
          hc: 1,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              "You may send this ",
              { keyword: 60 },
              ".",
            ],
            [
              { keyword: 98 },
              { hc: 1 },
              ": Draw a card.",
            ],
          ]
        },
        {
          name: "Venomous Fangs",
          imageUrl: "",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 98 },
              { hc: 1 },
              { hc: 1 },
              ": Draw a card.",
            ],
          ]
        },
        {
          name: "Spider-Silk Webbing",
          imageUrl: "",
          hc: 4,
          rarity: 2,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              "The next Hero you recruit this turn goes on top of your deck."
            ],
            [
              { hc: 4 },
              ": ",
              { keyword: 99 },
            ],
          ]
        },
        {
          name: "Spider-Sense Telepathy",
          imageUrl: "",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              "Reveal the top three cards of the Hero Deck. You may send one of them ",
              { keyword: 60 },
              ". Put the rest back in any order."
            ],
            [
              { team: 3 },
              ": You may play a copy of the card you sent ",
              { keyword: 60 },
              " this way.",
            ],
          ]
        },
      ]
    },
    {
      id: 282,
      name: "Ghost Rider 2099",
      team: 6,
      cards: [
        {
          name: "Cyber-Specter",
          imageUrl: "",
          hc: 5,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { keyword: 98 },
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              ".",
            ],
            [
              { keyword: 98 },
              { hc: 5 },
              { hc: 5 },
              ": Draw a card.",
            ],
          ]
        },
        {
          name: "Hell Ride",
          imageUrl: "",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "You may send this and a card from the HQ ",
              { keyword: 60 },
              ". If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              ".",
            ],
            [
              { keyword: 98 },
              { hc: 5 },
              { hc: 5 },
              { hc: 5 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              ".",
            ],
          ]
        },
        {
          name: "Death Beyond Death",
          imageUrl: "",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { team: 6 },
              ": You may KO a Henchman from your Victory Pile. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              " and you may do that Henchman's Fight effect.",
            ],
          ]
        },
        {
          name: "Infernal Chainsaw",
          imageUrl: "",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "You may send a card from the HQ ",
              { keyword: 60 },
              ".",
            ],
            [
              { keyword: 98 },
              { hc: 5 },
              ": ",
              { keyword: 99 },
              " and you get ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { hc: 5 },
              " card in your Victory Pile.",
            ],
          ]
        },
      ]
    },
    {
      id: 283,
      name: "Doctor Doom 2099",
      team: 0,
      cards: [
        {
          name: "Subvert This New Future",
          imageUrl: "",
          hc: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              "You may send this and a card from your hand or discard pile ",
              { keyword: 60 },
              ". If you do, you get ",
              { bold: "+1" },
              { icon: 2 },
              ".",
            ],
          ]
        },
        {
          name: "Doomblast",
          imageUrl: "",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { keyword: 98 },
              { hc: 3 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ],
            [
              { keyword: 98 },
              { hc: 3 },
              { hc: 3 },
              { hc: 3 },
              ": Instead you get ",
              { bold: "+3" },
              { icon: 1 },
              ".",
            ],
          ]
        },
        {
          name: "Flesh-Grafted Doombots",
          imageUrl: "",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { hc: 5 },
              ": You may look at the top three cards of your deck. If you do, send one of them ",
              { keyword: 60 },
              " and put the rest back in any order.",
            ],
          ]
        },
        {
          name: "Tear Through Time Itself",
          imageUrl: "",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "You may send a card from your hand or discard pile ",
              { keyword: 60 },
              ".",
            ],
            [
              { keyword: 99 },
            ],
            [
              { keyword: 98 },
              { hc: 3 },
              { hc: 3 },
              ": If you haven't taken any extra turns this game, you may take another turn after this one. Don't play a card from the Villain Deck at the start of that turn.",
            ],
          ]
        },
      ]
    },
    {
      id: 284,
      name: "Hulk 2099",
      team: 6,
      cards: [
        {
          name: "Rage Incarnate",
          imageUrl: "",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { keyword: 98, text: "Cyber-Mod Wound" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ],
            [
              { keyword: 98, text: "Cyber-Mod 4 Wounds" },
              ": Instead you get ",
              { bold: "+2" },
              { icon: 1 },
              ".",
            ],
          ]
        },
        {
          name: "Push Pain Under the Surface",
          imageUrl: "",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            [
              "You may send a Wound from your hand or discard pile ",
              { keyword: 60 },
              ".",
            ],
            [
              { hc: 4 },
              ": You may send a Hero from your hand or discard pile ",
              { keyword: 60 },
              " instead.",
            ],
          ]
        },
        {
          name: "Massive Gamma Detonation",
          imageUrl: "",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "5",
          abilities: [
            [
              "To play this, you must discard two cards or gain a Wound.",
            ],
            [
              { hc: 5 },
              ": ",
              { keyword: 99 },
            ],
          ]
        },
        {
          name: "Cataclysmic Frenzy",
          imageUrl: "",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              "For each player, either send a Wound from that player's discard pile ",
              { keyword: 60 },
              " into your own Victory Pile, or that player gains a Wound.",
            ],
            [
              { keyword: 98, text: "Cyber-Mod Wound" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Wound in your Victory Pile.",
            ],
          ]
        },
      ]
    },
    {
      id: 285,
      name: "Ravage 2099",
      team: 6,
      cards: [
        {
          name: "Down in the Dregs",
          imageUrl: "",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { hc: 2 },
              ": Draw a card from the bottom of your deck.",
            ],
          ]
        },
        {
          name: "Toxic Mutations",
          imageUrl: "",
          hc: 4,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { hc: 4 },
              "You get ",
              { bold: "+2" },
              { icon: 1 },
              " and ",
              { keyword: 99 },
              ".",
            ],
          ]
        },
        {
          name: "Detect Vibrations",
          imageUrl: "",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "4",
          abilities: [
            [
              "Reveal the top two cards of the Villain Deck and put them back in any order.",
            ],
            [
              { keyword: 99 },
            ],
          ]
        },
        {
          name: "Overhorns and Underhorns",
          imageUrl: "",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            [
              "Reveal the top card of your deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that card's cost. Discard it or put it back.",
            ],
            [
              { team: 6 },
              ": Then do the same thing with the bottom card of your deck.",
            ],
          ]
        },
      ]
    },
  ],
  masterminds: [
    {
      id: 100,
      name: "Sinister Six 2099",
      vp: 6,
      cards: [
        {
          name: "Electro 2099",
          imageUrl: "",
          tactic: true,
          vAttack: "9",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Any “Alchemax“ or “Sinister“ Villain Group"
            ],
            [
              { bold: "Setup" },
              ": ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards three cards then draws a card. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": You may discard any number of cards, then draw that many cards. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Electro 2099",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "12",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Any “Alchemax“ or “Sinister“ Villain Group"
            ],
            [
              { bold: "Setup" },
              ": ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards four cards then draws a card. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": You may discard a card. If you do, draw a card. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Sandwoman 2099",
          imageUrl: "",
          tactic: true,
          vAttack: "6+",
          abilities: [
            [
              "Sandwoman 2099 gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each Villain in the city."
            ],
            [
              { bold: "Master Strike" },
              ": You may either recruit or attack this turn, but not both. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": The next player may either recruit or attack in their next turn, but not both. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Sandwoman 2099",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "7+",
          abilities: [
            [
              "Sandwoman 2099 gets ",
              { bold: "+3" },
              { icon: 1 },
              " for each Villain in the city."
            ],
            [
              { bold: "Master Strike" },
              ": You may either recruit or attack this turn, but not both. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": The next player may either recruit or attack in their next turn, but not both. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Vulture 2099",
          imageUrl: "",
          tactic: true,
          vAttack: "7+",
          abilities: [
            [
              "Vulture 2099 gets ",
              { bold: "+" },
              { icon: 1 },
              " equal to the highest ",
              { icon: 4 },
              " value of any Villain in the Escape Pile, Rooftops, or Bridge."
            ],
            [
              { bold: "Master Strike" },
              ": If there are any Villains on the Rooftops or Birdge, one of them escapes and each player gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": You may move a Villain to another city space. If another Villain is already there, swap them. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Vulture 2099",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "9+",
          abilities: [
            [
              "Vulture 2099 gets ",
              { bold: "+" },
              { icon: 1 },
              " equal to the highest two ",
              { icon: 4 },
              " values among Villains in the Escape Pile, Rooftops, and Bridge."
            ],
            [
              { bold: "Master Strike" },
              ": If there are any Villains on the Rooftops or Birdge, each of them escapes and each player gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": You may move a Villain to another city space. If another Villain is already there, swap them. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Doctor Octopus 2099",
          imageUrl: "",
          tactic: true,
          vAttack: "8+",
          vp: 8,
          abilities: [
            [
              "Doctor Octopus 2099 gets ",
              { bold: "+4" },
              { icon: 1 },
              " unless you played at least 8 cards or a Hero that costs 8 this turn."
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards cards whose total cost is at least 8 ",
              { italic: "(for that player)" },
              " or gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": You may gain a Hero from the HQ whose cost is at least 8. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Doctor Octopus 2099",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "8+",
          vp: 8,
          abilities: [
            [
              "Doctor Octopus 2099 gets ",
              { bold: "+8" },
              { icon: 1 },
              " unless you played at least 8 cards or a Hero that costs 8 this turn."
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards cards whose total cost is exactly 8 ",
              { italic: "(for that player)" },
              " or gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+4" },
              { icon: 2 },
              ", usable only to recruit a Hero that costs at least 8. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Venom 2099",
          imageUrl: "",
          tactic: true,
          vAttack: "10",
          vAttackAsterisk: true,
          abilities: [
            [
              "Venom 2099 gets ",
              { bold: "-1" },
              { icon: 1 },
              " for each card you have that costs 2."
            ],
            [
              { bold: "Master Strike" },
              ": Each player KOs a card that costs 2 from their hand or discard pile or gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": You may gain a Hero that costs 2 from the HQ or KO pile. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Venom 2099",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "13",
          vAttackAsterisk: true,
          abilities: [
            [
              "Venom 2099 gets ",
              { bold: "-1" },
              { icon: 1 },
              " for each card you have that costs 2."
            ],
            [
              { bold: "Master Strike" },
              ": Each player KOs a card that costs 2 from their hand or gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": You may gain a Hero that costs 2 from the HQ or KO pile. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Goblin 2099",
          imageUrl: "",
          tactic: true,
          vAttack: "11",
          vAttackAsterisk: true,
          abilities: [
            [
              "Goblin 2099 gets ",
              { bold: "-1" },
              { icon: 1 },
              " for each Bystander in your Victory Pile.",
            ],
            [
              { bold: "Master Strike" },
              ": Each player puts a Bystander from their Victory Pile into the Escape Pile or gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": Each villain in the city captures a Bystander. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Goblin 2099",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "14",
          vAttackAsterisk: true,
          abilities: [
            [
              "Goblin 2099 gets ",
              { bold: "-1" },
              { icon: 1 },
              " for each Bystander in your Victory Pile.",
            ],
            [
              { bold: "Master Strike" },
              ": Each player puts two Bystanders from their Victory Pile into the Escape Pile or gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": Each villain in the city captures a Bystander. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
      ]
    },
    {
      id: 101,
      name: "Alchemax Executives",
      vp: 6,
      cards: [
        {
          name: "Avatarr, CEO of Alchemax",
          imageUrl: "",
          tactic: true,
          vAttack: "10",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Alchemax Enforcers"
            ],
            [
              { bold: "Setup" },
              ": Add an extra Hero to the Hero Deck. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Master Strike" },
              ": Put the two highest-cost Heroes from the HQ into the Escape Pile. Then ",
              { keyword: 98 },
              { hc: 3 },
              ": Each player gains a Wound. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": Each other player puts a non-grey Hero from their hand or discard pile into the Escape Pile. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Avatarr",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "13",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Alchemax Enforcers"
            ],
            [
              { bold: "Setup" },
              ": Add an extra Hero to the Hero Deck. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Master Strike" },
              ": Put the three highest-cost Heroes from the HQ into the Escape Pile. Then ",
              { keyword: 98 },
              { hc: 3 },
              ": Each player gains a Wound to the top of their deck. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": Each other player puts a non-grey Hero from their hand into the Escape Pile. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Fearmaster, VP of the Public Eye",
          imageUrl: "",
          tactic: true,
          vAttack: "7+",
          abilities: [
            [
              "Fearmaster gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each grey Hero you have."
            ],
            [
              { bold: "Master Strike" },
              ": Put the two lowest-cost Heroes from the HQ into the Escape Pile. Then ",
              { keyword: 98 },
              { hc: 2 },
              ": Count the number of ",
              { hc: 2 },
              " cards in the Escape Pile. Each player discards that many non-grey Heroes, then draws a card for each card they discarded this way. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": Each other player discards 2 grey Heroes. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Fearmaster",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "8+",
          abilities: [
            [
              "Fearmaster gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each grey Hero you have."
            ],
            [
              { bold: "Master Strike" },
              ": Put the three lowest-cost Heroes from the HQ into the Escape Pile. Then ",
              { keyword: 98 },
              { hc: 2 },
              ": Count the number of ",
              { hc: 2 },
              " cards in the Escape Pile. Each player discards that many non-grey Heroes, then draws two cards. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": Each other player discards 3 grey Heroes. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "John Herod, Executive VP",
          imageUrl: "",
          tactic: true,
          vAttack: "8+",
          abilities: [
            [
              { keyword: 98 },
              { hc: 1 },
              { hc: 1 },
              ": John Herod gets ",
              { bold: "+5" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Master Strike" },
              ": Put the two rightmost Heroes from the HQ into the Escape Pile. Then ",
              { keyword: 98 },
              { hc: 1 },
              ": You may pay ",
              { bold: "5" },
              { icon: 1 },
              " this turn to “expose Fake Captain America.“ If you do, KO one of your Heroes. If you don't by the end of this turn, each player gains a Wound ",
              { italic: "(after you draw your new hand.) " },
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": KO two of your Heroes. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic John Herod",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "9+",
          abilities: [
            [
              { keyword: 98 },
              { hc: 1 },
              { hc: 1 },
              ": John Herod gets ",
              { bold: "+7" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Master Strike" },
              ": Put the three rightmost Heroes from the HQ into the Escape Pile. Then ",
              { keyword: 98 },
              { hc: 1 },
              ": You may pay ",
              { bold: "7" },
              { icon: 1 },
              " this turn to “expose Fake Captain America.“ If you do, KO one of your Heroes. If you don't by the end of this turn, each player gains a Wound ",
              { italic: "(after you draw your new hand.) " },
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Tiger Wylde, General of Alchemax Elite",
          imageUrl: "",
          tactic: true,
          vAttack: "9+",
          abilities: [
            [
              { keyword: 98 },
              { hc: 4 },
              ": Tiger Wylde gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { hc: 4 },
              " card in the Escape Pile.",
            ],
            [
              { bold: "Master Strike" },
              ": Put the two leftmost Heroes from the HQ into the Escape Pile. Then ",
              { keyword: 98 },
              { hc: 5 },
              ": Each player reveals a ",
              { hc: 5 },
              " card or discards a card. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": Send a Hero from the Escape Pile ",
              { keyword: 60 },
              ". Then ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
        {
          name: "Epic Tiger Wylde",
          imageUrl: "",
          tactic: true,
          epic: true,
          vAttack: "11+",
          abilities: [
            [
              { keyword: 98 },
              { hc: 4 },
              ": Tiger Wylde gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { hc: 4 },
              " card in the Escape Pile.",
            ],
            [
              { bold: "Master Strike" },
              ": Put the three leftmost Heroes from the HQ into the Escape Pile. Then ",
              { keyword: 98 },
              { hc: 5 },
              ": Each player discards a card at random. ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ],
            [
              { bold: "Fight" },
              ": Send a Hero from the Escape Pile ",
              { keyword: 60 },
              ". Then ",
              { rule: 8, text: "Adapt", keywordStyle: true },
              "."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 123,
      name: "False Aesir of Alchemax",
      cards: [
        {
          name: "Heimdall 2099",
          imageUrl: "",
          qtd: 2,
          vAttack: "3+",
          vp: "2",
          abilities: [
            [
              { keyword: 15, text: "Uru-Enchanted Weapon" },
            ],
            [
              { bold: "Ambush" },
              ": Heimdall 2099 captures a Bystander.",
            ],
            [
              { keyword: 100 },
              ": If the ",
              { italic: "(Rainbow)" },
              " Bridge is empty and Heimdall's ",
              { keyword: 15, text: "Uru-Enchanted Weapon" },
              " revealed a Villain, that Villain enters the Bridge. When a Villain enters this way, shuffle a card from the Bystander Deck into the Villain Deck.",
            ],
          ]
        },
        {
          name: "Hela 2099",
          imageUrl: "",
          qtd: 2,
          vAttack: "3+",
          vp: "3",
          abilities: [
            [
              { keyword: 15, text: "2 Uru-Enchanted Weapons" },
            ],
            [
              { keyword: 100 },
              ": A Henchman Villain from any player's Victory Pile enters the city.",
            ],
            [
              { bold: "Escape" },
              ": Each player KOs two Henchmen from their Victory Pile or gains a Wound.",
            ],
          ]
        },
        {
          name: "Loki 2099",
          imageUrl: "",
          qtd: 2,
          vAttack: "3+",
          vp: "3",
          abilities: [
            [
              { keyword: 15, text: "2 Uru-Enchanted Weapons" },
            ],
            [
              { bold: "Ambush" },
              ": Shuffle a Master Strike from the KO pile back into the Villain Deck.",
            ],
            [
              { keyword: 100 },
              ": If his ",
              { keyword: 15, text: "Uru-Enchanted Weapon" },
              " revealed any Master Strikes, play one of them.",
            ],
            [
              { bold: "Escape" },
              ": Search the Villain Deck for a Master Strike, shuffle the Villain Deck, and play that Master Strike.",
            ],
          ]
        },
        {
          name: "Thor 2099",
          imageUrl: "",
          qtd: 2,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              { keyword: 15, text: "Uru-Enchanted Weapon" },
            ],
            [
              { bold: "Ambush" },
              ": Each player discards a card that costs 5 or more or gains a Wound.",
            ],
            [
              { keyword: 100 },
              ": Put a card that costs 5 or more from your discard pile on the bottom of your deck.",
            ],
            [
              { bold: "Escape" },
              ": Repeat the Ambush effect.",
            ],
          ]
        },
      ]
    },
    {
      id: 124,
      name: "Alchemax Enforcers",
      cards: [
        {
          name: "Cyber-Nostra",
          imageUrl: "",
          qtd: 3,
          vAttack: "3+",
          vp: "2",
          abilities: [
            [
              { keyword: 98 },
              { hc: 5 },
              ": Cyber-Nostra gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each ",
              { hc: 5 },
              " card in the Escape Pile.",
            ],
            [
              { bold: "Ambush" },
              ": Put the top card of the Hero Deck into the Escape Pile.",
            ],
            [
              { bold: "Fight" },
              ": ",
              { keyword: 98 },
              { hc: 5 },
              ": KO one of your Heroes.",
            ],
          ]
        },
        {
          name: "Whackoid",
          imageUrl: "",
          qtd: 2,
          vAttack: "4+",
          vp: "3",
          abilities: [
            [
              { keyword: 98 },
              { hc: 2 },
              ": Whackoid gets ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ],
            [
              { keyword: 98 },
              { hc: 1 },
              { hc: 1 },
              { hc: 1 },
              ": Whackoid gets ",
              { bold: "+3" },
              { icon: 1 },
              ".",
            ],
            [
              { bold: "Ambush" },
              ": Put the top card of the Hero Deck into the Escape Pile. Whackoid captures all Bystanders from other Villains in the city. If he captures any Bystanders this way, each player gains a Wound.",
            ],
          ]
        },
        {
          name: "Venture",
          imageUrl: "",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Ambush" },
              ": Put the top card of the Hero Deck into the Escape Pile. Venture captures a Bystander. ",
              { keyword: 98 },
              { hc: 3 },
              ": Venture also captures a non-grey Hero from your discard pile.",
            ],
            [
              { bold: "Fight" },
              ": Either KO that captured Hero or choose a player to gain it.",
            ],
          ]
        },
        {
          name: "Jigsaw 2099",
          imageUrl: "",
          qtd: 1,
          vAttack: "6+",
          vp: "5",
          abilities: [
            [
              "Jigsaw 2099 gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander he has."
            ],
            [
              { bold: "Ambush" },
              ": Put the top card of the Hero Deck into the Escape Pile.",
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes. ",
              { keyword: 98 },
              { hc: 4 },
              ": If Jigsaw 2099 had no Bystanders, he reenters the city and captures a Bystander for each ",
              { hc: 4 },
              " card in the Escape Pile.",
            ],
            [
              { bold: "Escape" },
              ": ",
              { keyword: 98 },
              { hc: 4 },
              ": Each player gains a Wound.",
            ],
          ]
        },
      ]
    },
  ],
  schemes: [
    {
      id: 182,
      name: "Pull Reality Into Cyberspace",
      imageUrl: "",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 7 Twists, representing “Cyberspace.“",
            ],
            [
              { bold: "Special Rules" },
              ": Enemies under any Cyberspace get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Cyberspace on the board, and they can be fought with any combination of ",
              { icon: 2 },
              " and ",
              { icon: 1 },
              ".",
            ],
            [
              { bold: "Twists 1-5" },
              ": Put this Cyberspace above the rightmost city space that isn't yet under Cyberspace.",
            ],
            [
              { bold: "Twist 6" },
              ": Put this Cyberspace above the Mastermind.",
            ],
            [
              { bold: "Twist 7" },
              ": Evil Wins!",
            ],
          ]
        },
      ]
    },
    {
      id: 183,
      name: "Become President of the United States",
      imageUrl: "",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists",
            ],
            [
              { bold: "Special Rules" },
              ": Once per turn, you may stack one of your non-grey Heroes next to this Scheme to earn “Ten Million Votes“ For that Hero Name. If you do, you may also send one of your grey Heroes ",
              { keyword: 60 },
              " as “Secret Service.“",
            ],
            [
              { bold: "Twist" },
              ": If there's a Villain in the Bank or Streets, the Mastermind “vows to cursh crime“ and you stack this Twist next to the Mastermind as “Ten Million Votes.“ Otherwise, you may discard two cards to “counter negative advertising,“ shuffle this Twist back into the Villain Deck, and play another card from that deck. If you don't discard, stack this Twist next to the Mastermind as “Ten Million Votes.“",
            ],
            [
              { bold: "Evil Wins" },
              ": When the Mastermind is elected President by having Forty Million more votes than the highest-voted Hero Name.",
            ],
          ]
        },
      ]
    },
    {
      id: 184,
      name: "Subjugate Earth with Mega-Corporations",
      imageUrl: "",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": Add an extra Hero. 11 Twists.",
            ],
            [
              { bold: "Twist" },
              ": Put the Hero from the HQ space under the Bank into a “Mega-Corp Domination“ Stack matching its Hero Class ",
              { italic: "(off of the board)" },
              ". Do the listed effect for that Mega-Corp:",
            ],
            [
              { hc: 4 },
              ": ",
              { bold: "Green Globe" },
              ": Each player discards a card with a ",
              { icon: 2 },
              " icon.",
            ],
            [
              { hc: 2 },
              ": ",
              { bold: "Alchemax" },
              ": Each player discards a ",
              { hc: 2 },
              " Hero or gains a Wound.",
            ],
            [
              { hc: 1 },
              ": ",
              { bold: "Public Eye" },
              ": Each plaeyer discards two cards, then draws a card.",
            ],
            [
              { hc: 5 },
              ": ",
              { bold: "D/MONIX" },
              ": Each player discards a card with an ",
              { icon: 1 },
              " icon.",
            ],
            [
              { hc: 3 },
              ": ",
              { bold: "Stark-Fujikawa" },
              ": A villain from your Victory Pile reenters the city.",
            ],
            [
              { bold: "Evil Wins" },
              ": When a single Mega-Corp has 3 Dominations.",
            ],
          ]
        },
      ]
    },
    {
      id: 185,
      name: "Befoul Earth Into a Polluted Wasteland",
      imageUrl: "",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": Add an extra Hero. 8 Twists, representing “Toxic Sludge.“",
            ],
            [
              { bold: "Twist" },
              ": Put this Toxic Sludge under and HQ space. NO space can have two Sludges unless all spaces already have one.",
            ],
            [
              { bold: "Special Rules" },
              ": To recruit a Hero, you must also pay 2 ",
              { icon: 2 },
              " for each Toxic Sludge under it. During your turn, if there is any Sludge under the HQ, you may “flush the Toxic Sludge into the river.“ If you do, then KO all the Sludge and the Heroes in those HQ spaces, and each player gains a Wound.",
            ],
            [
              { bold: "Evil Wins" },
              ": When the Hero Deck runs out, or there are 8 Toxic Sludges under the HQ and/or in the river ",
              { italic: "(KO pile)" },
              ".",
            ],
          ]
        },
      ]
    },
  ],
}