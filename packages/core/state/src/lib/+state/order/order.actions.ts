import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceOrderOrderList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IOrder } from '@console-core/types';

export const orderReadRequest = createAction(
  '[ORDER] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const orderReadRequestSuccess = createAction(
  '[ORDER] Read success',
  props<{ payload: IOrder[] }>()
);

export const orderReadRequestFail = createAction(
  '[ORDER] Read fail',
  props<{ error: string }>()
);

export const orderReadOneByIdRequest = createAction(
  '[ORDER] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const orderReadOneByIdRequestSuccess = createAction(
  '[ORDER] Read one by id success',
  props<{ payload: IOrder }>()
);

export const orderReadOneByIdRequestFail = createAction(
  '[ORDER] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[ORDER] Set selected id',
  props<{ payload: string | null }>()
);

export const orderCreateRequest = createAction(
  '[ORDER] Order create request',
  props<{ payload: IIoRestorecommerceOrderOrderList }>()
);

export const orderCreateSuccess = createAction(
  '[ORDER] Order create success',
  props<{ payload: IOrder }>()
);

export const orderCreateFail = createAction(
  '[ORDER] Order create fail',
  props<{ error: string }>()
);

export const orderUpdateRequest = createAction(
  '[ORDER] Order update request',
  props<{ payload: IIoRestorecommerceOrderOrderList }>()
);

export const orderUpdateSuccess = createAction(
  '[ORDER] Order update success',
  props<{ payload: IOrder }>()
);

export const orderUpdateFail = createAction(
  '[ORDER] Order update fail',
  props<{ error: string }>()
);

export const orderRemoveRequest = createAction(
  '[ORDER] Order remove request',
  props<{ payload: { id: string } }>()
);

export const orderRemoveSuccess = createAction(
  '[ORDER] Order remove success',
  props<{ payload: { id: string } }>()
);

export const orderRemoveFail = createAction(
  '[ORDER] Order remove fail',
  props<{ error: string }>()
);

export const orderCreateInvoiceRequest = createAction(
  '[ORDER] Create an invoice request',
  props<{ payload: string }>()
);

export const orderCreateInvoiceSuccess = createAction(
  '[ORDER] Create an invoice success',
  props<{ payload: string }>()
);

export const orderCreateInvoiceFail = createAction(
  '[ORDER] Create an invoice fail',
  props<{ error: string }>()
);

export const createFulfilment = createAction(
  '[ORDER] Create fulfilment',
  props<{ payload: string }>()
);

export const orderChangeStatusRequest = createAction(
  '[ORDER] Change status request',
  props<{ payload: IIoRestorecommerceOrderOrderList }>()
);

export const orderChangeStatusSuccess = createAction(
  '[ORDER] Change status success',
  props<{ payload: IOrder }>()
);

export const orderChangeStatusFail = createAction(
  '[ORDER] Change status fail',
  props<{ error: string }>()
);
