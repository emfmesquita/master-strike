import { Metadata } from "../..";
import { KeywordDefinitions, RuleDefinitions } from "../../definitions";
import { RuleSearchResult } from "../ruleSearchTypes";

export const processRules = (addRule: (rule: RuleSearchResult) => void) => {
  Object.entries(KeywordDefinitions).forEach(entry => {
    const metadata = Metadata.keywordsArray.find(m => m.value === entry[0])!;
    addRule({
      name: metadata?.label,
      imageUrl: '',
      details: entry[1]
    });
  });

  Object.entries(RuleDefinitions).forEach(entry => {
    const metadata = Metadata.rulesArray.find(m => m.value === entry[0])!;
    addRule({
      name: metadata?.label,
      imageUrl: '',
      details: entry[1]
    });
  });
}