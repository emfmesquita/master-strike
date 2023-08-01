import { Description } from "../definitions/descriptionTypes";

/**
 * Enum of all possible card types.
 */
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

/**
 * Enum that identifies the type of description of a card. Usefull to undertant which type of card it is.
 */
export enum CardDetailsType {
  /**
   * Details of a hero card.
   */
  HeroCardDetails = 'HeroCardDetails',
  /**
   * Details of a hero divided hero card.
   */
  DividedHeroCardDetails = 'DividedHeroCardDetails',
  /**
   * Details of a mastermind card.
   */
  MastermindCardDetails = 'MastermindCardDetails',
  /**
   * Details of a villain card.
   */
  VillainCardDetails = 'VillainCardDetails',
  /**
   * Details of a henchman card.
   */
  HenchmanCardDetails = 'HenchmanCardDetails',
  /**
   * Details of a scheme card.
   */
  SchemeCardDetail = 'SchemeCardDetail',
  /**
   * Details of a bystander card.
   */
  BystanderCardDetail = 'BystanderCardDetail',
  /**
   * Details of an out of place hero card (a villain, mastermind tactic, henchman, ... that can be earned as a hero).
   */
  OopHeroDetails = 'OopHeroDetails',
  /**
   * Details of an out of place villain card (a mastermind tactic that can be become a villain).
   */
  OopVillainDetails = 'OopVillainDetails',
  /**
   * Details of an out of place mastermind card (Chthon!).
   */
  OopMastermindDetails = 'OopMastermindDetails',
}

/**
 * Result entry of a card search.
 */
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
  group: string;

  imageUrl: string;

  details: CardDetails;
}

/**
 * Options to instanciate a card search engine.
 */
export interface SearchEngineOptions {
  /**
   * The max number of results per query.
   * Default: 10
   */
  limit: number;

  /**
   * If the card subtitle should be considered in the queries.
   * Default: true
   */
  subtitle: boolean;

  /**
   * If the card type should be considered in the queries.
   * Default: false
   */
  type: boolean;

  /**
   * If the card set should be considered in the queries.
   * Default: false
   */
  set: boolean;

  /**
   * If the card group should be considered in the queries.
   * Default: false
   */
  group: boolean;
}

/**
 * Details of a card (hero abilities, scheme description, ...).
 */
export type CardDetails = HeroCardDetails | DividedHeroCardDetails | MastermindCardDetails | VillainCardDetails | HenchmanCardDetails | SchemeCardDetails | OopHeroDetails | OopVillainDetails | OopMastermindDetails;


export interface BaseCardDetails {
  detailsType: CardDetailsType;
  description: Description;
}

/**
 * Details of a hero card.
 */
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

/**
 * Details of a hero divided hero card.
 */
export interface DividedHeroCardDetails extends BaseCardDetails {
  half1: HeroCardDetails;
  nameHalf1: string;
  half2: HeroCardDetails;
  nameHalf2: string;
}

/**
 * Details of a mastermind card.
 */
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

/**
 * Details of a villain card.
 */
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

/**
 * Details of a henchman card.
 */
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

/**
 * Details of a scheme card.
 */
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
 * Details of a bystander card.
 */
export interface BystanderCardDetails extends BaseCardDetails {
  /**
  * Number of the same card in the set.
  */
  qtd: number;

  /**
   * Victory Points.
   */
  vp: string;
}

/**
 * Details of an out of place hero card (a villain, mastermind tactic, henchman, ... that can be earned as a hero).
 */
export interface OopHeroDetails extends HeroCardDetails {
  /**
   * If it is a mastermind tactic.
   */
  tactic?: boolean;

  /**
   * If was originally a villain it might have a villain attack.
   */
  vAttack?: string;
}

/**
 * Details of an out of place villain card (a mastermind tactic that can be become a villain).
 */
export interface OopVillainDetails extends VillainCardDetails {
  /**
   * If it is a mastermind tactic.
   */
  tactic?: boolean;
}

/**
 * Details of an out of place mastermind card (Chthon!).
 */
export interface OopMastermindDetails extends MastermindCardDetails {}


/**
 * Card browser by card type and set and group.
 */
export type ByCardTypeAndSetAndGroup = {[key: string]: CardSearchResult[]};

/**
 * Card broser by card type and set.
 */
export type ByCardTypeAndSet = {[key: string]: ByCardTypeAndSetAndGroup};

/**
 * Card browser by card type.
 */
export type ByCardType = {[key in CardType]?: ByCardTypeAndSet};
