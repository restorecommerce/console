import { EntityState } from '@ngrx/entity';

import { ICustomer } from '../entities';

import { IBaseStore } from './store.state';

export interface ICustomerState extends EntityState<ICustomer>, IBaseStore {
  selectedId: string | null;
}
