import { KeywordDefinition } from "../ruleTypes";

export const weaponxsequence: KeywordDefinition = [
  [
    "The lethal success of the Weapon Plus program comes from their relentless iteration on the science of death. From Weapon XII to Weapon XIII to Weapon XV, each of their sequence of killers is more deadly than the last."
  ],
  {
    points: [
      [
        "On a Hero, “Weapon X Sequence” means ",
        { bold: "“you get +" },
        { icon: 1 },
        { bold: " equal to the longest sequence of different printed cost numbers on your cards.”" },
      ],
      [
        "“Your cards” includes both cards you’ve played this turn and cards in your hand, so you can count both."
      ],
      [
        "For example, say your cards have the costs 0,4,2,7,3,3. Then each time you played a card with the Weapon X Sequence ability, you would get ",
        { bold: "+3" },
        { icon: 1 },
        " , since your longest sequence of different cost numbers is 2-3-4."
      ],
      [
        "Each number in the sequence must be one higher than the previous number. Your sequence can start with any number, including 0. You can’t skip any number in the sequence. Having duplicates of the same cost doesn’t help. If your costs are 0,0,0,4,4,6, then your longest sequence is 1 and you would get ",
        { bold: "+1" },
        { icon: 1 },
        "."
      ],
      [
        "After you play a Weapon X Sequence card, if you draw more cards later in the turn that would have extended your sequence, it’s too late to go back and get more ",
        { icon: 1 },
        " from the Weapon X Sequence you already played."
      ],
      [
        "“Doubled Weapon X Sequence” means double the bonus."
      ],
      [
        "Build your deck carefully to get long sequences!"
      ],
    ]
  },
  [
    { header: "Enemies with Weapon X Sequence"},
  ],
  {
    points: [
      [
        "On Enemies, Weapon X Sequence means ",
        { bold: "“This Enemy gets +" },
        { icon: 1 },
        { bold: " equal to the longest sequence of different printed cost numbers among cards in the HQ.”" },
      ],
      [
        "For example, say the Heroes in the HQ have printed costs 4,7,5,3,2. Then Weapon X Sequence gives an Enemy ",
        { bold: "+4" },
        { icon: 1 },
        " (for the sequence 2-3-4-5)."
      ],
      [
        "It doesn’t matter which HQ spaces those cards are in or if any of them are physically in any particular order."
      ],
      [
        "One clever move is to recruit a Hero from the HQ at the right time, disrupting an Enemy’s Weapon X Sequence before you fight them. Take the above example where Heroes in the HQ have printed costs 4,7,5,3,2. If you recruit the 3-cost Hero and it gets replaced with a 5-cost Hero, you’ve reduced the Enemy’s Weapon X Sequence bonus from ",
        { bold: "+4" },
        { icon: 1 },
        " to ",
        { bold: "+2" },
        { icon: 1 },
        " ."
      ],
    ]
  },
];