import { createReducer, on } from '@ngrx/store';

import * as UserActions from './user-edit.actions';
import { initialState } from './user-edit.state';
import { IamUserEditState } from './user-edit.state';

export const iamUserUpdateFeatureKey = 'iamUserEdit';

export const iamUserEditReducer = createReducer(
  initialState,

  on(
    UserActions.loadUser,
    (state): IamUserEditState => ({
      ...state,
      loading: true,
    })
  ),

  on(
    UserActions.loadUserSuccess,
    (state, { user }): IamUserEditState => ({
      ...state,
      loading: false,
      user,
    })
  ),

  on(
    UserActions.loadUserFailure,
    (state, { error }): IamUserEditState => ({
      ...state,
      loading: false,
      error,
    })
  ),

  on(
    UserActions.updateUser,
    (state): IamUserEditState => ({
      ...state,
      saving: true,
    })
  ),

  on(
    UserActions.updateUserSuccess,
    (state): IamUserEditState => ({
      ...state,
      saving: false,
    })
  ),

  on(
    UserActions.updateUserFailure,
    (state, { error }): IamUserEditState => ({
      ...state,
      saving: false,
      error,
    })
  ),

  on(UserActions.resetUpdateUserState, (): IamUserEditState => initialState)
);
