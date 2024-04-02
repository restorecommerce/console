import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { ICountryState } from '@console-core/types';

import { adapter } from './country.reducer';

export const selectCountry = createFeatureSelector<ICountryState>(
  STORE.states.countryState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectCountryIds = createSelector(selectCountry, selectIds);

export const selectCountryEntities = createSelector(
  selectCountry,
  selectEntities
);

export const selectCountryAll = createSelector(selectCountry, selectAll);

export const selectCountryTotal = createSelector(selectCountry, selectTotal);

export const selectCountrySelectedId = createSelector(
  selectCountry,
  (state: ICountryState) => state.selectedId
);

export const selectCountrySelected = createSelector(
  selectCountryEntities,
  selectCountrySelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const selectActionStatus = createSelector(
  selectCountry,
  (state: ICountryState) => state.actionStatus
);

export const selectError = createSelector(
  selectCountry,
  (state: ICountryState) => state.error
);
