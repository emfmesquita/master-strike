import { 
  BystanderCardDef,
  HenchmanCardDef, 
  HenchmanDef, 
  HeroCardDef, 
  HeroDef, 
  MastermindCardDef, 
  MastermindDef, 
  OopHeroCardDef, 
  OopMastermindCardDef, 
  OopSchemeCardDef, 
  OopVillainCardDef, 
  SchemeCardDef, 
  VillainCardDef, 
  VillainDef 
} from "../definitions";

export const heroSubtitle = (card: HeroCardDef, hero: HeroDef) => {
  return card.subtitle || hero.name;
}

export const mastermindSubtitle = (card: MastermindCardDef | OopHeroCardDef | OopVillainCardDef, mm: MastermindDef, setId: number) => {
  let type = [6, 8].includes(setId) ? "Commander": "Mastermind";
  const mmName = mm.tacticName || mm.name;
  if(card.tactic) {
    type =  `${type} Tactic - ${mmName}`
  };
  const mmCard = card as MastermindCardDef;
  if(mmCard.epic) return `Epic ${type}`;
  if(mmCard.transformed) return `${type}, Transformed`;
  return type;
}

export const henchmanSubtitle = (card: HenchmanCardDef | OopHeroCardDef, henchman: HenchmanDef, setId: number) => {
  if(henchman.subtitle) return henchman.subtitle;
  const cardSubtitle = (card as OopHeroCardDef).subtitle;
  if(cardSubtitle) return cardSubtitle;
  if(setId === 6) return "Backup Adversary";
  return "Henchman Villain";
}

export const villainSubtitle = (card: VillainCardDef | OopHeroCardDef | OopSchemeCardDef, villain: VillainDef, setId: number) => {
  if(villain.subtitle) return villain.subtitle;

  const cardSubtitle = (card as OopHeroCardDef).subtitle;
  if(cardSubtitle) return cardSubtitle;

  const isAmbus = (card as OopSchemeCardDef).ambush;
  if(!!isAmbus) {
    return `Ambush Scheme - ${villain.name}`;
  }

  const subType = (card as VillainCardDef).subType;
  if(subType === 1) return `Trap - ${villain.name}`;
  if(subType === 2) return `Location - ${villain.name}`;
  if(subType === 3) return `Villainous Weapon - ${villain.name}`;
  if([6, 8].includes(setId)) return `Adversary - ${villain.name}`;
  return `Villain - ${villain.name}`;
}

export const schemeSubtitle = (card: SchemeCardDef | OopMastermindCardDef, setId: number) => {
  if([6, 8].includes(setId)) return "Plot";
  const mmCard = card as OopMastermindCardDef;
  if(mmCard && mmCard.overrideType === 2 && mmCard.transformed) return "Mastermind, Transformed";
  const schemeCard = card as SchemeCardDef;
  if(schemeCard.transformed) return "Scheme, Transformed";
  if(schemeCard.veiled) return "Veiled Scheme";
  if(schemeCard.unveiled) return "Unveiled Scheme";
  return "Scheme";
}

export const bystanderSubtitle = (card: BystanderCardDef | OopHeroCardDef) => {
  const cardSubtitle = (card as OopHeroCardDef).subtitle;
  if(cardSubtitle) return cardSubtitle;
  return "Bystander";
}