import { createReducer, on } from '@ngrx/store';

import * as InvoiceListActions from './invoice-list.actions';
import {
  initialInvoiceListState,
  InvoiceListState,
} from './invoice-list.state';

export const invoiceListFeatureKey = 'invoiceList';

export const invoiceListReducer = createReducer(
  initialInvoiceListState,

  on(
    InvoiceListActions.loadInvoiceList,
    (state): InvoiceListState => ({
      ...state,
      loading: true,
      error: undefined,
    })
  ),

  on(
    InvoiceListActions.loadInvoiceListSuccess,
    (state, { items }): InvoiceListState => ({
      ...state,
      loading: false,
      items,
    })
  ),

  on(
    InvoiceListActions.loadInvoiceListFailure,
    (state, { error }): InvoiceListState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
