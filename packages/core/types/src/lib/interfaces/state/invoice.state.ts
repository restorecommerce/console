import { EntityState } from '@ngrx/entity';

import { IInvoice } from '../entities';

import { IBaseStore } from './store.state';

export interface IInvoiceState extends EntityState<IInvoice>, IBaseStore {
  selectedId: string | null;
}
