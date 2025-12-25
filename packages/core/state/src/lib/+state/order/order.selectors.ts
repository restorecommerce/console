import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IOrder, IOrderState } from '@console-core/types';

import { selectParams } from '../router/router.selectors';

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

export const selectOrderSelected = createSelector(
  selectOrderEntities,
  selectParams,
  (entities, routerParams) =>
    (routerParams ? entities[routerParams['id']] : null) as IOrder | null
);

export const selectActionStatus = createSelector(
  selectOrder,
  (state: IOrderState) => state.actionStatus
);

export const selectError = createSelector(
  selectOrder,
  (state: IOrderState) => state.error
);
