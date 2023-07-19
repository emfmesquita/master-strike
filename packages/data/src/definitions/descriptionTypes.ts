export type Description = (DescriptionGroup | BulletPointDescription | DecriptionPiece)[];

export interface BulletPointDescription {
  points: (DescriptionGroup | DecriptionPiece)[];
}

export type DescriptionGroup = DecriptionPiece[];

export type DecriptionPiece = 
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