/**
 * Metadata of a keyword.
 */
export interface KeywordMetadata {
  id: number;
  value: string;
  label: string;
  cardTypes: number[];
}

const TELEPORT = {
  id: 1,
  value: "teleport",
  label: "Teleport",
  cardTypes: [1, 2, 4, 6],
}
const BRIBE = {
  id: 2,
  value: "bribe",
  label: "Bribe",
  cardTypes: [2, 3, 4],
}
const VERSATILE = {
  id: 3,
  value: "versatile",
  label: "Versatile",
  cardTypes: [1, 2],
}
const FOCUS = {
  id: 4,
  value: "focus",
  label: "Focus",
  cardTypes: [1],
}
const BURROW = {
  id: 5,
  value: "burrow",
  label: "Burrow",
  cardTypes: [4],
}
const COSMIC_THREAT = {
  id: 6,
  value: "cosmicthreat",
  label: "Cosmic Threat",
  cardTypes: [1, 2, 4],
}
const WALL_CRAWL = {
  id: 7,
  value: "wallcrawl",
  label: "Wall-Crawl",
  cardTypes: [1, 3, 4, 5],
}
const FEAST = {
  id: 8,
  value: "feast",
  label: "Feast",
  cardTypes: [1, 2, 3, 4],
}
const DEMOLISH = {
  id: 9,
  value: "demolish",
  label: "Demolish",
  cardTypes: [1, 2, 4],
}
const DODGE = {
  id: 10,
  value: "dodge",
  label: "Dodge",
  cardTypes: [1, 5],
}
const ELUSIVE = {
  id: 11,
  value: "elusive",
  label: "Elusive",
  cardTypes: [4],
}
const X_TREME_ATTACK = {
  id: 12,
  value: "xtremeattack",
  label: "X-Treme Attack",
  cardTypes: [2, 4],
}
const ARTIFACT = {
  id: 13,
  value: "artifact",
  label: "Artifact",
  cardTypes: [1, 2, 4],
}
const THROWN_ARTIFACT = {
  id: 14,
  value: "thrownartifact",
  label: "Thrown Artifact",
  cardTypes: [1, 2, 4],
}
const URU_ENCHANTED_WEAPONS = {
  id: 15,
  value: "uruenchantedweapons",
  label: "Uru-Enchanted Weapons",
  cardTypes: [2, 4],
}
const RISE_OF_THE_LIVING_DEAD = {
  id: 16,
  value: "riseofthelivingdead",
  label: "Rise of The Living Dead",
  cardTypes: [2, 3, 4, 5],
}
const CROSS_DIMENSIONAL_RAMPAGE = {
  id: 17,
  value: "crossdimensionalrampage",
  label: "Cross-Dimensional Rampage",
  cardTypes: [1, 2, 4, 5],
}
const SPECTRUM = {
  id: 18,
  value: "spectrum",
  label: "Spectrum",
  cardTypes: [1, 4],
}
const PATROL = {
  id: 19,
  value: "patrol",
  label: "Patrol",
  cardTypes: [1, 4, 6],
}
const CIRCLE_OF_KUNG_FU = {
  id: 20,
  value: "circleofkungfu",
  label: "Circle of Kung-Fu (and Quack-Fu)",
  cardTypes: [2, 4, 5],
}
const FATEFUL_RESURRECTION = {
  id: 21,
  value: "fatefulresurrection",
  label: "Fateful Resurrection",
  cardTypes: [2, 3, 4, 5],
}
const CHARGE = {
  id: 22,
  value: "charge",
  label: "Charge",
  cardTypes: [2, 4, 5],
}
const MAN_OUT_OF_TIME = {
  id: 23,
  value: "manoutoftime",
  label: "Man/Woman Out of Time",
  cardTypes: [1,2,4],
}
const SAVIOR = {
  id: 24,
  value: "savior",
  label: "Savior",
  cardTypes: [1, 2, 4],
}
const ABOMINATION = {
  id: 25,
  value: "abomination",
  label: "Abomination",
  cardTypes: [1, 2, 4, 5],
}
const SIZE_CHANGING = {
  id: 26,
  value: "sizechanging",
  label: "Size-Changing",
  cardTypes: [1, 2, 3, 4, 5, 6],
}
const PHASING = {
  id: 27,
  value: "phasing",
  label: "Phasing",
  cardTypes: [1],
}
const FORTIFY = {
  id: 28,
  value: "fortify",
  label: "Fortify",
  cardTypes: [1, 2, 4, 5],
}
const SHIELD_CLEARANCE = {
  id: 29,
  value: "shieldclearance",
  label: "S.H.I.E.L.D. Clearance",
  cardTypes: [2, 3, 4, 5],
}
const EXCESSIVE_VIOLENCE = {
  id: 30,
  value: "excessiveviolence",
  label: "Excessive Violence",
  cardTypes: [1, 4],
}
const REVENGE = {
  id: 31,
  value: "revenge",
  label: "Revenge",
  cardTypes: [2, 4, 5],
}
const INVESTIGATE = {
  id: 32,
  value: "investigate",
  label: "Investigate",
  cardTypes: [1, 2, 4, 5, 6],
}
const HIDDEN_WITNESS = {
  id: 33,
  value: "hiddenwitness",
  label: "Hidden Witness",
  cardTypes: [2, 4, 5],
}
const X_GENE = {
  id: 34,
  value: "xgene",
  label: "X-Gene",
  cardTypes: [1, 4],
}
const PIERCING_ENERGY = {
  id: 35,
  value: "piercingenergy",
  label: "Piercing Energy",
  cardTypes: [1],
}
const BERSERK = {
  id: 36,
  value: "berserk",
  label: "Berserk",
  cardTypes: [1, 6],
}
const SOARING_FLIGHT = {
  id: 37,
  value: "soaringflight",
  label: "Soaring Flight",
  cardTypes: [1, 3, 4],
}
const LIGHTSHOW = {
  id: 38,
  value: "lightshow",
  label: "Lightshow",
  cardTypes: [1],
}
const DOMINATE = {
  id: 39,
  value: "dominate",
  label: "Dominate",
  cardTypes: [2, 4],
}
const HUMAN_SHIELDS = {
  id: 40,
  value: "humanshield",
  label: "Human Shields",
  cardTypes: [2, 3, 4],
}
const DANGER_SENSE = {
  id: 41,
  value: "dangersense",
  label: "Danger Sense",
  cardTypes: [1, 2, 4],
}
const STRIKER = {
  id: 42,
  value: "striker",
  label: "Striker",
  cardTypes: [1, 2, 4, 5],
}
const COORDINATE = {
  id: 43,
  value: "coordinate",
  label: "Coordinate",
  cardTypes: [1],
}
const CHEERING_CROWDS = {
  id: 44,
  value: "cheeringcrowds",
  label: "Cheering Crowds",
  cardTypes: [1],
}
const TRANSFORM = {
  id: 45,
  value: "transform",
  label: "Transform",
  cardTypes: [1, 2],
}
const OUTWIT = {
  id: 46,
  value: "outwit",
  label: "Outwit",
  cardTypes: [1, 2, 3, 4],
}
const SMASH = {
  id: 47,
  value: "smash",
  label: "Smash",
  cardTypes: [1],
}
const WOUNDED_FURY = {
  id: 48,
  value: "woundedfury",
  label: "Wounded Fury",
  cardTypes: [1, 2, 4],
}
const CONQUEROR = {
  id: 49,
  value: "conqueror",
  label: "Conqueror",
  cardTypes: [1, 2, 3, 4],
}
const MICROSCOPIC_SIZE_CHANGING = {
  id: 50,
  value: "microscopicsizechanging",
  label: "Microscopic Size-Changing",
  cardTypes: [1, 2, 3, 4],
}
const EMPOWERED = {
  id: 51,
  value: "empowered",
  label: "Empowered",
  cardTypes: [1, 2, 3, 4, 5],
}
const CHIVALROUS_DUEL = {
  id: 52,
  value: "chivalrousduel",
  label: "Chivalrous Duel",
  cardTypes: [2, 4, 5],
}
const SYMBIOTE_BONDS = {
  id: 53,
  value: "symbiotebonds",
  label: "Symbiote Bonds",
  cardTypes: [2, 4, 5],
}
const DIGEST = {
  id: 54,
  value: "digest",
  label: "Digest",
  cardTypes: [1],
}
const INDIGESTION = {
  id: 55,
  value: "indigestion",
  label: "Indigestion",
  cardTypes: [1],
}
const SWITCHEROO = {
  id: 56,
  value: "switcheroo",
  label: "Switcheroo",
  cardTypes: [1],
}
const HYPERSPEED = {
  id: 57,
  value: "hyperspeed",
  label: "Hyperspeed",
  cardTypes: [1, 6],
}
const DARK_MEMORIES = {
  id: 58,
  value: "darkmemories",
  label: "Dark Memories",
  cardTypes: [1, 2, 4],
}
const LAST_STAND = {
  id: 59,
  value: "laststand",
  label: "Last Stand",
  cardTypes: [1, 4],
}
const UNDERCOVER = {
  id: 60,
  value: "undercover",
  label: "Undercover",
  cardTypes: [1, 2, 4, 5],
}
const SHIELD_LEVEL = {
  id: 61,
  value: "shieldlevel",
  label: "S.H.I.E.L.D. Level",
  cardTypes: [1],
}
const HYDRA_LEVEL = {
  id: 62,
  value: "hydralevel",
  label: "Hydra Level",
  cardTypes: [2, 4, 5],
}
const WORTHY = {
  id: 63,
  value: "worthy",
  label: "Worthy",
  cardTypes: [1, 4, 5],
}
const MOONLIGHT_SUNLIGHT = {
  id: 64,
  value: "moonlightsunlight",
  label: "Moonlight and Sunlight",
  cardTypes: [1, 2, 4, 5],
}
const WAKING_NIGHTMARE = {
  id: 65,
  value: "wakingnightmare",
  label: "Waking Nightmare",
  cardTypes: [1, 2, 4],
}
const BURN_SHARDS = {
  id: 66,
  value: "burnshards",
  label: "Burn Shards",
  cardTypes: [1, 3],
}
const CELESTIAL_BOON = {
  id: 67,
  value: "celestialboon",
  label: "Celestial Boon",
  cardTypes: [4],
}
const CONTEST_OF_CHAMPIONS = {
  id: 68,
  value: "contestofchampions",
  label: "Contest of Champions",
  cardTypes: [1, 2, 4, 5],
}
const WHEN_RECRUITED = {
  id: 69,
  value: "whenrecruited",
  label: "“When Recruited“ Abilities",
  sortLabel: "When Recruited Abilities",
  cardTypes: [1],
}
const THRONES_FAVOR = {
  id: 70,
  value: "thronesfavor",
  label: "Throne's Favor",
  cardTypes: [1, 2, 4, 5],
}
const MOMENTUM = {
  id: 71,
  value: "momentum",
  label: "Momentum",
  cardTypes: [2, 4],
}
const CLONE = {
  id: 72,
  value: "clone",
  label: "Clone",
  cardTypes: [1, 3, 4, 5, 6],
}
const SHATTER = {
  id: 73,
  value: "shatter",
  label: "Shatter",
  cardTypes: [1, 2, 4, 6],
}
const PREY = {
  id: 74,
  value: "prey",
  label: "Prey",
  cardTypes: [2, 4],
}
const TACTICAL_FORMATION = {
  id: 75,
  value: "tacticalformation",
  label: "Tactical Formation",
  cardTypes: [1],
}
const ASTRAL_PLANE = {
  id: 76,
  value: "astralplane",
  label: "Astral Plane",
  cardTypes: [1, 2, 4, 5],
}
const DEMONIC_BARGAIN = {
  id: 77,
  value: "demonicbargain",
  label: "Demonic Bargain",
  cardTypes: [1, 2, 4, 5],
}
const RITUAL_ARTIFACT = {
  id: 78,
  value: "ritualartifact",
  label: "Ritual Artifact",
  cardTypes: [1, 5],
}
const TRIGGERED_ARTIFACT = {
  id: 79,
  value: "triggeredartifact",
  label: "Triggered Artifact",
  cardTypes: [1, 2, 4],
}
const EXCESSIVE_KINDNESS = {
  id: 80,
  value: "excessivekindness",
  label: "Excessive Kindness",
  cardTypes: [1],
}
const COMMAND = {
  id: 81,
  value: "command",
  label: "Command",
  cardTypes: [4],
}
const VILLAINOUS_WEAPONS = {
  id: 82,
  value: "villainousweapons",
  label: "Villainous Weapons",
  cardTypes: [2, 4],
}
const AMBUSH = {
  id: 83,
  value: "ambush",
  label: "Ambush",
  title: "Ambush Abilities on Heroes",
  cardTypes: [1],
}
const UNLEASH = {
  id: 84,
  value: "unleash",
  label: "Unleash",
  title: "Unleash from Undercover",
  cardTypes: [1, 4, 5],
}
const WHEN_RECRUITED_UDERCOVER = {
  id: 85,
  value: "whenrecruitedundercover",
  label: "When Recruited: Send This Undercover",
  cardTypes: [1],
}
const SACRIFICE = {
  id: 86,
  value: "sacrifice",
  label: "Sacrifice",
  cardTypes: [1],
}
const ENDGAME = {
  id: 87,
  value: "endgame",
  label: "Endgame",
  cardTypes: [1, 2, 4],
}
const BLOOD_FRENZY = {
  id: 88,
  value: "bloodfrenzy",
  label: "Blood Frenzy",
  cardTypes: [1, 4, 5],
}
const HUNT_FOR_VICTIMS = {
  id: 89,
  value: "huntforvictims",
  label: "Hunt for Victims",
  cardTypes: [1, 2, 4, 5],
}
const HAUNT = {
  id: 90,
  value: "haunt",
  label: "Haunt",
  cardTypes: [2, 4],
}
const WHAT_IF = {
  id: 91,
  value: "whatif",
  label: "What If...?",
  cardTypes: [1],
}
const LIBERATE = {
  id: 92,
  value: "liberate",
  label: "Liberate",
  cardTypes: [1, 3],
}
const SOULBIND = {
  id: 93,
  value: "soulbind",
  label: "Soulbind",
  cardTypes: [1, 2, 4],
}
const HEIST = {
  id: 94,
  value: "heist",
  label: "Heist",
  cardTypes: [1, 4, 5],
}
const ANTICS = {
  id: 95,
  value: "antics",
  label: "Antics",
  cardTypes: [1],
}
const EXPLORE = {
  id: 96,
  value: "explore",
  label: "Explore",
  cardTypes: [1, 3, 4],
}
const DOUBLE_CROSS = {
  id: 97,
  value: "doublecross",
  label: "Double-Cross",
  cardTypes: [2, 4],
}
const CYBER_MOD = {
  id: 98,
  value: "cybermod",
  label: "Cyber-Mod",
  cardTypes: [1, 2, 4],
}
const FATED_FUTURE = {
  id: 99,
  value: "fatedfuture",
  label: "Fated Future",
  cardTypes: [1],
}
const FIGHT_OR_FAIL = {
  id: 100,
  value: "fightorfail",
  label: "Fight or Fail",
  cardTypes: [4],
}
const NONE = {
  id: -1,
  value: "none",
  label: " NONE",
  cardTypes: [1, 2, 3, 4],
}

