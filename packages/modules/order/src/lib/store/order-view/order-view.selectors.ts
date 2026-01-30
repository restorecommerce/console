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

export const selectActiveTab = createSelector(
  selectOrderViewState,
  (state) => state.activeTab
);

export const selectError = createSelector(
  selectOrderViewState,
  (state) => state.error
);
