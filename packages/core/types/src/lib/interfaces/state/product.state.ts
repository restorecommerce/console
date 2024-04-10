import { EntityState } from '@ngrx/entity';

import { IProduct } from '../entities';

import { IBaseStore } from './store.state';

export interface IProductState extends EntityState<IProduct>, IBaseStore {
  selectedId: string | null;
}