export interface KeywordMetadataMap {
  [key: string]: KeywordMetadata;
}

/**
 * Object with the metadata of keywords.
 */
export const keywords: Readonly<KeywordMetadataMap> = Object.freeze({
  TELEPORT,                   // 01 done
  BRIBE,                      // 02 done
  VERSATILE,                  // 03 done
  FOCUS,                      // 04 done
  BURROW,                     // 05 done
  COSMIC_THREAT,              // 06 done
  WALL_CRAWL,                 // 07 done
  FEAST,                      // 08 done
  DEMOLISH,                   // 09 done
  DODGE,                      // 10 done
  ELUSIVE,                    // 11 done
  X_TREME_ATTACK,             // 12 done
  ARTIFACT,                   // 13 done
  THROWN_ARTIFACT,            // 14 done
  URU_ENCHANTED_WEAPONS,      // 15 done
  RISE_OF_THE_LIVING_DEAD,    // 16 done
  CROSS_DIMENSIONAL_RAMPAGE,  // 17 done
  SPECTRUM,                   // 18 done
  PATROL,                     // 19 done
  CIRCLE_OF_KUNG_FU,          // 20 done
  FATEFUL_RESURRECTION,       // 21 done
  CHARGE,                     // 22 done
  MAN_OUT_OF_TIME,            // 23 done
  SAVIOR,                     // 24 done
  ABOMINATION,                // 25 done
  SIZE_CHANGING,              // 26 done
  PHASING,                    // 27 done
  FORTIFY,                    // 28 done
  SHIELD_CLEARANCE,           // 29 done
  EXCESSIVE_VIOLENCE,         // 30 done
  REVENGE,                    // 31 done
  INVESTIGATE,                // 32 done
  HIDDEN_WITNESS,             // 33 done
  X_GENE,                     // 34 done
  PIERCING_ENERGY,            // 35 done
  BERSERK,                    // 36 done
  SOARING_FLIGHT,             // 37 done
  LIGHTSHOW,                  // 38 done
  DOMINATE,                   // 39 done
  HUMAN_SHIELDS,              // 40 done
  DANGER_SENSE,               // 41 done
  STRIKER,                    // 42 done
  COORDINATE,                 // 43 done
  CHEERING_CROWDS,            // 44 done
  TRANSFORM,                  // 45 done
  OUTWIT,                     // 46 done
  SMASH,                      // 47 done
  WOUNDED_FURY,               // 48 done
  CONQUEROR,                  // 49 done
  MICROSCOPIC_SIZE_CHANGING,  // 50 done
  EMPOWERED,                  // 51 done
  CHIVALROUS_DUEL,            // 52 done
  SYMBIOTE_BONDS,             // 53 done
  DIGEST,                     // 54 done
  INDIGESTION,                // 55 done
  SWITCHEROO,                 // 56 done
  HYPERSPEED,                 // 57 done
  DARK_MEMORIES,              // 58 done
  LAST_STAND,                 // 59 done
  UNDERCOVER,                 // 60 done
  SHIELD_LEVEL,               // 61 done
  HYDRA_LEVEL,                // 62 done
  WORTHY,                     // 63 done
  MOONLIGHT_SUNLIGHT,         // 64 done
  WAKING_NIGHTMARE,           // 65 done
  BURN_SHARDS,                // 66 done
  CELESTIAL_BOON,             // 67 done
  CONTEST_OF_CHAMPIONS,       // 68 done
  WHEN_RECRUITED,             // 69 done
  THRONES_FAVOR,              // 70 done
  MOMENTUM,                   // 71 done
  CLONE,                      // 72 done
  SHATTER,                    // 73 done
  PREY,                       // 74 done
  TACTICAL_FORMATION,         // 75 done
  ASTRAL_PLANE,               // 76 done
  DEMONIC_BARGAIN,            // 77 done
  RITUAL_ARTIFACT,            // 78 done
  TRIGGERED_ARTIFACT,         // 79 done
  EXCESSIVE_KINDNESS,         // 80 done
  COMMAND,                    // 81 done
  VILLAINOUS_WEAPONS,         // 82 done
  AMBUSH,                     // 83 done
  UNLEASH,                    // 84 done
  WHEN_RECRUITED_UDERCOVER,   // 85 done
  SACRIFICE,                  // 86 done
  ENDGAME,                    // 87 done
  BLOOD_FRENZY,               // 88 done
  HUNT_FOR_VICTIMS,           // 89 done
  HAUNT,                      // 90 done
  WHAT_IF,                    // 91 done
  LIBERATE,                   // 92 done
  SOULBIND,                   // 93 done
  HEIST,                      // 94 done
  ANTICS,                     // 95 done
  EXPLORE,                    // 96 done
  DOUBLE_CROSS,               // 97 done
  CYBER_MOD,                  // 98 done
  FATED_FUTURE,               // 99 done
  FIGHT_OR_FAIL,              // 100 done
  NONE,                       // -1
});

/**
 * Array with the metadata of keywords. The first item corresponds to id one and it represents the keyword teleport.
 */
export const keywordsArray: Readonly<KeywordMetadata[]> = Object.freeze(Object.values(keywords));