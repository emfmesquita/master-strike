export interface Card {
  name: string;
  abilities: unknown[]; // TODO
}

export interface HeroCard extends Card {
  subTitle?: string;
  hc: number;
  hc2?: number;
  rarity?: number;
  qtd?: number;
  cost?: number;
  costAsterisk?: boolean;
  attack?: string;
  recruit?: string;
  piercing?: string;
  team?: number;
  divided?: 1 | 2;
  transformed?: boolean;
}

export interface MastermindCard extends Card {
  vAttackAsterisk?: boolean;
  vAttackHideValue?: boolean;
  vAttack?: string;
  tactic?: boolean;
  epic?: boolean;
}

export interface VillainCard extends Card {
  qtd: number;
  vAttack?: string;
  vp?: string | number;
  vAttackAsterisk?: boolean;
  subType?: number;
}

export interface HenchmanCard {
  name?: string;
  vAttackAsterisk?: boolean;
  abilities: unknown[];
  subType?: number;
}

export interface SchemeCard {
  name?: string;
  transformed?: boolean;
  abilities: unknown[];
  veiled?: boolean;
  unveiled?: boolean;
}

export interface OutOfPlaceHeroCard extends HeroCard {
  overrideType?: 1;
  tactic?: boolean;
  vp?: -1;
}

export interface OutOfPlaceVillainCard extends VillainCard {
  overrideType: 4;
  overrideSubType?: number;
  tactic?: boolean;
}

export interface OutOfPlaceMastermindCard extends MastermindCard {
  overrideType: 2;
  vp?: number;
  subTitle: string;
}

export interface Hero {
  id: number;
  name: string;
  set?: number | number[];
  team: number;
  cards: HeroCard[];
  filterName?: string;
}

export interface Mastermind {
  id: number;
  name: string;
  set?: number | number[];
  vAttack?: string;
  vp?: number;
  tacticName?: string;
  cards: (MastermindCard | OutOfPlaceHeroCard | OutOfPlaceVillainCard)[];
  filterName?: string;
}

export interface Henchman {
  id: number;
  name: string;
  subTitle?: string;
  set?: number | number[];
  vAttack: string;
  vp: number;
  cards: (HenchmanCard | OutOfPlaceHeroCard)[];
}

export interface Villain {
  id: number;
  subTitle?: string;
  name: string;
  cards: (VillainCard | OutOfPlaceHeroCard)[];
  filterName?: string;
}

export interface Scheme {
  id: number;
  name: string;
  sortName?: string;
  set?: number | number[];
  cards: (SchemeCard | OutOfPlaceMastermindCard)[];
}

export interface CardSet {
  id: number;
  heroes?: Hero[];
  masterminds?: Mastermind[];
  henchmen?: Henchman[];
  villains?: Villain[];
  schemes?: Scheme[];
}