import { RuleDefinition} from "../ruleTypes";

export const chooseavillain: RuleDefinition = [
  [
    "Some Karnak cards say things like “Choose a Villain Group. You get ",
    { bold: "+1" },
    { icon: 1 },
    " for each Villain in your Victory Pile from that Group.“ For example, you can choose the Villain Group “Inhuman Rebellion.“"
  ],
  {
    points: [
      [
        "You can also count a Henchman Villain Group like “Doombot Legion.“ However, you can't choose the generic word “Henchmen“ and count Villains from multiple Henchmen Groups at once."
      ],
      [
        "You also can't count two Villain Groups at once by choosing a word or phrase that appears in both Villain Group. For example, if you choose the “Hydra“ Villain Group, you can't also count “Hydra Elite“ Villains. They are not the same Villain Group."
      ],
      [
        "You can't count cards that have no Villain Group, like Tactics, Bystanders, Master Strikes, Scheme Twists, or Heroes that were turned into Villains."
      ],
      [
        "Traps and Locations from other sets aren't Villains, so they don't count, even if that Trap turned into a Villain."
      ]
    ]
  },
];