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
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    orderActions.orderReadRequestSuccess,
    (state, { payload }): IOrderState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    orderActions.orderReadRequestFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    orderActions.orderReadOneByIdRequest,
    (state): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    orderActions.orderReadOneByIdRequestSuccess,
    (state, { payload }): IOrderState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    orderActions.orderReadOneByIdRequestFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
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
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    orderActions.orderCreateSuccess,
    (state, { payload }): IOrderState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    orderActions.orderCreateFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    orderActions.orderUpdateRequest,
    (state): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    orderActions.orderUpdateSuccess,
    (state, { payload }): IOrderState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    orderActions.orderUpdateFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    orderActions.orderRemoveRequest,
    (state): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    orderActions.orderRemoveSuccess,
    (state, { payload }): IOrderState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    orderActions.orderRemoveFail,
    (state, { error }): IOrderState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const orderReducer = (state: IOrderState | undefined, action: Action) =>
  reducer(state, action);
