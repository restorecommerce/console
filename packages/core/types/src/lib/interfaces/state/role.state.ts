import { EntityState } from '@ngrx/entity';

import { IRole } from '../entities';

import { IBaseStore } from './store.state';

export interface IRoleState extends EntityState<IRole>, IBaseStore {
  selectedId: string | null;
}
