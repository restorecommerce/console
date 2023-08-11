import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IAppState } from '@console-core/types';

export const selectApp = createFeatureSelector<IAppState>(
  STORE.states.appState
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
