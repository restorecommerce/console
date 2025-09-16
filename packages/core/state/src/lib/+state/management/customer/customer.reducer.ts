import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, ICustomerState, ICustomer } from '@console-core/types';

import * as customerActions from './customer.actions';

export const adapter: EntityAdapter<ICustomer> =
  createEntityAdapter<ICustomer>();

export const initialState: ICustomerState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<ICustomerState>(
  initialState,
  on(
    customerActions.customerReadRequest,
    (state): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    customerActions.customerReadRequestSuccess,
    (state, { payload }): ICustomerState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    customerActions.customerReadRequestFail,
    (state, { error }): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    customerActions.customerReadOneByIdRequest,
    (state): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    customerActions.customerReadOneByIdRequestSuccess,
    (state, { payload }): ICustomerState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    customerActions.customerReadOneByIdRequestFail,
    (state, { error }): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    customerActions.setSelectedId,
    (state, { payload }): ICustomerState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    customerActions.customerCreateRequest,
    (state): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    customerActions.customerCreateSuccess,
    (state, { payload }): ICustomerState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    customerActions.customerCreateFail,
    (state, { error }): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    customerActions.customerUpdateRequest,
    (state): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    customerActions.customerUpdateSuccess,
    (state, { payload }): ICustomerState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    customerActions.customerUpdateFail,
    (state, { error }): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    customerActions.customerRemoveRequest,
    (state): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    customerActions.customerRemoveSuccess,
    (state, { payload }): ICustomerState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    customerActions.customerRemoveFail,
    (state, { error }): ICustomerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const customerReducer = (
  state: ICustomerState | undefined,
  action: Action
) => reducer(state, action);
