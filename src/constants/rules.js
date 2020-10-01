
const SHARDS = {
    id: 1,
    value: "shards",
    label: "Shards",
    cardTypes: [1, 2, 3],
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
    cardTypes: [],
}
const DIVIDED = {
    id: 4,
    value: "divided",
    label: "Divided Card",
    cardTypes: [1],
}
const TRAPS= {
    id: 5,
    value: "traps",
    label: "Traps",
    cardTypes: [],
}
const LOCATIONS = {
    id: 6,
    value: "locations",
    label: "Locations",
    cardTypes: [2, 3],
}
const TRANSFORMING_SCHEMES = {
    id: 7,
    value: "transformingschemes",
    label: "Transforming Schemes",
    cardTypes: [],
}
const ADAPTING_MASTERMINDS= {
    id: 8,
    value: "adaptingmasterminds",
    label: "Adapting Masterminds",
    cardTypes: [2],
}
const VILLAINOUS_WEAPONS = {
    id: 9,
    value: "villainousweapons",
    label: "Villainous Weapons",
    cardTypes: [2],
}
const ASTERISK = {
    id: 10,
    value: "asterisk",
    label: "Asterisk Symbol",
    cardTypes: [1, 2, 3],
}
const SIDEKICKS = {
    id: 11,
    value: "sidekicks",
    label: "Sidekicks",
    cardTypes: [1],
}

export const rules = Object.freeze({
    SHARDS,                     // 1  done
    MULTICLASS_CARDS,           // 2  done
    MULTIPLE_MASTERMINDS,       // 3
    DIVIDED,                    // 4  done
    TRAPS,                      // 5
    LOCATIONS,                  // 6  done
    TRANSFORMING_SCHEMES,       // 7
    ADAPTING_MASTERMINDS,       // 8  done
    VILLAINOUS_WEAPONS,         // 9  done
    ASTERISK,                   // 10 done
    SIDEKICKS                   // 11 done
});

export const rulesArray = Object.freeze(Object.values(rules));