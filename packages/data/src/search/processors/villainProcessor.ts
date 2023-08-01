import { setIdToLabel } from ".";
import { CardSetDef, OopHeroCardDef, VillainDef, VillainCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, OopHeroDetails, CardSearchResult, VillainCardDetails } from "../cardSearchTypes";
import { toHeroCardDetails } from "./heroProcessor";

const vAttack = (card: VillainCardDef | OopHeroCardDef) => (card.vAttack || '') + (card.vAttackAsterisk ? '*' : '');

export const toVillainCardDetails = (card: VillainCardDef, detailsType: CardDetailsType): VillainCardDetails => {
  const vp = card.vp + '';
  return {
    detailsType,
    qtd: card.qtd,
    vAttack: vAttack(card),
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
      details = {
        ...toHeroCardDetails(oopHero, CardDetailsType.OopHeroDetails),
        vAttack: vAttack(card),
      } as OopHeroDetails;
    } else {
      details = toVillainCardDetails(villainCard, CardDetailsType.VillainCardDetails);
    }
    
    addCard({
      name: card.name,
      subtitle: Subtitles.villainSubtitle(card, villain, set.id),
      imageUrl: card.imageUrl || '',
      set: setIdToLabel(set.id),
      type: CardType.Villain,
      group: villain.name,
      details,
    });
  });
}