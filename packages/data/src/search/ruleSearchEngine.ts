import { Document } from 'flexsearch';
import { processRules } from './processors';
import { RuleSearchResult } from './ruleSearchTypes';

export const CACHE: RuleSearchResult[] = [];

const startRuleEngine = (engine: Document<RuleSearchResult, true>) => {
  let rulesAdded = 0;
  processRules((rule: RuleSearchResult) => {
    engine.add(rulesAdded, rule);
    CACHE.push(rule);
    rulesAdded++;
  });
  return rulesAdded;
}

/**
 * Search engine for rules. Has a default query limit of 10.
 */
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

  /**
   * @returns An array with all rules indexed.
   */
  public getAllRules() {
    return Object.freeze(CACHE);
  }
}