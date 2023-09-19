import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { EActionStatus, IAccountState } from '@console-core/types';

export const selectAccount = createFeatureSelector<IAccountState>(
  STORE.states.accountState
);

export const selectUser = createSelector(
  selectAccount,
  (state: IAccountState) => state.user
);

export const selectIsLoading = createSelector(
  selectAccount,
  (state: IAccountState) => state.actionStatus === EActionStatus.REQUESTING
);

export const selectIsUpdating = createSelector(
  selectAccount,
  (state: IAccountState) => state.actionStatus === EActionStatus.UPDATING
);

export const selectIsDeleting = createSelector(
  selectAccount,
  (state: IAccountState) => state.actionStatus === EActionStatus.DELETING
);

export const selectActionStatus = createSelector(
  selectAccount,
  (state: IAccountState) => state.actionStatus
);

export const selectError = createSelector(
  selectAccount,
  (state: IAccountState) => state.error
);
