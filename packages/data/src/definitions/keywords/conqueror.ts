import { KeywordDefinition } from "../ruleTypes";

export const conqueror: KeywordDefinition = [
  [
    "Some Villain cards have a special ability called “Conqueror,” representing their desire to conquer and hold a specific part of the city."
  ],
  {
    points: [
      [
        "Some Enemies say “Bridge Conqueror 3.“ This means ",
        { bold: "“This gets +3" },
        { icon: 1 },
        { bold: " while any Villain is on the Bridge.”" }
      ],
      [
        "The enemy gets the bonus wether itself or another Villain is on the Bridge.",
      ],
      [
        "Different Villains and Masterminds have different Conqueror abilities, with different bonus numbers and referring to different city spaces."
      ],
      [
        "Some Hero cards also have abilities like “Rooftops Conqueror 2”, meaning ",
        { bold: "“You get +2" },
        { icon: 1 },
        { bold: " if any Villain is on the Rooftops.”" },
      ]
    ]
  }
];