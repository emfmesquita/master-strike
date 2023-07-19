import { KeywordDefinition } from "../ruleTypes";

export const revenge: KeywordDefinition = [
  [
    "This keyword represents villains getting stronger the more of them you kill."
  ],
  {
    points: [
      [
        "Some villains say things like “",
        { bold: "Revenge for Evil Deadpool Corpse" },
        ".”"
      ],
      [
        "That means: “",
        { bold: "This Villain gets +1" },
        { icon: 1 },
        { bold: " for each Evil Deadpool Corpse Villain in your Victory Pile" },
        ".“",
      ],
      [
        "This counts only the Victory Pile of the player fighting. Evil Deadpool Corpse Villains on other players’ Victory Piles do not increase the Villain attack.",
      ],
      [
        "Revenge is not limited just to Villains, and can also target other types of cards.",
      ]
    ]
  }
];