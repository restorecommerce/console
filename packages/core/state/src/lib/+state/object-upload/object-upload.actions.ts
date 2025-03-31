import { createAction, props } from '@ngrx/store';

export const objectUploadRequest = createAction(
  '[Upload] Upload request',
  props<{ payload: File }>()
);

export const objectUploadSuccess = createAction(
  '[Upload] Upload success',
  props<{ payload: { objectName: string; url: string } }>()
);

export const objectUploadFail = createAction(
  '[Upload] Upload fail',
  props<{ error: string }>()
);
