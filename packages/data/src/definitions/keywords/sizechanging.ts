import { KeywordDefinition } from "../ruleTypes";

export const sizechanging: KeywordDefinition = [
  [
    "This keyword represents Heroes and Villains using superpowers to stretch or massively change their size. It’s also used by characters that can change the size of a weapon, technology, or energy."
  ],
  {
    points: [
      [
        "Some Hero cards say things like “",
        { bold: "Size-Changing: " },
        { hc: 1 },
        ".“ This means ",
        { bold: "“You can recruit this card for 2" },
        { icon: 2 },
        { bold: " less if you played any " },
        { hc: 1 },
        { bold: " cards this turn.”" },
      ],
      [
        "Likewise, some Villain cards say things like “",
        { bold: "Size-Changing: " },
        { hc: 5 },
        ".“ This means ",
        { bold: "“You can fight this Villain for 2" },
        { icon: 1 },
        { bold: " less if you played any " },
        { hc: 5 },
        { bold: " cards this turn.”" },
      ],
      [
        "Some Divided Cards say “Size-Changing: ",
        { hc: 5 },
        "” on one side and “Size-Changing: ",
        { hc: 4 },
        "” on the other side. You can recruit either side of the card with its own Size-Changing discount, but you can’t get both discounts at once.",
      ],
      [
        "Some Heroes and Villains say things like “",
        { bold: "Size-Changing: " },
        { hc: 4 },
        ", ",
        { hc: 1 },
        ".“ If you played any ",
        { hc: 4 },
        " Heroes this turn, the cost is 2 less. If you played any ",
        { hc: 1 },
        " Heroes, the cost is 2 less. If you played both a ",
        { hc: 4 },
        " Hero and a  ",
        { hc: 1 },
        " Hero this turn, then the cost is 4 less."
      ],
      [
        "Fin Fang Foom and one of his Monsters Unleashed even say “",
        { bold: "Size-Changing: " },
        { hc: 4 },
        ", ",
        { hc: 2 },
        ", ",
        { hc: 1 },
        ", ",
        { hc: 5 },
        ", ",
        { hc: 3 },
        ".“ You can pay ",
        { bold: "2" },
        { icon: 1 },
        " less to fight them for each of these Hero Classes you played this turn."
      ],
      [
        { bold: "Note:" },
        " For a typical Size-Changing card, it doesn’t matter how many Heroes of that Hero Class you played – it only matters if you played any Heroes of that Hero Class or not."
      ],
      [
        "After you’ve recruited a card, Size-Changing doesn’t do anything else on that card."
      ],
      [
        "The Size-Changing card's cost is only changed during the moment you are recruiting it, not other times."
      ],
      [
        "If a Hero in the HQ already has “",
        { bold: "Size-Changing: " },
        { hc: 5 },
        "” and it gains “",
        { bold: "Size-Changing: " },
        { hc: 5 },
        ", ",
        { hc: 3 },
        "” from another special ability like the Sporr Villain, it just ends up with “",
        { bold: "Size-Changing: " },
        { hc: 5 },
        ", ",
        { hc: 3 },
        ".” A card can’t have a typical Size-Changing for the same Hero Class twice."
      ]
    ]
  }
];