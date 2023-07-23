import { RuleDescription } from "../definitions/ruleTypes";

/**
 * Types of rules.
 */
export enum RuleType {
  Keyword = 'Keyword',
  ExtraRule = 'Extra Rule',
  FAQ = 'FAQ',
  Errata = 'Errata',
}

/**
 * Result item of a rule search.
 */
export interface RuleSearchResult {
  /**
   * Rule name.
   */
  name: string;

  /**
   * Rule image URL.
   */
  imageUrl: string;

  /**
   * Rule type.
   */
  type: RuleType;

  /**
   * Rule description.
   */
  details: RuleDescription;
}