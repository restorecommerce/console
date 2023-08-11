import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IAccountState } from '@console-core/types';

import * as accountActions from './account.actions';

export const initialState: IAccountState = {
  profile: null,
  actionStatus: EActionStatus.INIT,
  error: null,
};

const reducer = createReducer<IAccountState>(
  initialState,
  on(
    accountActions.findUserByTokenRequest,
    (state): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
      error: null,
    })
  ),
  on(
    accountActions.findUserByTokenSuccess,
    (state, { payload: profile }): IAccountState => ({
      ...state,
      profile,
      actionStatus: EActionStatus.SUCCEEDED,
      error: null,
    })
  ),
  on(
    accountActions.findUserByTokenError,
    (state, { error }): IAccountState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  )
);

export const accountReducer = (
  state: IAccountState | undefined,
  action: Action
) => reducer(state, action);
