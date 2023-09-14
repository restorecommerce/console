import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { ILocaleState } from '@console-core/types';

import { adapter } from './locale.reducer';

export const selectLocale = createFeatureSelector<ILocaleState>(
  STORE.states.localeState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectLocaleIds = createSelector(selectLocale, selectIds);

export const selectLocaleEntities = createSelector(
  selectLocale,
  selectEntities
);

export const selectAllLocales = createSelector(selectLocale, selectAll);

export const selectLocaleTotal = createSelector(selectLocale, selectTotal);

export const selectError = createSelector(
  selectLocale,
  (state: ILocaleState) => state.error
);

export const selectActionStatus = createSelector(
  selectLocale,
  (state: ILocaleState) => state.actionStatus
);
