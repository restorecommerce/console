import { IAppConstant, ILanguage } from '@console/types';

const name = 'Website Next';

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

export const APP: Readonly<IAppConstant> = {
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
