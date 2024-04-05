import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IOrder, IOrderState } from '@console-core/types';

import { adapter } from './order.reducer';

export const selectOrder = createFeatureSelector<IOrderState>(
  STORE.states.orderState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectOrderIds = createSelector(selectOrder, selectIds);

export const selectOrderEntities = createSelector(selectOrder, selectEntities);

export const selectOrderAll = createSelector(selectOrder, selectAll);

export const selectOrderTotal = createSelector(selectOrder, selectTotal);

export const selectOrderSelectedId = createSelector(
  selectOrder,
  (state: IOrderState) => state.selectedId
);

export const selectOrderSelected = createSelector(
  selectOrderEntities,
  selectOrderSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IOrder | null;
  }
);

export const selectActionStatus = createSelector(
  selectOrder,
  (state: IOrderState) => state.actionStatus
);

export const selectError = createSelector(
  selectOrder,
  (state: IOrderState) => state.error
);
