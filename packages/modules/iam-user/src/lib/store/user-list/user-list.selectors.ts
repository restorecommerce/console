import { createFeatureSelector, createSelector } from '@ngrx/store';

import { userListFeatureKey } from './user-list.reducer';
import { UserListState } from './user-list.state';

export const selectUserListState =
  createFeatureSelector<UserListState>(userListFeatureKey);

export const selectUserListItems = createSelector(
  selectUserListState,
  (state) => state.items
);

export const selectUserListLoading = createSelector(
  selectUserListState,
  (state) => state.loading
);

export const selectUserListError = createSelector(
  selectUserListState,
  (state) => state.error
);
