import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IoRestorecommerceFulfillmentState,
  IoRestorecommerceInvoicePaymentState,
  IoRestorecommerceOrderOrderState,
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
      switchMap(({ payload }) =>
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
            const getRandomDate = () => {
              // Return random date with format '2024-04-30T00:00:00Z' and previous date '2024-04-30T00:00:00Z'
              const date = new Date(
                Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365
              );
              date.setUTCHours(0, 0, 0, 0);
              return `${date.toISOString().split('.')[0]}Z`;
            };

            const demoData: IOrder[] = [
              // Random demo data
              ...Array.from({ length: 40 }, () => ({
                id: `ord_${Math.random().toString(36).substring(2, 10)}`,
                customerId: 'cust_9999',
                shopId: `Shop_${Math.round(Math.random() * 1000)}`,
                userId: 'user_4321',
                orderState:
                  Math.random() > 0.5
                    ? Math.random() > 0.5
                      ? Math.random() > 0.5
                        ? IoRestorecommerceOrderOrderState.Cancelled
                        : IoRestorecommerceOrderOrderState.Created
                      : Math.random() > 0.5
                      ? IoRestorecommerceOrderOrderState.Done
                      : IoRestorecommerceOrderOrderState.InProcess
                    : Math.random() > 0.5
                    ? IoRestorecommerceOrderOrderState.Submitted
                    : IoRestorecommerceOrderOrderState.Withdrawn,
                paymentState:
                  Math.random() > 0.5
                    ? IoRestorecommerceInvoicePaymentState.Unpayed
                    : IoRestorecommerceInvoicePaymentState.Payed,
                fulfillmentState:
                  Math.random() > 0.5
                    ? Math.random() > 0.5
                      ? IoRestorecommerceFulfillmentState.Created
                      : IoRestorecommerceFulfillmentState.Fulfilled
                    : Math.random() > 0.5
                    ? IoRestorecommerceFulfillmentState.InTransit
                    : IoRestorecommerceFulfillmentState.Submitted,
                customerOrderNr: `PO20230801-${Math.random()
                  .toString(36)
                  .substring(2, 10)}`,
                notificationEmail: `notificationEmail_${Math.round(
                  Math.random() * 1000
                )}@restorecommerce.io`,
                meta: {
                  id: 'meta_0002',
                  created: getRandomDate(),
                  modified: getRandomDate(),
                  createdBy: 'system',
                  modifiedBy: 'user_4321',
                },
              })),
            ];
            // Sort by meta.created
            demoData.sort((a, b) => {
              if (a.meta?.created < b.meta?.created) {
                return 1;
              }
              if (a.meta?.created > b.meta?.created) {
                return -1;
              }
              return 0;
            });

            demoData[0].meta = demoData[0].meta = {
              id: 'meta_0001',
              created: '2024-04-08T00:00:00Z',
              modified: '2024-04-08T00:00:00Z',
              createdBy: 'system',
              modifiedBy: 'system',
            };
            return orderActions.orderReadRequestSuccess({
              payload: demoData.concat(payload),
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
