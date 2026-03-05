import { createFeatureSelector, createSelector } from '@ngrx/store';

import { roleListFeatureKey } from './role-list.reducer';
import { RoleListState } from './role-list.state';

export const selectRoleListState =
  createFeatureSelector<RoleListState>(roleListFeatureKey);

export const selectRoleListItems = createSelector(
  selectRoleListState,
  (state) => state.items
);

export const selectRoleListLoading = createSelector(
  selectRoleListState,
  (state) => state.loading
);

export const selectRoleListError = createSelector(
  selectRoleListState,
  (state) => state.error
);
