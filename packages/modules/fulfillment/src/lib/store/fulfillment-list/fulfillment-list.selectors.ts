import { createFeatureSelector, createSelector } from '@ngrx/store';

import { fulfillmentListFeatureKey } from './fulfillment-list.reducer';
import { FulfillmentListState } from './fulfillment-list.state';

export const selectFulfillmentListState =
  createFeatureSelector<FulfillmentListState>(fulfillmentListFeatureKey);

export const selectFulfillmentListItems = createSelector(
  selectFulfillmentListState,
  (state) => state.items
);

export const selectFulfillmentListLoading = createSelector(
  selectFulfillmentListState,
  (state) => state.loading
);

export const selectFulfillmentListError = createSelector(
  selectFulfillmentListState,
  (state) => state.error
);
