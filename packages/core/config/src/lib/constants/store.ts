import { IStoreConstant } from '@console-core/types';

import { APP } from './app';

export const STORE: Readonly<IStoreConstant> = {
  states: {
    accountState: 'accountStateV1',
    appState: 'appStateV1',
    authnState: 'authnStateV1',
    localeState: 'localeStateV1',
    routerState: 'routerStateV1',
    timezoneState: 'timezoneStateV1',
  },
  config: {
    app: {
      notifications: {
        delay: 10,
      },
    },
  },
  ngrx: {
    storeDevtoolsModule: {
      name: `${APP.name} | NgRx Store DevTools`,
      maxAge: 25,
    },
  },
};
