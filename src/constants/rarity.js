const COMMON = {
    value: "common",
    label: "Common (5 cards)"
};
const UNCOMMON = {
    value: "uncommon",
    label: "Uncommon (3 cards)"
};
const RARE = {
    value: "rare",
    label: "Rare (1 card)"
};

export const rarity = Object.freeze({
    COMMON,
    UNCOMMON,
    RARE
});

export const rarityArray = Object.freeze([
    {},
    COMMON,
    UNCOMMON,
    RARE
]);