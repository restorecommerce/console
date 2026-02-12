import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as OrderListActions from './order-list.actions';
import { OrderRepository } from '../../data/order.repository';
import { of } from 'rxjs';
import { mapOrderToListItem } from '../../models/order-list.mapper';

export const loadOrderListEffect = createEffect(
  (actions$ = inject(Actions), orderRepository = inject(OrderRepository)) => {
    return actions$.pipe(
      ofType(OrderListActions.loadOrderList),
      switchMap(() =>
        orderRepository.list().pipe(
          map((orders) =>
            OrderListActions.loadOrderListSuccess({
              items: orders.map((order) => mapOrderToListItem(order)),
            })
          ),
          catchError((error) =>
            of(
              OrderListActions.loadOrderListFailure({
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
