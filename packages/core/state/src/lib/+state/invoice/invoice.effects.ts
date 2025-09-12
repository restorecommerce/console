import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  ENotificationTypes,
  IInvoice,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, InvoiceService } from '../../services';
import { AppFacade } from '../app';

import * as invoiceActions from './invoice.actions';

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
