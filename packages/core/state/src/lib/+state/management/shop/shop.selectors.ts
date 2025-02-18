import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IShop, IShopState } from '@console-core/types';

import { adapter } from './shop.reducer';

export const selectShop = createFeatureSelector<IShopState>(
  STORE.states.shopState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectShopIds = createSelector(selectShop, selectIds);

export const selectShopEntities = createSelector(selectShop, selectEntities);

export const selectShopAll = createSelector(selectShop, selectAll);

export const selectShopTotal = createSelector(selectShop, selectTotal);

export const selectShopSelectedId = createSelector(
  selectShop,
  (state: IShopState) => state.selectedId
);

export const selectShopSelected = createSelector(
  selectShopEntities,
  selectShopSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IShop | null;
  }
);

export const selectActionStatus = createSelector(
  selectShop,
  (state: IShopState) => state.actionStatus
);

export const selectError = createSelector(
  selectShop,
  (state: IShopState) => state.error
);
