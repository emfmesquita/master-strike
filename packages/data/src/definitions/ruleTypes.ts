import { DescriptionPiece } from "./descriptionTypes";

export type RuleDescription = (RuleDescriptionGroup | BulletPointDescription | RuleDescriptionPiece)[];

export interface BulletPointDescription {
  noBullets?: true;
  points: (RuleDescriptionGroup | RuleDescriptionPiece)[];
}

export type RuleDescriptionGroup = RuleDescriptionPiece[];

export type RuleDescriptionPiece =
  DescriptionPiece |
  UnderlinedDescription |
  HeaderDescription;


export interface UnderlinedDescription {
  underlined: string;
}

export interface HeaderDescription {
  header: string;
}

export type RuleDefinition = RuleDescription;
export type KeywordDefinition = RuleDescription;