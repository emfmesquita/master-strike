import { KeywordDefinition } from "../ruleTypes";

export const laststand: KeywordDefinition = [
  "This keyword represents how a Dark Avenger fights hardest when all alone, back to the wall, making a last stand. Treacherous and cruel, they don’t understand the teamwork of the real Avengers.",
  {
    points: [
      [
        "Some Villains say “Last Stand.” This means ",
        { bold: "“This gets +1" },
        { icon: 1 },
        { bold: " for each empty space in the city.“" }
      ],
      [
        "Some Captain Marvel and Photon cards also say “Last Stand,” representing how they fight their hardest near the end of a battle. Likewise, ",
        { bold: "“You get +1" },
        { icon: 1 },
        { bold: "  for each empty space in the city.”" }
      ],
      "Choose the order you fight Villains carefully when Last Stand is in the game!",
      "If a Mastermind or Scheme causes a city space not to exist, that does not count as an “empty space.”",
      "“Double Last Stand” means double the bonus."
    ]
  }
];