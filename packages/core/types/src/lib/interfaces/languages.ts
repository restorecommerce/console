export interface ILanguage {
  readonly code: string;
  readonly name: string;
}

export interface ILanguages {
  readonly default: ILanguage;
  readonly supported: ILanguage[];
}
