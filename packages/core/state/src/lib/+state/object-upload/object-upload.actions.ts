import { createAction, props } from '@ngrx/store';

import { IObjectUpload } from '@console-core/types';

export const objectUploadRequest = createAction(
  '[Upload] Upload request',
  props<{ payload: File }>()
);

export const objectUploadSuccess = createAction(
  '[Upload] Upload success',
  props<{ payload: IObjectUpload }>()
);

export const objectUploadFail = createAction(
  '[Upload] Upload fail',
  props<{ error: string }>()
);
