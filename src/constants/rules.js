
const SHARDS = {
    id: 1,
    inHeroes: true,
    value: "shards",
    label: "Shards"
}
const MULTICLASS_CARDS = {
    id: 2,
    inHeroes: true,
    value: "multiclasscards",
    label: "Multiclass Cards"
}
const MULTIPLE_MASTERMINDS = {
    id: 3,
    value: "multiplemasterminds",
    label: "Multiple Masterminds"
}
const DIVIDED = {
    id: 4,
    inHeroes: true,
    value: "divided",
    label: "Divided Card"
}
const TRAPS= {
    id: 5,
    value: "traps",
    label: "Traps"
}
const LOCATIONS = {
    id: 6,
    value: "locations",
    label: "Locations"
}
const TRANSFORMING_SCHEMES = {
    id: 7,
    value: "transformingschemes",
    label: "Transforming Schemes"
}
const ADAPTING_MASTERMINDS= {
    id: 8,
    value: "adaptingmasterminds",
    label: "Adapting Masterminds"
}
const VILLAINOUS_WEAPONS = {
    id: 9,
    value: "villainousweapons",
    label: "Villainous Weapons"
}
const ASTERISK = {
    id: 10,
    inHeroes: true,
    value: "asterisk",
    label: "Asterisk Symbol"
}
const SIDEKICKS = {
    id: 11,
    inHeroes: true,
    value: "sidekicks",
    label: "Sidekicks"
}

export const rules = Object.freeze({
    SHARDS,
    MULTICLASS_CARDS,
    MULTIPLE_MASTERMINDS,
    DIVIDED,
    TRAPS,
    LOCATIONS,
    TRANSFORMING_SCHEMES,
    ADAPTING_MASTERMINDS,
    VILLAINOUS_WEAPONS,
    ASTERISK,
    SIDEKICKS
});

export const rulesArray = Object.freeze([
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
]);