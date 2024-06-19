import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IAccountState } from '@console-core/types';

import * as accountActions from './account.actions';

export const initialState: IAccountState = {
  user: null,
  actionStatus: EActionStatus.INIT,
  error: null,
};

const reducer = createReducer<IAccountState>(
  initialState,
  on(
    accountActions.userFindRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    accountActions.userFindSuccess,
    (state, { payload }): IAccountState => ({
      ...state,
      user: payload,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    accountActions.userFindFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    accountActions.userFindByTokenRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    accountActions.userFindByTokenSuccess,
    (state, { payload }): IAccountState => ({
      ...state,
      user: payload,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    accountActions.userFindByTokenFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    accountActions.userMutateRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    accountActions.userMutateSuccess,
    (state, { payload }): IAccountState => ({
      ...state,
      user: payload,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    accountActions.userMutateFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    accountActions.userChangeEmailRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    accountActions.userChangeEmailSuccess,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    accountActions.userChangeEmailFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    accountActions.userConfirmEmailChangeRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    accountActions.userConfirmEmailChangeSuccess,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    accountActions.userConfirmEmailChangeFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    accountActions.userChangePasswordRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    accountActions.userChangePasswordSuccess,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Updated,
      error: null,
    })
  ),
  on(
    accountActions.userChangePasswordFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    accountActions.userRemoveRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
      error: null,
    })
  ),
  on(
    accountActions.userRemoveSuccess,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Succeeded,
      error: null,
    })
  ),
  on(
    accountActions.userRemoveFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    accountActions.resetAccountState,
    (): IAccountState => ({
      ...initialState,
    })
  )
);

export const accountReducer = (
  state: IAccountState | undefined,
  action: Action
) => reducer(state, action);
