import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ENotificationTypes, IOrder } from '@console-core/types';

import { OrderService } from '../../services';
import { AppFacade } from '../app';

import * as orderActions from './order.actions';

@Injectable()
export class OrderEffects {
  orderReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.orderReadRequest),
      switchMap(({ payload }) =>
        this.orderService.read(payload).pipe(
          map((result) => {
            const data = result?.data?.ordering?.order?.Read?.details;

            return orderActions.orderReadRequestSuccess({
              payload: (data?.items || []).map(
                (item) => item?.payload
              ) as IOrder[],
            });
          }),
          catchError((error: Error) =>
            of(orderActions.orderReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(orderActions.orderReadRequestFail),
        tap(({ error }) => {
          this.appFacade.addNotification({
            content: error ?? 'unknown error',
            type: ENotificationTypes.ERROR,
          });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly orderService: OrderService
  ) {}
}
