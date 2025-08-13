import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
  EActionStatus,
  IManufacturer,
  IManufacturerState,
} from '@console-core/types';

import * as manufacturerActions from './manufacturer.actions';

export const adapter: EntityAdapter<IManufacturer> =
  createEntityAdapter<IManufacturer>();

export const initialState: IManufacturerState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IManufacturerState>(
  initialState,
  on(
    manufacturerActions.manufacturerReadRequest,
    (state): IManufacturerState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    manufacturerActions.manufacturerReadRequestSuccess,
    (state, { payload }): IManufacturerState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    manufacturerActions.manufacturerReadRequestFail,
    (state, { error }): IManufacturerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),

  on(
    manufacturerActions.manufacturerReadOneByIdRequest,
    (state): IManufacturerState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    manufacturerActions.manufacturerReadOneByIdRequestSuccess,
    (state, { payload }): IManufacturerState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    manufacturerActions.manufacturerReadOneByIdRequestFail,
    (state, { error }): IManufacturerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    manufacturerActions.setSelectedId,
    (state, { payload }): IManufacturerState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    manufacturerActions.manufacturerCreateRequest,
    (state): IManufacturerState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    manufacturerActions.manufacturerCreateSuccess,
    (state, { payload }): IManufacturerState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    manufacturerActions.manufacturerCreateFail,
    (state, { error }): IManufacturerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    manufacturerActions.manufacturerUpdateRequest,
    (state): IManufacturerState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    manufacturerActions.manufacturerUpdateSuccess,
    (state, { payload }): IManufacturerState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    manufacturerActions.manufacturerUpdateFail,
    (state, { error }): IManufacturerState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const manufacturerReducer = (
  state: IManufacturerState | undefined,
  action: Action
) => reducer(state, action);
