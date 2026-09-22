export const ALPHA_SORT = "alpha";
export const RESULTS_SORT = "results";
export const VP_SORT = "vp";

export const sortMethods = Object.freeze([
  ALPHA_SORT,
  RESULTS_SORT,
  VP_SORT
]);

const parseIntOrZero = value => {
  const int = parseInt(value);
  return isNaN(int) ? 0 : int;
}

const alphaSort = (a, b) => (a.sortName || a.name || "").localeCompare(b.sortName || b.name || "");

const compareFlag = (aFlag, bFlag) => {
  if (aFlag && !bFlag) return 1;
  if (!aFlag && bFlag) return -1;
  return 0;
};

const compareNumber = (aValue, bValue) => {
  if (aValue > bValue) return 1;
  if (aValue < bValue) return -1;
  return 0;
};

const compareName = (a, b) => (a.name || "").localeCompare(b.name || "");

export const sortHeroCards = group => {
  const cards = group.filteredCards;
  cards.sort((a, b) => {
    const disabled = compareFlag(a.disabled, b.disabled);
    if (disabled) return disabled;
    const rarity = compareNumber(a.rarity, b.rarity);
    if (rarity) return rarity;
    const cost = compareNumber(a.cost, b.cost);
    if (cost) return cost;
    if (a.divided && b.divided && cards.indexOf(a) > cards.indexOf(b)) return 1;
    if (a.divided && b.divided) return -1;
    return 0;
  });
};

export const sortMastermindCards = group => {
  group.filteredCards.sort((a, b) => {
    const disabled = compareFlag(a.disabled, b.disabled);
    if (disabled) return disabled;
    const tactic = compareFlag(a.tactic, b.tactic);
    if (tactic) return tactic;
    const epic = compareFlag(a.epic, b.epic);
    if (epic) return epic;
    const transformed = compareFlag(a.transformed, b.transformed);
    if (transformed) return transformed;
    return compareName(a, b);
  });
};

export const sortSchemeCards = group => {
  group.filteredCards.sort((a, b) => {
    const disabled = compareFlag(a.disabled, b.disabled);
    if (disabled) return disabled;
    const transformed = compareFlag(a.transformed, b.transformed);
    if (transformed) return transformed;
    return compareName(a, b);
  });
};

export const sortGroups = (groups, sortMethod) => {
  if(!sortMethod) return groups;

  if(sortMethod === VP_SORT) {
    groups.sort((a, b) => {
      const aVp = parseIntOrZero(a.maxVP);
      const bVP = parseIntOrZero(b.maxVP);
      return aVp === bVP ?  alphaSort(a, b) : (aVp - bVP);
    });
  } else if(sortMethod === ALPHA_SORT) {
    groups.sort((a, b) => alphaSort(a, b));
  } else if(sortMethod === RESULTS_SORT) {
    groups.sort((a, b) => a.results === b.results ? alphaSort(a, b) : (b.results - a.results));
  }
}