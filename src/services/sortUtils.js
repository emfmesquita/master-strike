export const ALPHA_SORT = "alpha";
export const RESULTS_SORT = "results";

export const sortMethods = Object.freeze([
  ALPHA_SORT,
  RESULTS_SORT
]);

export const sortGroups = (groups, sortMethod) => {
  if(!sortMethod) return groups;
  groups.sort((a, b) => {
    if(sortMethod === ALPHA_SORT || b.results === a.results) return (a.sortName || a.name || "").localeCompare(b.sortName || b.name || "");
    if(sortMethod === RESULTS_SORT) return b.results - a.results;
    return 0;
  });
}