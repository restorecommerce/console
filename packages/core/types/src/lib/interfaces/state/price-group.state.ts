import { EntityState } from '@ngrx/entity';

import { IManufacturer } from '../entities';

import { IBaseStore } from './store.state';

export interface IPriceGroupState
  extends EntityState<IManufacturer>,
    IBaseStore {
  selectedId: string | null;
}
