import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  ENotificationTypes,
  IPriceGroup,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, PriceGroupService } from '../../services';
import { AppFacade } from '../app';

import * as priceGroupActions from './price-group.actions';

@Injectable()
export class PriceGroupEffects {
  priceGroupReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(priceGroupActions.priceGroupReadRequest),
      switchMap(({ payload }) =>
        this.priceGroupService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.price_group?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.catalog?.price_group?.Read?.details?.items || []
            )?.map((item) => item?.payload) as IPriceGroup[];
            return priceGroupActions.priceGroupReadRequestSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              priceGroupActions.priceGroupReadRequestFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  priceGroupCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(priceGroupActions.priceGroupCreateRequest),
      switchMap(({ payload }) =>
        this.priceGroupService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.price_group?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.price_group?.Mutate?.details?.items?.pop()
                ?.payload as IPriceGroup;
            return priceGroupActions.priceGroupCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              priceGroupActions.priceGroupCreateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  priceGroupUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(priceGroupActions.priceGroupUpdateRequest),
      switchMap(({ payload }) =>
        this.priceGroupService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.price_group?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.price_group?.Mutate?.details?.items?.pop()
                ?.payload as IPriceGroup;
            return priceGroupActions.priceGroupUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              priceGroupActions.priceGroupUpdateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  priceGroupCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(priceGroupActions.priceGroupCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'price_group created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.products.children.priceGroups.children.edit.getLink(
              {
                id: payload.id,
              }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  priceGroupUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(priceGroupActions.priceGroupUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'price_group updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  priceGroupRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(priceGroupActions.priceGroupRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.priceGroupService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.price_group?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return priceGroupActions.priceGroupRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(
              priceGroupActions.priceGroupRemoveFail({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  priceGroupRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(priceGroupActions.priceGroupRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'price_group deleted',
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
          priceGroupActions.priceGroupReadRequestFail,
          priceGroupActions.priceGroupCreateFail,
          priceGroupActions.priceGroupUpdateFail,
          priceGroupActions.priceGroupRemoveFail
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
    private readonly priceGroupService: PriceGroupService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
