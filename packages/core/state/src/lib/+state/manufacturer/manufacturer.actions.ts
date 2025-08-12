import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceManufacturerManufacturerList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IManufacturer } from '@console-core/types';

export const manufacturerReadRequest = createAction(
  '[MANUFACTURER] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const manufacturerReadRequestSuccess = createAction(
  '[MANUFACTURER] Read success',
  props<{ payload: IManufacturer[] }>()
);

export const manufacturerReadRequestFail = createAction(
  '[MANUFACTURER] Read fail',
  props<{ error: string }>()
);

export const manufacturerReadOneByIdRequest = createAction(
  '[MANUFACTURER] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const manufacturerReadOneByIdRequestSuccess = createAction(
  '[MANUFACTURER] Read one by id success',
  props<{ payload: IManufacturer }>()
);

export const manufacturerReadOneByIdRequestFail = createAction(
  '[MANUFACTURER] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[MANUFACTURER] Set selected id',
  props<{ payload: string | null }>()
);

export const manufacturerCreateRequest = createAction(
  '[MANUFACTURER] Manufacturer create request',
  props<{ payload: IIoRestorecommerceManufacturerManufacturerList }>()
);

export const manufacturerCreateSuccess = createAction(
  '[MANUFACTURER] Manufacturer create success',
  props<{ payload: IManufacturer }>()
);

export const manufacturerCreateFail = createAction(
  '[MANUFACTURER] Manufacturer create fail',
  props<{ error: string }>()
);

export const manufacturerUpdateRequest = createAction(
  '[MANUFACTURER] Manufacturer update request',
  props<{ payload: IIoRestorecommerceManufacturerManufacturerList }>()
);

export const manufacturerUpdateSuccess = createAction(
  '[MANUFACTURER] Manufacturer update success',
  props<{ payload: IManufacturer }>()
);

export const manufacturerUpdateFail = createAction(
  '[MANUFACTURER] Manufacturer update fail',
  props<{ error: string }>()
);

export const manufacturerRemoveRequest = createAction(
  '[MANUFACTURER] Manufacturer remove request',
  props<{ payload: { id: string } }>()
);

export const manufacturerRemoveSuccess = createAction(
  '[MANUFACTURER] Manufacturer remove success',
  props<{ payload: { id: string } }>()
);

export const manufacturerRemoveFail = createAction(
  '[MANUFACTURER] Manufacturer remove fail',
  props<{ error: string }>()
);
