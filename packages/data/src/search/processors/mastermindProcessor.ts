import { getSets, setIdToLabel } from ".";
import { CardSetDef, MastermindDef, MastermindCardDef, OopHeroCardDef, OopVillainCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, MastermindCardDetails, OopHeroDetails, OopVillainDetails, CardSearchResult } from "../cardSearchTypes";
import { toHeroCardDetails } from "./heroProcessor";
import { toVillainCardDetails } from "./villainProcessor";

const vAttack = (card: MastermindCardDef | OopHeroCardDef, mm?: MastermindDef) => (card.vAttack || mm?.vAttack || '') + (card.vAttackAsterisk ? '*' : '');

export const toMastermindCardDetails = (card: MastermindCardDef, detailsType: CardDetailsType, mm?: MastermindDef): MastermindCardDetails => {
  const vp = (card.vp || mm?.vp);
  const vpS = vp + '';

  return {
    detailsType,
    vAttack: vAttack(card, mm),
    vp: ((!vp || vpS === '-1') ? '' : vpS),
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
        vAttack: vAttack(oopHero, mm),
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
    
    getSets(set.id, mm.set).forEach(setId => {
      addCard({
        name: card.name,
        subtitle: Subtitles.mastermindSubtitle(card, mm, setId),
        imageUrl: card.imageUrl || '',
        set: setIdToLabel(setId),
        type: details.tactic ? CardType.MastermindTactic : CardType.Mastermind,
        group: mm.name,
        details,
      });
    });
  });
}