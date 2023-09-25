import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IAccountState } from '@console-core/types';

import { getUser } from '../../utils';

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
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    accountActions.userFindSuccess,
    (state, { payload }): IAccountState => ({
      ...state,
      user: getUser(payload),
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    accountActions.userFindFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    accountActions.userFindByTokenRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    accountActions.userFindByTokenSuccess,
    (state, { payload }): IAccountState => ({
      ...state,
      user: getUser(payload),
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    accountActions.userFindByTokenFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    accountActions.userMutateRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.UPDATING,
      error: null,
    })
  ),
  on(
    accountActions.userMutateSuccess,
    (state, { payload }): IAccountState => ({
      ...state,
      user: getUser(payload),
      actionStatus: EActionStatus.UPDATED,
      error: null,
    })
  ),
  on(
    accountActions.userMutateFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    accountActions.userChangeEmailRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    accountActions.userChangeEmailSuccess,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    accountActions.userChangeEmailFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    accountActions.userChangePasswordRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    accountActions.userChangePasswordSuccess,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.UPDATED,
      error: null,
    })
  ),
  on(
    accountActions.userChangePasswordFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    accountActions.userDeleteRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.DELETING,
      error: null,
    })
  ),
  on(
    accountActions.userDeleteSuccess,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.DELETED,
      error: null,
    })
  ),
  on(
    accountActions.userDeleteFail,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
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
