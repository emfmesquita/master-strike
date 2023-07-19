import { DecriptionPiece } from "./descriptionTypes";

export type RuleDescription = (RuleDescriptionGroup | BulletPointDescription | RuleDecriptionPiece)[];

export interface BulletPointDescription {
  noBullets?: true;
  points: (RuleDescriptionGroup | RuleDecriptionPiece)[];
}

export type RuleDescriptionGroup = RuleDecriptionPiece[];

export type RuleDecriptionPiece =
  DecriptionPiece |
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