import { CardSetDef } from '../cardTypes';

export const XMen: CardSetDef = {
  id: 16,
  heroes: [
    {
      id: 132,
      name: "Aurora & Northstar",
      team: 4,
      cards: [
        {
          name: "Northern Lights",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/aurora-and-northstar-04.png",
          hc: 1,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            { keyword: 37 },
            [
              { keyword: 38 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Blazing Flare",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/aurora-and-northstar-03-1.png",
          subtitle: "Aurora",
          hc: 3,
          rarity: 1,
          divided: 1,
          cost: 4,
          recruit: "2+",
          abilities: [
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Blazing Fists",
          subtitle: "Northstar",
          hc: 4,
          rarity: 1,
          divided: 2,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 36 }
          ]
        },
        {
          name: "Twin Blast",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/aurora-and-northstar-02.png",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            { keyword: 37 },
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Mach 10",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/aurora-and-northstar-01.png",
          hc: 2,
          rarity: 3,
          cost: 7,
          recruit: "4",
          attack: "0+",
          abilities: [
            { keyword: 37 },
            [
              "All Heroes you recruit this turn have ",
              { keyword: 37 },
              "."
            ],
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "for each ",
              { keyword: 38 },
              " card you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 133,
      name: "Banshee",
      team: 4,
      cards: [
        {
          name: "Sonar Detection",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/banshee-03.png",
          hc: 1,
          rarity: 1,
          cost: 2,
          piercing: "0+",
          abilities: [
            "Draw a card.",
            { keyword: 35 },
            [
              { keyword: 34 },
              " ",
              { hc: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 6 },
              "."
            ]
          ]
        },
        {
          name: "Speed of Sound",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/banshee-04.png",
          hc: 3,
          rarity: 1,
          cost: 3,
          piercing: "2",
          abilities: [
            { keyword: 37 },
            { keyword: 35 }
          ]
        },
        {
          name: "Sonic Blastwave",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/banshee-02.png",
          hc: 3,
          rarity: 2,
          cost: 5,
          recruit: "3",
          piercing: "0+",
          abilities: [
            { keyword: 35 },
            [
              { hc: 3 },
              ": You may have this card produce ",
              { icon: 6 },
              " instead of",
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Bone-Shattering Howl",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/banshee-01.png",
          hc: 3,
          rarity: 3,
          cost: 8,
          piercing: "4",
          abilities: [
            { keyword: 35 },
            [
              { hc: 3 },
              { hc: 1 },
              ": You may use",
              { icon: 1 },
              " as if it were ",
              { icon: 6 },
              " this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 134,
      name: "Beast",
      filterName: "Beast (X-Men)",
      team: 4,
      cards: [
        {
          name: "Captivating Conundrum",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/beast-04.png",
          hc: 5,
          rarity: 1,
          cost: 2,
          attack: "1",
          abilities: [
            [
              { keyword: 34 },
              " ",
              { hc: 5 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Furry Fury",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/beast-03.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 36 },
            [
              { keyword: 34 },
              " ",
              { hc: 4 },
              ": ",
              { keyword: 36 }

            ]
          ]
        },
        {
          name: "Calculated Rage",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/beast-02.png",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3+",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { keyword: 36 }
            ]
          ]
        },
        {
          name: "Recursive Pummeling",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/beast-01.png",
          hc: 5,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            { keyword: 36 },
            [
              { keyword: 34 },
              " ",
              { team: 4 },
              ": You may return a 0-cost, 3-cost, and 4-cost card from your discard pile to your hand."
            ]
          ]
        }
      ]
    },
    {
      id: 135,
      name: "Cannonball",
      team: 4,
      cards: [
        {
          name: "Kinetic Blast Field",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cannonball-04.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "1+",
          abilities: [
            { keyword: 37 },
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
          name: "Carry to the Air",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cannonball-03.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          recruit: "2",
          abilities: [
            { keyword: 37 },
            [
              { hc: 4 },
              ": The next Hero you recruit this turn has ",
              { keyword: 37 },
              "."

            ]
          ]
        },
        {
          name: "Natural Leader",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cannonball-02.png",
          hc: 4,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            { keyword: 37 },
            [
              { hc: 4 },
              ": Return a ",
              { team: 2 },
              "Hero from your discard pile to your hand."
            ]
          ]
        },
        {
          name: "Human Cannon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/cannonball-01.png",
          hc: 4,
          rarity: 3,
          cost: 8,
          attack: "4+",
          abilities: [
            { keyword: 37 },
            [
              "If you played at least 6 other cards this turn, you get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 136,
      name: "Colossus & Wolverine",
      team: 4,
      cards: [
        {
          name: "Reliable",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/colossus-and-wolverine-04-1.png",
          subtitle: "Colossus",
          hc: 4,
          rarity: 1,
          divided: 1,
          cost: 3,
          recruit: "2",
          abilities: []
        },
        {
          name: "Unpredictable",
          subtitle: "Wolverine",
          hc: 2,
          rarity: 1,
          divided: 2,
          cost: 3,
          attack: "1+",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 }
            ]
          ]
        },
        {
          name: "Fastball Special",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/colossus-and-wolverine-03.png",
          hc: 4,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 37 },
            [
              { keyword: 34 },
              " ",
              { hc: 2 },
              ": ",
              { keyword: 36 }
            ]
          ]
        },
        {
          name: "Insane Disregard for Danger",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/colossus-and-wolverine-02.png",
          hc: 2,
          rarity: 2,
          cost: 6,
          attack: "4+",
          abilities: [
            { keyword: 36 },
            [
              "If you have a Wound in your hand or discard pile, KO it. Otherwise, gain a Wound."
            ]
          ]
        },
        {
          name: "Uncanny X-Men",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/colossus-and-wolverine-01.png",
          hc: 4,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 }
            ],
            [
              "Then, draw a card for each ",
              { team: 4 },
              " card you Berserked."
            ]
          ]
        }
      ]
    },
    {
      id: 137,
      name: "Dazzler",
      team: 4,
      cards: [
        {
          name: "Convert Sound to Light",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/dazzler-03.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "1",
          piercing: "0+",
          abilities: [
            { keyword: 35 },
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+1" },
              { icon: 6 },
              " for each Lightshow card you played this turn."
            ]
          ]
        },
        {
          name: "Dazzling Glamour",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/dazzler-04.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Citywide Mega-Concert",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/dazzler-02.png",
          hc: 5,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { keyword: 38 },
              ": When you draw a new hand of cards at the end of this turn, draw two extra cards."
            ]
          ]
        },
        {
          name: "Inspire the World",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/dazzler-01.png",
          hc: 3,
          rarity: 3,
          cost: 7,
          attack: "5",
          abilities: [
            [
              { keyword: 38 },
              ": Put a Hero from the HQ on top of your deck."
            ]
          ]
        }
      ]
    },
    {
      id: 138,
      name: "Havok",
      team: 4,
      cards: [
        {
          name: "Blinding Burst",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/havok-04.png",
          hc: 3,
          rarity: 1,
          cost: 3,
          attack: "0+",
          recruit: "2",
          abilities: [
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+3" },
              { icon: 1 },
              " usable only against the Mastermind."
            ]
          ]
        },
        {
          name: "Unleash Havok",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/havok-03.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            "To play this card, you must discard a card from your hand.",
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 }
            ]
          ]
        },
        {
          name: "Concussive Plasma",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/havok-02.png",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "2+",
          abilities: [
            [
              { keyword: 34 },
              " ",
              { hc: 3 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              "for each ",
              { hc: 3 },
              " card in your discard pile."
            ]
          ]
        },
        {
          name: "Radiation Focus Array",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/havok-01.png",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            { keyword: 36 },
            [
              { keyword: 34 },
              " ",
              { hc: 3 },
              ": You get the total printed",
              { icon: 1 },
              "of all the ",
              { hc: 3 },
              " cards in your discard pile."
            ]
          ]
        }
      ]
    },
    {
      id: 139,
      name: "Jubilee",
      team: 4,
      cards: [
        {
          name: "Light a Spark",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jubilee-03.png",
          hc: 1,
          rarity: 1,
          cost: 2,
          recruit: "0+",
          abilities: [
            "Draw a card.",
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Lightshow card you played this turn."
            ]
          ]
        },
        {
          name: "Blasting Fireworks",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jubilee-04.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          attack: "1+",
          abilities: [
            "Draw a card.",
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Lightshow card you played this turn."
            ]
          ]
        },
        {
          name: "Unexpected Explosion",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jubilee-02.png",
          hc: 2,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            [
              { keyword: 38 },
              ": Look at the top card of your deck. If it costs 0, KO it."
            ]
          ]
        },
        {
          name: "Prismatic Cascade",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/jubilee-01.png",
          hc: 1,
          rarity: 3,
          cost: 7,
          attack: "5+",
          recruit: "0+",
          abilities: [
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              "and ",
              { bold: "+1" },
              { icon: 1 },
              "for each ",
              { keyword: 38 },
              " card you played this turn."
            ]
          ]
        }
      ]
    },
    {
      id: 140,
      name: "Kitty Pryde",
      team: 4,
      cards: [
        {
          name: "Intangible Qualities",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/kitty-pryde-04.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "0+",
          attack: "0+",
          abilities: [
            [
              "Put a card from the HQ on the bottom of the Hero deck. If that card had a ",
              { icon: 2 },
              ", get ",
              { bold: "+2" },
              { icon: 2 },
              ". If that card had an ",
              { icon: 1 },
              ", you get ",
              { bold: "+2" },
              { icon: 1 },
              ". ",
              { italic: "(If both, get both.)" }
            ]
          ]
        },
        {
          name: "Going through a Phase",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/kitty-pryde-03.png",
          hc: 1,
          rarity: 1,
          cost: 4,
          attack: "1",
          recruit: "1",
          abilities: [
            [
              { keyword: 34 },
              " ",
              { team: 4 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Ghost in the Machine",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/kitty-pryde-02.png",
          hc: 5,
          rarity: 2,
          cost: 6,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              "for each different cost among the Heroes in the HQ."
            ]
          ]
        },
        {
          name: "Lockheed, Kitty's Dragon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/kitty-pryde-01.png",
          hc: 3,
          rarity: 3,
          cost: 8,
          attack: "0+",
          abilities: [
            { keyword: 37 },
            [
              "Put a card from the HQ on the bottom of the Hero Deck. You get ",
              { bold: "+" },
              { icon: 1 },
              " equal to its cost."
            ]
          ]
        }
      ]
    },
    {
      id: 141,
      name: "Legion",
      team: 4,
      cards: [
        {
          name: "Bend Steel",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/legion-04-1.png",
          hc: 4,
          rarity: 1,
          divided: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            { keyword: 36 }
          ]
        },
        {
          name: "Bend Light",
          hc: 1,
          rarity: 1,
          divided: 2,
          cost: 2,
          recruit: "1+",
          abilities: [
            [
              { keyword: 38 },
              ": You get ",
              { bold: "+2" },
              { icon: 2 },
              "."
            ]
          ]
        },
        {
          name: "Split Personality",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/legion-03-1.png",
          hc: 5,
          rarity: 1,
          divided: 1,
          cost: 3,
          attack: "2",
          abilities: []
        },
        {
          name: "Split Eardrums",
          hc: 3,
          rarity: 1,
          divided: 2,
          cost: 3,
          piercing: "2",
          abilities: [
            [
              { keyword: 35 }
            ]
          ]
        },
        {
          name: "Channel Time",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/legion-02-1.png",
          hc: 2,
          rarity: 2,
          divided: 1,
          cost: 5,
          abilities: [
            "Draw two cards."
          ]
        },
        {
          name: "Channel Fire",
          hc: 5,
          rarity: 2,
          divided: 2,
          cost: 5,
          attack: "0+",
          abilities: [
            [
              "You get ",
              { bold: "+1" },
              { icon: 1 },
              "for each different Hero Class in your discard pile."
            ]
          ]
        },
        {
          name: "Maelstrom of Clashing Powers",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/legion-01.png",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "3+",
          abilities: [
            { keyword: 37 },
            [
              "Reveal the top three cards of the Hero Deck. You get their total printed ",
              { icon: 1 },
              ". Put them on the bottom of the Hero Deck."
            ]
          ]
        }
      ]
    },
    {
      id: 142,
      name: "Longshot",
      team: 4,
      cards: [
        {
          name: "Fortune Favors the Bold",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/longshot-04.png",
          hc: 2,
          rarity: 1,
          cost: 3,
          attack: "3",
          abilities: [
            [
              "To play this card, you must put a card from your hand on top of your deck.",
            ]
          ]
        },
        {
          name: "Flurry of Blades",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/longshot-03.png",
          hc: 5,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 36 },
            [
              { hc: 5 },
              ": ",
              { keyword: 36 }
            ]
          ]
        },
        {
          name: "Make My Own Luck",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/longshot-02.png",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "3",
          abilities: [
            "Look at the top card of your deck. Discard it or put it back.",
            [
              { hc: 1 },
              ": You may KO the card you discarded this way."
            ]
          ]
        },
        {
          name: "Escape from Mojo World",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/longshot-01.png",
          hc: 5,
          rarity: 3,
          cost: 7,
          attack: "5+",
          abilities: [
            "Reveal the top card of the Villain Deck. If it's a Villain, you may put it on the bottom of that Deck.",
            [
              { team: 4 },
              ": You get ",
              { bold: "+" },
              { icon: 1 },
              "equal to the printed Victory Points of the card you revealed."
            ]
          ]
        }
      ]
    },
    {
      id: 143,
      name: "Phoenix",
      team: 4,
      cards: [
        {
          name: "Life & Death Incarnate",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/phoenix-03.png",
          hc: 4,
          rarity: 1,
          cost: 3,
          recruit: "3",
          abilities: [
            "KO this card.",
            [
              "You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Obliterating Fire",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/phoenix-04.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          piercing: "4",
          abilities: [
            { keyword: 37 },
            { keyword: 35 },
            "KO this card."
          ]
        },
        {
          name: "Reincarnating Phoenix",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/phoenix-02.png",
          hc: 1,
          rarity: 2,
          cost: 6,
          abilities: [
            "Draw two cards.",
            [
              "You may put a Hero that was KO'd this turn into your discard pile."
            ]
          ]
        },
        {
          name: "Driven Mad by Power",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/phoenix-01.png",
          hc: 4,
          rarity: 3,
          cost: 9,
          attack: "6+",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
            ],
            [
              "KO all the cards you Berserked. If this card makes at least ",
              { bold: "13" },
              { icon: 1 },
              ", then the Phoenix Force becomes corrupted by power and devours the Earth. You win, Evil wins, and all other players lose."
            ]
          ]
        }
      ]
    },
    {
      id: 144,
      name: "Polaris",
      team: 4,
      cards: [
        {
          name: "Ride the Magnetic Waves",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/polaris-04.png",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            { keyword: 37 },
            [
              { hc: 1 },
              ": When you draw a new hand of cards at the end of this turn, draw an extra card."
            ]
          ]
        },
        {
          name: "Electromagnetic Pulse",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/polaris-03.png",
          hc: 3,
          rarity: 1,
          cost: 4,
          piercing: "2",
          abilities: [
            { keyword: 35 },
            [
              { hc: 3 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Subtle Attunement",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/polaris-02.png",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "2",
          abilities: [
            { keyword: 37 },
            [
              { hc: 1 },
              ": Look at the top two cards of your deck. You may KO one of them. Put the rest back in any order."
            ]
          ]
        },
        {
          name: "Reverse Polarity",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/polaris-01.png",
          hc: 1,
          rarity: 3,
          cost: 8,
          recruit: "4",
          abilities: [
            { keyword: 37 },
            [
              { keyword: 34 },
              " ",
              { team: 4 },
              ": You can use ",
              { icon: 2 },
              " as ",
              { icon: 1 },
              " this turn, and vice versa.",
            ]
          ]
        }
      ]
    },
    {
      id: 145,
      name: "Psylocke",
      team: 4,
      cards: [
        {
          name: "Psychic Knife",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/psylocke-04.png",
          hc: 2,
          rarity: 1,
          cost: 2,
          piercing: "0+",
          abilities: [
            "Draw a card.",
            [
              { keyword: 35 },
            ],
            [
              { hc: 2 },
              ": You get ",
              { bold: "+1" },
              { icon: 6 },
              "."
            ]
          ]
        },
        {
          name: "Precognition",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/psylocke-03.png",
          hc: 1,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            "Reveal the top card of the Hero Deck. You may recruit it this turn. If you do, draw a card."
          ]
        },
        {
          name: "Butterfly Effect",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/psylocke-02.png",
          hc: 1,
          rarity: 2,
          cost: 5,
          piercing: "2+",
          abilities: [
            { keyword: 35 },
            [
              { keyword: 34 },
              " ",
              { hc: 1 },
              ": You get ",
              { bold: "+1" },
              { icon: 6 },
              "."
            ]
          ]
        },
        {
          name: "Telepathic Ninjutsu",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/psylocke-01.png",
          hc: 2,
          rarity: 3,
          cost: 7,
          piercing: "3",
          abilities: [
            { keyword: 35 },
            [
              "Reveal the top card of the Hero Deck. The player of your choice puts it in their hand."
            ]
          ]
        }
      ]
    },
    {
      id: 146,
      name: "X-23",
      team: 4,
      cards: [
        {
          name: "Adamantium Foot Claws",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/x23-04.png",
          hc: 5,
          rarity: 1,
          cost: 3,
          attack: "2",
          abilities: [
            [
              { keyword: 34 },
              " ",
              { hc: 2 },
              ": Draw a card."
            ]

          ]
        },
        {
          name: "Healing Factor Genome",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/x23-03.png",
          hc: 2,
          rarity: 1,
          cost: 4,
          attack: "2+",
          abilities: [
            { keyword: 36 },
            "You may KO a Wound from your hand or discard pile."
          ]
        },
        {
          name: "Bioengineered Assassin",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/x23-02.png",
          hc: 1,
          rarity: 2,
          cost: 6,
          attack: "2+",
          abilities: [
            { keyword: 36 },
            [
              { keyword: 34 },
              " ",
              { hc: 2 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Heir to Wolverine",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Heroes/x23-01.png",
          hc: 2,
          rarity: 3,
          cost: 7,
          attack: "3+",
          abilities: [
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 }
            ],
            [
              { keyword: 34 },
              " ",
              { hc: 2 },
              ": Count the",
              { hc: 2 },
              " cards in your discard pile. ",
              { keyword: 36 },
              " that many times."
            ]
          ]
        }
      ]
    }
  ],
  masterminds: [
    {
      id: 40,
      name: "Arcade",
      vAttack: "3",
      vp: 5,
      cards: [
        {
          name: "Arcade",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arcade-01.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { bold: "Start of Game" },
              ": Arcade captures 5 ",
              { keyword: 40 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Murderworld"
            ],
            [
              { bold: "Master Strike" },
              ": Arcade captures a random Bystander from each player's Victory Pile as a ",
              { keyword: 40, text: "Human Shield" },
              ". Each player who didn't have a Bystander gains a Wound instead."
            ]
          ]
        },
        {
          name: "Epic Arcade",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arcade-01a.png",
          vAttack: "4",
          vAttackAsterisk: true,
          epic: true,
          abilities: [
            [
              { bold: "Start of Game" },
              ": Arcade captures 8 ",
              { keyword: 40 },
              ". Play a random Horror."
            ],
            [
              { bold: "Always Leads" },
              ": Murderworld"
            ],
            [
              { bold: "Master Strike" },
              ": Arcade captures two random Bystander from each player's Victory Pile as a ",
              { keyword: 40, text: "Human Shield" },
              ". Each player who didn't have two Bystanders gains a Wound instead."
            ]
          ]
        },
        {
          name: "I Love a Parade!",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arcade-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Arcade captures two ",
              { keyword: 40 },
              ". Play an extra card from the Villain Deck next turn."
            ]
          ]
        },
        {
          name: "I Need an Audience",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arcade-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Arcade captures ",
              { keyword: 40 },
              " equal to the number of Villains in the city."
            ]
          ]
        },
        {
          name: "Roulette Wheel of Death",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arcade-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Arcade captures a random Bystander as a ",
              { keyword: 40, text: "Human Shield" },
              " from each of these places: The Bystander Stack, the Escape Pile, each city space, and each other player's Victory Pile."
            ]
          ]
        },
        {
          name: "Welcome to my Theme Park!",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/arcade-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Arcade and each Murderworld Villain in the city capture two ",
              { keyword: 40 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 41,
      name: "Dark Phoenix",
      vAttack: "13",
      vp: 7,
      cards: [
        {
          name: "Dark Phoenix",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/darak-phoenix-01.png",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Hellfire Club"
            ],
            [
              { bold: "Master Strike" },
              ": KO the top card of the Hero Deck and each card in the Hero Deck that shares a color with it. Shuffle the Hero Deck."
            ],
            [
              { bold: "Dark Phoenix Wins" },
              ": When the Hero Deck is empty."
            ]
          ]
        },
        {
          name: "Epic Dark Phoenix",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/darak-phoenix-01a.png",
          vAttack: "15",
          epic: true,
          abilities: [
            [
              { bold: "Always Leads" },
              ": Hellfire Club"
            ],
            [
              { bold: "Master Strike" },
              ": KO the top card of the Hero Deck and each card in the Hero Deck that shares a color with it. Shuffle the Hero Deck. Then, each player plays a Hellfire Club card from their Victory Pile. Next, play a random Horror."
            ],
            [
              { bold: "Dark Phoenix Wins" },
              ": When the Hero Deck is empty."
            ]
          ]
        },
        {
          name: "Burn the World to Ashes",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/darak-phoenix-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player discards each card from their hand that has the same name as any card in the KO pile."
            ]
          ]
        },
        {
          name: "Consume an Entire Galaxy",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/darak-phoenix-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player chooses a card from their discard pile that costs 1 or more and KOs it."
            ]
          ]
        },
        {
          name: "Fiery Reincarnation",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/darak-phoenix-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Gain a Hero from the KO pile that costs 7 or more."
            ]
          ]
        },
        {
          name: "Worship Me as a God",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/darak-phoenix-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player gains two 0-cost cards from the KO pile."
            ]
          ]
        }
      ]
    },
    {
      id: 42,
      name: "Deathbird",
      vAttack: "8",
      vp: 6,
      cards: [
        {
          name: "Deathbird",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/deathbird_01.png",
          vAttack: "8+",
          abilities: [
            [
              "Deathbird gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Shi'ar Villain in the city and Escape Pile."
            ],
            [
              { bold: "Always Leads" },
              ": Shi'ar Imperial Guard and a Shi'ar Henchmen Group."
            ],
            [
              { bold: "Master Strike" },
              ": If there are already any Shi'ar Villains in the city, each player gains a Wound. Then this strike enters the city as a “Shi'ar Battlecruiser“ ",
              { icon: 7 },
              " Villain with 7",
              { icon: 1 },
              " worth 5 ",
              { icon: 4 },
              "."
            ]
          ]
        },
        {
          name: "Epic Deathbird",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/deathbird_01a.png",
          vAttack: "10+",
          epic: true,
          abilities: [
            [
              "Deathbird gets ",
              { bold: "+2" },
              { icon: 1 },
              " for each Shi'ar Villain in the city and Escape Pile."
            ],
            [
              { bold: "Always Leads" },
              ": Shi'ar Imperial Guard and a Shi'ar Henchmen Group."
            ],
            [
              { bold: "Master Strike" },
              ": If there are already any Shi'ar Villains in the city, play a random Horror. Then this strike enters the city as a “Shi'ar Battleship“ ",
              { icon: 7 },
              " Villain with 9",
              { icon: 1 },
              " worth 6 ",
              { icon: 4 },
              "."
            ]
          ]
        },
        {
          name: "Shi'ar Elite Bodyguards",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/deathbird_05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. This Tactic enters the city as a Villain whose only ability is “",
              { bold: "Escape" },
              ": Shuffle this card back into Deathbird's Mastermind Tactics as another Tactic.“"
            ]
          ]
        },
        {
          name: "Shi'ar Extermination Legion",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/deathbird_04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. This Tactic enters the city as a Villain whose only ability is “",
              { bold: "Escape" },
              ": Each player discards two cards.“"
            ]
          ]
        },
        {
          name: "Shi'ar Hovertake Battalion",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/deathbird_03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. This Tactic enters the city as a Villain whose only ability is “",
              { bold: "Escape" },
              ": Each player gains a Wound.“"
            ]
          ]
        },
        {
          name: "Shi'ar Master Spies",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/deathbird_02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Rescue 4 Bystanders. This Tactic enters the city as a Villain whose only ability is “",
              { bold: "Escape" },
              ": This card becomes a Scheme Twist that takes effect immediately.“"
            ]
          ]
        }
      ]
    },
    {
      id: 43,
      name: "Mojo",
      vAttack: "6",
      vp: 5,
      cards: [
        {
          name: "Mojo",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mojo-01.png",
          vAttackAsterisk: true,
          abilities: [
            [
              { bold: "Start of Game" },
              ": Mojo captures 3 ",
              { keyword: 40 },
              "."
            ],
            [
              "All Bystanders in Victory Piles are worth 3 ",
              { icon: 4 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Mojoverse"
            ],
            [
              { bold: "Master Strike" },
              ": Mojo captures a ",
              { keyword: 40, text: "Human Shield" },
              ". Each player reveals a ",
              { hc: 5 },
              " Hero or discards a card at random."
            ]
          ]
        },
        {
          name: "Epic Mojo",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mojo-01a.png",
          vAttack: "7",
          vAttackAsterisk: true,
          epic: true,
          abilities: [
            [
              { bold: "Start of Game" },
              ": Mojo captures 6 ",
              { keyword: 40 },
              ". Play a random Horror."
            ],
            [
              "All Bystanders in Victory Piles are worth 4 ",
              { icon: 4 },
              "."
            ],
            [
              { bold: "Always Leads" },
              ": Mojoverse"
            ],
            [
              { bold: "Master Strike" },
              ": Mojo and each Mojoverse Villain capture a ",
              { keyword: 40, text: "Human Shield" },
              ". Each player reveals a ",
              { hc: 5 },
              " Hero or discards down to 4 cards."
            ]
          ]
        },
        {
          name: "Billions of TV Viewers",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mojo-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each player reveals a ",
              { hc: 5 },
              " Hero or chooses a random Bystander from their Victory Pile. Mojo captures those Bystanders as ",
              { keyword: 40 },
              "."
            ]
          ]
        },
        {
          name: "Brain-Melting TV Marathon",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mojo-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player without a Mojo Tactic in their Victory Pile gains a Wound."
            ]
          ]
        },
        {
          name: "Cross-Dimensional Marketing",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mojo-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": You get ",
              { bold: "+1" },
              { icon: 2 },
              " for each Bystander in your Victory Pile. Mojo captures a ",
              { keyword: 40, text: "Human Shield" },
              "."
            ]
          ]
        },
        {
          name: "Mojo Branding Opportunity",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/mojo-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Draw a card for each Mojoverse Villain in your Victory Pile. Mojo captures a ",
              { keyword: 40, text: "Human Shield" },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 44,
      name: "Onslaught",
      vAttack: "10",
      vp: 7,
      cards: [
        {
          name: "Onslaught",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/onslaught-01.png",
          vAttack: "10+",
          abilities: [
            "Each player's hand size is 1 less.",
            [
              { bold: "Always Leads" },
              ": Dark Descendants"
            ],
            [
              { bold: "Master Strike" },
              ": KO all Heroes ",
              { keyword: 39, text: "Dominated" },
              " by Onslaught. Then each player reveals their hand and chooses one of their non-grey Heroes. Onslaught ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        },
        {
          name: "Epic Onslaught",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/onslaught-01a.png",
          vAttack: "12+",
          epic: true,
          abilities: [
            "Each player's hand size is 1 less.",
            [
              { bold: "Always Leads" },
              ": Dark Descendants"
            ],
            [
              { bold: "Master Strike" },
              ": KO all Heroes ",
              { keyword: 39, text: "Dominated" },
              " by Onslaught. Then each player reveals their hand and chooses two of their non-grey Heroes. Onslaught ",
              { keyword: 39, text: "Dominates" },
              " those Heroes. Then play a random Horror."
            ]
          ]
        },
        {
          name: "Godlike Psionic Entity",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/onslaught-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Onslaught ",
              { keyword: 39, text: "Dominates" },
              " all five Heroes from the HQ.",
            ]
          ]
        },
        {
          name: "Sins of X-Men Past",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/onslaught-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals the top six cards of their deck and chooses an ",
              { team: 4 },
              " Hero revealed this way. Onslaught ",
              { keyword: 39, text: "Dominates" },
              " those Heroes. Put the rest back in random order."
            ]
          ]
        },
        {
          name: "Xavier and Magneto Combined",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/onslaught-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top three cards of the Hero Deck. Onslaught ",
              { keyword: 39, text: "Dominates" },
              " all the ",
              { team: 4 },
              " and ",
              { team: 11 },
              " Heroes you revealed. Put the rest back in random order."
            ]
          ]
        },
        {
          name: "Worldwide Mental Control",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/onslaught-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Onslaught ",
              { keyword: 39, text: "Dominates" },
              " four 0-cost Heroes from the KO pile. The next time a player fights Onslaught, KO those 0-cost Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 45,
      name: "Shadow King",
      vAttack: "7",
      vp: 6,
      cards: [
        {
          name: "Shadow King",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/shadow-king-01.png",
          vAttack: "7+",
          abilities: [
            [
              { bold: "Always Leads" },
              ": Shadow-X"
            ],
            [
              { bold: "Master Strike" },
              ": KO all Heroes ",
              { keyword: 39, text: "Dominated" },
              " by Shadow King. Then each player chooses a non-grey Hero from their discard pile. Shadow King ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        },
        {
          name: "Epic Shadow King",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/shadow-king-01a.png",
          vAttack: "9+",
          epic: true,
          abilities: [
            [
              { bold: "Start of Game" },
              ": Play two random Horrors."
            ],
            [
              { bold: "Always Leads" },
              ": Shadow-X"
            ],
            [
              { bold: "Master Strike" },
              ": KO all Heroes ",
              { keyword: 39, text: "Dominated" },
              " by Shadow King. Then each player chooses a non-grey Hero from their discard pile. Shadow King ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        },
        {
          name: "Fiend of the Astral Plane",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/shadow-king-05.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and shuffles two cards with ",
              { icon: 2 },
              " icons from their hand back into their deck."
            ]
          ]
        },
        {
          name: "Poison their Minds",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/shadow-king-02.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Each other player reveals their hand and chooses one of their non-grey Heroes. Shadow King ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        },
        {
          name: "Psychic Seduction",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/shadow-king-03.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": Shadow King ",
              { keyword: 39, text: "Dominates" },
              " each Hero that costs 5 or less from the HQ."
            ]
          ]
        },
        {
          name: "Telepathic Betrayal",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Masterminds/shadow-king-04.png",
          tactic: true,
          abilities: [
            [
              { bold: "Fight" },
              ": If the “Betrayal of the Shadow“ Trap is in any Victory Pile or the KO pile, put it on top of the Villain Deck."
            ]
          ]
        }
      ]
    },
  ],
  henchmen: [
    {
      id: 21,
      name: "Brood, The",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/the-brood.png",
      vAttack: "1+",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              "This Villain gets ",
              { bold: "+1" },
              { icon: 1 },
              " for each Bystander in the KO pile."
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes. Then KO a Bystander from the Bystander Stack."
            ]
          ]
        },
      ]
    },
    {
      id: 22,
      name: "Hellfire Cult",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/hellfire-cult.png",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": Reveal the top card of your deck. If it costs 0, KO it. Otherwise, you get ",
              { bold: "+1" },
              { icon: 2 },
              "."
            ]
          ]
        },
      ]
    },
    {
      id: 23,
      name: "Sapien League",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/sapien-league.png",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": KO one of your Heroes. Then, reveal the top card of the Villain Deck. If it's a Henchman Villain, play it."
            ]
          ]
        },
      ]
    },
    {
      id: 24,
      name: "Shi'ar Death Commandos",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/shiar-death-commandos.png",
      vAttack: "2",
      vp: 1,
      cards: [
        {
          vAttackAsterisk: true,
          abilities: [
            [
              { bold: "Ambush" },
              ": This Villain captures a ",
              { keyword: 40, text: "Human Shield" },
              "."
            ],
            [
              { bold: "Fight" },
              ": KO one of your Heroes."
            ]
          ]
        },
      ]
    },
    {
      id: 25,
      name: "Shi'ar Patrol Craft",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Henchmen/shiar-patrol-craft.png",
      vAttack: "3",
      vp: 1,
      cards: [
        {
          abilities: [
            [
              { bold: "Fight" },
              ": The next Hero you recruit this turn has ",
              { keyword: 37 },
              "."
            ]
          ]
        },
      ]
    },
  ],
  villains: [
    {
      id: 53,
      name: "Dark Descendants",
      cards: [
        {
          name: "Fatale",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-descendants-02.png",
          qtd: 2,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ],
            [
              {
                bold: "Escape"
              },
              ": The Mastermind ",
              { keyword: 39, text: "Dominates" },
              " the top card of the Hero Deck."
            ]
          ]
        },
        {
          name: "Havok, Brainwashed",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-descendants-04.png",
          qtd: 2,
          vAttack: "6",
          hc: 3,
          team: 4,
          overrideType: 1,
          attack: "2+",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            [
              {
                bold: "Escape"
              },
              ": Havok becomes a Hero ",
              { keyword: 39, text: "Dominated" },
              " by the Mastermind."
            ],
            { divider: true },
            [
              { keyword: 34 },
              " ",
              { hc: 3 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Nemesis",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-descendants-01.png",
          qtd: 1,
          vp: "5",
          vAttack: "5+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals their hand and chooses one of their non-grey Heroes. Nemesis ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        },
        {
          name: "Psychic Subjugation",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-descendants-05.png",
          qtd: 1,
          vp: "3",
          subType: 1,
          abilities: [
            [
              { bold: "By End of Turn" },
              ": Recruit the left-most and right-most Heroes in the HQ."
            ],
            [
              { bold: "Or Suffer" },
              ": Each of those Heroes you didn't recruit enters the city as a Villain with ",
              { icon: 1 },
              " equal to that Hero's cost. When you fight one, you gain it."
            ]
          ]
        },
        {
          name: "Random",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/dark-descendants-03.png",
          qtd: 2,
          vp: "3",
          vAttack: "4+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Random ",
              { keyword: 39, text: "Dominates" },
              " the top card of the Hero Deck. Then, each player reveals their hand and chooses one of their Heroes with that same cost. Random ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 54,
      name: "Hellfire Club",
      cards: [
        {
          name: "Corrupt the Phoenix Force",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/corrupt-the-phoenix.png",
          qtd: 1,
          vp: "3",
          subType: 1,
          abilities: [
            [
              { bold: "By End of Turn" },
              ": Have no Hellfire Villains in the city."
            ],
            [
              { bold: "Or Suffer" },
              ": This Trap becomes a ",
              { bold: "6" },
              { icon: 1 },
              " “Phoenix Force“ ",
              { icon: 7 },
              " Villain that enters the city and ",
              { keyword: 39, text: "Dominates" },
              " all the Heroes in the HQ that cost 6 or less."
            ]
          ]
        },
        {
          name: "Emma Frost (White Queen)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellfire-club-04.png",
          qtd: 2,
          vp: "4",
          vAttack: "4+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player chooses an ",
              { team: 4 },
              " Hero from their discard pile. Emma Frost ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        },
        {
          name: "Harry Leland (Black Bishop)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellfire-club-03.png",
          qtd: 2,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Heroes cost 1 more to recruit this turn."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Mastermind (Jason Wyngarde)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellfire-club-02.png",
          qtd: 1,
          vp: "6",
          vAttack: "8+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": This Villain ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". He gains the ability “",
              { bold: "Master Strike" },
              ": Each player simultaneously reveals a non-grey Hero.“ Mastermind ",
              { keyword: 39, text: "Dominates" },
              " the revealed Hero with the highest cost ",
              { italic: "(and tied for highest)" },
              "."
            ]
          ]
        },
        {
          name: "Sebastian Shaw (Black King)",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/hellfire-club-01.png",
          qtd: 2,
          vp: "4",
          vAttack: "3+",
          abilities: [
            [
              "Sebastian Shaw has ",
              { bold: "+1" },
              { icon: 1 },
              " for each card you've played from your hand this turn."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player gains a Wound."
            ]
          ]
        }
      ]
    },
    {
      id: 55,
      name: "Mojoverse",
      cards: [
        {
          name: "Mindwarping TV Broadcast",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mojoverse-05.png",
          qtd: 1,
          vp: "3",
          subType: 1,
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": A Villain captures a Bystander."
            ],
            [
              { bold: "By End of Turn" },
              ": Have no Bystanders in the city captured by Villains."
            ],
            [
              { bold: "Or Suffer" },
              ": After you draw your new hand at end of turn, each player discards down to four cards in hand."
            ],
          ]
        },
        {
          name: "Minor Domo",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mojoverse-02.png",
          qtd: 2,
          vp: "2",
          vAttack: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Minor Domo captures 2 ",
              { keyword: 40 },
              "."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player simultaneously reveals a card from their hand. Whoever revealed the lowest cost card ",
              { italic: "(or tied for lowest)" },
              " gains a Wound."
            ]
          ]
        },
        {
          name: "Major Domo",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mojoverse-01.png",
          qtd: 2,
          vp: "3",
          vAttack: "4",
          vAttackAsterisk: true,
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Major Domo captures a ",
              { keyword: 40, text: "Human Shield" },
              "."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player simultaneously reveals a card from their hand. Whoever reveals the highest-costing card ",
              { italic: "(or tied for highest)" },
              " gains a Wound."
            ]
          ]
        },
        {
          name: "Spiral",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mojoverse-04.png",
          qtd: 1,
          vp: "4",
          vAttack: "6",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals a ",
              { hc: 1 },
              " Hero or discards their hand. Each player who discarded their hand this way draws 5 cards."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Warwolves",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/mojoverse-03.png",
          qtd: 2,
          vp: "2",
          vAttack: "3",
          vAttackAsterisk: true,
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": These Warwolves capture a ",
              { keyword: 40, text: "Human Shield" },
              "."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ]
          ]
        }
      ]
    },
    {
      id: 56,
      name: "Murderworld",
      cards: [
        {
          name: "Animatronic Killer Clowns",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/murderworld-06.png",
          qtd: 2,
          vp: "2",
          subType: 1,
          abilities: [
            [
              { bold: "By End of Turn" },
              ": Recruit two Heroes."
            ],
            [
              { bold: "Or Suffer" },
              ": This Trap enters the city as a ",
              { bold: "3" },
              { icon: 1 },
              " “Animatronic Killer Clown“ ",
              { icon: 7 },
              " Villain that captures a ",
              { keyword: 40, text: "Human Shield" },
              "."
            ]
          ]
        },
        {
          name: "Guillotine Rollercoaster",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/murderworld-05.png",
          qtd: 1,
          vp: "3",
          subType: 1,
          abilities: [
            [
              { bold: "By End of Turn" },
              ": Have at least four different costs of Heroes in the HQ."
            ],
            [
              { bold: "Or Suffer" },
              ": After you draw your new hand at the end of this turn, each player reveals their hand and discards each card with the same cost as the cards in the HQ."
            ]
          ]
        },
        {
          name: "Miss Locke",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/murderworld-04.png",
          qtd: 2,
          vp: "2",
          vAttack: "2",
          vAttackAsterisk: true,
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Miss Locke captures 2 ",
              { keyword: 40 },
              ". Then reveal the top card of the Villain Deck. If it's a ",
              { rule: 5, text: "Trap" },
              " or Master Strike, play it."
            ]
          ]
        },
        {
          name: "Monstrous Pinball Machine",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/murderworld-02.png",
          qtd: 1,
          vp: "3",
          subType: 1,
          abilities: [
            [
              { bold: "By End of Turn" },
              ": Pay any amount of ",
              { icon: 2 },
              ". Then you must reveal the top card of the Hero Deck. If you paid enough, recruit that Hero and put this Trap in your Victory Pile."
            ],
            [
              { bold: "Or Suffer" },
              ": KO that Hero. Play two extra cards from the Villain Deck next turn."
            ]
          ]
        },
        {
          name: "Sulfuric Acid Water Slide",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/murderworld-01.png",
          qtd: 2,
          vp: "2",
          subType: 1,
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Play another card from the Villain Deck."
            ],
            [
              { bold: "By End of Turn" },
              ": Have no Villains in the Sewers."
            ],
            [
              { bold: "Or Suffer" },
              ": Each player gains a Wound."
            ],
          ]
        }
      ]
    },
    {
      id: 57,
      name: "Shadow-X",
      cards: [
        {
          name: "Betrayal of the Shadow",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shadow-x-01.png",
          qtd: 1,
          vp: "4",
          subType: 1,
          abilities: [
            [
              { bold: "By End of Turn" },
              ": You may pay 6",
              { icon: 2 },
              "."
            ],
            [
              { bold: "Or Suffer" },
              ": Each player reveals their hand. Then, each player chooses a Shadow-X card from their hand or discard pile to enter the city as a Villain."
            ]
          ]
        },
        {
          name: "Dark Angel",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shadow-x-04.png",
          qtd: 2,
          vAttack: "4",
          hc: 2,
          team: 4,
          overrideType: 1,
          attack: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            { divider: true },
            [
              { keyword: 34 },
              " ",
              { hc: 2 },
              ": The next Hero you recruit from the HQ has ",
              { keyword: 37 },
              "."
            ]
          ]
        },
        {
          name: "Dark Beast",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shadow-x-06.png",
          qtd: 1,
          vAttack: "5",
          hc: 5,
          team: 4,
          overrideType: 1,
          attack: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            { divider: true },
            [
              { keyword: 34 },
              " ",
              { hc: 5 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Dark Cyclops",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shadow-x-02.png",
          qtd: 1,
          vAttack: "7",
          hc: 3,
          team: 4,
          overrideType: 1,
          attack: "3",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals a ",
              { hc: 3 },
              " Hero or discards a card."
            ],
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            { divider: true },
            [
              { keyword: 34 },
              " ",
              { hc: 3 },
              ": Return a ",
              { hc: 3 },
              " Hero from your discard pile to your hand."
            ]
          ]
        },
        {
          name: "Dark Iceman",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shadow-x-05.png",
          qtd: 2,
          vAttack: "5",
          hc: 4,
          team: 4,
          overrideType: 1,
          attack: "2",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            { divider: true },
            [
              { keyword: 34 },
              " ",
              { hc: 4 },
              ": Draw a card."
            ]
          ]
        },
        {
          name: "Dark Marvel Girl",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shadow-x-03.png",
          qtd: 1,
          vAttack: "4+",
          hc: 1,
          team: 4,
          overrideType: 1,
          attack: "2",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Dark Marvel Girl ",
              { keyword: 39, text: "Dominates" },
              " each ",
              { team: 4 },
              " Hero that costs 4 or less from the HQ."
            ],
            [
              {
                bold: "Fight"
              },
              ": Gain this as a Hero."
            ],
            { divider: true },
            [
              { keyword: 34 },
              " ",
              { hc: 1 },
              ": Rescue a Bystander."
            ]
          ]
        }
      ]
    },
    {
      id: 58,
      name: "Shi'ar Imperial Guard",
      cards: [
        {
          name: "Blackthorn",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shiar-imperial-guard-03.png",
          qtd: 2,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": If you fought Blackthorn in the Sewers or Streets, each other player gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player gains a Wound."
            ]
          ]
        },
        {
          name: "Gladiator",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shiar-imperial-guard-05.png",
          qtd: 1,
          vp: "5",
          vAttack: "7",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player discards an ",
              { team: 4 },
              " Hero or gains a Wound."
            ],
            [
              {
                bold: "Escape"
              },
              ": Same effect."
            ]
          ]
        },
        {
          name: "Oracle",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shiar-imperial-guard-04.png",
          qtd: 2,
          vp: "4",
          vAttack: "4+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player discards the top four cards of their deck and chooses one of those cards that costs 1 to 4. Oracle ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        },
        {
          name: "Shi'ar Trial by Combat",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shiar-imperial-guard-01.png",
          qtd: 1,
          vp: "2",
          subType: 1,
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": If the Bridge is empty, reveal the top card of the Villain Deck. If it's a Villain, put it on the Bridge."
            ],
            [
              { bold: "By End of Turn" },
              ": Have no Villains on the Bridge."
            ],
            [
              { bold: "Or Suffer" },
              ": After you draw a new hand at end of turn, each player KOs a non-grey Hero from their discard pile."
            ],
          ]
        },
        {
          name: "Smasher",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/shiar-imperial-guard-02.png",
          qtd: 2,
          vp: "3",
          vAttack: "5",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals a ",
              { hc: 4 },
              " Hero or discards a card."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO a card from your discard pile."
            ]
          ]
        }
      ]
    },
    {
      id: 59,
      name: "Sisterhood of Mutants",
      cards: [
        {
          name: "Lady Deathstrike",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sisterhood-of-mutants-04.png",
          qtd: 2,
          vp: "4",
          vAttack: "6",
          abilities: [
            [
              {
                bold: "Fight"
              },
              ": KO one of your Heroes."
            ],
            [
              {
                bold: "Escape"
              },
              ": Each player reveals an ",
              { hc: 2 },
              " Hero or gains a Wound."
            ]
          ]
        },
        {
          name: "Lady Mastermind",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sisterhood-of-mutants-02.png",
          qtd: 1,
          vp: "5",
          vAttack: "7+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": This Villain ascends to become a ",
              { rule: 3, text: "new Mastermind" },
              ". She gains the ability “",
              { bold: "Master Strike" },
              ": Each player simultaneously reveals a non-grey Hero.“ Lady Mastermind ",
              { keyword: 39, text: "Dominates" },
              " the revealed Hero with the lowest cost ",
              { italic: "(and tied for lowest)" },
              "."
            ]
          ]
        },
        {
          name: "Resurrect Madelyne Pryor",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sisterhood-of-mutants-05.png",
          qtd: 1,
          subType: 1,
          abilities: [
            [
              { bold: "By End of Turn" },
              ": You may pay ",
              { bold: "3" },
              { icon: 2 },
              ". If you do, shuffle this Trap back into the Villain Deck, then play a card from the Villain Deck."
            ],
            [
              { bold: "Or Suffer" },
              ": This Trap becomes a Scheme Twist that takes effect immediately."
            ]
          ]
        },
        {
          name: "Selene",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sisterhood-of-mutants-03.png",
          qtd: 2,
          vp: "3",
          vAttack: "3+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Selene ",
              { keyword: 39, text: "Dominates" },
              " all of the 0-cost Heroes from the KO pile."
            ],
            [
              {
                bold: "Fight"
              },
              ": KO all the Heroes Dominated by Selene."
            ],
            [
              {
                bold: "Escape"
              },
              ": Put one Hero Dominated by Selene into each player's discard pile."
            ]
          ]
        },
        {
          name: "Typhoid Mary",
          imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Villains/sisterhood-of-mutants-01.png",
          qtd: 2,
          vp: "3",
          vAttack: "3+",
          abilities: [
            [
              {
                bold: "Ambush"
              },
              ": Each player reveals their hand and chooses a 3-cost Hero from it. Typhoid Mary ",
              { keyword: 39, text: "Dominates" },
              " those Heroes."
            ]
          ]
        }
      ]
    }
  ],
  schemes: [
    {
      id: 76,
      name: "Alien Brood Encounters",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/81Scheme(96).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists. Add 10 Brood as extra Henchmen. No Bystanders in Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Cards are played from the Villain Deck face-down. You may spend ",
              { bold: "1" },
              { icon: 1 },
              " to “scan“ a face-down card in the city, turning it face-up and doing any Ambush effect, Twist, ",
              { rule: 5, text: "Trap" },
              ", or Master Strike. If a face-down card would escape, scan it, and then it escapes if it's a Villain."
            ],
            [
              { bold: "Twist" },
              ": The player on your right gains this Twist as a “Brood Infection.“ When drawn, they KO it and gain 2 Wounds."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Villains per player have escaped."
            ],
          ]
        },
      ]
    },
    {
      id: 77,
      name: "Anti-Mutant Hatred",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/83Scheme(98).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. 30 Wounds."
            ],
            [
              { bold: "Twist" },
              ": Put this Twist into your discard pile as an “Angry Mob.“"
            ],
            [
              { bold: "Special Rules" },
              ": At the start of your turn, for each Angry Mob in your hand, the player on your right gains a Wound and gains that Angry Mob."
            ],
            [
              { bold: "Evil Wins" },
              ": When the Wound Stack or Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 78,
      name: "Dark Phoenix Saga, The",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/77Scheme(16).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 10 Twists. Include Hellfire Club as one of the Villain Groups. Add 14 Jean Grey Hero cards to the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": Jean Grey cards in the Villain Deck are Villains with attack equal to their cost, “",
              { bold: "Ambush" },
              ": Play another Villain card“ and “",
              { bold: "Fight" },
              ": Gain this as a Hero.“"
            ],
            [
              { bold: "Twist" },
              ": Shuffle all Jean Grey cards from the KO pile and from all players' hands and discard piles into the Villain Deck."
            ],
            [
              { bold: "Evil Wins" },
              ": When 5 Jean Grey cards have escaped."
            ],
          ]
        },
      ]
    },
    {
      id: 79,
      name: "Horror of Horrors",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/80Scheme(95).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 6 Twists."
            ],
            [
              { bold: "Twist 1-5" },
              ": Play a random Horror."
            ],
            [
              { bold: "Twist 6" },
              ": Evil wins!"
            ],
          ]
        },
      ]
    },
    {
      id: 80,
      name: "Mutant-Hunting Super Sentinels",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/78Scheme(93).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 9 Twists. Include 10 Sentinels as extra Henchmen ",
              { italic: "(or substitute another Henchman group)." }
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme as a “Sentinel Upgrade.“ Shuffle all Sentinels from players' Victory Piles into the Villain Deck. Play another card from the Villain Deck."
            ],
            [
              { bold: "Special Rules" },
              ": All Sentinels get ",
              { bold: "+1" },
              { icon: 1 },
              " for each Sentinel Upgrade next to the Scheme."
            ],
            [
              { bold: "Evil Wins" },
              ": When 3 Sentinels have Escaped."
            ],
          ]
        },
      ]
    },
    {
      id: 81,
      name: "Nuclear Armageddon",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/79Scheme(94).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 5 Twists."
            ],
            [
              { bold: "Twist" },
              ": Destroy the city space closest to the Mastermind. Any Villain There escapes. Put this Twist there."
            ],
            [
              { bold: "Evil Wins" },
              ": When the city is destroyed."
            ],
          ]
        },
      ]
    },
    {
      id: 82,
      name: "Televised Deathtraps of Mojoworld",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/82Scheme(97).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 11 Twists. 6 Wounds per player in Wound Stack."
            ],
            [
              { bold: "Twist" },
              ": Stack this Twist next to the Scheme as a “Deathtrap.“ This turn, you may pay ",
              { bold: "1" },
              { icon: 1 },
              " for each Deathtrap stacked there. If you don't, each player gains a Wound."
            ],
            [
              { bold: "Evil Wins" },
              ": When the Wound Stack or Villain Deck runs out."
            ],
          ]
        },
      ]
    },
    {
      id: 83,
      name: "X-Men Danger Room Goes Berserk",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Schemes/76Scheme(15).png",
      cards: [
        {
          abilities: [
            [
              { bold: "Setup" },
              ": 8 Twists."
            ],
            [
              { bold: "Twist" },
              ": ",
              { rule: 5, text: "Trap! By End of Turn", keywordStyle: true },
              ": You may pay ",
              { bold: "2" },
              { icon: 2 },
              ". If you do, shuffle this Twist back into the Villain Deck, then play a card from the Villain Deck. ",
              { bold: "Or Suffer" },
              ": Stack this Twist next to the scheme as an “Airborne Neurotoxin.“"
            ],
            [
              { bold: "Evil Wins" },
              ": When there are 5 Airborne Neurotoxins."
            ],
          ]
        },
      ]
    },
  ],
  bystanders: [
    {
      id: 22,
      name: "Cypher",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-cypher.png",
      cards: [
        {
          qtd: 1,
          subtitle: "Bystander - New Mutants",
          overrideType: 1,
          cost: 2,
          hc: 5,
          team: 4,
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              "Look at the top two cards of your deck. Draw one and discard the other."
            ]
          ]
        }
      ]
    },
    {
      id: 23,
      name: "Heartless Computer Scientist",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/heartless-computer-scientist.png",
      cards: [
        {
          qtd: 1,
          overrideType: 1,
          cost: 3,
          hc: 5,
          team: 0,
          recruit: "2",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              { hc: 5 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        }
      ]
    },
    {
      id: 24,
      name: "Karma",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-karma.png",
      cards: [
        {
          qtd: 1,
          subtitle: "Bystander - New Mutants",
          overrideType: 1,
          cost: 3,
          hc: 1,
          team: 4,
          attack: "0+",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              "Reveal the top card of the Hero Deck. You get ",
              { bold: "+"},
              { icon: 1 },
              " equal to its printed ",
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 25,
      name: "Magik",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-magik.png",
      cards: [
        {
          qtd: 1,
          subtitle: "Bystander - New Mutants",
          overrideType: 1,
          cost: 4,
          hc: 3,
          team: 4,
          attack: "2",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              { keyword: 1 },
              { italic: " (Instead of playing this card, you may set it aside. At the end of the turn, add it to your hand as an extra card.)" },
            ]
          ]
        }
      ]
    },
    {
      id: 26,
      name: "Magma",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-magma.png",
      cards: [
        {
          qtd: 1,
          subtitle: "Bystander - New Mutants",
          overrideType: 1,
          cost: 3,
          hc: 3,
          team: 4,
          attack: "0+",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              "Chose one: Draw a card or you get ",
              { bold: "+2"},
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 27,
      name: "Martial Arts Master",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/martial-arts-master.png",
      cards: [
        {
          qtd: 1,
          overrideType: 1,
          cost: 3,
          hc: 2,
          team: 0,
          attack: "1",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              "Draw a card."
            ]
          ]
        }
      ]
    },
    {
      id: 28,
      name: "Mirage",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-mirage.png",
      cards: [
        {
          qtd: 1,
          subtitle: "Bystander - New Mutants",
          overrideType: 1,
          cost: 3,
          hc: 1,
          team: 4,
          recruit: "1",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              "Draw a card."
            ]
          ]
        }
      ]
    },
    {
      id: 29,
      name: "Sunspot",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-sunspot.png",
      cards: [
        {
          qtd: 1,
          subtitle: "Bystander - New Mutants",
          overrideType: 1,
          cost: 3,
          hc: 4,
          team: 4,
          attack: "2+",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              { hc: 4 },
              ": You get ",
              { bold: "+1"},
              { icon: 1 },
              "."
            ]
          ]
        }
      ]
    },
    {
      id: 30,
      name: "Warlock",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-warlock.png",
      cards: [
        {
          qtd: 1,
          subtitle: "Bystander - New Mutants",
          overrideType: 1,
          cost: 3,
          hc: 5,
          team: 4,
          attack: "2",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              { hc: 5 },
              ": Draw a card.",
            ]
          ]
        }
      ]
    },
    {
      id: 31,
      name: "Wolfsbane",
      imageUrl: "https://nyc3.digitaloceanspaces.com/bageltop/CardImages/Bystanders/bystander-wolfsbane.png",
      cards: [
        {
          qtd: 1,
          subtitle: "Bystander - New Mutants",
          overrideType: 1,
          cost: 3,
          hc: 2,
          team: 4,
          attack: "0+",
          abilities: [
            [
              "When you rescue this Bystander, gain it as a Hero."
            ],
            { divider: true },
            [
              { keyword: 36 },
              ", ",
              { keyword: 36 },
              ", ",
              { keyword: 36 },
            ]
          ]
        }
      ]
    },
  ],
}