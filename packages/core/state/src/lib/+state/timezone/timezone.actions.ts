import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceTimezoneTimezone,
} from '@console-core/graphql';

export const timezoneReadRequest = createAction(
  '[TIMEZONE] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const timezoneReadRequestSuccess = createAction(
  '[TIMEZONE] Read request success',
  props<{ payload: IoRestorecommerceTimezoneTimezone[] }>()
);

export const timezoneReadRequestFail = createAction(
  '[TIMEZONE] Read request fail',
  props<{ error: string }>()
);
