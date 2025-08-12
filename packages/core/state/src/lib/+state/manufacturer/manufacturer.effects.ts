import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

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

  manufacturerCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(manufacturerActions.manufacturerCreateRequest),
      switchMap(({ payload }) =>
        this.manufacturerService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.manufacturer?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.manufacturer?.Mutate?.details?.items?.pop()
                ?.payload as IManufacturer;
            return manufacturerActions.manufacturerCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              manufacturerActions.manufacturerCreateFail({
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
          manufacturerActions.manufacturerCreateFail
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
