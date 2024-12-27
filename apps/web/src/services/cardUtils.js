import { Metadata, SetDefinitions, Subtitles } from "@master-strike/data";

const toNumber = (value) => {
  if (!value) return -1;
  const safeValue = value.replace(/[+*]*/ig, '').replace('½', '.5');
  const number = Number.parseFloat(safeValue);
  return Number.isNaN(number) ? -1 : number;
}

const GROUP_CACHE = {}

const abilitiesToText = abilities => {
  if(!abilities) return "";
  const textTokens = [];
  const append = value => textTokens.push((value+"").trim());

  abilities.forEach(ability => {
    if(Array.isArray(ability)) append(abilitiesToText(ability))
    else if(typeof ability === "string") append(ability);
    else if(ability.bold) append(ability.bold);
    else if(ability.italic) append(ability.italic);
    else if(ability.hc) append(Metadata.heroClassesArray[ability.hc].label);
    else if(ability.team) append(Metadata.teamsArray[ability.team].label);
    else if(ability.icon) append(Metadata.iconsArray[ability.icon - 1].label);
    else if(ability.keyword) append(ability.text || Metadata.keywordsArray[ability.keyword - 1].label);
    else if(ability.rule) append(ability.text || Metadata.rulesArray[ability.rule - 1].label);
  });
  return textTokens.join(" ");
}

/**
 * Calculates the total number of cards of an array of cards.
 * @param {*} cards 
 */
export const numberOfCards = cards => cards.reduce((total, card) => {
  // card is disabled (filtered on a search) or the second half of divided card nothing is added to total
  if(card.disabled || card.divided === 2) return total;

  if(card.qtd) {
    return total + card.qtd;
  }

  // otherwise adds a value to total depending of the card rarity
  if(card.rarity === 1) return total + 5;
  if(card.rarity === 2) return total + 3;
  return total + 1;
}, 0);

/**
 * Calculates text width in pixels.
 * @param {*} text 
 * @param {*} font 
 */
export const getTextWidth = (text, font) => {
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

/**
 * Paginates an array of cards.
 * @param {*} cards 
 * @param {*} pageSize 
 */
export const paginate = (cards, pageSize) => {
  const numberOfPages = Math.ceil(cards.length / pageSize);
  const pages = [];
  for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
    const page = [];
    for (let column = 0; column < pageSize; column++) {
      const card = cards[pageNumber * pageSize + column];
      if(card) page.push(card);
    }
    pages.push(page);
  }
  return pages;
}

/**
 * Calculates the sum of VP of a list of cards.
 * @param {*} cards 
 * @returns 
 */
export const maxVP = cards => cards.reduce((total, card) => {
  // card is the second half of divided card nothing is added to total
  if(card.divided === 2) return total;
  if(!card.vpNum || card.vpNum <= 0) return total;

  // get the card qtd
  let qtd = 1;
  if(card.qtd) {
    qtd = card.qtd;
  } else {
    // gets the qtd from rarity
    if(card.rarity === 1) qtd = 5;
    if(card.rarity === 2) qtd = 3;
    if(card.rarity === 3) qtd = 1;
  }
  
  return total + qtd * card.vpNum;
}, 0);

const processHero = (card, group) => {
  card.team = card.team !== undefined ? card.team : group.team;
  card.attackNum = toNumber(card.attack);
  card.recruitNum = toNumber(card.recruit);
  card.attackText = card.attack ? card.attack + "" : "";
  card.recruitText = card.recruit ? card.recruit + "" : "";
  card.piercingText = card.piercing ? card.piercing + "" : "";
  card.costText = card.costAsterisk ? card.cost + "*" : card.cost + "";
}

const processVillain = (card, group) => {
  card.vAttack = card.vAttack || group.vAttack;
  card.vAttackNum = toNumber(card.vAttack);

  const vAttackText  = card.vAttack ? card.vAttack + "" : "";
  const sufix = card.vAttackAsterisk && !vAttackText.includes("*") ? "*" : "";
  card.vAttackText = card.vAttackHideValue ? sufix : vAttackText + sufix;

  card.vp = card.vp || group.vp;
  card.vpText = card.vp ? card.vp + "" : "";
  card.vpNum = toNumber(card.vpText);

  if(card.overrideType === Metadata.cardTypes.HERO.id) {
    card.cost = card.vAttack;
    if(card.vAttackAsterisk) card.costAsterisk = true;
    processHero(card, group);
  }
}

