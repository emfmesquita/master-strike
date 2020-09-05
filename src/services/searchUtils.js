import * as JsSearch from 'js-search'

import { getAllHeroes, processHeroText } from "./cardUtils"

export const buildHeroSearch = () => {
  const search = new JsSearch.Search("name");
  search.addIndex("name");
  search.addIndex("heroName");
  search.addIndex("abilitiesText");
  const heroes = getAllHeroes();
  let cards = [];
  heroes.forEach(hero => {
    processHeroText(hero);
    cards = cards.concat(hero.cards);
  });
  search.addDocuments(cards);
  return search;
}