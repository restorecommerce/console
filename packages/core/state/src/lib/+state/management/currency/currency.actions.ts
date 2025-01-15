import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceCurrencyCurrencyList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { ICurrency } from '@console-core/types';

export const currencyReadRequest = createAction(
  '[CURRENCY] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const currencyReadRequestSuccess = createAction(
  '[CURRENCY] Read success',
  props<{ payload: ICurrency[] }>()
);

export const currencyReadRequestFail = createAction(
  '[CURRENCY] Read fail',
  props<{ error: string }>()
);

export const currencyReadOneByIdRequest = createAction(
  '[CURRENCY] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const currencyReadOneByIdRequestSuccess = createAction(
  '[CURRENCY] Read one by id success',
  props<{ payload: ICurrency }>()
);

export const currencyReadOneByIdRequestFail = createAction(
  '[CURRENCY] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[CURRENCY] Set selected id',
  props<{ payload: string | null }>()
);

export const currencyCreateRequest = createAction(
  '[CURRENCY] currency create request',
  props<{ payload: IIoRestorecommerceCurrencyCurrencyList }>()
);

export const currencyCreateSuccess = createAction(
  '[CURRENCY] Currency create success',
  props<{ payload: ICurrency }>()
);

export const currencyCreateFail = createAction(
  '[CURRENCY] Currency create fail',
  props<{ error: string }>()
);

export const currencyUpdateRequest = createAction(
  '[CURRENCY] Currency update request',
  props<{ payload: IIoRestorecommerceCurrencyCurrencyList }>()
);

export const currencyUpdateSuccess = createAction(
  '[CURRENCY] Currency update success',
  props<{ payload: ICurrency }>()
);

export const currencyUpdateFail = createAction(
  '[CURRENCY] Currency update fail',
  props<{ error: string }>()
);

export const currencyRemoveRequest = createAction(
  '[CURRENCY] Currency remove request',
  props<{ payload: { id: string } }>()
);

export const currencyRemoveSuccess = createAction(
  '[CURRENCY] Currency remove success',
  props<{ payload: { id: string } }>()
);

export const currencyRemoveFail = createAction(
  '[CURRENCY] Currency remove fail',
  props<{ error: string }>()
);
