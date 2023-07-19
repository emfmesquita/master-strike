import { RuleDescription } from "../definitions/ruleTypes";

export interface RuleSearchResult {
  /**
   * Card name.
   */
  name: string;

  imageUrl: string;

  details: RuleDescription;
}