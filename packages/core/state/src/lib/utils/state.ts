import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storeLogger } from 'ngrx-store-logger';

import { IStore } from '@console-core/types';
import { IStoreConstant } from '@console-core/types';

export const handleLocalStorageSync = (
  store: Pick<IStoreConstant, 'states'>,
  prefix = ''
) =>
  localStorageSync({
    keys: Object.values(store.states),
    storageKeySerializer: (key: string) => `${prefix}${key}`,
    rehydrate: true,
  });

export const handleStoreLogger = (
  reducer: ActionReducer<IStore>
): ActionReducer<IStore> => storeLogger({ collapsed: true })(reducer);
