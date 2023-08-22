import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IAccountState, IUser } from '@console-core/types';

import * as accountActions from './account.actions';

export const initialState: IAccountState = {
  profile: null,
  actionStatus: EActionStatus.INIT,
  error: null,
};

const userFullName = ({ firstName, lastName }: IUser) =>
  `${firstName} ${lastName}`;

const reducer = createReducer<IAccountState>(
  initialState,
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
    (state, { payload: profile }): IAccountState => ({
      ...state,
      profile: {
        ...profile,
        fullName: profile ? userFullName(profile) : '',
      },
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    accountActions.userFindByTokenError,
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
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    accountActions.userMutateSuccess,
    (state, { payload: profile }): IAccountState => ({
      ...state,
      profile: {
        ...profile,
        fullName: profile ? userFullName(profile) : '',
      },
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    accountActions.userMutateError,
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
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    accountActions.userDeleteSuccess,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    accountActions.userDeleteError,
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
