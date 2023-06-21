import { localStorageSync } from 'ngrx-store-localstorage';

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
