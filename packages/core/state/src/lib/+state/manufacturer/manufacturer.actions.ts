import { createAction, props } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';
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
