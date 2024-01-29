/**
 * Metadata of a rule.
 */
export interface RuleMetadata {
  id: number;
  value: string;
  label: string;
  cardTypes: number[];
}

const SHARDS = {
  id: 1,
  value: "shards",
  label: "Shards",
  cardTypes: [1, 2, 3, 4, 5, 6],
}
const MULTICLASS_CARDS = {
  id: 2,
  value: "multiclasscards",
  label: "Multiclass Cards",
  cardTypes: [1, 3],
}
const MULTIPLE_MASTERMINDS = {
  id: 3,
  value: "multiplemasterminds",
  label: "Multiple Masterminds",
  cardTypes: [1, 2, 4, 5],
}
const DIVIDED = {
  id: 4,
  value: "divided",
  label: "Divided Card",
  cardTypes: [1],
}
const TRAPS = {
  id: 5,
  value: "traps",
  label: "Traps",
  cardTypes: [4, 5],
}
const LOCATIONS = {
  id: 6,
  value: "locations",
  label: "Locations",
  cardTypes: [2, 3, 4],
}
const TRANSFORMING_SCHEMES = {
  id: 7,
  value: "transformingschemes",
  label: "Double-Sided Transforming Schemes",
  cardTypes: [5],
}
const ADAPTING_MASTERMINDS = {
  id: 8,
  value: "adaptingmasterminds",
  label: "Adapting Masterminds",
  cardTypes: [2],
}
const VILLAINOUS_WEAPONS = {
  id: 9,
  value: "villainousweapons",
  label: "Villainous Weapons",
  cardTypes: [2, 4],
}
const ASTERISK = {
  id: 10,
  value: "asterisk",
  label: "Asterisk Symbol",
  cardTypes: [1, 2, 3, 4],
}
const SIDEKICKS = {
  id: 11,
  value: "sidekicks",
  label: "Sidekicks",
  cardTypes: [1, 4, 5, 6],
}
const CHOOSE_A_VILLAIN = {
  id: 12,
  value: "chooseavillain",
  label: "“Choose a Villain Group“",
  sortLabel: "Choose a Villain Group",
  cardTypes: [1],
}
const VEILED_SCHEMES = {
  id: 13,
  value: "veiledschemes",
  label: "Veiled Schemes",
  title: "Veiled and Unveiled Schemes",
  cardTypes: [5],
}
const UNVEILED_SCHEMES = {
  id: 14,
  value: "unveiledschemes",
  label: "Unveiled Schemes",
  title: "Veiled and Unveiled Schemes",
  cardTypes: [5],
}
const WOUNDS_ON_VILAINS = {
  id:15,
  value: "woundsonvillains",
  label: "Wounds on Villains",
  title: "Putting Wounds on Villains",
  cardTypes: [1, 2, 4, 5],
}
const AMBUSH_SCHEMES = {
  id:16,
  value: "ambushschemes",
  label: "Ambush Schemes",
  cardTypes: [4],
}
const NONE = {
  id: -1,
  value: "none",
  label: " NONE",
  cardTypes: [1, 2, 3, 4],
}

export interface RuleMetadataMap {
  [key: string]: RuleMetadata;
}

/**
 * Object with the metadata of rules.
 */
export const rules: Readonly<RuleMetadataMap> = Object.freeze({
  SHARDS,                     // 1  done
  MULTICLASS_CARDS,           // 2  done
  MULTIPLE_MASTERMINDS,       // 3  done
  DIVIDED,                    // 4  done
  TRAPS,                      // 5  done
  LOCATIONS,                  // 6  done
  TRANSFORMING_SCHEMES,       // 7  done
  ADAPTING_MASTERMINDS,       // 8  done
  VILLAINOUS_WEAPONS,         // 9  done
  ASTERISK,                   // 10 done
  SIDEKICKS,                  // 11 done
  CHOOSE_A_VILLAIN,           // 12 done
  VEILED_SCHEMES,             // 13 done
  UNVEILED_SCHEMES,           // 14 done
  WOUNDS_ON_VILAINS,          // 15 done
  AMBUSH_SCHEMES,             // 16 done
  NONE,                       // -1
});

/**
 * Array with the metadata of rules. The first item corresponds to id one and it represents the shards rules.
 */
export const rulesArray: Readonly<RuleMetadata[]> = Object.freeze(Object.values(rules));