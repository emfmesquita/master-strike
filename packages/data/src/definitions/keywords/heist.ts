import { KeywordDefinition } from "../ruleTypes";

export const heist: KeywordDefinition = [
  [
    "Scott Lang's elaborate Heists are highlights of the movies, represented by this new keyword:"
  ],
  {
    points: [
      [
        "Some cards say things like “Heist: You get ",
        { bold: "+2" },
        { icon: 2 },
        "“."
      ],
      [
        "Once per turn, if you have played any Heroes with Heist abilities (and/or fought any Enemies with Heist abilities) you may “attempt a Heist.“"
      ],
      [
        "To do this, first assemble your crew: ",
        { bold: "Count the number of different non-zero costs you have among all your Heroes this turn. This is your Heist Count." },
        " Then try to outfox the guards: ",
        { bold: "Reveal the top card of the Villain Deck and check its printed VP." }
      ],
      [
        { bold: "If your Heist Count is higher" },
        " than that VP: The Heist worked! Use all Heist effects of Heroes you played and Enemies you fought this turn, in any order."
      ],
      [
        { bold: "If your Heist Count is tied" },
        " with that VP: It all went sideways, and you barely escaped! No effects."
      ],
      [
        { bold: "If your Heist Count is lower" },
        " than that VP: Your crew got caught! You gain a Wound (& no Heist effects)."
      ],
      [
        "You can only ever attempt one Heist per turn, no matter the outcome. If you succeed in the Heist, do all of the Heist effects before moving on to playing more Heroes or recruiting or fighting anything else. After your one Heist attempt for the turn, if you draw additional cards with Heist abilities (or fight additional Enemies. with Heist abilities), it will be too late to get those additional Heist effects."
      ],
      [
        "Heist checks for printed cost, so 4* and 4 count as the same cost."
      ],
      [
        "You don't have to go on a Heist. Weigh it carefully!"
      ],
    ]
  }
];