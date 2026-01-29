import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

import * as OrderListActions from './order-list.actions';
import { OrderRepository } from '../../data/order.repository';
import { of } from 'rxjs';
import { mapOrderToListItem } from '../../models/order-list.mapper';
import { IoRestorecommerceOrderOrder } from '@console-core/graphql';

export const loadOrderListOnNavigationEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(routerNavigatedAction),
      filter(({ payload }) => {
        return /^\/orders(\?.*)?$/.test(payload.routerState.url);
      }),
      map(() => OrderListActions.loadOrderList())
    );
  },
  { functional: true }
);

export const loadOrderListEffect = createEffect(
  (actions$ = inject(Actions), orderRepository = inject(OrderRepository)) => {
    return actions$.pipe(
      ofType(OrderListActions.loadOrderList),
      switchMap(() =>
        orderRepository.list({}).pipe(
          map(({ data }) =>
            OrderListActions.loadOrderListSuccess({
              items: (data.ordering.order.Read?.details?.items || []).map(
                (item) =>
                  mapOrderToListItem(
                    item.payload as IoRestorecommerceOrderOrder
                  )
              ),
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
