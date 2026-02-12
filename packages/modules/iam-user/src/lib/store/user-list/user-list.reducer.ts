import { createReducer, on } from '@ngrx/store';

import * as UserListActions from './user-list.actions';
import { initialUserListState, UserListState } from './user-list.state';

export const userListFeatureKey = 'userList';

export const userListReducer = createReducer(
  initialUserListState,

  on(
    UserListActions.loadUserList,
    (state): UserListState => ({
      ...state,
      loading: true,
      error: undefined,
    })
  ),

  on(
    UserListActions.loadUserListSuccess,
    (state, { items }): UserListState => ({
      ...state,
      loading: false,
      items,
    })
  ),

  on(
    UserListActions.loadUserListFailure,
    (state, { error }): UserListState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
