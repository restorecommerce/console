import { EntityState } from '@ngrx/entity';

import { ITax } from '../entities';

import { IBaseStore } from './store.state';

export interface ITaxState extends EntityState<ITax>, IBaseStore {
  selectedId: string | null;
}
