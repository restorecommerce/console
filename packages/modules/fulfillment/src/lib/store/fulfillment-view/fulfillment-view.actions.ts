import { createAction, props } from '@ngrx/store';

import { Fulfillment } from '../../models';

export const enterPage = createAction(
  '[Fulfillment View] Enter Page',
  props<{ fulfillmentId: string }>()
);

export const leavePage = createAction('[Fulfillment View] Leave Page');

export const loadFulfillment = createAction(
  '[Fulfillment View] Load Fulfillment',
  props<{ fulfillmentId: string }>()
);

export const loadFulfillmentSuccess = createAction(
  '[Fulfillment View] Load Fulfillment Success',
  props<{ fulfillment: Fulfillment }>()
);

export const loadFulfillmentFailure = createAction(
  '[Fulfillment View] Load Fulfillment Failure',
  props<{ error: string }>()
);