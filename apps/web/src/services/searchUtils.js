import * as JsSearch from 'js-search'

import { getAllBystanders, getAllHenchmen, getAllHeroes, getAllMasterminds, getAllSchemes, getAllVillains } from "./cardUtils"

import { Metadata } from "@master-strike/data";

const SEARCH_CACHE = {};
const SEARCH_INDEXES = [
  "name",
  "subtitle",
  "attackText",
  "recruitText",
  "piercingText",
  "costText",
  "vAttackText",
  "vpText",
  "abilitiesText",
];

const K = Metadata.keywords;
const R = Metadata.rules;

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

export const filterGroupByKeyword = (groups, keywords, rules) => {
  // work around for villaneous weapons
  if(rules && rules.indexOf(R.VILLAINOUS_WEAPONS.id) >= 0) {
    keywords = [K.VILLAINOUS_WEAPONS.id].concat(keywords || []);
  }

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

      // filter by none
      if(keywords.includes(-1)) {
        const checkNoKeyword = ab => !ab.keyword;
        const noKeyword = abs.every(ab => Array.isArray(ab) ? ab.every(checkNoKeyword) : checkNoKeyword(ab));
        if(noKeyword) match = true;
        card.disabled = !matchKey && !noKeyword;
      }
    });
    return match;
  });
}

export const filterGroupByRule = (groups, rules) => {
  if(!rules || !rules.length) return groups;

  // work around for villaneous weapons
  // removes vw id from the filter - the filder by vw is done on keywords
  const vwIdx = rules.indexOf(R.VILLAINOUS_WEAPONS.id);
  if(vwIdx >= 0) {
    rules = [].concat(rules);
    rules.splice(vwIdx, 1);
  }

  if(!rules || !rules.length) return groups;
  return groups.filter(group => {
    let match = false;
    group.filteredCards.forEach(card => {
      if(card.disabled || !card.abilities) return;

      // checks for multiclass
      const isMulticlass = card.hc2;
      if(isMulticlass && rules.includes(R.MULTICLASS_CARDS.id)) {
        match = true;
        return;
      }

      // checks for divided
      const isDivided = card.divided;
      if(isDivided && rules.includes(R.DIVIDED.id)) {
        match = true;
        return;
      }

      // check for asterisk
      const hasAsterisk = (card.costAsterisk || card.vAttackAsterisk);
      if(hasAsterisk && rules.includes(R.ASTERISK.id)) {
        match = true;
        return;
      }

      // check for trap
      const isTrap = card.subType === Metadata.cardSubTypes.TRAP.id;
      if(isTrap && rules.includes(R.TRAPS.id)) {
        match = true;
        return;
      }

      // check for location
      const isLocation = card.subType === Metadata.cardSubTypes.LOCATION.id;
      if(isLocation && rules.includes(R.LOCATIONS.id)) {
        match = true;
        return;
      }

      // check for transforming schemes
      const isTransfScheme = card.type === Metadata.cardTypes.SCHEME.id && group.set === 24;
      if(isTransfScheme && rules.includes(R.TRANSFORMING_SCHEMES.id)) {
        match = true;
        return;
      }

      // check for veiled schemes
      const isVeiledScheme = card.type === Metadata.cardTypes.SCHEME.id && card.veiled;
      if(isVeiledScheme && rules.includes(R.VEILED_SCHEMES.id)) {
        match = true;
        return;
      }

      // check for unveiled schemes
      const isUnvailedScheme = card.type === Metadata.cardTypes.SCHEME.id && card.unveiled;
      if(isUnvailedScheme && rules.includes(R.UNVEILED_SCHEMES.id)) {
        match = true;
        return;
      }

      // checks other rules
      const abs = card.abilities;
      const hasRule = ab => rules.includes(ab.rule);
      const matchRule = abs.some(ab => Array.isArray(ab) ? ab.some(hasRule) : hasRule(ab));
      if(matchRule) match = true;
      card.disabled = !matchRule;

      // filter by none
      if(rules.includes(-1)) {
        const noSpecialRules = !isMulticlass && !isDivided && !hasAsterisk && !isTrap && !isLocation && !isTransfScheme;
        if(noSpecialRules) {
          // checks if does not have rules on abilities
          const checkNoRule = ab => !ab.rule;
          const noRulesOnAbilites = abs.every(ab => Array.isArray(ab) ? ab.every(checkNoRule) : checkNoRule(ab));
          if(noRulesOnAbilites) match = true;
          card.disabled = !matchRule && !noRulesOnAbilites;
        }
      }
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
  if(Metadata.cardTypes.HERO.id === cardType) return buildGroupSearch(getAllHeroes());
  if(Metadata.cardTypes.MASTERMIND.id === cardType) return buildGroupSearch(getAllMasterminds());
  if(Metadata.cardTypes.HENCHMEN.id === cardType) return buildGroupSearch(getAllHenchmen());
  if(Metadata.cardTypes.VILLAIN.id === cardType) return buildGroupSearch(getAllVillains());
  if(Metadata.cardTypes.SCHEME.id === cardType) return buildGroupSearch(getAllSchemes());
  if(Metadata.cardTypes.BYSTANDER.id === cardType) return buildGroupSearch(getAllBystanders());
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