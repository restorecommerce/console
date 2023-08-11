import { IAppConstant, ILanguage } from '@console-core/types';

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

export const APP: Readonly<IAppConstant> = {
  name,
  logoUrl:
    'https://raw.githubusercontent.com/restorecommerce/branding/master/Logo/restore_commerce_logo.png',
  languages: {
    default: {
      ...supported[0],
    },
    supported,
  },
};
