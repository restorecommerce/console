import { IStoreConstant } from '@console-core/types';

import { APP } from './app';

export const STORE: Readonly<IStoreConstant> = {
  states: {
    appState: 'appStateV1',
    routerState: 'routerStateV1',
  },
  ngrx: {
    storeDevtoolsModule: {
      name: `${APP.name} | NgRx Store DevTools`,
      maxAge: 25,
    },
  },
};
