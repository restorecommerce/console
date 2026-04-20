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

/// Actions for fulfilment.

export const fulfillmentSubmitRequest = createAction(
  '[Fulfillment View] Submit Request',
  props<{ fulfillmentId: string }>()
);

export const fulfillmentSubmitSuccess = createAction(
  '[Fulfillment View] Fulfillment Submit Success',
  props<{ fulfillment: Fulfillment }>()
);

export const fulfillmentSubmitFailure = createAction(
  '[Fulfillment View] Fulfillment Submit Failure',
  props<{ error: string }>()
);
