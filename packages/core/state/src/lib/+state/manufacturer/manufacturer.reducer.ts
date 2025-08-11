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
  )
);

export const manufacturerReducer = (
  state: IManufacturerState | undefined,
  action: Action
) => reducer(state, action);
