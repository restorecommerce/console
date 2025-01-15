import { EntityState } from '@ngrx/entity';

import { ICurrency } from '../entities';

import { IBaseStore } from './store.state';

export interface ICurrencyState extends EntityState<ICurrency>, IBaseStore {
  selectedId: string | null;
}
