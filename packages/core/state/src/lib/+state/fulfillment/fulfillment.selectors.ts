import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IFulfillment, IFulfillmentState } from '@console-core/types';

import { adapter } from './fulfillment.reducer';

export const selectFulfillment = createFeatureSelector<IFulfillmentState>(
  STORE.states.fulfillmentState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectFulfillmentIds = createSelector(
  selectFulfillment,
  selectIds
);

export const selectFulfillmentEntities = createSelector(
  selectFulfillment,
  selectEntities
);

export const selectFulfillmentAll = createSelector(
  selectFulfillment,
  selectAll
);

export const selectFulfillmentTotal = createSelector(
  selectFulfillment,
  selectTotal
);

export const selectFulfillmentSelectedId = createSelector(
  selectFulfillment,
  (state: IFulfillmentState) => state.selectedId
);

export const selectFulfillmentSelected = createSelector(
  selectFulfillmentEntities,
  selectFulfillmentSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IFulfillment | null;
  }
);

export const selectActionStatus = createSelector(
  selectFulfillment,
  (state: IFulfillmentState) => state.actionStatus
);

export const selectError = createSelector(
  selectFulfillment,
  (state: IFulfillmentState) => state.error
);
