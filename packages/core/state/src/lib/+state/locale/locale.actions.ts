import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  IoRestorecommerceLocaleLocale,
} from '@console-core/graphql';

export const localeReadRequest = createAction(
  '[LOCALE] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const localeReadRequestSuccess = createAction(
  '[LOCALE] Read request success',
  props<{ payload: IoRestorecommerceLocaleLocale[] }>()
);

export const localeReadRequestFail = createAction(
  '[LOCALE] Read request fail',
  props<{ error: string }>()
);
