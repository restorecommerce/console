import { IConstant, ILanguage } from '../types/interfaces';

const name = 'Restore Commerce';

const supported: ILanguage[] = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'de',
    name: 'Deutsch',
  },
];

export const APP: Readonly<IConstant> = {
  name,
  languages: {
    default: {
      ...supported[0],
    },
    supported,
  },
  ngrx: {
    storeDevtoolsModule: {
      name: `${name} | NgRx Store DevTools`,
      maxAge: 25,
    },
  },
};
