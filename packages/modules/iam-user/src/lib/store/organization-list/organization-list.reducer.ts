import { createReducer, on } from '@ngrx/store';

import * as OrganizationListActions from './organization-list.actions';
import {
  initialOrganizationListState,
  OrganizationListState,
} from './organization-list.state';

export const organizationListFeatureKey = 'organizationList';

export const organizationListReducer = createReducer(
  initialOrganizationListState,

  on(
    OrganizationListActions.loadOrganizationList,
    (state): OrganizationListState => ({
      ...state,
      loading: true,
      error: undefined,
    })
  ),

  on(
    OrganizationListActions.loadOrganizationListSuccess,
    (state, { items }): OrganizationListState => ({
      ...state,
      loading: false,
      items,
    })
  ),

  on(
    OrganizationListActions.loadOrganizationListFailure,
    (state, { error }): OrganizationListState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
