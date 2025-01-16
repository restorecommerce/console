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
  ITax,
  TOperationStatus,
} from '@console-core/types';

import { TaxService, ErrorHandlingService } from '../../../services';
import { AppFacade } from '../../app';

import * as taxActions from './tax.actions';

@Injectable()
export class TaxEffects {
  taxReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taxActions.taxReadRequest),
      exhaustMap(({ payload }) =>
        this.taxService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.tax?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.master_data?.tax?.Read?.details?.items || []
            )?.map((item) => item?.payload) as ITax[];
            return taxActions.taxReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(taxActions.taxReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  taxReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taxActions.taxReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.taxService
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
                result?.data?.master_data?.tax?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.master_data?.tax?.Read?.details?.items?.pop()
                  ?.payload as ITax;
              return taxActions.taxReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                taxActions.taxReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  taxCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taxActions.taxCreateRequest),
      switchMap(({ payload }) =>
        this.taxService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.tax?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.tax?.Mutate?.details?.items?.pop()
                ?.payload as ITax;
            return taxActions.taxCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(taxActions.taxCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  taxCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(taxActions.taxCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'tax created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.management.children.taxes.children.edit.getLink(
              { id: payload.id }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  taxUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taxActions.taxUpdateRequest),
      switchMap(({ payload }) =>
        this.taxService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.tax?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.tax?.Mutate?.details?.items?.pop()
                ?.payload as ITax;
            return taxActions.taxUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(taxActions.taxUpdateFail({ error: error.message }))
          )
        )
      )
    );
  });

  taxUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(taxActions.taxUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'tax updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  taxRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(taxActions.taxRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.taxService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.tax?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return taxActions.taxRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(taxActions.taxRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  taxRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(taxActions.taxRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'tax deleted',
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
          taxActions.taxReadRequestFail,
          taxActions.taxReadOneByIdRequestFail,
          taxActions.taxCreateFail,
          taxActions.taxUpdateFail,
          taxActions.taxRemoveFail
        ),
        tap(({ error }) => {
          this.appFacade.addNotification({
            content: 'unknown error',
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
    private readonly taxService: TaxService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
