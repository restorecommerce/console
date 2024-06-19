import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IRole, IRoleState } from '@console-core/types';

import { adapter } from './role.reducer';

export const selectRole = createFeatureSelector<IRoleState>(
  STORE.states.roleState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectRoleIds = createSelector(selectRole, selectIds);

export const selectRoleEntities = createSelector(selectRole, selectEntities);

export const selectRoleAll = createSelector(selectRole, selectAll);

export const selectRoleTotal = createSelector(selectRole, selectTotal);

export const selectRoleAllDistinctAssignableByRoles = createSelector(
  selectRoleAll,
  (roles) => {
    const assignableByRoles = roles
      .map((role) => role.assignableByRoles || [])
      .flat() as string[];
    return Array.from(new Set(assignableByRoles));
  }
);

export const selectRoleSelectedId = createSelector(
  selectRole,
  (state: IRoleState) => state.selectedId
);

export const selectRoleSelected = createSelector(
  selectRoleEntities,
  selectRoleSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IRole | null;
  }
);

export const selectActionStatus = createSelector(
  selectRole,
  (state: IRoleState) => state.actionStatus
);

export const selectError = createSelector(
  selectRole,
  (state: IRoleState) => state.error
);
