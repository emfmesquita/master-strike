import { Document, IndexOptionsForDocumentSearch } from 'flexsearch';
import { SetDefinitions } from '../definitions';
import { CardSearchResult } from './cardSearchTypes';
import { processRules, processSet } from './processors';
import { RuleSearchResult } from './ruleSearchTypes';


const startRuleEngine = (engine: Document<RuleSearchResult, true>) => {
  let rulesAdded = 0;
  processRules((rule: RuleSearchResult) => {
    engine.add(rulesAdded, rule);
    rulesAdded++;
  });
  return rulesAdded;
}

export class RuleSearchEngine {
  private engine: Document<RuleSearchResult, true>;
  private rulesCount: number;
  private startupDuration: number;
  constructor() {
    const startTime = Date.now();
    this.engine = new Document<RuleSearchResult, true>({
      preset: 'match',
      tokenize: 'full',
      charset: 'latin:default',
      matcher: {
        '-': '',
        'é': 'e',
        '\'': '',
        '\\.': '',
      },
      document: {
        id: 'id',
        index: ['name'],
        store: true,
      },
    });
    this.rulesCount = startRuleEngine(this.engine);
    this.startupDuration = Date.now() - startTime;
  }

  /**
 * Makes a search.
 * @param query The query string to search.
 * @returns A promise with the results of the search.
 */
  public async search(query: string): Promise<RuleSearchResult[]> {
    query = (query || '').trim();
    if (!query) return [];

    const result = await this.engine.searchAsync(query, {
      limit: 10,
      enrich: true,
    });

    return (result.length ? result[0].result : []).map(r => r.doc);
  }

  /**
   * @returns The total ammount of rules in the search engine.
   */
  public getRulesCount() {
    return this.rulesCount;
  }

  /**
   * @returns The startup duration in millis.
   */
  public getStartupDuration() {
    return this.startupDuration;
  }
}