import { EntityState } from '@ngrx/entity';

import { IIoRestorecommerceTimezoneTimezone } from '@console-core/graphql';

import { IBaseStore } from './store.state';

export interface ITimezoneState
  extends EntityState<IIoRestorecommerceTimezoneTimezone>,
    IBaseStore {
  selectedId: string | null;
}
