import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IUser, IIamState } from '@console-core/types';

import * as userActions from './iam.actions';

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const initialState: IIamState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IIamState>(
  initialState,
  on(
    userActions.userReadRequest,
    (state): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    userActions.userReadRequestSuccess,
    (state, { payload }): IIamState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    userActions.userReadRequestFail,
    (state, { error }): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    userActions.userReadOneByIdRequest,
    (state): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    userActions.userReadOneByIdRequestSuccess,
    (state, { payload }): IIamState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    userActions.userReadOneByIdRequestFail,
    (state, { error }): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    userActions.setSelectedId,
    (state, { payload }): IIamState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    userActions.userCreateRequest,
    (state): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    userActions.userCreateSuccess,
    (state, { payload }): IIamState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    userActions.userCreateFail,
    (state, { error }): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    userActions.userUpdateRequest,
    (state): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    userActions.userUpdateSuccess,
    (state, { payload }): IIamState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    userActions.userUpdateFail,
    (state, { error }): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    userActions.userChangePasswordRequest,
    (state): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    userActions.userChangePasswordSuccess,
    (state): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Succeeded,
    })
  ),
  on(
    userActions.userChangePasswordFail,
    (state, { error }): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    userActions.userRemoveRequest,
    (state): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    userActions.userRemoveSuccess,
    (state, { payload }): IIamState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    userActions.userRemoveFail,
    (state, { error }): IIamState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const iamReducer = (state: IIamState | undefined, action: Action) =>
  reducer(state, action);
