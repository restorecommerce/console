import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IOrderState } from '@console-core/types';

export const selectOrder = createFeatureSelector<IOrderState>(
  STORE.states.orderState
);

export const selectError = createSelector(
  selectOrder,
  (state: IOrderState) => state.error
);

export const selectActionStatus = createSelector(
  selectOrder,
  (state: IOrderState) => state.actionStatus
);
