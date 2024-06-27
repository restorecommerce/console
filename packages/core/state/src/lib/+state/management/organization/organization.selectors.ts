import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IOrganization, IOrganizationState } from '@console-core/types';

import { adapter } from './organization.reducer';

export const selectOrganization = createFeatureSelector<IOrganizationState>(
  STORE.states.organizationState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectOrganizationIds = createSelector(
  selectOrganization,
  selectIds
);

export const selectOrganizationEntities = createSelector(
  selectOrganization,
  selectEntities
);

export const selectOrganizationAll = createSelector(
  selectOrganization,
  selectAll
);

export const selectOrganizationTotal = createSelector(
  selectOrganization,
  selectTotal
);

export const selectOrganizationSelectedId = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.selectedId
);

export const selectOrganizationSelected = createSelector(
  selectOrganizationEntities,
  selectOrganizationSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IOrganization | null;
  }
);

export const selectActionStatus = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.actionStatus
);

export const selectError = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.error
);
