import { createFeatureSelector, createSelector } from '@ngrx/store';

import { invoiceListFeatureKey } from './invoice-list.reducer';
import { InvoiceListState } from './invoice-list.state';

export const selectInvoiceListState = createFeatureSelector<InvoiceListState>(
  invoiceListFeatureKey
);

export const selectInvoiceListItems = createSelector(
  selectInvoiceListState,
  (state) => state.items
);

export const selectInvoiceListLoading = createSelector(
  selectInvoiceListState,
  (state) => state.loading
);

export const selectInvoiceListError = createSelector(
  selectInvoiceListState,
  (state) => state.error
);