const processSet = (card, group) => {
  if(!group.set) return;
  if(Array.isArray(group.set)) {
    card.set = group.set[0];
    card.set2 = group.set[1];
  } else {
    card.set = group.set;
  }
}

/**
 * Process card properties used both to display them and on search/filter.
 * @param {*} cardType 
 * @param {*} card 
 * @param {*} group 
 */
const processCard = (cardType, card, group) => {
  card.groupId = group.id;
  card.uid = `${group.id}_${card.name}`;
  card.type = cardType.id;
  card.abilitiesText = abilitiesToText(card.abilities);

  if(Metadata.cardTypes.HERO === cardType) {
    card.team = card.team !== undefined ? card.team : group.team;
    card.subtitle = Subtitles.heroSubtitle(card, group);
    card.type
    processHero(card, group);
  }

  if(Metadata.cardTypes.MASTERMIND === cardType) {
    processVillain(card, group);
    card.subtitle = Subtitles.mastermindSubtitle(card, group, group.set);
  }

  if(Metadata.cardTypes.VILLAIN === cardType) {
    processVillain(card, group);
    card.name = card.name || group.name;
    card.subtitle = Subtitles.villainSubtitle(card, group, group.set);
  }

  if(Metadata.cardTypes.HENCHMEN === cardType) {
    processVillain(card, group);
    processSet(card, group);
    card.name = card.name || group.name;
    card.subtitle = Subtitles.henchmanSubtitle(card, group, group.set);
  }

  if(Metadata.cardTypes.SCHEME === cardType) {
    processSet(card, group);
    card.name = card.name || group.name;
    card.subtitle = Subtitles.schemeSubtitle(card, group.set);

    if(card.overrideType === Metadata.cardTypes.MASTERMIND.id) {
      processVillain(card, group);
    }
  }

  if(Metadata.cardTypes.BYSTANDER === cardType) {
    processSet(card, group);
    card.name = card.name || group.name;
    card.subtitle = Subtitles.bystanderSubtitle(card);

    card.vp = card.vp || group.vp;
    card.vpText = card.vp ? card.vp + "" : "";
    card.vpNum = toNumber(card.vpText);
    card.type = 6;

    if(card.overrideType === Metadata.cardTypes.HERO.id) {
      processHero(card, group);
    }
  }

  if(Metadata.cardTypes.WOUND === cardType) {
    processSet(card, group);
    card.name = card.name || group.name;
    card.subtitle = Subtitles.woundSubtitle(card);
    card.type = 7;
  }

  return card.subtitle;
}

const processCardGroups = cardType => {
  if(GROUP_CACHE[cardType.id]) return GROUP_CACHE[cardType.id];

  let allGroups = [];
  Object.values(SetDefinitions).forEach(setData => {
    const setGroups = setData[cardType.value];
    if(setGroups && setGroups.length) {
      setGroups.forEach(group => {
        if(!group.set) group.set = setData.id
      });
      allGroups = allGroups.concat(setGroups);
    }
  });

  allGroups = allGroups.filter(g => g.id >= 0);
  allGroups.forEach(group => {
    const cards = group.cards || [];
    cards.forEach(card => processCard(cardType, card, group));
  });

  GROUP_CACHE[cardType.id] = allGroups;
  return allGroups;
};

export const getAllHeroes = () => {
  return processCardGroups(Metadata.cardTypes.HERO);
};

export const getAllMasterminds = () => {
  return processCardGroups(Metadata.cardTypes.MASTERMIND);
};

export const getAllVillains = () => {
  return processCardGroups(Metadata.cardTypes.VILLAIN);
};

export const getAllHenchmen = () => {
  return processCardGroups(Metadata.cardTypes.HENCHMEN);
}
export const getAllSchemes = () => {
  return processCardGroups(Metadata.cardTypes.SCHEME);
}

export const getAllBystanders = () => {
  return processCardGroups(Metadata.cardTypes.BYSTANDER);
}

export const getAllWounds = () => {
  return processCardGroups(Metadata.cardTypes.WOUND);
}