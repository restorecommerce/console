import { ENotificationTypes } from '../enums';

export interface ILanguage {
  readonly code: string;
  readonly name: string;
}

export interface ILanguages {
  readonly default: ILanguage;
  readonly supported: ILanguage[];
}

export interface IAppConstant {
  readonly name: string;
  readonly logoUrl: string;
  readonly languages: ILanguages;
}

export interface INotification {
  title: string;
  content: string;
  type: ENotificationTypes;
  date: Date;
}
