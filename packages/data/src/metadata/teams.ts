/**
 * Metadata of a hero team.
 */
export interface TeamMetadata {
    id: number;
    value: string;
    label: string;
  }

const UNAFFILIATED = {
    id: 0,
    value: "unaffiliated",
    label: "Unaffiliated"
};
const AVENGERS = {
    id: 1,
    value: "avengers",
    label: "Avengers"
};
const SHIELD = {
    id: 2,
    value: "shield",
    label: "S.H.I.E.L.D."
};
const SPIDER_FRIENDS = {
    id: 3,
    value: "spider-friends",
    label: "Spider Friends"
};
const X_MEN = {
    id: 4,
    value: "x-men",
    label: "X-Men"
};
const FANTASTIC_FOUR = {
    id: 5,
    value: "fantastic-four",
    label: "Fantastic Four"
};
const MARVEL_KNIGHTS = {
    id: 6,
    value: "marvel-knights",
    label: "Marvel Knights"
};
const X_FORCE = {
    id: 7,
    value: "x-force",
    label: "X-Force"
};
const CRIME_SYNDICATE = {
    id: 8,
    value: "crime-syndicate",
    label: "Crime Syndicate"
};
const SINISTER_SIX = {
    id: 9,
    value: "sinister-six",
    label: "Sinister Six"
};
const FOES_OF_ASGARD = {
    id: 10,
    value: "foes-of-asgard",
    label: "Foes of Asgard"
};
const BROTHERHOOD = {
    id: 11,
    value: "brotherhood",
    label: "Brotherhood"
};
const GUARDIANS_OF_THE_GALAXY = {
    id: 12,
    value: "guardians-of-the-galaxy",
    label: "Guardians of the Galaxy"
};
const HYDRA = {
    id: 13,
    value: "hydra",
    label: "HYDRA"
};
const CABAL = {
    id: 14,
    value: "cabal",
    label: "Cabal"
};
const ILLUMINATI = {
    id: 15,
    value: "illuminati",
    label: "Illuminati"
};
const NEW_WARRIORS = {
    id: 16,
    value: "new-warriors",
    label: "New Warriors"
};
const MERCS_FOR_MONEY = {
    id: 17,
    value: "mercs-for-money",
    label: "Mercs for Money"
};
const CHAMPIONS = {
    id: 18,
    value: "champions",
    label: "Champions"
};
const WARBOUND = {
    id: 19,
    value: "warbound",
    label: "Warbound"
};
const VENOMVERSE= {
    id: 20,
    value: "venomverse",
    label: "Venomverse"
};
const HEROES_OF_ASGARD= {
    id: 21,
    value: "heroes-of-asgard",
    label: "Heroes of Asgard"
};
const INHUMANS = {
    id: 22,
    value: "inhumans",
    label: "Inhumans"
};
const X_FACTOR_INVESTIGATIONS = {
    id: 23,
    value: "x-factor-investigations",
    label: "X-Factor Investigations"
};
const HEROES_OF_WAKANDA = {
    id: 24,
    value: "heroes-of-wakanda",
    label: "Heroes of Wakanda"
};
const GUARDIANS_OF_THE_MULTIVERSE = {
    id: 25,
    value: "guardians-of-the-multiverse",
    label: "Guardians of the Multiverse"
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