import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { EActionStatus, ISecurityState } from '@console-core/types';

export const selectSecurity = createFeatureSelector<ISecurityState>(
  STORE.states.securityState
);

export const selectIsAuthenticated = createSelector(
  selectSecurity,
  (state: ISecurityState) => state.isAuthenticated
);

export const selectIsNotAuthenticated = createSelector(
  selectIsAuthenticated,
  (isAuthenticated: boolean) => !isAuthenticated
);

export const selectIsLoading = createSelector(
  selectSecurity,
  (state: ISecurityState) => state.actionStatus === EActionStatus.REQUESTING
);

export const selectActionStatus = createSelector(
  selectSecurity,
  (state: ISecurityState) => state.actionStatus
);

export const selectError = createSelector(
  selectSecurity,
  (state: ISecurityState) => state.error
);
