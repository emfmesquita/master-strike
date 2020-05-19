import { cards } from "../data";

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

export const numberOfHeroCards = cards => cards.reduce((total, card) => {
  if(card.disabled || card.divided === 2) return total;
  if(card.rarity === 1) return total + 5;
  if(card.rarity === 2) return total + 3;
  return total + 1;
}, 0);