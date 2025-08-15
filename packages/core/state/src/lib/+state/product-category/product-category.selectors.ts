import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IProductCategory, IProductCategoryState } from '@console-core/types';

import { adapter } from './product-category.reducer';

export const selectProductCategory =
  createFeatureSelector<IProductCategoryState>(STORE.states.productCategory);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectProductCategoryIds = createSelector(
  selectProductCategory,
  selectIds
);

export const selectProductCategoryEntities = createSelector(
  selectProductCategory,
  selectEntities
);

export const selectProductCategoryAll = createSelector(
  selectProductCategory,
  selectAll
);

export const selectProductCategoryTotal = createSelector(
  selectProductCategory,
  selectTotal
);

export const selectProductCategorySelectedId = createSelector(
  selectProductCategory,
  (state: IProductCategoryState) => state.selectedId
);

export const selectProductCategorySelected = createSelector(
  selectProductCategoryEntities,
  selectProductCategorySelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IProductCategory | null;
  }
);

export const selectActionStatus = createSelector(
  selectProductCategory,
  (state: IProductCategoryState) => state.actionStatus
);

export const selectError = createSelector(
  selectProductCategory,
  (state: IProductCategoryState) => state.error
);
