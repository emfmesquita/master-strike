import { RuleDefinition } from "../ruleTypes";

export const ambushschemes: RuleDefinition = [
  [
    "Each Villain Group in this set includes an “Ambush Scheme.“ These are shuffled into the Villain Deck alongside their Villain Group as normal. When an Ambush Scheme is played from the Villain Deck, put it next to the normal Scheme and do its Ambush effect. For the rest of the game, whenever a Scheme Twist is played, do each Scheme's Twist effect (in any order). Each Ambush Scheme tells you a way to “defeat this Scheme.“ When you do that, the current player puts it into their Victory Pile, scoring its Victory Points. Ambush Schemes aren't Villains. They don't enter the city or push other Villains forward. You don't need to defeat Ambush Schemes to win the game."
  ],
  {
    points: [
      [
        "Note: There can only be one Ambush Scheme in play at a time. ",
        { bold: "If a second Ambush Scheme would be played from the Villain Deck, KO the new Ambush Scheme and play another card from the Villain Deck instead." }
      ],
    ]
  }
];