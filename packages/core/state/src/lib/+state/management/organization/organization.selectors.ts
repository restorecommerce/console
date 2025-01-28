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

export const selectOrganizationParentIds = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.parentIds
);

export const selectOrganizationParentEntities = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.parentEntities
);

export const selectOrganizationParentsAll = createSelector(
  selectOrganizationParentEntities,
  (entities) => Object.values(entities)
);

export const selectOrganizationSelectedParentId = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.selectedParentId
);

export const selectOrganizationSelectedParent = createSelector(
  selectOrganizationParentEntities,
  selectOrganizationSelectedParentId,
  (entities, selectedParentId) => {
    return (
      selectedParentId && selectedParentId in entities
        ? entities[selectedParentId]
        : null
    ) as IOrganization | null;
  }
);

export const selectOrganizationChildIds = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.childIds
);

export const selectOrganizationChildEntities = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.childEntities
);

export const selectOrganizationChildsAll = createSelector(
  selectOrganizationChildEntities,
  (entities) => Object.values(entities)
);

export const selectOrganizationSelectedChildId = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.selectedChildId
);

export const selectOrganizationSelectedChild = createSelector(
  selectOrganizationChildEntities,
  selectOrganizationSelectedChildId,
  (entities, selectedChildId) => {
    return (
      selectedChildId && selectedChildId in entities
        ? entities[selectedChildId]
        : null
    ) as IOrganization | null;
  }
);

export const selectOrganizationSelectedGlobalOrganizationId = createSelector(
  selectOrganization,
  (state: IOrganizationState) => {
    return state.selectedGlobalOrganizationHistory[
      state.selectedGlobalOrganizationHistory.length - 1
    ];
  }
);

export const selectOrganizationSelectedGlobalOrganization = createSelector(
  selectOrganizationEntities,
  selectOrganizationSelectedGlobalOrganizationId,
  (entities, selectedGlobalOrganizationId) => {
    return (
      selectedGlobalOrganizationId && selectedGlobalOrganizationId in entities
        ? entities[selectedGlobalOrganizationId]
        : null
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

export const selectGlobalOrganizationHistory = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.selectedGlobalOrganizationHistory
);

export const selectGlobalChildrenOrganizationsHelperSelector = createSelector({
  organizations: selectOrganizationAll,
  currentParentId: selectOrganizationSelectedGlobalOrganizationId,
  globalOrganizationHistory: selectGlobalOrganizationHistory,
});

export const selectGlobalChildrenOrganizations = createSelector(
  selectGlobalChildrenOrganizationsHelperSelector,
  (data) => {
    const filteredOrganization = data.organizations.filter(
      (org) => org.parentId === data.currentParentId
    ) as IOrganization[];

    return filteredOrganization;
  }
);

export const selectGlobalOrganizationLeaf = createSelector(
  selectOrganization,
  (state: IOrganizationState) => state.setSelectedGlobalLeaf
);
