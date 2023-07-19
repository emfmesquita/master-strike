import { KeywordDefinition } from "../ruleTypes";

export const burrow: KeywordDefinition = [
  [
    { bold: "Subterranea" },
    " Villains use the ",
    { bold: "Burrow" },
    " keyword. This allows them to retreat by digging to safety when they are attacked. “",
    { bold: "Burrow" },
    "” means:"
  ],
  [
    "“",
    { bold: "Fight" },
    ": If the Streets were empty, put this Villain back into the Streets.”"
  ],
  [
    "When you fight a Villain with ",
    { bold: "Burrow" },
    ", do all of that Villain’s ",
    { bold: "Fight" },
    " effects. You rescue any Bystanders the villain may have captured as normal. Then, if the “Streets” city space was empty, put that Villain back into the Streets space. This means that to stop a Villain with ",
    { bold: "Burrow" },
    " permanently, you have to:",
  ],
  {
    points: [
      [
        "Fight it while it’s in the Streets, or"
      ],
      [
        "Fight it while another Villain occupies the Streets, or"
      ],
      [
        "Fight it once to drive it back to the Streets then fight it again in the Streets to finish it."
      ]
    ]
  },
  [
    "If you fight a Villain with ",
    { bold: "Burrow" },
    " twice in a turn, you’ll do that Villain’s “",
    { bold: "Fight" },
    "“ effects twice. Cards that do something “when you defeat” a Villain still work if the Villain burrows to the Streets. When a Villain burrows to the Streets, it does not do any Ambush effects.",
  ]
];