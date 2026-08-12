import { getSets, setIdToLabel } from ".";
import { CardSetDef, OfficerCardDef, OfficerDef } from "../../definitions/cardTypes";
import { CardDetailsType, CardType, CardSearchResult, OfficerCardDetails } from "../cardSearchTypes";

export const processOfficer = (addCard: (card: CardSearchResult) => void, officer: OfficerDef, set: CardSetDef) => {
  officer.cards?.forEach(card => {
    const officerCard = card as OfficerCardDef;
    const details = {
      detailsType: CardDetailsType.OfficerCardDetail,
      qtd: officerCard.qtd,
      description: officerCard.abilities,
      cost: card.cost.toString()
    } as OfficerCardDetails;
    
    if(card.attack !== undefined) details.attack = card.attack;
    if(card.recruit !== undefined) details.recruit = card.recruit;

    getSets(set.id, officer.set).forEach(setId => {
      addCard({
        name: officer.name,
        subtitle: card.subtitle ?? "",
        imageUrl: card.imageUrl || officer.imageUrl || '',
        set: setIdToLabel(setId),
        type: CardType.Officer,
        group: 'Officers',
        details,
      });
    });
  });
}