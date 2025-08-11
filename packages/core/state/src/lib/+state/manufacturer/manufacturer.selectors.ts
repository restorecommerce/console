import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IManufacturer, IManufacturerState } from '@console-core/types';

import { adapter } from './manufacturer.reducer';

export const selectManafacturer = createFeatureSelector<IManufacturerState>(
  STORE.states.manaufacturer
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectManufacturerIds = createSelector(
  selectManafacturer,
  selectIds
);

export const selectManufacturerEntities = createSelector(
  selectManafacturer,
  selectEntities
);

export const selectManufacturerAll = createSelector(
  selectManafacturer,
  selectAll
);

export const selectManufacturerTotal = createSelector(
  selectManafacturer,
  selectTotal
);

export const selectManufacturerSelectedId = createSelector(
  selectManafacturer,
  (state: IManufacturerState) => state.selectedId
);

export const selectManufacturerSelected = createSelector(
  selectManufacturerEntities,
  selectManufacturerSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IManufacturer | null;
  }
);

export const selectActionStatus = createSelector(
  selectManafacturer,
  (state: IManufacturerState) => state.actionStatus
);

export const selectError = createSelector(
  selectManafacturer,
  (state: IManufacturerState) => state.error
);
