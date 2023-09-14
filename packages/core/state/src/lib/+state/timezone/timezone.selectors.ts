import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { ITimezoneState } from '@console-core/types';

import { adapter } from './timezone.reducer';

export const selectTimezone = createFeatureSelector<ITimezoneState>(
  STORE.states.timezoneState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectTimezoneIds = createSelector(selectTimezone, selectIds);

export const selectTimezoneEntities = createSelector(
  selectTimezone,
  selectEntities
);

export const selectAllTimezones = createSelector(selectTimezone, selectAll);

export const selectTimezoneTotal = createSelector(selectTimezone, selectTotal);

export const selectError = createSelector(
  selectTimezone,
  (state: ITimezoneState) => state.error
);

export const selectActionStatus = createSelector(
  selectTimezone,
  (state: ITimezoneState) => state.actionStatus
);
