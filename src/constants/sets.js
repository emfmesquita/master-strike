const CORE_SET = {
    id: 1,
    value: "coreset",
    label: "Core Set",
    initials: "C",
    cardTypes: [1,2],
};
const PROMO = {
    id: 2,
    value: "promo",
    label: "Promo Cards",
    initials: "★",
    cardTypes: [],
};
const DARK_CITY = {
    id: 3,
    value: "darkcity",
    label: "Dark City",
    initials: "DC",
    cardTypes: [1,2],
};
const FANTASTIC_FOUR = {
    id: 4,
    value: "ff",
    label: "Fantastic Four",
    initials: "FF",
    cardTypes: [1,2],
};
const PAINT_THE_TOWN_RED = {
    id: 5,
    value: "pttr",
    label: "Paint the Town Red",
    initials: "PtTR",
    cardTypes: [1,2],
};
const VILLAINS = {
    id: 6,
    value: "villains",
    label: "Villains",
    initials: "V",
    cardTypes: [1,2],
};
const GUARDIANS_OF_THE_GALAXY = {
    id: 7,
    value: "gotg",
    label: "Guardians of the Galaxy",
    initials: "GotG",
    cardTypes: [1,2],
};
const FEAR_ITSELF = {
    id: 8,
    value: "fearitself",
    label: "Fear Itself",
    initials: "FI",
    cardTypes: [1,2],
};
const THREE_DIMENSION = {
    id: 9,
    value: "3d",
    label: "Playable Marvel 3D Trading Cards",
    initials: "3D",
    cardTypes: [1],
};
const SECRET_WARS_1 = {
    id: 10,
    value: "sw1",
    label: "Secret Wars, Volume 1",
    initials: "SW1",
    cardTypes: [1,2],
};
const SECRET_WARS_2 = {
    id: 11,
    value: "sw2",
    label: "Secret Wars, Volume 2",
    initials: "SW2",
    cardTypes: [1,2],
};
const CAPTAIN_AMERICA = {
    id: 12,
    value: "captainamerica",
    label: "Captain America 75th Anniversary",
    initials: "CA",
    cardTypes: [1,2],
};
const CIVIL_WAR = {
    id: 13,
    value: "civilwar",
    label: "Civil War",
    initials: "CW",
    cardTypes: [1,2],
};
const DEADPOOL = {
    id: 14,
    value: "deadpool",
    label: "Deadpool",
    initials: "DP",
    cardTypes: [1,2],
};
const NOIR = {
    id: 15,
    value: "noir",
    label: "Noir",
    initials: "Noir",
    cardTypes: [1,2],
};
const X_MEN = {
    id: 16,
    value: "xmen",
    label: "X-Men",
    initials: "X",
    cardTypes: [1,2],
};
const SPIDER_HOMECOMING = {
    id: 17,
    value: "spiderhomecoming",
    label: "Spider-Man Homecoming",
    initials: "SMH",
    cardTypes: [1,2],
};
const CHAMPIONS = {
    id: 18,
    value: "champions",
    label: "Champions",
    initials: "Champ",
    cardTypes: [1,2],
};
const WW_HULK = {
    id: 19,
    value: "wwhulk",
    label: "World War Hulk",
    initials: "WWH",
    cardTypes: [1,2],
};
const MARVEL_STUDIOS = {
    id: 20,
    value: "marvelstudios",
    label: "Marvel Studios, Phase 1",
    initials: "MS1",
    cardTypes: [1,2],
};
const ANT_MAN = {
    id: 21,
    value: "antman",
    label: "Ant-Man",
    initials: "AM",
    cardTypes: [1,2],
};
const VENOM = {
    id: 22,
    value: "venom",
    label: "Venom",
    initials: "Venom",
    cardTypes: [1,2],
};
const DIMENSIONS = {
    id: 23,
    value: "dimensions",
    label: "Dimensions",
    initials: "Dim",
    cardTypes: [1,2],
};
const REVELATIONS = {
    id: 24,
    value: "revelations",
    label: "Revelations",
    initials: "Rev",
    cardTypes: [1,2],
};
const SHIELD = {
    id: 25,
    value: "shield",
    label: "S.H.I.E.L.D.",
    initials: "S.H.I.E.L.D.",
    cardTypes: [1,2],
};
const HEROES_OF_ASGARD = {
    id: 26,
    value: "heroesofasgard",
    label: "Heroes of Asgard",
    initials: "HoA",
    cardTypes: [1,2],
};
const NEW_MUTANTS = {
    id: 27,
    value: "newmutants",
    label: "The New Mutants",
    initials: "NM",
    cardTypes: [1,2],
};
const INTO_THE_COSMOS = {
    id: 28,
    value: "intothecosmos",
    label: "Into the Cosmos",
    initials: "ItC",
    cardTypes: [1,2],
};

export const sets = Object.freeze({
    CORE_SET,
    PROMO,
    DARK_CITY,
    FANTASTIC_FOUR,
    VILLAINS,
    PAINT_THE_TOWN_RED,
    GUARDIANS_OF_THE_GALAXY,
    FEAR_ITSELF,
    SECRET_WARS_1,
    SECRET_WARS_2,
    THREE_DIMENSION,
    CAPTAIN_AMERICA,
    DEADPOOL,
    CIVIL_WAR,
    NOIR,
    X_MEN,
    SPIDER_HOMECOMING,
    CHAMPIONS,
    WW_HULK,
    MARVEL_STUDIOS,
    ANT_MAN,
    VENOM,
    DIMENSIONS,
    REVELATIONS,
    SHIELD,
    HEROES_OF_ASGARD,
    NEW_MUTANTS,
    INTO_THE_COSMOS
});

export const setsArray = Object.freeze([
    CORE_SET,                   // 1
    PROMO,                      // 2
    DARK_CITY,                  // 3
    FANTASTIC_FOUR,             // 4
    PAINT_THE_TOWN_RED,         // 5
    VILLAINS,                   // 6
    GUARDIANS_OF_THE_GALAXY,    // 7
    FEAR_ITSELF,                // 8
    THREE_DIMENSION,            // 9
    SECRET_WARS_1,              // 10
    SECRET_WARS_2,              // 11
    CAPTAIN_AMERICA,            // 12
    CIVIL_WAR,                  // 13
    DEADPOOL,                   // 14
    NOIR,                       // 15
    X_MEN,                      // 16
    SPIDER_HOMECOMING,          // 17
    CHAMPIONS,                  // 18
    WW_HULK,                    // 19
    MARVEL_STUDIOS,             // 20
    ANT_MAN,                    // 21
    VENOM,                      // 22
    DIMENSIONS,                 // 23
    REVELATIONS,                // 24
    SHIELD,                     // 25
    HEROES_OF_ASGARD,           // 26
    NEW_MUTANTS,                // 27
    INTO_THE_COSMOS             // 28
]);