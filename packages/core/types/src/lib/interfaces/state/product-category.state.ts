import { EntityState } from '@ngrx/entity';

import { IProductCategory } from '../entities';

import { IBaseStore } from './store.state';

export interface IIProductCategoryState
  extends EntityState<IProductCategory>,
    IBaseStore {
  selectedId: string | null;
}
