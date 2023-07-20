import { Document, Id, IndexOptionsForDocumentSearch } from "flexsearch";
import { CardSearchResult } from "./cardSearchTypes";
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

const CACHE: CardSearchResult[] = [];;;

interface CardRow {
  set: string;
  type: string;
  group?: string;
  name: string;
  subTitle: string;
}

export const rows: CardRow[] = [];

export class CardSearchEngine {
  private engine: Document<SearchEntry, false>;
  private cardCount: number;
  private startupDuration: number;
  private limit: number;
  private subtitle: boolean;
  private type: boolean;
  private set: boolean;
  private group: boolean;

  constructor(limit = 10, subtitle = false, type = false, set = false, group = false) {
    const startTime = Date.now();
    this.limit = limit < 1 ? 1 : limit;
    this.engine = new Document<SearchEntry, false>(OPTIONS);
    this.subtitle = subtitle;
    this.type = type;
    this.set = set;
    this.group = group;


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
      // rows.push({
      //   set: card.set,
      //   type: card.type,
      //   group: card.group,
      //   name: card.name,
      //   subTitle: card.subtitle,
      // });
      this.cardCount++;
    }

    Object.values(SetDefinitions).forEach(set => processSet(addCard, set));
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
}
