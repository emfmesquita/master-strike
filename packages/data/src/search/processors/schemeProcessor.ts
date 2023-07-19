import { getSetLabel } from ".";
import { CardSetDef, OopMastermindCardDef, SchemeDef, SchemeCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, OopMastermindDetails, SchemeCardDetails, CardSearchResult } from "../cardSearchTypes";
import { toMastermindCardDetails } from "./mastermindProcessor";


export const processScheme = (addCard: (card: CardSearchResult) => void, scheme: SchemeDef, set: CardSetDef) => {
  scheme.cards?.forEach(card => {
    let details: SchemeCardDetails | OopMastermindDetails;
    const oopMM = card as OopMastermindCardDef;
    const schemeCard = card as SchemeCardDef;
    if(oopMM && oopMM.overrideType === 2) {
      details = toMastermindCardDetails(oopMM, CardDetailsType.OopMastermindDetails) as OopMastermindDetails;
    } else {
      details = {
        detailsType: CardDetailsType.SchemeCardDetail,
        transformed: schemeCard.transformed,
        veiled: schemeCard.veiled,
        unveiled: schemeCard.unveiled,
        description: schemeCard.abilities,
      } as SchemeCardDetails;
    }

    addCard({
      name: card.name || scheme.name,
      subtitle: Subtitles.schemeSubtitle(card, set.id),
      imageUrl: '',
      set: getSetLabel(set.id),
      type: CardType.Scheme,
      group: scheme.name,
      details,
    });
  });
}