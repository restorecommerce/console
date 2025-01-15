import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { ICurrency, ICurrencyState } from '@console-core/types';

import { adapter } from './currency.reducer';

export const selectCurrency = createFeatureSelector<ICurrencyState>(
  STORE.states.currencyState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectCurrencyIds = createSelector(selectCurrency, selectIds);

export const selectCurrencyEntities = createSelector(
  selectCurrency,
  selectEntities
);

export const selectCurrencyAll = createSelector(selectCurrency, selectAll);

export const selectCurrencyTotal = createSelector(selectCurrency, selectTotal);

export const selectCurrencySelectedId = createSelector(
  selectCurrency,
  (state: ICurrencyState) => state.selectedId
);

export const selectCurrencySelected = createSelector(
  selectCurrencyEntities,
  selectCurrencySelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as ICurrency | null;
  }
);

export const selectActionStatus = createSelector(
  selectCurrency,
  (state: ICurrencyState) => state.actionStatus
);

export const selectError = createSelector(
  selectCurrency,
  (state: ICurrencyState) => state.error
);
