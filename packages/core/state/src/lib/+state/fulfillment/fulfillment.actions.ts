import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceFulfillmentFulfillmentList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IFulfillment } from '@console-core/types';

export const fulfillmentReadRequest = createAction(
  '[FULFILLMENT] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const fulfillmentReadRequestSuccess = createAction(
  '[FULFILLMENT] Read success',
  props<{ payload: IFulfillment[] }>()
);

export const fulfillmentReadRequestFail = createAction(
  '[FULFILLMENT] Read fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[FULFILLMENT] Set selected id',
  props<{ payload: string | null }>()
);

export const fulfillmentCreateRequest = createAction(
  '[FULFILLMENT] Fulfillment create request',
  props<{ payload: IIoRestorecommerceFulfillmentFulfillmentList }>()
);

export const fulfillmentCreateSuccess = createAction(
  '[FULFILLMENT] Fulfillment create success',
  props<{ payload: IFulfillment }>()
);

export const fulfillmentCreateFail = createAction(
  '[FULFILLMENT] Fulfillment create fail',
  props<{ error: string }>()
);

export const fulfillmentSubmitRequest = createAction(
  '[FULFILLMENT] Submit request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const fulfillmentSubmitSuccess = createAction(
  '[FULFILLMENT] Fulfillment Submit success',
  props<{ payload: IFulfillment }>()
);

export const fulfillmentSubmitFail = createAction(
  '[FULFILLMENT] Fulfillment Submit fail',
  props<{ error: string }>()
);

export const fulfillmentUpdateRequest = createAction(
  '[FULFILLMENT] Fulfillment update request',
  props<{ payload: IIoRestorecommerceFulfillmentFulfillmentList }>()
);

export const fulfillmentUpdateSuccess = createAction(
  '[FULFILLMENT] Fulfillment update success',
  props<{ payload: IFulfillment }>()
);

export const fulfillmentUpdateFail = createAction(
  '[FULFILLMENT] Fulfillment update fail',
  props<{ error: string }>()
);

export const fulfillmentRemoveRequest = createAction(
  '[FULFILLMENT] Fulfillment remove request',
  props<{ payload: { id: string } }>()
);

export const fulfillmentRemoveSuccess = createAction(
  '[FULFILLMENT] Fulfillment remove success',
  props<{ payload: { id: string } }>()
);

export const fulfillmentRemoveFail = createAction(
  '[FULFILLMENT] Fulfillment remove fail',
  props<{ error: string }>()
);
