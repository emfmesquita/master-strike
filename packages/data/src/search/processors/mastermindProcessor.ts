import { getSetLabel } from ".";
import { CardSetDef, MastermindDef, MastermindCardDef, OopHeroCardDef, OopVillainCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, MastermindCardDetails, OopHeroDetails, OopVillainDetails, CardSearchResult } from "../cardSearchTypes";
import { toHeroCardDetails } from "./heroProcessor";
import { toVillainCardDetails } from "./villainProcessor";

export const toMastermindCardDetails = (card: MastermindCardDef, detailsType: CardDetailsType, mm?: MastermindDef): MastermindCardDetails => {
  const vp = (card.vp || mm?.vp);
  const vpS = vp + '';
  return {
    detailsType,
    vAttack: (card.vAttack || '') + (card.vAttackAsterisk ? '*' : ''),
    vp: (!vp || vpS === '-1' ? '' : vpS),
    tactic: card.tactic,
    epic: card.epic,
    description: card.abilities,
  };
}

export const processMastermind = (addCard: (card: CardSearchResult) => void, mm: MastermindDef, set: CardSetDef) => {
  mm.cards?.forEach(card => {
    let details: MastermindCardDetails | OopHeroDetails | OopVillainDetails;
    const oopHero = card as OopHeroCardDef;
    const oopVillain = card as OopVillainCardDef;
    const mmCard = card as MastermindCardDef;
    if(oopHero && oopHero.overrideType === 1) {
      details = {
        ...toHeroCardDetails(oopHero, CardDetailsType.OopHeroDetails),
        tactic: oopHero.tactic,
      } as OopHeroDetails;
    } else if (oopVillain && oopVillain.overrideType === 4) {
      details = {
        ...toVillainCardDetails(oopVillain, CardDetailsType.OopVillainDetails),
        tactic: oopVillain.tactic,
      } as OopVillainDetails;
    } else {
      details = toMastermindCardDetails(mmCard, CardDetailsType.MastermindCardDetails, mm);
    }
    
    addCard({
      name: card.name,
      subtitle: Subtitles.mastermindSubtitle(card, mm, set.id),
      imageUrl: '',
      set: getSetLabel(set.id, mm.set),
      type: details.tactic ? CardType.MastermindTactic : CardType.Mastermind,
      group: mm.name,
      details,
    });
  });
}