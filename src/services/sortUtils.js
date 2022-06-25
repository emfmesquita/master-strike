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