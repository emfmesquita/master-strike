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

const setIdToLabel = (id: number) => setsArray[id - 1].label;

export const getSetLabel = (setId: number, override?: number | number[]): string => {
  if(!override || typeof override === 'number') return setIdToLabel(override || setId);
  return override.map(setIdToLabel).join(' - ');
}

export { processRules } from './rulesProcessor';