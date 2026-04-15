import { createFeatureSelector, createSelector } from '@ngrx/store';

import { invoiceViewFeatureKey } from './invoice-view.reducer';
import { InvoiceViewState } from './invoice-view.state';

export const selectInvoiceViewState = createFeatureSelector<InvoiceViewState>(
  invoiceViewFeatureKey
);

export const selectInvoice = createSelector(
  selectInvoiceViewState,
  (state) => state.invoice
);

export const selectLoading = createSelector(
  selectInvoiceViewState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectInvoiceViewState,
  (state) => state.error
);
