import { createFeatureSelector, createSelector } from '@ngrx/store';

import { orderViewFeatureKey } from './order-view.reducer';
import { OrderViewState } from './order-view.state';

export const selectOrderViewState =
  createFeatureSelector<OrderViewState>(orderViewFeatureKey);

export const selectOrder = createSelector(
  selectOrderViewState,
  (state) => state.order
);

export const selectLoading = createSelector(
  selectOrderViewState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectOrderViewState,
  (state) => state.error
);

export const selectFulfilments = createSelector(
  selectOrderViewState,
  (state) => state.fulfilments.items
);

export const selectFulfilmentCount = createSelector(
  selectFulfilments,
  (items) => items.length
);

export const selectHasFulfilment = createSelector(
  selectFulfilmentCount,
  (count) => count > 0
);

export const selectInvoices = createSelector(
  selectOrderViewState,
  (state) => state.invoices.items
);

export const selectInvoiceCount = createSelector(
  selectInvoices,
  (items) => items.length
);

export const selectHasInvoice = createSelector(
  selectInvoiceCount,
  (count) => count > 0
);
