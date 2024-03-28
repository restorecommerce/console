import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, ILocale, ILocaleState } from '@console-core/types';

import * as localeActions from './locale.actions';

export const adapter: EntityAdapter<ILocale> = createEntityAdapter<ILocale>();

export const initialState: ILocaleState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<ILocaleState>(
  initialState,
  on(
    localeActions.localeReadRequest,
    (state): ILocaleState => ({
      ...state,
      actionStatus: EActionStatus.CREATED,
    })
  ),
  on(
    localeActions.localeReadRequestSuccess,
    (state, { payload }): ILocaleState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.SUCCEEDED,
      })
  ),
  on(
    localeActions.localeReadRequestFail,
    (state, { error }): ILocaleState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  )
);

export const localeReducer = (
  state: ILocaleState | undefined,
  action: Action
) => reducer(state, action);
