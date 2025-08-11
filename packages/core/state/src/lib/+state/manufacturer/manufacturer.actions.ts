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
