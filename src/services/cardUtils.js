import { cardSubTypes, cardTypes } from "../constants/cardTypes"

import { heroClassArray } from "../constants/heroClass"
import { iconArray } from "../constants/icon"
import { keywordsArray } from "../constants/keywords"
import { rulesArray } from "../constants/rules"
import { cards as sets } from "../data";
import { teamArray } from "../constants/team"

const toNumber = (value) => {
  if (!value) return -1;
  const safeValue = value.replace(/[+*]*/ig, '').replace('½', '.5');
  const number = Number.parseFloat(safeValue);
  return Number.isNaN(number) ? -1 : number;
}

const GROUP_CACHE = {}

const abilitiesToText = abilities => {
  if(!abilities) return "";
  const textTokens = [];
  const append = value => textTokens.push((value+"").trim());

  abilities.forEach(ability => {
    if(Array.isArray(ability)) append(abilitiesToText(ability))
    else if(typeof ability === "string") append(ability);
    else if(ability.bold) append(ability.bold);
    else if(ability.italic) append(ability.italic);
    else if(ability.hc) append(heroClassArray[ability.hc].label);
    else if(ability.team) append(teamArray[ability.team].label);
    else if(ability.icon) append(iconArray[ability.icon - 1].label);
    else if(ability.keyword) append(ability.text || keywordsArray[ability.keyword - 1].label);
    else if(ability.rule) append(ability.text || rulesArray[ability.rule - 1].label);
  });
  return textTokens.join(" ");
}

/**
 * Calculates the total number of cards of an array of cards.
 * @param {*} cards 
 */
export const numberOfCards = cards => cards.reduce((total, card) => {
  // card is disabled (filtered on a search) or the second half of divided card nothing is added to total
  if(card.disabled || card.divided === 2) return total;

  if(card.qtd) {
    return total + card.qtd;
  }

  // otherwise adds a value to total depending of the card rarity
  if(card.rarity === 1) return total + 5;
  if(card.rarity === 2) return total + 3;
  return total + 1;
}, 0);

/**
 * Calculates text width in pixels.
 * @param {*} text 
 * @param {*} font 
 */
export const getTextWidth = (text, font) => {
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

/**
 * Paginates an array of cards.
 * @param {*} cards 
 * @param {*} pageSize 
 */
export const paginate = (cards, pageSize) => {
  const numberOfPages = Math.ceil(cards.length / pageSize);
  const pages = [];
  for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
    const page = [];
    for (let column = 0; column < pageSize; column++) {
      const card = cards[pageNumber * pageSize + column];
      if(card) page.push(card);
    }
    pages.push(page);
  }
  return pages;
}

/**
 * Calculates the sum of VP of a list of cards.
 * @param {*} cards 
 * @returns 
 */
export const maxVP = cards => cards.reduce((total, card) => {
  // card is the second half of divided card nothing is added to total
  if(card.divided === 2) return total;
  if(!card.vpNum || card.vpNum <= 0) return total;

  // get the card qtd
  let qtd = 1;
  if(card.qtd) {
    qtd = card.qtd;
  } else {
    // gets the qtd from rarity
    if(card.rarity === 1) qtd = 5;
    if(card.rarity === 2) qtd = 3;
    if(card.rarity === 3) qtd = 1;
  }
  
  return total + qtd * card.vpNum;
}, 0);

const mastermindSubtitle = (card, group) => {
  const type = [6, 8].includes(group.set) ? "Commander": "Mastermind";
  const mmName = group.tacticName || group.name;
  if(card.tactic) return `${type} Tactic - ${mmName}`;
  if(card.epic) return `Epic ${type}`;
  if(card.transformed) return `${type}, Transformed`;
  return type;
}

const henchmanSubtitle = (card, group) => {
  if(group.subTitle) return group.subTitle;
  if(card.subTitle) return card.subTitle;
  if(group.set === 6) return "Backup Adversary";
  return "Henchman Villain";
}

const villainSubtitle = (card, group) => {
  if(group.subTitle) return group.subTitle;
  if(card.subTitle) return card.subTitle;
  if(card.subType === cardSubTypes.TRAP.id) return `Trap - ${group.name}`;
  if(card.subType === cardSubTypes.LOCATION.id) return `Location - ${group.name}`;
  if(card.subType === cardSubTypes.VILLAINOUS_WEAPON.id) return `Villainous Weapon - ${group.name}`;
  if([6, 8].includes(group.set)) return `Adversary - ${group.name}`;
  return `Villain - ${group.name}`;
}

