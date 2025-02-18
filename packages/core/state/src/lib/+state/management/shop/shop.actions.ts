import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceCountryCountryList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IShop } from '@console-core/types';

export const shopReadRequest = createAction(
  '[SHOP] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const shopReadRequestSuccess = createAction(
  '[SHOP] Read success',
  props<{ payload: IShop[] }>()
);

export const shopReadRequestFail = createAction(
  '[SHOP] Read fail',
  props<{ error: string }>()
);

export const shopReadOneByIdRequest = createAction(
  '[SHOP] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const shopReadOneByIdRequestSuccess = createAction(
  '[SHOP] Read one by id success',
  props<{ payload: IShop }>()
);

export const shopReadOneByIdRequestFail = createAction(
  '[SHOP] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[SHOP] Set selected id',
  props<{ payload: string | null }>()
);

export const shopCreateRequest = createAction(
  '[SHOP] Shop create request',
  props<{ payload: IIoRestorecommerceCountryCountryList }>()
);

export const shopCreateSuccess = createAction(
  '[SHOP] Shop create success',
  props<{ payload: IShop }>()
);

export const shopCreateFail = createAction(
  '[SHOP] Shop create fail',
  props<{ error: string }>()
);

export const shopUpdateRequest = createAction(
  '[SHOP] Shop update request',
  props<{ payload: IIoRestorecommerceCountryCountryList }>()
);

export const shopUpdateSuccess = createAction(
  '[SHOP] Shop update success',
  props<{ payload: IShop }>()
);

export const shopUpdateFail = createAction(
  '[SHOP] Shop update fail',
  props<{ error: string }>()
);

export const shopRemoveRequest = createAction(
  '[SHOP] Shop remove request',
  props<{ payload: { id: string } }>()
);

export const shopRemoveSuccess = createAction(
  '[SHOP] Shop remove success',
  props<{ payload: { id: string } }>()
);

export const shopRemoveFail = createAction(
  '[SHOP] Shop remove fail',
  props<{ error: string }>()
);
