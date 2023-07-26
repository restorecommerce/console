import { ILanguages } from './language';

export interface IConstant {
  readonly name: string;
  readonly languages: ILanguages;
}
