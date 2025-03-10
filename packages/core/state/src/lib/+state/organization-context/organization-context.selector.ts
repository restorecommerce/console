import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IOrganization, IOrganizationContextState } from '@console-core/types';

import { adapter } from './organization-context.reducer';

export const selectOrganizationContext =
  createFeatureSelector<IOrganizationContextState>(
    STORE.states.organizationContextState
  );

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectOrganizationIds = createSelector(
  selectOrganizationContext,
  selectIds
);

export const selectOrganizationEntities = createSelector(
  selectOrganizationContext,
  selectEntities
);

export const selectOrganizationAll = createSelector(
  selectOrganizationContext,
  selectAll
);

export const selectOrganizationTotal = createSelector(
  selectOrganizationContext,
  selectTotal
);

export const selectOrganizationSelectedId = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.selectedId
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
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.parentIds
);

export const selectOrganizationParentEntities = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.parentEntities
);

export const selectOrganizationChildIds = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.childIds
);

export const selectOrganizationChildEntities = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.childEntities
);

export const selectOrganizationChildsAll = createSelector(
  selectOrganizationChildEntities,
  (entities) => Object.values(entities)
);

export const selectOrganizationSelectedChildId = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.selectedChildId
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
  selectOrganizationContext,
  (state: IOrganizationContextState) => {
    return state.selectedGlobalOrganizationHistory[
      state.selectedGlobalOrganizationHistory.length - 1
    ];
  }
);

export const selectActionStatus = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.actionStatus
);

export const selectError = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.error
);

export const selectGlobalOrganizationHistory = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.selectedGlobalOrganizationHistory
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

export const selectGlobalOrganizationLeafId = createSelector(
  selectOrganizationContext,
  (state: IOrganizationContextState) => state.setSelectedGlobalLeaf
);

export const selectGlobalOrganizationLeaf = createSelector(
  selectOrganizationEntities,
  selectGlobalOrganizationLeafId,
  (entities, selectGlobalOrganizationLeafId) => {
    return (
      selectGlobalOrganizationLeafId &&
      selectGlobalOrganizationLeafId in entities
        ? entities[selectGlobalOrganizationLeafId]
        : null
    ) as IOrganization | null;
  }
);
