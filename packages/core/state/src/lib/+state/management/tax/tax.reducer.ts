import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, ITaxState, ITax } from '@console-core/types';

import * as taxActions from './tax.actions';

export const adapter: EntityAdapter<ITax> = createEntityAdapter<ITax>();

export const initialState: ITaxState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<ITaxState>(
  initialState,
  on(
    taxActions.taxReadRequest,
    (state): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    taxActions.taxReadRequestSuccess,
    (state, { payload }): ITaxState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    taxActions.taxReadRequestFail,
    (state, { error }): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    taxActions.taxReadOneByIdRequest,
    (state): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    taxActions.taxReadOneByIdRequestSuccess,
    (state, { payload }): ITaxState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    taxActions.taxReadOneByIdRequestFail,
    (state, { error }): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    taxActions.setSelectedId,
    (state, { payload }): ITaxState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    taxActions.taxCreateRequest,
    (state): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    taxActions.taxCreateSuccess,
    (state, { payload }): ITaxState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    taxActions.taxCreateFail,
    (state, { error }): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    taxActions.taxUpdateRequest,
    (state): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    taxActions.taxUpdateSuccess,
    (state, { payload }): ITaxState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    taxActions.taxUpdateFail,
    (state, { error }): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    taxActions.taxRemoveRequest,
    (state): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    taxActions.taxRemoveSuccess,
    (state, { payload }): ITaxState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    taxActions.taxRemoveFail,
    (state, { error }): ITaxState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const taxReducer = (state: ITaxState | undefined, action: Action) =>
  reducer(state, action);
