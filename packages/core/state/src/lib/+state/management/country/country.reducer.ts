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
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    countryActions.countryReadRequestSuccess,
    (state, { payload }): ICountryState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    countryActions.countryReadRequestFail,
    (state, { error }): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
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
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    countryActions.countryCreateSuccess,
    (state, { payload }): ICountryState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    countryActions.countryCreateFail,
    (state, { error }): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    countryActions.countryUpdateRequest,
    (state): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    countryActions.countryUpdateSuccess,
    (state, { payload }): ICountryState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    countryActions.countryUpdateFail,
    (state, { error }): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    countryActions.countryRemoveRequest,
    (state): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    countryActions.countryRemoveSuccess,
    (state, { payload }): ICountryState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    countryActions.countryRemoveFail,
    (state, { error }): ICountryState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const countryReducer = (
  state: ICountryState | undefined,
  action: Action
) => reducer(state, action);
