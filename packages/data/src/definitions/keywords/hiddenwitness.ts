import { KeywordDefinition } from "../ruleTypes";

export const hiddenwitness: KeywordDefinition = [
  [
    "In a world of Noir, conspiracies are hard to unravel, betrayal is commonplace, and it’s hard to determine who the real Villains are."
  ],
  {
    points: [
      [
        "This keyword represents Villains and Masterminds hiding behind layers of informants, victims, and stooges. To find these Villains, you must track down and interview Hidden Witnesses who know their locations."
      ],
      [
        "Some Villains say things like “",
        { bold: "Ambush" },
        ": This Villain captures 2 ",
        { bold: "Hidden Witnesses" },
        ".” This means the Villain captures the top 2 cards of the Bystander Stack, ",
        { bold: "face-down" },
        ", as Hidden Witnesses. You can’t fight a Villain while it has a Hidden Witness."
      ],
      [
        "During your turn ",
        { bold: "you can pay 2" },
        { icon: 2 },
        " to rescue a Hidden Witness any number of times and put it in your Victory Pile."
      ],
      [
        "Hidden Witnesses still count as Bystanders. When you rescue one, you get any special “When you rescue this Bystander …” effect written on it. It stays in your Victory Pile as a normal, face-up Bystander."
      ],
      [
        "A Villain can have face-up Bystanders and face-down Hidden Witnesses at the same time. You’ll need to pay to rescue the face-down Hidden Witnesses. Then, you can fight the Villain, which will automatically rescue the face-up Bystanders."
      ],
      [
        "If a Villain escapes with any number of Bystanders, including Hidden Witnesses, it will cause all players to discard a single card, just like a Villain escaping with any normal Bystanders. Hidden Witnesses carried away by escaping Villains stay in the Escape Pile as normal, face-up Bystanders."
      ],
      [
        "You can pay to rescue Hidden Witnesses even if you’re not going to fight that Villain during that turn. You can also rescue just some of the Hidden Witnesses and leave others for later."
      ],
      [
        "If a special ability lets you “Defeat a Villain for free,” you automatically rescue all the Hidden Witnesses on it without paying ",
        { icon: 2 },
        "."
      ],
      [
        "Masterminds and Schemes can have Hidden Witnesses on them too. They work the same way."
      ]
    ]
  },
  [
    { bold: "Charles Xavier, Professor of Crime" }
  ],
  [
    "This Mastermind can put Hidden Witnesses on Heroes in the HQ. These work the same way as other Hidden Witnesses."
  ],
  {
    points: [
      [
        "You can’t recruit Heroes that have Hidden Witnesses on them until someone pays to rescue those Hidden Witnesses."
      ],
      [
        "Those Hidden Witnesses still count as Bystanders to increase Charles Xavier’s ",
        { icon: 1 },
        "."
      ],
      [
        "If a Hero in the HQ is KO’d by an escaping Villain or leaves the HQ because of some special ability, then KO any Hidden Witnesses on that Hero."
      ]
    ]
  },
];