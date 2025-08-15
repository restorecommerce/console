import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IPriceGroup, IPriceGroupState } from '@console-core/types';

import { adapter } from './price-group.reducer';

export const selectPriceGroup = createFeatureSelector<IPriceGroupState>(
  STORE.states.priceGroup
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectPriceGroupIds = createSelector(selectPriceGroup, selectIds);

export const selectPriceGroupEntities = createSelector(
  selectPriceGroup,
  selectEntities
);

export const selectPriceGroupAll = createSelector(selectPriceGroup, selectAll);

export const selectPriceGroupTotal = createSelector(
  selectPriceGroup,
  selectTotal
);

export const selectPriceGroupSelectedId = createSelector(
  selectPriceGroup,
  (state: IPriceGroupState) => state.selectedId
);

export const selectPriceGroupSelected = createSelector(
  selectPriceGroupEntities,
  selectPriceGroupSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IPriceGroup | null;
  }
);

export const selectActionStatus = createSelector(
  selectPriceGroup,
  (state: IPriceGroupState) => state.actionStatus
);

export const selectError = createSelector(
  selectPriceGroup,
  (state: IPriceGroupState) => state.error
);
