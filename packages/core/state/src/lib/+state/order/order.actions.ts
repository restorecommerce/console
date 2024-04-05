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
