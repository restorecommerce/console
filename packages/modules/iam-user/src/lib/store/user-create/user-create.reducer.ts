import { createReducer, on } from '@ngrx/store';

import * as Actions from './user-create.actions';
import {
  initialIamUserCreateState,
  IamUserCreateState,
} from './user-create.state';

export const iamUserCreateFeatureKey = 'userCreate';

export const iamUserCreateReducer = createReducer(
  initialIamUserCreateState,

  on(
    Actions.createUser,
    (state): IamUserCreateState => ({
      ...state,
      loading: true,
      success: false,
      error: null,
    })
  ),

  on(
    Actions.createUserSuccess,
    (state): IamUserCreateState => ({
      ...state,
      loading: false,
      success: true,
    })
  ),

  on(
    Actions.createUserFailure,
    (state, { error }): IamUserCreateState => ({
      ...state,
      loading: false,
      error,
    })
  ),

  on(
    Actions.resetCreateUserState,
    (): IamUserCreateState => initialIamUserCreateState
  )
);
