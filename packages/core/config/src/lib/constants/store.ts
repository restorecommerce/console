import { IStoreConstant } from '@console-core/types';

import { APP } from './app';

export const STORE: Readonly<IStoreConstant> = {
  states: {
    appState: 'appStateV1',
    authnState: 'authnStateV1',
    routerState: 'routerStateV1',
  },
  config: {
    app: {
      notifications: {
        delay: 10,
        duration: 5000,
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
