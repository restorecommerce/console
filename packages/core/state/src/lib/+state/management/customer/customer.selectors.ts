import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { ICustomer, ICustomerState } from '@console-core/types';

import { adapter } from './customer.reducer';

export const selectCustomer = createFeatureSelector<ICustomerState>(
  STORE.states.customerState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectCustomerIds = createSelector(selectCustomer, selectIds);

export const selectCustomerEntities = createSelector(
  selectCustomer,
  selectEntities
);

export const selectCustomerAll = createSelector(selectCustomer, selectAll);

export const selectCustomerTotal = createSelector(selectCustomer, selectTotal);

export const selectCustomerSelectedId = createSelector(
  selectCustomer,
  (state: ICustomerState) => state.selectedId
);

export const selectCustomerSelected = createSelector(
  selectCustomerEntities,
  selectCustomerSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as ICustomer | null;
  }
);

export const selectActionStatus = createSelector(
  selectCustomer,
  (state: ICustomerState) => state.actionStatus
);

export const selectError = createSelector(
  selectCustomer,
  (state: ICustomerState) => state.error
);
