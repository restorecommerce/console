import { createFeatureSelector, createSelector } from '@ngrx/store';

import { orderListFeatureKey } from './order-list.reducer';
import { OrderListState } from './order-list.state';

export const selectOrderListState =
  createFeatureSelector<OrderListState>(orderListFeatureKey);

export const selectOrderListItems = createSelector(
  selectOrderListState,
  (state) => state.items
);

export const selectOrderListLoading = createSelector(
  selectOrderListState,
  (state) => state.loading
);

export const selectOrderListError = createSelector(
  selectOrderListState,
  (state) => state.error
);
