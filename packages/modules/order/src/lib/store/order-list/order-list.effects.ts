import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';

import * as OrderListActions from './order-list.actions';
import { mockOrderListItem } from './order-list.mock';

export const loadOrderListOnNavigationEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(routerNavigatedAction),
      filter(({ payload }) =>
        /^\/job-management(\?.*)?$/.test(payload.routerState.url)
      ),
      map(() => OrderListActions.loadOrderList())
    );
  },
  { functional: true }
);

export const loadOrderListEffect = createEffect(
  (actions$ = inject(Actions), _ = inject(Store)) => {
    return actions$.pipe(
      ofType(OrderListActions.loadOrderList),
      map(() => {
        return OrderListActions.loadOrderListSuccess({
          items: [mockOrderListItem],
        });
      })
    );
  },
  { functional: true }
);
