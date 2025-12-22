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
  IShop,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, ShopService } from '../../../services';
import { AppFacade } from '../../app';
import { OrganizationContextFacade } from '../../organization-context';

import * as shopActions from './shop.actions';

@Injectable()
export class ShopEffects {
  shopReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shopActions.shopReadRequest),
      exhaustMap(({ payload }) =>
        this.shopService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.shop?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.master_data?.shop?.Read?.details?.items || []
            )?.map((item) => item?.payload) as IShop[];
            return shopActions.shopReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(shopActions.shopReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  shopReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shopActions.shopReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.shopService
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
                result?.data?.master_data?.shop?.Read?.details
                  ?.operationStatus as TOperationStatus
              );
            }),
            map((result) => {
              const payload =
                result?.data?.master_data?.shop?.Read?.details?.items?.pop()
                  ?.payload as IShop;
              return shopActions.shopReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                shopActions.shopReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  shopCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shopActions.shopCreateRequest),
      switchMap(({ payload }) =>
        this.shopService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.shop?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.shop?.Mutate?.details?.items?.pop()
                ?.payload as IShop;
            return shopActions.shopCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              shopActions.shopCreateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  shopCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(shopActions.shopCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'shop created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.management.children.shops.children.edit.getLink(
              { id: payload.id }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  shopUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shopActions.shopUpdateRequest),
      switchMap(({ payload }) =>
        this.shopService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.shop?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.master_data?.shop?.Mutate?.details?.items?.pop()
                ?.payload as IShop;
            return shopActions.shopUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(
              shopActions.shopUpdateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  shopUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(shopActions.shopUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'shop updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  shopRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(shopActions.shopRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.shopService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.shop?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return shopActions.shopRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(
              shopActions.shopRemoveFail({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  shopRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(shopActions.shopRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'shop deleted',
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
          shopActions.shopReadRequestFail,
          shopActions.shopReadOneByIdRequestFail,
          shopActions.shopCreateFail,
          shopActions.shopUpdateFail,
          shopActions.shopRemoveFail
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
    private readonly shopService: ShopService,
    private readonly organizationContextFacade: OrganizationContextFacade,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
