import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, ISecurityState } from '@console-core/types';

import * as securityActions from './security.actions';

export const initialState: ISecurityState = {
  isAuthenticated: false,
  actionStatus: EActionStatus.INIT,
  error: null,
};

const reducer = createReducer<ISecurityState>(
  initialState,
  on(
    securityActions.login,
    (state): ISecurityState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    securityActions.loginSuccess,
    (state): ISecurityState => ({
      ...state,
      isAuthenticated: true,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    securityActions.loginError,
    (state, { error }): ISecurityState => ({
      ...state,
      isAuthenticated: false,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    securityActions.logout,
    (state): ISecurityState => ({
      ...state,
      isAuthenticated: false,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  )
);

export const securityReducer = (
  state: ISecurityState | undefined,
  action: Action
) => reducer(state, action);
