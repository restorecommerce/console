import { Action, createReducer, on } from '@ngrx/store';

import { EActionStatus, IObjectUploadState } from '@console-core/types';

import * as objectUploadActions from './object-upload.actions';

export const initialState: IObjectUploadState = {
  upload: null,
  actionStatus: EActionStatus.INIT,
  error: null,
};

const reducer = createReducer<IObjectUploadState>(
  initialState,
  on(
    objectUploadActions.objectUploadRequest,
    (state): IObjectUploadState => ({
      ...state,
      actionStatus: EActionStatus.Loading,
    })
  ),
  on(
    objectUploadActions.objectUploadSuccess,
    (state, { payload }): IObjectUploadState => {
      return {
        ...state,
        error: null,
        upload: payload,
        actionStatus: EActionStatus.Done,
      };
    }
  ),
  on(
    objectUploadActions.objectUploadFail,
    (state, { error }): IObjectUploadState => {
      return {
        ...state,
        upload: null,
        actionStatus: EActionStatus.Failed,
        error,
      };
    }
  ),
  on(objectUploadActions.objectUploadCompleted, (): IObjectUploadState => {
    return initialState;
  })
);

export const objectUploadReducer = (
  state: IObjectUploadState | undefined,
  action: Action
) => reducer(state, action);
