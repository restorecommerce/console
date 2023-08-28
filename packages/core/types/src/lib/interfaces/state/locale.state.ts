import { EntityState } from '@ngrx/entity';

import { IIoRestorecommerceLocaleLocale } from '@console-core/graphql';

import { IBaseStore } from './store.state';

export interface ILocaleState
  extends EntityState<IIoRestorecommerceLocaleLocale>,
    IBaseStore {
  selectedId: string | null;
}
