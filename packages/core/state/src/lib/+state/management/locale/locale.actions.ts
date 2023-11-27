import { createAction, props } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';
import { ILocale } from '@console-core/types';

export const localeReadRequest = createAction(
  '[LOCALE] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const localeReadRequestSuccess = createAction(
  '[LOCALE] Read success',
  props<{ payload: ILocale[] }>()
);

export const localeReadRequestFail = createAction(
  '[LOCALE] Read fail',
  props<{ error: string }>()
);
