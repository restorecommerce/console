import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
  EActionStatus,
  IPriceGroup,
  IPriceGroupState,
} from '@console-core/types';

import * as priceGroupActions from './price-group.actions';

export const adapter: EntityAdapter<IPriceGroup> =
  createEntityAdapter<IPriceGroup>();

export const initialState: IPriceGroupState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IPriceGroupState>(
  initialState,
  on(
    priceGroupActions.priceGroupReadRequest,
    (state): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    priceGroupActions.priceGroupReadRequestSuccess,
    (state, { payload }): IPriceGroupState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    priceGroupActions.priceGroupReadRequestFail,
    (state, { error }): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),

  on(
    priceGroupActions.priceGroupReadOneByIdRequest,
    (state): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    priceGroupActions.priceGroupReadOneByIdRequestSuccess,
    (state, { payload }): IPriceGroupState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    priceGroupActions.priceGroupReadOneByIdRequestFail,
    (state, { error }): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    priceGroupActions.setSelectedId,
    (state, { payload }): IPriceGroupState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    priceGroupActions.priceGroupCreateRequest,
    (state): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    priceGroupActions.priceGroupCreateSuccess,
    (state, { payload }): IPriceGroupState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    priceGroupActions.priceGroupCreateFail,
    (state, { error }): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    priceGroupActions.priceGroupUpdateRequest,
    (state): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    priceGroupActions.priceGroupUpdateSuccess,
    (state, { payload }): IPriceGroupState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    priceGroupActions.priceGroupUpdateFail,
    (state, { error }): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    priceGroupActions.priceGroupRemoveRequest,
    (state): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    priceGroupActions.priceGroupRemoveSuccess,
    (state, { payload }): IPriceGroupState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    priceGroupActions.priceGroupRemoveFail,
    (state, { error }): IPriceGroupState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const priceGroupReducer = (
  state: IPriceGroupState | undefined,
  action: Action
) => reducer(state, action);
