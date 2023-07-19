import { KeywordDefinition } from "../ruleTypes";

export const humanshield: KeywordDefinition = [
  [
    "This keyword represents enemies hiding behind innocent people to prevent Heroes’ attacks."
  ],
  {
    points: [
      [
        "“",
        { bold: "“Ambush" },
        ": This Villain captures 2 Human Shields” means ",
        { bold: " the Villain captures the top 2 cards of the Bystander Stack face-down. You can’t fight a Villain while it has any Human Shields" },
        ". During your turn, any number of times, you can pay ",
        { icon: 1 },
        " equal to that Villain’s ",
        { icon: 1 },
        " value to rescue one of its Human Shields at random and put it in your Victory Pile. (The ",
        { bold: "*" },
        " on their ",
        { icon: 1 },
        " is a reminder.)"
      ],
      [
        "A Villain can have face-up Bystanders and face-down Human Shields at the same time. You’ll need to pay to rescue the face-down Human Shields. Then you can fight the Villain, which will rescue the face-up Bystanders automatically."
      ],
      [
        "Human Shields still count as Bystanders. Villains escaping with Human Shields still make players discard as normal.",
      ]
    ]
  }
];