import { createReducer, on } from '@ngrx/store';

import * as InvoiceViewActions from './invoice-view.actions';
import {
  InvoiceViewState,
  initialInvoiceViewState,
} from './invoice-view.state';

export const invoiceViewFeatureKey = 'invoiceView';

export const invoiceViewReducer = createReducer(
  initialInvoiceViewState,
  on(
    InvoiceViewActions.enterPage,
    (state, { invoiceId }): InvoiceViewState => ({
      ...state,
      invoiceId,
      loading: true,
      error: null,
    })
  ),
  on(
    InvoiceViewActions.loadInvoice,
    (state): InvoiceViewState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    InvoiceViewActions.loadInvoiceSuccess,
    (state, { invoice }): InvoiceViewState => ({
      ...state,
      invoice,
      loading: false,
    })
  ),
  on(
    InvoiceViewActions.loadInvoiceFailure,
    (state, { error }): InvoiceViewState => ({
      ...state,
      loading: false,
      error,
    })
  ),
  on(
    InvoiceViewActions.leavePage,
    (): InvoiceViewState => initialInvoiceViewState
  )
);
