import { cards } from "../data";
import { heroClassArray } from "../constants/hero-class"
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

export const getAllHeroes = () => {
  let allHeroes = [];
  Object.values(cards).forEach(setCards => {
    if(setCards.heroes && setCards.heroes.length) {
      allHeroes = allHeroes.concat(setCards.heroes);
    }
  });

  allHeroes.forEach(hero => {
    (hero.cards || []).forEach(card => {
      card.attackNum = toNumber(card.attack);
      card.recruitNum = toNumber(card.recruit);
    });
  });

  return allHeroes;
};

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
 * Calculates the card text of a hero object.
 * @param {*} hero 
 */
export const processHeroText = (hero) => {
  hero.cards.forEach(card => {
    card.heroId = hero.id;
    card.heroName = hero.name;
    card.abilitiesText = abilitiesToText(card.abilities);
  });
}

export const numberOfHeroCards = cards => cards.reduce((total, card) => {
  if(card.disabled || card.divided === 2) return total;
  if(card.rarity === 1) return total + 5;
  if(card.rarity === 2) return total + 3;
  return total + 1;
}, 0);