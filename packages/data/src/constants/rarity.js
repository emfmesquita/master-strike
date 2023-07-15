const COMMON = {
    value: "common",
    qtdLabel: "Common (5 cards)",
    label: "Common"
};
const UNCOMMON = {
    value: "uncommon",
    qtdLabel: "Uncommon (3 cards)",
    label: "Uncommon"
};
const RARE = {
    value: "rare",
    qtdLabel: "Rare (1 card)",
    label: "Rare"
};

export const rarity = Object.freeze({
    COMMON,     // 1
    UNCOMMON,   // 2
    RARE        // 3
});

export const rarityArray = Object.freeze(Object.values(rarity));