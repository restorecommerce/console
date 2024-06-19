import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IUser, IIamState } from '@console-core/types';

import { adapter } from './iam.reducer';

export const selectUser = createFeatureSelector<IIamState>(
  STORE.states.iamState
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectUserIds = createSelector(selectUser, selectIds);

export const selectUserEntities = createSelector(selectUser, selectEntities);

export const selectUserAll = createSelector(selectUser, selectAll);

export const selectUserTotal = createSelector(selectUser, selectTotal);

export const selectUserSelectedId = createSelector(
  selectUser,
  (state: IIamState) => state.selectedId
);

export const selectUserSelected = createSelector(
  selectUserEntities,
  selectUserSelectedId,
  (entities, selectedId) => {
    return (
      selectedId && selectedId in entities ? entities[selectedId] : null
    ) as IUser | null;
  }
);

export const selectActionStatus = createSelector(
  selectUser,
  (state: IIamState) => state.actionStatus
);

export const selectError = createSelector(
  selectUser,
  (state: IIamState) => state.error
);
