import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IOrder, IOrderState } from '@console-core/types';

import * as orderActions from './order.actions';

export const adapter: EntityAdapter<IOrder> = createEntityAdapter<IOrder>();

export const initialState: IOrderState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IOrderState>(
  initialState,
  on(
    orderActions.orderReadRequest,
    (state): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
    })
  ),
  on(
    orderActions.orderReadRequestSuccess,
    (state, { payload }): IOrderState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.SUCCEEDED,
      })
  ),
  on(
    orderActions.orderReadRequestFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    orderActions.setSelectedId,
    (state, { payload }): IOrderState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    orderActions.orderCreateRequest,
    (state): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.MUTATING,
    })
  ),
  on(
    orderActions.orderCreateSuccess,
    (state, { payload }): IOrderState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.SUCCEEDED,
      })
  ),
  on(
    orderActions.orderCreateFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    orderActions.orderUpdateRequest,
    (state): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.MUTATING,
    })
  ),
  on(
    orderActions.orderUpdateSuccess,
    (state, { payload }): IOrderState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.SUCCEEDED,
        }
      )
  ),
  on(
    orderActions.orderUpdateFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    orderActions.orderDeleteRequest,
    (state): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.MUTATING,
    })
  ),
  on(
    orderActions.orderDeleteSuccess,
    (state, { payload }): IOrderState =>
      adapter.removeMany(payload.ids, {
        ...state,
        actionStatus: EActionStatus.SUCCEEDED,
      })
  ),
  on(
    orderActions.orderDeleteFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  )
);

export const orderReducer = (state: IOrderState | undefined, action: Action) =>
  reducer(state, action);
