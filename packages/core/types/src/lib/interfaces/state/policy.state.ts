import { EntityState } from '@ngrx/entity';

import { IPolicy } from '../entities';

import { IBaseStore } from './store.state';

export interface IPolicyState extends EntityState<IPolicy>, IBaseStore {
  selectedId: string | null;
}
