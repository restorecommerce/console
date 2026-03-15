import { createFeatureSelector, createSelector } from '@ngrx/store';

import { iamUserEditFeatureKey } from './user-edit.reducer';
import { IamUserEditState } from './user-edit.state';

export const selectUserEditState = createFeatureSelector<IamUserEditState>(
  iamUserEditFeatureKey
);

export const selectUser = createSelector(selectUserEditState, (s) => s.user);

export const selectUpdateLoading = createSelector(
  selectUserEditState,
  (s) => s.loading
);

export const selectUpdateSaving = createSelector(
  selectUserEditState,
  (s) => s.saving
);

export const selectUpdateError = createSelector(
  selectUserEditState,
  (s) => s.error
);
