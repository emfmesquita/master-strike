import { RuleDefinition} from "../ruleTypes";

export const adaptingmasterminds: RuleDefinition = [
  [
    "The Hydra Super-Adaptoid and the Hydra High Council constantly adapt their tactics to attack the Heroes in new ways. Also The Sinister Six 2099 and Alchemax Executives aren’t just a single Mastermind. Instead, they are teams of arch-villains working together, adapting to use different Master Strikes and abilities. Accordingly, each of these Masterminds is a new “Adapting Mastermind“ with 4 or 6 different Master Strikes. Here's how they work. "
  ],
  {
    points: [
      [
        "A normal Mastermind has a Mastermind card and 4 Mastermind Tactic cards. An Adapting Mastermind instead just has 4 or 6 Mastermind Tactic cards. Whichever Tactic is currently on top of the stack of Tactics counts as the current Mastermind card."
      ],
      [
        "Keep all of their Tactics in a face up stack. Use only the rules on that top card, ignoring the rest of the stack.",
      ],
      [
        "In its “Setup” abilities, and whenever an Adapting Mastermind does a Master Strike, it says “Adapt”. This means “",
        { bold: "Shuffle the Mastermind Tactics and randomly put one on top, face up." },
        "“ You might randomly pick the same Tactic that was previously on top, or it might be a different Tactic. It keeps any Bystanders it held."
      ],
      [
        "Likewise, when you fight an Adapting Mastermind, you always fight the Tactic currently on top of the stack. You ignore all the card abilities and bonuses that are not currently on top of the stack. The “Fight” ability also says “Adapt” at the end. So, you put the Tactic you just fought into your Victory Pile, rescue any Bystanders, do its Fight effect, then shuffle the remaining Tactics and randomly put one on top, face up."
      ],
      [
        "The Marvel 2099 set includes double-sided “Epic” Adapting Masterminds. During setup, turn all the Tactics to either the normal side or the much harder Epic side. Don’t change which side is face up when they Adapt. Don’t use these with Schemes that call for Mastermind Tactics to be shuffled into decks of non-double-sided cards."
      ]
    ]
  }
];