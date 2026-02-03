import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import * as OrderViewActions from './order-view.actions';
import { OrderRepository } from '../../data/order.repository';
import { of } from 'rxjs';
import { Fulfilment, Invoice, mapOrderDto } from '../../models';
import { FulfillmentRepository, InvoiceRepository } from '../../data';

export const loadOrderViewEffect = createEffect(
  (actions$ = inject(Actions), orderRepository = inject(OrderRepository)) => {
    return actions$.pipe(
      ofType(OrderViewActions.enterPage),
      switchMap(({ orderId }) =>
        orderRepository.getOrder(orderId).pipe(
          map((order) =>
            OrderViewActions.loadOrderSuccess({
              order: mapOrderDto(order),
            })
          ),
          catchError((error) =>
            of(
              OrderViewActions.loadOrderFailure({
                error: error.message ?? 'Failed to load orders',
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);

export const loadFulfilmentsEffect = createEffect(
  (
    actions$ = inject(Actions),
    fulfilmentRepo = inject(FulfillmentRepository)
  ) =>
    actions$.pipe(
      ofType(OrderViewActions.loadFulfilments),
      switchMap(({ orderId }) =>
        fulfilmentRepo.getOrderFulfillment(orderId).pipe(
          map((result) =>
            OrderViewActions.loadFulfilmentsSuccess({
              fulfilments: result.map((item) => item as Fulfilment),
            })
          ),
          catchError((error) =>
            of(OrderViewActions.loadFulfilmentsFailure({ error }))
          )
        )
      )
    ),
  { functional: true }
);

export const loadInvoicesEffect = createEffect(
  (actions$ = inject(Actions), invoiceRepo = inject(InvoiceRepository)) =>
    actions$.pipe(
      ofType(OrderViewActions.loadInvoices),
      switchMap(({ orderId }) =>
        invoiceRepo.getOrderInvoice(orderId).pipe(
          map((res) =>
            OrderViewActions.loadInvoicesSuccess({
              invoices: res.map((item) => item as Invoice),
            })
          ),
          catchError((error) =>
            of(OrderViewActions.loadInvoicesFailure({ error }))
          )
        )
      )
    ),
  { functional: true }
);

// Load derived data like fulfilment and invoices for data...
export const orderDetailEnteredEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(OrderViewActions.enterPage),
      mergeMap(({ orderId }) => [
        OrderViewActions.loadFulfilments({ orderId }),
        OrderViewActions.loadInvoices({ orderId }),
      ])
    ),
  { functional: true }
);
