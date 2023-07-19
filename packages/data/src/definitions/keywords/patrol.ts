import { KeywordDefinition } from "../ruleTypes";

export const patrol: KeywordDefinition = [
  [
    "Some cards have abilities like “",
    { bold: "Patrol the Sewers:" },
    "  If it’s empty, rescue a Bystander.” ",
    { bold: "You can use the specified Patrol ability only if the specified city space has no cards in it." },
  ],
  {
    points: [
      [
        "If that city space becomes empty later in the turn, it’s too late to use the Patrol ability."
      ],
      [
        "If playing a Patrol card gives you ",
        { icon: 1 },
        ", and you use that ",
        { icon: 1 },
        " to clear out that city space, it’s still too late to use the Patrol ability, since the space wasn’t empty when you played the Patrol card.",
      ],
      [
        "This can also say “",
        { bold: "Fight: Patrol the Bank:" },
        " If it’s empty, you get ",
        { bold: "+2" },
        { icon: 2 },
        ". If it’s not, you get ",
        { bold: "+2" },
        { icon: 1 },
        ".”"
      ],
      [
        "Other cards let you patrol even stranger places, like the Escape Pile or a Victory Pile. Similarly, you can use those Patrol abilities if that place has no cards in it."
      ],
      [
        "If a card effect causes a city space not to exist, you can’t use Patrol abilities for that space."
      ]
    ]
  }
];