const schemeSubtitle = (card, group) => {
  if([6, 8].includes(group.set)) return "Plot";
  if(card.transformed) return "Scheme, Transformed";
  if(card.veiled) return "Veiled Scheme";
  if(card.unveiled) return "Unveiled Scheme";
  return "Scheme";
}


const processHero = (card, group) => {
  card.team = card.team !== undefined ? card.team : group.team;
  card.attackNum = toNumber(card.attack);
  card.recruitNum = toNumber(card.recruit);
  card.attackText = card.attack ? card.attack + "" : "";
  card.recruitText = card.recruit ? card.recruit + "" : "";
  card.piercingText = card.piercing ? card.piercing + "" : "";
  card.costText = card.costAsterisk ? card.cost + "*" : card.cost + "";
}

const processVillain = (card, group) => {
  card.vAttack = card.vAttack || group.vAttack;
  card.vAttackNum = toNumber(card.vAttack);

  const vAttackText  = card.vAttack ? card.vAttack + "" : "";
  const sufix = card.vAttackAsterisk && !vAttackText.includes("*") ? "*" : "";
  card.vAttackText = card.vAttackHideValue ? sufix : vAttackText + sufix;

  card.vp = card.vp || group.vp;
  card.vpText = card.vp ? card.vp + "" : "";
  card.vpNum = toNumber(card.vpText);

  if(card.overrideType === cardTypes.HERO.id) {
    card.cost = card.vAttack;
    if(card.vAttackAsterisk) card.costAsterisk = true;
    processHero(card, group);
  }
}

const processSet = (card, group) => {
  if(!group.set) return;
  if(Array.isArray(group.set)) {
    card.set = group.set[0];
    card.set2 = group.set[1];
  } else {
    card.set = group.set;
  }
}

/**
 * Process card properties used both to display them and on search/filter.
 * @param {*} cardType 
 * @param {*} card 
 * @param {*} group 
 */
const processCard = (cardType, card, group) => {
  card.groupId = group.id;
  card.uid = `${group.id}_${card.name}`;
  card.type = cardType.id;
  card.abilitiesText = abilitiesToText(card.abilities);

  if(cardTypes.HERO === cardType) {
    card.team = card.team !== undefined ? card.team : group.team;
    card.subTitle = card.subTitle || group.name;
    card.type
    processHero(card, group);
    return;
  }

  if(cardTypes.MASTERMIND === cardType) {
    processVillain(card, group);
    card.subTitle = mastermindSubtitle(card, group);
    return;
  }

  if(cardTypes.VILLAIN === cardType) {
    processVillain(card, group);
    card.name = card.name || group.name;
    card.subTitle = villainSubtitle(card, group);
  }

  if(cardTypes.HENCHMEN === cardType) {
    processVillain(card, group);
    processSet(card, group);
    card.name = card.name || group.name;
    card.subTitle = henchmanSubtitle(card, group);
  }

  if(cardTypes.SCHEME === cardType) {
    processSet(card, group);
    card.name = card.name || group.name;
    card.subTitle = schemeSubtitle(card, group);

    if(card.overrideType === cardTypes.MASTERMIND.id) {
      processVillain(card, group);
      card.subTitle = mastermindSubtitle(card, group);
    }
  }
}

const processCardGroups = cardType => {
  if(GROUP_CACHE[cardType.id]) return GROUP_CACHE[cardType.id];

  let allGroups = [];
  Object.values(sets).forEach(setData => {
    const setGroups = setData[cardType.value];
    if(setGroups && setGroups.length) {
      setGroups.forEach(group => {
        if(!group.set) group.set = setData.id
      });
      allGroups = allGroups.concat(setGroups);
    }
  });

  allGroups.forEach(group => {
    const cards = group.cards || [];
    cards.forEach(card => processCard(cardType, card, group));
  });

  GROUP_CACHE[cardType.id] = allGroups;
  return allGroups;
};

export const getAllHeroes = () => {
  return processCardGroups(cardTypes.HERO);
};

export const getAllMasterminds = () => {
  return processCardGroups(cardTypes.MASTERMIND);
};

export const getAllVillains = () => {
  return processCardGroups(cardTypes.VILLAIN);
};

export const getAllHenchmen = () => {
  return processCardGroups(cardTypes.HENCHMEN);
}
export const getAllSchemes = () => {
  return processCardGroups(cardTypes.SCHEME);
}