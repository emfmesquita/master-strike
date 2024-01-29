import { setIdToLabel } from ".";
import { CardSetDef, OopHeroCardDef, VillainDef, VillainCardDef, OopSchemeCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, OopHeroDetails, CardSearchResult, VillainCardDetails, OopSchemeDetails } from "../cardSearchTypes";
import { toHeroCardDetails } from "./heroProcessor";
import { toSchemeCardDetails } from "./schemeProcessor";

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
    let details: VillainCardDetails | OopHeroDetails | OopSchemeDetails;
    const villainCard = card as VillainCardDef;
    const oopHero = card as OopHeroCardDef;
    const oopScheme = card as OopSchemeCardDef;
    if(oopHero && oopHero.overrideType === 1) {
      details = {
        ...toHeroCardDetails(oopHero, CardDetailsType.OopHeroDetails),
        vAttack: vAttack(oopHero),
      } as OopHeroDetails;
    } else if(oopScheme && oopScheme.overrideType === 5) {
      details = {
        ...toSchemeCardDetails(oopScheme, CardDetailsType.OopSchemeDetails),
        ambush: oopScheme.ambush,
      } as OopSchemeDetails;
    } else {
      details = toVillainCardDetails(villainCard, CardDetailsType.VillainCardDetails);
    }
    
    addCard({
      name: card.name ?? '',
      subtitle: Subtitles.villainSubtitle(card, villain, set.id),
      imageUrl: card.imageUrl || '',
      set: setIdToLabel(set.id),
      type: CardType.Villain,
      group: villain.name,
      details,
    });
  });
}