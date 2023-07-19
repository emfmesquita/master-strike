import { KeywordDefinition } from "../ruleTypes";

export const moonlightsunlight: KeywordDefinition = [
  [
    "Vampires and Werewolves are especially vicious at night. By contrast, Sunspot absorbs solar energy to fuel his powers, gaining strength from the force of full sunlight. And Wong's spells can focus sunlight to destroy creatures of shadow. This is represented by this matched pair of keywords."
  ],
  {
    points: [
      [
        "Some Hero cards say things like “Moonlight: Draw a card.” Others say things like “Sunlight: You get ",
        { bold: "+2" },
        { icon: 1 },
        ".”"
      ],
      [
        { bold: "Moonlight abilities work only when most of the Heroes in the HQ have odd-numbered costs. Likewise, Sunlight abilities work only when most of the Heroes in the HQ have even-numbered costs." }
      ],
      [
        "Besides Heroes, some Villains and Masterminds also say they get extra ",
        { icon: 1 },
        " or abilities during Moonlight or Sunlight."
      ],
      [
        "If there are a tied number of odd and even-numbered Heroes in the HQ (perhaps because some HQ spaces were added or destroyed), then neither Moonlight nor Sunlight is in effect."
      ],
      [
        "Only the printed costs matter. Abilities that change the costs of Heroes in the HQ won't affect Moonlight and Sunlight."
      ],
      [
        "“Haunted Heroes” are still Heroes, so they still count towards Moonlight and Sunlight. (Any Villains Haunting them don't count, since they aren't Heroes.)"
      ],
      [
        "“Divided Cards” from Civil War and other sets count as just one card for Moonlight/Sunlight."
      ]
    ]
  },
  [
    { bold: "Manipulating Moonlight and Sunlight:" }
  ],
  {
    points: [
      [
        "Clever players can recruit cards out of the HQ at crucial times to manipulate whether it is Moonlight or Sunlight."
      ],
      [
        "When Villains scape, KO’ing Heroes from the HQ, you can also use this to shift towards Moonlight or Sunlight."
      ],
      [
        "In a game with many Moonlight and Sunlight effects, some players like to shift the odd-numbered cost cards in the HQ down a little bit. This makes it easier to tell at a glance whether Moonlight or Sunlight is in effect."
      ],
    ]
  },
  [
    { bold: "Moonlight and Sunlight Timing" }
  ],
  [
    "As always, do a card’s abilities in the order they are listed. You check Moonlight or Sunlight at the moment when you would use that ability."
  ],
  {
    points: [
      [
        "For example, Sunspot has a card that says “",
        { bold: "Moonlight" },
        ": You may put a Hero from the HQ on the bottom of the Hero Deck. ",
        { bold: "Sunlight" },
        ": Draw a card.” Sunspot’s cards primarily benefit from Sunlight, so the Moonlight ability here mostly helps him push the HQ towards Sunlight.",
      ],
      [
        "You do these abilities in the order they are listed. So if there are three odd-numbered cards in the HQ, and you play this card, you might be able to use the Moonlight ability to change the HQ to have only two odd-numbered cards, and then you could immediately use the Sunlight ability."
      ],
      [
        "Once you are completely done playing a Hero card or fighting a Villain with a Moonlight or Sunlight ability, move on. If later in the turn you change Moonlight or Sunlight, you don’t go back in time to change the past."
      ]
    ]
  },
  [
    { bold: "Remembering Odd and Even" }
  ],
  {
    points: [
      [
        "To help you remember that Moonlight uses odd-numbered cards, all the Moonlight-loving Hero cards have odd-numbered costs. Likewise, all the Sunlight-loving Hero cards have even-numbered costs.",
      ],
      [
        "Similarly, Moonlight-loving Villains all have odd-numbered ",
        { icon: 1 },
        " while Sunlight-loving Villains all have even-numbered ",
        { icon: 1 },
        " Of course, some cards use both Sunlight and Moonlight, so they don’t follow this guideline.",
      ],
      [
        "You can also remember with the phrase “The odd ones come out at night...”"
      ]
    ]
  },
];