import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IAuthnState } from '@console-core/types';

import * as authnActions from './authn.actions';

export const initialState: IAuthnState = {
  isAuthenticated: false,
  token: null,
  expiresIn: null,
  lastLogin: null,
  actionStatus: EActionStatus.INIT,
  error: null,
};

const reducer = createReducer<IAuthnState>(
  initialState,
  on(
    authnActions.signUpRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    authnActions.signUpSuccess,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    authnActions.signUpFail,
    (state, { error }): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    authnActions.activateRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    authnActions.activateSuccess,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    authnActions.activateFail,
    (state, { error }): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    authnActions.signInRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    authnActions.signInSuccess,
    (state, { payload }): IAuthnState => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    authnActions.signInFail,
    (state, { error }): IAuthnState => ({
      ...state,
      isAuthenticated: false,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    authnActions.passwordRecoveryRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    authnActions.passwordRecoverySuccess,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    authnActions.passwordRecoveryFail,
    (state, { error }): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    authnActions.confirmPasswordRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    authnActions.confirmPasswordSuccess,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    authnActions.confirmPasswordFail,
    (state, { error }): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    authnActions.signOutRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    authnActions.signOutSuccess,
    (state): IAuthnState => ({
      ...state,
      isAuthenticated: false,
      actionStatus: EActionStatus.Succeeded,
    })
  ),
  on(
    authnActions.signOutFail,
    (state, { error }): IAuthnState => ({
      ...state,
      isAuthenticated: false,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    authnActions.resetAuthnState,
    (_): IAuthnState => ({
      ...initialState,
    })
  )
);

export const authnReducer = (state: IAuthnState | undefined, action: Action) =>
  reducer(state, action);
