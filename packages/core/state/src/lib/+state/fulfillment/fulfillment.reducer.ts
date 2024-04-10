import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
  EActionStatus,
  IFulfillment,
  IFulfillmentState,
} from '@console-core/types';

import * as fulfillmentActions from './fulfillment.actions';

export const adapter: EntityAdapter<IFulfillment> =
  createEntityAdapter<IFulfillment>();

export const initialState: IFulfillmentState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IFulfillmentState>(
  initialState,
  on(
    fulfillmentActions.fulfillmentReadRequest,
    (state): IFulfillmentState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    fulfillmentActions.fulfillmentReadRequestSuccess,
    (state, { payload }): IFulfillmentState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    fulfillmentActions.fulfillmentReadRequestFail,
    (state, { error }): IFulfillmentState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    fulfillmentActions.setSelectedId,
    (state, { payload }): IFulfillmentState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    fulfillmentActions.fulfillmentCreateRequest,
    (state): IFulfillmentState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    fulfillmentActions.fulfillmentCreateSuccess,
    (state, { payload }): IFulfillmentState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    fulfillmentActions.fulfillmentCreateFail,
    (state, { error }): IFulfillmentState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    fulfillmentActions.fulfillmentUpdateRequest,
    (state): IFulfillmentState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    fulfillmentActions.fulfillmentUpdateSuccess,
    (state, { payload }): IFulfillmentState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    fulfillmentActions.fulfillmentUpdateFail,
    (state, { error }): IFulfillmentState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    fulfillmentActions.fulfillmentRemoveRequest,
    (state): IFulfillmentState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    fulfillmentActions.fulfillmentRemoveSuccess,
    (state, { payload }): IFulfillmentState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    fulfillmentActions.fulfillmentRemoveFail,
    (state, { error }): IFulfillmentState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const fulfillmentReducer = (
  state: IFulfillmentState | undefined,
  action: Action
) => reducer(state, action);
