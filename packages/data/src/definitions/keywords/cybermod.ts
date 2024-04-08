import { KeywordDefinition } from "../ruleTypes";

export const cybermod: KeywordDefinition = [
  {
    header: "Cyber-Mods for Heroes",
  },
  [
    "In 2099, weak organic flesh is quickly becoming obsolete. Desperate Heroes work with underground hacker-docs to augment their bodies with cybernetic enhancements, unleashing raw power. This is represented by the new Cyber-Mod keyword. Some Heroes say things like “",
    { bold: "Cyber-Mod" },
    { hc: 5 },
    ": Draw a card.”"
  ],
  {
    points: [
      [
        { bold: "You may use a Cyber-Mod ability only if you have a card of the listed Hero Class in your Victory Pile." }
      ],
      [
        "Likewise, you can use “",
        { bold: "Cyber-Mod" },
        { hc: 3 },
        { hc: 3 },
        { hc: 3 },
        ": You get ",
        { bold: "+2" },
        { icon: 1 },
        "” only if you have at least 3 ",
        { hc: 3 },
        " cards in your Victory Pile."
      ],
      [
        "The Heroes that use Cyber-Mods have ways to send cards Undercover. This can help you put the right cards into your Victory Pile to activate your Cyber-Mods."
      ],
      [
        "The cyber-tech that infused Hulk 2099 with gamma rays lets him push his pain under the surface, channeling it into ever more strength and rage. Accordingly, Hulk 2099 can send Wounds Undercover and use “Cyber-Mod Wound” abilities in the same way."
      ]
    ]
  },
  {
    header: "Cyber-Mods for Enemies",
  },
  [
    "The corporations, bounty hunters, and enforcers of 2099 also enhance their abilities with deadly cybernetic tech, often scavenged from captured victims. Some enemies say things like “",
    { bold: "Cyber-Mod" },
    { hc: 1 },
    { hc: 1 },
    { hc: 1 },
    ": This gets ",
    { bold: "+3" },
    { icon: 1 },
    ".”"
  ],
  {
    points: [
      [
        { bold: "Villains and Masterminds use their Cyber-Mod abilities only while there are cards of the listed Hero Classes in the Escape Pile." }
      ],
      [
        "Likewise, if a Villain says “",
        { bold: "Fight — Cyber-Mod" },
        { hc: 5 },
        ": KO one of your Heroes”, use that ability only if there is a ",
        { hc: 5 },
        " card in the Escape Pile."
      ],
      [
        "If a Villain escapes the city with a captured Hero, that Hero card stays in the Escape Pile and can help activate all enemies’ Cyber-Mods."
      ],
      [
        "Cyber-Mod Enemies also have ways to put Hero cards directly into the Escape Pile, helping activate Cyber-Mods."
      ]
    ]
  }
];