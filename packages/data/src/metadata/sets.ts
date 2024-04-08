/**
 * Metadata of a card set.
 */
export interface CardSetMetadata {
    id: number;
    value: string;
    label: string;
    initials: string;
    cardTypes: number[];
}

const CORE_SET: CardSetMetadata = {
    id: 1,
    value: "coreset",
    label: "Core Set",
    initials: "C",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const PROMO: CardSetMetadata = {
    id: 2,
    value: "promo",
    label: "Promo Cards",
    initials: "$",
    cardTypes: [],
};
const DARK_CITY: CardSetMetadata = {
    id: 3,
    value: "darkcity",
    label: "Dark City",
    initials: "DC",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const FANTASTIC_FOUR: CardSetMetadata = {
    id: 4,
    value: "ff",
    label: "Fantastic Four",
    initials: "FF",
    cardTypes: [1, 2, 4, 5],
};
const PAINT_THE_TOWN_RED: CardSetMetadata = {
    id: 5,
    value: "pttr",
    label: "Paint the Town Red",
    initials: "PtTR",
    cardTypes: [1, 2, 4, 5],
};
const VILLAINS: CardSetMetadata = {
    id: 6,
    value: "villains",
    label: "Villains",
    initials: "V",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const GUARDIANS_OF_THE_GALAXY: CardSetMetadata = {
    id: 7,
    value: "gotg",
    label: "Guardians of the Galaxy",
    initials: "GotG",
    cardTypes: [1, 2, 4, 5],
};
const FEAR_ITSELF: CardSetMetadata = {
    id: 8,
    value: "fearitself",
    label: "Fear Itself",
    initials: "FI",
    cardTypes: [1, 2, 4, 5],
};
const THREE_DIMENSION: CardSetMetadata = {
    id: 9,
    value: "3d",
    label: "Playable Marvel 3D Trading Cards",
    initials: "3D",
    cardTypes: [1, 3, 6],
};
const SECRET_WARS_1: CardSetMetadata = {
    id: 10,
    value: "sw1",
    label: "Secret Wars, Volume 1",
    initials: "SW1",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const SECRET_WARS_2: CardSetMetadata = {
    id: 11,
    value: "sw2",
    label: "Secret Wars, Volume 2",
    initials: "SW2",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const CAPTAIN_AMERICA: CardSetMetadata = {
    id: 12,
    value: "captainamerica",
    label: "Captain America 75th Anniversary",
    initials: "CA",
    cardTypes: [1, 2, 4, 5],
};
const CIVIL_WAR: CardSetMetadata = {
    id: 13,
    value: "civilwar",
    label: "Civil War",
    initials: "CW",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const DEADPOOL: CardSetMetadata = {
    id: 14,
    value: "deadpool",
    label: "Deadpool",
    initials: "DP",
    cardTypes: [1, 2, 4, 5],
};
const NOIR: CardSetMetadata = {
    id: 15,
    value: "noir",
    label: "Noir",
    initials: "Noir",
    cardTypes: [1, 2, 4, 5, 6],
};
const X_MEN: CardSetMetadata = {
    id: 16,
    value: "xmen",
    label: "X-Men",
    initials: "X",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const SPIDER_HOMECOMING: CardSetMetadata = {
    id: 17,
    value: "spiderhomecoming",
    label: "Spider-Man Homecoming",
    initials: "SMH",
    cardTypes: [1, 2, 4, 5, 6],
};
const CHAMPIONS: CardSetMetadata = {
    id: 18,
    value: "champions",
    label: "Champions",
    initials: "Champ",
    cardTypes: [1, 2, 4, 5],
};
const WW_HULK: CardSetMetadata = {
    id: 19,
    value: "wwhulk",
    label: "World War Hulk",
    initials: "WWH",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const MARVEL_STUDIOS: CardSetMetadata = {
    id: 20,
    value: "marvelstudios",
    label: "Marvel Studios, Phase 1",
    initials: "MS1",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const ANT_MAN: CardSetMetadata = {
    id: 21,
    value: "antman",
    label: "Ant-Man",
    initials: "AM",
    cardTypes: [1, 2, 4, 5],
};
const VENOM: CardSetMetadata = {
    id: 22,
    value: "venom",
    label: "Venom",
    initials: "Venom",
    cardTypes: [1, 2, 4, 5],
};
const DIMENSIONS: CardSetMetadata = {
    id: 23,
    value: "dimensions",
    label: "Dimensions",
    initials: "Dim",
    cardTypes: [1, 2, 3, 6],
};
const REVELATIONS: CardSetMetadata = {
    id: 24,
    value: "revelations",
    label: "Revelations",
    initials: "Rev",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const SHIELD: CardSetMetadata = {
    id: 25,
    value: "shield",
    label: "S.H.I.E.L.D.",
    initials: "S.H.I.E.L.D.",
    cardTypes: [1, 2, 4, 5],
};
const HEROES_OF_ASGARD: CardSetMetadata = {
    id: 26,
    value: "heroesofasgard",
    label: "Heroes of Asgard",
    initials: "HoA",
    cardTypes: [1, 2, 4, 5],
};
const NEW_MUTANTS: CardSetMetadata = {
    id: 27,
    value: "newmutants",
    label: "The New Mutants",
    initials: "NM",
    cardTypes: [1, 2, 4, 5],
};
const INTO_THE_COSMOS: CardSetMetadata = {
    id: 28,
    value: "intothecosmos",
    label: "Into the Cosmos",
    initials: "ItC",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const REALM_OF_KINGS: CardSetMetadata = {
    id: 29,
    value: "realmofkings",
    label: "Realm of Kings",
    initials: "Rok",
    cardTypes: [1, 2, 4, 5],
};
const ANNIHILATION: CardSetMetadata = {
    id: 30,
    value: "annihilation",
    label: "Annihilation",
    initials: "A",
    cardTypes: [1, 2, 4, 5],
};
const MESSIAH_COMPLEX: CardSetMetadata = {
    id: 31,
    value: "messiahcomplex",
    label: "Messiah Complex",
    initials: "MC",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const DOCTOR_STRANGE: CardSetMetadata = {
    id: 32,
    value: "doctorstrange",
    label: "Doctor Strange and the Shadows of Nightmare",
    initials: "DS",
    cardTypes: [1, 2, 4, 5],
};
const MS_GUARDIANS_OF_THE_GALAXY: CardSetMetadata = {
    id: 33,
    value: "msgotg",
    label: "Marvel Studios' Guardians of the Galaxy",
    initials: "MSGotG",
    cardTypes: [1, 2, 4, 5],
};
const BLACK_PANTHER: CardSetMetadata = {
    id: 34,
    value: "blackpanther",
    label: "Black Panther",
    initials: "BP",
    cardTypes: [1, 2, 4, 5],
};
const BLACK_WIDOW: CardSetMetadata = {
    id: 35,
    value: "blackwidow",
    label: "Black Widow",
    initials: "BW",
    cardTypes: [1, 2, 4, 5],
};
const MS_INFINITY_SAGA: CardSetMetadata = {
    id: 36,
    value: "msis",
    label: "Marvel Studios' The Infinity Saga",
    initials: "MSIS",
    cardTypes: [1, 2, 4, 5],
};
const MIDNIGHT_SUNS: CardSetMetadata = {
    id: 37,
    value: "midnightsons",
    label: "Midnight Sons",
    initials: "MNS",
    cardTypes: [1, 2, 4, 5],
};
const MS_WHAT_IF: CardSetMetadata = {
    id: 38,
    value: "mswi",
    label: "Marvel Studios' What If...?",
    initials: "MSWI",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const MS_ANT_MAN_WASP: CardSetMetadata = {
    id: 39,
    value: "msaw",
    label: "Marvel Studios' Ant-Man and the Wasp",
    initials: "MSAW",
    cardTypes: [1, 2, 3, 4, 5, 6],
};
const MARVEL_2099: CardSetMetadata = {
    id: 40,
    value: "2099",
    label: "Marvel 2099",
    initials: "2099",
    cardTypes: [1, 2, 4, 5],
};

export interface SetMetadataMap {
    [key: string]: CardSetMetadata;
}

/**
 * Object with the metadata of card sets.
 */
export const sets: Readonly<SetMetadataMap> = Object.freeze({
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
    INTO_THE_COSMOS,            // 28
    REALM_OF_KINGS,             // 29
    ANNIHILATION,               // 30
    MESSIAH_COMPLEX,            // 31
    DOCTOR_STRANGE,             // 32
    MS_GUARDIANS_OF_THE_GALAXY, // 33
    BLACK_PANTHER,              // 34
    BLACK_WIDOW,                // 35
    MS_INFINITY_SAGA,           // 36
    MIDNIGHT_SUNS,              // 37
    MS_WHAT_IF,                 // 38
    MS_ANT_MAN_WASP,            // 39
    MARVEL_2099,                // 40
});

/**
 * Array with the metadata of card sets. The first item corresponds to id one and it represents the core set.
 */
export const setsArray: Readonly<CardSetMetadata[]> = Object.freeze(Object.values(sets));