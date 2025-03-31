import { createFeatureSelector, createSelector } from '@ngrx/store';

import { STORE } from '@console-core/config';
import { IObjectUploadState } from '@console-core/types';

export const selectObjectUpload = createFeatureSelector<IObjectUploadState>(
  STORE.states.objectUploadState
);

export const selectUploadedObject = createSelector(
  selectObjectUpload,
  (state: IObjectUploadState) => state.upload
);

export const selectError = createSelector(
  selectObjectUpload,
  (state: IObjectUploadState) => state.error
);

export const selectActionStatus = createSelector(
  selectObjectUpload,
  (state: IObjectUploadState) => state.actionStatus
);
