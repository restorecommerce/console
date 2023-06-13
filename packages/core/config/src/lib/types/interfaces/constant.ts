import { ILanguages } from './languages';

export interface IConstant {
  readonly name: string;
  readonly languages: ILanguages;
  readonly ngrx: {
    readonly storeDevtoolsModule: {
      readonly name: string;
      readonly maxAge: number;
    };
  };
}
