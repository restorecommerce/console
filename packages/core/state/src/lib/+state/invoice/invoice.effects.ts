import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  ENotificationTypes,
  IInvoice,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, InvoiceService } from '../../services';
import { AppFacade } from '../app';
import * as CustomerActions from '../management/customer/customer.actions';
import * as IamActions from '../management/iam/iam.actions';
import * as ShopActions from '../management/shop/shop.actions';

import * as invoiceActions from './invoice.actions';

const isInvoiceEdit = (url?: string): url is string =>
  // eslint-disable-next-line no-useless-escape
  !!url && /^\/invoices\/[^/]+\/edit(?:$|[\?#\/])/.test(url);

@Injectable()
export class InvoiceEffects {
  invoiceReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invoiceActions.invoiceReadRequest),
      switchMap(({ payload }) =>
        this.invoiceService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.invoicing?.invoice?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.invoicing?.invoice?.Read?.details?.items || []
            )?.map((item) => item?.payload) as IInvoice[];
            return invoiceActions.invoiceReadRequestSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(invoiceActions.invoiceReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  invoiceCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invoiceActions.invoiceCreateRequest),
      switchMap(({ payload }) =>
        this.invoiceService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.invoicing?.invoice?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.invoicing?.invoice?.Mutate?.details?.items?.pop()
                ?.payload as IInvoice;
            return invoiceActions.invoiceCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(invoiceActions.invoiceCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  invoiceCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(invoiceActions.invoiceCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'invoice created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.invoices.children.edit.getLink({
              id: payload.id,
            })
          );
        })
      );
    },
    { dispatch: false }
  );

  preloadOnEdit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigationAction),
      map((a) => a.payload.routerState?.url as string),
      filter(isInvoiceEdit),
      // eslint-disable-next-line @ngrx/no-multiple-actions-in-effects
      mergeMap(() => [
        CustomerActions.customerReadRequest({ payload: {} }),
        ShopActions.shopReadRequest({ payload: {} }),
        IamActions.userReadRequest({ payload: {} }),
      ])
    );
  });

  preloadOnCreate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigationAction),
      map((a) => a.payload.routerState?.url as string),
      filter((url) => url?.startsWith('/invoices/create')),
      // eslint-disable-next-line @ngrx/no-multiple-actions-in-effects
      mergeMap(() => [
        CustomerActions.customerReadRequest({ payload: {} }),
        ShopActions.shopReadRequest({ payload: {} }),
        IamActions.userReadRequest({ payload: {} }),
      ])
    );
  });

  invoiceUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invoiceActions.invoiceUpdateRequest),
      switchMap(({ payload }) =>
        this.invoiceService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.invoicing?.invoice?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.invoicing?.invoice?.Mutate?.details?.items?.pop()
                ?.payload as IInvoice;
            return invoiceActions.invoiceUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(invoiceActions.invoiceUpdateFail({ error: error.message }))
          )
        )
      )
    );
  });

  invoiceUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(invoiceActions.invoiceUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'invoice updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  invoiceRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invoiceActions.invoiceRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.invoiceService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.invoicing?.invoice?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return invoiceActions.invoiceRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(invoiceActions.invoiceRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  invoiceRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(invoiceActions.invoiceRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'invoice deleted',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  invoicePaymentRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invoiceActions.invoicePaymentStateRequest),
      tap(() => console.log('****Hello world****')),
      switchMap(({ payload }) =>
        this.invoiceService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.invoicing?.invoice?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.invoicing?.invoice?.Mutate?.details?.items?.pop()
                ?.payload as IInvoice;
            return invoiceActions.invoicePaymentStateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(invoiceActions.invoicePaymentStateFail({ error: error.message }))
          )
        )
      )
    );
  });

  invoicePaymentSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(invoiceActions.invoicePaymentStateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'Payment changed',
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
          invoiceActions.invoiceReadRequestFail,
          invoiceActions.invoiceCreateFail,
          invoiceActions.invoiceUpdateFail,
          invoiceActions.invoiceRemoveFail,
          invoiceActions.invoicePaymentStateFail
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
    private readonly invoiceService: InvoiceService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
