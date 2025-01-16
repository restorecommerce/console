import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { ITax, ITaxState } from '@console-core/types';

import { adapter } from './tax.reducer';

export const selectTax = createFeatureSelector<ITaxState>(
  STORE.states.taxState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectTaxIds = createSelector(selectTax, selectIds);

export const selectTaxEntities = createSelector(selectTax, selectEntities);

export const selectTaxAll = createSelector(selectTax, selectAll);

export const selectTaxTotal = createSelector(selectTax, selectTotal);

export const selectTaxSelectedId = createSelector(
  selectTax,
  (state: ITaxState) => state.selectedId
);

export const selectTaxSelected = createSelector(
  selectTaxEntities,
  selectTaxSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as ITax | null;
  }
);

export const selectActionStatus = createSelector(
  selectTax,
  (state: ITaxState) => state.actionStatus
);

export const selectError = createSelector(
  selectTax,
  (state: ITaxState) => state.error
);
