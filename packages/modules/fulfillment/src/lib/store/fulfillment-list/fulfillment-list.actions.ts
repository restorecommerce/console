import { createAction, props } from '@ngrx/store';

import { FulfillmentListItem } from '../../models';

export const loadFulfillmentList = createAction('[Fulfillment List] Load');

export const loadFulfillmentListSuccess = createAction(
  '[Fulfillment List] Load Success',
  props<{ items: FulfillmentListItem[] }>()
);

export const loadFulfillmentListFailure = createAction(
  '[Fulfillment List] Load Failure',
  props<{ error: string }>()
);
