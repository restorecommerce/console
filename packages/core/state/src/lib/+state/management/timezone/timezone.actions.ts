import { createAction, props } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';
import { ITimezone } from '@console-core/types';

export const timezoneReadRequest = createAction(
  '[TIMEZONE] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const timezoneReadRequestSuccess = createAction(
  '[TIMEZONE] Read success',
  props<{ payload: ITimezone[] }>()
);

export const timezoneReadRequestFail = createAction(
  '[TIMEZONE] Read fail',
  props<{ error: string }>()
);
