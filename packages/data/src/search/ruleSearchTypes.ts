import { RuleDescription } from "../definitions/ruleTypes";

export enum RuleType {
  Keyword = 'Keyword',
  ExtraRule = 'Extra Rule',
  FAQ = 'FAQ',
  Errata = 'Errata',
}

export interface RuleSearchResult {
  /**
   * Card name.
   */
  name: string;

  imageUrl: string;

  type: RuleType;

  details: RuleDescription;
}