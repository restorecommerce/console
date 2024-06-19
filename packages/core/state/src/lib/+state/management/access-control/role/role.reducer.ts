import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IRole, IRoleState } from '@console-core/types';

import * as roleActions from './role.actions';

export const adapter: EntityAdapter<IRole> = createEntityAdapter<IRole>();

export const initialState: IRoleState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IRoleState>(
  initialState,
  on(
    roleActions.roleReadRequest,
    (state): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    roleActions.roleReadRequestSuccess,
    (state, { payload }): IRoleState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    roleActions.roleReadRequestFail,
    (state, { error }): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    roleActions.roleReadOneByIdRequest,
    (state): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    roleActions.roleReadOneByIdRequestSuccess,
    (state, { payload }): IRoleState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    roleActions.roleReadOneByIdRequestFail,
    (state, { error }): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    roleActions.setSelectedId,
    (state, { payload }): IRoleState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    roleActions.roleCreateRequest,
    (state): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    roleActions.roleCreateSuccess,
    (state, { payload }): IRoleState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    roleActions.roleCreateFail,
    (state, { error }): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    roleActions.roleUpdateRequest,
    (state): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    roleActions.roleUpdateSuccess,
    (state, { payload }): IRoleState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    roleActions.roleUpdateFail,
    (state, { error }): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    roleActions.roleRemoveRequest,
    (state): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    roleActions.roleRemoveSuccess,
    (state, { payload }): IRoleState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    roleActions.roleRemoveFail,
    (state, { error }): IRoleState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const roleReducer = (state: IRoleState | undefined, action: Action) =>
  reducer(state, action);
