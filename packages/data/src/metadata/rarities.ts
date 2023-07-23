/**
 * Metadata of a card rarity.
 */
export interface RarityMetadata {
    id: number,
    value: string;
    label: string;
    qtdLabel: string;
}

const COMMON = {
    id: 1,
    value: "common",
    qtdLabel: "Common (5 cards)",
    label: "Common"
};
const UNCOMMON = {
    id: 2,
    value: "uncommon",
    qtdLabel: "Uncommon (3 cards)",
    label: "Uncommon"
};
const RARE = {
    id: 3,
    value: "rare",
    qtdLabel: "Rare (1 card)",
    label: "Rare"
};

export interface RarityMetadataMap {
    [key: string]: RarityMetadata;
}

/**
 * Object with the metadata of card rarities.
 */
export const rarities: Readonly<RarityMetadataMap> = Object.freeze({
    COMMON,     // 1
    UNCOMMON,   // 2
    RARE        // 3
});

/**
 * Array with the metadata of card rarities. The first item corresponds to id one and it represents a common card.
 */
export const raritiesArray: Readonly<RarityMetadata[]> = Object.freeze(Object.values(rarities));