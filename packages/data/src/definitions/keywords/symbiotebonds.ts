import { KeywordDefinition } from "../ruleTypes";

export const symbiotebonds: KeywordDefinition = [
  [
    "This keyword represents how symbiotes like Hybrid, Riot, and Lasher bond with other characters, enhancing them with a dark shell. You must fight the combined strength of the host and symbiote to split them apart, then finish what remains in a second fight."
  ],
  {
    points: [
      [
        "Some Villains say things like “",
        { bold: "Ambush" },
        ": A Henchman Villain from your Victory Pile ",
        { bold: "Symbiote Bonds" },
        " with Lasher.”",
      ],
      [
        { bold: "This means stack this card onto the specified Villain, combining them into a single Villain with both cards’ " },
        { icon: 1 },
        { bold: " and text added together." },
      ],
      [
        "To fight a Combined Villain, you must spend the total ",
        { icon: 1 },
        " of both Villain cards combined. Rescue all the Bystanders that Combined Villain had. ",
        { bold: "Then put either one of the Villain cards from that Combined Villain into your Victory Pile and do that card’s Fight effect." },
        " The other card from that Combined Villain stays in that city space, and you don’t do its Fight effect.",
      ],
      [
        { bold: "If a Combined Villain escapes" },
        ", it’s only a single escape, so it only KOs one Hero that costs 6 or less from the HQ. (If it’s carrying any number of Bystanders, it makes all players discard a single card as normal.) Do the Escape abilities of both those Villain cards in any order. Once in the Escape Pile, they are two unattached Villains again."
      ],
      [
        "Keep one card of the Combined Villain tucked under the other, so you can see both cards’ ",
        { icon: 1 },
        " and text."
      ],
      [
        "Since a Combined Villain has the text of both its Villain cards, it can get extra ",
        { icon: 1 },
        " or restrictions from various special abilities on either of its cards. It also counts as both cards’ Villain Groups."
      ],
      [
        "Symbiote Bonds never combine more than two Villains in the same city space. Ignore any effect that would combine a third Villain in that space."
      ],
      [
        "Once two Villains are bonded, only fighting can break them up. Other Symbiote Bonds abilities can’t break up a Combined Villain to attach one of the cards to something else."
      ],
      [
        "If a Symbiote Bonds ability puts a new Villain card into the city from the Villain Deck, Escape Pile, Victory Pile, etc., do any Ambush ability on the newly entering card. However, that Ambush ability won’t be able to break up a Combined Villain or add a third card to it."
      ],
      [
        "If a special ability automatically “defeats” a Combined Villain, you still put just one of its cards into your Victory Pile and do that card’s Fight effect."
      ],
      [
        "A combined Villain has the VP of both its cards combined. So you can spend Piercing Energy (from Legendary ®: X-Men) equal to both cards’ total combined VP to fight the Combined Villain, putting one of its cards into your Victory Pile as normal."
      ]
    ]
  }
];