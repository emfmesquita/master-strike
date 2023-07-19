import { KeywordDefinition } from "../ruleTypes";

export const uruenchantedweapons: KeywordDefinition = [
  [
    "When you try to fight an enemy that has some number of Uru-Enchanted Weapons, reveal that many cards from the top of the Adversary Deck. That enemy immediately gains ",
    { bold: "+" },
    { icon: 1 },
    " equal to the total Victory Points of all the cards you revealed. If you have enough Attack points to match the enemy’s improved ",
    { icon: 1 },
    ", use them and defeat the enemy as normal. If you don’t have enough Attack points, you don’t defeat this enemy, you lose all your Attack points, and you can’t fight anymore this turn.",
  ],
  {
    points: [
      [
        "Whether you defeat that enemy or not, put all the cards you revealed from the Adversary Deck on the bottom of that deck in random order."
      ],
      [
        "Many of these enemies have a “",
        { bold: "Fight or Fail:" },
        "” effect. Do this effect if you defeat them ",
        { bold: "or" },
        " if the Uru-Enchanted Weapons cause you to fail to defeat them."
      ],
      [
        "You can’t try to fight an enemy unless you have enough Attack points to match its printed ",
        { icon: 1 },
        "."
      ],
      [
        "Once you start to fight an enemy, you can’t play any more cards or throw any Artifacts until after that fight is complete. So remember to generate all the Attack points you can before you attack an enemy with Uru-Enchanted Weapons!"
      ],
      [
        "The ",
        { bold: "*" },
        " symbol next to these Enemies’ ",
        { icon: 1 },
        " indicates that they might get more Attack.",
      ],
      [
        "Flipping cards for Uru-Enchanted Weapons cannot end the game. If you run out of cards in the Adversary Deck, shuffle the cards you’ve revealed so far and keep revealing. (If there are no cards left in the Adversary Deck there is no Attack bonus.)"
      ],
      [
        "With 2-5 players, each flip tends to be worth about 1.5 attack. In solo mode: about 1 attack."
      ],
    ]
  }
];