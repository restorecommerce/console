import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IPolicy, IPolicyState } from '@console-core/types';

import * as policyActions from './policy.actions';

export const adapter: EntityAdapter<IPolicy> = createEntityAdapter<IPolicy>();

export const initialState: IPolicyState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IPolicyState>(
  initialState,
  on(
    policyActions.policyReadRequest,
    (state): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    policyActions.policyReadRequestSuccess,
    (state, { payload }): IPolicyState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    policyActions.policyReadRequestFail,
    (state, { error }): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    policyActions.policyReadOneByIdRequest,
    (state): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    policyActions.policyReadOneByIdRequestSuccess,
    (state, { payload }): IPolicyState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    policyActions.policyReadOneByIdRequestFail,
    (state, { error }): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    policyActions.setSelectedId,
    (state, { payload }): IPolicyState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    policyActions.policyCreateRequest,
    (state): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    policyActions.policyCreateSuccess,
    (state, { payload }): IPolicyState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    policyActions.policyCreateFail,
    (state, { error }): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    policyActions.policyUpdateRequest,
    (state): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    policyActions.policyUpdateSuccess,
    (state, { payload }): IPolicyState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    policyActions.policyUpdateFail,
    (state, { error }): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    policyActions.policyRemoveRequest,
    (state): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    policyActions.policyRemoveSuccess,
    (state, { payload }): IPolicyState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    policyActions.policyRemoveFail,
    (state, { error }): IPolicyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const policyReducer = (
  state: IPolicyState | undefined,
  action: Action
) => reducer(state, action);
