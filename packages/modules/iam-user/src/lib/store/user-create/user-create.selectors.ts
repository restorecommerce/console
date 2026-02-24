import { createFeatureSelector, createSelector } from '@ngrx/store';

import { iamUserCreateFeatureKey } from './user-create.reducer';
import { IamUserCreateState } from './user-create.state';

const selectFeature = createFeatureSelector<IamUserCreateState>(
  iamUserCreateFeatureKey
);

export const selectCreateLoading = createSelector(
  selectFeature,
  (s) => s.loading
);

export const selectCreateSuccess = createSelector(
  selectFeature,
  (s) => s.success
);

export const selectCreateError = createSelector(selectFeature, (s) => s.error);
