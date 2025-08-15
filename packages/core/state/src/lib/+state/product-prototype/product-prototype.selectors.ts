import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IProductPrototype, IProductPrototypeState } from '@console-core/types';

import { adapter } from './product-prototype.reducer';

export const selectProductPrototype =
  createFeatureSelector<IProductPrototypeState>(STORE.states.productPrototype);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectProductPrototypeIds = createSelector(
  selectProductPrototype,
  selectIds
);

export const selectProductPrototypeEntities = createSelector(
  selectProductPrototype,
  selectEntities
);

export const selectProductPrototypeAll = createSelector(
  selectProductPrototype,
  selectAll
);

export const selectProductPrototypeTotal = createSelector(
  selectProductPrototype,
  selectTotal
);

export const selectProductPrototypeSelectedId = createSelector(
  selectProductPrototype,
  (state: IProductPrototypeState) => state.selectedId
);

export const selectProductPrototypeSelected = createSelector(
  selectProductPrototypeEntities,
  selectProductPrototypeSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IProductPrototype | null;
  }
);

export const selectActionStatus = createSelector(
  selectProductPrototype,
  (state: IProductPrototypeState) => state.actionStatus
);

export const selectError = createSelector(
  selectProductPrototype,
  (state: IProductPrototypeState) => state.error
);
