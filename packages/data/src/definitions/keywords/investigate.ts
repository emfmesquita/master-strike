import { KeywordDefinition } from "../ruleTypes";

export const investigate: KeywordDefinition = [
  [
    "This keyword represents hard-bitten detectives investigating mysteries and searching for evidence and allies."
  ],
  {
    points: [
      [
        "Some cards say things like “",
        { bold: "Investigate" },
        " for a ",
        { hc: 5 },
        " card.“ That means “",
        { bold: "Look at the top two cards of your deck. Reveal a " },
        { hc: 5 },
        { bold: " card from among them and draw it. Put the rest of those cards back on the top and/or bottom of your deck in any order.”" }
      ],
      [
        "Other cards let you investigate for cards with certain costs, teams, icons, and other traits."
      ],
      [
        "Whether your investigation finds the right kind of card or not, you can still decide which cards go back on the top or bottom of your deck. This lets you set up your next investigation, or make powerful combos with other abilities that care about the top card of your deck."
      ],
      [
        "Some abilities tell you to investigate entirely different decks, like the Villain Deck and more. They will tell you what to do with the card you find. Like before, put the rest of the cards you looked at back on the top and/or bottom of that deck in any order."
      ],
      [
        "(Note that Howard the Duck is also a private investigator. Many of his cards work similarly to the Investigate keyword and combine well with Investigate cards. However, Howard doesn’t literally Investigate, since his cards originally came out in Marvel 3D before Investigate existed.)"
      ]
    ]
  }
];