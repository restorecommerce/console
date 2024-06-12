import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterValueType,
} from '@console-core/graphql';
import {
  ENotificationTypes,
  IOrder,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, OrderService } from '../../services';
import { AppFacade } from '../app';

import * as orderActions from './order.actions';

@Injectable()
export class OrderEffects {
  orderReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.orderReadRequest),
      exhaustMap(({ payload }) =>
        this.orderService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.ordering?.order?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.ordering?.order?.Read?.details?.items || []
            )?.map((item) => item?.payload) as IOrder[];
            return orderActions.orderReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(orderActions.orderReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  orderReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.orderReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.orderService
          .read({
            filters: [
              {
                filters: [
                  {
                    field: 'id',
                    value: payload.id,
                    type: IoRestorecommerceResourcebaseFilterValueType.String,
                    operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                  },
                ],
              },
            ],
            limit: 1,
          })
          .pipe(
            tap((result) => {
              this.errorHandlingService.checkStatusAndThrow(
                result?.data?.ordering?.order?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.ordering?.order?.Read?.details?.items?.pop()
                  ?.payload as IOrder;
              return orderActions.orderReadOneByIdRequestSuccess({ payload });
            }),
            catchError((error: Error) =>
              of(
                orderActions.orderReadOneByIdRequestFail({
                  error: error.message,
                })
              )
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
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.ordering?.order?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.ordering?.order?.Mutate?.details?.items?.pop()
                ?.payload as IOrder;
            return orderActions.orderCreateSuccess({ payload });
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
            type: ENotificationTypes.Success,
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

  orderUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.orderUpdateRequest),
      switchMap(({ payload }) =>
        this.orderService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.ordering?.order?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.ordering?.order?.Mutate?.details?.items?.pop()
                ?.payload as IOrder;
            return orderActions.orderUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(orderActions.orderUpdateFail({ error: error.message }))
          )
        )
      )
    );
  });

  orderUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(orderActions.orderUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'order updated',
            type: ENotificationTypes.Success,
          });
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
        return this.orderService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.ordering?.order?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
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
            type: ENotificationTypes.Success,
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
          orderActions.orderReadOneByIdRequestFail,
          orderActions.orderCreateFail,
          orderActions.orderUpdateFail,
          orderActions.orderRemoveFail
        ),
        tap(({ error }) => {
          this.appFacade.addNotification({
            content: error ?? 'unknown error',
            type: ENotificationTypes.Error,
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
    private readonly orderService: OrderService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
