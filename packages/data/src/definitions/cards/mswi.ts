import { CardSetDef } from '../cardTypes';

export const MSWhatIf: CardSetDef = {
  id: 38,
  heroes: [
    {
      id: 265,
      name: "Captain Carter",
      team: 25,
      cards: [
        {
          name: "Super Soldier Serum",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainCarter_2Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          attack: "0+",
          abilities: [
            [
              { keyword: 91 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              " and ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Wartime Logistics",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainCarter_3Common.png",
          hc: 2,
          qtd: 3,
          rarity: 1,
          cost: 3,
          recruit: "1+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each different printed ",
              { icon: 2 },
              " number among all your Heroes. "
            ],
            [
              { italic: "(1+ is the same printed number as 1.)" },
            ]
          ]
        },
        {
          name: "Coordinated Assault",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainCarter_4Common.png",
          hc: 5,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each different printed ",
              { icon: 1 },
              " number among all your Heroes. "
            ],
            [
              { italic: "(1+ is the same printed number as 1.)" },
            ]
          ]
        },
        {
          name: "The Shield of Britain",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainCarter_5Uncommon.png",
          hc: 5,
          qtd: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              "Once per turn, when a player gains a Wound, you may reveal this card to return that Wound to the Wound Stack. If you do, the player whose turn it is gets ",
              { keyword: 92, text: "Liberate 3" },
              "."
            ],
          ]
        },
        {
          name: "Give Them All We've Got",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainCarter_6Uncommon.png",
          hc: 4,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "5",
          abilities: [
            [
              "To play this, you must put another card from your hand on top of your deck."
            ],
          ]
        },
        {
          name: "Icon of Hope",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/CaptainCarter_1Rare.png",
          hc: 4,
          qtd: 1,
          rarity: 3,
          cost: 8,
          recruit: "2+",
          attack: "4+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each different printed ",
              { icon: 2 },
              " number among all your Heroes."
            ],
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each different printed ",
              { icon: 1 },
              " number among all your Heroes."
            ],
            [
              { italic: "(1+ is the same printed number as 1.)" },
            ]
          ]
        },
      ]
    },
    {
      id: 266,
      name: "Star-Lord T'Challa",
      team: 25,
      cards: [
        {
          name: "Fight or Flight",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Star-LordTChalla_2Common.png",
          hc: 4,
          hc2: 1,
          qtd: 3,
          rarity: 1,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "Choose one: You get ",
              { keyword: 51 },
              " by ",
              { hc: 4 },
              ", or you get ",
              { keyword: 51 },
              " by ",
              { hc: 1 },
              "."
            ],
            [
              { hc: 4 },
              { hc: 1 },
              ": Draw a card."
            ],
          ]
        },
        {
          name: "Interstellar Adventures",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Star-LordTChalla_3Common.png",
          hc: 1,
          hc2: 5,
          qtd: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { keyword: 91 },
              ": You get ",
              { bold: "+3" },
              { icon: 2 },
              "."
            ],
          ]
        },
        {
          name: "Plan the Heist",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Star-LordTChalla_4Common.png",
          hc: 2,
          hc2: 1,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "2",
          abilities: [
            [
              "Look at the top two cards of your deck. Discard any number of them and put the rest back in any order."
            ],
          ]
        },
        {
          name: "Unexpected Exit",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Star-LordTChalla_5Uncommon.png",
          hc: 4,
          hc2: 2,
          qtd: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { keyword: 91 },
              ": You may KO a card from your hand or discard pile."
            ],
          ]
        },
        {
          name: "Cross the Multiverse",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Star-LordTChalla_6Uncommon.png",
          hc: 4,
          hc2: 3,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              { keyword: 91 },
              ": You get ",
              { keyword: 51 },
              " by the Hero Classes of the card you revealed this way."
            ],
          ]
        },
        {
          name: "Colliding Dreams",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Star-LordTChalla_1Rare.png",
          hc: 5,
          hc2: 3,
          qtd: 1,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "Choose any number of Heroes in the HQ. Put them on the bottom of the Hero Deck."
            ],
            [
              "You get ",
              { keyword: 51 },
              " by multicolored cards."
            ],
          ]
        },
      ]
    },
    {
      id: 267,
      name: "Party Thor",
      team: 25,
      cards: [
        {
          name: "Forecast Says Thunder",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/PartyThor_2Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 2,
          recruit: "3",
          abilities: [
            [
              "To play this, you must put another card from your hand on top of your deck."
            ],
          ]
        },
        {
          name: "Worthy Challenge",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/PartyThor_3Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "Whenever you recruit a Hero that costs 5 or more this turn, you get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Destructive Feast",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/PartyThor_4Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 5,
          recruit: "3",
          abilities: [
            [
              "Whenever you recruit a Hero that costs 5 or more this turn, reveal the top card of your deck and you may KO it."
            ],
          ]
        },
        {
          name: "Asgardian Rager",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/PartyThor_5Uncommon.png",
          hc: 3,
          qtd: 2,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { hc: 3 },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Party Rampage" },
              ". If any players gained a Wound this way, you get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Only Son",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/PartyThor_6Uncommon.png",
          hc: 4,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { keyword: 91 },
              ": You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to the cost of the Hero you revealed this way."
            ],
          ]
        },
        {
          name: "Worthy of the Lightning",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/PartyThor_1Rare.png",
          hc: 3,
          qtd: 1,
          rarity: 3,
          cost: 7,
          recruit: "5",
          attack: "0+",
          abilities: [
            [
              "Whenever you recruit a Hero that costs 5 or more this turn, you get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that Hero's cost."
            ],
          ]
        },
      ]
    },
    {
      id: 268,
      name: "Killmonger, Spec Ops",
      team: 25,
      cards: [
        {
          name: "Hunt New Prey",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/KillmongerSpecOps_2Common.png",
          hc: 4,
          hc2: 5,
          qtd: 3,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each different Villain Group in your Victory Pile."
            ],
          ]
        },
        {
          name: "No Matter the Price",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/KillmongerSpecOps_3Common.png",
          hc: 5,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 5 },
              { hc: 4 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Violence Leaves Scars",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/KillmongerSpecOps_4Common.png",
          hc: 4,
          qtd: 3,
          rarity: 1,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { hc: 4 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each different Villain Group in your Victory Pile."
            ],
          ]
        },
        {
          name: "Hostage Rescue",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/KillmongerSpecOps_5Uncommon.png",
          hc: 4,
          qtd: 2,
          rarity: 2,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { keyword: 91 },
              ": ",
              { keyword: 92, text: "Liberate 3" },
            ],
          ]
        },
        {
          name: "Plot a Betrayal",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/KillmongerSpecOps_6Uncommon.png",
          hc: 5,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            [
              "Each Villain worth 3 VP or more captures a Bystander."
            ],
            [
              { hc: 5 },
              ": ",
              { keyword: 92, text: "Liberate 2" },
            ],
          ]
        },
        {
          name: "I'm the King Baby!",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/KillmongerSpecOps_1Rare.png",
          hc: 4,
          qtd: 1,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each different Villain Group in your Victory Pile."
            ],
            [
              { hc: 4 },
              ": ",
              { keyword: 92, text: "Liberate 2" },
              " for each Mastermind Tactic in your Victory Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 269,
      name: "Apocalyptic Black Widow",
      team: 25,
      cards: [
        {
          name: "Humanity's Final Hope",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ApocalypticBlackWidow_2Common.png",
          hc: 5,
          qtd: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              "If you have at least 4 Bystanders in your Victory Pile, you get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ],
          ]
        },
        {
          name: "Plant Hidden Asset",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ApocalypticBlackWidow_3Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 4,
          recruit: "1",
          abilities: [
            [
              "Draw a card."
            ],
            [
              "You may have a Villain capture a Bystander."
            ],
          ]
        },
        {
          name: "Precision Strike",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ApocalypticBlackWidow_4Common.png",
          hc: 5,
          qtd: 3,
          rarity: 1,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { hc: 5 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Relentless",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ApocalypticBlackWidow_5Uncommon.png",
          hc: 1,
          qtd: 2,
          rarity: 2,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              { hc: 1 },
              ": ",
              { keyword: 92, text: "Liberate 3" },
            ],
          ]
        },
        {
          name: "The Last Avenger",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ApocalypticBlackWidow_6Uncommon.png",
          hc: 5,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { keyword: 91 },
              ": ",
              { keyword: 92, text: "Liberate 4" },
            ],
          ]
        },
        {
          name: "Time to Save the Multiverse",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ApocalypticBlackWidow_1Rare.png",
          hc: 1,
          qtd: 1,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              { keyword: 92 },
              " equal to the number of Bystanders in your Victory Pile."
            ],
          ]
        },
      ]
    },
    {
      id: 270,
      name: "Gamora, Destroyer of Thanos",
      team: 25,
      cards: [
        {
          name: "Assassin's Stealth",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/GamoraDestroyerOfThanos_2Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              { hc: 1 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ],
          ]
        },
        {
          name: "Tactical Insight",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/GamoraDestroyerOfThanos_3Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 3,
          attack: "1",
          abilities: [
            [
              "Draw two cards. Then put a card from your hand on top of your deck."
            ],
          ]
        },
        {
          name: "Wield the Blade of Thanos",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/GamoraDestroyerOfThanos_4Common.png",
          hc: 2,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you drew this turn."
            ],
          ]
        },
        {
          name: "Titanicide",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/GamoraDestroyerOfThanos_5Uncommon.png",
          hc: 1,
          qtd: 2,
          rarity: 2,
          cost: 5,
          attack: "2",
          abilities: [
            [
              { keyword: 91 },
              ": Draw two cards.",
            ],
          ]
        },
        {
          name: "Destroy an Infinity Stone",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/GamoraDestroyerOfThanos_6Uncommon.png",
          hc: 2,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              { hc: 2 },
              { keyword: 93 },
              ": KO a card from your hand or discard pile.",
            ],
          ]
        },
        {
          name: "The Infinity Crusher",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/GamoraDestroyerOfThanos_1Rare.png",
          hc: 5,
          qtd: 1,
          rarity: 3,
          cost: 8,
          attack: "5+",
          abilities: [
            [
              { team: 25 },
              { keyword: 93, text: "Soulbind six Villains" },
              ": You get ",
              { bold: "+∞" },
              { icon: 1 },
              ", usable only for a single fight."
            ],
          ]
        },
      ]
    },
    {
      id: 271,
      name: "Doctor Strange Supreme",
      team: 25,
      cards: [
        {
          name: "Seize Infernal Power",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeSupreme_2Common.png",
          hc: 2,
          qtd: 3,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { hc: 2 },
              { keyword: 93 },
              ": You get ",
              { bold: "+" },
              { icon: 2 },
              " equal to that Villain's printed VP."
            ],
          ]
        },
        {
          name: "Summon Demon Minions",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeSupreme_3Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { hc: 3 },
              { keyword: 93 },
              ": You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to that Villain's printed VP."
            ],
          ]
        },
        {
          name: "Wards of the Vishanti",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeSupreme_4Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              { keyword: 91 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              " and you may KO a Wound from your hand or from any player's discard pile."
            ],
          ]
        },
        {
          name: "To Save Christine",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeSupreme_5Uncommon.png",
          hc: 2,
          qtd: 2,
          rarity: 2,
          cost: 2,
          attack: "0+",
          abilities: [
            [
              "Draw a card."
            ],
            [
              { hc: 2 },
              { keyword: 93, text: "Soulbind a Bystander or Villain" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              ". If it's Special Bystander, you may do its Rescue effect."
            ],
          ]
        },
        {
          name: "Break the Absolute Point in Time",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeSupreme_6Uncommon.png",
          hc: 2,
          qtd: 2,
          rarity: 2,
          cost: 6,
          abilities: [
            [
              "Reveal the top three cards of your deck. Draw one of them, KO one, and put one back.",
            ],
          ]
        },
        {
          name: "Stygian Communion",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/DoctorStrangeSupreme_1Rare.png",
          hc: 2,
          qtd: 1,
          rarity: 3,
          cost: 8,
          attack: "3",
          abilities: [
            [
              { hc: 2 },
              { keyword: 93 },
              ": Draw cards equal to that Villain's printed VP."
            ],
          ]
        },
      ]
    },
    {
      id: 272,
      name: "Uatu, The Watcher",
      team: 25,
      cards: [
        {
          name: "Diverging Timestreams",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/UatuTheWatcher_2Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 2,
          recruit: "1+",
          abilities: [
            [
              "Draw a card. Then put a card from your hand on top of your deck."
            ],
            [
              { hc: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ],
          ]
        },
        {
          name: "Another Dimension Crumbles",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/UatuTheWatcher_3Common.png",
          hc: 1,
          qtd: 3,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            [
              { keyword: 91 },
              ": You may KO a card from your hand or discard pile."
            ],
          ]
        },
        {
          name: "Break the Oath",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/UatuTheWatcher_4Common.png",
          hc: 3,
          qtd: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 91 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
          ]
        },
        {
          name: "Anoint a Champion",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/UatuTheWatcher_5Uncommon.png",
          hc: 1,
          qtd: 2,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { hc: 1 },
              ": Choose a Hero Name. You are ",
              { keyword: 51 },
              " by that Hero Name."
            ],
          ]
        },
        {
          name: "History Repeats",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/UatuTheWatcher_6Uncommon.png",
          hc: 3,
          qtd: 2,
          rarity: 2,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { hc: 3 },
              { keyword: 93 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              " and you may do that Villain's Fight effect.",
            ],
          ]
        },
        {
          name: "Convoke the Guardians",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/UatuTheWatcher_1Rare.png",
          hc: 3,
          qtd: 1,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              { keyword: 91 },
              ": Choose a Team. ",
              { italic: "(e.g. " },
              { team: 25 },
              { italic: ", " },
              { team: 4 },
              { italic: ", " },
              { team: 1 },
              { italic: ")" },
              " You are ",
              { keyword: 51 },
              " by that Team.",
            ],
          ]
        },
      ]
    },
  ],
  masterminds: [
    {
      id: 93,
      name: "Hank Pym, Yellowjacket",
      tacticName: "Hank Pym",
      vp: 6,
      vAttack: "4",
      cards: [
        {
          name: "Hank Pym, Yellowjacket",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/HankPymYellowjacket.png",
          vAttack: "4",
          vAttackAsterisk: true,
          abilities: [
            [
              "Before each time you fight Hank Pym, you must “track him down“ by discarding the top 6 cards of your deck, they paying ",
              { bold: "2" },
              { icon: 1 },
              " for each card you discarded that costs 0. If you don't pay this total, gain a Wound and your turn ends."
            ],
            [
              { bold: "Always Leads" },
              ": Any Villain Group"
            ],
            [
              { bold: "Master Strike" },
              ": Each player puts three 0-cost cards from their discard pile on top of their deck."
            ],
          ]
        },
        {
          name: "Epic Hank Pym, Yellowjacket",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/HankPymYellowjacket_Epic.png",
          vAttack: "6",
          vAttackAsterisk: true,
          epic: true,
          abilities: [
            [
              "Before each time you fight Hank Pym, you must “track him down“ by discarding the top 6 cards of your deck, they paying ",
              { bold: "3" },
              { icon: 1 },
              " for each card you discarded that costs 0. If you don't pay this total, gain a Wound and your turn ends."
            ],
            [
              { bold: "Always Leads" },
              ": Any Villain Group"
            ],
            [
              { bold: "Master Strike" },
              ": Each player puts six 0-cost cards from their discard pile on top of their deck."
            ],
          ]
        },
        {
          name: "Microscopic Research",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/HankPymYellowjacket_Tactic1.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may gain a Hero from the HQ that costs 2 or less."
            ],
          ]
        },
        {
          name: "Revenge for Ancient Grievance",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/HankPymYellowjacket_Tactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The player with the most Villains in their Victory Pile ",
              { italic: "(and/or tied for most)" },
              " gains a Wound.",
            ],
          ]
        },
        {
          name: "Save from Assassination",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/HankPymYellowjacket_Tactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose a card from your discard pile that was discarded from your deck this turn. You may put that card into your hand."
            ],
          ]
        },
        {
          name: "Vengeful Sting",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/HankPymYellowjacket_Tactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals the top three cards of their deck, discards all those cards that cost 1 or more, and puts the rest back in any order."
            ],
          ]
        },
      ]
    },
    {
      id: 94,
      name: "Zombie Scarlet Witch",
      vp: 6,
      vAttack: "9",
      cards: [
        {
          name: "Zombie Scarlet Witch",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZombieScarletWitch.png",
          vAttack: "9+",
          abilities: [
            [
              "Zombie Scarlet Witch gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero with an odd-numbered cost you played this turn."
            ],
            [
              { bold: "Always Leads" },
              ": Zombie Avengers ",
              { italic: "(in solo mode, if using another Villain Group, add “Zombie“ to their card names and they all get " },
              { bold: "Ambush" },
              { italic: ": " },
              { keyword: 16 },
              { italic: ".)" }
            ],
            [
              { bold: "Master Strike" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Zombie Rampage" },
              ". Then ",
              { keyword: 16 },
              ".",
            ],
          ]
        },
        {
          name: "Epic Zombie Scarlet Witch",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZombieScarletWitch_Epic.png",
          vAttack: "13+",
          epic: true,
          abilities: [
            [
              "Zombie Scarlet Witch gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Hero with an odd-numbered cost you played this turn."
            ],
            [
              { bold: "Always Leads" },
              ": Zombie Avengers ",
              { italic: "(in solo mode, if using another Villain Group, add “Zombie“ to their card names and they all get " },
              { bold: "Ambush" },
              { italic: ": " },
              { keyword: 16 },
              { italic: ".)" }
            ],
            [
              { bold: "Master Strike" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Zombie Rampage" },
              ". Then each player must ",
              { keyword: 93 },
              " the topmost card of their Victory Pile that isn't a villain with “Rise of the Living Dead.“ Then ",
              { keyword: 16 },
              ".",
            ],
          ]
        },
        {
          name: "Chaos Hex",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZombieScarletWitchTactic1.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Before putting this Tactic in your Victory Pile, ",
              { keyword: 16 },
              ". ",
              { italic: "(This ability never makes Mastermind Tactics return.)" },
            ],
            [
              "Each other player discards a card with an odd-numbered cost or gains a Wound."
            ],
          ]
        },
        {
          name: "Even the Odds",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZombieScarletWitchTactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Before putting this Tactic in your Victory Pile, ",
              { keyword: 16 },
              ". ",
              { italic: "(This ability never makes Mastermind Tactics return.)" },
            ],
            [
              "Each other player reveals the top six cards of their deck, discards all those cards that cost 2,4,6, or 8 and puts the rest back in any order."
            ],
          ]
        },
        {
          name: "Refuse to Accept Death",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZombieScarletWitchTactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Before putting this Tactic in your Victory Pile, ",
              { keyword: 16 },
              ". ",
              { italic: "(This ability never makes Mastermind Tactics return.)" },
            ],
            [
              "You may gain a Hero from the KO pile."
            ],
          ]
        },
        {
          name: "Wistful Illusion",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZombieScarletWitchTactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Before putting this Tactic in your Victory Pile, ",
              { keyword: 16 },
              ". ",
              { italic: "(This ability never makes Mastermind Tactics return.)" },
            ],
            [
              "Reveal the top card of the Hero Deck then put it on the bottom of the Hero Deck. You may play a copy of that card this turn."
            ],
          ]
        },
      ]
    },
    {
      id: 95,
      name: "Killmonger, The Betrayer",
      vp: 6,
      vAttack: "9",
      cards: [
        {
          name: "Killmonger, The Betrayer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KillmongerTheBetrayer.png",
          vAttack: "9",
          abilities: [
            [
              { bold: "Always Include" },
              ": Killmonger as one of the Heroes"
            ],
            [
              { bold: "Always Leads" },
              ": Vibranium Liberator Drones"
            ],
            [
              { bold: "Master Strike" },
              ": If there are any Killmonger cards in the city or HQ, each player gains a Wound. Choose a Killmonger Hero from your hand, any player's discard pile, or the HQ to enter the city as a Villain with ",
              { icon: 1 },
              " equal to its cost +3 and “",
              { bold: "Fight" },
              ": KO this or choose a player to gain it.“"
            ],
          ]
        },
        {
          name: "Epic Killmonger, The Betrayer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KillmongerTheBetrayer_Epic.png",
          vAttack: "12",
          epic: true,
          abilities: [
            [
              { bold: "Always Include" },
              ": Killmonger as one of the Heroes"
            ],
            [
              { bold: "Always Leads" },
              ": Vibranium Liberator Drones"
            ],
            [
              { bold: "Master Strike" },
              ": If there are any Killmonger cards in the city or HQ, each player gains a Wound. Each player chooses a Killmonger Hero from their hand, any player's discard pile, or the HQ to enter the city as a Villain with ",
              { icon: 1 },
              " equal to its cost +4 and “",
              { bold: "Fight" },
              ": KO this or choose a player to gain it.“"
            ],
          ]
        },
        {
          name: "Change in Loyalties",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KillmongerTheBetrayerTactic1.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Gain a Killmonger card from the city, HQ, or another player's discard pile."
            ],
          ]
        },
        {
          name: "Pulling the Strings",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KillmongerTheBetrayerTactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each different Villain Group in your Victory Pile.",
            ],
          ]
        },
        {
          name: "See You on the Flip Side",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KillmongerTheBetrayerTactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and discards a Killmonger card."
            ],
          ]
        },
        {
          name: "Sunset Over Wakanda",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/KillmongerTheBetrayerTactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": From left to right, each Killmonger Hero in the HQ enters the city as a Villain as described on the Mastermind card. Then refill all the empty HQ spaces."
            ],
          ]
        },
      ]
    },
    {
      id: 96,
      name: "Ultron Infinity",
      vp: 6,
      vAttack: "8",
      cards: [
        {
          name: "Ultron Infinity",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/UltronInfinity.png",
          vAttack: "8+",
          abilities: [
            [
              "Ultron Infinity has all the ",
              { keyword: 51 },
              " abilities of all Ultron Sentries in the city, the Escape Pile, and stacked next to him."
            ],
            [
              { bold: "Always Leads" },
              ": Ultron Sentries ",
              { italic: "(even in solo mode)" }
            ],
            [
              { bold: "Master Strike" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Ultron Rampage" },
              ". Then each player stacks an Ultron Sentry from their Victory Pile next to Ultron. Put this Strike next to Ultron as an “Infinity Stone.“ When Ultron has gained five Infinity Stones ",
              { italic: "(plus this card as the Mind Stone)" },
              ", he gets ",
              { bold: "+∞" },
              { icon: 1 },
              { italic: " (Solo mode: Also stack a random unused Ultron Sentry next to Ultron.)" }
            ],
          ]
        },
        {
          name: "Epic Ultron Infinity",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/UltronInfinity_Epic.png",
          vAttack: "12+",
          epic: true,
          abilities: [
            [
              "Ultron Infinity has all the ",
              { keyword: 51 },
              " abilities of all Ultron Sentries in the city, the Escape Pile, and stacked next to him."
            ],
            [
              { bold: "Always Leads" },
              ": Ultron Sentries ",
              { italic: "(even in solo mode)" }
            ],
            [
              { bold: "Master Strike" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Ultron Rampage" },
              ". Then each player stacks two Ultron Sentries from their Victory Pile next to Ultron. Put this Strike next to Ultron as an “Infinity Stone.“ ",
              { italic: "(Solo mode: Also stack a random unused Ultron Sentry next to Ultron.)" }
            ],
            [
              { bold: "Ultron Wins" },
              ": When he has gained five Infinity Stones.",
            ],
          ]
        },
        {
          name: "Infinity of Minions",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/UltronInfinityTactic1.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Stack an Ultron Sentry from the city next to Ultron. Then each other player chooses an Ultron Sentry from their Victory Pile to enter the city."
            ],
          ]
        },
        {
          name: "Struggle for the Infinity Stones",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/UltronInfinityTactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Gain a Hero from the HQ that has one of the Hero Classes that is ",
              { keyword: 51, text: "Empowering" },
              " Ultron.",
            ],
          ]
        },
        {
          name: "Transcend Mortality",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/UltronInfinityTactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Search the Villain Deck and stack the first Ultron Sentry you find next to Ultron. Shuffle the Villain Deck."
            ],
          ]
        },
        {
          name: "Unfettered Annihilation",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/UltronInfinityTactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": For each Ultron Sentry in your Victory Pile, you may KO a Hero from your hand or discard pile."
            ],
          ]
        },
      ]
    },
  ],
  henchmen: [
    {
      id: 38,
      name: "Giants of Jotunheim",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/GiantsOfJotunheim.png",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Ambush" },
              ": Each player discards the top three cards of their deck."
            ],
            [
              { bold: "Fight" },
              ": You may KO a grey Hero from your discard pile."
            ]
          ]
        },
      ]
    },
    {
      id: 39,
      name: "Vibranium Liberator Drones",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/VibraniumLiberatorDrones.png",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Ambush" },
              ": Another Villain captures a Bystander. "
            ],
            [
              { bold: "Fight" },
              ": ",
              { keyword: 92, text: "Liberate 3" },
              ". The next time you rescue a Bystander this turn ",
              { italic: "(Including from this Henchmen)" },
              ", KO one of your Heroes."
            ]
          ]
        },
      ]
    },
    {
      id: 40,
      name: "Ultron Sentries",
      imageUrl: "",
      vAttack: "2+",
      vp: 1,
      cards: [
        {
          name: "Ultron Sentries (Covert)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/UltronSentries_Covert.png",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 1 }
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Ultron Sentries (Instinct)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/UltronSentries_Instinct.png",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 2 }
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Ultron Sentries (Ranged)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/UltronSentries_Ranged.png",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 3 }
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Ultron Sentries (Strength)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/UltronSentries_Strength.png",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 4 }
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
        {
          name: "Ultron Sentries (Tech)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/UltronSentries_Tech.png",
          abilities: [
            [
              { keyword: 51 },
              " by ",
              { hc: 5 }
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 114,
      name: "Intergalactic Party Animals",
      cards: [
        {
          name: "Captain Marvel, End of the Party",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/IntergalacticPartyAnimalsCaptainMarvelEndOfTheParty.png",
          qtd: 1,
          vAttack: "7+",
          vp: "5",
          abilities: [
            [
              "Captain Marvel gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each other Intergalactic Party Animal in the city and/or Escape Pile."
            ],
            [
              { bold: "Ambush" },
              ": Each player reveals a ",
              { hc: 4 },
              " Hero or gains a Wound.",
            ],
            [
              { bold: "Escape" },
              ": Captain Marvel ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". She gains the ability “",
              { bold: "Master Strike" },
              ": Repeat her Ambush effect.“"
            ],
          ]
        },
        {
          name: "Frigga, Mother of Thor",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/IntergalacticPartyAnimalsFriggaMotherOfThor.png",
          qtd: 1,
          vAttack: "12",
          vp: "6",
          abilities: [
            [
              "During your turn, you may discard a card that costs 5 or more to “hide the party“ and shuffle Frigga into the Villain Deck. If you do, you may KO one of your Heroes, then you must play a card from the Villain Deck.",
            ],
            [
              { bold: "Ambush" },
              ": Frigga ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". She gains the ability “",
              { bold: "Master Strike" },
              ": If there are any Intergalactic Party Animals in the city, each player discards a card.“",
            ],
          ]
        },
        {
          name: "Party Korg",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/IntergalacticPartyAnimalsPartyKorg.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ],
            [
              { bold: "Escape" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Party Rampage" }
            ],
          ]
        },
        {
          name: "Party Nebula",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/IntergalacticPartyAnimalsPartyNebula.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Ambush" },
              ": If there are any other Intergalactic Party Animals in the city, each player discards a card."
            ],
            [
              { bold: "Escape" },
              ": Same effect.",
            ],
          ]
        },
        {
          name: "Party Kraglin",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/IntergalacticPartyAnimalsPartyKraglin.png",
          qtd: 1,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Intergalactic Party Animal in your Victory Pile ",
              { italic: "(including this one)" },
              "."
            ],
          ]
        },
        {
          name: "Party Korath",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/IntergalacticPartyAnimalsPartyKorath.png",
          qtd: 1,
          vAttack: "4+",
          vp: "2",
          abilities: [
            [
              "Party Korath gets ",
              { bold: "+" },
              { icon: 1 },
              " for each Bystander held among all Intergalactic Party Animals.",
            ],
            [
              { bold: "Ambush" },
              ": Each player may draw a card. Korath captures a Bystander for each card drawn this way."
            ],
          ]
        },
        {
          name: "Party Skrull",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/IntergalacticPartyAnimalsPartySkrull.png",
          qtd: 1,
          vAttack: "2+",
          vp: "3",
          abilities: [
            [
              { bold: "Ambush" },
              ": Party Skrull captures the highest-cost Hero from all the HQ spaces under Intergalactic Party Animals. Party Skrull gets ",
              { bold: "+" },
              { icon: 1 },
              " equal to that Hero's cost."
            ],
            [
              { bold: "Fight" },
              ": Either KO that Hero or choose a player to gain it."
            ],
          ]
        },
        {
          name: "Party Surtur",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/IntergalacticPartyAnimalsPartySurtur.png",
          qtd: 1,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Party Rampage" }
            ],
            [
              { bold: "Fight" },
              ": You may KO a grey Hero from your discard pile."
            ],
          ]
        },
      ]
    },
    {
      id: 115,
      name: "Rival Overlords",
      cards: [
        {
          name: "Thanos",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/RivalOverlordsThanos.png",
          qtd: 1,
          vAttack: "12",
          vAttackAsterisk: true,
          vp: "6",
          abilities: [
            [
              "Thanos gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each other Rival Overlord that's in the city or a Mastermind."
            ],
            [
              { bold: "Escape" },
              ": Thanos ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Each player discards half of their cards ",
              { italic: "(round down the discards)" },
              ".“"
            ],
          ]
        },
        {
          name: "Dormammu",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/RivalOverlordsDormammu.png",
          qtd: 1,
          vAttack: "11",
          vAttackAsterisk: true,
          vp: "6",
          abilities: [
            [
              "Dormammu gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each other Rival Overlord that's in the city or a Mastermind."
            ],
            [
              { bold: "Escape" },
              ": Dormammu ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Each player reveals the top of their deck. If it costs 1 or more, that player gains a Wound.“"
            ],
          ]
        },
        {
          name: "Ego",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/RivalOverlordsEgo.png",
          qtd: 1,
          vAttack: "10",
          vAttackAsterisk: true,
          vp: "5",
          abilities: [
            [
              "Ego gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each other Rival Overlord that's in the city or a Mastermind."
            ],
            [
              { bold: "Escape" },
              ": Ego ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Reveal the top card of the Villain Deck. If it's a Master Strike, play it.“"
            ],
          ]
        },
        {
          name: "Loki",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/RivalOverlordsLoki.png",
          qtd: 1,
          vAttack: "9",
          vAttackAsterisk: true,
          vp: "5",
          abilities: [
            [
              "Loki gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each other Rival Overlord that's in the city or a Mastermind."
            ],
            [
              { bold: "Escape" },
              ": Loki ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Each player discards a ",
              { hc: 3 },
              " Hero or KOs one of their non-grey Heroes.“"
            ],
          ]
        },
        {
          name: "Red Skull, HYDRA Occultist",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/RivalOverlordsRedSkullHydraOccultist.png",
          qtd: 1,
          vAttack: "8",
          vAttackAsterisk: true,
          vp: "4",
          abilities: [
            [
              "Red Skull gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each other Rival Overlord that's in the city or a Mastermind."
            ],
            [
              { bold: "Escape" },
              ": Red Skull ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Each player discards a ",
              { hc: 1 },
              " Hero or discards down to 4 cards.“"
            ],
          ]
        },
        {
          name: "Yondu",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/RivalOverlordsYondu.png",
          qtd: 1,
          vAttack: "7",
          vAttackAsterisk: true,
          vp: "3",
          abilities: [
            [
              "Yondu gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each other Rival Overlord that's in the city or a Mastermind."
            ],
            [
              { bold: "Ambush" },
              ": Yondu captures a Bystander."
            ],
            [
              { bold: "Fight" },
              ": Each player KOs one of their Heroes."
            ],
          ]
        },
        {
          name: "Arnim Zola, HYDRA Scientist",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/RivalOverlordsArnimZolaHydraScientist.png",
          qtd: 1,
          vAttack: "5",
          vAttackAsterisk: true,
          vp: "2",
          abilities: [
            [
              "Arnim Zola gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each other Rival Overlord that's in the city or a Mastermind."
            ],
            [
              { bold: "Fight" },
              ": During one of your turns, you may ",
              { keyword: 93, text: "Soulbind Arnim Zola" },
              " to give a Mastermind ",
              { bold: "-2" },
              { icon: 1 },
              " for one fight."
            ],
          ]
        },
        {
          name: "Ulysses Klaue",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/RivalOverlordsUlyssesKlaue.png",
          qtd: 1,
          vAttack: "6",
          vAttackAsterisk: true,
          vp: "2",
          abilities: [
            [
              "Ulysses Klaue gets ",
              { bold: "-2" },
              { icon: 1 },
              " for each other Rival Overlord that's in the city or a Mastermind."
            ],
            [
              { bold: "Ambush" },
              ": A Villain in the city with an “ascend“ ability ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              "."
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ],
          ]
        },
      ]
    },
    {
      id: 116,
      name: "Black Order Guards",
      cards: [
        {
          name: "Cull Obsidian",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/BlackOrderGuardsCullObsidian.png",
          qtd: 3,
          vAttack: "2+",
          vp: "2",
          abilities: [
            [
              { keyword: 51 },
              " by cards that cost 5 or more."
            ],
            [
              { bold: "Fight" },
              ": For each Hero in the HQ that costs 5 or more, you get ",
              { bold: "+1" },
              { icon: 2 },
              ".",
            ],
          ]
        },
        {
          name: "Corvus Glaive",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/BlackOrderGuardsCorvusGlaive.png",
          qtd: 2,
          vAttack: "3+",
          vp: "3",
          abilities: [
            [
              { keyword: 51 },
              " by cards that cost 5 or more."
            ],
            [
              { bold: "Ambush" },
              ": For each Hero in the HQ that costs 5 or more, Corvus Glaive captures a Bystander.",
            ],
          ]
        },
        {
          name: "Proxima Midnight",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/BlackOrderGuardsProximaMidnight.png",
          qtd: 2,
          vAttack: "4+",
          vp: "4",
          abilities: [
            [
              { keyword: 51 },
              " by cards that cost 5 or more."
            ],
            [
              { bold: "Ambush" },
              ": Each player discards a card that costs 5 or more or gains a Wound."
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes.",
            ],
          ]
        },
        {
          name: "Ebony Maw",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/BlackOrderGuardsEbonyMaw.png",
          qtd: 1,
          vAttack: "7+",
          vp: "6",
          abilities: [
            [
              { keyword: 51 },
              " by cards that cost 5 or more."
            ],
            [
              { bold: "Ambush" },
              ": Each player discards a card that costs 5 or more."
            ],
            [
              { bold: "Escape" },
              ": Ebony Maw ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Repeat his Ambush effect.“"
            ],
          ]
        },
      ]
    },
    {
      id: 117,
      name: "Zombie Avengers",
      cards: [
        {
          name: "Zombie Wong",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ZombieAvengersWong.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 16 },
            ],
            [
              { bold: "Fight" },
              ": Look at the top two cards of your deck. Draw one of them and put the other back.",
            ],
          ]
        },
        {
          name: "Zombie Hawkeye",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ZombieAvengersZombieHawkeye.png",
          qtd: 2,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 16 },
            ],
            [
              { bold: "Fight" },
              ": Each player draws a card.",
            ],
          ]
        },
        {
          name: "Zombie Wasp",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ZombieAvengersZombieWasp.png",
          qtd: 1,
          vAttack: "4+",
          vp: "3",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 16 },
            ],
            [
              "While in the Sewers, Rooftops, or Bridge, Zombie Wasp is “giant-size“ and gets ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes.",
            ],
          ]
        },
        {
          name: "Zombie Doctor Strange",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/StrangesDemonsDemonboundDoctorStrange.png",
          qtd: 1,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 16 },
            ],
            [
              { bold: "Fight" },
              ": Look at the top three cards of your deck. Draw one of them, KO one, and put one back."
            ],
            [
              { bold: "Escape" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Zombie Rampage" },
            ],
          ]
        },
        {
          name: "Zombie Iron Man",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ZombieAvengersZombieIronMan.png",
          qtd: 1,
          vAttack: "7",
          vp: "5",
          abilities: [
            [
              { bold: "Ambush" },
              ": Each player reveals a ",
              { hc: 5 },
              " card or gains a Wound. Then ",
              { keyword: 16 },
            ],
            [
              { bold: "Escape" },
              ": Zombie Iron Man ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Repeat his Ambush effect.“"
            ],
          ]
        },
        {
          name: "Zombie Captain America",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/ZombieAvengersZombieCaptainAmerica.png",
          qtd: 1,
          vAttack: "8",
          vAttackAsterisk: true,
          vp: "4",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 16 },
            ],
            [
              "Zombie Captain America gets ",
              { bold: "-1" },
              { icon: 1 },
              " for each Hero Class you have."
            ],
            [
              { bold: "Escape" },
              ": Each player reveals three Hero Classes or gains a Wound.",
            ],
          ]
        },
      ]
    },
    {
      id: 118,
      name: "Strange's Demons",
      cards: [
        {
          name: "Wolf Demon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/StrangesDemonsWolfDemon.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 93, text: "Soulbind another Villain" },
              ": KO one of your Heroes.",
            ],
          ]
        },
        {
          name: "Moose Demon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/StrangesDemonsMooseDemon.png",
          qtd: 1,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 93, text: "Soulbind a Henchman" },
              ": Draw two cards. You may do that Henchman's Fight effect.",
            ],
          ]
        },
        {
          name: "Two-Headed Ram Demon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/StrangesDemonsTwo-HeadedRamDemon.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 93, text: "Soulbind two other Villains" },
              ": KO up to two cards from your discard pile.",
            ],
          ]
        },
        {
          name: "Skull Demon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/StrangesDemonsSkullDemon.png",
          qtd: 1,
          vAttack: "5",
          vp: "3",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 93, text: "Soulbind a Bystander" },
              ": Draw two cards. Then if it's a Special Bystander, you may do its Rescue effect.",
            ],
          ]
        },
        {
          name: "Demon Dragon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/StrangesDemonsDemonDragon.png",
          qtd: 1,
          vAttack: "6",
          vp: "4",
          abilities: [
            [
              { bold: "Fight" },
              ": ",
              { keyword: 93, text: "Soulbind another Villain" },
              ": You get ",
              { bold: "+" },
              { icon: 2 },
              " equal to that Villain's VP.",
            ],
            [
              { bold: "Escape" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Demon Rampage" },
              ".",
            ],
          ]
        },
        {
          name: "Demonbound Doctor Strange",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/StrangesDemonsDemonboundDoctorStrange.png",
          qtd: 1,
          vAttack: "7",
          vp: "5",
          abilities: [
            [
              { bold: "Ambush" },
              ": Each player must ",
              { keyword: 93, text: "Soulbind a Strange's Demon Villain" },
              " or discard a card.",
            ],
            [
              { bold: "Escape" },
              ": Demonbound Doctor Strange ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Repeat his Ambush effect.“"
            ],
          ]
        },
        {
          name: "Demon Champion of Hydra",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/StrangesDemonsDemonChampionOfHydra.png",
          qtd: 1,
          vAttack: "8",
          vp: "6",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 17, text: "Cross-Dimensional Demon Rampage" },
              " Then each player must ",
              { keyword: 93, text: "Soulbind a Strange's Demon Villain" },
              ".",
            ],
            [
              { bold: "Escape" },
              ": Demon Champion of Hydra ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". It gains the ability “",
              { bold: "Master Strike" },
              ": Repeat its Ambush effect.“"
            ],
          ]
        },
      ]
    },
  ],
  schemes: [
    {
      id: 174,
      name: "Trash Earth with Hugest Party Ever",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/Trash%20Earth%20With%20Hugest%20Party%20Ever.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists. Always include the Party Thor Hero and Intergalactic Part Animals Villain Group.",
            ],
            [
              { bold: "Twist" },
              ": If Frigga, Mother of Thor, is in play, stack this Twist next to the Scheme as “Discovered Wreckage.“ Otherwise: Search the Villain Deck for Frigga and she does her Ambush ability. Then shuffle this Twist back into the Villain Deck.",
            ],
            [
              { bold: "Special Rules" },
              ": You can't fight or defeat Frigga.",
            ],
            [
              { bold: "Evil Wins" },
              ": When 5 Wreckages have been Discovered.",
            ],
          ]
        },
      ]
    },
    {
      id: 175,
      name: "Marvel Zombies",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/Marvel%20Zombies.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 4 Twists. Include exactly one Villain Group with “",
              { keyword: 16 },
              ".“ Add 8 random cards from an extra Hero to the Villain Deck. 1-2 players: Add 3 Bystanders.",
            ],
            [
              { bold: "Special Rules" },
              ": Hero cards from the Villain Deck are “Zombie“ Villains with ",
              { icon: 1 },
              " equal to their cost +1, worth VP equal to their cost. They have “",
              { bold: "Ambush" },
              ": ",
              { keyword: 16 },
              ". ",
              { bold: "Fight" },
              ": Play a copy of this card as a Hero, then put it into your Victory Pile as a Villain“ ",
              { italic: "(it still has " },
              { keyword: 16, text: "Rise" },
              { italic: ".)" },
            ],
            [
              { bold: "Twist" },
              ": Each villain in the city with “Rise of the Living Dead“ escapes. Then play another card from the Villain Deck.",
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 3 Villains per player in the Escape Pile or the Villain Deck runs out.",
            ],
          ]
        },
      ]
    },
    {
      id: 176,
      name: "Collect an Interstellar Zoo",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/Collect%20An%20Interstellar%20Zoo.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists",
            ],
            [
              { bold: "Twist" },
              ": Each player reveals their hand. Starting with the current player, then clockwise, the first player to have one of this kind of Hero in their hand or discard pile stacks it next to this scheme, “stolen for the Zoo.“",
            ],
            [
              { bold: "Twist 1" },
              ": ",
              { hc: 4 },
              { bold: " T2" },
              ": ",
              { hc: 2 },
              { bold: " T3" },
              ": ",
              { hc: 1 },
              { bold: " T4" },
              ": ",
              { hc: 5 },
              { bold: " T5" },
              ": ",
              { hc: 3 },
              { bold: " T6" },
              ": 5-cost. ",
              { bold: "T7" },
              ": 4-cost. ",
              { bold: "T8" },
              ": 3-cost. ",
              { bold: "T9" },
              ": 0-cost. ",
              { bold: "T10" },
              ": ",
              { icon: 2 },
              " icon. ",
              { bold: "T11" },
              ": ",
              { icon: 1 },
              " icon."
            ],
            [
              { bold: "Evil Wins" },
              ": When the Zoo has 5 heroes.",
            ],
          ]
        },
      ]
    },
    {
      id: 177,
      name: "Breach the Nexus of All Realities",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/Breach%20The%20Nexus%20Of%20All%20Realities.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": (1-2 players: Use 3 Villain Groups.) Stack each Villain Group seperately face down as its own “Reality.“ Add 2 Twists to each Reality. Shuffle together all the Henchmen, Master Strikes, and Bystanders for your player count and randomly distribute them amongst all the Realities, as evenly as possible. Shuffle each Reality seperately.",
            ],
            [
              { bold: "Special Rules" },
              ": Each turn, you choose which Reality ",
              { italic: "(Villain Deck)" },
              " plays a card. They all play into the same city.",
              
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to this Reality as a “Dimensional Breach.“ If this was the second Breach for that Reality, destory that Reality, KO'ing all its cards.",
            ],
            [
              { bold: "Evil Wins" },
              ": When all Realities have been destroyed.",
            ],
          ]
        },
      ]
    },
  ],
  bystanders: [
    {
      id: 52,
      name: "Bystander",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/What%20If%20Bystander.png",
      vp: 1,
      cards: [
        {
          qtd: 25,
          abilities: []
        }
      ]
    },
    {
      id: 53,
      name: "Happy Hogan",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/What%20If%20B%20Happy%20Hogan.png",
      vp: 1,
      cards: [
        {
          qtd: 1,
          abilities: [
            [
              "When you rescue this Bystander, reveal the top card of the Villain Deck. If it's a Master Strike or Scheme Twist, you may shuffle that deck.",
            ]
          ]
        }
      ]
    },
    {
      id: 54,
      name: "Howard Stark",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/What%20If%20B%20Howard%20Stark.png",
      vp: 1,
      cards: [
        {
          qtd: 1,
          abilities: [
            [
              "When you rescue this Bystander, reveal the top four cards of your deck. Draw each ",
              { hc: 5 },
              " and ",
              { hc: 3 },
              " Hero you revealed. Put the rest back in any order.",
            ]
          ]
        }
      ]
    },
    {
      id: 55,
      name: "Howard the Duck",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/What%20If%20B%20Howard%20the%20Duck.png",
      vp: 1,
      cards: [
        {
          qtd: 1,
          abilities: [
            [
              "When you rescue this Bystander, reveal the top four cards of the Bystander Deck. You may rescue a Special Bystander from among them, then put the rest back on the bottom of that deck.",
            ]
          ]
        }
      ]
    },
    {
      id: 56,
      name: "Pepper Potts",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/What%20If%20B%20Pepper%20Potts.png",
      vp: 1,
      cards: [
        {
          qtd: 1,
          abilities: [
            [
              "When you rescue this Bystander, you get ",
              { bold: "+1" },
              { icon: 2 },
              " if the Bank is empty and ",
              { bold: "+1" },
              { icon: 2 },
              " if the Rooftops are empty.",
            ]
          ]
        }
      ]
    },
    {
      id: 57,
      name: "Scott Lang's Head",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/What%20If%20B%20Scott%20Langs%20Head.png",
      vp: 1,
      cards: [
        {
          qtd: 1,
          abilities: [
            [
              "When you rescue this Bystander, whichever player is a head ",
              { italic: "(has the most VP or tied for most)" },
              " may KO one of their cards.",
            ]
          ]
        }
      ]
    },
  ],
}
