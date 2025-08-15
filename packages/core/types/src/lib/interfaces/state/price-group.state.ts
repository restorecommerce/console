import { EntityState } from '@ngrx/entity';

import { IPriceGroup } from '../entities';

import { IBaseStore } from './store.state';

export interface IPriceGroupState extends EntityState<IPriceGroup>, IBaseStore {
  selectedId: string | null;
}
