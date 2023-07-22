import { setsArray } from '../../metadata';
import { CardSetDef } from '../../definitions/cardTypes';
import { CardSearchResult } from '../cardSearchTypes';
import { processHenchman } from './henchmenProcessor';
import { processHero } from './heroProcessor';
import { processMastermind } from './mastermindProcessor';
import { processScheme } from './schemeProcessor';
import { processVillain } from './villainProcessor';

export const processSet = (addCard: (card: CardSearchResult) => void, set: CardSetDef) => {
  set.heroes?.forEach(hero => processHero(addCard, hero, set));
  set.masterminds?.forEach(mm => processMastermind(addCard, mm, set));
  set.henchmen?.forEach(henchman => processHenchman(addCard, henchman, set));
  set.villains?.forEach(villain => processVillain(addCard, villain, set));
  set.schemes?.forEach(scheme => processScheme(addCard, scheme, set));
}

export const setIdToLabel = (id: number) => setsArray[id - 1].label;

export const getSets = (setId: number, override?: number | number[]): number[] => {
  if(!override || typeof override === 'number') return [override || setId];
  const ids = override.filter(id => id !== 9 && id != 20); // 3d and ms phase 1 not considered
  return ids;
}

export { processRules } from './rulesProcessor';