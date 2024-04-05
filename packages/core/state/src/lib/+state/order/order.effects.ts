import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
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

  orderCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.orderCreateRequest),
      switchMap(({ payload }) =>
        this.orderService.mutate(payload).pipe(
          map((result) => {
            const data =
              result?.data?.ordering?.order?.Mutate?.details?.items?.[0]
                ?.payload;

            return orderActions.orderCreateSuccess({
              payload: data as IOrder,
            });
          }),
          catchError((error: Error) =>
            of(orderActions.orderCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  orderCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(orderActions.orderCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'order created',
            type: ENotificationTypes.SUCCESS,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.orders.children.edit.getLink({
              id: payload.id,
            })
          );
        })
      );
    },
    { dispatch: false }
  );

  orderRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.orderRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.orderService.delete({ ids: [id] }).pipe(
          map(() => {
            return orderActions.orderRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(orderActions.orderRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  orderRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(orderActions.orderRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'order deleted',
            type: ENotificationTypes.SUCCESS,
          });
        })
      );
    },
    { dispatch: false }
  );

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          orderActions.orderReadRequestFail,
          orderActions.orderCreateFail,
          orderActions.orderUpdateFail,
          orderActions.orderRemoveFail
        ),
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
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly orderService: OrderService
  ) {}
}
