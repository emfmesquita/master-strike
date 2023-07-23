import { Document, Id, IndexOptionsForDocumentSearch } from "flexsearch";
import { ByCardType, ByCardTypeAndSet, ByCardTypeAndSetAndGroup, CardSearchResult, CardType, SearchEngineOptions } from "./cardSearchTypes";
import { SetDefinitions } from "../definitions";
import { processSet } from "./processors";

interface SearchEntry {
  id: number;
  strict: string;
  full: string;
}

const OPTIONS: IndexOptionsForDocumentSearch<SearchEntry, false> = {
  preset: 'match',
  charset: 'latin:default',
  tokenize: "strict",
  matcher: {
    '-': '',
    'é': 'e',
    '\'': '',
    '\\.': '',
  },
  document: {
    id: 'id',
    index: [
      {
        field: 'strict',
        matcher: 'simple',
        context: true,
      },
      {
        field: 'full',
        tokenize: 'full',
      },
    ],
  },
}

const CACHE: CardSearchResult[] = [];

/**
 * Card search engine.
 */
export class CardSearchEngine {
  private engine: Document<SearchEntry, false>;
  private cardCount: number;
  private startupDuration: number;
  private limit: number;
  private subtitle: boolean;
  private type: boolean;
  private set: boolean;
  private group: boolean;
  private byCardType: ByCardType;

  /**
   * @param opts Options of the card search engine.
   */
  constructor(opts?: SearchEngineOptions) {
    const startTime = Date.now();
    this.limit = opts?.limit && opts.limit > 0 ? opts.limit : 10;
    this.engine = new Document<SearchEntry, false>(OPTIONS);
    this.subtitle = opts?.subtitle || true;
    this.type = opts?.type || false;
    this.set = opts?.set || false;
    this.group = opts?.group || false;
    this.byCardType = {};


    this.cardCount = 0;
    const addCard = (card: CardSearchResult) => {
      CACHE.push(card);
      let entry = card.name;
      if(this.subtitle) entry += ` <|> ${card.subtitle}`;
      if(this.type) entry += ` <|> ${card.type}`;
      if(this.set) entry += ` <|> ${card.set}`;
      if(this.group) entry += ` <|> ${card.group}`;

      this.engine.add(this.cardCount, {
        id: this.cardCount,
        strict: entry,
        full: entry,
      });

      // browser
      const bySet = this.byCardType[card.type];
      let safeBySet: ByCardTypeAndSet = {};
      if(bySet) {
        safeBySet = bySet;
      } else {
        this.byCardType[card.type] = safeBySet;
      }

      if(!safeBySet[card.set]) safeBySet[card.set] = {};
      const byGroup = safeBySet[card.set];

      if(!byGroup[card.group]) byGroup[card.group] = [];
      byGroup[card.group].push(card);
      // browser

      this.cardCount++;
    }

    Object.values(SetDefinitions).forEach(set => processSet(addCard, set));

    // sort the set entries and group entries
    Object.keys(this.byCardType).forEach(type => {
      const cardType = type as CardType;
      const byset = this.byCardType[cardType]!;
      this.byCardType[cardType] = Object.keys(byset).sort().reduce(
        (sortedBySet, key) => { 
          sortedBySet[key] = byset[key]; 
          return sortedBySet;
        }, 
        {} as ByCardTypeAndSet
      );

      Object.keys(byset).forEach(set => {
        const byGroup = byset[set];
        this.byCardType[cardType]![set] = Object.keys(byGroup).sort().reduce(
          (sortedByGroup, key) => { 
            sortedByGroup[key] = byGroup[key]; 
            return sortedByGroup;
          }, 
          {} as ByCardTypeAndSetAndGroup
        );
      });
    });

    this.startupDuration = Date.now() - startTime;
  }

  /**
   * Makes a search.
   * @param query The query string to search.
   * @returns A promise with the results of the search.
   */
  public async search(query: string): Promise<CardSearchResult[]> {
    query = (query || '').trim();
    if (!query) return [];

    const queryResult = await this.engine.searchAsync({
      query: query,
      limit: this.limit,
      suggest: true,
    });

    const getFieldResults = (field: string) => queryResult.find(r => r.field === field)?.result || [];
    const appendIds = (newIds: Id[], ids: Id[]) => {
      newIds.forEach(id => {
        if(!ids.includes(id)) {
          ids.push(id);
        }
      });
    }

    const resultIds: Id[] = [];

    appendIds(getFieldResults('strict'), resultIds);
    appendIds(getFieldResults('full'), resultIds);

    return resultIds.filter((r, idx) => idx < this.limit).map(id =>CACHE[id as number]);
  }

  /**
   * @returns The total ammount of cards in the search engine.
   */
  public getCardCount() {
    return this.cardCount;
  }

  /**
   * @returns The startup duration in millis.
   */
  public getStartupDuration() {
    return this.startupDuration;
  }

  /**
   * @returns An array with all cards indexed.
   */
  public getAllCards() {
    return Object.freeze(CACHE);
  }

  /**
   * @returns The card browser (By Card type) -> (By Set) -> (By Group).
   */
  public getBrowser() {
    return this.byCardType;
  }
}
