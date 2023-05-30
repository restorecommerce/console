import { ILanguages } from './languages';

export interface IAppConstant {
  readonly name: string;
  readonly languages: ILanguages;
  readonly ngrx: {
    readonly storeDevtoolsModule: {
      readonly name: string;
      readonly maxAge: number;
    };
  };
}
