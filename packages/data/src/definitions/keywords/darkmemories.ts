import { KeywordDefinition } from "../ruleTypes";

export const darkmemories: KeywordDefinition = [
  {
    points: [
      [
        "Some Villains and Masterminds have the keyword “Dark Memories.” This means “",
        { bold: "This gets +1" },
        { icon: 1 },
        { bold: " for each Hero Class among cards in your discard pile." },
        "”"
      ],
      [
        "Likewise, some Hero cards also have “Dark Memories,”. Playing a Hero card with this keyword gives you that same bonus: “You get ",
        { bold: "+1" },
        { icon: 1 },
        " for each Hero Class among cards in your discard pile.”"
      ],
      [
        "The Hero Classes are ",
        { hc: 4 },
        ", ",
        { hc: 2 },
        ", ",
        { hc: 1 },
        ", ",
        { hc: 5 },
        ", and ",
        { hc: 3 },
        ", so Dark Memories can give anywhere from ",
        { bold: "+0" },
        { icon: 1 },
        " to ",
        { bold: "+5" },
        { icon: 1 },
        ". Grey cards like S.H.I.E.L.D. Agents don’t have a Hero Class."
      ],
      [
        "It doesn’t matter how many cards of a particular Hero Class you have in your discard pile. So if your discard pile were three ",
        { hc: 4 },
        " cards, four ",
        { hc: 2 },
        " cards, and five grey S.H.I.E.L.D. Agents, Dark Memories would give ",
        { bold: "+2" },
        { icon: 1 },
        "."
      ],
      [
        "Recruiting Heroes, ",
        { keyword: 57 },
        ", ",
        { keyword: 10 },
        ", and other discard abilities may increase the Dark Memories bonus."
      ],
      [
        "Likewise, if you draw or reveal enough cards that you have to shuffle your discard pile to make a new deck, the Dark Memories bonus will go back to ",
        { bold: "+0" },
        { icon: 1 },
        ". Time your plays and build your deck carefully to turn Dark Memories to your advantage!"
      ],
      [
        "You can minimize the ",
        { icon: 1 },
        " of The Hood and his gang by building a deck with very few Hero Classes. Or you can maximize the ",
        { icon: 1 },
        " of Heroes with Dark Memories by recruiting many Hero Classes."
      ],
      [
        "“Double Dark Memories” means double the bonus."
      ]
    ]
  }
];