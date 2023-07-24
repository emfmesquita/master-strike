import { getSets, setIdToLabel } from ".";
import { CardSetDef, BystanderDef, OopHeroCardDef, BystanderCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, CardSearchResult, BystanderCardDetails, OopHeroDetails } from "../cardSearchTypes";
import { toHeroCardDetails } from "./heroProcessor";

export const processBystander = (addCard: (card: CardSearchResult) => void, bystander: BystanderDef, set: CardSetDef) => {
  bystander.cards?.forEach(card => {
    let details: BystanderCardDetails | OopHeroDetails;
    const oopHero = card as OopHeroCardDef;
    const bystanderCard = card as BystanderCardDef;
    if(oopHero && oopHero.overrideType === 1) {
      details = toHeroCardDetails(oopHero, CardDetailsType.OopHeroDetails) as OopHeroDetails;
    } else {
      details = {
        detailsType: CardDetailsType.BystanderCardDetail,
        qtd: bystanderCard.qtd,
        vp: bystander.vp + '',
        description: bystanderCard.abilities,
      } as BystanderCardDetails;
    }

    getSets(set.id, bystander.set).forEach(setId => {
      addCard({
        name: bystander.name,
        subtitle: Subtitles.bystanderSubtitle(card),
        imageUrl: card.imageUrl || bystander.imageUrl || '',
        set: setIdToLabel(setId),
        type: CardType.Bystander,
        group: 'Bystanders',
        details,
      });

    });
  });
}