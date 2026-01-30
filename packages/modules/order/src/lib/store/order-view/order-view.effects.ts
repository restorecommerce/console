import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as OrderViewActions from './order-view.actions';
import { OrderRepository } from '../../data/order.repository';
import { of } from 'rxjs';
import { mapOrderDto } from '../../models';

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
