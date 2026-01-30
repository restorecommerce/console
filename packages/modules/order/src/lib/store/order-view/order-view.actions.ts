import { createAction, props } from '@ngrx/store';

import { Order } from '../../models/order.model';

export const enterPage = createAction(
  '[Order View] Enter Page',
  props<{ orderId: string }>()
);

export const leavePage = createAction('[Order View] Leave Page');

export const loadOrder = createAction(
  '[Order View] Load Order',
  props<{ orderId: string }>()
);

export const loadOrderSuccess = createAction(
  '[Order View] Load Order Success',
  props<{ order: Order }>()
);

export const loadOrderFailure = createAction(
  '[Order View] Load Order Failure',
  props<{ error: string }>()
);

export const changeOrderTab = createAction(
  '[Order View] Change Tab',
  props<{ index: number }>()
);

export const cancelOrder = createAction(
  '[Order View] Cancel Order',
  props<{ orderId: string }>()
);

export const createInvoice = createAction(
  '[Order View] Create Invoice',
  props<{ orderId: string }>()
);

export const createFulfilment = createAction(
  '[Order View] Create Fulfilment',
  props<{ orderId: string }>()
);
