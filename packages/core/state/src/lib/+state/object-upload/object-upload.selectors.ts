import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IObjectUploadState } from '@console-core/types';

export const selectApp = createFeatureSelector<IObjectUploadState>(
  STORE.states.objectUploadState
);

export const selectUploadedObject = createSelector(
  selectApp,
  (state: IObjectUploadState) => state.upload
);

export const selectError = createSelector(
  selectApp,
  (state: IObjectUploadState) => state.error
);

export const selectActionStatus = createSelector(
  selectApp,
  (state: IObjectUploadState) => state.actionStatus
);
