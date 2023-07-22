import { getSetLabel } from ".";
import { CardSetDef, HenchmanDef, HenchmanCardDef, OopHeroCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, HenchmanCardDetails, OopHeroDetails, CardSearchResult } from "../cardSearchTypes";
import { toHeroCardDetails } from "./heroProcessor";

export const processHenchman = (addCard: (card: CardSearchResult) => void, henchman: HenchmanDef, set: CardSetDef) => {
  henchman.cards?.forEach(card => {
    let details: HenchmanCardDetails | OopHeroDetails;
    const oopHero = card as OopHeroCardDef;
    const henchmanCard = card as HenchmanCardDef;
    if(oopHero && oopHero.overrideType === 1) {
      details = toHeroCardDetails(oopHero, CardDetailsType.OopHeroDetails) as OopHeroDetails;
    } else {
      details = {
        detailsType: CardDetailsType.HenchmanCardDetails,
        vAttack: (henchman.vAttack || '') + (henchmanCard.vAttackAsterisk ? '*' : ''),
        vp: henchman.vp + '',
        description: card.abilities,
      } as HenchmanCardDetails;
    }

    addCard({
      name: card.name || henchman.name,
      subtitle: Subtitles.henchmanSubtitle(card, henchman, set.id),
      imageUrl: card.imageUrl || henchman.imageUrl || '',
      set: getSetLabel(set.id, henchman.set),
      type: CardType.Henchmen,
      group: henchman.name,
      details,
    });
  });
}