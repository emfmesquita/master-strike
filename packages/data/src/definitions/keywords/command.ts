import { KeywordDefinition } from "../ruleTypes";

export const command: KeywordDefinition = [
  [
    "Some Villains say things like “Taserface gets ",
    { bold: "+2" },
    { icon: 1 },
    " while he Commands the Ravagers.”"
  ],
  {
    points: [
      [{ bold: "A Villain “Commands” their group and gets these abilities as long as it’s the leftmost Villain of that Villain Group in the city."}],
      ["If there’s only one Villain of a Villain Group in the city, it still Commands that Villain Group."],
    ]
  }
];