import { createAction, props } from '@ngrx/store';

import { Fulfilment, Order, Invoice } from '../../models';

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

export const loadFulfilments = createAction(
  '[Order Detail] Load Fulfilments',
  props<{ orderId: string }>()
);

export const loadFulfilmentsSuccess = createAction(
  '[Order Detail] Load Fulfilments Success',
  props<{ fulfilments: Fulfilment[] }>()
);

export const loadFulfilmentsFailure = createAction(
  '[Order Detail] Load Fulfilments Failure',
  props<{ error: unknown }>()
);

export const createFulfilment = createAction(
  '[Order View] Create Fulfilment',
  props<{ orderId: string }>()
);

export const loadInvoices = createAction(
  '[Order Detail] Load Invoices',
  props<{ orderId: string }>()
);

export const loadInvoicesSuccess = createAction(
  '[Order Detail] Load Invoices Success',
  props<{ invoices: Invoice[] }>()
);

export const loadInvoicesFailure = createAction(
  '[Order Detail] Load Invoices Failure',
  props<{ error: unknown }>()
);

export const createInvoice = createAction(
  '[Order View] Create Invoice',
  props<{ orderId: string }>()
);
