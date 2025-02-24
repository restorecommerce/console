import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IPolicy, IPolicyState } from '@console-core/types';

import { adapter } from './policy.reducer';

export const selectPolicy = createFeatureSelector<IPolicyState>(
  STORE.states.policyState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectPolicyIds = createSelector(selectPolicy, selectIds);

export const selectPolicyEntities = createSelector(
  selectPolicy,
  selectEntities
);

export const selectPolicyAll = createSelector(selectPolicy, selectAll);

export const selectPolicyTotal = createSelector(selectPolicy, selectTotal);

export const selectPolicySelectedId = createSelector(
  selectPolicy,
  (state: IPolicyState) => state.selectedId
);

export const selectPolicySelected = createSelector(
  selectPolicyEntities,
  selectPolicySelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IPolicy | null;
  }
);

export const selectActionStatus = createSelector(
  selectPolicy,
  (state: IPolicyState) => state.actionStatus
);

export const selectError = createSelector(
  selectPolicy,
  (state: IPolicyState) => state.error
);
