import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommercePriceGroupPriceGroupList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IPriceGroup } from '@console-core/types';

export const priceGroupReadRequest = createAction(
  '[PRICE GROUP] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const priceGroupReadRequestSuccess = createAction(
  '[PRICE GROUP] Read success',
  props<{ payload: IPriceGroup[] }>()
);

export const priceGroupReadRequestFail = createAction(
  '[PRICE GROUP] Read fail',
  props<{ error: string }>()
);

export const priceGroupReadOneByIdRequest = createAction(
  '[PRICE GROUP] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const priceGroupReadOneByIdRequestSuccess = createAction(
  '[PRICE GROUP] Read one by id success',
  props<{ payload: IPriceGroup }>()
);

export const priceGroupReadOneByIdRequestFail = createAction(
  '[PRICE GROUP] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[PRICE GROUP] Set selected id',
  props<{ payload: string | null }>()
);

export const priceGroupCreateRequest = createAction(
  '[PRICE GROUP] Price group create request',
  props<{ payload: IIoRestorecommercePriceGroupPriceGroupList }>()
);

export const priceGroupCreateSuccess = createAction(
  '[PRICE GROUP] Price group create success',
  props<{ payload: IPriceGroup }>()
);

export const priceGroupCreateFail = createAction(
  '[PRICE GROUP] Price group create fail',
  props<{ error: string }>()
);

export const priceGroupUpdateRequest = createAction(
  '[PRICE GROUP] Price group update request',
  props<{ payload: IIoRestorecommercePriceGroupPriceGroupList }>()
);

export const priceGroupUpdateSuccess = createAction(
  '[PRICE GROUP] Price group update success',
  props<{ payload: IPriceGroup }>()
);

export const priceGroupUpdateFail = createAction(
  '[PRICE GROUP] Price group update fail',
  props<{ error: string }>()
);

export const priceGroupRemoveRequest = createAction(
  '[PRICE GROUP] Price group remove request',
  props<{ payload: { id: string } }>()
);

export const priceGroupRemoveSuccess = createAction(
  '[PRICE GROUP] Price group remove success',
  props<{ payload: { id: string } }>()
);

export const priceGroupRemoveFail = createAction(
  '[PRICE GROUP] Price group remove fail',
  props<{ error: string }>()
);
