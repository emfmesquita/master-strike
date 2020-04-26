export default {
  heroes: [
    {
      name: "Professor X",
      set: 3,
      team: 4,
      cards: [
        {
          name: "Psionic Astral Form",
          hc: 3,
          rarity: 1,
          cost: 2,
          attack: "1+",
          abilities: [
            [
              { team: 4 },
              ": You get ",
              { bold: "+2" },
              { icon: 1 },
              "."
            ]
          ]
        },
        {
          name: "Class Dismissed",
          hc: 2,
          rarity: 1,
          cost: 3,
          recruit: "2",
          abilities: [
            "You may put a Hero from the HQ on the bottom of the Hero Deck.",
            [
              { hc: 2 },
              ": You may KO a card from your hand or discard pile."
            ]
          ]
        },
        {
          name: "Telepathic Probe",
          hc: 3,
          rarity: 2,
          cost: 5,
          attack: "3",
          abilities: [
            "Reveal the top card of the Villain Deck. If it's a Bystander, you may rescue it. If it's a Villain, you may fight it this turn."
          ]
        },
        {
          name: "Mind Control",
          hc: 1,
          rarity: 3,
          cost: 8,
          attack: "6",
          abilities: [
            [
              "Whenever you defeat a Villain this turn, you may gain it. It becomes a grey Hero with no text that gives ",
              { bold: "+"},
              { icon: 1 },
              " equal to its ",
              { icon: 1 },
              ". ",
              { italic: "[ You still get its " },
              { icon: 4 },
              { italic: "]" }
            ]
          ]
        }
      ]
    },
  ]
}