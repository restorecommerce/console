import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IProduct, IProductState } from '@console-core/types';

import { adapter } from './product.reducer';

export const selectProduct = createFeatureSelector<IProductState>(
  STORE.states.productState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectProductIds = createSelector(selectProduct, selectIds);

export const selectProductEntities = createSelector(
  selectProduct,
  selectEntities
);

export const selectProductAll = createSelector(selectProduct, selectAll);

export const selectProductTotal = createSelector(selectProduct, selectTotal);

export const selectProductSelectedId = createSelector(
  selectProduct,
  (state: IProductState) => state.selectedId
);

export const selectProductSelected = createSelector(
  selectProductEntities,
  selectProductSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IProduct | null;
  }
);

export const selectActionStatus = createSelector(
  selectProduct,
  (state: IProductState) => state.actionStatus
);

export const selectError = createSelector(
  selectProduct,
  (state: IProductState) => state.error
);
