export default [
  [
    "Some Hero cards are also Artifacts. (They still count as Hero cards too.) When you gain a Hero Artifact, put it in your discard pile like any other Hero card. When you draw that Artifact later in the game, you may play it in front of you and use its effects, usually once on each of your turns. This means you “control” that Artifact. At the end of your turn, when you discard all the cards you played that turn, the Artifacts you control stay in."
  ],
  {
    points: [
      ["You can use an Artifact on the first turn you play it."],
      ["You can control multiple Artifacts with the same card name and use each of them."],
      ["You can’t use your Artifacts’ “once per turn” abilities during other players’ turns."],
      [
        "If a card effect during any player’s turn asks you to “Reveal a ",
        { hc: 3 },
        "Hero,” you may reveal a ",
        { hc: 3 },
        " Hero Artifact you control. Card effects that say “your Heroes” or “Heroes you have” include Hero Artifacts you control as well."
      ],
      [
        "However, you only “played” an Artifact on the turn you put it out, so it only activates Superpower Abilities (like “",
        { hc: 4 },
        ": You get ",
        { bold: "+1" },
        { icon: 1 },
        "”) on the turn you play the Artifact, not every turn of the game. Likewise, card effects that count “each ",
        { hc: 5 },
        " Hero you played this turn” only count an Artifact if you played it this turn."
      ],
      ["You don’t have to use an Artifact’s abilities on a turn if you don’t want to."],
      ["If you are using the Final Showdown, you can use Artifacts during your Showdown Turn."],
      ["If a card effect like Rogue or Chameleon would let you “copy” an Artifact card, then you can use that Artifact’s “Once per turn” ability once, and there is no other effect."],
    ]
  }
];