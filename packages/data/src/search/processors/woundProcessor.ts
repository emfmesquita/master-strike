import { getSets, setIdToLabel } from ".";
import { CardSetDef, WoundCardDef, WoundDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, CardSearchResult, WoundCardDetails } from "../cardSearchTypes";

export const processWound = (addCard: (card: CardSearchResult) => void, wound: WoundDef, set: CardSetDef) => {
  wound.cards?.forEach(card => {
    const woundCard = card as WoundCardDef;
    const details = {
      detailsType: CardDetailsType.WoundCardDetail,
      qtd: woundCard.qtd,
      description: woundCard.abilities,
    } as WoundCardDetails;

    if(card.cost !== undefined) details.cost = card.cost.toString();
    if(card.attack !== undefined) details.attack = card.attack;
    if(card.recruit !== undefined) details.recruit = card.recruit;

    getSets(set.id, wound.set).forEach(setId => {
      addCard({
        name: wound.name,
        subtitle: Subtitles.woundSubtitle(card),
        imageUrl: card.imageUrl || wound.imageUrl || '',
        set: setIdToLabel(setId),
        type: CardType.Wound,
        group: 'Wounds',
        details,
      });
    });
  });
}