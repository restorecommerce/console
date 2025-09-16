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
  ICustomer,
  TOperationStatus,
} from '@console-core/types';

import { CustomerService, ErrorHandlingService } from '../../../services';
import { AppFacade } from '../../app';

import * as customerActions from './customer.actions';

@Injectable()
export class CustomerEffects {
  customerReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerActions.customerReadRequest),
      exhaustMap(({ payload }) =>
        this.customerService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.customer?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.master_data?.customer?.Read?.details?.items || []
            )?.map((item) => item?.payload) as ICustomer[];
            return customerActions.customerReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              customerActions.customerReadRequestFail({ error: error.message })
            )
          )
        )
      )
    );
  });

  customerReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerActions.customerReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.customerService
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
                result?.data?.master_data?.customer?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.master_data?.customer?.Read?.details?.items?.pop()
                  ?.payload as ICustomer;
              return customerActions.customerReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                customerActions.customerReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  customerCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerActions.customerCreateRequest),
      switchMap(({ payload }) =>
        this.customerService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.customer?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.customer?.Mutate?.details?.items?.pop()
                ?.payload as ICustomer;
            return customerActions.customerCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(customerActions.customerCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  customerCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(customerActions.customerCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'customer created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.management.children.currencies.children.edit.getLink(
              { id: payload.id }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  customerUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerActions.customerUpdateRequest),
      switchMap(({ payload }) =>
        this.customerService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.customer?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.customer?.Mutate?.details?.items?.pop()
                ?.payload as ICustomer;
            return customerActions.customerUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(customerActions.customerUpdateFail({ error: error.message }))
          )
        )
      )
    );
  });

  customerUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(customerActions.customerUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'customer updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  customerRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerActions.customerRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.customerService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.customer?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return customerActions.customerRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(customerActions.customerRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  customerRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(customerActions.customerRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'customer deleted',
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
          customerActions.customerReadRequestFail,
          customerActions.customerReadOneByIdRequestFail,
          customerActions.customerCreateFail,
          customerActions.customerUpdateFail,
          customerActions.customerRemoveFail
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
    private readonly customerService: CustomerService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
