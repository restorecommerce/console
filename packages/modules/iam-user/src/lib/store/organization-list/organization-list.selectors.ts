import { createFeatureSelector, createSelector } from '@ngrx/store';

import { organizationListFeatureKey } from './organization-list.reducer';
import { OrganizationListState } from './organization-list.state';

export const selectOrganizationListState =
  createFeatureSelector<OrganizationListState>(organizationListFeatureKey);

export const selectOrganizationListItems = createSelector(
  selectOrganizationListState,
  (state) => state.items
);

export const selectOrganizationListLoading = createSelector(
  selectOrganizationListState,
  (state) => state.loading
);

export const selectOrganizationListError = createSelector(
  selectOrganizationListState,
  (state) => state.error
);
