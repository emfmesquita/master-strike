import { KeywordDefinition } from "../ruleTypes";

export const conqueror: KeywordDefinition = [
  [
    "Some Villain cards have a special ability called “Conqueror,” representing their desire to conquer and hold a specific part of the city. Same for Asgard’s fiercest enemies that lead legions of monsters to conquer all of the Nine Realms, including Midgard (Earth) and Asgard itself."
  ],
  {
    points: [
      [
        "Some Villains say things like “Bridge Conqueror 3.“ This means ",
        { bold: "“This gets +3" },
        { icon: 1 },
        { bold: " while any Villain is on the Bridge.”" }
      ],
      [
        "This Villain gets the bonus while it itself is on the Bridge or while another Villain is on the Bridge.",
      ],
      [
        "Different Villains and the Hela and Kang Masterminds have different Conqueror abilities, with different bonus numbers and referring to different city spaces."
      ],
      [
        "Some Hero cards also have abilities like “Rooftops Conqueror 2”, which likewise means “You get ",
        { bold: "+2" },
        { icon: 1 },
        " if any Villain is on the Rooftops.”"
      ]
    ]
  }
];