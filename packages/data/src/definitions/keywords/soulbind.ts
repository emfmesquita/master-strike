import { KeywordDefinition } from "../ruleTypes";

export const soulbind: KeywordDefinition = [
  [
    "In a maddened drive to save his beloved Christine Palmer, the alternate-dimension variant known as Doctor Strange Supreme binds demons’ dark souls to devour their power. Uatu the Watcher and Gamora also make crucial moves to bind certain souls and Infinity Stones. This is represented with the new Soulbind keyword. Some cards say things like “",
    { hc: 3 },
    " Soulbind: You get +",
    { icon: 1 },
    " equal to that Villain’s printed Victory Points.”"
  ],
  {
    points: [
      [
        "This means ",
        { bold: "“If you have played a " },
        { hc: 3 },
        { bold: " Hero earlier this turn, you may choose a face up Villain card from your Victory Pile, turn it face down, and put it on the bottom of your Victory Pile. If you do, then do the listed Soulbind effect.”" },
        "At the end of the game when you are counting Victory Points, turn all those face down cards face up again and you can count their Victory Points. But until the end of the game, the face down cards count as not being in your Victory Pile at all."
      ],
      [
        "This is a great way to stop Rise of the ",
        { keyword: 16, text: "Living Dead Villains" },
        " from coming back to life out of your Victory Pile. The face down card can’t be used for another Soulbind effect later. The face down card can’t help you against ",
        { keyword: 17 },
        ". It doesn’t count for effects that count the number of cards or Villains in your Victory Pile. Act as if the face down card is no longer in your Victory Pile at all, until you are counting Victory Points at the end of the game."
      ],
      [
        "Some cards ask you to Soulbind more specific things, like “Soulbind a Henchman” or “Soulbind six Villains.”"
      ],
      [
        { bold: "Using Soulbind is usually optional." },
        " You generally don’t have to use Soulbind if you don’t want to, whether on a Hero card you played or a Villain you just fought. However, some cards explicitly say that you “must Soulbind,” which means you have to do it."
      ],
    ]
  },
];