import { IConstant, ILanguage } from '@console-core/types';

const name = 'Restorecommerce';

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
};
