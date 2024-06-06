import { EntityState } from '@ngrx/entity';

import { IUser } from '../entities';

import { IBaseStore } from './store.state';

export interface IIamState extends EntityState<IUser>, IBaseStore {
  selectedId: string | null;
}
