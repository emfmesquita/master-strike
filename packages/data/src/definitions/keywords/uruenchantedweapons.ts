import { KeywordDefinition } from "../ruleTypes";

export const uruenchantedweapons: KeywordDefinition = [
  [
    "To corrupt the people of 2099’s faith in ancient Heroes, Alchemax creates false Asgardian “gods”. They combine nanotech and nuclear fusion to engineer jaw-dropping weapons that mimic the power of the fabled Mjolnir. These use the UruEnchanted Weapons keyword, which first appeared in Legendary®: Fear Itself."
  ],
  {
    points: [
      [
        { bold: "When you try to fight an Enemy that has some number of Uru-Enchanted Weapons, reveal that many cards from the top of the Villain Deck. That Enemy immediately gains +" },
        { icon: 1 },
        { bold: " equal to the total Victory Points of all the cards you revealed." },
      ],
      [
        "If you have at least as many ",
        { icon: 1 },
        " points as the Enemy’s improved ",
        { icon: 1 },
        ", use them and defeat the Enemy as normal. If you don’t have enough ",
        { icon: 1 },
        " points, you don’t defeat this Enemy, you lose all your ",
        { icon: 1 },
        " points, and you can’t use fight anymore this turn. (You can still play cards and recruit – you just can’t fight or Heal Wounds.)"
      ],
      [
        { bold: "Whether you defeat that Enemy or not, put all the cards you revealed from the Villain Deck on the bottom of that deck in random order." },
      ],
      [
        "Once you start to fight an Enemy, you can’t play any more cards until after that fight is complete. Remember to generate all the ",
        { icon: 1 },
        " you can before you fight them!"
      ],
      [
        "Flipping cards for Uru-Enchanted Weapons cannot end the game. If you run out of cards in the Villain Deck, shuffle the cards you’ve revealed so far and keep revealing. (If there are no cards left in the Villain Deck there is no ",
        { icon: 1 },
        " bonus.)"
      ],
    ]
  }
];