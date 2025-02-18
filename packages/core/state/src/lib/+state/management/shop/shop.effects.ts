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

import * as shopActions from './shop.actions';
import {
  OrganizationFacade,
  withLatestOrganizationData,
} from '@console-core/state';

@Injectable()
export class ShopEffects {
  shopReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      withLatestOrganizationData(
        this.organizationFacade,
        shopActions.shopReadRequest.type
      ),
      exhaustMap(([action, organization]) =>
        this.shopService
          .read({
            // ...productActionPayload,
            filters: [
              {
                filters: [
                  {
                    field: 'meta.owners[*].attributes[**].value',
                    operation: IoRestorecommerceResourcebaseFilterOperation.In,
                    value: organization,
                  },
                ],
              },
            ],
          })
          .pipe(
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

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          shopActions.shopReadRequestFail,
          shopActions.shopReadOneByIdRequestFail
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
    private readonly organizationFacade: OrganizationFacade,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
