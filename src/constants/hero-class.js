const COVERT = {
    value: "covert",
    label: "Covert",
    bgColor: "#ffb3b3"
};
const INSTINCT = {
    value: "instinct",
    label: "Instinct",
    bgColor: "#ffffcc"
};
const RANGED = {
    value: "ranged",
    label: "Ranged",
    bgColor: "#c2d1f0"
};
const STRENGTH = {
    value: "strength",
    label: "Strength",
    bgColor: "#c6ecd9"
};
const TECH = {
    value: "tech",
    label: "Tech",
    bgColor: "#d9d9d9"
};
const NONE = {
    bgColor: "#ffffff"
};

export const heroClass = Object.freeze({
    COVERT,
    INSTINCT,
    RANGED,
    STRENGTH,
    TECH
});

export const heroClassArray = Object.freeze([
    NONE,
    COVERT,
    INSTINCT,
    RANGED,
    STRENGTH,
    TECH
]);