import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { EActionStatus, IAuthnState } from '@console-core/types';

export const selectAuthn = createFeatureSelector<IAuthnState>(
  STORE.states.authnState
);

export const selectIsAuthenticated = createSelector(
  selectAuthn,
  (state: IAuthnState) => state.isAuthenticated
);

export const selectIsNotAuthenticated = createSelector(
  selectIsAuthenticated,
  (isAuthenticated: boolean) => !isAuthenticated
);

export const selectExpiresIn = createSelector(
  selectAuthn,
  (state: IAuthnState) => state.expiresIn
);

export const selectToken = createSelector(
  selectAuthn,
  (state: IAuthnState) => state.token
);

export const selectIsRequesting = createSelector(
  selectAuthn,
  (state: IAuthnState) => state.actionStatus === EActionStatus.Requesting
);

export const selectActionStatus = createSelector(
  selectAuthn,
  (state: IAuthnState) => state.actionStatus
);

export const selectError = createSelector(
  selectAuthn,
  (state: IAuthnState) => state.error
);
