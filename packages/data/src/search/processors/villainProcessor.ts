import { getSetLabel } from ".";
import { CardSetDef, OopHeroCardDef, VillainDef, VillainCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, OopHeroDetails, CardSearchResult, VillainCardDetails } from "../cardSearchTypes";
import { toHeroCardDetails } from "./heroProcessor";

export const toVillainCardDetails = (card: VillainCardDef, detailsType: CardDetailsType): VillainCardDetails => {
  const vp = card.vp + '';
  return {
    detailsType,
    qtd: card.qtd,
    vAttack: (card.vAttack || '') + (card.vAttackAsterisk ? '*' : ''),
    vp: (!card.vp || vp === '-1' ? '' : vp),
    description: card.abilities,
  };
}

export const processVillain = (addCard: (card: CardSearchResult) => void, villain: VillainDef, set: CardSetDef) => {
  villain.cards?.forEach(card => {
    let details: VillainCardDetails | OopHeroDetails;
    const villainCard = card as VillainCardDef;
    const oopHero = card as OopHeroCardDef;
    if(oopHero && oopHero.overrideType === 1) {
      details = toHeroCardDetails(oopHero, CardDetailsType.OopHeroDetails) as OopHeroDetails;
    } else {
      details = toVillainCardDetails(villainCard, CardDetailsType.VillainCardDetails);
    }
    
    addCard({
      name: card.name,
      subtitle: Subtitles.villainSubtitle(card, villain, set.id),
      imageUrl: card.imageUrl || '',
      set: getSetLabel(set.id),
      type: CardType.Villain,
      group: villain.name,
      details,
    });
  });
}