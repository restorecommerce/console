import { ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { IStore } from '@console-core/types';

export const handleStoreLogger = (
  reducer: ActionReducer<IStore>
): ActionReducer<IStore> => storeLogger({ collapsed: true })(reducer);
