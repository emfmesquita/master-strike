export type Description = (DescriptionGroup | BulletPointDescription | DescriptionPiece)[];

export interface BulletPointDescription {
  points: (DescriptionGroup | DescriptionPiece)[];
}

export type DescriptionGroup = DescriptionPiece[];

export type DescriptionPiece = 
  string |
  BoldDescription |
  ItalicDescription |
  IconDescription |
  KeywordDescription |
  RuleDescrition |
  HeroClassDescription |
  TeamDescription |
  DividerDescription;


export interface BoldDescription {
  bold: string;
}

export interface ItalicDescription {
  italic: string;
}

export interface IconDescription {
  icon: number;
}

export interface KeywordDescription {
  keyword: number,
  text?: string;
}

export interface RuleDescrition {
  rule: number;
  text?: string;
  keywordStyle?: true;
}

export interface HeroClassDescription {
  hc: number;
}

export interface TeamDescription {
  team: number;
}

export interface DividerDescription {
  divider: true;
}