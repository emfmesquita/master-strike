import { getSets, setIdToLabel } from ".";
import { CardSetDef, HeroDef, HeroCardDef } from "../../definitions/cardTypes";
import { Subtitles } from "../../utils";
import { CardDetailsType, CardType, DividedHeroCardDetails, HeroCardDetails, CardSearchResult } from "../cardSearchTypes";

const cardQtd = (card: HeroCardDef): number => {
  if(card.qtd) return card.qtd;
  if(card.rarity === 1) return 5;
  if(card.rarity === 2) return 3;
  return 1;
}

export const toHeroCardDetails = (card: HeroCardDef, detailsType: CardDetailsType, groupTeam?: number): HeroCardDetails => ({
  detailsType,
  cost: (card.cost || '') + (card.costAsterisk ? '*' : ''),
  hc: card.hc,
  ...(card.hc2 && { hc2: card.hc2 }),
  qtd: cardQtd(card),
  team: (card.team !== undefined ? card.team : groupTeam) || 0,
  attack: card.attack,
  recruit: card.recruit,
  piercing: card.piercing,
  transformed: card.transformed,
  description: card.abilities,
});

export const processHero = (addCard: (card: CardSearchResult) => void, hero: HeroDef, set: CardSetDef) => {
  hero.cards?.forEach((card, idx) => {
    if (card.divided === 2) return;
    if (card.divided === 1) {
      const secondHalfCard = hero.cards[idx + 1];
      const details: DividedHeroCardDetails = {
        detailsType: CardDetailsType.DividedHeroCardDetails,
        description: [],
        half1: toHeroCardDetails(card, CardDetailsType.HeroCardDetails, hero.team),
        nameHalf1: card.name,
        half2: toHeroCardDetails(secondHalfCard, CardDetailsType.HeroCardDetails, hero.team),
        nameHalf2: secondHalfCard.name,
      }
      const subtitle1 = Subtitles.heroSubtitle(card, hero);
      const subtitle2 = Subtitles.heroSubtitle(secondHalfCard, hero);
      const rCard: CardSearchResult = {
        name: `${card.name} / ${secondHalfCard.name}`,
        subtitle: `${subtitle1} / ${subtitle2}`,
        imageUrl: card.imageUrl || '',
        set: setIdToLabel(set.id),
        type: CardType.Hero,
        group: hero.name,
        details,
      };
      addCard(rCard);
    } else {
      getSets(set.id, hero.set).forEach(setId => {
        const rCard: CardSearchResult = {
          name: card.name,
          subtitle: Subtitles.heroSubtitle(card, hero),
          imageUrl: card.imageUrl || '',
          set: setIdToLabel(setId),
          type: CardType.Hero,
          group: hero.name,
          details: toHeroCardDetails(card, CardDetailsType.HeroCardDetails, hero.team),
        };
        addCard(rCard);
      });
    }
  });
}