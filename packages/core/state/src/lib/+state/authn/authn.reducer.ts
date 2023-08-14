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
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    authnActions.signUpSuccess,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    authnActions.signUpError,
    (state, { error }): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    authnActions.activateRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    authnActions.activateSuccess,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    authnActions.activateError,
    (state, { error }): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    authnActions.signInRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    authnActions.signInSuccess,
    (state, { payload }): IAuthnState => ({
      ...state,
      ...payload,
      isAuthenticated: true,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    authnActions.signInError,
    (state, { error }): IAuthnState => ({
      ...state,
      isAuthenticated: false,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    authnActions.passwordRecoveryRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    authnActions.passwordRecoverySuccess,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    authnActions.passwordRecoveryError,
    (state, { error }): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    authnActions.confirmPasswordRequest,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    authnActions.confirmPasswordSuccess,
    (state): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    authnActions.confirmPasswordError,
    (state, { error }): IAuthnState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    authnActions.signOut,
    (state): IAuthnState => ({
      ...state,
      isAuthenticated: false,
      actionStatus: EActionStatus.SUCCEEDED,
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
