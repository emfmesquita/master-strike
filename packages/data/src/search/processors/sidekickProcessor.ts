import { getSets, setIdToLabel } from ".";
import { CardSetDef, SidekickCardDef, SidekickDef } from "../../definitions/cardTypes";
import { CardDetailsType, CardType, CardSearchResult, SidekickDetails } from "../cardSearchTypes";

export const processSidekick = (addCard: (card: CardSearchResult) => void, sidekick: SidekickDef, set: CardSetDef) => {
  sidekick.cards?.forEach(card => {
    const sidekickCard = card as SidekickCardDef;
    const details = {
      detailsType: CardDetailsType.SidekickCardDetail,
      qtd: sidekickCard.qtd,
      description: sidekickCard.abilities,
      cost: card.cost.toString()
    } as SidekickDetails;
    
    if(card.attack !== undefined) details.attack = card.attack;
    if(card.recruit !== undefined) details.recruit = card.recruit;

    getSets(set.id, sidekick.set).forEach(setId => {
      addCard({
        name: sidekick.name,
        subtitle: card.subtitle ?? "",
        imageUrl: card.imageUrl || sidekick.imageUrl || '',
        set: setIdToLabel(setId),
        type: CardType.Sidekick,
        group: 'Sidekicks',
        details,
      });
    });
  });
}