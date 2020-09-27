import { cardTypes } from "../constants/cardTypes"
import { cards } from "../data";
import { heroClassArray } from "../constants/heroClass"
import { iconArray } from "../constants/icon"
import { keywordsArray } from "../constants/keywords"
import { rulesArray } from "../constants/rules"
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

const mastermindSubtitle = (card, group) => {
  const type = [6, 8].includes(group.set) ? "Commander": "Mastermind";
  const mmName = group.tacticName || group.name;
  if(card.tactic) return `${type} Tactic - ${mmName}`;
  if(card.epic) return `Epic ${type}`;
  if(card.transformed) return `${type}, Transformed`;
  return type;
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

  if(cardTypes.HERO === cardType) {
    card.team = card.team !== undefined ? card.team : group.team;
    card.attackNum = toNumber(card.attack);
    card.recruitNum = toNumber(card.recruit);
    card.attackText = card.attack ? card.attack + "" : "";
    card.recruitText = card.recruit ? card.recruit + "" : "";
    card.piercingText = card.piercing ? card.piercing + "" : "";
    card.costText = card.costAsterisk ? card.cost + "*" : card.cost + "";
    card.abilitiesText = abilitiesToText(card.abilities);
    card.subTitle = card.subTitle || group.name;
    return;
  }

  if(cardTypes.MASTERMIND === cardType) {
    card.attack = card.attack || group.attack;
    card.attackNum = toNumber(card.attack);
    card.attackText = card.attackAsterisk ? card.attack + "*" : card.attack + "";
    card.vp = card.vp || group.vp || -1;
    card.vpText = card.vp > 0 ? card.vp + "" : "";
    card.abilitiesText = abilitiesToText(card.abilities);
    card.subTitle = mastermindSubtitle(card, group);
  }
}

const processCardGroups = cardType => {
  if(GROUP_CACHE[cardType.id]) return GROUP_CACHE[cardType.id];

  let allGroups = [];
  Object.values(cards).forEach(setData => {
    const setGroups = setData[cardType.value];
    if(setGroups && setGroups.length) {
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