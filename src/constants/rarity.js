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
    COMMON,     // 1
    UNCOMMON,   // 2
    RARE        // 3
});

export const rarityArray = Object.freeze(Object.values(rarity));