import * as JsSearch from 'js-search'

import { cardSubTypes, cardTypes } from "../constants/cardTypes";
import { getAllHenchmen, getAllHeroes, getAllMasterminds } from "./cardUtils"

import { rules as R } from "../constants/rules"

const SEARCH_CACHE = {};
const SEARCH_INDEXES = [
  "name",
  "subTitle",
  "attackText",
  "recruitText",
  "piercingText",
  "costText",
  "vAttackText",
  "vpText",
  "abilitiesText",
];

export const groupSearchSetup = groups => {
  groups.forEach(group => {
    group.filteredCards = (group.cards || []).map(card => {
      card.disabled = false;
      return card;
    });
  });
}

export const filterById = (items, ids) => {
  if(!ids || !ids.length) return items;
  return items.filter(item => ids.includes(item.id));
}

export const filterBySet = (items, sets) => {
  if(!sets || !sets.length) return items;

  const fromSet = a => sets.includes(a);
  const setCheck = item => {
    return Array.isArray(item.set) ? item.set.some(fromSet) : fromSet(item.set);
  }
  return items.filter(setCheck);
}

export const filterGroupByKeyword = (groups, keywords) => {
  if(!keywords || !keywords.length) return groups;
  return groups.filter(group => {
    let match = false;
    group.filteredCards.forEach(card => {
      if(card.disabled || !card.abilities) return;
      const abs = card.abilities;
      const hasKey = ab => keywords.includes(ab.keyword);
      const matchKey = abs.some(ab => Array.isArray(ab) ? ab.some(hasKey) : hasKey(ab));
      if(matchKey) match = true;
      card.disabled = !matchKey;
    });
    return match;
  });
}

export const filterGroupByRule = (groups, rules) => {
  if(!rules || !rules.length) return groups;
  return groups.filter(group => {
    let match = false;
    group.filteredCards.forEach(card => {
      if(card.disabled || !card.abilities) return;

      // checks for multiclass
      if(card.hc2 && rules.includes(R.MULTICLASS_CARDS.id)) {
        match = true;
        return;
      }

      // checks for divided
      if(card.divided && rules.includes(R.DIVIDED.id)) {
        match = true;
        return;
      }

      // check for asterisk
      if((card.costAsterisk || card.vAttackAsterisk) && rules.includes(R.ASTERISK.id)) {
        match = true;
        return;
      }

      // check for trap
      if(card.subType === cardSubTypes.TRAP.id && rules.includes(R.TRAPS.id)) {
        match = true;
        return;
      }

      // check for location
      if(card.subType === cardSubTypes.LOCATION.id && rules.includes(R.LOCATIONS.id)) {
        match = true;
        return;
      }

      // check for villainous weapon
      if(card.subType === cardSubTypes.VILLAINOUS_WEAPON.id && rules.includes(R.VILLAINOUS_WEAPONS.id)) {
        match = true;
        return;
      }

      // checks other rules
      const abs = card.abilities;
      const hasRule = ab => rules.includes(ab.rule);
      const matchRule = abs.some(ab => Array.isArray(ab) ? ab.some(hasRule) : hasRule(ab));
      if(matchRule) match = true;
      card.disabled = !matchRule;
    });
    return match;
  });
}

export const filterGroupByMinMax = (groups, cardProp, minMaxArray) => {
  return groups.filter(group => {
    let match = false;
    group.filteredCards.forEach(card => {
      if(card.disabled) return;
      const valueMatch = card[cardProp] >= minMaxArray[0] && card[cardProp] <= minMaxArray[1];
      if(valueMatch) match = true;
      card.disabled = !valueMatch;
    });
    return match;
  });
}

export const filterGroupByHeroClass = (groups, hcs) => {
  if(!hcs || !hcs.length) return groups;
  return groups.filter(group => {
    let match = false;
    group.filteredCards.forEach(card => {
      if(card.disabled) return;
      const matchHC = hcs.includes(card.hc) || hcs.includes(card.hc2);
      if(matchHC) match = true;
      card.disabled = !matchHC;
    });
    return match;
  });
}

export const filterGroupByCardProp = (groups, propName, valuesArray) => {
  if(!valuesArray || !valuesArray.length || !propName) return groups;
  return groups.filter(group => {
    let match = false;
    group.filteredCards.forEach(card => {
      if(card.disabled) return;
      const hasValue = valuesArray.includes(card[propName]);
      if(hasValue) match = true;
      card.disabled = !hasValue;
    });
    return match;
  });
}

const buildGroupSearch = groups => {
  const search = new JsSearch.Search("uid");
  SEARCH_INDEXES.forEach(index => search.addIndex(index));
  let cards = [];
  groups.forEach(group => {
    cards = cards.concat(group.cards);
  });
  search.addDocuments(cards);
  return search;
}

const buildCardSearch = cardType => {
  if(cardTypes.HERO.id === cardType) return buildGroupSearch(getAllHeroes());
  if(cardTypes.MASTERMIND.id === cardType) return buildGroupSearch(getAllMasterminds());
  if(cardTypes.HENCHMEN.id === cardType) return buildGroupSearch(getAllHenchmen());
  return null;
}

const getCardSearch = cardType => {
  if(!SEARCH_CACHE[cardType]) {
    SEARCH_CACHE[cardType] = buildCardSearch(cardType);
  }
  return SEARCH_CACHE[cardType];
}

export const filterGroupBySearch = (groups, cardType, search) => {
  if(!search) return groups;

  const cardsFound = getCardSearch(cardType).search(search);
  return groups.filter(group => {
    const groupCardsFound = cardsFound.filter(card => card.groupId === group.id);
    let match = false;
    group.filteredCards.forEach(card => {
      if(card.disabled) return;
      const found = groupCardsFound.some(cardFound => cardFound.name === card.name);
      if(found) match = true;
      card.disabled = !found;
    });
    return match;
  });
}