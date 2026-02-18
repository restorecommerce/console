import { createFeatureSelector, createSelector } from '@ngrx/store';

import { userViewFeatureKey } from './user-view.reducer';
import { IAMUserViewState } from './user-view.state';

export const selectIAMUserViewState =
  createFeatureSelector<IAMUserViewState>(userViewFeatureKey);

export const selectFulfillment = createSelector(
  selectIAMUserViewState,
  (state) => state.iamUser
);

export const selectLoading = createSelector(
  selectIAMUserViewState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectIAMUserViewState,
  (state) => state.error
);
