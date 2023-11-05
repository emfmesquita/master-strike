import { KeywordDefinition } from "../ruleTypes";

export const whatif: KeywordDefinition = [
  [
    "This new keyword highlights how a Hero’s destiny can pivot on a single crucial choice, with consequences that spill through the rest of that dimension. Some Hero cards say things like “",
    { bold: "What If…?" },
    ": You get ",
    { bold: "+3" },
    { icon: 2 },
    ".”"
  ],
  {
    points: [
      [
        "This means ",
        { bold: "“Choose a Hero Class or Hero Name. Then reveal the top card of your deck, and either put it back on top of your deck or discard it. If the revealed card had the Hero Class or Hero Name you chose, then do the What If effect.”" }
      ],
      [
        "What If...? is not allowed to trigger on 0-cost grey starting cards like S.H.I.E.L.D. Agent or S.H.I.E.L.D. Trooper, so don’t choose those Hero Names."
      ],
      [
        "Even if a What If...? ability misses, it’s still valuable to be able to choose to put your top card in your discard pile or not. For example, it can give you key information about your top card so you know what to choose with your next What If...? card that turn. Or if the top card is a S.H.I.E.L.D. Agent, you can discard it so you have a chance to hit with your next What If...? ability that turn and so you don’t have to draw it next turn."
      ],
      [
        "If you choose a Hero Name like “Black Widow,” that will trigger on any card whose Hero Name is literally “Black Widow” as well as any Hero Name that contains “Black Widow”, such as “Apocalyptic Black Widow.” However, you have to choose an actual Hero Name. You can’t choose just the word “Captain” and trigger on both Captain America and Captain Carter cards, since the single word “Captain” isn’t a Hero Name."
      ]
    ]
  },
  [
    { bold: "Increasing Your Chances with What If...?" }
  ],
  [
    "There are lots of ways you can increase the chance that your What If...? abilities will work:"
  ],
  {
    points: [
      [
        "First: There are several cards in this set that let you reveal the top card of your deck or put a card on top of your deck, so that you know what to choose with What If...?."
      ],
      [
        "Second: You can try focusing your deck on a single Hero Class or single Hero Name."
      ],
      [
        "Third: Collecting lots of What If...? cards can let you see the top card with the first What If...?, so you know what to guess with the rest of your What If...? abilities that turn."
      ],
      [
        "Fourth: You can look for ways to KO your 0-cost starter cards and avoid or KO Wounds."
      ]
    ]
  },
];