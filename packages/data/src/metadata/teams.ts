/**
 * Metadata of a hero team.
 */
export interface TeamMetadata {
    id: number;
    value: string;
    label: string;
    cardTypes: number[];
  }

const UNAFFILIATED = {
    id: 0,
    value: "unaffiliated",
    label: "Unaffiliated",
    cardTypes: [1, 9]
};
const AVENGERS = {
    id: 1,
    value: "avengers",
    label: "Avengers",
    cardTypes: [1, 9]
};
const SHIELD = {
    id: 2,
    value: "shield",
    label: "S.H.I.E.L.D.",
    cardTypes: [1, 8]
};
const SPIDER_FRIENDS = {
    id: 3,
    value: "spider-friends",
    label: "Spider Friends",
    cardTypes: [1]
};
const X_MEN = {
    id: 4,
    value: "x-men",
    label: "X-Men",
    cardTypes: [1, 9]
};
const FANTASTIC_FOUR = {
    id: 5,
    value: "fantastic-four",
    label: "Fantastic Four",
    cardTypes: [1]
};
const MARVEL_KNIGHTS = {
    id: 6,
    value: "marvel-knights",
    label: "Marvel Knights",
    cardTypes: [1]
};
const X_FORCE = {
    id: 7,
    value: "x-force",
    label: "X-Force",
    cardTypes: [1, 9]
};
const CRIME_SYNDICATE = {
    id: 8,
    value: "crime-syndicate",
    label: "Crime Syndicate",
    cardTypes: [1]
};
const SINISTER_SIX = {
    id: 9,
    value: "sinister-six",
    label: "Sinister Six",
    cardTypes: [1]
};
const FOES_OF_ASGARD = {
    id: 10,
    value: "foes-of-asgard",
    label: "Foes of Asgard",
    cardTypes: [1]
};
const BROTHERHOOD = {
    id: 11,
    value: "brotherhood",
    label: "Brotherhood",
    cardTypes: [1]
};
const GUARDIANS_OF_THE_GALAXY = {
    id: 12,
    value: "guardians-of-the-galaxy",
    label: "Guardians of the Galaxy",
    cardTypes: [1]
};
const HYDRA = {
    id: 13,
    value: "hydra",
    label: "HYDRA",
    cardTypes: [1, 8]
};
const CABAL = {
    id: 14,
    value: "cabal",
    label: "Cabal",
    cardTypes: [1]
};
const ILLUMINATI = {
    id: 15,
    value: "illuminati",
    label: "Illuminati",
    cardTypes: [1]
};
const NEW_WARRIORS = {
    id: 16,
    value: "new-warriors",
    label: "New Warriors",
    cardTypes: [1]
};
const MERCS_FOR_MONEY = {
    id: 17,
    value: "mercs-for-money",
    label: "Mercs for Money",
    cardTypes: [1]
};
const CHAMPIONS = {
    id: 18,
    value: "champions",
    label: "Champions",
    cardTypes: [1]
};
const WARBOUND = {
    id: 19,
    value: "warbound",
    label: "Warbound",
    cardTypes: [1]
};
const VENOMVERSE= {
    id: 20,
    value: "venomverse",
    label: "Venomverse",
    cardTypes: [1]
};
const HEROES_OF_ASGARD= {
    id: 21,
    value: "heroes-of-asgard",
    label: "Heroes of Asgard",
    cardTypes: [1]
};
const INHUMANS = {
    id: 22,
    value: "inhumans",
    label: "Inhumans",
    cardTypes: [1]
};
const X_FACTOR_INVESTIGATIONS = {
    id: 23,
    value: "x-factor-investigations",
    label: "X-Factor Investigations",
    cardTypes: [1, 9]
};
const HEROES_OF_WAKANDA = {
    id: 24,
    value: "heroes-of-wakanda",
    label: "Heroes of Wakanda",
    cardTypes: [1]
};
const GUARDIANS_OF_THE_MULTIVERSE = {
    id: 25,
    value: "guardians-of-the-multiverse",
    label: "Guardians of the Multiverse",
    cardTypes: [1]
};

export interface TeamMetadataMap {
[key: string]: TeamMetadata;
}

/**
 * Object with the metadata of hero teams.
 */
export const teams: Readonly<TeamMetadataMap> = Object.freeze({
    UNAFFILIATED,                   //0
    AVENGERS,                       //1
    SHIELD,                         //2
    SPIDER_FRIENDS,                 //3
    X_MEN,                          //4
    FANTASTIC_FOUR,                 //5
    MARVEL_KNIGHTS,                 //6
    X_FORCE,                        //7
    CRIME_SYNDICATE,                //8
    SINISTER_SIX,                   //9
    FOES_OF_ASGARD,                 //10
    BROTHERHOOD,                    //11
    GUARDIANS_OF_THE_GALAXY,        //12
    HYDRA,                          //13
    CABAL,                          //14
    ILLUMINATI,                     //15
    NEW_WARRIORS,                   //16
    MERCS_FOR_MONEY,                //17
    CHAMPIONS,                      //18
    WARBOUND,                       //19
    VENOMVERSE,                     //20   
    HEROES_OF_ASGARD,               //21
    INHUMANS,                       //22
    X_FACTOR_INVESTIGATIONS,        //23
    HEROES_OF_WAKANDA,              //24
    GUARDIANS_OF_THE_MULTIVERSE,    //25
});

/**
 * Array with the metadata of icons. The first item corresponds to id zero and it represents an unaffiliated hero.
 */
export const teamsArray: Readonly<TeamMetadata[]> = Object.freeze(Object.values(teams));