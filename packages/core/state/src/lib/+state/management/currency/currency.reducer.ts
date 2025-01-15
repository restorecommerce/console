import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, ICurrencyState, ICurrency } from '@console-core/types';

import * as currencyActions from './currency.actions';

export const adapter: EntityAdapter<ICurrency> =
  createEntityAdapter<ICurrency>();

export const initialState: ICurrencyState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<ICurrencyState>(
  initialState,
  on(
    currencyActions.currencyReadRequest,
    (state): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    currencyActions.currencyReadRequestSuccess,
    (state, { payload }): ICurrencyState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    currencyActions.currencyReadRequestFail,
    (state, { error }): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    currencyActions.currencyReadOneByIdRequest,
    (state): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    currencyActions.currencyReadOneByIdRequestSuccess,
    (state, { payload }): ICurrencyState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    currencyActions.currencyReadOneByIdRequestFail,
    (state, { error }): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    currencyActions.setSelectedId,
    (state, { payload }): ICurrencyState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    currencyActions.currencyCreateRequest,
    (state): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    currencyActions.currencyCreateSuccess,
    (state, { payload }): ICurrencyState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    currencyActions.currencyCreateFail,
    (state, { error }): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    currencyActions.currencyUpdateRequest,
    (state): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    currencyActions.currencyUpdateSuccess,
    (state, { payload }): ICurrencyState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    currencyActions.currencyUpdateFail,
    (state, { error }): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    currencyActions.currencyRemoveRequest,
    (state): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    currencyActions.currencyRemoveSuccess,
    (state, { payload }): ICurrencyState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    currencyActions.currencyRemoveFail,
    (state, { error }): ICurrencyState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const currencyReducer = (
  state: ICurrencyState | undefined,
  action: Action
) => reducer(state, action);
