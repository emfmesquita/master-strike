import { CardSetDef } from '../cardTypes';

export const WeaponX: CardSetDef = {
  id: 41,
  heroes: [
    {
      id: 286,
      name: "Fantomex",
      team: 7,
      cards: [
        {
          name: "Sentient Bullets",
          imageUrl: "",
          hc: 3,
          rarity: 1,
          cost: 1,
          attack: "0+",
          abilities: [
            [
              { keyword: 101 },
            ],
          ]
        },
        {
          name: "Three Brains",
          imageUrl: "",
          hc: 5,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            [
              { keyword: 101 },
              ", getting ",
              { icon: 2 },
              " instead of ",
              { icon: 1 },
              ". If you got at least ",
              { bold: "3"},
              { icon: 2 },
              " this way, draw a card."
            ],
          ]
        },
        {
          name: "Misdirection",
          imageUrl: "",
          hc: 1,
          rarity: 2,
          cost: 3,
          attack: "0+",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              "When you draw a new hand this turn, draw an extra card, then put a card from your hand on top of your deck."
            ],
          ]
        },
        {
          name: "Weapon XIII",
          imageUrl: "",
          hc: 5,
          rarity: 3,
          cost: 4,
          attack: "1+",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { hc: 5 },
              ": You may KO one of your cards that has the same cost as any of your other cards."
            ],
          ]
        },
      ]
    },
    {
      id: 287,
      name: "Marrow",
      team: 7,
      cards: [
        {
          name: "Bone Shards",
          imageUrl: "",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              { team: 7 },
              ": ",
              { keyword: 36 },
            ],
          ]
        },
        {
          name: "Hyper-Adaptive Skeleton",
          imageUrl: "",
          hc: 4,
          rarity: 1,
          cost: 2,
          attack: "1+",
          recruit: "1+",
          abilities: [
            [
              "For all of your Heroes' ",
              { keyword: 36 },
              " abilities this turn, you get the Berserked cards' printed ",
              { icon: 2 },
              " just like you get their printed ",
              { icon: 1 },
              "."
            ],
            [
              { hc: 4 },
              ": ",
              { keyword: 36 },
            ],
          ]
        },
        {
          name: "Osteogenesis",
          imageUrl: "",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "2",
          recruit: "1",
          abilities: [
            [
              "Draw two cards. Then put a card from your hand on top of your deck."
            ],
          ]
        },
        {
          name: "Metabolic Overdrive",
          imageUrl: "",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              "Reveal the top six cards of your deck. Discard all the ones that cost 0 and put the rest back in any order."
            ],
          ]
        },
      ]
    },
    {
      id: 288,
      name: "Weapon H",
      team: 1,
      cards: [
        {
          name: "Evolving Abilities",
          imageUrl: "",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          recruit: "0+",
          abilities: [
            [
              "You may have this card make all ",
              { icon: 2 },
              " instead of ",
              { icon: 1 },
              { italic: " (including the ability below)" },
              ".",
            ],
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              ".",
            ],
          ]
        },
        {
          name: "The Future of Warfare",
          imageUrl: "",
          hc: 4,
          rarity: 1,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "Look at the top card of your deck."
            ],
            [
              "Discard it or put it back."
            ],
            [
              { hc: 4 },
              ": ",
              { keyword: 36 },
            ],
          ]
        },
        {
          name: "Slice and Smash",
          imageUrl: "",
          hc: 4,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { keyword: 36 },
            ],
            [
              { hc: 4 },
              ": You may KO the card you Berserked.",
            ],
          ]
        },
        {
          name: "Ultimate Killing Machine",
          imageUrl: "",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { hc: 4 },
              ": Using the Wound Deck, ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", putting those discarded Wounds on the bottom of the Wound Deck.",
            ],
          ]
        },
      ]
    },
    {
      id: 289,
      name: "Weapon X (Wolverine)",
      team: 6,
      cards: [
        {
          name: "Infuse Skeleton with Adamantium",
          imageUrl: "",
          hc: 5,
          rarity: 1,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              "To play this, you must put another card from your hand on top of your deck.",
            ],
            [
              { keyword: 101 },
            ],
          ]
        },
        {
          name: "Raging Regeneration",
          imageUrl: "",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 36 },
            ],
            [
              { hc: 2 },
              ": You may KO a Wound from your hand or discard pile. If you do, ",
              { keyword: 36 },
              " again.",
            ],
          ]
        },
        {
          name: "Violent Conditioning",
          imageUrl: "",
          hc: 2,
          rarity: 2,
          cost: 3,
          attack: "2+",
          abilities: [
            [
              "You may gain a Wound. If you do, ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ".",
            ],
          ]
        },
        {
          name: "Escape the Weapon X Lab",
          imageUrl: "",
          hc: 2,
          rarity: 3,
          cost: 6,
          attack: "3+",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { hc: 2 },
              ": You may reveal cards from the Wound Deck until you reveal an Enraging Wound. Gain that Enraging Wound to your hand. Put the other revealed cards back on the bottom.",
            ],
            [
              "If you gain a Wound this way, ",
              { keyword: 36 },
              ".",
            ],
          ]
        },
      ]
    },
  ],
  masterminds: [
    {
      id: 102,
      name: "Omega Red",
      vp: 6,
      vAttack: "10",
      cards: [
        {
          name: "Omega Red",
          imageUrl: "",
          vAttack: "10+",
          abilities: [
            [
              "Omega Red gets ",
              { bold: "+2"},
              { icon: 1 },
              " while you have any Wounds and ",
              { bold: "+2"},
              { icon: 1 },
              " while there are any Wounds in your discard pile.",
            ],
            [
              "When you KO any Wounds for the first time in a turn, put them on the bottom of the Wound Deck and gain a Wound to the bottom of your deck.",
            ],
            [
              { bold: "Always Leads" },
              ": Any Villain Group",
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards one of their ",
              { hc: 1},
              " Heroes or gains a Wound."
            ],
          ]
        },
        {
          name: "Epic Omega Red",
          imageUrl: "",
          vAttack: "12+",
          epic: true,
          abilities: [
            [
              "Omega Red gets ",
              { bold: "+3"},
              { icon: 1 },
              " while you have any Wounds and ",
              { bold: "+3"},
              { icon: 1 },
              " while there are any Wounds in your discard pile.",
            ],
            [
              "Whenever you KO any Wounds, put them on the bottom of the Wound Deck and gain a Wound to the bottom of your deck.",
            ],
            [
              { bold: "Always Leads" },
              ": Any Villain Group",
            ],
            [
              { bold: "Master Strike" },
              ": Each player KOs one of their ",
              { hc: 1},
              " Heroes or gains a Wound."
            ],
          ]
        },
        {
          name: "Carbonadium Tentacles",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": After you draw a new hand of cards at the end of this turn, each player discards down to three cards or gains a Wound."
            ],
          ]
        },
        {
          name: "The Carbonadium Synthesizer",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You may return a Wound from your hand or any player's discard pile to the bottom of the Wound Deck. If you do, draw a card.",
            ],
          ]
        },
        {
          name: "Death Pheromones",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards a ",
              { hc: 5 },
              " Hero or gains a Wound."
            ],
          ]
        },
        {
          name: "Drain Life Force",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the final Tactic, and if you have at least two Wounds in your hand and/or discard pile, return all of them to the bottom of the Wound Deck and shuffle this Tactic back into Omega Red's other Tactics."
            ],
          ]
        },
      ]
    },
    {
      id: 103,
      name: "Romulus",
      vp: 6,
      vAttack: "9",
      cards: [
        {
          name: "Romulus",
          imageUrl: "",
          vAttack: "9+",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { bold: "Always Leads" },
              ": Weapon Plus",
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals that they have a greater ",
              { keyword: 101 },
              " than Romulus or gains a Wound. Then if this is the fifth Strike this game, this Strike becomes a Scheme Twist that takes effect immediately. ",
              { italic: "(Once per game)" },
            ],
          ]
        },
        {
          name: "Epic Romulus",
          imageUrl: "",
          vAttack: "10+",
          epic: true,
          abilities: [
            [
              { keyword: 101, text: "Doubled Weapon X Sequence" },
            ],
            [
              { bold: "Always Leads" },
              ": Weapon Plus",
            ],
            [
              { bold: "Master Strike" },
              ": Each player reveals that they have a greater ",
              { keyword: 101 },
              " than Romulus ",
              { italic: "(don't double his Sequence for this)" },
              " or gains a Wound to the top of their deck. Then if this is the third Strike this game, this Strike becomes a Scheme Twist that takes effect immediately. ",
              { italic: "(Once per game)" },
            ],
          ]
        },
        {
          name: "Anoint an Heir to Take My Place",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the last Tactic, a Hero from the HQ that costs 6 or more Ascends to become an additional Mastermind with ",
              { icon: 1 },
              " equal to its printed cost and only these abilities: “",
              { bold: "Fight" },
              ": Choose a player to gain this as a Hero."
            ],
            [
              { bold: "Master Strike" },
              ": Each player discards a card of this Hero Class or gains a Wound.“"
            ],
          ]
        },
        {
          name: "Bite of the Muramasa Blade",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals three cards with different, adjacent costs ",
              { italic: "(e.g. 2,3,4)" },
              " or gains a Wound.",
            ],
          ]
        },
        {
          name: "Master of Schemes",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If this is not the last Tactic, reveal the top 2 cards of the Villain Deck. Play a Master Strike or Scheme Twist from among them, putting the rest back in any order."
            ],
          ]
        },
        {
          name: "Take Over the Weapon X Program",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+" },
              { icon: 2 },
              " equal to the ",
              { icon: 1 },
              " Romulus is gaining from ",
              { keyword: 101 },
              ".",
            ],
          ]
        },
      ]
    },
    {
      id: 104,
      name: "Sabretooth",
      vp: 6,
      vAttack: "8",
      cards: [
        {
          name: "Sabretooth",
          imageUrl: "",
          vAttack: "8+",
          abilities: [
            [
              "Sabretooth ",
              { keyword: 36, text: "Berserks" },
              " once for each Savagery stacked here.",
            ],
            [
              { bold: "Always Leads" },
              ": Berserkers",
            ],
            [
              { bold: "Master Strike" },
              ": Stack this Strike next to Sabretooth as a “Savagery.“ Each player KOs one of their Heroes that costs more than the number of Savageries. Any player that cannot do so gains a Wound instead."
            ],
            [
              { keyword: 102 },
              ": KO a non-grey Hero discarded by Sabretooth's Berserking."
            ],
          ]
        },
        {
          name: "Epic Sabretooth",
          imageUrl: "",
          vAttack: "9+",
          epic: true,
          abilities: [
            [
              "Sabretooth ",
              { keyword: 36, text: "Berserks" },
              " once for each Savagery stacked here, plus two more times.",
            ],
            [
              { bold: "Always Leads" },
              ": Berserkers",
            ],
            [
              { bold: "Master Strike" },
              ": Stack this Strike next to Sabretooth as a “Savagery.“ Each player KOs one of their Heroes that costs at least 2 more than the number of Savageries. Any player that cannot do so gains a Wound instead."
            ],
            [
              { keyword: 102 },
              ": KO a non-grey Hero discarded by Sabretooth's Berserking."
            ],
          ]
        },
        {
          name: "Adamantium-Laced Claws",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals a ",
              { hc: 2 },
              " Hero or gains a Wound."
            ],
          ]
        },
        {
          name: "Lethal Fangs",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": KO a grey Hero discarded by Sabretooth's Berserking. ",
              { italic: "(You can't KO cards you shuffled into your deck during the Berserking.)" },
            ],
          ]
        },
        {
          name: "Salivating Prowl",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top three cards of your deck. Draw one of them, discard one, and put the other back on top of your deck."
            ],
          ]
        },
        {
          name: "Sudden Savagery",
          imageUrl: "",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Stack a card from the Wound Deck next to Sabretooth as a “Savagery.“"
            ],
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 125,
      name: "Berserkers",
      cards: [
        {
          name: "Cyber",
          imageUrl: "",
          qtd: 1,
          vAttack: "5+",
          vp: "5",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 },
            ],
            [
              { bold: "Fight" },
              ": KO one your Heroes. If any of the cards you Berserked were ",
              { hc: 2 },
              " or ",
              { hc: 5 },
              ", shuffle Cyber into the Villain Deck, then play another card from the Villain Deck.",
            ],
            [
              { keyword: 102 },
              ": Each player discards a ",
              { hc: 2 },
              " or ",
              { hc: 5 },
              " Hero or gains a Wound.",
            ],
            [
              { bold: "Escape" },
              ": Do the Fail effect.",
            ],
          ]
        },
        {
          name: "Feral",
          imageUrl: "",
          qtd: 3,
          vAttack: "3+",
          hc: 2,
          team: 7,
          overrideType: 1,
          attack: "2+",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 },
            ],
            [
              { bold: "Fight" },
              ": Choose a player to gain this as a Hero.",
            ],
            [
              { keyword: 102 },
              ": KO a non-grey Hero from your discard pile.",
            ],
            [
              { bold: "Escape" },
              ": Each player discards a non-grey Hero.",
            ],
            { divider: true },
            [
              { hc: 2 },
              ": ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
            ],
          ]
        },
        {
          name: "Thornn",
          imageUrl: "",
          qtd: 2,
          vAttack: "3+",
          vp: "2",
          abilities: [
            [
              { keyword: 36 },
            ],
            [
              { bold: "Ambush" },
              ": Choose a card named “Feral“ from any player's discard pile to enter the city as a Villain.",
            ],
            [
              { bold: "Fight" },
              ": Draw the card you Berserked.",
            ],
            [
              { keyword: 102 },
              ": When you draw a new hand at the end of this turn, discard a card.",
            ],
          ]
        },
        {
          name: "Wild Child",
          imageUrl: "",
          qtd: 2,
          vAttack: "3+",
          vp: "4",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
            ],
            [
              { bold: "Fight" },
              ": KO one of the cards you Berserked this way that costs 0.",
            ],
            [
              { keyword: 102 },
              ": KO a card discarded by Wild Child's Berserking that costs 1 or more. ",
              { italic: "(You can't KO cards you shuffled into your deck during the Berserking.)" },
            ],
          ]
        },
      ]
    },
    {
      id: 126,
      name: "Weapon Plus",
      cards: [
        {
          name: "Daken",
          imageUrl: "",
          qtd: 1,
          vAttack: "3+",
          vp: "4",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { keyword: 36 },
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes.",
            ],
            [
              { keyword: 102 },
              ": You gain a Wound.",
            ],
          ]
        },
        {
          name: "Huntsman (Weapon XII)",
          imageUrl: "",
          qtd: 1,
          vAttack: "2+",
          vp: "2",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { bold: "Ambush" },
              ": Reveal the top 3 cards of the Hero Deck. Huntsman captures each that costs 4 or less. Put the rest on the bottom of the Hero Deck.",
            ],
            [
              { bold: "Fight" },
              ": If Huntsman has any captured Heroes, choose a player to gain one of them and return Huntsman to his city space with the rest of them. ",
              { italic: "(Ignore his Ambush.)" },
            ],
          ]
        },
        {
          name: "Nuke (Weapon VII)",
          imageUrl: "",
          qtd: 2,
          vAttack: "2+",
          vp: "2",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { bold: "Fight" },
              ": Reveal the top card of the Hero Deck as “Nuke's Adrenaline Pill“:",
            ],
            [
              { hc: 1 },
              ": “Rage“ — Each other player gains a Wound.",
            ],
            [
              { hc: 2 },
              ": “Balance“ — Draw a card.",
            ],
            [
              { hc: 3 },
              ": “Relax“ — You get ",
              { bold: "+2" },
              { icon: 2 },
              ".",
            ],
            [
              { bold: "Escape" },
              ": Each player gains a Wound.",
            ],
          ]
        },
        {
          name: "Skinless Man (Weapon III)",
          imageUrl: "",
          qtd: 1,
          vAttack: "3+",
          vp: "3",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { bold: "Ambush" },
              ": Skinless Man captures a Bystander of your choice from your Victory Pile. If you don't have one, gain a Wound and he captures one from the Bystander Deck.",
            ],
          ]
        },
        {
          name: "Typhoid Mary (Weapon IX)",
          imageUrl: "",
          qtd: 2,
          vAttack: "3+",
          vp: "3",
          abilities: [
            [
              { keyword: 101 },
            ],
            [
              { bold: "Fight" },
              ": Reveal the top card of the Hero Deck as her “Personality“:",
            ],
            [
              { hc: 4 },
              ": “Typhoid“ — Put a card from your discard pile on top of the deck of the player to your left.",
            ],
            [
              { hc: 2 },
              ": “Mary“ — Rescue a Bystander.",
            ],
            [
              { hc: 1 },
              ": “Bloody Mary“ — Each other player gains a Wound.",
            ],
            [
              { hc: 5 },
              ": “Mutant Zero“ — KO one of your cards that costs 0.",
            ],
            [
              { hc: 3 },
              ": “Walker“ — Put a card you played ",
            ],
            "this turn on top of your deck.",
          ]
        },
        {
          name: "Ultimaton (Weapon XV)",
          imageUrl: "",
          qtd: 1,
          vAttack: "4+",
          vp: "6",
          abilities: [
            [
              { keyword: 101, text: "Doubled Weapon X Sequence" },
            ],
            [
              { bold: "Ambush" },
              ": Each player discards a non-grey Hero.",
            ],
            [
              { bold: "Fight" },
              ": Each player KOs one of their grey Heroes.",
            ],
            [
              { bold: "Escape" },
              ": Each player KOs one of their non-grey Heroes.",
            ],
          ]
        },
      ]
    },
  ],
  schemes: [
    {
      id: 186,
      name: "Condition Logan into Weapon X",
      imageUrl: "",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Include exactly 1 Hero with Wolverine or Logan in its name.",
            ],
            [
              { bold: "Twist 1,3,5" },
              ": ",
              { italic: "“Induce Violent Rage“" },
              ": If you don't defeat an Enemy worth ",
              { bold: "2" },
              { icon: 4 },
              " or more this turn, then after you draw a new hand at the end of this turn, each player discards down to four cards.",
            ],
            [
              { bold: "Twist 2,4,6" },
              { italic: "“Test the Subject's Healing Factor“" },
              ": Each player discards a ",
              { hc: 4 },
              " or ",
              { hc: 2 },
              " Hero or gains a Wound.",
            ],
            [
              { bold: "Twist 7" },
              { italic: "“Unleash Weapon X“" },
              ": For each Wolverine and/or Logan Hero in the HQ, each player gains a Wound.",
            ],
            [
              { bold: "Twist 8" },
              ": Evil Wins!",
            ],
          ]
        },
      ]
    },
    {
      id: 187,
      name: "Go After Heroes' Loved Ones",
      imageUrl: "",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": Add an extra Hero. Don't use multiple Heroes that have the same Hero Name. 1 player: 8 Twists. 2-4 players: 10 Twists. 5 players: 11 Twists. Set aside a lowest-cost card for each Hero Name, face up, with 2 face up Bystanders under it as “Loved Ones.“",
            ],
            [
              { bold: "Twist 1-6" },
              ": KO the Hero in the rightmost HQ space. KO one of that Hero Name's Loved Ones. Each player discards a card of that Hero Name. If you discard a card this way during your turn, you ",
              { keyword: 36 },
              ". If that Hero Name has no more Loved Ones, that Hero is “Lost in Grief“: KO all of that Hero Name from the HQ and Hero Deck, then shuffle it.",
            ],
            [
              { bold: "Twist 7-11" },
              ": Do that Twist effect twice.",
            ],
            [
              { bold: "Evil Wins" },
              ": When the Hero Deck runs out.",
            ],
          ]
        },
      ]
    },
    {
      id: 188,
      name: "Wipe Heroes' Memories",
      imageUrl: "",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": Twists equal to the number of players plus 4.",
            ],
            [
              { bold: "Twist" },
              ": You “forget your past“: If you have any face up Villains or Tactics in your Victory Pile, put one of them on the bottom of your Victory Pile face down, then shuffle this Twist back into the Villain Deck, then play a card from the Villain Deck. If you didn't have any face up Villains or Tactics, then instead stack this Twist next to the Scheme as a “Total Memory Wipe.“",
            ],
            [
              { bold: "Special Rules" },
              ": Face down cards in your Victory Pile count as not being there at all until you count their VP at game end.",
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 4 Total Memory Wipes.",
            ],
          ]
        },
      ]
    },
  ],
  wounds: [
    {
      id: 12,
      name: "Blazing Vengeance",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "2",
          abilities: [
            [
              { bold: "Healing" },
              ": When you defeat a Mastermind Tactic this turn, you may KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 13,
      name: "Broken Bones",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "3",
          abilities: [
            [
              "To play this, you must put another card from your hand on top of your deck."
            ],
            [
              { bold: "Healing" },
              ": When you draw a card this turn ",
              { italic: "(including drawing this card but not including drawing a new hand at the end of your turn)" },
              ", you may KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 14,
      name: "Concussion",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "2",
          abilities: [
            [
              { bold: "Healing" },
              ": When you play two cards of the same Hero Class this turn, you may KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 15,
      name: "Erratic Powers",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "3",
          abilities: [
            [
              "To play this, you must discard three cards, then draw a card."
            ],
            [
              { bold: "Healing" },
              ": When you use a Superpower Ability this turn, you may KO this Wound. ",
              { italic: "(e.g. “" },
              { hc: 4 },
              { italic: ": You get " },
              { bold: "+1" },
              { icon: 1 },
              { italic: ".“)" },
            ],
          ]
        }
      ]
    },
    {
      id: 16,
      name: "Insults and Injuries",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "2",
          abilities: [
            [
              { bold: "Healing" },
              ": When you defeat a Villain worth at least ",
              { bold: "2" },
              { icon: 4 },
              " this turn, you may KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 17,
      name: "Last Breath",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "4",
          abilities: [
            [
              "To play this, you must gain a Wound to the top of your deck."
            ],
            [
              { bold: "Healing" },
              ": When you KO another Wound this turn, you may KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 18,
      name: "Massive Blood Loss",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "3",
          abilities: [
            [
              "To play this, you must discard a card."
            ],
            [
              { bold: "Healing" },
              ": When you discard a card this turn ",
              { italic: "(not including discarding to play this card or discarding at the end of your turn)" },
              " you may KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 19,
      name: "Shell Shock",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              { bold: "Healing" },
              ": When you recruit two Heroes this turn, you may KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 20,
      name: "Sudden Terror",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          recruit: "2",
          abilities: [
            [
              { bold: "Healing" },
              ": When you recruit a Hero that costs 7 or more this turn, you may KO this Wound.",
            ],
          ]
        }
      ]
    },
    {
      id: 21,
      name: "Wild Rage",
      imageUrl: "",
      set: 41,
      cards: [
        {
          subtitle: "Enraging Wound",
          qtd: 1,
          cost: 0,
          attack: "2",
          abilities: [
            [
              { bold: "Healing" },
              ": When you defeat a Henchman this turn, you may KO this Wound.",
            ],
          ]
        }
      ]
    },
  ]
}