import { createFeatureSelector, createSelector } from '@ngrx/store';

import { iamUserUpdateFeatureKey } from './user-edit.reducer';
import { IamUserEditState } from './user-edit.state';

export const selectUserEditState = createFeatureSelector<IamUserEditState>(
  iamUserUpdateFeatureKey
);

export const selectUser = createSelector(selectUserEditState, (s) => s.user);

export const selectLoading = createSelector(
  selectUserEditState,
  (s) => s.loading
);

export const selectSaving = createSelector(
  selectUserEditState,
  (s) => s.saving
);

export const selectError = createSelector(selectUserEditState, (s) => s.error);
