import { Description } from "./descriptionTypes";

export interface BasicCardDef {
  imageUrl?: string;
  abilities: Description;
}

export interface CardDef extends BasicCardDef {
  name: string;
}

export interface HeroCardDef extends CardDef {
  subtitle?: string;
  hc: number;
  hc2?: number;
  rarity?: number;
  qtd?: number;
  cost: number;
  costAsterisk?: boolean;
  attack?: string;
  recruit?: string;
  piercing?: string;
  team?: number;
  divided?: 1 | 2;
  transformed?: boolean;
}

export interface MastermindCardDef extends CardDef {
  vAttackAsterisk?: boolean;
  vAttackHideValue?: boolean;
  vAttack?: string;
  vp?: string | number;
  tactic?: boolean;
  epic?: boolean;
  transformed?: boolean;
}

export interface VillainCardDef extends CardDef {
  qtd: number;
  vAttack?: string;
  vp?: string | number;
  vAttackAsterisk?: boolean;
  subType?: number;
}

export interface HenchmanCardDef extends BasicCardDef {
  name?: string;
  vAttackAsterisk?: boolean;
  subType?: number;
}

export interface SchemeCardDef extends BasicCardDef {
  name?: string;
  transformed?: boolean;
  veiled?: boolean;
  unveiled?: boolean;
}

export interface BystanderCardDef extends BasicCardDef {
  qtd: number;
}

export interface OopHeroCardDef extends HeroCardDef {
  overrideType?: 1;
  tactic?: boolean;
  vp?: -1;
  vAttack?: string;
  vAttackAsterisk?: boolean;
}

export interface OopVillainCardDef extends VillainCardDef {
  overrideType: 4;
  overrideSubType?: number;
  tactic?: boolean;
}

export interface OopMastermindCardDef extends MastermindCardDef {
  overrideType: 2;
  vp?: number;
  subtitle: string;
}

export interface OopSchemeCardDef extends SchemeCardDef {
  overrideType?: 5;
  ambush?: boolean;
  qtd: number;
  vp?: string | number;
}

export interface HeroDef {
  id: number;
  name: string;
  set?: number | number[];
  team: number;
  cards: HeroCardDef[];
  filterName?: string;
}

export interface MastermindDef {
  id: number;
  name: string;
  set?: number | number[];
  vAttack?: string;
  vp?: number;
  tacticName?: string;
  cards: (MastermindCardDef | OopHeroCardDef | OopVillainCardDef)[];
  filterName?: string;
}

export interface HenchmanDef {
  id: number;
  name: string;
  imageUrl?: string;
  subtitle?: string;
  set?: number | number[];
  vAttack: string;
  vp: number;
  cards: (HenchmanCardDef | OopHeroCardDef)[];
}

export interface VillainDef {
  id: number;
  subtitle?: string;
  name: string;
  cards: (VillainCardDef | OopHeroCardDef | OopSchemeCardDef)[];
  filterName?: string;
}

export interface SchemeDef {
  id: number;
  name: string;
  imageUrl?: string;
  sortName?: string;
  set?: number | number[];
  cards: (SchemeCardDef | OopMastermindCardDef)[];
}

export interface BystanderDef {
  id: number;
  name: string;
  set?: number | number[];
  imageUrl?: string;
  vp?: string | number;
  cards: (BystanderCardDef | OopHeroCardDef)[];
}

export interface CardSetDef {
  id: number;
  heroes?: HeroDef[];
  masterminds?: MastermindDef[];
  henchmen?: HenchmanDef[];
  villains?: VillainDef[];
  schemes?: SchemeDef[];
  bystanders?: BystanderDef[];
}