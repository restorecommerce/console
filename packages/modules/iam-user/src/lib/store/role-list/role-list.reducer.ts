import { createReducer, on } from '@ngrx/store';

import * as RoleListActions from './role-list.actions';
import { initialRoleListState, RoleListState } from './role-list.state';

export const roleListFeatureKey = 'roleList';

export const roleListReducer = createReducer(
  initialRoleListState,

  on(
    RoleListActions.loadRoleList,
    (state): RoleListState => ({
      ...state,
      loading: true,
      error: undefined,
    })
  ),

  on(
    RoleListActions.loadRoleListSuccess,
    (state, { items }): RoleListState => ({
      ...state,
      loading: false,
      items,
    })
  ),

  on(
    RoleListActions.loadRoleListFailure,
    (state, { error }): RoleListState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
