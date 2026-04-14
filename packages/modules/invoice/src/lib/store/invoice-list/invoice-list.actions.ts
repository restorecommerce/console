import { createAction, props } from '@ngrx/store';

import { InvoiceListItem } from '../../models';

export const loadInvoiceList = createAction('[Invoice List] Load');

export const loadInvoiceListSuccess = createAction(
  '[Invoice List] Load Success',
  props<{ items: InvoiceListItem[] }>()
);

export const loadInvoiceListFailure = createAction(
  '[Invoice List] Load Failure',
  props<{ error: string }>()
);
