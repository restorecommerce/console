import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of, throwError } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IIoRestorecommerceFulfillmentFulfillmentList,
  IoRestorecommerceFulfillmentFulfillmentState,
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterValueType,
  ModeType,
} from '@console-core/graphql';
import {
  ENotificationTypes,
  IOrder,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, OrderService } from '../../services';
import { AppFacade } from '../app';
import * as fulfillmentActions from '../fulfillment/fulfillment.actions';

import * as orderActions from './order.actions';
import { OrderFacade } from './order.facade';

export const mapOrderToFulfilment = (
  order: IOrder
): IIoRestorecommerceFulfillmentFulfillmentList => {
  const parcelItems = order.items?.map((item) => {
    return {
      productId: item.productId,
      variantId: item.variantId,
      package: item.product?.product?.physical?.variants?.find(
        (variant) => variant.id === item.variantId
      )?.package,
      quantity: item.quantity,
    };
  });

  const orderToFulfillment: IIoRestorecommerceFulfillmentFulfillmentList = {
    items: [
      {
        // id: '',
        customerId: order.customerId,
        shopId: order.shopId,
        userId: order.userId,
        fulfillmentState:
          IoRestorecommerceFulfillmentFulfillmentState.Submitted,
        labels: [],
        packaging: {
          invoiceNumber: '',
          exportType: '',
          exportDescription: '',
          notify: order.notificationEmail,
          parcels: [
            {
              id: '1',
              productId: 'n-fuse-shop000-fp-dhl-domestic',
              variantId: 'n-fuse-shop000-fp-dhl-domestic_max_weight_1kg',
              items: parcelItems,
              price: {
                salePrice: 4.85,
                regularPrice: 4.85,
                sale: false,
              },
              amount: undefined,
              package: {
                sizeInCm: {
                  height: 5.0,
                  length: 5.0,
                  width: 5.0,
                },
                weightInKg: 1.0,
              },
            },
          ],
          // sender: {
          //   address: {
          //     id: 'sender_address',
          //     postcode: '28757',
          //     countryId: 'germany',
          //     locality: 'Bremen',
          //     street: 'Vegesacker Heerstr',
          //     region: 'Bremen',
          //     buildingNumber: '1',
          //     businessAddress: {
          //       name: 'Restorecommerce GmbH',
          //     },
          //   },
          //   contact: {
          //     name: 'bello babakolo',
          //     email: 'fleetbeekay@gmail.com ',
          //     phone: '+2347038405297',
          //   },
          // },
          recipient: {
            address: {
              buildingNumber: order.shippingAddress?.address?.buildingNumber,
              street: order.shippingAddress?.address?.street,
              locality: order.shippingAddress?.address?.locality,
              region: order.shippingAddress?.address?.region,
              postcode: order.shippingAddress?.address?.postcode,
              countryId: order.shippingAddress?.address?.countryId,
            },
            contact: {
              name: order.shippingAddress?.contact?.name,
              email: order.shippingAddress?.contact?.email,
              phone: order.shippingAddress?.contact?.phone,
            },
          },
        },
        references: [
          {
            instanceId: 'urn:restorecommerce:io:order:Order',
            instanceType: order.id,
          },
        ],
        meta: order.meta,
      },
    ],
    mode: ModeType.Create,
  };

  return orderToFulfillment;
};
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

  orderCreateInvoiceRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.orderCreateInvoiceRequest),
      switchMap(({ payload }) =>
        this.orderService.createOrderInvoice(payload).pipe(
          map((result) => {
            const payload = (
              result.data?.ordering.order.CreateInvoice?.details?.items || []
            ).map((item) => item?.payload);

            return orderActions.orderCreateInvoiceSuccess({
              payload: JSON.stringify(payload),
            });
          }),
          catchError((error: Error) =>
            of(orderActions.orderCreateInvoiceFail({ error: error.message }))
          )
        )
      )
    );
  });

  createFulfilmentForSelectedOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(orderActions.createFulfilment),
      concatLatestFrom(() => this.orderFacade.selected$),
      exhaustMap(([, selectedOrder]) => {
        if (!selectedOrder) {
          return throwError(() => new Error('No selected Order'));
        }

        const fulfilmentInput = mapOrderToFulfilment(selectedOrder);
        return of(
          fulfillmentActions.fulfillmentCreateRequest({
            payload: fulfilmentInput,
          })
        );
      })
    );
  });

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          orderActions.orderReadRequestFail,
          orderActions.orderReadOneByIdRequestFail,
          orderActions.orderCreateFail,
          orderActions.orderUpdateFail,
          orderActions.orderRemoveFail,
          orderActions.orderCreateInvoiceFail
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
    private readonly orderFacade: OrderFacade,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
