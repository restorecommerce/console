import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IAppState, IAuthnState } from '@console-core/types';

export const selectApp = createFeatureSelector<IAppState>(
  STORE.states.appState
);

export const selectAuthn = createFeatureSelector<IAuthnState>(
  STORE.states.authnState
);

export const selectIsAuthenticated = createSelector(
  selectAuthn,
  (state: IAuthnState) => (state ? state.isAuthenticated : false)
);

export const selectIsNotAuthenticated = createSelector(
  selectIsAuthenticated,
  (isAuthenticated: boolean) => !isAuthenticated
);

export const selectNotifications = createSelector(
  selectApp,
  (state: IAppState) => state.notifications
);

export const selectError = createSelector(
  selectApp,
  (state: IAppState) => state.error
);

export const selectActionStatus = createSelector(
  selectApp,
  (state: IAppState) => state.actionStatus
);
