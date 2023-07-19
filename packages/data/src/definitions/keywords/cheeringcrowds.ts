import { KeywordDefinition } from "../ruleTypes";

export const cheeringcrowds: KeywordDefinition = [
  [
    "This keyword represents the Champions being inspired to redouble their efforts by adoring fans."
  ],
  {
    points: [
      [
        "Several Hero cards say “Cheering Crowds.” This means ",
        { bold: "“You may play this card twice in a row if you return a Bystander from your Victory Pile to the bottom of the Bystander Stack.”" }
      ]
    ]
  },
  [
    { bold: "Example 1: " },
    " Say you have a Hero that gives ",
    { bold: "1" },
    { icon: 2 },
    " and says “Draw a card. ",
    { bold: "Cheering Crowds" },
    ".” As you play this Hero, you could return a Bystander to play the Hero twice in a row, getting ",
    { bold: "2" },
    { icon: 2 },
    " and drawing two cards."
  ],
  {
    points: [
      "Essentially you play the card itself, and then you play a bonus copy of that card."
    ]
  },
  [
    { bold: "Example 2: " },
    " Say your first play of the turn was an ",
    { hc: 2 },
    " card that gives ",
    { bold: "2" },
    { icon: 1 },
    " and says “",
    { hc: 2 },
    ": Draw a card. ",
    { bold: "Cheering Crowds" },
    ".” You decide to return a Bystander to play this card twice in a row. The first play wouldn’t get to use the “",
    { hc: 2 },
    ": Draw a card” ability, since you haven’t played an ",
    { hc: 2 },
    " card earlier in the turn. However, the second play would get to use that Superpower ability, since you now have played an ",
    { hc: 2 },
    " card earlier in the turn. So you would end up getting ",
    { bold: "4" },
    { icon: 1 },
    " and drawing one card."
  ],
  {
    points: [
      [
        "If you had played a different ",
        { hc: 2 },
        " card before doubling the Cheering Crowds card, then you would get to use the “",
        { hc: 2 },
        ": Draw a card” ability both times, getting ",
        { bold: "4" },
        { icon: 1 },
        " and drawing two cards."
      ]
    ]
  },
  [
    { bold: "Example 3: " },
    " Say your first play is using Cheering Crowds to play a ",
    { hc: 5 },
    " card twice. Then, you play another card that says “",
    { hc: 5 },
    ": You get ",
    { bold: "+1" },
    { icon: 1 },
    " for each other ",
    { hc: 5 },
    " Hero you played this turn.” That ability would count both plays of your Cheering Crowds card, giving you ",
    { bold: "+2" },
    { icon: 1 },
    " total."
  ],
  {
    points: [
      "When playing out a big turn, some people like to put the Bystander they’re returning temporarily on the Cheering Crowds card to remind themselves that they played it twice."
    ]
  },
];