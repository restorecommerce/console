import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { EActionStatus, IAccountState } from '@console-core/types';

export const selectAccount = createFeatureSelector<IAccountState>(
  STORE.states.accountState
);

export const selectProfile = createSelector(
  selectAccount,
  (state: IAccountState) => state.profile
);

export const selectIsLoading = createSelector(
  selectAccount,
  (state: IAccountState) => state.actionStatus === EActionStatus.REQUESTING
);

export const selectActionStatus = createSelector(
  selectAccount,
  (state: IAccountState) => state.actionStatus
);

export const selectError = createSelector(
  selectAccount,
  (state: IAccountState) => state.error
);
