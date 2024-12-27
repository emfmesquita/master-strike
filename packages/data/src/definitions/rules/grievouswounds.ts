import { RuleDefinition} from "../ruleTypes";

export const grievouswounds: RuleDefinition = [
  [
    "Civil War comes with 15 new “Grievous Wounds” that are more difficult to heal. Shuffle them all into the Wound Stack face down. Instead of normal Wound text, a Grievous Wound says something like “",
    { bold: "Healing" },
    ": You may spend 5",
    { icon: 2 },
    ". If you do, KO this Wound.”"
  ],
  {
    points: [
      [
        "Using these Healing abilities doesn’t prevent you from recruiting and fighting that turn."
      ],
      [
        "You can only use these Healing abilities during your turn."
      ],
      [
        "Grievous Wounds still count as “Wounds” for all card effects."
      ],
      [
        "If you have a normal Wound, you can use its normal “KO all your Wounds” Healing ability to KO your Grievous Wounds too. But if you don’t have a normal Wound in hand, then you can’t."
      ],
    ]
  }
];