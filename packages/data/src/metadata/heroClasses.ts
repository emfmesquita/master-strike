/**
 * Metadata of a hero class.
 */
export interface HeroClassMetadata {
    id: number;
    value: string;
    label: string;
    bgColor: string;
}

const NONE = {
    id: 0,
    value: "",
    label: "",
    bgColor: "#ffffff"
};
const COVERT = {
    id: 1,
    value: "covert",
    label: "Covert",
    bgColor: "#ffb3b3"
};
const INSTINCT = {
    id: 2,
    value: "instinct",
    label: "Instinct",
    bgColor: "#ffffcc"
};
const RANGED = {
    id: 3,
    value: "ranged",
    label: "Ranged",
    bgColor: "#c2d1f0"
};
const STRENGTH = {
    id: 4,
    value: "strength",
    label: "Strength",
    bgColor: "#c6ecd9"
};
const TECH = {
    id: 5,
    value: "tech",
    label: "Tech",
    bgColor: "#A0A0A0"
};

export interface HeroClassMetadataMap {
    [key: string]: HeroClassMetadata;
}

/**
 * Object with the metadata of hero classes.
 */
export const heroClasses: Readonly<HeroClassMetadataMap> = Object.freeze({
    NONE,       // 0
    COVERT,     // 1
    INSTINCT,   // 2
    RANGED,     // 3
    STRENGTH,   // 4
    TECH        // 5
});

/**
 * Array with the metadata of hero classes. The first item corresponds to id zero and it represents no hero class.
 */
export const heroClassesArray: Readonly<HeroClassMetadata[]> = Object.freeze(Object.values(heroClasses));