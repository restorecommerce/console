import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, ICountry, ICountryState } from '@console-core/types';

import * as countryActions from './country.actions';

export const adapter: EntityAdapter<ICountry> = createEntityAdapter<ICountry>();

export const initialState: ICountryState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<ICountryState>(
  initialState,
  on(
    countryActions.countryReadRequest,
    (state): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.REQUESTING,
    })
  ),
  on(
    countryActions.countryReadRequestSuccess,
    (state, { payload }): ICountryState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.SUCCEEDED,
      })
  ),
  on(
    countryActions.countryReadRequestFail,
    (state, { error }): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    countryActions.setSelectedId,
    (state, { payload }): ICountryState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    countryActions.countryCreateRequest,
    (state): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.MUTATING,
    })
  ),
  on(
    countryActions.countryCreateSuccess,
    (state, { payload }): ICountryState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.SUCCEEDED,
      })
  ),
  on(
    countryActions.countryCreateFail,
    (state, { error }): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    countryActions.countryUpdateRequest,
    (state): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.MUTATING,
    })
  ),
  on(
    countryActions.countryUpdateSuccess,
    (state, { payload }): ICountryState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.SUCCEEDED,
        }
      )
  ),
  on(
    countryActions.countryUpdateFail,
    (state, { error }): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  ),
  on(
    countryActions.countryRemoveRequest,
    (state): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.MUTATING,
    })
  ),
  on(
    countryActions.countryRemoveSuccess,
    (state, { payload }): ICountryState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.SUCCEEDED,
      })
  ),
  on(
    countryActions.countryRemoveFail,
    (state, { error }): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  )
);

export const countryReducer = (
  state: ICountryState | undefined,
  action: Action
) => reducer(state, action);
