import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, ITimezone, ITimezoneState } from '@console-core/types';

import * as timezoneActions from './timezone.actions';

export const adapter: EntityAdapter<ITimezone> =
  createEntityAdapter<ITimezone>();

export const initialState: ITimezoneState = adapter.getInitialState({
  selectedId: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<ITimezoneState>(
  initialState,
  on(
    timezoneActions.timezoneReadRequest,
    (state): ITimezoneState => ({
      ...state,
      actionStatus: EActionStatus.CREATED,
    })
  ),
  on(
    timezoneActions.timezoneReadRequestSuccess,
    (state, { payload }): ITimezoneState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.SUCCEEDED,
      })
  ),
  on(
    timezoneActions.timezoneReadRequestFail,
    (state, { error }): ITimezoneState => ({
      ...state,
      actionStatus: EActionStatus.FAILED,
      error,
    })
  )
);

export const timezoneReducer = (
  state: ITimezoneState | undefined,
  action: Action
) => reducer(state, action);
