import { KeywordDefinition } from "../ruleTypes";

export const excessiveviolence: KeywordDefinition = [
  [
    "This keyword represents how some heroes often go out of their way to be insanely more violent than necessary to get a job done."
  ],
  {
    points: [
      [
        "Some Heroes say things like “",
        { bold: "Excessive Violence:" },
        " Draw a card.”"
      ],
      [
        { bold: "Once per turn, you can spend 1" },
        { icon: 1 },
        { bold: " more than you need to fight a Villain or Mastermind “using Excessive Violence.” If you do, you get to use all the “Excessive Violence” abilities on cards you played this turn." }
      ],
      [
        "Say you’ve played three Heroes with Excessive Violence abilities this turn. If you spend ",
        { bold: "8" },
        { icon: 1 },
        " to fight a Villain or Mastermind that has ",
        { bold: "7" },
        { icon: 1 },
        ", then you’ll get to use all three Excessive Violence abilities!"
      ],
      [
        "If you don’t fight anything this turn, or if you don’t spend an extra ",
        { bold: "1" },
        { icon: 1 },
        " on someone, then you won’t be able to use Excessive Violence."
      ],
      [
        "Since you can only fight “using Excessive Violence” once per turn, you can only use a card’s Excessive Violence ability once per turn. (It’s OK to play two cards with the same card name, fight an enemy “using Excessive Violence” and use both of those cards’ Excessive Violence abilities.)"
      ],
      [
        "Do the enemy’s Fight effect and the Excessive Violence abilities in any order of your choice."
      ],
      [
        "If you fight using Excessive Violence and then draw or play more cards with Excessive Violence abilities later in the turn, it will be too late to use those abilities."
      ],
      [
        "Gravity Mines says “Triggered Artifact — Whenever you use Excessive Violence, draw a card.” You can use this even if this Artifact is the only Excessive Violence card you have, or combine it with other Excessive Violence cards."
      ]
    ]
  }
];