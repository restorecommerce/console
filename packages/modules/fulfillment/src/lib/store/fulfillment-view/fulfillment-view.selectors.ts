import { createFeatureSelector, createSelector } from '@ngrx/store';

import { fulfillmentViewFeatureKey } from './fulfillment-view.reducer';
import { FulfillmentViewState } from './fulfillment-view.state';

export const selectFulfillmentViewState =
  createFeatureSelector<FulfillmentViewState>(fulfillmentViewFeatureKey);

export const selectFulfillment = createSelector(
  selectFulfillmentViewState,
  (state) => state.fulfillment
);

export const selectLoading = createSelector(
  selectFulfillmentViewState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectFulfillmentViewState,
  (state) => state.error
);
