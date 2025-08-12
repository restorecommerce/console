import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

// import { ROUTER } from '@console-core/config';
import {
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterValueType,
} from '@console-core/graphql';
import {
  ENotificationTypes,
  IManufacturer,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, ManufacturerService } from '../../services';
import { AppFacade } from '../app';

import * as manufacturerActions from './manufacturer.actions';

@Injectable()
export class ManufacturerEffects {
  manufacturerReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(manufacturerActions.manufacturerReadRequest),
      switchMap(({ payload }) =>
        this.manufacturerService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.manufacturer?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.catalog?.manufacturer?.Read?.details?.items || []
            )?.map((item) => item?.payload) as IManufacturer[];
            return manufacturerActions.manufacturerReadRequestSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              manufacturerActions.manufacturerReadRequestFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  // TODO Note this doesn't get called for now....
  manufacturerReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(manufacturerActions.manufacturerReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.manufacturerService
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
                result?.data?.catalog?.manufacturer?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.catalog?.manufacturer?.Read?.details?.items?.pop()
                  ?.payload as IManufacturer;
              return manufacturerActions.manufacturerReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                manufacturerActions.manufacturerReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          manufacturerActions.manufacturerReadRequestFail,
          manufacturerActions.manufacturerReadOneByIdRequestFail
          // manufacturerActions.manufacturerCreateFail,
          // manufacturerActions.manufacturerUpdateFail,
          // manufacturerActions.manufacturerRemoveFail
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
    private readonly manufacturerService: ManufacturerService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
