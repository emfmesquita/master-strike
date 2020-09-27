const HERO = {
    id: 1,
    value: "heroes",
    label: "Hero",
};
const MASTERMIND = {
    id: 2,
    value: "masterminds",
    label: "Mastermind",
};
const HENCHMEN_VILLAIN = {
    id: 3,
    label: "Henchmen Villain",
};
const VILLAIN = {
    id: 4,
    label: "Villain",
};
const SCHEME = {
    id: 5,
    label: "Scheme",
};
const BYSTANDER = {
    id: 6,
    label: "Bystander",
};

export const cardTypes = Object.freeze({
    HERO,
    MASTERMIND,
    HENCHMEN_VILLAIN,
    VILLAIN,
    SCHEME,
    BYSTANDER
});

export const cardTypesArray = Object.freeze([
    HERO,               // 1
    MASTERMIND,         // 2
    HENCHMEN_VILLAIN,   // 3
    VILLAIN,            // 4
    SCHEME,             // 5
    BYSTANDER           // 6
]);