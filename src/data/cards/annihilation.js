export default {
  id: 30,
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