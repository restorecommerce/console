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
  ICurrency,
  TOperationStatus,
} from '@console-core/types';

import { CurrencyService, ErrorHandlingService } from '../../../services';
import { AppFacade } from '../../app';

import * as currencyActions from './currency.actions';

@Injectable()
export class CurrencyEffects {
  currencyReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyActions.currencyReadRequest),
      exhaustMap(({ payload }) =>
        this.currencyService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.currency?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.master_data?.currency?.Read?.details?.items || []
            )?.map((item) => item?.payload) as ICurrency[];
            return currencyActions.currencyReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              currencyActions.currencyReadRequestFail({ error: error.message })
            )
          )
        )
      )
    );
  });

  currencyReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyActions.currencyReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.currencyService
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
                result?.data?.master_data?.currency?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.master_data?.currency?.Read?.details?.items?.pop()
                  ?.payload as ICurrency;
              return currencyActions.currencyReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                currencyActions.currencyReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  currencyCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyActions.currencyCreateRequest),
      switchMap(({ payload }) =>
        this.currencyService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.currency?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.currency?.Mutate?.details?.items?.pop()
                ?.payload as ICurrency;
            return currencyActions.currencyCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(currencyActions.currencyCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  currencyCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(currencyActions.currencyCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'currency created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.management.children.countries.children.edit.getLink(
              { id: payload.id }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  currencyUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyActions.currencyUpdateRequest),
      switchMap(({ payload }) =>
        this.currencyService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.currency?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.currency?.Mutate?.details?.items?.pop()
                ?.payload as ICurrency;
            return currencyActions.currencyUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(currencyActions.currencyUpdateFail({ error: error.message }))
          )
        )
      )
    );
  });

  currencyUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(currencyActions.currencyUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'country updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  currencyRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(currencyActions.currencyRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.currencyService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.currency?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return currencyActions.currencyRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(currencyActions.currencyRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  currencyRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(currencyActions.currencyRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'country deleted',
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
          currencyActions.currencyReadRequestFail,
          currencyActions.currencyReadOneByIdRequestFail,
          currencyActions.currencyCreateFail,
          currencyActions.currencyUpdateFail,
          currencyActions.currencyRemoveFail
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
    private readonly currencyService: CurrencyService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
