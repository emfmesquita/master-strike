import { Description } from "../definitions/descriptionTypes";

export enum CardType {
  Hero = 'Hero',
  Mastermind = 'Mastermind',
  MastermindTactic = 'Mastermind Tactic',
  Villain = 'Villain',
  Henchmen = 'Henchmen',
  Scheme = 'Scheme',
  Bystander = 'Bystander',
  Sidekick = 'Sidekick',
  Officer = 'Officer',
  Wound = 'Wound',
  General = 'General',
  Ambition = 'Ambition',
  Horror = 'Horror',
  Token = 'Token',
}

export enum CardDetailsType {
  HeroCardDetails = 'HeroCardDetails',
  DividedHeroCardDetails = 'DividedHeroCardDetails',
  MastermindCardDetails = 'MastermindCardDetails',
  VillainCardDetails = 'VillainCardDetails',
  HenchmanCardDetails = 'HenchmanCardDetails',
  SchemeCardDetail = 'SchemeCardDetail',
  OopHeroDetails = 'OopHeroDetails',
  OopVillainDetails = 'OopVillainDetails',
  OopMastermindDetails = 'OopMastermindDetails',
}

export interface CardSearchResult {

  /**
   * Card name.
   */
  name: string;

  /**
   * Card Subtitle.
   */
  subtitle: string;

  type: CardType;

  /**
   * Expansion/Set the card comes from.
   */
  set: string;

  /**
   * Group that the card is part of. Can be a Hero, Villain group, Mastermind...
   */
  group?: string;

  imageUrl: string;

  details: CardDetails;
}

export type CardDetails = HeroCardDetails | DividedHeroCardDetails | MastermindCardDetails | VillainCardDetails | HenchmanCardDetails | SchemeCardDetails | OopHeroDetails | OopVillainDetails | OopMastermindDetails;

export interface BaseCardDetails {
  detailsType: CardDetailsType;
  description: Description;
}

export interface HeroCardDetails extends BaseCardDetails {
  /**
   * Hero Class.
   */
  hc: number;

  /**
   * Second Hero Class.
   */
  hc2?: number;

  /**
   * Number of the same card in the Group.
   */
  qtd: number;

  /**
   * Card cost to buy.
   */
  cost: string;

  /**
   * Attack Value.
   */
  attack?: string;

  /**
   * Recruit Value.
   */
  recruit?: string;

  /**
   * Piercing Value.
   */
  piercing?: string;

  /**
   * Card team id.
   */
  team: number;

  /**
   * True if it is the transformed version of the card.
   */
  transformed?: boolean;
}

export interface DividedHeroCardDetails extends BaseCardDetails {
  half1: HeroCardDetails;
  half2: HeroCardDetails;
}

export interface MastermindCardDetails extends BaseCardDetails {
  /**
   * Villain attack value.
   */
  vAttack: string;

  /**
   * If it is a mastermind tactic.
   */
  tactic?: boolean;

  /**
   * If it is the epic version of a mastermind.
   */
  epic?: boolean;

  /**
   * Victory Points.
   */
  vp: string;
}

export interface VillainCardDetails extends BaseCardDetails {
    /**
   * Number of the same card in the Group.
   */
  qtd: number;

  /**
   * Villain attack value.
   */
  vAttack: string;

  /**
   * Victory Points.
   */
  vp: string;
}

export interface HenchmanCardDetails extends BaseCardDetails {
  /**
   * Villain attack value.
   */
  vAttack: string;

  /**
   * Victory Points.
   */
  vp: string;
}

export interface SchemeCardDetails extends BaseCardDetails {
  /**
   * True if it is the transformed version of the card.
   */
  transformed?: boolean;

  /**
   * True if it is the veiled version of the card.
   */
  veiled?: boolean;

  /**
   * True if it is the unveiled version of the card.
   */
  unveiled?: boolean;
}

/**
 * Hero-like cards on other decks.
 */
export interface OopHeroDetails extends HeroCardDetails {
  /**
   * If it is a mastermind tactic.
   */
  tactic?: boolean;
}

/**
 * Villain-like cards on other decks.
 */
export interface OopVillainDetails extends VillainCardDetails {
  /**
   * If it is a mastermind tactic.
   */
  tactic?: boolean;
}

/**
 * Mastermind-like cards on other decks.
 */
export interface OopMastermindDetails extends MastermindCardDetails {}
