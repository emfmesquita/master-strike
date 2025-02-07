import { CardSetDef } from '../cardTypes';

export const MidnightSuns: CardSetDef = {
  id: 37,
  heroes: [
    {
      id: 260,
      name: "Blade, Daywalker",
      team: 6,
      cards: [
        {
          name: "Where Monsters Lurk",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BladeDaywalker_2Common.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Rooftops" },
              ": If it's empty, draw a card."
            ],
            [
              { keyword: 19, text: "Patrol the Sewers" },
              ": If it's empty, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Ride by Moonlight",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BladeDaywalker_3Common.png",
          hc: 5,
          rarity: 1,
          cost: 5,
          attack: "3+",
          abilities: [
            [
              "You may move a Villain to another city space. If another Villain is already there, swap them."
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Hunt High And Low",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BladeDaywalker_4Uncommon.png",
          hc: 2,
          rarity: 2,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Rooftops" },
              ": If it's empty, reveal the top card of your deck. You may KO it."
            ],
            [
              { keyword: 19, text: "Patrol the Sewers" },
              ": If it's empty, reveal the bottom card of your deck. You may KO it."
            ]
          ]
        },
        {
          name: "Creature of Dawn and Dusk",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/BladeDaywalker_1Rare.png",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "4+",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              " and you may put a Hero from the HQ on the bottom of the Hero Deck."
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": ",
              { keyword: 88 }
            ]
          ]
        },
      ]
    },
    {
      id: 261,
      name: "Elsa Bloodstone",
      team: 6,
      cards: [
        {
          name: "Axe of the Slayer",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ElsaBloodstoneMK_2Common.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Streets" },
              ": If it's empty, you get ",
              { bold: "+2" },
              { icon: 2 },
              ". If it's not, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ],
            [
              { hc: 2 },
              ": Instead, you get both."
            ]
          ]
        },
        {
          name: "Silver Bullets",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ElsaBloodstoneMK_3Common.png",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Streets" },
              ": If it's empty, you get ",
              { bold: "+1" },
              { icon: 1 },
              "."
            ],
            [
              { hc: 5 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ]
          ]
        },
        {
          name: "Stalk the Night Stalkers",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ElsaBloodstoneMK_4Uncommon.png",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            [
              "You may have a Vilain or Mastermind ",
              { keyword: 89 },
              ". If it KOs a Bystander this way, you may KO a Hero from your hand or discard pile."
            ],
            [
              { hc: 5 },
              ": If a Bystander is KO'd this way, you may also rescue that Bystander instead of putting it in the KO pile."
            ]
          ]
        },
        {
          name: "Vengeance of the Bloodstone Gem",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/ElsaBloodstoneMK_1Rare.png",
          hc: 2,
          rarity: 3,
          cost: 8,
          attack: "4+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 19, text: "Patrol any city space" },
              ": If it's empty, you get the printed ",
              { icon: 2 },
              " and ",
              { icon: 1 },
              " of the Hero in the HQ space under that city space. "
            ],
            [
              { team: 6 },
              { team: 6 },
              ": ",
              { keyword: 88 },
            ]
          ]
        },
      ]
    },
    {
      id: 262,
      name: "Morbius",
      team: 6,
      cards: [
        {
          name: "Mesmerize",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Morbius_2Common.png",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2+",
          abilities: [
            [
              { keyword: 64, text: "Moonlight" },
              ": ",
              { keyword: 88 },
              ", gaining ",
              { icon: 2 },
              " instead of ",
              { icon: 1 },
              ".",
            ],
          ]
        },
        {
          name: "Insatiable Craving",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Morbius_3Common.png",
          hc: 1,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { hc: 1 },
              ": ",
              { keyword: 88 },
            ]
          ]
        },
        {
          name: "Scalded by Sunlight",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Morbius_4Uncommon.png",
          hc: 4,
          rarity: 2,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": You may gain a Wound. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              ".",
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": You may KO a Wound from your hand or discard pile. If you do, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "It's Morbin' Time!",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/Morbius_1Rare.png",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "3",
          abilities: [
            [
              { hc: 1 },
              ": ",
              { keyword: 88 },
              ", drawing that many cards instead of gaining ",
              { icon: 1 },
              "."
            ]
          ]
        },
      ]
    },
    {
      id: 263,
      name: "Werewolf by Night",
      team: 6,
      cards: [
        {
          name: "Starlit Path",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WerewolfByNight_2Common.png",
          hc: 2,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Snarling Fangs",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WerewolfByNight_3Common.png",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": You may put a Hero from the HQ on the bottom of the Hero Deck.",
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": Whenever you defeat a Villain or Mastermind this turn, you may KO one of your Heroes.",
            ]
          ]
        },
        {
          name: "Release the Beast",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WerewolfByNight_4Uncommon.png",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "0+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 64, text: "Sunlight" },
              ": You get ",
              { bold: "+3" },
              { icon: 2 },
              ".",
            ],
            [
              { keyword: 64, text: "Moonlight" },
              ": ",
              { keyword: 88 },
            ],
            [
              { hc: 2 },
              ": Instead, you get both."
            ]
          ]
        },
        {
          name: "Track the Captives",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WerewolfByNight_1Rare.png",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            [
              "",
              { keyword: 64, text: "Moonlight" },
              ": Whenever you defeat a Vilain or Mastermind this turn, you may rescue a Bystander or gain a Hero from the HQ or Sidekick Deck whose cost is less than that Enemy's ",
              { icon: 1 },
              "."
            ],
            [
              { hc: 2 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              ".",
            ]
          ]
        },
      ]
    },
    {
      id: 264,
      name: "Wong, Master of the Mystic Arts",
      team: 6,
      cards: [
        {
          name: "Bridge Between Dimensions",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WongMasteroftheMysticArts_2Common.png",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Bridge" },
              ": If it's empty, draw a card.",
            ],
          ]
        },
        {
          name: "Searing Shards of Sunlight",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WongMasteroftheMysticArts_3Common.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              "",
              { keyword: 64, text: "Sunlight" },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ],
            [
              { hc: 3 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ]
          ]
        },
        {
          name: "Seal the Rift",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WongMasteroftheMysticArts_4Uncommon.png",
          hc: 1,
          rarity: 2,
          cost: 5,
          attack: "0+",
          abilities: [
            [
              { keyword: 19, text: "Patrol the Bridge" },
              ": If it's empty, draw two cards. If it's not, you get ",
              { bold: "+5" },
              { icon: 1 },
              " usable only to fight Villains on the Bridge.",
            ]
          ]
        },
        {
          name: "Face Your Demons",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/WongMasteroftheMysticArts_1Rare.png",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "6+",
          abilities: [
            [
              "Once this turn, you may fight the top card of the Bystander Deck as if it were a ",
              { bold: "4" },
              { icon: 1 },
              " “Darkhold Demon” Villain with “",
              { bold: "Fight" },
              ": KO up to two of your Heroes. Rescue this card as a Bystander.”"
            ],
            [
              { keyword: 64, text: "Sunlight" },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              ".",
            ]
          ]
        },
      ]
    },
  ],
  masterminds: [
    {
      id: 91,
      name: "Lilith, Mother of Demons",
      tacticName: "Lilith",
      vp: 6,
      vAttack: "8",
      cards: [
        {
          name: "Lilith, Mother of Demons",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/LilithMotherofDemons.png",
          vAttack: "8+",
          abilities: [
            [
              "Lilith gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in the KO pile.",
            ],
            [
              { bold: "Always Leads" },
              ": Lilin"
            ],
            [
              { bold: "Master Strike" },
              ": Lilith ",
              { keyword: 89, text: "Hunts for Victims" },
              ". If she KOs a Bystander this way, each player gains a Wound."
            ],
          ]
        },
        {
          name: "Epic Lilith",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/LilithMotherofDemons_Epic.png",
          vAttack: "10+",
          epic: true,
          abilities: [
            [
              "Lilith gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each Bystander in the KO pile.",
            ],
            [
              { bold: "Always Leads" },
              ": Lilin"
            ],
            [
              { bold: "Master Strike" },
              ": Lilith ",
              { keyword: 89, text: "Hunts for Victims" },
              ". If she KOs a Bystander this way, each player gains a Wound to the top of their deck."
            ],
          ]
        },
        {
          name: "Connoisseur of Souls",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/LilithMotherofDemonsTactic1.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Bystander in the KO pile."
            ],
            [
              "Then Lilith ",
              { keyword: 89, text: "Hunts for Victims" },
              "."
            ],
          ]
        },
        {
          name: "Offer of Corruption",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/LilithMotherofDemonsTactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Choose one:"
            ],
            {
              points: [
                [
                  "Gain a Wound and each other player KOs one of their Heroes, or"
                ],
                [
                  "KO one of your Heroes and each other player gains a Wound."
                ],
              ]
            },
            [
              "Then Lilith ",
              { keyword: 89, text: "Hunts for Victims" },
              "."
            ]
          ]
        },
        {
          name: "Mesopotamian Demon Goddess",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/LilithMotherofDemonsTactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player may discard a card for each Bystander in the KO pile. Each of those players who didn't must gain a Wound instead."
            ],
            [
              "Then Lilith ",
              { keyword: 89, text: "Hunts for Victims" },
              "."
            ]
          ]
        },
        {
          name: "Respawn Demonic Offspring",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/LilithMotherofDemonsTactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": The highest VP Lilin Villain from among all Victory Piles reenters the city. The player who had that Villain rescues three Bystanders."
            ],
            [
              "Then Lilith ",
              { keyword: 89, text: "Hunts for Victims" },
              "."
            ],
            [
              { italic: "(Don't do any Escape or Ambush effects until after you've done all the other affects on this card.)" },
            ]
          ]
        },
      ]
    },
    {
      id: 92,
      name: "Zarathos",
      vp: 6,
      vAttack: "7",
      cards: [
        {
          name: "Zarathos",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/Zarathos.png",
          vAttack: "7",
          abilities: [
            [
              { bold: "Always Leads" },
              ": The Fallen"
            ],
            [
              { bold: "Master Strike" },
              ": If any Heroes in the HQ are haunted, each player gains a Wound. Then if Zarathos is not already haunting, he ",
              { keyword: 90, text: "Haunts" },
              " the highest-cost unhaunted Hero in the HQ."
            ],
          ]
        },
        {
          name: "Epic Zarathos",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/Zarathos_Epic.png",
          vAttack: "9",
          epic: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": The Fallen"
            ],
            [
              { bold: "Master Strike" },
              ": If any Heroes in the HQ are haunted, each player gains a Wound. Then if Zarathos is not already haunting, he ",
              { keyword: 90, text: "Haunts" },
              " the highest-cost unhaunted Hero in the HQ. Then reveal the top card of the Villain Deck. If it's a Villain, it Haunts the highest cost unhaunted Hero in the HQ."
            ],
          ]
        },
        {
          name: "Eruption of Hellfire",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZarathosTactic3.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Zarathos ",
              { keyword: 90, text: "Haunts" },
              " the highest-cost unhaunted ",
              { hc: 1 },
              " and/or ",
              { hc: 3 },
              " Hero in the HQ."
            ],
            [
              "Each other player discards a ",
              { hc: 1 },
              " or ",
              { hc: 3 },
              " Hero or gains a Wound."
            ],
          ]
        },
        {
          name: "Corrupted Spirit of Vengeance",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZarathosTactic2.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Zarathos ",
              { keyword: 90, text: "Haunts" },
              " the highest-cost unhaunted ",
              { hc: 2 },
              " and/or ",
              { hc: 1 },
              " Hero in the HQ."
            ],
            [
              "Each other player discards a ",
              { hc: 2 },
              " or ",
              { hc: 1 },
              " Hero or discards down to 3 cards."
            ],
          ]
        },
        {
          name: "Imprison in the Soul Crystal",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZarathosTactic4.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Zarathos ",
              { keyword: 90, text: "Haunts" },
              " the highest-cost unhaunted ",
              { hc: 4 },
              " and/or ",
              { hc: 2 },
              " Hero in the HQ."
            ],
            [
              "If you have a ",
              { hc: 4 },
              " or ",
              { hc: 2 },
              " Hero, you may KO a Villain from your Victory Pile. If you do, draw cards equal to that Villain's VP."
            ],
          ]
        },
        {
          name: "Demonic Essence of Ghost Rider",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/ZarathosTactic1.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Zarathos ",
              { keyword: 90, text: "Haunts" },
              " the highest-cost unhaunted ",
              { hc: 3 },
              " and/or ",
              { hc: 4 },
              " Hero in the HQ."
            ],
            [
              "If you have a ",
              { hc: 3 },
              " Hero, you may KO one of your Heroes."
            ],
            [
              "If you have a ",
              { hc: 4 },
              " Hero, you may KO one of your Heroes."
            ],
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 112,
      name: "Lilin",
      cards: [
        {
          name: "Meatmarket",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/LilinMeatMarket.png",
          qtd: 2,
          vAttack: "3+",
          vp: "3",
          abilities: [
            [
              "Meatmarket gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in the KO pile.",
            ],
            [
              "",
              { bold: "Ambush" },
              ": ",
              { keyword: 89, text: "Hunt for Victims" },
            ],
            [
              { bold: "Fight" },
              ": You may KO a card from your discard pile.",
            ],
          ]
        },
        {
          name: "Outcast",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/LilinOutcast.png",
          qtd: 2,
          vAttack: "4",
          vp: "2",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 89, text: "Hunt for Victims" },
              ". Then each player reveals a random card from their hand. If that card costs less than the number of Bystanders in the KO pile, that player discards that card.",
            ],
          ]
        },
        {
          name: "Sister Nil",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/LilinSisterNil.png",
          qtd: 1,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              { keyword: 64, text: "Moonlight" },
              ": Sister Nil gets ",
              { bold: "+2" },
              { icon: 1 },
              ".",
            ],
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 89, text: "Hunt for Victims" },
              ". Then each player reveals more non-grey Heroes than the number of Bystanders in the KO pile or gains a Wound.",
            ],
            [
              { bold: "Escape" },
              ": Each player discards a Hero with an odd-numbered cost.",
            ],
          ]
        },
        {
          name: "Skinner",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/LilinSkinner.png",
          qtd: 2,
          vAttack: "5+",
          vp: "4",
          abilities: [
            [
              "Skinner gets ",
              { bold: "+2" },
              { icon: 1 },
              " if there are at least four Bystanders in the KO pile.",
            ],
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 89, text: "Hunt for Victims" },
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes.",
            ],
          ]
        },
        {
          name: "Blackout",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/LilinBlackout.png",
          qtd: 1,
          vAttack: "7+",
          vp: "5",
          abilities: [
            [
              { keyword: 64, text: "Moonlight" },
              ": Blackout gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in the KO pile.",
            ],
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 89 },
              ". If it's Moonlight, ",
              { keyword: 89 },
              " again.",
            ],
            [
              { bold: "Escape" },
              ": ",
              { italic: "(After the normal Escape KO)" },
              " If it's Moonlight, each player gains a Wound.",
            ],
          ]
        },
      ]
    },
    {
      id: 113,
      name: "Fallen",
      cards: [
        {
          name: "Metarchus",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/FallenMetarchus.png",
          qtd: 2,
          vAttack: "3+",
          vp: "4",
          abilities: [
            [
              { keyword: 88 },
            ],
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 90 },
              " the rightmost unhaunted Hero in the HQ.",
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes.",
            ],
          ]
        },
        {
          name: "Atrocity",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/FallenAtrocity.png",
          qtd: 2,
          vAttack: "3",
          vp: "2",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 90 },
              " the leftmost unhaunted Hero in the HQ.",
            ],
            [
              { bold: "Fight" },
              ": Rescue a Bystander.",
            ],
          ]
        },
        {
          name: "Patriarch",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/FallenPatriarch.png",
          qtd: 3,
          vAttack: "4",
          vp: "3",
          abilities: [
            [
              { bold: "Ambush" },
              ": ",
              { keyword: 90 },
              " an unhaunted Hero in the HQ that costs 3 or less.",
            ],
            [
              { bold: "Fight" },
              ": Reveal the top card of your deck. If it costs 3 or less, draw it.",
            ],
          ]
        },
        {
          name: "Salomé, Sorceress Supreme",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/FallenSalomeSorceressSupreme.png",
          qtd: 1,
          vAttack: "6+",
          vp: "5",
          abilities: [
            [
              { keyword: 88 },
            ],
            [
              { bold: "Fight" },
              ": KO up to two cards from your discard pile.",
            ],
            [
              { bold: "Escape" },
              ": Salomé ascends to become an ",
              { rule: 3, text: "additional Mastermind" },
              ". She gains the ability “",
              { bold: "Master Strike" },
              ": Each player discards a ",
              { team: 6 },
              " Hero or gains a Wound.“",
            ],
          ]
        },
      ]
    },
  ],
  schemes: [
    {
      id: 170,
      name: "Sire Vampires at the Blood Bank",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/SireVampiresattheBloodBank.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 10 Twists. Add an extra Henchman Group of 10 cards as “Vampire Neonates“. Put this Scheme above the Bank to mark as the “Blood Bank.“",
            ],
            [
              { bold: "Special Rules" },
              ": All “Vampire Neonates“ also have ",
              { keyword: 88 },
              ". While in the Blood Bank, they instead have double ",
              { keyword: 88 },
              ".",
            ],
            [
              { bold: "Twist" },
              ": If there is a Villain in the Blood Bank, stack a card from the Bystander Deck next to the Scheme as a “Vampire Thrall“. Otherwise, move a Villain from another city space to the Blood Bank. Either way, play another card from the Villain Deck.",
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 5 Vampire Thralls on the Villain Deck runs out.",
            ],
          ]
        },
      ]
    },
    {
      id: 171,
      name: "Ritual Sacrifice to Summon Chthon",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/RitualSacrificetoSummonChthon.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists, plus 1 per player. Add Lilin as an extra Villain Group. If using Lilith: Use 1 Twist total ",
              { italic: "(and still use an extra Villain Group)" },
              ".",
            ],
            [
              { bold: "Twist 1-4" },
              ": A Villain or Mastermind ",
              { keyword: 89, text: "Hunts for Victims" },
              ".",
            ],
            [
              { bold: "Twist 5-11" },
              ": The Mastermind ",
              { keyword: 89, text: "Hunts for Victims" },
              ".",
            ],
            [
              { bold: "Special Rules" },
              ": When 5 Bystanders are in the KO pile, shuffle all Twists from the KO pile back into the Villain Deck. Then this Scheme ",
              { rule: 7, text: "Transforms", keywordStyle: true },
              " into “Great Old One Chthon“ ",
              { italic: "(Flip it over)" },
              ". Then KO all other Masterminds and their remaining Tactics.",
            ],
          ]
        },
        {
          name: "Great Old One Chthon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/GreatOldOneChthon.png",
          overrideType: 2,
          vAttack: "27",
          vp: 13,
          transformed: true,
          subtitle: "Mastermind, Transformed",
          abilities: [
            [
              { bold: "Master Strike or Twist" },
              ": Destroy the current player. Shuffle this Strike or Twist back into the Villain Deck.",
            ],
            [
              { bold: "Chthon Wins" },
              ": When all players are destroyed.",
            ],
            [
              { italic: "(This card can only start the game as the Scheme on the other side.)" },
            ],
          ]
        },
      ]
    },
    {
      id: 172,
      name: "Midnight Massacre",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/MidnightMassacre.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. Add all 14 cards for any Blade Hero to the Villain Deck.",
            ],
            [
              { bold: "Special Rules" },
              ": Blade Hero cards in the Villain Deck and city are demonically-possessed “Switchblade“ Villains with ",
              { icon: 1 },
              " equal to their printed cost. Their only abilities are “",
              { keyword: 64, text: "Sunlight" },
              ": To fight this, you must also spend ",
              { bold: "3" },
              { icon: 2 },
              ". ",
              { keyword: 64, text: "Moonlight" },
              ": ",
              { keyword: 88 },
              ". ",
              { bold: "Fight" },
              ": Either KO this card or choose a player to gain it as a Hero.“",
            ],
            [
              { bold: "Twist" },
              ": For each Switchblade Villain in the city and/or Escape Pile, KO the top three cards of the Hero Deck. No matter how many there were, play another card from the Villain Deck.",
            ],
            [
              { bold: "Evil Wins" },
              ": When the Hero Deck or Villain Deck runs out.",
            ],
          ]
        },
      ]
    },
    {
      id: 173,
      name: "Wager at Blackjack for Heroes' Souls",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/WageratBlackjackforHeroesSouls.png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. And two extra Heroes.",
            ],
            [
              { bold: "Twist" },
              ": Reveal card from the Hero Deck, adding up their total cost until you choose to stop or your Total exceeds 21. If your Total exceeds 21 you “bust“ and the ",
              { bold: "Mastermind wins" },
              " the wager. If you didn't bust, then do the same thing for the Mastermind, stopping as soon as their Total is at least 17. If their Total exceeds 21, then they bust and ",
              { bold: "you win" },
              " the wager. If no one busts, then ",
              { bold: "you win" },
              " the wager if your Total is higher. It the Masterminds Total is equal or higher ",
              { bold: "they win" },
              ".",
            ],
            [
              { bold: "If you win" },
              ", you may gain one of the revealed Heroes that costs 6 or less. ",
              { bold: "If the Mastermind" },
              " wins stack one of the revealed Heroes next to the Scheme as a “Wagered Soul.“ Either way, put the rest of the revealed Heroes on the bottom of the Hero Deck in random order.",
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 4 Wagered Souls.",
            ],
          ]
        },
      ]
    },
  ]
}
