import { RuleDefinition} from "../ruleTypes";

export const adaptingmasterminds: RuleDefinition = [
  [
    "The Hydra Super-Adaptoid and the Hydra High Council constantly adapt their tactics to attack the Heroes in new ways. Accordingly, each of these Masterminds is a new “Adapting Mastermind“ with 4 different Master Strikes. Here's how they work. "
  ],
  {
    points: [
      [
        "A normal Mastermind has a Mastermind card and 4 Mastermind Tactic cards. An Adapting Mastermind instead has just 4 Mastermind Tactic cards. Whichever Tactic is currently on top of the stack of Tactics counts as the current Mastermind card."
      ],
      [
        "Say you are using Hydra Super-Adaptoid as your Mastermind. Keep all his Tactics in a face up stack. Use only the rules on that top card, ignoring the rest of the cards in the stack.",
      ],
      [
        "Whenever an Adapting Mastermind does a Master Strike, it says“",
        { bold: "Adapt" },
        "“ at the end. This means “",
        { bold: "Shuffle the Mastermind Tactics and randomly put one on top, face up." },
        "“ You might randomly pick the same Tactic that was previously on top, or it might be a different Tactic."
      ],
      [
        "Likewise, when you fight an Adapting Mastermind, you always fight the Tactic currently on top of the stack. You ignore all the card abilities and ",
        { icon: 1 },
        " bonuses that are not currently on top of the stack. The “Fight“ ability also says “Adapt“ at the end. So you put the Tactic you just fought into your Victory Pile, do its Fight effect, then shuffle the remaining Tactics and randomly put one on top, face up."
      ]
    ]
  }
];