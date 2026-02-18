import { createReducer, on } from '@ngrx/store';

import * as IAMUserViewActions from './user-view.actions';
import { IAMUserViewState, initialIAMUserViewState } from './user-view.state';

export const userViewFeatureKey = 'userView';

export const userViewReducer = createReducer(
  initialIAMUserViewState,
  on(
    IAMUserViewActions.enterPage,
    (state, { iamUserId }): IAMUserViewState => ({
      ...state,
      iamUserId,
      loading: true,
      error: null,
    })
  ),
  on(
    IAMUserViewActions.loadIAMUser,
    (state): IAMUserViewState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    IAMUserViewActions.loadIAMUserSuccess,
    (state, { iamUser }): IAMUserViewState => ({
      ...state,
      iamUser,
      loading: false,
    })
  ),
  on(
    IAMUserViewActions.loadIAMUserFailure,
    (state, { error }): IAMUserViewState => ({
      ...state,
      loading: false,
      error,
    })
  ),
  on(
    IAMUserViewActions.leavePage,
    (): IAMUserViewState => initialIAMUserViewState
  )
);
