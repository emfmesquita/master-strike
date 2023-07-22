import { Metadata } from "../..";
import { KeywordDefinitions, RuleDefinitions } from "../../definitions";
import { RuleSearchResult, RuleType } from "../ruleSearchTypes";

export const processRules = (addRule: (rule: RuleSearchResult) => void) => {
  Object.entries(KeywordDefinitions).forEach(entry => {
    const metadata = Metadata.keywordsArray.find(m => m.value === entry[0])!;
    addRule({
      name: metadata?.label,
      imageUrl: '',
      type: RuleType.Keyword,
      details: entry[1]
    });
  });

  Object.entries(RuleDefinitions).forEach(entry => {
    const metadata = Metadata.rulesArray.find(m => m.value === entry[0])!;
    if(['villainousweapons', 'unveiledschemes'].includes(metadata.value)) return;
    const name = metadata.value === 'veiledschemes' ? 'Veiled and Unveiled Schemes' : metadata?.label;
    addRule({
      name: name,
      imageUrl: '',
      type: RuleType.ExtraRule,
      details: entry[1]
    });
  });
}